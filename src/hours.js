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
    // Returns Sunday of the week
    const d = new Date(date);
    const day = d.getDay(); // 0 (Sun) - 6 (Sat)
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  stores.forEach((store) => {
    const { name, hours, specialHours } = store;
    const storeContainer = document.querySelector(`.${name}`);
    const hoursUL = document.createElement('ul');
    hoursUL.className = 'hours';
    const hoursHeader = document.createElement('li');
    if (store.name === 'stateSt') {
      hoursHeader.innerHTML = `<strong>STORE HOURS<br><span class="red">Campus Shipping Center closes &frac12; hour before the store closes.</span></strong>`;
    } else {
      hoursHeader.innerHTML = `<strong>STORE HOURS</strong>`;
    }
    hoursUL.appendChild(hoursHeader);

    const now = new Date();
    const todayName = now.toLocaleDateString('en-US', { weekday: 'long' });
    const weekStart = getWeekStart(now);

    // Map special hours for alert and optional weekly override
    const specialHoursMap = {};

    if (specialHours && Array.isArray(specialHours)) {
      const upcomingHours = specialHours.filter(
        ({ date }) => new Date(date) >= new Date().setHours(0, 0, 0, 0)
      );

      // Build alert box
      if (upcomingHours.length > 0) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger';
        const p = document.createElement('p');
        p.className = 'bold';
        p.innerText = 'SPECIAL STORE HOURS';
        const specUL = document.createElement('ul');
        specUL.className = 'hours mb-0';

        upcomingHours.forEach(({ date, open, close }) => {
          const showHours = `${convertMilitaryToStandard(open)} – ${convertMilitaryToStandard(close)}`;
          const dateObj = new Date(date);
          const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
          });

          const li = document.createElement('li');
          li.innerHTML = `<span class="hours__day">${formattedDate}:</span><span class="hours__times">${showHours}</span>`;
          specUL.appendChild(li);

          // Only override main list if special hour is in current week
          if (getWeekStart(dateObj).getTime() === weekStart.getTime()) {
            const dayOfWeek = dateObj.toLocaleDateString('en-US', {
              weekday: 'long',
            });
            specialHoursMap[dayOfWeek] = { open, close };
          }
        });

        alert.appendChild(p);
        alert.appendChild(specUL);
        storeContainer.appendChild(alert);
      }
    }

    // if (store.name === 'stateSt') {
    //   const p = document.createElement('p');
    //   p.className = 'red bold mb-0';
    //   p.innerHTML = `Campus Shipping Center closes &frac12; hour before the store closes.`;
    //   storeContainer.appendChild(p);
    // }

    // Render normal hours (with overrides for current week special hours)
    hours.forEach(({ day, open: normalOpen, close: normalClose }) => {
      let open = normalOpen;
      let close = normalClose;

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

      if (day.toLowerCase() === todayName.toLowerCase()) {
        const [openH, openM] = open.split(':').map(Number);
        const [closeH, closeM] = close.split(':').map(Number);

        const openTime = new Date(now);
        openTime.setHours(openH, openM, 0, 0);

        const closeTime = new Date(now);
        closeTime.setHours(closeH, closeM, 0, 0);

        if (now < openTime) {
          dayLi.className = 'opening';
          dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">Opening at ${convertMilitaryToStandard(open)}</span>`;
        } else if (now >= openTime && now <= closeTime) {
          dayLi.className = 'open';
          dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours} - Open</span>`;
        } else {
          dayLi.className = 'closed';
          dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours} - Closed</span>`;
        }
      } else {
        dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours}</span>`;
      }

      hoursUL.appendChild(dayLi);
    });

    storeContainer.appendChild(hoursUL);
  });
})();
