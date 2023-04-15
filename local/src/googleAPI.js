/* eslint-disable camelcase */
// import "babel-polyfill";
const API_KEY = "AIzaSyA3UHRbXzJLu65Z8YgOWAeVKPWQ06sX0RY";

function getHours(place_id, store) {
  const url = `https://desolate-harbor-70769.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${API_KEY}&fields=name,rating,adr_address,opening_hours`;
  // const url = `https://desolate-harbor-70769.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${API_KEY}&fields=opening_hours`;
  fetch(url, {
    method: "get",
    headers: {},
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // const { opening_hours, rating } = data.result;
      const { opening_hours, rating } = data.result;
      console.log({ opening_hours, rating });

      const hmtlContainer = document.querySelector(`.${store}`);

      const date = new Date();
      const d = date.getDay();
      const name = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][d];
      // <span class="rating">${rating}/5</span>
      if (store === "stateSt") {
        hmtlContainer.innerHTML = `<div class="red bold">Campus Shipping Center closes &frac12; hour before the store closes.</div>`;
      }
      hmtlContainer.innerHTML += `
        <ul class="hours">
        <li>REGULAR HOURS</li>
        ${opening_hours.weekday_text
          .map((day) => {
            const [dy, ...rest] = day.split(":");
            const hours = rest.join(":");
            if (dy === name && opening_hours.open_now) {
              return `<li class="open"><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span> - open</li>`;
            }
            if (dy === name && !opening_hours.open_now) {
              return `<li class="closed"><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span> - closed</li>`;
            }
            if (day.includes("Closed")) {
              return `<li class="closed"><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span></li>`;
            }
            return `<li><span class="hours__day">${dy}:</span> <span class="hours__times">${hours}</span></li>`;
          })
          .join("")}
      </ul>`;
    })
    .catch((err) => console.error(err));
}

getHours("ChIJHy_oPjVTBogRlCSVhRPPPVA", "stateSt");
// getHours("ChIJhavpw4ysB4gRECgAOWjRw-8", "hslc");
// getHours("ChIJxXig40CsB4gRnlZUGlcEPu8", "hilldale");
// getHours("ChIJoz0nDmgGBYgRcho_pz1Rew0", "brookfield");
// getHours("ChIJ9f9iUZWtB4gRNUZwvzzhqb4", "warehouse");
