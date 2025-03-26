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
// Rewrite DOM - MBS default is ugly
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

// Customer account page
// Rewrite DOM - MBS default is ugly
const accountUL = document.getElementById('accountUL');
const accountULItems = document.querySelectorAll('#accountUL li.accountLI');
if (accountUL) {
  // Add Bootstrap list-group classes
  accountUL.classList.add('list-group');
  accountULItems.forEach((item) => {
    item.classList.add('list-group-item');

    if (item.textContent.toLowerCase().includes('track orders')) {
      item.querySelector('a').textContent = 'Manage Orders';
    }
    if (
      item.textContent.toLowerCase().includes('bookstore profile number') ||
      item.textContent
        .toLowerCase()
        .includes('view loyalty account information')
    ) {
      item.style.display = 'none';
    }
  });
}

// Order history page
// TODO: Refactor after testing

// Logout page
// Rewrite DOM - MBS default is ugly
const logoutPanel = document.getElementById('logoutPanel');
const logoutPanelHeader = document.getElementById('logoutPanelHeader');
const logoutText = document.querySelector('#logoutPanelBody .logoutText');

if (logoutPanel) {
  logoutPanelHeader.innerHTML = `
    <h1 class="heading__line-center"><span>You are now logged out</span></h1>
  `;

  if (baseUrl === 'https://www.uwbookstore.com/') {
    logoutText.innerHTML = `
      <div class="login__btns"><a href="https://www.uwbookstore.com/login" class="btn btn-secondary">Log Back In</a><a href="https://www.uwbookstore.com/home" class="btn btn-primary">UW Book Store</a></div>
    `;
  } else if (baseUrl === 'https://med.uwbookstore.com') {
    logoutText.innerHTML = `
      <div class="login__btns"><a href="https://med.uwbookstore.com/login" class="btn btn-secondary">Log Back In</a><a href="https://med.uwbookstore.com/home" class="btn btn-primary">Home</a></div>
    `;
  }
}

// Shopping cart page
// Rewrite DOM - MBS default is ugly
if (window.location.href.toLowerCase().search('/shoppingcart') !== -1) {
  const cartHeader =
    document.querySelector('.scHeader').parentElement.parentElement;
  const cartCardLeft = document.getElementById('cart-leftCard');

  if (document.querySelector('.validation-summary-errors')) {
    document.querySelector('.validation-summary-errors').style.display = 'none';
  }

  // Show alerts to show user Promo information
  const promoAlert = document.createElement('div');
  promoAlert.classList.add('row');
  promoAlert.innerHTML = `
    <div class="col-md-6">
      <div class="alert alert-success">
        <div class="text-center bold"><em>NOTE:</em></div>
        <div class="text-center">Promotional Discounts applied to items on your cart will not be viewable until
          the end of
          the
          checkout process.</div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="alert alert-info">
        <div class="text-center bold"><em>Do you have a Promo Code?</em></div>
        <div class="text-center">You will be prompted for your Promo Code at checkout before entering your credit card
          information.</div>
      </div>
    </div>
  `;

  itemCount.textContent === '0' ? (cartHeader.style.display = 'none') : null;
  itemCount.textContent >= '1'
    ? cartCardLeft.parentElement.after(promoAlert)
    : null;

  // Make the cart look a bit prettier when empty
  if (
    (itemCount.textContent === '0' &&
      baseUrl === 'https://www.uwbookstore.com/') ||
    (itemCount.textContent === '0' &&
      baseUrl === 'https://insitestore2.mbsbooks.com/uwmadison/home')
  ) {
    cartCardLeft.innerHTML = `
      <div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i>
        <p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn"
          href="https://www.uwbookstore.com/home" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a>
        <div class="cart__account">
          <p><a class="btn btn-text" href="https://www.uwbookstore.com/Customer-Help" title="Customer Help">Customer
              Help</a>
          </p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span>
        </div>
      </div>
    `;
  } else if (
    itemCount.textContent === '0' &&
    baseUrl === 'https://med.uwbookstore.com/'
  ) {
    cartCardLeft.innerHTML = `
      <div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i>
        <p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn"
          href="https://med.uwbookstore.com/home" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a>
        <div class="cart__account">
          <p><a class="btn btn-text" href="https://med.uwbookstore.com/SiteText?id=62781" title="Customer Help">Customer
              Help</a>
          </p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span>
        </div>
      </div>
    `;
  }
}

// THINGS THAT SHOULD BE IN THE FOOTER OF THE PAGE
// Add Copyright date to footer
const d = new Date();
const year = d.getFullYear();
const footerCopyright = document.querySelector(
  '.footer__copyright span.copyright'
);

footerCopyright.innerHTML = `
  &copy; Copyright ${year} University Book Store | <a href="/Privacy" class="privacy" tabindex="0">Privacy Policy</a>
`;

// TODO: Look at Order Details page
/*
  $(
    '<div id="order-info" class="row"><div id="list-container" class="col-md-4"></div><div class="col-md-8"></div></div>'
  ).insertAfter('h1#ordersHeader');
  $('div#ordersPanel').detach().appendTo('div#order-info div.col-md-8');
  $('div.orderPanel').detach().appendTo('div#order-info div.col-md-8');

  $('div#list-container').html(
    [
      '<h2 class="textc">Customer Help</h2>',
      '<div class="list-group">',
      '<a href="https://www.uwbookstore.com/Customer-Help#faq" class="list-group-item textc">View our FAQ</a>',
      '<a href="https://www.uwbookstore.com/Customer-Help#return" class="list-group-item textc">Return an order</a>',
      '</div>',
    ].join('\n')
  );

  if (!$('div#ordersPanelBody').has('div.oneOrder').length) {
    $(
      '<em>You have no orders.<br>If you are looking for a textbook order, please login at <a href="https://text.uwbookstore.com/login">text.uwbookstore.com</a></em>'
    ).appendTo('div#ordersPanelBody');
  }

  if (window.location.href.search(/orderdetails/) !== -1) {
    // const orderNum = $('#ordersHeader').text();
    $(
      `<a href="https://www.uwbookstore.com/Contact" class="list-group-item textc order_q">Question about this order?</a>`
      // `<a href="https://www.uwbookstore.com/contact/?order_id=${orderNum}" class="list-group-item textc order_q">Question about this order?</a>`
    ).appendTo('.list-group');
  }
    
 * Vanilla JS version of MBS jQuery
  document.addEventListener("DOMContentLoaded", function () {
    const ordersPanel = document.querySelector("div#ordersPanel");
    const targetContainer = document.querySelector("div#order-info div.col-md-8");

    if (ordersPanel && targetContainer) {
      targetContainer.appendChild(ordersPanel);
    }
  });  
**/

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
