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

const centralTarget = new Date('2025-11-08T14:30:00');
const targetInCentral = new Date(
  centralTarget.toLocaleDateString('en-US', { timeZone: 'America/Chicago' })
);
const futureTime = targetInCentral.getTime();

// const displayDate = new Date(
//   centralTarget.toLocaleString('en-US', { timeZone: 'America/Chicago' })
// );
// const year = displayDate.getFullYear();
// const month = months[displayDate.getMonth()];
// const weekday = weekdays[displayDate.getDay()];
// const date = displayDate.getDate();
// const hours = displayDate.getHours();
// const minutes = displayDate.getMinutes();

// console.log(
//   `Countdown target: ${weekday}, ${month} ${date}, ${year} ${hours}:${minutes
//     .toString()
//     .padStart(2, '0')} (Central Time)`
// );

const getRemainingTime = () => {
  const now = new Date().getTime();
  const t = futureTime - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  const format = (item) => (item < 10 ? `0${item}` : item);

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

        <div class="timer__text ml-0">Go Badgers!</div>

        <div class="countdown__image ml-3">
          <img src="https://i.univbkstr.com/v3/img/landing/graduation/motionW.png" alt="" role="presentation"
            class="img-fluid">
        </div>
    `;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
