(() => {
  const cfg = window.HOURS_CONFIG;
  const stores = cfg.stores;

  function convertMilitaryToStandard(time) {
    const [rawH, rawM] = time.split(':');
    let hours = parseInt(rawH, 10);
    const minutes = rawM.padStart(2, '0');
    let ampm = 'am';
    if (hours === 0) hours = 12;
    else if (hours >= 12) {
      ampm = 'pm';
      if (hours > 12) hours -= 12;
    }
    return `${hours}:${minutes}${ampm}`;
  }

  function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay(); // 0–6 (Sun–Sat)
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function renderStoreHours() {
    stores.forEach((store) => {
      const { name, hours, specialHours } = store;
      const storeContainer = document.querySelector(`.${name}`);

      let hoursUL = storeContainer.querySelector('.hours');
      if (!hoursUL) {
        hoursUL = document.createElement('ul');
        hoursUL.className = 'hours';
        const header = document.createElement('li');
        header.innerHTML =
          store.name === 'stateSt'
            ? `<strong>STORE HOURS<br><span class="red">Campus Shipping Center closes &frac12; hour before the store closes.</span></strong>`
            : `<strong>STORE HOURS</strong>`;
        hoursUL.appendChild(header);
        storeContainer.appendChild(hoursUL);
      } else {
        [...hoursUL.querySelectorAll('li:not(:first-child)')].forEach((li) =>
          li.remove()
        );
      }

      const now = new Date();
      const todayName = now.toLocaleDateString('en-US', { weekday: 'long' });
      const weekStart = getWeekStart(now);
      const specialHoursMap = {};

      // Remove existing alert
      const oldAlert = storeContainer.querySelector('.alert');
      if (oldAlert) oldAlert.remove();

      // Special hours handling
      if (specialHours && Array.isArray(specialHours)) {
        const upcomingHours = specialHours.filter(
          ({ date }) => new Date(date) >= new Date().setHours(0, 0, 0, 0)
        );

        if (upcomingHours.length > 0) {
          const alert = document.createElement('div');
          alert.className = 'alert alert-danger';
          const p = document.createElement('p');
          p.className = 'bold';
          p.innerText = 'SPECIAL STORE HOURS';
          const specUL = document.createElement('ul');
          specUL.className = 'hours mb-0';

          upcomingHours.forEach(({ date, open, close }) => {
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
            });
            const showHours = `${convertMilitaryToStandard(open)} – ${convertMilitaryToStandard(close)}`;
            const li = document.createElement('li');
            li.innerHTML = `<span class="hours__day">${formattedDate}:</span><span class="hours__times">${showHours}</span>`;
            specUL.appendChild(li);

            // Only override for the current week
            if (getWeekStart(dateObj).getTime() === weekStart.getTime()) {
              const dayOfWeek = dateObj.toLocaleDateString('en-US', {
                weekday: 'long',
              });
              specialHoursMap[dayOfWeek] = { open, close };
            }
          });

          alert.appendChild(p);
          alert.appendChild(specUL);
          storeContainer.prepend(alert);
        }
      }

      // Render regular + special hours
      hours.forEach(({ day, open: normalOpen, close: normalClose }, idx) => {
        let open = normalOpen;
        let close = normalClose;

        // Apply special hours override if applicable
        if (specialHoursMap[day]) {
          open = specialHoursMap[day].open;
          close = specialHoursMap[day].close;
        }

        const dayLi = document.createElement('li');

        // Closed all day
        if (open === 'closed' || close === 'closed') {
          dayLi.className = 'closed';
          dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">Closed</span>`;
          hoursUL.appendChild(dayLi);
          return;
        }

        const showHours = `${convertMilitaryToStandard(open)} - ${convertMilitaryToStandard(close)}`;
        const [openH, openM] = open.split(':').map(Number);
        const [closeH, closeM] = close.split(':').map(Number);

        const openTime = new Date(now);
        openTime.setHours(openH, openM, 0, 0);
        const closeTime = new Date(now);
        closeTime.setHours(closeH, closeM, 0, 0);

        if (day.toLowerCase() === todayName.toLowerCase()) {
          if (now < openTime) {
            dayLi.className = 'opening';
            dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">Opening at ${convertMilitaryToStandard(open)}</span>`;
          } else if (now >= openTime && now <= closeTime) {
            dayLi.className = 'open';
            dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours} - Open</span>`;
          } else {
            // After hours → show tomorrow’s opening (special or normal)
            const tomorrowIndex = (idx + 1) % hours.length;
            const tomorrow = hours[tomorrowIndex];
            let tomorrowOpen = tomorrow?.open;
            let tomorrowClose = tomorrow?.close;

            // Apply tomorrow’s special hours if applicable
            if (specialHoursMap[tomorrow.day]) {
              tomorrowOpen = specialHoursMap[tomorrow.day].open;
              tomorrowClose = specialHoursMap[tomorrow.day].close;
            }

            let openMsg = '';
            if (tomorrowOpen === 'closed' || tomorrowClose === 'closed') {
              openMsg = 'Closed tomorrow';
            } else {
              openMsg = `Opens tomorrow at ${convertMilitaryToStandard(tomorrowOpen)}`;
            }

            dayLi.className = 'closed';
            dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours} - ${openMsg}</span>`;
          }
        } else {
          dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours}</span>`;
        }

        hoursUL.appendChild(dayLi);
      });
    });
  }

  // Initial render
  renderStoreHours();

  // Refresh every 60 seconds
  setInterval(renderStoreHours, 60 * 1000);
})();
