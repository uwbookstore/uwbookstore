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

// $(document).ready(function () {
//   $('#coShipStudentNumber').attr(
//     'placeholder',
//     '10 digit phone number or UW Student ID*'
//   );
//   // $('.validation-summary-errors').clone().appendTo('#contentSection');
// });

// $(document).on('ajaxComplete', function (_, options) {
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
