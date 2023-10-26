// purchase
// add_payment_info
// add_shipping_info
// Place this JavaScript code on the ThankYou Page in the Footer Script
var transaction_id = $('#ty-orderNumber-val').val();
var value = parseFloat(
  $('.tyTotal-val.floatr')
    .text()
    .replace(/[^0-9.]/gi, '')
);
var tax = parseFloat(
  $('.tyTax-val.floatr')
    .text()
    .replace(/[^0-9.]/gi, '')
);
var shipping = parseFloat(
  $('.tyShipHand-val.floatr')
    .text()
    .replace(/[^0-9.]/gi, '')
);
// var payType = $('#paymentTypeText').text().trim();
var shippingType = $(
  '.tyshipment-wrapper.row.bottomBorder .col-md-6.col-12.padding-left0.padding-right0:nth-of-type(2) p:nth-of-type(1)'
)
  .first()
  .contents()
  .filter(function () {
    return this.nodeType == 3;
  })
  .text();

var items_to_send = [];

// Add textbooks
$('.tybook-wrapper.row.top10').each(function () {
  var isbn = $(this).find('.ty-textbook-isbn').val();
  var name = $(this).find('.ty-textbook-name').val();
  var category = 'Textbooks';
  var type = $(this).find('.ty-textbook-pref').val();
  var price = parseFloat($(this).find('ty-textbook-price').val());
  var qty = parseInt($(this).find('.ty-textbook-quantity').val());

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
$('.row.tymerch-wrapper').each(function () {
  var sku = $(this).find('.ty-merch-sku').val().trim();
  var name = $(this).find('.ty-merch-name').val().trim();
  var category = 'Merchandise';
  // var types = [];
  // var type = '';
  // var types = $(this)
  //   .find('.oneMerchOption > .oneMerchOptionText')
  //   .text()
  //   .trim()
  //   .split('-', 5);
  // types.forEach(function (item, index) {
  //   type = type + item.trim() + ' ';
  // });
  // type = type.trim();
  var price = parseFloat(
    $(this)
      .find('.ty-merch-price')
      .val()
      .replace(/[^0-9.]/gi, '')
  );
  var qty = parseInt($(this).find('.ty-merch-quantity').val());

  var this_item = {
    item_id: sku,
    item_name: name,
    item_category: category,
    // item_variant: type,
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

console.log(items_to_send);
gtag('event', 'add_shipping_info', {
  currency: 'USD',
  value: shipping,
  shipping_tier: shippingType,
  items: items_to_send,
});

// gtag('event', 'add_payment_info', {
//   currency: 'USD',
//   value: value,
//   payment_type: payType,
//   items: items_to_send,
// });
