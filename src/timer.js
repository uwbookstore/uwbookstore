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

// const centralTarget = new Date('2025-12-14T10:00:00');
const targetInCentral = new Date(Date.UTC(2025, 11, 14, 16, 0, 0));
const futureTime = targetInCentral.getTime();

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

        <div class="timer__text ml-0">Congratulations Graduates!</div>

        <div class="countdown__image ml-3">
          <img src="https://i.univbkstr.com/v3/img/landing/graduation/motionW.png" alt="" role="presentation"
            class="img-fluid">
        </div>
    `;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
