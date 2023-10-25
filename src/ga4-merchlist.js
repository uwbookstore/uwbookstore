// view_item_list -- MerchList page
// Place this JavaScript code on the MerchList Page in the Footer Script
var itemListId = $('#hiddenClassId').val();
var itemListName = $('.page_header').text().trim();

var items_to_send = [];

$('.merchItem').each(function () {
  var this_item;
  var itemName, itemId, price;

  var discount_insite = $(this).find('.merchSalePriceCurrent');
  var gm_promo = $(this).find('.merchDiscount').text();

  var itemDiscount;

  itemId = $(this).find('.merchSKU').text().trim();
  itemName = $(this).find('.merchTitle').text().trim();
  price = parseFloat(
    $(this)
      .find('.merchPriceCurrent')
      .text()
      .replace(/[^0-9.]/gi, '')
  );

  if (discount_insite.length > 0) {
    itemDiscount =
      parseFloat(price) -
      parseFloat(discount_insite.text().replace(/[^0-9.]/gi, ''));
    this_item = {
      item_id: itemId,
      item_name: itemName,
      price: price,
      discount: itemDiscount,
    };
  } else if (gm_promo != '') {
    itemDiscount = gm_promo;
    this_item = {
      item_id: itemId,
      item_name: itemName,
      price: price,
      coupon: itemDiscount,
    };
  } else {
    this_item = { item_id: itemId, item_name: itemName, price: price };
  }

  items_to_send.push(this_item);
});

gtag('event', 'view_item_list', {
  item_list_id: itemListId,
  item_list_name: itemListName,
  items: items_to_send,
});

$('#quickViewModal').on('shown.bs.modal', function (e) {
  var viewItemValue = parseFloat(
    $('.merchPrice > .merchPriceCurrent')
      .text()
      .replace(/[^0-9.]/gi, '')
  ).toFixed(2);
  var viewItemId = $('.merchItem > .quickSKU').text().trim();
  var viewItemName = $('.merchInfo > .modal-title').text().trim();

  gtag('event', 'view_item', {
    currency: 'USD',
    value: viewItemValue,
    items: [
      {
        item_id: viewItemId,
        item_name: viewItemName,
        price: viewItemValue,
      },
    ],
  });

  // Add to Cart - Quick View - MerchList page
  $('.addToCartQuickTypes').click(function () {
    gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: viewItemValue,
      items: [
        {
          item_id: viewItemId,
          item_name: viewItemName,
          price: viewItemValue,
        },
      ],
    });
  });
});
