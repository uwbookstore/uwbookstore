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
      $(this).text(replacementMessage);
  });
  $('.paymentBilling-change').text('Update Billing Address');
  $('<h2 class="heading__line-center mb-1">Billing Addres</h2>').prependTo(
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

$(document).on('ajaxComplete', function (_, options) {
  // Shipping Address is displayed
  if (
    options.responseJSON.showAddress != undefined &&
    options.responseJSON.showAddress === true
  ) {
    $('label[for="coShipStudentNumber"]').text(
      'Student ID or 10 digit phone number*'
    );

    // Restrict Zip Code length
    $('#coShipZip').attr('maxlength', '5');

    /**
     * Update phone number label text, and add
     * Bootstrap validation message.
     */
    $('label[for="coShipPhone"]').text(
      'Phone Number (no spaces or special characters)*'
    );
    $(`
    <div class="invalid-feedback">
      Enter numbers only, eg: 6082573784
    </div>
    `).insertAfter('label[for="coShipPhone"]');

    /**
     * If customer has no shipping address on file
     * and selects pick up at store, the shipping address
     * field will still display. Show message to avoid
     * confusion until MBS fixes error.
     */
    if (
      $('#shippingMethod-h2').text().substring(0, 7) === 'Pick up' ||
      $('#shippingMethod-h2').text().substring(0, 6) === 'Pickup'
    ) {
      console.log('needs to enter an address...');
      $(`
      <div class="alert alert-danger center bold">
        Please enter a shipping address to continue.<br>
        This is required even for Pick Up at Store orders.
      </div>
      `).insertAfter('#coShipAdd');
    }
  }

  if (
    options.responseJSON.showPayment != undefined &&
    options.responseJSON.showPayment == true
  ) {
    $('html, body').animate(
      {
        scrollTop: $('.coPaymentCard').offset().top - 10,
      },
      200
    );
  }
});
