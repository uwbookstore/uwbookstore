(() => {
  const cfg = window.HOURS_CONFIG;
  const stores = cfg.stores || [];

  // --- Helpers ---
  const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function toYMD(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // Parse 'YYYY-MM-DD' into a local Date at midnight (NOT UTC)
  function parseLocalDate(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.split('-').map(Number);
    if (parts.length < 3) return null;
    return new Date(parts[0], parts[1] - 1, parts[2], 0, 0, 0, 0);
  }

  function convertToStandardTime(hours, minutes) {
    if (hours == null || minutes == null) return 'Closed';
    let h = hours;
    const m = String(minutes).padStart(2, '0');
    const ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return `${h}:${m}${ampm}`;
  }

  function getStartOfWeekLocal(date) {
    const d = new Date(date);
    const day = d.getDay(); // 0..6
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  // Return date in current week corresponding to weekday name
  function dateForWeekdayInSameWeek(weekStartDate, weekdayName) {
    const idx = WEEKDAYS.indexOf(weekdayName);
    if (idx === -1) return null;
    const d = new Date(weekStartDate);
    d.setDate(d.getDate() + idx);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  // --- Main render ---
  function renderStoreHours() {
    const now = new Date();
    const todayLocalMidnight = new Date(now);
    todayLocalMidnight.setHours(0, 0, 0, 0);
    const weekStart = getStartOfWeekLocal(now);

    stores.forEach((store) => {
      const { location, regularHours = {}, specialHours = [] } = store;
      const storeContainer = document.querySelector(`.${location}`);
      if (!storeContainer) return;

      // Ensure hours UL exists (header kept)
      let hoursUL = storeContainer.querySelector('.hours');
      if (!hoursUL) {
        hoursUL = document.createElement('ul');
        hoursUL.className = 'hours';
        const header = document.createElement('li');
        header.innerHTML =
          location === 'stateSt'
            ? `<strong>STORE HOURS<br><span class="red">Campus Shipping Center closes &frac12; hour before the store closes.</span></strong>`
            : `<strong>STORE HOURS</strong>`;
        hoursUL.appendChild(header);
        storeContainer.appendChild(hoursUL);
      } else {
        // remove old list items (keep header)
        [...hoursUL.querySelectorAll('li:not(:first-child)')].forEach((li) =>
          li.remove()
        );
      }

      // Remove old alert
      const oldAlert = storeContainer.querySelector('.alert');
      if (oldAlert) oldAlert.remove();

      // --- Build specialHoursMap keyed by local YYYY-MM-DD ---
      const specialHoursMap = {}; // key: 'YYYY-MM-DD' => { openTime, closeTime, original }

      // Normalize incoming specialHours: accept either openTime/closeTime or open/close shape
      specialHours.forEach((s) => {
        const parsed = parseLocalDate(s.date || s.dateTime || s.datetime);
        if (!parsed) return;
        const key = toYMD(parsed);
        // Support both {openTime:{hours,minutes}} or legacy {open:{hours,minutes}}
        const openTime = s.openTime ?? s.open ?? null;
        const closeTime = s.closeTime ?? s.close ?? null;
        specialHoursMap[key] = { openTime, closeTime, original: s };
      });

      // --- Build upcoming specials list for alert (all upcoming local dates) ---
      const upcomingSpecialDates = Object.keys(specialHoursMap)
        .map((k) => ({
          dateStr: k,
          dateObj: parseLocalDate(k),
          ...specialHoursMap[k],
        }))
        .filter((item) => item.dateObj >= todayLocalMidnight)
        .sort((a, b) => a.dateObj - b.dateObj);

      if (upcomingSpecialDates.length > 0) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger';
        const p = document.createElement('p');
        p.className = 'bold';
        p.innerText = 'SPECIAL STORE HOURS';
        const scrollContainer = document.createElement('div');
        scrollContainer.className = 'scroll-alert';
        const specUL = document.createElement('ul');
        specUL.className = 'hours mb-0';

        upcomingSpecialDates.forEach(
          ({ dateStr, dateObj, openTime, closeTime }) => {
            const formattedDate = dateObj.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
            });
            const openStr = convertToStandardTime(
              openTime?.hours,
              openTime?.minutes
            );
            const closeStr = convertToStandardTime(
              closeTime?.hours,
              closeTime?.minutes
            );
            const li = document.createElement('li');
            const showHours =
              openStr === 'Closed' || closeStr === 'Closed'
                ? 'Closed'
                : `${openStr} - ${closeStr}`;
            li.innerHTML = `<span class="hours__day">${formattedDate}:</span><span class="hours__times">${showHours}</span>`;

            // mark current-week specials visually
            const wkStartForSpecial = getStartOfWeekLocal(dateObj);
            if (wkStartForSpecial.getTime() === weekStart.getTime()) {
              li.classList.add('current-week-special');
              // optionally you could also add 'today-special' if dateObj equals todayLocalMidnight
              if (dateObj.getTime() === todayLocalMidnight.getTime())
                li.classList.add('today-special');
            }

            specUL.appendChild(li);
          }
        );

        alert.appendChild(p);
        alert.appendChild(scrollContainer);
        scrollContainer.appendChild(specUL);
        storeContainer.prepend(alert);
      }

      // --- Render regular hours (override only when a special exists for that actual date in this week) ---
      const periods = regularHours.periods || [];
      // For convenience build a map dayName -> period index (first matching period) and date for that day in this week
      const dayToPeriodIndex = {};
      periods.forEach((p, i) => {
        if (p && p.openDay) dayToPeriodIndex[p.openDay] = i;
      });

      periods.forEach((period, idx) => {
        const { openDay, openTime, closeTime } = period;
        const li = document.createElement('li');

        // Determine the calendar date (local) in this week that corresponds to openDay
        const periodDate = dateForWeekdayInSameWeek(weekStart, openDay);
        const periodDateKey = toYMD(periodDate);

        // If a special exists for that exact date (in specialHoursMap), use it
        const specialForThisPeriod = specialHoursMap[periodDateKey];

        const oTime = specialForThisPeriod?.openTime ?? openTime;
        const cTime = specialForThisPeriod?.closeTime ?? closeTime;

        const openStr = convertToStandardTime(oTime?.hours, oTime?.minutes);
        const closeStr = convertToStandardTime(cTime?.hours, cTime?.minutes);
        const showHours =
          openStr === 'Closed' || closeStr === 'Closed'
            ? 'Closed'
            : `${openStr} - ${closeStr}`;

        // If closed all day
        if (openStr === 'Closed' || closeStr === 'Closed') {
          li.className = 'closed';
          li.innerHTML = `<span class="hours__day">${openDay}</span><span class="hours__times">Closed</span>`;
          hoursUL.appendChild(li);
          return;
        }

        // If this period's date is today, show dynamic status (uses the specialForThisPeriod if it exists for today)
        if (periodDateKey === toYMD(todayLocalMidnight)) {
          const openDt = new Date(now);
          openDt.setHours(oTime.hours, oTime.minutes, 0, 0);
          const closeDt = new Date(now);
          closeDt.setHours(cTime.hours, cTime.minutes, 0, 0);

          if (now < openDt) {
            li.className = 'opening';
            li.innerHTML = `<span class="hours__day">${openDay}</span><span class="hours__times">Opening at ${openStr}</span>`;
          } else if (now >= openDt && now <= closeDt) {
            li.className = 'open';
            li.innerHTML = `<span class="hours__day">${openDay}</span><span class="hours__times">${showHours} - Open</span>`;
          } else {
            // after hours → find tomorrow's date (periodDate + 1 day)
            const tomorrowDate = new Date(periodDate);
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);
            const tomorrowKey = toYMD(tomorrowDate);

            // Find tomorrow special if exists; otherwise find regular period for that weekday in this week
            const specialTomorrow = specialHoursMap[tomorrowKey];
            let tOpenTime = specialTomorrow?.openTime;
            if (!tOpenTime) {
              // find which weekday name tomorrow is, and the period for that day
              const tomorrowWeekdayName = WEEKDAYS[tomorrowDate.getDay()];
              const tomorrowPeriod = periods.find(
                (p) => p.openDay === tomorrowWeekdayName
              );
              tOpenTime = tomorrowPeriod?.openTime;
            }

            const tOpenStr = convertToStandardTime(
              tOpenTime?.hours,
              tOpenTime?.minutes
            );
            li.className = 'closed';
            li.innerHTML = `<span class="hours__day">${openDay}</span><span class="hours__times">${showHours} - Opens tomorrow at ${tOpenStr}</span>`;
          }
        } else {
          // non-today: just show the hours (with special override if present for that date)
          li.innerHTML = `<span class="hours__day">${openDay}</span><span class="hours__times">${showHours}</span>`;
        }

        hoursUL.appendChild(li);
      });
    });
  }

  // initial render + refresh
  renderStoreHours();
  setInterval(renderStoreHours, 60 * 1000);
})();
