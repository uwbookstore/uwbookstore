const slideToHide = document.getElementById('ship99');
// const slideToHide2 = document.getElementById("divToHide2");
const slideToActivate = document.getElementById('divToShow');
// const slide2ToActivate = document.getElementById("setToShow");

// months are ZERO index based;
const futureDate = new Date(Date.UTC(2022, 10, 28, 6, 0, 0));

const futureTime = futureDate.getTime();

let countdown;

function getRemainingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  if (t < 0) {
    clearInterval(countdown);
    slideToHide.remove();
    // slideToHide2.remove();
    slideToActivate.classList.remove('hide');
    // slide2ToActivate.classList.remove("hide");
  }
}
// countdown;
countdown = setInterval(getRemainingTime, 1000);

//set initial values
getRemainingTime();