const stateSt = document.querySelector('.stateSt');
const hilldale = document.querySelector('.hilldale');
const hslc = document.querySelector('.hslc');
const brookfield = document.querySelector('.brookfield');
const warehouse = document.querySelector('.warehouse');
const date = new Date();
const day = date.getDay();
// const day = 6;
const hour = date.getUTCHours() - 5;
// const hour = 17;
// console.log(hour);
const minutes = date.getUTCMinutes();

function displayHours(li, idx, open, openMin, close, closeMin) {
  if (day === idx && (hour >= open && hour < close || hour === close && minutes < closeMin)) {
    li.parentElement.classList.add('open');
    li.parentElement.style.backgroundColor = 'rgba(0,0,0,0.065)';
    li.innerText += ` - open`;
  } else if (day === idx && li.innerText !== 'Closed') {
    if (hour < open) {
      li.parentElement.classList.add('closed');
      if (open < 12) {
        li.innerText = `Opens at ${open}:${openMin === 0 ? '00' : openMin}am`;
      } else {
        li.innerText = `Opens at ${open}:${openMin === 0 ? '00' : openMin}pm`;
      }
    } else if (hour >= close) {
      li.parentElement.classList.add('closed');
      li.innerText += ` - currently closed`;
    }
  }
}

function getStateStHrs() {
  stateSt.innerHTML = `
    <ul class="hours">
        <li><strong>REGULAR HOURS</strong></li>
        <li><span class="red bold">Campus Shipping Center closes &frac12; hour before the store closes.</li>
        <li><span class="hours__day">Sunday:</span> <span class="hours__times">10:30am - 5:00pm</span></li>
        <li><span class="hours__day">Monday:</span> <span class="hours__times">9:00am - 7:00pm</span></li>
        <li><span class="hours__day">Tuesday:</span> <span class="hours__times">9:00am - 7:00pm</span></li>
        <li><span class="hours__day">Wednesday:</span> <span class="hours__times">9:00am - 7:00pm</span></li>
        <li><span class="hours__day">Thursday:</span> <span class="hours__times">9:00am - 7:00pm</span></li>
        <li><span class="hours__day">Friday:</span> <span class="hours__times">9:00am - 5:30pm</span></li>
        <li><span class="hours__day">Saturday:</span> <span class="hours__times">9:00am - 5:30pm</span></li>
    </ul>
`;

  const hoursLi = document.querySelectorAll('.stateSt .hours__times');

  hoursLi.forEach((li, idx) => {
    let open;
    let openMin;
    let close;
    let closeMin;

    switch (day) {
      case 1:
      case 2:
      case 3:
      case 4:
        open = 9;
        openMin = 0;
        close = 19;
        closeMin = 0;
        break;
      case 5:
      case 6:
        open = 9;
        openMin = 0;
        close = 17;
        closeMin = 30;
        break;
      default:
        open = 10;
        openMin = 30;
        close = 17;
        closeMin = 0;
    }
    displayHours(li, idx, open, openMin, close, closeMin);
  });
}

function getHilldaleHrs() {
  hilldale.innerHTML = `
    <ul class="hours">
        <li><strong>REGULAR HOURS</strong></li>
        <li><span class="hours__day">Sunday:</span> <span class="hours__times">11:00am - 6:00pm</span></li>
        <li><span class="hours__day">Monday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
        <li><span class="hours__day">Tuesday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
        <li><span class="hours__day">Wednesday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
        <!--<li><span class="hours__day">Thursday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>-->
        <li><span class="hours__day">Thursday:</span> <span class="hours__times">10:00pm - 8:00pm</span></li>
        <li><span class="hours__day">Friday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
        <li><span class="hours__day">Saturday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
    </ul>
`;

  const hoursLi = document.querySelectorAll('.hilldale .hours__times');

  hoursLi.forEach((li, idx) => {
    let open;
    let openMin;
    let close;
    let closeMin;

    switch (day) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        open = 10;
        openMin = 0;
        close = 20;
        closeMin = 0;
        break;
      default:
        open = 11;
        openMin = 0;
        close = 18;
        closeMin = 0;
    }
    displayHours(li, idx, open, openMin, close, closeMin);
  });
}

function getHslcHrs() {
  hslc.innerHTML = `
        <ul class="hours">
            <li><strong>Hours: </strong></li>
            <li class="closed"><span class="hours__day">Sunday:</span> <span class="hours__times">Closed</span></li>
            <li><span class="hours__day">Monday:</span> <span class="hours__times">8:30am - 4:30pm</span></li>
            <li><span class="hours__day">Tuesday:</span> <span class="hours__times">8:30am - 4:30pm</span></li>
            <li><span class="hours__day">Wednesday:</span> <span class="hours__times">8:30am - 4:30pm</span></li>
            <li><span class="hours__day">Thursday:</span> <span class="hours__times">8:30am - 4:30pm</span></li>
            <li><span class="hours__day">Friday:</span> <span class="hours__times">8:30am - 4:30pm</span></li>
            <li class="closed"><span class="hours__day">Saturday:</span> <span class="hours__times">Closed</span></li>
        </ul>
    `;

  const hoursLi = document.querySelectorAll('.hslc .hours__times');

  hoursLi.forEach((li, idx) => {
    let open;
    let openMin;
    let close;
    let closeMin;

    switch (day) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        open = 8;
        openMin = 30;
        close = 16;
        closeMin = 30;
        break;
      default:
        open = 0;
        openMin = 0;
        close = 0;
        closeMin = 0;
    }
    displayHours(li, idx, open, openMin, close, closeMin);
  });
}

function getBrookfieldHrs() {
  brookfield.innerHTML = `
        <ul class="hours">
            <li><strong>Hours: </strong></li>
            <li><span class="hours__day">Sunday:</span> <span class="hours__times">11:00am - 6:00pm</span></li>
            <li><span class="hours__day">Monday:</span> <span class="hours__times">3:pm - 8:00pm</span></li>
            <li><span class="hours__day">Tuesday:</span> <span class="hours__times">3:00pm - 8:00pm</span></li>
            <li><span class="hours__day">Wednesday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
            <li><span class="hours__day">Thursday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
            <li><span class="hours__day">Friday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
            <li><span class="hours__day">Saturday:</span> <span class="hours__times">10:00am - 8:00pm</span></li>
        </ul>
    `;

  const hoursLi = document.querySelectorAll('.brookfield .hours__times');

  hoursLi.forEach((li, idx) => {
    let open;
    let openMin;
    let close;
    let closeMin;

    switch (day) {
      case 1:
      case 2:
        open = 15;
        openMin = 0;
        close = 20;
        closeMin = 0;
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        open = 10;
        openMin = 0;
        close = 20;
        closeMin = 0;
        break;
      default:
        open = 11;
        openMin = 0;
        close = 18;
        closeMin = 0;
    }
    displayHours(li, idx, open, openMin, close, closeMin);
  });
}

function getWarehousHrs() {
  warehouse.innerHTML = `
        <ul class="hours">
            <li><strong>Hours: </strong></li>
            <li class="closed"><span class="hours__day">Sunday:</span> <span class="hours__times">Closed</span></li>
            <li><span class="hours__day">Monday:</span> <span class="hours__times">9:00am - 5:00pm</span></li>
            <li><span class="hours__day">Tuesday:</span> <span class="hours__times">9:00am - 5:00pm</span></li>
            <li><span class="hours__day">Wednesday:</span> <span class="hours__times">9:00am - 5:00pm</span></li>
            <li><span class="hours__day">Thursday:</span> <span class="hours__times">9:00am - 5:00pm</span></li>
            <li><span class="hours__day">Friday:</span> <span class="hours__times">9:00am - 5:00pm</span></li>
            <li class="closed"><span class="hours__day">Saturday:</span> <span class="hours__times">Closed</span></li>
        </ul>
    `;

  const hoursLi = document.querySelectorAll('.warehouse .hours__times');

  hoursLi.forEach((li, idx) => {
    let open;
    let openMin;
    let close;
    let closeMin;

    switch (day) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        open = 9;
        openMin = 0;
        close = 17;
        closeMin = 0;
        break;
      default:
        open = 0;
        openMin = 0;
        close = 0;
        closeMin = 0;
    }
    displayHours(li, idx, open, openMin, close, closeMin);
  });
}

getStateStHrs();
getHilldaleHrs();
getHslcHrs();
getBrookfieldHrs();
getWarehousHrs();

// countdown = setInterval(function () {
//     getStateStHrs();
//     getHilldaleHrs();
//     getHslcHrs();
//     getBrookfieldHrs();
//     getWarehousHrs();
// }, 1000);