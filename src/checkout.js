// $(document).ajaxComplete(function (_, _, options) {
//   // Check if this was payment selection ajax call
//   if (!options.url.includes('PayId=')) return;

//   const replacementMessage =
//     'Your billing address (listed above) must match the billing address on file with your card issuer. If the address listed above is not correct, click the button marked "Update Billing Address."';

//   // Get potential targets. This should really only ever return 1 element...
//   const potentialTargets = $('.paymentBilling-wrapper > p.red.rem1.top20');

//   // but to be safe, we'll iterate through all potential matches and look for the replacement string
//   $(potentialTargets).each(function () {
//     if (
//       $(this).text() ==
//       'The billing address must match the billing address on the card.'
//     )
//       $(this).text(replacementMessage);
//   });
//   $('.paymentBilling-change').text('Update Billing Address');
//   $('<h2 class="heading__line-center mb-1">Billing Addres</h2>').prependTo(
//     '.paymentBilling-wrapper'
//   );
// });

// $(document).on('ajaxComplete', (_, options) => {
//   if (
//     options.responseJSON.showAddress !== undefined &&
//     options.responseJSON.showAddress === true
//   ) {
//     $('label[for="coShipStudentNumber"]').text(
//       'Student ID or 10 digit phone number'
//     );
//   }
//   // $('.validation-summary-errors').clone().appendTo('#contentSection');
// });

// $(document).on('ajaxComplete', function (_, options) {
//   console.log(options.responseJSON);
//   if (
//     options.responseJSON.showPayment != undefined &&
//     options.responseJSON.showPayment == true
//   ) {
//     $('html, body').animate(
//       {
//         scrollTop: $('.coPaymentCard').offset().top - 10,
//       },
//       200
//     );
//   }
// });

// $('#shippingMethod-select option:contains("GC Only Ground est. $3.99")').text(
//   'Gift Card Only Ground est. $3.99'
// );

// $(
//   '#shippingMethod-select option:contains("GC 2nd Day est. $20.00")'
// ).text('Gift Card 2nd Day est $20.00');

// $('#shippingMethod-select option:contains("GC Next Day est. $30.00")').text(
//   'Gift Card Next Day est. $30.00'
// );

// $(document).on('ajaxComplete', (_, options) => {
//   if ( options.responseJSON.showAddress != undefined && options.responseJSON.showAddress === true ) {
//     if (
//       $('p#shippingMethod-h2:contains("Pick up")') || $('p#shippingMethod-h2:contains("Pickup")')
//     ) {
//       console.log('needs to enter an address...');
//       $(`
//       <div class="alert alert-danger center bold">
//         Please enter a shipping address to continue.<br>
//         This is required even for Pick Up at Store orders.
//       </div>
//       `).insertAfter('#coShipAdd');
//     }
//   }
// });
