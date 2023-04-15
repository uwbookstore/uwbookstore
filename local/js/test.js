const hours = document.getElementById('#hours')

function getHours(location) {
  const url = `http://localhost:8000/api/v1/locations/${location}`;
  fetch(url, {
    method: 'GET',
    headers: {}
  })
  .then(function(response) {
    // console.log(response)
    return response.json();
  })
  .then(function(res) {
    const { data: { opening_hours }} = res;

    let htmlContainer = document.querySelector(`.${location}`);

    const date = new Date();
    const d = date.getDay();
    const name = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][d];

    if (location === 'statestreet') {
      htmlContainer.innerHTML = `<div class="red bold">Campus Shipping Center closes &frac12; hour before the store closes.</div>`;
    }
    htmlContainer.innerHTML += `
    <ul class="hours">
    <li>REGULAR HOURS</li>
    ${opening_hours.weekday_text
      .map((day) => {
        const [dy, ...rest] = day.split(':');
        const hours = rest.join(':');
        if (dy === name && opening_hours.open_now) {
          return `<li class="open"><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span> - open</li>`;
        }
        if (dy === name && !opening_hours.open_now) {
          return `<li class="closed"><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span> - closed</li>`;
        }
        if (day.includes('Closed')) {
          return `<li class="closed"><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span></li>`;
        }
        return `<li><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span></li>`;
      })
      .join('')}
    </ul>`;

  })
}

getHours('statestreet');
// getHours('hilldale');
// getHours('hslc');
// getHours('brookfield');
// getHours('warehouse');
