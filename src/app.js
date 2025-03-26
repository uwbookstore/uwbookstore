// SETUP BACK TO TOP BTN/FUNCTION
const backToTopBtn = document.querySelector('.backtotop');

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
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
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
// END ACCESSIBLE TABS

/*
 * fix various MBS classes
 **/
const shipsubmitBtn = document.getElementById('shipsubmit');
if (shipsubmitBtn) {
  shipsubmitBtn.classList.remove('btn-default');
  shipsubmitBtn.classList.add('btn-primary');
}

const studentIDText = document.getElementById('studentIDText');
const billingstudentNumberWrapper = document.getElementById(
  'billingstudentNumberWrapper'
);
if (studentIDText) {
  studentIDText.classList.add('alert', 'alert-danger', 'bold');

  // find studentIDText parent element
  const studentIDTextParent = studentIDText.parentElement;
  studentIDTextParent.classList.remove('left5');
}
if (billingstudentNumberWrapper) {
  billingstudentNumberWrapper.classList.add('alert', 'alert-danger', 'bold');
}

const studentNumberText = document.querySelector('.studentNumberText');
if (studentNumberText) {
  studentNumberText.classList.add('mt-1');
}

const custStudID = document.getElementById('custStudentID');
if (custStudID) {
  custStudID.setAttribute(
    'placeholder',
    '10 digit phone number or UW Student ID *'
  );
}

// Functions for the Monthly Coupons page
const coupons = document.querySelectorAll('.coupons li');
const couponSelect = document.querySelector('.select');
const couponDeselect = document.querySelector('.deselect');
const printCoupons = document.querySelector('#couponbook .print');

if (coupons.length) {
  coupons.forEach((coupon) => {
    coupon.addEventListener('click', (e) => {
      e.target.parentElement.parentElement.classList.toggle('print');
    });
  });

  couponSelect.addEventListener('click', (e) => {
    e.preventDefault();
    coupons.forEach((coupon) => {
      coupon.classList.add('print');
    });
  });

  couponDeselect.addEventListener('click', (e) => {
    e.preventDefault();
    coupons.forEach((coupon) => {
      coupon.classList.remove('print');
    });
  });

  printCoupons.addEventListener('click', (e) => {
    e.preventDefault();
    window.print();
  });
}

/*
 * Handle login errors
 * remove MBS default classes
 * wrap in alert-danger
 * if there is an SSO error,
 * display custom message.
 **/
const loginMsg = document.querySelector('.lgMessage');
if (loginMsg) {
  loginMsg.classList.remove('red');
  loginMsg.classList.add('alert', 'alert-danger', 'mx-auto', 'px-1');
  loginMsg.style.maxWidth = '600px';
  if (
    loginMsg.innerText
      .toLowerCase()
      .includes("please use your school's single sign-on process to login.")
  ) {
    loginMsg.innerHTML = `
          <em class="fa fa-exclamation-triangle"></em> &mdash; 
          Please use your <a href="https://www.uwbookstore.com/login">UW Student Sign In</a>
        `;
  }
}
// End of login error handling

const myNavbar = document.querySelector('#myNavbar a');
const loginContainer = document.getElementById('login');
// const forgotPasswordLink = document.querySelector('.forgotPasswordLink');

// if (forgotPasswordLink) {
//   forgotPasswordLink.classList.add('btn', 'btn-text');
// }

if (
  baseUrl === 'https://www.uwbookstore.com/' ||
  baseUrl === 'http://127.0.0.1:8080/'
) {
  if (myNavbar.textContent.includes('Login')) {
    loginContainer.innerHTML = `
    <a href="https://www.uwbookstore.com/login" class="navbar__account">
      <em class="fa fa-user" aria-hidden="true"></em>
      <span>Login</span>
    </a>
  `;
  } else {
    loginContainer.innerHTML = `
    <a href="https://www.uwbookstore.com/customeraccount?s=www.uwbookstore.com" class="navbar__account">
      <em class="fa fa-user" aria-hidden="true"></em>
      <span>Account</span>
    </a>
  `;
  }
} else if (baseUrl === 'https://med.uwbookstore.com/') {
  if (myNavbar.textContent.includes('Login')) {
    loginContainer.innerHTML = `
    <a href="https://med.uwbookstore.com/login" class="navbar__account">
      <em class="fa fa-user" aria-hidden="true"></em>
      <span>Login</span>
    </a>
  `;
  } else {
    loginContainer.innerHTML = `
    <a href="https://med.uwbookstore.com/customeraccount?s=med.uwbookstore.com" class="navbar__account">
      <em class="fa fa-user" aria-hidden="true"></em>
      <span>Account</span>
    </a>
  `;
  }
}

// Lost password form rewrite
const lostPasswordPanelHeader = document.getElementById(
  'lostPasswordPanelHeader'
);
const lostPasswordPanelBody = document.querySelector('#lostPasswordPanelBody');
const lostPasswordPanelBodyCol = document.querySelector(
  '#lostPasswordPanelBody [class^="col"]'
);
const lostPasswordPrevLink = document.querySelector(
  '#lostPasswordPanelBody a.previousLink'
);

if (lostPasswordPanelHeader) {
  console.log('this should work');
  lostPasswordPanelHeader.textContent = 'Forgot Your Password?';
}

if (lostPasswordPanelBody) {
  lostPasswordPanelBody.classList.add('text-center');
}

if (lostPasswordPrevLink) {
  lostPasswordPrevLink.classList.add('btn', 'btn-outline-primary', 'mb-2');
}

if (lostPasswordPanelBodyCol) {
  lostPasswordPanelBodyCol.removeAttribute('class');
}

/*********************************************************/
/*********************************************************/
/*********************************************************/
/*********************************************************/
/*********************************************************/
/*********************************************************/
/*********************************************************/

// TODO: test below to see if it's necessary
addEventListenerIfExists('.dropdown-menu', 'click', (e) => {
  e.stopPropagation();
});
// TODO: test above to see if it's necessary

// Helper function to addEventHandlers
function addEventListenerIfExists(elementId, eventType, callback) {
  const element = document.querySelector(elementId);

  if (element) {
    element.addEventListener(eventType, callback);
  }
}

/*
 * Can't convert to vanilla JS due to jQuery dependency
 * Coming from MBS 🤬
 */
$(document).ready(function () {
  // Makes sure that only one dropdown is open at a time
  if ($(window).width() >= 768) {
    $('.dropdown-toggle').unbind('focus');
    $('.dropdown-toggle').unbind('click');
  }

  // animate dropdown for submenus in navbar
  $('.nav-title').on('click', function (e) {
    const width = $(window).width();

    if (width < 1169) {
      $(this).next().slideToggle(500);
      e.preventDefault();
    }
  });
});

/* TODO:
 * Look into converting to vanilla JS
 * down the road
 **/
// Additional Information Tabs
$('ul.meganav__tabs-list').each(function () {
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  let $active;
  let $content;
  const $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $(
    $links.filter('[href="' + window.location.hash + '"]')[0] || $links[0]
  );
  $active.addClass('meganav__tabs--link-active');

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a.meganav__tabs--link', function (e) {
    // Make the old tab inactive.
    $active.removeClass('meganav__tabs--link-active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('meganav__tabs--link-active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});

// TODO: look into below
// $('.dropdown-toggle').click(function (e) {
//   e.preventDefault();
//   e.stopImmediatePropagation();
//   if ($(this).parent().hasClass('open')) {
//     $(this).parent().removeClass('open');
//   } else {
//     $('.has-megamenu, .dropdown').removeClass('open');
//     $(this).parent().toggleClass('open');
//   }
// });

// $('.modal-open2').click(function (e) {
//   $('#buyback-confirm').modal();
//   e.stopPropagation();
// });

// $('.inline').colorbox({ inline: true, width: '50%' });

// $.urlParam = function (name) {
//   const results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
//     window.location.href
//   );
//   return results[1] || 0;
// };
// TODO: look into above

// FIXME:  Maybe leave below as jQuery for now
// $('.banner__message').click(function () {
//   $('#exclusions').slideToggle(500);
//   if (!$('.navbar-toggle').hasClass('collapsed')) {
//     $('.navbar-toggle').addClass('collapsed');
//     $('.navbar-collapse.collapse').removeClass('in');
//   }
// });

// May not be needed
// $('.dropdown-toggle').off('focus');
// $('.dropdown-toggle').off('click');
// FIXME:  Maybe leave above as jQuery for now
