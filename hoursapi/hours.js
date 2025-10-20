(() => {
  const cfg = window.HOURS_CONFIG;
  const stores = cfg.stores;

  function convertMilitaryToStandard(time) {
    const parts = time.split(':');
    let hours = parseInt(parts[0], 10);
    const minutes = parts[1];

    let ampm = 'am';

    // Handle midnight (00:xx)
    if (hours === 0) {
      hours = 12;
    }
    // Handle PM hours (13:xx to 23:xx)
    else if (hours >= 12) {
      ampm = 'pm';
      if (hours > 12) {
        hours -= 12;
      }
    }

    const formattedMinutes = minutes.padStart(2, '0');

    return `${hours}:${formattedMinutes}${ampm}`;
  }

  stores.forEach((store) => {
    const { name, hours, specialHours } = store;
    const storeContainer = document.querySelector(`.${name}`);
    const hoursUL = document.createElement('ul');
    hoursUL.className = 'hours';
    const hoursHeader = document.createElement('li');
    hoursHeader.innerHTML = `<strong>NORMAL STORE HOURS</strong>`;
    hoursUL.appendChild(hoursHeader);

    if (specialHours && Array.isArray(specialHours)) {
      const now = new Date();

      // Filter only future (or current) special hours
      const upcomingHours = store.specialHours.filter(({ date }) => {
        const eventDate = new Date(date);
        // keep same-day and future events
        return eventDate >= now.setHours(0, 0, 0, 0);
      });

      // Only show alert if there are valid upcoming special hours
      if (upcomingHours.length > 0) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger';

        const p = document.createElement('p');
        p.className = 'bold';
        p.innerText = 'SPECIAL STORE HOURS (see normal hours below)';

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
        });

        alert.appendChild(p);
        alert.appendChild(specUL);
        storeContainer.appendChild(alert);
      }
    }

    if (store.name === 'stateSt') {
      const p = document.createElement('p');
      p.className = 'red bold';
      p.innerHTML = `Campus Shipping Center closes &frac12; hour before the store closes.`;
      storeContainer.appendChild(p);
    }

    hours.forEach((weekday) => {
      const { day, open, close } = weekday;
      const dayLi = document.createElement('li');

      // Handle fully closed days
      if (open === 'closed' || close === 'closed') {
        dayLi.className = 'closed';
        dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">Closed</span>`;
        hoursUL.appendChild(dayLi);
        return;
      }

      const showHours = `${convertMilitaryToStandard(open)} - ${convertMilitaryToStandard(close)}`;
      const now = new Date();
      const todayName = now.toLocaleDateString('en-US', { weekday: 'long' });

      // Only apply special logic for the current day
      if (day.toLowerCase() === todayName.toLowerCase()) {
        // Parse today's open and close times into Date objects
        const [openH, openM] = open.split(':').map(Number);
        const [closeH, closeM] = close.split(':').map(Number);

        const openTime = new Date(now);
        openTime.setHours(openH, openM, 0, 0);

        const closeTime = new Date(now);
        closeTime.setHours(closeH, closeM, 0, 0);

        if (now < openTime) {
          // Before opening
          dayLi.className = 'closed';
          dayLi.innerHTML = `
            <span class="hours__day">${day}</span><span class="hours__times">Opening at ${convertMilitaryToStandard(open)}</span>
          `;
        } else if (now >= openTime && now <= closeTime) {
          // During open hours
          dayLi.className = 'open';
          dayLi.innerHTML = `
            <span class="hours__day">${day}</span><span class="hours__times">${showHours} - Open</span>
          `;
        } else {
          // After hours
          dayLi.className = 'closed';
          dayLi.innerHTML = `
            <span class="hours__day">${day}</span><span class="hours__times">${showHours} - Closed</span>
          `;
        }
      } else {
        // All other days: normal display
        dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours}</span>`;
      }

      hoursUL.appendChild(dayLi);
    });
    storeContainer.appendChild(hoursUL);
  });
})();
