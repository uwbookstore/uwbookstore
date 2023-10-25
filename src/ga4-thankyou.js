// purchase
// add_payment_info
// add_shipping_info
// Place this JavaScript code on the ThankYou Page in the Footer Script
var transaction_id = $('.thankYouSubHeader')
  .text()
  .replace(/[^0-9]/gi, '');
var value = parseFloat(
  $('#paymentGrandText')
    .text()
    .replace(/[^0-9.]/gi, '')
);
var tax = parseFloat(
  $('#paymentEstimatedText')
    .text()
    .replace(/[^0-9.]/gi, '')
);
var shipping = parseFloat(
  $('#paymentShipText')
    .text()
    .replace(/[^0-9.]/gi, '')
);
var payType = $('#paymentTypeText').text().trim();
var shippingType = $('.shipMethodText').text().trim();

var items_to_send = [];

// Add textbooks
$('.oneTextItem').each(function () {
  var isbn = $(this).find('.oneTextISBN > .oneTextISBNText').text();
  var name = $(this).find('.oneTextTitleWrapper > .oneTextTitle').text();
  var category = 'Textbooks';
  var type = $(this).find('.oneTextPref > .oneTextPrefText').text();
  var price = parseFloat(
    $(this)
      .find('.oneTextSub > .oneTextSubText')
      .text()
      .replace(/[^0-9.]/gi, '')
  );
  var qty = parseInt($(this).find('.oneTextQTY > .oneTextQTYText').text());

  var this_item = {
    item_id: isbn,
    item_name: name,
    item_category: category,
    item_variant: type,
    price: price,
    quantity: qty,
  };

  items_to_send.push(this_item);
});

// Add merchandise
$('.oneMerchItem').each(function () {
  var sku = $(this).find('.oneMerchNumText').text().trim();
  var name = $(this).find('.oneMerchDescText').text().trim();
  var category = 'Merchandise';
  var types = [];
  var type = '';
  var types = $(this)
    .find('.oneMerchOption > .oneMerchOptionText')
    .text()
    .trim()
    .split('-', 5);
  types.forEach(function (item, index) {
    type = type + item.trim() + ' ';
  });
  type = type.trim();
  var price = parseFloat(
    $(this)
      .find('.oneMerchUnitText')
      .text()
      .replace(/[^0-9.]/gi, '')
  );
  var qty = parseInt($(this).find('.oneMerchQTYText').text());

  var this_item = {
    item_id: sku,
    item_name: name,
    item_category: category,
    item_variant: type,
    price: price,
    quantity: qty,
  };

  items_to_send.push(this_item);
});

gtag('event', 'purchase', {
  transaction_id: transaction_id, // required (order number)
  value: value, // required (total order $ amount)
  tax: tax, // optional
  shipping: shipping, // optional
  currency: 'USD', // required
  items: items_to_send,
});

gtag('event', 'add_shipping_info', {
  currency: 'USD',
  value: shipping,
  shipping_tier: shippingType,
  items: items_to_send,
});

gtag('event', 'add_payment_info', {
  currency: 'USD',
  value: value,
  payment_type: payType,
  items: items_to_send,
});
