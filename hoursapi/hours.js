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

async function fetchCSV(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    Papa.parse(data, {
      header: true,
      complete: function (results) {
        const { data } = results;
        // console.log({ data });
        const groupByLocation = {};

        for (const item of data) {
          const location = item.location;
          if (groupByLocation[location]) {
            groupByLocation[location].push(item);
          } else {
            groupByLocation[location] = [item];
          }
        }

        const stores = groupByLocation;
        Object.keys(stores).forEach((store) => {
          const output = document.querySelector(`.${store}`);

          const hoursUL = document.createElement('ul');
          const hoursHeader = document.createElement('li');

          hoursUL.className = 'hours';
          hoursHeader.innerHTML = '<strong>NORMAL STORE HOURS</strong>';
          hoursUL.appendChild(hoursHeader);

          stores[store].map((store) => {
            const { day, open, close } = store;
            let storeClosed = false;
            let showHours;
            if (open === 'closed' || close === 'closed') {
              storeClosed = true;
              showHours = 'Closed';
            } else {
              showHours = `${convertMilitaryToStandard(open)}-${convertMilitaryToStandard(close)}`;
            }
            const dayLi = document.createElement('li');
            if (storeClosed) {
              dayLi.className = 'closed';
            }
            dayLi.innerHTML = `<span class="hours__day">${day}</span><span class="hours__times">${showHours}</span>`;
            hoursUL.appendChild(dayLi);
          });
          output.appendChild(hoursUL);
        });
      },
    });
  } catch (error) {
    console.error('Error fetching CSV: ', error);
  }
}
