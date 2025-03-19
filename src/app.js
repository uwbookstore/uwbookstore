// SETUP BACK TO TOP BTN/FUNCTION
const backToTopBtn = document.getElementById('backtotop');

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

/**
 * Check if back to top button exists
 * if so, run scrollToTop function
 */
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', scrollToTop);
}
// END BACK TO TOP BTN/FUNCTION

// SETUP SEARCHBAR FUNCTIONALITY
// Call custom search - Not MBS search
function search() {
  let searchInput = document.getElementById('search-term').value;
  searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');
  document.location.href = `${baseUrl}merchlist?searchtype=all&txtSearch=${searchInput}`;
}

/**
 * Check if search button exists
 * if so, toggle search form opened/closed
 *
 * Check if search submit button exists
 * if so, run custom search function
 */
// Search bar variables
const searchBtn = document.getElementById('search');
const searchForm = document.querySelector('li.search');
const searchSubmit = document.querySelector('.search-submit');
const searchField = document.querySelector('.search-field');

if (searchBtn) {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('open');
  });
}

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
// END SEARCHBAR FUNCTIONALITY

/**
 * Check that Cart element exists
 * if so append cart info to custom cart
 */
// header cart variables
const cart = document.getElementById('Cart');
const itemCount = document.getElementById('ItemCount');
const cartCount = document.getElementById('cart-count');
const cartText = document.getElementById('cart-text');

if (cart) {
  let itemText;
  itemCount.textContent === '1' ? (itemText = 'Item') : (itemText = 'Items');
  cartCount.appendChild(itemCount);
  cartText.innerText = itemText;
}
// End of shopping cart button

/**
 * Update the coupon code & expiration date
 * for the various pages that use it
 * (don't ask me why they chose to have multiple
 * pages for the same thing...it's a marketing thing)
 *
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

// Update coupon code/expiration
// Across all current coupons
fillInnerContent('coupon-header', '10% OFF', 'text');
fillInnerContent('coupon-subhead', 'Your Entire Purchase!', 'text');
fillInnerContent('coupon-code', '434', 'text');
fillInnerContent('coupon-expiration', '6.30.25', 'text');
// End of coupon code update

/**
 * ACCESSIBLE TABS
 */
const tabsContainer = document.querySelector('.tabs-container');

if (tabsContainer) {
  const tabsList = tabsContainer.querySelector('ul');
  const tabButtons = tabsList.querySelectorAll('a');
  const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');

  tabsList.setAttribute('role', 'tablist');

  tabsList.querySelectorAll('li').forEach((listitem) => {
    listitem.setAttribute('role', 'presentation');
  });

  tabButtons.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    if (index === 0) {
      tab.setAttribute('aria-selected', 'true');
      // we'll add something here
    } else {
      tab.setAttribute('tabindex', '-1');
      tabPanels[index].setAttribute('hidden', '');
    }
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '0');
  });

  tabsContainer.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('a');
    if (!clickedTab) return;
    e.preventDefault();

    switchTab(clickedTab);
  });

  tabsContainer.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'Home':
        e.preventDefault();
        switchTab(tabButtons[0]);
        break;
      case 'End':
        e.preventDefault();
        switchTab(tabButtons[tabButtons.length - 1]);
        break;
    }
  });

  function moveLeft() {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.previousElementSibling) {
      switchTab(tabButtons[tabButtons.length - 1]);
    } else {
      switchTab(
        currentTab.parentElement.previousElementSibling.querySelector('a')
      );
    }
  }

  function moveRight() {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.nextElementSibling) {
      switchTab(tabButtons[0]);
    } else {
      switchTab(currentTab.parentElement.nextElementSibling.querySelector('a'));
    }
  }

  function switchTab(newTab) {
    const activePanelId = newTab.getAttribute('href');
    const activePanel = tabsContainer.querySelector(activePanelId);

    tabButtons.forEach((button) => {
      button.setAttribute('aria-selected', false);
      button.setAttribute('tabindex', '-1');
    });

    tabPanels.forEach((panel) => {
      panel.setAttribute('hidden', true);
    });

    activePanel.removeAttribute('hidden', false);

    newTab.setAttribute('aria-selected', true);
    newTab.setAttribute('tabindex', '0');
    newTab.focus();
  }
}
