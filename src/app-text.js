$(document).ready(function () {
  const searchBtn = document.getElementById('search');
  const searchForm = document.querySelector('li.search');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('open');
  });

  function search() {
    let searchInput = $('#search-term').val();

    searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');
    document.location.href =
      'https://text.uwbookstore.com/merchlist?searchtype=all&txtSearch=' +
      searchInput;
  }

  // Search function
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
      .addClass('alert alert-danger wi-50 mx-auto');
    $('<em class="fa fa-exclamation-triangle mr-2"></em>').prependTo(
      '.lgMessage'
    );

    if (
      $('.lgMessage').text() ===
      "Please use your school's single sign-on process to login."
    ) {
      $('.lgMessage').html(
        '<em class="fa fa-exclamation-triangle"></em> &mdash; Please use your <a href="' +
          baseUrl +
          'login">UW Student Sign In</a>'
      );
    }

    if ($('.validation-summary-errors').length) {
      $('.validation-summary-errors ul').addClass('ul').appendTo('.lgMessage');
      $('.validation-summary-errors').hide();
    }
  }

  $('.inline').colorbox({ inline: true, width: '50%' });

  $('#shipsubmit').removeClass('btn-default').addClass('btn-primary');

  $('p#studentIDText, p.studentNumberText').addClass('alert alert-info');
  $('p#studentIDText').parent().removeClass('left5');

  if (baseUrl === 'https://www.uwbookstore.com/') {
    $('#custStudID').attr(
      'placeholder',
      '10 digit phone number or UW Student ID *'
    );
  }

  // Add Copyright date to footer
  const d = new Date();
  const year = d.getFullYear();
  $('.footer .copyright').html(
    '&copy; Copyright ' +
      year +
      ' University Book Store<br><a href="/Privacy" class="privacy" tabindex="0">Privacy Policy</a>'
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

  $(
    '<div class="modal fade" id="content-modal" tabindex="-1" role="dialog" aria-labelledby="content-modal" aria-hidden="true"><div class="vertical-alignment-helper"><div class="modal-dialog vertical-align-center"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h3 class="modal-title" id="content-modal-title" style="display: inline-block;"></h3></div><div id="content-modal-body" class="modal-body"></div></div></div></div></div>'
  ).appendTo('body');

  $('.accordion')
    .find('dt')
    .click(function () {
      $(this).siblings('dt').next().slideUp(); // closes siblings
      $(this).next().slideToggle(500);
      if ($(this).next().is(':visible')) {
        $(this).toggleClass('active');
        $(this).siblings('dt').removeClass('active');
      }
    })
    .next()
    .hide();

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
  $('ul.meganav__tabs').each(function () {
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

    if (width < 955) {
      $(this).next().slideToggle(500);
      e.preventDefault();
    }
  });

  $('.navbar-toggle').click(function () {
    if ($('li.search').hasClass('search__open')) {
      $('li.search').removeClass('search__open');
    }
  });

  $('.modal-open').click(function (e) {
    $('#coming-soon').modal();
    e.stopPropagation();
  });

  if (window.location.href.toLowerCase().indexOf('noresult=1') > -1) {
    $('<div id="merch-search"></div>').insertBefore('h1#SelectTermDeptHeader');
    if (sessionStorage.getItem('search-term')) {
      const textinput = sessionStorage.getItem('search-term');
      $('#merch-search').html(
        [
          '<div class="empty-results"><h1>Sorry, we couldn\'t find what you were looking for.</h1><p>We were unable to find anything matching your search query in our text department.</p><p>You may try searching for non-textbook materials in the form below below:</p></div>',
          '<div class="form-inline">',
          '<div class="form-group">',
          '<label class="sr-only" for="merch-search-term">Search</label>',
          '<input type="search" class="merch-search-field form-control" id="merch-search-term" placeholder="Non Textbook Search..." value="' +
            textinput +
            '">',
          '<span id="merch-searchclear" class="fa fa-times-circle-o"></span>',
          '</div><button id="merch-search-submit" type="submit" class="merch-search-submit btn btn-primary" value="Go!">',
          '<em class="fa fa-search" aria-hidden="true"></em>',
          '</button>',
          '</div>',
        ].join('\n')
      );
      // Search function replacement
      $('#merch-search-term').keyup(function () {
        $('#merch-searchclear').toggle(Boolean($(this).val()));
      });
      $('#merch-searchclear').toggle(Boolean($('#merch-search-term').val()));
      $('#merch-searchclear').click(function () {
        $('#merch-search-term').val('').focus();
        $(this).hide();
      });
      console.log(`Choice A`);
    } else {
      $('#merch-search').html(
        [
          '<div class="empty-results"><h1>Sorry, we couldn\'t find what you were looking for.</h1><p>We were unable to find anything matching your search query in our text department.</p><p>You may try searching for non-textbook materials in the form below below:</p></div>',
          '<div class="form-inline">',
          '<div class="form-group">',
          '<label class="sr-only" for="merch-search-term">Search</label>',
          '<input type="search" class="merch-search-field form-control" id="merch-search-term" placeholder="Non Textbook Search...">',
          '<span id="merch-searchclear" class="fa fa-times-circle-o"></span>',
          '</div><button id="merch-search-submit" type="submit" class="merch-search-submit btn btn-primary" value="Go!">',
          '<em class="fa fa-search" aria-hidden="true"></em>',
          '</button>',
          '</div>',
        ].join('\n')
      );
      // Search function replacement
      $('#merch-search-term').keyup(function () {
        $('#merch-searchclear').toggle(Boolean($(this).val()));
      });
      $('#merch-searchclear').toggle(Boolean($('#merch-search-term').val()));
      $('#merch-searchclear').click(function () {
        $('#merch-search-term').val('').focus();
        $(this).hide();
      });

      console.log(`Choice B`);
    }
  }

  // Dynamic merch modules...
  if (!$('.panel.panel-info.Dynamic_Items').has('div.One_Dynamic').length) {
    $('.panel.panel-info.Dynamic_Items').hide();
  }

  $('<div class="featured__items-block"></div>').insertAfter(
    '.wiscard__wrapper'
  );
  $('.panel.panel-info.Dynamic_Items')
    .addClass('container')
    .appendTo('.featured__items-block');
  $('.panel.panel-info.Dynamic_Items .panel-body').addClass('merch__card flex');
  $('div.One_Dynamic')
    .removeClass(
      'col-lg-2 col-md-2 col-sm-3 col-xs-6 textc dynamicMerchSix dynamicMerchTwo dynamicMerchFour'
    )
    .addClass('merch__card-item merch__card-item-small');
  $('div.One_Dynamic a').addClass('merch__card-link');
  $('img.One_Dynamic_Image').removeAttr('width');
  $('img.One_Dynamic_Image').addClass('merch__card-img');

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

  /* Account Options */
  // login/account
  if ($('#myNavbar a:contains("Login")').length) {
    // console.log('Should show Login...');
    $('#login').html(
      `
            <a href="https://text.uwbookstore.com/login" class="navbar__account">
              <em class="fa fa-user" aria-hidden="true"></em>
              <span>Login</span>
            </a>
          `
    );
  } else {
    // console.log('Should show Account...');
    $('#login').html(
      `
            <a href="https://text.uwbookstore.com/customeraccount?s=text.uwbookstore.com" class="navbar__account">
              <em class="fa fa-user" aria-hidden="true"></em>
              <span>Account</span>
            </a>
          `
    );
  }

  // LOGIN
  // $("h1.page_header").hide();
  $('#loginPanelHeader, #lostPasswordPanelHeader').hide();
  $(
    '<h1 class="heading__line-center">Log In</h1><!--<div class="alert alert-danger"><em>Attention</em> - Guest checkout is temporarily unavailable.</div>-->'
  ).prependTo('#loginPanel');

  $('#login_UserName, #login_Password').removeClass('max_width300');
  $('<label for="login_UserName">Email/Username</label>').insertBefore(
    '#login_UserName'
  );
  $('#login_UserName').attr('type', 'email').attr('autofocus', 'autofocus');
  // $("label.radioGuest span").html(
  //     'I am a Guest User.<span class="normal">(Please Note: Loyalty points are not accrued when signed in as a Guest User)</span>'
  // );
  // $('input#login_guestLogin').attr('disabled', 'disabled');
  $('<label for="login_Password">Password</label>').insertBefore(
    '#login_Password'
  );

  $('<div class="flex form__actions"></div>').appendTo('#loginPanel');
  $('input.loginSubmit')
    .removeClass('bottom10')
    .appendTo('.flex.form__actions');

  $(
    '<div class="alert alert-danger">If checking out as a guest, please enter an email address (for transactional emails), and click "Login" to continue.</div>'
  ).insertAfter('label.radioGuest');
  // if ($("label.radioGuest span").length) {
  //   $("input.loginSubmit").attr("value", "Continue");
  //   console.log("Guest user...");
  // }
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
    'https://secure2.mbsbooks.com//CustomerRegister?s=' +
      subUrl +
      '&ReturnUrl=customeraccount'
  );

  $('p.registerHere, p.forgotPassword').hide();

  // Lost Password
  $(
    '<h1 id="lost-heading" class="heading__line-center"><span>Lost Password</span></h1>'
  ).prependTo('#lostPasswordPanel');
  $(
    '<a href="javascript:history.go(-1)" class="btn btn-text"><i class="fa fa-chevron-left"></i> Return to Previous Page</a>'
  ).insertAfter('#lost-heading');
  $('#lostPasswordPanelBody a.previousLink').hide();
  $('#lostPasswordPanelBody [class^="col"]').removeAttr('class');

  // Customer account
  $('ul#accountUL').addClass('list-group');
  $('li.accountLI').addClass('list-group-item');
  $(
    '<li class="accountLI list-group-item"><a href="https://text.uwbookstore.com/SelectTermDept" class="accountLink">Order Course Materials</a></li>'
  ).insertBefore("li.accountLI:contains('Update Your Profile')");
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

  //   $('ul.breadcrumb').removeClass('background_none');
  // $("ul.breadcrumb").hide();

  $(
    '<div id="order-info" class="row"><div id="list-container" class="col-md-4"></div><div class="col-md-8"></div></div>'
  ).insertAfter('h1#ordersHeader');
  $('div#ordersPanel').detach().appendTo('div#order-info div.col-md-8');
  $('div.orderPanel').detach().appendTo('div#order-info div.col-md-8');

  if (baseUrl === 'https://www.uwbookstore.com/') {
    $('div#list-container').html(
      [
        '<h2 class="textc">Customer Help</h2>',
        '<div class="list-group">',
        '<a href="' +
          baseUrl +
          'Customer-Help#faq" class="list-group-item textc">View our FAQ</a>',
        '<a href="' +
          baseUrl +
          'Customer-Help#return" class="list-group-item textc">Return an order</a>',
        '</div>',
      ].join('\n')
    );

    if (!$('div#ordersPanelBody').has('div.oneOrder').length) {
      $(
        '<em>You have no orders.<br>If you are looking for a textbook order, please login at <a href="https://text.uwbookstore.com/login">text.uwbookstore.com</a></em>'
      ).appendTo('div#ordersPanelBody');
    }
  } else {
    $('div#list-container').html(
      [
        '<h2 class="textc">Customer Help</h2>',
        '<div class="list-group">',
        '<a href="' +
          baseUrl +
          'SiteText?id=2369#faq" class="list-group-item textc">View our FAQ</a>',
        '<a href="' +
          baseUrl +
          'SiteText?id=2369#return" class="list-group-item textc">Return an order</a>',
        '</div>',
      ].join('\n')
    );

    if (!$('div#ordersPanelBody').has('div.oneOrder').length) {
      $(
        '<em>You have no orders.<br>If you are looking for a non-text order, please login at <a href="https://www.uwbookstore.com/login">www.uwbookstore.com</a></em>'
      ).appendTo('div#ordersPanelBody');
    }
  }

  if (window.location.href.search(/orderdetails/) !== -1) {
    const orderNum = $('#ordersHeader').text();
    $(
      '<a href="' +
        baseUrl +
        'contact/?order_id=' +
        orderNum +
        '" class="list-group-item textc order_q">Question about this order?</a>'
    ).appendTo('.list-group');
  }

  if ($('#h_nav a:contains("Login")').length) {
    $('#logoutPanelHeader').hide();
    $(
      '<h1 class="heading__line-center"><span>You are now logged out</span></h1>'
    ).appendTo('#logoutPanel');
    $('.logoutText').remove();
    $(
      '<div class="login__btns"><a href="' +
        baseUrl +
        'login" class="btn btn-secondary">Log Back In</a><a href="' +
        baseUrl +
        'home" class="btn btn-primary">UW Book Store</a></div>'
    ).appendTo('#logoutPanel');
  }

  if (
    window.location.href.search(/ShoppingCart/) !== -1 ||
    window.location.href.search(/shoppingcart/) !== -1 ||
    window.location.href.search(/shoppingCart/) !== -1
  ) {
    // $("select.Merchandise_Type_Code").prop("disabled", "disabled");
    $('h1.page_header').hide();

    $('<h1 class="heading__line">Your Shopping Cart</h1>').insertBefore(
      '.Continue_Shopping'
    );
    $('.Continue_Shopping').removeClass('textr').addClass('padding0');
    $('.Continue_Shopping + div.panel-default').hide();
    $(
      '<a href="' +
        baseUrl +
        'home" class="btn btn-primary">Continue Shopping</a>'
    ).insertAfter('a#Shopping_Button');
    $('#Shopping_Button').hide();

    if (
      $('.Payment_btn').is(':visible') ||
      $('button.Continue_Checkout_btn').is(':visible')
    ) {
      $(
        '<p><strong>Pricing Disclaimer</strong><br/>Pricing is subject to change without notice. All totals are calculated using new prices, as we cannot guarantee the availability of used books. Pricing changes often occur daily.<br/> We make every effort to ensure the accuracy of the pricing on this web site.</p><div class="center"><strong>We screen diligently for credit card fraud.</strong></div>'
      ).appendTo('#contentSection');

      $('input#PaymentBtn').val('Checkout');
    } else {
      // console.log("No items in cart");
      $('.validation-summary-errors').hide();
      $(
        '<div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i><p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="' +
          baseUrl +
          '" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a><div class="cart__account"><p><a class="btn btn-text" href="' +
          baseUrl +
          'SiteText?id=63210" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span></div></div></div>'
      ).insertBefore('.Continue_Shopping');
      $('.Continue_Shopping').hide();
      // $(".Continue_Shopping, h1.page_header").hide();
    }
  }

  // CHECKOUT PAGE
  $('div#registerAccount h3#registerTitle').text(
    'Register Your Account (optional)'
  );
});
