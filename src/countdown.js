const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const countdownWrapper = document.querySelector('.countdown__wrapper');
const items = document.querySelectorAll('.timer__box p');

// months are ZERO index based;
const futureDate = new Date(Date.UTC(2024, 9, 19, 16, 0, 0));

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();

month = months[month];
const weekeday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();

  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    countdownWrapper.innerHTML = `
        <div class="countdown__image mr-3">
          <img src="https://i.univbkstr.com/v3/img/landing/graduation/motionW.png" alt="" role="presentation"
            class="img-fluid">
        </div>

        <div class="timer__text ml-0">It's Game Day!</div>

        <div class="countdown__image ml-3">
          <img src="https://i.univbkstr.com/v3/img/landing/graduation/motionW.png" alt="" role="presentation"
            class="img-fluid">
        </div>
    `;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
