// begin_checkout -- Place this JavaScript code on the ShoppingCart Page in the Footer Script
$('#PaymentBtn').click(function () {
  var checkoutValue = parseFloat(
    $('#Cart_Total > .CartTotal')
      .text()
      .replace(/[^0-9.]/gi, '')
  );

  var checkoutItems = [];

  // Add textbooks
  $('.courseMaterial.coursePanel').each(function () {
    var id = $(this).find('.bookISBN').text().match(/\d+/);
    var category = 'Textbooks';
    var name, price, qty;

    if (id.length > 0) id = id[0];
    else id = 0;
    var type = '';
    name = $(this).find('.bookTitle > strong').text().trim();
    price = parseFloat(
      $(this)
        .find('.coursePrice')
        .text()
        .replace(/[^0-9.]/gi, '')
    );
    qty = $(this).find('.txt-QTY').val();

    var this_item = {
      item_id: id,
      item_name: name,
      item_category: category,
      item_variant: type,
      price: price,
      quantity: qty,
    };

    checkoutItems.push(this_item);
  });

  // Add merch
  $('.merchPanel > .panel').each(function () {
    var id = $(this).find('.cart_title').text().match(/\d+/);
    var category = 'Merchandise';
    var name, type, price, qty;

    if (id.length > 0) id = id[0];
    else id = 0; // fallback

    name = $(this).find('.merchTitle > strong').text().trim();
    price = parseFloat(
      $(this)
        .find('.merchPrice')
        .text()
        .replace(/[^0-9.]/gi, '')
    );
    qty = $(this).find('.merch-QTY').val();
    var types = [];
    var type = '';
    var types = $(this)
      .find('.Merchandise_Type_Code > .subject-option:selected')
      .text()
      .trim()
      .split('/', 5);
    types.forEach(function (item, index) {
      type = type + item.trim() + ' ';
    });
    type = type.trim();

    var this_item = {
      item_id: id,
      item_name: name,
      item_category: category,
      item_variant: type,
      price: price,
      quantity: qty,
    };

    checkoutItems.push(this_item);
  });

  // Send GA4 event
  gtag('event', 'begin_checkout', {
    currency: 'USD',
    value: checkoutValue,
    items: checkoutItems,
  });
});
