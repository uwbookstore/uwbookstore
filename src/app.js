// DEFINE SITE VARIABLES
const backToTopBtn = document.getElementById('backtotop');

// DEFINE ALL FUNCTIONS

// Smooth scroll to top
function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Show/Hide Scroll to Top button
window.onscroll = function () {
  if (scrollY >= 200) {
    backToTopBtn.style.opacity = 1;
  } else {
    backToTopBtn.style.opacity = 0;
  }
};

/**
 * Select an element by id and update innerText or innerHTML
 * @param {string} el - the element to be updated (id not class)
 * @param {string} text - the text/html to be inserted
 * @param {string} type - the type of text to be inserted (text or html)
 */
function fillInnerContent(el, text, type) {
  const element = document.getElementById(el);
  if (type === 'text') {
    element !== null ? (element.innerText = text) : null;
  } else if (type === 'html') {
    element.innerHTML = text;
  }
  return null;
}

// CALL FUNCTIONS
// Call scrolltotop
backToTopBtn.addEventListener('click', scrollToTop);

/**
 * Update the coupon code & expiration date
 * for the various pages that use it
 * (don't ask me why they chose to have multiple
 *  pages for the same thing...it's a marketing thing)
 */
// Update coupon code/expiration
// Across all current coupons
fillInnerContent('coupon-header', '10% OFF', 'text');
fillInnerContent('coupon-subhead', 'Your Entire Purchase!', 'text');
fillInnerContent('coupon-code', '434', 'text');
fillInnerContent('coupon-expiration', '6.30.25', 'text');
