let preFormData = null;

function ga4_add_to_cart(data) {
  preFormData = null;
  let item = new Object;

  // price information
  item.price = parseFloat(data.currentPrice);
  item.discount = 0.0;
  let normalPrice = parseFloat(data.regularPrice);

  if (item.price != normalPrice) item.discount = normalPrice - item.price;

  // item information
  item.item_id = $('.itemSKU').text().trim();
  item.item_name = data.Name.replace(/\+/g, '');
  item.quantity = parseInt(data.quantity);
  let lcs = data.LCSId;

  if (lcs != '' && lcs.length > 0) {
    let lcsSplit = $(`.merchDropdown > option[value="${lcs}"]`)
      .text()
      .split('/')
      .map(function(item) {
        return item.trim();
      });

      for (let i = 0; i < lcsSplit.length; i++) {
        let v = lcsSplit[i]
        switch (i) {
          case 0:
            item.item_category = v;
            break;
          case 1:
            item.item_category2 = v;
            break;
          case 2:
            item.item_category3 = v;
            break;
        }
      }
  }

  // location information
  item.location_id = data.merStoreId;

  gtag('event', 'add_to_cart', {
    currency: 'USD',
    value: item.price * item.quantity,
    items: [item]
  })
}

$(document).on('ajaxComplete', function(event, xhr, settings) {
  let data = ga4_parseJSON(settings.data);
  if (settings.url.includes('/AddMerchItemMain') && data.merch_form_id == '-1') ga4_add_to_cart(data);

  if (settings.url.includes('/AddMerchItemMain') && data.merch_form_id != '-1') preFormData = data;

  if (settings.url.includes('/InsertForm') && preFormData != null) ga4_add_to_cart(preFormData);
})