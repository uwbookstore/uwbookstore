// View Item - Non Quick View - Place this JavaScript code on the MerchandiseDetail Page in the Footer Script
var viewItemValue = parseFloat(
  $('.merchPriceCurrent')
    .text()
    .replace(/[^0-9.]/gi, '')
).toFixed(2);
var viewItemId = $('.itemSKU').text().trim();
var viewItemName = $('.merchTitle').text().trim();

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
// Add to cart - Non quick View - MerchDetail page
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
