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

  stores.forEach((store, i) => {
    const { name, hours } = store;
    const storeContainer = document.querySelector(`.${name}`);
    const hoursUL = document.createElement('ul');
    hoursUL.className = 'hours';

    hours.forEach((weekday) => {
      const { day, open, close } = weekday;

      let storeClosed = false;
      let showHours;
      if (open === 'closed' || close === 'closed') {
        storeClosed = true;
        showHours = 'Closed';
      } else {
        showHours = `${convertMilitaryToStandard(open)} - ${convertMilitaryToStandard(close)}`;
      }
      const dayLi = document.createElement('li');
      if (storeClosed) {
        dayLi.className = 'closed';
      }
      dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours}</span>`;
      hoursUL.appendChild(dayLi);
    });
    storeContainer.appendChild(hoursUL);
  });
})();
