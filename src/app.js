// Dynamically add innerText/HTML to elements
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

$(document).ready(function () {
  /* Back to Top Button */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.backtotop').fadeIn(200);
    } else {
      $('.backtotop').fadeOut(200);
    }
  });

  $('.backtotop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // START OF SEARCH ELEMENT (NAVBAR)
  const searchBtn = document.getElementById('search');
  const searchForm = document.querySelector('li.search');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('open');
  });

  // Search function
  function search() {
    let searchInput = $('#search-term').val();
    searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');
    document.location.href = `${baseUrl}merchlist?searchtype=all&txtSearch=${searchInput}`;
  }

  $('.search-submit').on('click', function () {
    if ($('.search-field').val() !== '') {
      search();
      return false;
    }
  });

  $(function () {
    $('.search-field').bind('keyup', function (e) {
      if ($(this).val() !== '' && e.keyCode === 13) {
        search();
        return false;
      }
    });
    $('.search-submit').on('click', function () {
      if ($('.search-field').val() !== '') {
        search();
        return false;
      }
    });
  });

  // SHOPPING CART CODE
  if ($('div#contentSection').length) {
    const cartCount = $('span#ItemCount').text();
    let itemText;
    cartCount === '1' ? (itemText = 'Item') : (itemText = 'Items');
    $('span#ItemCount').appendTo('#cart-count');
    $('#cart-text').text(itemText);
  }

  // HANDLE LOGIN ERRORS
  if ($('.lgMessage').length) {
    $('.lgMessage')
      .removeClass('red')
      .addClass('alert alert-danger wi-50 mx-auto px-1');
    $(`<em class="fa fa-exclamation-triangle mr-2"></em>`).prependTo(
      '.lgMessage'
    );

    if (
      $('.lgMessage').text() ===
      "Please use your school's single sign-on process to login."
    ) {
      $('.lgMessage').html(
        `
          <em class="fa fa-exclamation-triangle"></em> &mdash; Please use your <a href="https://www.uwbookstore.com/login">UW Student Sign In</a>
        `
      );
    }

    if ($('.validation-summary-errors').length) {
      $('.validation-summary-errors ul').addClass('ul').appendTo('.lgMessage');
      $('.validation-summary-errors').hide();
    }
  }

  $('.inline').colorbox({ inline: true, width: '50%' });

  $('#shipsubmit').removeClass('btn-default').addClass('btn-primary');

  $('p#studentIDText, div#billingstudentNumberWrapper').addClass(
    'alert alert-danger bold'
  );
  $('p.studentNumberText').addClass('mt-1');
  $('p#studentIDText').parent().removeClass('left5');

  $('#custStudID').attr(
    'placeholder',
    '10 digit phone number or UW Student ID *'
  );

  $.urlParam = function (name) {
    const results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
      window.location.href
    );
    return results[1] || 0;
  };

  $('.merchButtons a').click(function () {
    localStorage.removeItem('MaintainScrollPosition');
  });

  if (window.location.href.search(/SiteText/)) {
    $('#contentSection').addClass('padding0');
  }

  $('.banner__message').click(function () {
    $('#exclusions').slideToggle(500);
    if (!$('.navbar-toggle').hasClass('collapsed')) {
      $('.navbar-toggle').addClass('collapsed');
      $('.navbar-collapse.collapse').removeClass('in');
    }
  });

  $('.dropdown-menu').click(function (e) {
    e.stopPropagation();
  });

  $('.dropdown-toggle').off('focus');
  $('.dropdown-toggle').off('click');

  $('.dropdown-toggle').click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $('.has-megamenu, .dropdown').removeClass('open');
      $(this).parent().toggleClass('open');
    }
  });

  $('.modal-open2').click(function (e) {
    $('#buyback-confirm').modal();
    e.stopPropagation();
  });

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

  // Hours & Locations Tabs
  $('.locations__nav ul').each(function () {
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
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a.store__link', function (e) {
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

  $('.nav-title').on('click', function (e) {
    const width = $(window).width();

    if (width < 1169) {
      $(this).next().slideToggle(500);
      e.preventDefault();
    }
  });

  // Monthly Coupons
  $('#couponbook .coupons li').click(function () {
    $(this).toggleClass('print');
  });

  $('.select').click(function (e) {
    $('#couponbook .coupons li').removeClass('print');
    $('#couponbook .coupons li').addClass('print');
    e.preventDefault();
  });
  $('.deselect').click(function (e) {
    $('#couponbook .coupons li').removeClass('print');
    e.preventDefault();
  });
  $('#couponbook .print').click(function () {
    window.print();
  });

  /* Account Options */
  if (baseUrl === 'https://www.uwbookstore.com/') {
    // login/account
    if ($('#myNavbar a:contains("Login")').length) {
      $('#login').html(
        `
            <a href="https://www.uwbookstore.com/login" class="navbar__account">
              <em class="fa fa-user" aria-hidden="true"></em>
              <span>Login</span>
            </a>
          `
      );
    } else {
      $('#login').html(
        `
            <a href="https://www.uwbookstore.com/customeraccount?s=www.uwbookstore.com" class="navbar__account">
              <em class="fa fa-user" aria-hidden="true"></em>
              <span>Account</span>
            </a>
          `
      );
    }
  } else if (baseUrl === 'https://med.uwbookstore.com/') {
    // login/account
    if ($('#myNavbar a:contains("Login")').length) {
      // console.log('Should show Login...');
      $('#login').html(
        `
            <a href="https://med.uwbookstore.com/login" class="navbar__account">
              <em class="fa fa-user" aria-hidden="true"></em>
              <span>Login</span>
            </a>
          `
      );
    } else {
      // console.log('Should show Account...');
      $('#login').html(
        `
            <a href="https://med.uwbookstore.com/customeraccount?s=med.uwbookstore.com" class="navbar__account">
              <em class="fa fa-user" aria-hidden="true"></em>
              <span>Account</span>
            </a>
          `
      );
    }
  }

  // LOGIN
  $('a.forgotPasswordLink')
    .attr('class', 'forgotPasswordLink btn btn-text')
    .appendTo('.flex.form__actions');
  $(
    '<div class="alert alert-light text-center"><p>Don\'t have a University Book Store account?</p></div>'
  ).appendTo('#loginPanel');
  $('a.registerHereLink')
    .removeClass('bottom10')
    .addClass('btn btn-text')
    .appendTo('.alert.alert-light text-center');
  $('a.registerHereLink').attr(
    'href',
    'https://secure2.mbsbooks.com//CustomerRegister?s=www.uwbookstore.com&ReturnUrl=customeraccount'
  );

  $('p.registerHere, p.forgotPassword').hide();

  // Lost Password
  $(
    `<h1 id="lost-heading" class="heading__line-center">Lost Password</h1>`
  ).prependTo('#lostPasswordPanel');
  $('#lostPasswordPanelHeader.card-header').hide();
  $('#lostPasswordPanelBody a.previousLink').addClass(
    'btn btn-outline-primary mb-2'
  );
  $('#lostPasswordPanelBody').addClass('text-center');
  $('#lostPasswordPanelBody [class^="col"]').removeAttr('class');

  // Customer account
  $('ul#accountUL').addClass('list-group');
  $('li.accountLI').addClass('list-group-item');
  // $('<li class="accountLI list-group-item"><a href="' + baseUrl + '/GiftRegistry" class="accountLink">Your Wishlists</a></li>').insertAfter("li.accountLI:contains('Track Orders')");
  $("li.accountLI a:contains('Track Orders')").text('Manage Orders');
  $("li.accountLI a:contains('Bookstore Profile Number')").parent().hide();
  $("li.accountLI a:contains('View Loyalty Account Information')")
    .parent()
    .hide();
  // Manager Orders
  $('div#ordersPanelBody div.oneOrder:last-child').removeClass(
    'bottomBorder bottom10'
  );
  $('div.logoutLink').hide();

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
    if (baseUrl === 'https://www.uwbookstore.com/') {
      $(
        `<a href="https://www.uwbookstore.com/Contact" class="list-group-item textc order_q">Question about this order?</a>`
      ).appendTo('.list-group');
    } else if (baseUrl === 'https://text.uwbookstore.com/') {
      $(
        `<a href="https://text.uwbookstore.com/Contact" class="list-group-item textc order_q">Question about this order?</a>`
      ).appendTo('.list-group');
    }
  }

  if (baseUrl === 'https://www.uwbookstore.com/') {
    if ($('#h_nav a:contains("Login")').length) {
      $('#logoutPanelHeader').hide();
      $(
        '<h1 class="heading__line-center"><span>You are now logged out</span></h1>'
      ).appendTo('#logoutPanel');
      $('.logoutText').remove();
      $(
        '<div class="login__btns"><a href="https://www.uwbookstore.com/login" class="btn btn-secondary">Log Back In</a><a href="https://www.uwbookstore.com/home" class="btn btn-primary">UW Book Store</a></div>'
      ).appendTo('#logoutPanel');
    }
  } else if (baseUrl === 'https://med.uwbookstore.com/') {
    if ($('#h_nav a:contains("Login")').length) {
      $('#logoutPanelHeader').hide();
      $(
        '<h1 class="heading__line-center"><span>You are now logged out</span></h1>'
      ).appendTo('#logoutPanel');
      $('.logoutText').remove();
      $(
        '<div class="login__btns"><a href="https://med.uwbookstore.com/login" class="btn btn-secondary">Log Back In</a><a href="https://med.uwbookstore.com/home" class="btn btn-primary">Home</a></div>'
      ).appendTo('#logoutPanel');
    }
  }

  if (
    window.location.href.search(/ShoppingCart/) !== -1 ||
    window.location.href.search(/shoppingcart/) !== -1 ||
    window.location.href.search(/shoppingCart/) !== -1
  ) {
    $('h1.page_header').hide();

    $('<h1 class="heading__line">Your Shopping Cart</h1>').insertBefore(
      '.Continue_Shopping'
    );
    $('.Continue_Shopping').removeClass('textr').addClass('padding0');
    $('.Continue_Shopping + div.panel-default').hide();
    $(
      '<a href="https://www.uwbookstore.com/home" class="btn btn-primary">Continue Shopping</a>'
    ).insertAfter('a#Shopping_Button');
    $('#Shopping_Button').hide();

    if (
      $('.Payment_btn').is(':visible') ||
      $('button.Continue_Checkout_btn').is(':visible')
    ) {
      $(
        '<div class="clearfix"></div><div class="row"><div class="col-md-6"><div class="alert alert-success" style="width: 100%; margin: 2rem auto;"><div class="center"><em>NOTE:</em></div><div class="center">Promotional Discounts applied to items on your cart will not be viewable until the end of the checkout process.</div></div></div><div class="col-md-6"><div class="clearfix"></div><div class="alert alert-info" style="width: 100%; margin: 2rem auto;"><div class="center"><em>Do you have a Promo Code?</em></div><div class="center">You will be prompted for your Promo Code at checkout before entering your credit card information.</div></div></div></div>'
      ).appendTo('#contentSection');

      $('input#PaymentBtn').val('Checkout');
    } else {
      // console.log("No items in cart");
      $('.validation-summary-errors').hide();
      $(
        '<div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i><p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="https://www.uwbookstore.com/" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a><div class="cart__account"><p><a class="btn btn-text" href="https://www.uwbookstore.com/Customer-Help" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span></div></div></div>'
      ).insertBefore('.Continue_Shopping');
      $('.Continue_Shopping').hide();
      // $(".Continue_Shopping, h1.page_header").hide();
    }
  }

  // CHECKOUT PAGE
  $('div#registerAccount h3#registerTitle').text(
    'Register Your Account (optional)'
  );
  $('<br><small class="red">Limit one promo code per order</small>').appendTo(
    'label#promoLabel'
  );

  // THINGS THAT SHOULD BE IN THE FOOTER OF THE PAGE
  // Add Copyright date to footer
  const d = new Date();
  const year = d.getFullYear();
  $('.footer .copyright').html(
    `
      &copy; Copyright ${year} University Book Store | <a href="/Privacy" class="privacy" tabindex="0">Privacy Policy</a>
    `
  );

  $(
    `
      <div class="modal fade" id="content-modal" tabindex="-1" role="dialog" aria-labelledby="content-modal"
        aria-hidden="true">
        <div class="vertical-alignment-helper">
          <div class="modal-dialog vertical-align-center">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                  <span class="sr-only">Close</span>
                </button>
                <h3 class="modal-title" id="content-modal-title" style="display: inline-block;"></h3>
              </div>
              <div id="content-modal-body" class="modal-body">
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  ).appendTo('body');
});
