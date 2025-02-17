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
  null != t.responseJSON.showAddress &&
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
      );
});
