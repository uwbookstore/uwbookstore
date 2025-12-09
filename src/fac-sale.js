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
const targetInCentral = new Date(Date.UTC(2025, 11, 11, 6, 0, 0));
const futureTime = targetInCentral.getTime();

const saleCode = document.getElementById('fac-sale-code');

const getRemainingTime = () => {
  const now = new Date().getTime();
  const t = futureTime - now;
  if (t < 0) {
    clearInterval(countdown);
    saleCode.innerHTML = `<span>online code:</span> <span class="code">2SFS5</span>`;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
