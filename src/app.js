// DEFINE SITE VARIABLES
const backToTopBtn = document.getElementById('backtotop');

// DEFINE ALL FUNCTIONS
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

// Smooth scroll to top
function scrollToTop() {
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
