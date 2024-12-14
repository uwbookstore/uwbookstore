$(document).ready(function () {
  // Info message for incoming freshmen...
  $(
    '<div class="alert alert-warning info-msg"><div class="row"><div class="col-xs-1"><i class="fa fa-exclamation-triangle"></i></div><div class="col-xs-11">If you are an incoming freshman, you may not need to register a new account. Try to login using your wisc.edu email address. Your password is your UW student ID number.</div></div></div>'
  ).insertBefore($('h1.page_header').parent());

  $('#login_UserName').focus();
  $('#login_UserName, #login_Password').removeClass('max_width300');
  $('p.forgotPassword').insertAfter('input.loginSubmit');
  $(
    '<div class="alert alert-warning">Don\'t have a University Book Store account? <a href="https://secure2.mbsbooks.com/CustomerRegister?s=text.uwbookstore.com&&ReturnUrl=Home" title="Create an account">Register Here</a></div>'
  ).insertAfter('p.forgotPassword');

  // Guest Login
  $('label.radioGuest span span.normal').text(
    '(Please Note: Loyalty points are not accrued when signed in as a Guest User)'
  );

  // Lost Password
  $('input#lostPasswordEmail')
    .parent()
    .removeClass('col-lg-4 col-md-6 col-sm-8 col-xs-12');

  // Logout
  $(
    '<div class="logoutMsg"><div class="breadCrumbs center">You are now logged out.</div><div id="loginOptions"></div></div>'
  ).appendTo('div#logoutPanelBody');
  $(
    '<a href="https://text.uwbookstore.com/home" class="btn btn-primary">University Book Store Home</a>'
  ).insertAfter('div.breadCrumbs');
  $('a.loginAgainLink')
    .text('Log Back In')
    .removeClass('btn-primary')
    .addClass('btn-secondary')
    .appendTo('div#loginOptions');
  $('div.logoutText').hide();

  // Customer account
  $('ul#accountUL').addClass('list-group');
  $('li.accountLI').addClass('list-group-item');
  $("li.accountLI a:contains('Track Orders')").text('Manage Orders');

  // Manager Orders
  $('div#ordersPanelBody div.oneOrder:last-child').removeClass(
    'bottomBorder bottom10'
  );
  $('div.logoutLink').hide();

  // $('<div id="list-container"></div>').insertAfter('div#ordersPanel');
  $('ul.breadcrumb').removeClass('background_none');

  $(
    '<div id="order-info" class="row"><div id="list-container" class="col-md-4"></div><div class="col-md-8"></div></div>'
  ).insertAfter('h1#ordersHeader');
  $('div#ordersPanel').detach().appendTo('div#order-info div.col-md-8');
  $('div.orderPanel').detach().appendTo('div#order-info div.col-md-8');

  $('div#list-container').html(
    [
      '<h2 class="textc">Customer Help</h2>',
      '<div class="list-group">',
      '<a href="https://text.uwbookstore.com/SiteText?id=52802" class="list-group-item textc">View our FAQ</a>',
      '<a href="https://text.uwbookstore.com/SiteText?id=2369#return" class="list-group-item textc">Return an order</a>',
      '</div>',
    ].join('\n')
  );

  /*function isEmpty(el) {
    return !$.trim(el.html());
  };
  if(isEmpty($('div#ordersPanelBody'))) {
    console.log('You have orders');
  } else {
    $('div#ordersPanelBody').html("<em>You have no orders</em>")
  }*/

  if (window.location.href.search(/orderdetails/) != -1) {
    var orderNum = $('#ordersHeader').text();
    $(
      '<a href="https://text.uwbookstore.com/contact/?order_id=' +
        orderNum +
        '" class="list-group-item textc order_q">Question about this order?</a>'
    ).appendTo('.list-group');
  }
});
