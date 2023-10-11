$(document).ready(function () {
  // HANDLE LOGIN ERRORS
  if ($('.loginMessage').length) {
    $('.loginMessage')
      .removeClass('red')
      .addClass('alert alert-danger wi-50 mx-auto');
    $('<em class="fa fa-exclamation-triangle mr-2"></em>').prependTo(
      '.loginMessage'
    );

    if (
      $('.loginMessage').text() ===
      "Please use your school's single sign-on process to login."
    ) {
      $('.loginMessage').html(
        '<em class="fa fa-exclamation-triangle"></em> &mdash; Please use your <a href="' +
          baseUrl +
          'login">UW Student Sign In</a>'
      );
    }

    if ($('.validation-summary-errors').length) {
      $('.validation-summary-errors ul')
        .addClass('ul')
        .appendTo('.loginMessage');
      $('.validation-summary-errors').hide();
    }
  }

  // Set Holder.js theme for images
  // Holder.addTheme("ubs", {
  //     bg: "#c5050c",
  //     fg: "#fff",
  //     size: 11,
  //     // font: "Monaco",
  //     fontweight: "normal",
  // });

  //Textbook Return policy
  $('.retPolicy').html(
    'You may return your textbooks with a receipt for a full refund through Wednesday, September 13<sup>th</sup> (2023 Fall Semester), and through Tuesday, January 30<sup>th</sup> (2024 Spring Semester).'
  );

  $('.inline').colorbox({ inline: true, width: '50%' });

  $('#shipsubmit').removeClass('btn-default').addClass('btn-primary');

  $('p#studentIDText, p.studentNumberText').addClass('alert alert-warning');
  $('p#studentIDText').parent().removeClass('left5');
  $('p#studentIDText').css('margin-top', '-1.5rem');

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
      ' The University Book Store<br><a href="/Privacy" class="privacy" tabindex="0">Privacy Policy</a>'
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

  $('#search__toggle').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('search__open');
    if (!$('.navbar-toggle').hasClass('collapsed')) {
      $('.navbar-toggle').addClass('collapsed');
      $('.navbar-collapse.collapse').removeClass('in');
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

  // Search function replacement
  $('#search-term-mobile').keyup(function () {
    $('#searchclear-mobile').toggle(Boolean($(this).val()));
  });
  $('#searchclear-mobile').toggle(Boolean($('#search-term-mobile').val()));
  $('#searchclear-mobile').click(function () {
    $('#search-term-mobile').val('').focus();
    $(this).hide();
  });

  // Search function replacement
  $('#search-term').keyup(function () {
    $('#searchclear').toggle(Boolean($(this).val()));
  });
  $('#searchclear').toggle(Boolean($('#search-term').val()));
  $('#searchclear').click(function () {
    $('#search-term').val('').focus();
    $(this).hide();
  });

  if (baseUrl === 'https://www.uwbookstore.com/') {
    function search() {
      let searchInput = $('#search-term').val();
      searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');

      document.location.href =
        baseUrl + 'merchlist?searchtype=all&txtSearch=' + searchInput;
    }

    function searchMobile() {
      let searchInput = $('#search-term-mobile').val();
      searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');

      document.location.href =
        baseUrl + 'merchlist?searchtype=all&txtSearch=' + searchInput;
    }

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

      $('.search-field-mobile').bind('keyup', function (e) {
        if ($(this).val() !== '' && e.keyCode === 13) {
          searchMobile();
          return false;
        }
      });
      $('.search-submit-mobile').on('click', function () {
        if ($('.search-field-mobile').val() !== '') {
          searchMobile();
          return false;
        }
      });
    });
  } else if (baseUrl === 'https://text.uwbookstore.com/') {
    function search() {
      let searchInput = $('#search-term').val();
      searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');

      document.location.href =
        baseUrl + 'merchlist?searchtype=all&txtSearch=' + searchInput;
    }

    function searchMobile() {
      let searchInput = $('#search-term-mobile').val();
      searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, '');

      document.location.href =
        baseUrl + 'merchlist?searchtype=all&txtSearch=' + searchInput;
    }

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

      $('.search-field-mobile').bind('keyup', function (e) {
        if ($(this).val() !== '' && e.keyCode === 13) {
          searchMobile();
          return false;
        }
      });
      $('.search-submit-mobile').on('click', function () {
        if ($('.search-field-mobile').val() !== '') {
          searchMobile();
          return false;
        }
      });
    });
    // function search() {
    //     let searchInput = $("#search-term").val();
    //     searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, "");

    //     // Set a session variable with the input value
    //     sessionStorage.setItem("search-term", searchInput);
    //     document.location.href = baseUrl + "CourseMaterials?search=" + searchInput;
    // }

    // function searchMobile() {
    //     let searchInput = $("#search-term-mobile").val();
    //     searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, "");

    //     document.location.href = baseUrl + "CourseMaterials?search=" + searchInput;
    // }

    // function noTextSearch() {
    //     let searchInput = $("#merch-search-term").val();
    //     searchInput = searchInput.replace(/[^a-zA-Z 0-9]+/g, "");

    //     document.location.href = baseUrl + "merchlist?searchtype=all&txtSearch=" + searchInput;
    // }

    // $(function () {
    //     $(".search-field").bind("keyup", function (e) {
    //         if ($(this).val() !== "" && e.keyCode === 13) {
    //             search();
    //             return false;
    //         }
    //     });
    //     $(".search-submit").on("click", function () {
    //         if ($(".search-field").val() !== "") {
    //             search();
    //             return false;
    //         }
    //     });

    //     $(".search-field-mobile").bind("keyup", function (e) {
    //         if ($(this).val() !== "" && e.keyCode === 13) {
    //             searchMobile();
    //             return false;
    //         }
    //     });
    //     $(".search-submit-mobile").on("click", function () {
    //         if ($(".search-field-mobile").val() !== "") {
    //             searchMobile();
    //             return false;
    //         }
    //     });

    //     $(".merch-search-field").bind("keyup", function (e) {
    //         if ($(this).val() !== "" && e.keyCode === 13) {
    //             noTextSearch();
    //             sessionStorage.removeItem("search-term");
    //             return false;
    //         }
    //     });
    //     $(".merch-search-submit").on("click", function () {
    //         if ($(".merch-search-field").val() !== "") {
    //             noTextSearch();
    //             sessionStorage.removeItem("search-term");
    //             return false;
    //         }
    //     });
    // });
  }

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
  $('.panel.panel-info.Dynamic_Items .panel-body').addClass('merch__card grid');
  $('div.One_Dynamic')
    .removeClass(
      'col-lg-2 col-md-2 col-sm-3 col-xs-6 textc dynamicMerchSix dynamicMerchTwo dynamicMerchFour'
    )
    .addClass('merch__card-item merch__card-item-small');
  $('div.One_Dynamic a').addClass('merch__card-link');
  $('img.One_Dynamic_Image').removeAttr('width');
  $('img.One_Dynamic_Image').addClass('merch__card-img');

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

  // Email signup form
  (function ($) {
    $('.email-submit').click(function () {
      const email = $('#user_attributes_email_address').val();
      let newUrl = 'https://i.univbkstr.com/email/?email=' + email;
      if ($(this).attr('name') === 'signup') {
        newUrl += '&signup=true';
      }
      window.location.assign(newUrl);
    });
  })(jQuery);

  /* Account Options */
  if (baseUrl === 'https://www.uwbookstore.com/') {
    if ($('#h_nav a:contains("Log Out")').length) {
      // console.log("You can view your acount or logout!");
      $('#login').html(
        [
          '<a href="https://www.uwbookstore.com/customeraccount?s=' +
            subUrl +
            '"><span>My Account</span> <em class="fa fa-user"></em></a> <span class="logout"> / <a href="' +
            baseUrl +
            'logout">logout</a></span>',
        ].join('\n')
      );
    } else {
      // console.log("You can log in...");
      $('#login').html(
        [
          '<a href="' +
            baseUrl +
            'login"><span>login</span> <em class="fa fa-user"></em></a>',
        ].join('\n')
      );
    }
  } else if (baseUrl === 'https://text.uwbookstore.com/') {
    if ($('#h_nav a:contains("Log Out")').length) {
      // console.log("You can view your acount or logout!");
      $('#login').html(
        [
          '<a href="https://text.uwbookstore.com/customeraccount?s=' +
            subUrl +
            '"><span>My Account</span> <em class="fa fa-user"></em></a> <span class="logout"> / <a href="' +
            baseUrl +
            'logout">logout</a></span>',
        ].join('\n')
      );
    } else {
      // console.log("You can log in...");
      $('#login').html(
        [
          '<a href="' +
            baseUrl +
            'login"><span>login</span> <em class="fa fa-user"></em></a>',
        ].join('\n')
      );
    }
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

  $('<div class="grid form__actions"></div>').appendTo('#loginPanel');
  $('input.loginSubmit')
    .removeClass('bottom10')
    .appendTo('.grid.form__actions');

  $(
    '<div class="alert alert-danger">If checking out as a guest, please enter an email address (for transactional emails), and click "Login" to continue.</div>'
  ).insertAfter('label.radioGuest');
  // if ($("label.radioGuest span").length) {
  //   $("input.loginSubmit").attr("value", "Continue");
  //   console.log("Guest user...");
  // }
  $('a.forgotPasswordLink')
    .attr('class', 'forgotPasswordLink btn btn-text')
    .appendTo('.grid.form__actions');
  $(
    '<div class="alert alert-default"><p>Don\'t have a University Book Store account?</p></div>'
  ).appendTo('#loginPanel');
  $('a.registerHereLink')
    .removeClass('bottom10')
    .addClass('btn btn-text')
    .appendTo('.alert.alert-default');
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

  // SHOPPING CART CODE
  // const itemCount = $("span#ItemCount").text();
  // let total = $("span#SubTotal").text();
  // Blue 84 Long Sleeve Shirt "Wisconsin" T-Shirt (Red)

  // Thanks to Joe Ward at isubookstore.com
  //this removes the old cart and moves the hidden cart to the old cart spot.
  // if($('div#contentSection').length) {
  //     $('span#ItemCount').addClass('nav__cart--count').appendTo('.nav__cart--link');
  // }
  if ($('div#contentSection').length) {
    // $(".cart-count").text(itemCount);
    $('span#ItemCount').appendTo('.cart-count');
  }

  if (
    window.location.href.search(/ShoppingCart/) !== -1 ||
    window.location.href.search(/shoppingcart/) !== -1 ||
    window.location.href.search(/shoppingCart/) !== -1
  ) {
    // $("select.Merchandise_Type_Code").prop("disabled", "disabled");
    $('h1.page_header').hide();
    $('#contentSection').addClass('entry-content');
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
      if (baseUrl === 'https://www.uwbookstore.com/') {
        $(
          '<div class="clearfix"></div><div class="row"><div class="col-md-6"><div class="alert alert-success" style="width: 100%; margin: 2rem auto;"><div class="center"><em>NOTE:</em></div><div class="center">Promotional Discounts applied to items on your cart will not be viewable until the end of the checkout process.</div></div></div><div class="col-md-6"><div class="clearfix"></div><div class="alert alert-info" style="width: 100%; margin: 2rem auto;"><div class="center"><em>Do you have a Promo Code?</em></div><div class="center">You will be prompted for your Promo Code at checkout before entering your credit card information.</div></div></div></div>'
        ).appendTo('#contentSection');

        // $(
        //   '<div class="clearfix"></div><div class="alert alert-info" style="width: 100%; max-width: 60rem; margin: 2rem auto;"><div class="center"><em>Do you have a Promo Code?</em></div><div class="center">You will be prompted for your Promo Code at checkout before entering your credit card information.</div></div>'
        // ).appendTo("#contentSection");
      } else if (baseUrl === 'https://text.uwbookstore.com/') {
        $(
          '<p><strong>Pricing Disclaimer</strong><br/>Pricing is subject to change without notice. All totals are calculated using new prices, as we cannot guarantee the availability of used books. Pricing changes often occur daily.<br/> We make every effort to ensure the accuracy of the pricing on this web site.</p><div class="center"><strong>We screen diligently for credit card fraud.</strong></div>'
        ).appendTo('#contentSection');
      }

      $('input#PaymentBtn').val('Checkout');
    } else {
      // console.log("No items in cart");
      $('.validation-summary-errors').hide();
      if (baseUrl === 'https://www.uwbookstore.com/') {
        $(
          '<div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i><p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="' +
            baseUrl +
            '" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a><div class="cart__account"><p><a class="btn btn-text" href="' +
            baseUrl +
            'Customer-Help" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span></div></div></div>'
        ).insertBefore('.Continue_Shopping');
        $('.Continue_Shopping').hide();
      } else if (baseUrl === 'https://text.uwbookstore.com/') {
        $(
          '<div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i><p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="' +
            baseUrl +
            '" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a><div class="cart__account"><p><a class="btn btn-text" href="' +
            baseUrl +
            'SiteText?id=63210" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span></div></div></div>'
        ).insertBefore('.Continue_Shopping');
        $('.Continue_Shopping').hide();
      } else if (baseUrl === 'http://med.uwbookstore.com/') {
        $(
          '<div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i><p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="' +
            baseUrl +
            '" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a><div class="cart__account"><p><a class="btn btn-text" href="' +
            baseUrl +
            'SiteText?id=62781" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span></div></div></div>'
        ).insertBefore('.Continue_Shopping');
      } else if (baseUrl === 'http://waa.uwbookstore.com/') {
        $(
          '<div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i><p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="' +
            baseUrl +
            '" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a><div class="cart__account"><p><a class="btn btn-text" href="' +
            baseUrl +
            'SiteText?id=63210" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span class="phone">(800) 993-2665</span></div></div></div>'
        ).insertBefore('.Continue_Shopping');
      }
      // $(".Continue_Shopping, h1.page_header").hide();
    }
  }

  // CHECKOUT PAGE
  $('div#registerAccount h3#registerTitle').text(
    'Register Your Account (optional)'
  );

  // START OF LOYALTY ACCOUNT INFORMATION PAGE
  if (
    window.location.href.search(/customerloyalty/) !== -1 ||
    window.location.href.search(/CustomerLoyalty/) !== -1
  ) {
    $('div.LocationBar')
      .first()
      .removeClass('LocationBar')
      .addClass('breadCrumbs');
    $('div.main_content br').first().remove();
    const pointsTotal = $('.loyaltyPoint').text();
    let totalPointsAvail = $('span[id*=totalPointsAvail]').text();
    const ltdPoints = $('span[id*=ltdPoints]').text();
    const ltdRedeemed = $('span[id*=ltdRedeemed]').text();

    $('div.main_content').addClass('group');
    $('<div class="content-left group" id="content-left">\n</div>').insertAfter(
      'div#ctl00_ctl00_Content_Content_pnlSummary'
    );

    // Point Progress Bar
    $(
      '<div class="progress-wrapper"><div class="rewards group"><div id="reward-base" class="left"></div><div id="reward-max" class="right"></div></div><div class="progress-bar-wrapper"><div class="progress-bar"><span id="progress-percent" class="progress-percent"></span></div></div><div class="points group"><span id="point-base" class="left"></span><span id="point-max" class="right"></span></div></div>'
    ).appendTo('div#content-left');
    // Point Progress Bar

    // Point Summary Table
    $(
      '<table id="loyaltyPoints">\n<thead>\n</thead>\n<tbody>\n</tbody>\n</table>'
    ).appendTo('div#content-left');
    $(
      '<tr>\n<th>Total Points:</th>\n<th>Total Points Available:</th>\n<th>Total Points earned life-to-date:</th>\n<th>Total Points redeemed life-to-date:</th>\n</tr>'
    ).appendTo('table#loyaltyPoints thead');
    $(
      '<tr>\n<td>' +
        pointsTotal +
        '</td>\n<td>' +
        totalPointsAvail +
        '</td>\n<td>' +
        ltdPoints +
        '</td>\n<td>' +
        ltdRedeemed +
        '</td>\n</tr>'
    ).appendTo('table#loyaltyPoints tbody');
    $('div#ctl00_ctl00_Content_Content_pnlSummary').hide();
    // Point Summary Table

    $('<div id="redeem-link" class="group"></div>').appendTo(
      'div#content-left'
    );
    if (totalPointsAvail < 351) {
      $('span#point-base').text('0');
      $('span#point-max').text('350');
      $('div#reward-base').text(' ');
      $('div#reward-max').text('Next reward ');
      $('<span>$5</span>').prependTo('div#reward-max');
      const percent = ((totalPointsAvail / 350) * 100).toFixed(5);
      $('span#progress-percent').css('width', percent + '%');
      $(
        '<span class="loyalty-msg">Uh Oh! Looks like you haven\'t reached a reward yet.  You can view your progress toward the next reward above.</span>'
      ).appendTo('div#redeem-link');
      //$('a[id$=Content_redeemLink]').addClass('no-button').removeAttr('href').appendTo('div#redeem-link');
      $('a[id$=Content_redeemLink]').hide();
    } else if (totalPointsAvail < 551) {
      $('span#point-base').text('350');
      $('span#point-max').text('550');
      $('div#reward-base').text('Current reward ');
      $('<span>$5</span>').prependTo('div#reward-base');
      $('div#reward-max').text('Next reward ');
      $('<span>$10</span>').prependTo('div#reward-max');

      totalPointsAvail += totalPointsAvail - 350;
      const percent = ((totalPointsAvail / 200) * 100).toFixed(5);
      $('span#progress-percent').css('width', percent + '%');
      $('a[id$=Content_redeemLink]')
        .addClass('button')
        .appendTo('div#redeem-link');
    } else if (totalPointsAvail < 801) {
      $('span#point-base').text('550');
      $('span#point-max').text('800');
      $('div#reward-base span').text('$10');
      $('div#reward-max span').text('$15');
      $('div#reward-base').text('Current reward ');
      $('<span>$10</span>').prependTo('div#reward-base');
      $('div#reward-max').text('Next reward ');
      $('<span>$15</span>').prependTo('div#reward-max');
      totalPointsAvail += totalPointsAvail - 550;
      const percent = ((totalPointsAvail / 250) * 100).toFixed(5);
      $('span#progress-percent').css('width', percent + '%');
      $('a[id$=Content_redeemLink]')
        .addClass('button')
        .appendTo('div#redeem-link');
    } else if (totalPointsAvail < 1051) {
      $('span#point-base').text('800');
      $('span#point-max').text('1050');
      $('div#reward-base span').text('$15');
      $('div#reward-max span').text('$20');
      $('div#reward-base').text('Current reward ');
      $('<span>$15</span>').prependTo('div#reward-base');
      $('div#reward-max').text('Next reward ');
      $('<span>$20</span>').prependTo('div#reward-max');
      totalPointsAvail += totalPointsAvail - 800;
      const percent = ((totalPointsAvail / 250) * 100).toFixed(5);
      $('span#progress-percent').css('width', percent + '%');
      $('a[id$=Content_redeemLink]')
        .addClass('button')
        .appendTo('div#redeem-link');
    } else if (totalPointsAvail < 2001) {
      $('span#point-base').text('1050');
      $('span#point-max').text('2000');
      $('div#reward-base span').text('$20');
      $('div#reward-max span').text('$40');
      $('div#reward-base').text('Current reward ');
      $('<span>$20</span>').prependTo('div#reward-base');
      $('div#reward-max').text('Next reward ');
      $('<span>$40</span>').prependTo('div#reward-max');
      totalPointsAvail += totalPointsAvail - 1050;
      const percent = ((totalPointsAvail / 950) * 100).toFixed(5);
      $('span#progress-percent').css('width', percent + '%');
      $('a[id$=Content_redeemLink]')
        .addClass('button')
        .appendTo('div#redeem-link');
    } else {
      $('span#point-base').text('1050');
      $('span#point-max').text('2000');
      $('div#reward-base span').text('$20');
      $('div#reward-max span').text('$40');
      $('div#reward-base').html('&nbsp;');
      $('<span>$20</span>').prependTo('div#reward-base');
      $('div#reward-max').html('&nbsp;');
      $('<span>$40</span>').prependTo('div#reward-max');
      $('div.progress-bar').addClass('meter');
      $('span#progress-percent').addClass('animate');
      $('span#progress-percent').text('GREAT JOB!');
      $('a[id$=Content_redeemLink]')
        .addClass('button')
        .appendTo('div#redeem-link');
    }

    //$('a[id$=Content_redeemLink]').addClass('button').appendTo('div#redeem-link');

    $('<div id="history-link" class="group"></div>').appendTo(
      'div#content-left'
    );

    $('a[id$=lnkViewHistory]')
      .css({ 'margin-top': '20px', display: 'inline-block' })
      .appendTo('div#history-link');

    $('table#ctl00_ctl00_Content_Content_dgLoyalty').removeAttr(
      'style border cellspacing class rules'
    );

    $(
      '<div class="content-right group">\n<table id="loyalty" class="loyalty"><thead><tr><th>Points Earned</th><th>Gift Card</th><tbody><tr><td>350</td><td>$5</td></tr><tr><td>550</td><td>$10</td></tr><tr><td>800</td><td>$15</td></tr><tr><td>1050</td><td>$20</td></tr><tr><td>2000</td><td>$40</td></tr></tbody></tr></thead></table></div>'
    ).insertAfter('div#content-left');

    //<div id="notice_container"><ul><li>Reward points are redeemed during checkout in-store and online.</li><li>Only Points listed as Available below can be used. Points become available 30 days after purchase.</li><li>Points expire 90 days after the earned date.</li><li>When checking out in the store, the cashier will be prompted to apply your reward point discount to your total, getting your permission first.</li><li>When checking out online, you will be prompted to apply points in the payment options step, just before entering your payment information.</li></ul></div>
  } // END OF LOYALTY ACCOUNT INFORMATION PAGE
});
