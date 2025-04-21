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
  cartText.textContent = itemText;
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
const logoutContainer = document.createElement('li');
logoutContainer.id = 'logout';
logoutContainer.className = 'navbar__links--item';
logoutContainer.innerHTML = `
  <a href="${baseUrl}logout" class="navbar__account">
    <em class="fa fa-sign-out" aria-hidden="true"></em>
    <span>Log&nbsp;Out</span>
  </a>
`;

if (myNavbar.textContent.toLowerCase().includes('login')) {
  loginContainer.innerHTML = `
  <a href="${baseUrl}login" class="navbar__account">
    <em class="fa fa-user" aria-hidden="true"></em>
    <span>Login</span>
  </a>
`;
} else {
  loginContainer.innerHTML = `
  <a href="${baseUrl}customeraccount?s=${subUrl}" class="navbar__account">
    <em class="fa fa-user" aria-hidden="true"></em>
    <span>Account</span>
  </a>
`;
  loginContainer.after(logoutContainer);
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

// Logout page
// Rewrite DOM - MBS default is ugly
const logoutPanel = document.getElementById('logoutPanel');
const logoutPanelHeader = document.getElementById('logoutPanelHeader');
const logoutText = document.querySelector('#logoutPanelBody .logoutText');

if (logoutPanel) {
  logoutPanelHeader.innerHTML = `
    <h2 class="panel-header">You are now logged out</h2>
  `;
  document.querySelector('.page_header').style.display = 'none';

  logoutText.innerHTML = `
    <div class="login__btns"><a href="${baseUrl}login" class="btn btn-secondary">Log Back In</a><a href="${baseUrl}home" class="btn btn-primary">Home</a></div>
  `;
}

let custHelpLinkText;
let btnText = 'Shop Clothing & Gifts';
if (baseUrl === 'https://www.uwbookstore.com/') {
  custHelpLinkText = 'Customer-Help';
} else if (baseUrl === 'https://text.uwbookstore.com/') {
  custHelpLinkText = 'SiteText?id=2369';
  btnText = 'Shop Textbooks';
} else if (baseUrl === 'https://med.uwbookstore.com/') {
  custHelpLinkText = 'SiteText?id=62781';
} else {
  custHelpLinkText = 'SiteText?id=55059';
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

  // Replace MBS default Image Not Available gif
  const merchWrapperImage = document.querySelectorAll('.merch-wrapper img');

  if (merchWrapperImage) {
    merchWrapperImage.forEach((image) => {
      if (image.getAttribute('src').includes('/images/notavail.gif')) {
        image.setAttribute(
          'src',
          'https://i.univbkstr.com/v3/img/misc/no-image-thumb.jpg'
        );
        image.setAttribute('alt', 'Image not available');
      }
    });
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
  if (itemCount.textContent === '0') {
    cartCardLeft.innerHTML = `
      <div class="cart__container">
        <i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i>
        <p class="cart__p">Your shopping cart is empty.</p>
        <a class="btn btn-primary cart__btn" href="${baseUrl}home">
          ${btnText}
        </a>
        <div class="cart__account">
          <p>
            <a class="btn btn-text" href="${baseUrl}${custHelpLinkText}">
              Customer Help
            </a>
          </p>
            <a href="tel:+16082573784">(608) 257-3784</a> or <a href="tel:+18009932665">(800) 993-2665</a>
        </div>
      </div>
    `;
  }
}

// THINGS THAT SHOULD BE IN THE FOOTER OF THE PAGE
// Add Copyright date to footer
const d = new Date();
const copyYear = d.getFullYear();
const footerCopyright = document.querySelector(
  '.footer__copyright span.copyright'
);

footerCopyright
  ? (footerCopyright.innerHTML = `
  &copy; Copyright ${copyYear} University Book Store | <a href="/Privacy" class="privacy" tabindex="0">Privacy Policy</a>
`)
  : null;

// TODO: Look at Order Details page
// Create the order info div and insert after h1#ordersHeader
const orderInfo = document.createElement('div');
orderInfo.id = 'order-info';
orderInfo.className = 'row';
orderInfo.innerHTML = `
  <div id="list-container" class="col-md-4"></div><div class="col-md-8"></div>
`;

const ordersHeader = document.querySelector('h1#ordersHeader');
if (ordersHeader) {
  ordersHeader.insertAdjacentElement('afterend', orderInfo);
}

// Move div#ordersPanel into div#order-info div.col-md-8
const ordersPanel = document.querySelector('div#ordersPanel');
const colMd8 = document.querySelector('div#order-info div.col-md-8');
if (ordersPanel && colMd8) {
  colMd8.appendChild(ordersPanel);
}

// Move div.orderPanel into div#order-info div.col-md-8
document.querySelectorAll('div.orderPanel').forEach((orderPanel) => {
  if (colMd8) {
    colMd8.appendChild(orderPanel);
  }
});

// Set inner HTML for div#list-container
const listContainer = document.getElementById('list-container');

if (listContainer) {
  listContainer.innerHTML = `
    <h2>Customer Help</h2>
    <div class="list-group">
      <a href="${baseUrl}${custHelpLinkText}#faq" class="list-group-item textc">View our FAQ</a>
      <a href="${baseUrl}${custHelpLinkText}#return" class="list-group-item textc">Return an order</a>
    </div>  
  `;
}

// Check if div#ordersPanelBody contains div.oneOrder
const ordersPanelBody = document.querySelector('div#ordersPanelBody');
if (ordersPanelBody && !ordersPanelBody.querySelector('div.oneOrder')) {
  const noOrdersMessage = document.createElement('em');
  noOrdersMessage.innerHTML = `You have no orders.<br>If you are looking for a textbook order, please login at <a href="https://text.uwbookstore.com/login">text.uwbookstore.com</a>`;
  ordersPanelBody.appendChild(noOrdersMessage);
}

// If the URL contains "orderdetails", append a question link
if (window.location.href.includes('orderdetails')) {
  const questionLink = document.createElement('a');

  questionLink.href = `${baseUrl}Contact`;

  questionLink.className = 'list-group-item textc order_q';
  questionLink.textContent = 'Question about this order?';

  const listGroup = document.querySelector('.list-group');
  if (listGroup) {
    listGroup.appendChild(questionLink);
  }
}

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

// SET SLIDETOGGLE FOR EXCLUSIONS BANNER IN HEADER
const bannerMsg = document.querySelector('.banner__message');
if (bannerMsg) {
  bannerMsg.addEventListener('click', function () {
    const exclusions = document.getElementById('exclusions');
    slideToggle(exclusions, 500);

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse.collapse');
    !navbarCollapse.classList.contains('collapsed')
      ? navbarToggle?.classList.add('collapsed')
      : navbarCollapse?.classList.remove('in');
  });
}

const emailOptCheckbox = document.querySelectorAll('.newCheckboxText');

emailOptCheckbox.forEach((e) => {
  e.textContent.toLowerCase().trim() ===
  'i want to receive emails particular to my school.'
    ? (e.textContent =
        'I want to receive emails related to my school & the University Book Store.')
    : null;
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

// May not be needed
// $('.dropdown-toggle').off('focus');
// $('.dropdown-toggle').off('click');
// FIXME:  Maybe leave above as jQuery for now
