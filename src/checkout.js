$(document).ajaxComplete(function (_, __, options) {
  // Check if this was payment selection ajax call
  if (!options.url.includes('PayId=')) return;

  const replacementMessage =
    'Your billing address (listed above) must match the billing address on file with your card issuer. If the address listed above is not correct, click the button marked "Update Billing Address."';

  // Get potential targets. This should really only ever return 1 element...
  const potentialTargets = $('.paymentBilling-wrapper > p.red.rem1.top20');

  // but to be safe, we'll iterate through all potential matches and look for the replacement string
  $(potentialTargets).each(function () {
    if (
      $(this).text() ==
      'The billing address must match the billing address on the card.'
    )
      $(this).addClass('alert alert-info');
    $(this).text(replacementMessage);
  });
  $('.paymentBilling-change').text('Update Billing Address');
  $('<h2 class="heading__line-center mb-1">Billing Address</h2>').prependTo(
    '.paymentBilling-wrapper'
  );
});

// Update all Gift Card shipping message options
$('#shippingMethod-select option:contains("GC Only Ground est. $3.99")').text(
  'Gift Card Only Ground est. $3.99'
);

$('#shippingMethod-select option:contains("GC 2nd Day est. $20.00")').text(
  'Gift Card 2nd Day est $20.00'
);

$('#shippingMethod-select option:contains("GC Next Day est. $30.00")').text(
  'Gift Card Next Day est. $30.00'
);

$(document).on('ajaxComplete', function (e, t) {
  (null != t.responseJSON.showAddress &&
    !0 === t.responseJSON.showAddress &&
    ($('label[for="coShipStudentNumber"]').text(
      'Student ID or 10 digit phone number*'
    ),
    $('#coShipZip').attr('maxlength', '5'),
    $('label[for="coShipPhone"]').text(
      'Phone Number (no spaces or special characters)*'
    ),
    $(
      '\n    <div class="invalid-feedback">\n      Please enter phone number (no spaces or special characters)\n    </div>\n    '
    ).insertAfter('label[for="coShipPhone"]'),
    ('Pick up' !== $('#shippingMethod-h2').text().substring(0, 7) &&
      'Pickup' !== $('#shippingMethod-h2').text().substring(0, 6)) ||
      (console.log('needs to enter an address...'),
      $(
        '\n      <div class="alert alert-danger center bold">\n        Please enter a shipping address to continue.<br />\n        This is required even for Pick Up at Store orders.\n      </div>\n      '
      ).insertAfter('#coShipAdd'))),
    null != t.responseJSON.showPayment &&
      1 == t.responseJSON.showPayment &&
      $('html, body').animate(
        {
          scrollTop: $('.coPaymentCard').offset().top - 10,
        },
        200
      ));
});
$(document).ready(function () {
  // Shipping Name
  $('input[name=coSelectShipping]').each(function () {
    // get element object
    let nameElement = $(this).next('.newRadioText');

    // get current name of ship method
    let name = $(nameElement).text();

    // default to true, this will flip to false if no case was found through switch
    let nameCaseFound = true;

    // initialize empty string
    let newName = '';

    switch (name) {
      case 'GC Only Ground est. $3.99':
        newName = 'Gift Card Only Ground est. $3.50';
        break;
      case 'GC 2nd Day est. $20.00':
        newName = 'Gift Card 2nd Day est $20.00';
        break;
      case 'GC Next Day est. $30.00':
        newName = 'Gift Card Next Day est. $30.00';
        break;
      default:
        nameCaseFound = false;
        break;
    }

    // if nameCaseFound did not switch to true, then we found a valid case and should set text
    if (nameCaseFound) $(nameElement).text(newName);
  });

  // Shipping description
  $('input[name=coSelectShipping]').change(function () {
    // get shipId value
    let shipId = $(this).val();

    // default to true, this will flip to false if no case was found through switch
    let shipCaseFound = true;

    // every time we change the shipping method, just remove msg text div from page
    $('#msg-text').remove();

    // initialize message to empty string
    let message = '';

    switch (shipId) {
      case '990':
      case '986':
      case '987':
        message =
          '<div class="alert alert-danger">This shipping method is valid for the shipping of Gift Cards only. If you choose this method and are purchasing anything other than a gift card, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.<br /><br />Your order will be shipped via UPS&reg;, FedEx&reg; or USPS&reg; which will take 1-3 business days (Mon-Fri, dependent on location and shipping method chosen) to reach you.</div>';
        break;
      case '646':
      case '649':
        message =
          '<div class="alert alert-danger">Our order processing time is 1-2 business days (Mon-Fri) for expedited orders.  After your order is processed it will be shipped via UPS&reg;, FedEx&reg; or USPS&reg; which will take 1-2 business days (Mon-Fri, dependent on location and shipping method chosen) to reach you.</div>';
        break;
      case '1278':
        message =
          '<div class="alert alert-danger">This shipping method is to be used for International Orders only. If you choose this method and are shipping domestically, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.</div>';
        break;
      case '2193':
        message =
          '<div class="alert alert-danger">This shipping method is to be used for orders over $75 (pre-tax subtotal). If you choose this method and your order total is less than $75, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.</div>';
        break;
      case '2298':
        '<div class="alert alert-danger">*$1.28 flat rate ground shipping to a contiguous U.S. delivery address. Excludes Lands\' End items, textbooks, all StandardChair of Gardner products, custom orders, tech items, and drop-ship items. <strong>Orders with any excluded items will be charged the full standard shipping fee.</strong> All items with a handling charge will receive $1.28 ground shipping but handling charge will still be applied.</div>';
        break;
      case '970':
      case '1957':
        message =
          '<div id="shipDisclaimer" class="alert alert-danger"><strong>CONTACTLESS PICK-UP AVAILABLE</strong><br>Park in front of sandwich board in front of store.<br>Call 310-5976 when you arrive.</div>';
        break;
      case '968':
        message =
          '<div id="shipDisclaimer" class="alert alert-danger"><strong>CONTACTLESS PICK-UP AVAILABLE</strong><br>Park in valid parking spots directly across from the store<br>Call 310-5980 when you arrive.</div>';
        break;
      default:
        shipCaseFound = false;
        break;
    }

    // if shipCaseFound did not flip to false, we found a valid case
    if (shipCaseFound) {
      // create our msg text div and append it to the radio input's parent
      $('<div id="msg-text"></div>').appendTo($(this).parent());

      // set the message
      $('#msg-text').html(message);

      // hide default built in inSite ship description
      $(this)
        .parent()
        .find('.shippingMethod-description-span')
        .css('display', 'none');
    }
  });

  // International Shipping Notice
  $(
    `<p class="bold red mb-0">International Shipping unavailable at this time.</p>`
  ).insertAfter('#shippingPolicy');
});
