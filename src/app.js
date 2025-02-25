// DEFINE SITE VARIABLES
const backToTopBtn = document.getElementById('backtotop');

// Search bar variables
const searchBtn = document.getElementById('search');
const searchForm = document.querySelector('li.search');
const searchSubmit = document.querySelector('.search-submit');
const searchField = document.querySelector('.search-field');

// header cart variables
const cart = document.getElementById('Cart');
const itemCount = document.getElementById('ItemCount');
const cartCount = document.getElementById('cart-count');
const cartText = document.getElementById('cart-text');

// DEFINE ALL FUNCTIONS
// Smooth scroll back to top
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

// Call custom search - Not MBS search
function search() {
  let searchInput = document.getElementById('search-term').value;
  searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');
  document.location.href = `${baseUrl}merchlist?searchtype=all&txtSearch=${searchInput}`;
}

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
// END FUNCTION DEFINITIONS

// CALL FUNCTIONS
/**
 * Check if back to top button exists
 * if so, run scrollToTop function
 */
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', scrollToTop);
}

/**
 * Check if search button exists
 * if so, toggle search form opened/closed
 */
if (searchBtn) {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('open');
  });
}

/**
 * Check if search submit button exists
 * if so, run custom search function
 */
if (searchSubmit && searchField) {
  searchField.addEventListener('keyup', (e) => {
    if (searchField.value !== '' && e.keyCode === 13) {
      e.preventDefault();
      search();
    }
  });

  searchSubmit.addEventListener('click', () => {
    searchField.value !== '' ? search() : false;
  });
}

/**
 * Check that Cart element exists
 * if so append cart info to custom cart
 */
if (cart) {
  let itemText;
  itemCount.textContent === '1' ? (itemText = 'Item') : (itemText = 'Items');
  cartCount.appendChild(itemCount);
  cartText.innerText = itemText;
}

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
// END FUNCTION CALLS
