// Auto apply promocode when Wiscard option is selected
// Optional: auto remove promo code if Wiscard is deselected and applied promo code is Wiscard promo code
const uwWiscardPromo = 'WISCARD2';

// We need to hook into ajaxComplete function since payment section is not present on page load
$(document).on('ajaxComplete', function (event, xhr, settings) {
  // check if json returned by ajax is showPayment = true.
  // if so, then the payment section was just rendered and inserted into the dom.
  // time to add our events
  console.log(xhr.responseJSON);
  if (xhr.responseJSON.showPayment) {
    // bind change event
    $('input[name=paymentType]').change(function () {
      let ptId = $(this).val();

      if (ptId === '1651' || ptId === '1521') {
        if ($('#coPromoCode').val().trim() !== '') return;

        // passed check, add and apply promo
        $('#coPromoCode').val(uwWiscardPromo);
        $('#promo-apply').click();
        $('#coPromoCodeSuccess').hide();
        $('#coPromoCodeFeedback').hide();
        $('#coPromoCode').css('color', 'transparent');
        $('#coPromoCode').addClass('is-invalid-hide');
        $('#coPromoCode').addClass('is-valid-hide');
        $('#coPromoCode').prop('disabled', false);
      } else if (ptId === '99' || ptId === '1284' || ptId === '1144') {
        // optional remove this else statement to prevent promo from being removed if payment type is changed away from set payment type
        if ($('#coPromoCode').val() === uwWiscardPromo)
          $('#promo-apply').click();
        $('#coPromoCode').val('');
        $('#coPromoCode').css('color', '#212529');
        $('#coPromoCodeSuccess').show();
        $('#coPromoCodeFeedback').show();
      }
    });
    // prettier-ignore
    $('<h2 class="heading__billing">Billing Address</h2>').insertBefore('.paymentBilling-name');
  }
});
