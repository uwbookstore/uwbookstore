let removeItemData = null;

function ga4_remove_from_cart_buildData(id) {
  let itemObj = $('.merch-wrapper[data-id=' + id + ']');

  let item = new Object();

  item.price = parseFloat($(itemObj).find('.merch-price').val().replace('$', ''));
  item.quantity = parseInt($(itemObj).find('.merch-quantity').val());

  let itemIdContainer = $(itemObj)
    .find('.col-9.padding-left0.padding-right0')
    .first()
    .find('.col-md-6.col-12.padding-left0.padding-right0')
    .first();

  item.item_id = $(itemIdContainer).find('p').first().text().replace('Item: ', '').trim();
  item.item_name = $(itemIdContainer).find('a').first().text();

  let lcs = $(itemObj).find('.merch-lcs').text();

  if (lcs != '' && lcs.length > 0) {
    let lcsSplit = lcs.split('/').map(function(item) {
      return item.trim();
    })

    for (let i = 0; i < lcsSplit.length; i++) {
      let v = lcsSplit[i];
      switch(i) {
        case 0:
          item.item_category = v;
          break;
        case 1:
          item.item_category2 = v;
          break;
        case 2:
          item.item_category3 = v;
      }
    }
  }
  
  removeItemData = item;
}

function ga4_remove_from_cart(data) {
  gtag('event', 'remove_from_cart', {
    currency: 'USD',
    value: data.price * data.quantity,
    items: [data]
  })
}

$(document).on('ajaxSend', function (event, xhr, settings) {
  let data = ga4_parseJSON(settings.data);
  removeItemData = null
  ga4_remove_from_cart_buildData(data.id)
})

$(document).on('ajaxComplete', function (event, xhr, settings) {
  if (settings.url.includes('/DeleteMerchandise')) {
    ga4_remove_from_cart(removeItemData);
    removeItemData = null;
  }
})