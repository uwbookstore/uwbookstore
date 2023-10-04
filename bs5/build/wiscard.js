// Auto apply promocode when Wiscard option is selected
// Optional: auto remove promo code if Wiscard is deselected and applied promo code is Wiscard promo code
const uwWiscardPromo = 'WISCARD4';
const uwWiscardPaymentType = '1651';

// We need to hook into ajaxComplete function since payment section is not present on page load
$(document).on('ajaxComplete', function (event, xhr, settings) {
  // check if json returned by ajax is showPayment = true.
  // if so, then the payment section was just rendered and inserted into the dom.
  // time to add our events

  if (xhr.responseJSON.showPayment) {
    // bind change event
    $('input[name=paymentType]').change(function () {
      let ptId = $(this).val();

      if (ptId === uwWiscardPaymentType) {
        if ($('#coPromoCode').val().trim() === '') {
          // passed check, add and apply promo
          $('#coPromoCode').val(uwWiscardPromo);
          $('#promo-apply').click();
          $('#coPromoCodeSuccess').hide();
          $('#coPromoCode').css('color', '#e9ecef');
        }
      } else {
        // optional remove this else statement to prevent promo from being removed if payment type is changed away from set payment type
        if ($('#coPromoCode').val() == uwWiscardPromo) $('#promo-apply').click();
      }
    });
  }
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
        message = '<div class="alert alert-danger">This shipping method is valid for the shipping of Gift Cards only. If you choose this method and are purchasing anything other than a gift card, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.<br /><br />Your order will be shipped via UPS&reg;, FedEx&reg; or USPS&reg; which will take 1-3 business days (Mon-Fri, dependent on location and shipping method chosen) to reach you.</div>';
        break;
      case '646':
      case '649':
        message = '<div class="alert alert-danger">Our order processing time is 1-2 business days (Mon-Fri) for expedited orders.  After your order is processed it will be shipped via UPS&reg;, FedEx&reg; or USPS&reg; which will take 1-2 business days (Mon-Fri, dependent on location and shipping method chosen) to reach you.</div>';
        break;
      case '1278':
        message = '<div class="alert alert-danger">This shipping method is to be used for International Orders only. If you choose this method and are shipping domestically, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.</div>';
        break;
      case '2193':
        message = '<div class="alert alert-danger">This shipping method is to be used for orders over $75 (pre-tax subtotal). If you choose this method and your order total is less than $75, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.</div>';
        break;
      case '2298':
        '<div class="alert alert-danger">*$1.28 flat rate ground shipping to a contiguous U.S. delivery address. Excludes Lands\' End items, textbooks, all StandardChair of Gardner products, custom orders, tech items, and drop-ship items. <strong>Orders with any excluded items will be charged the full standard shipping fee.</strong> All items with a handling charge will receive $1.28 ground shipping but handling charge will still be applied.</div>';
        break;
      case '970':
      case '1626':
        message = '<div id="shipDisclaimer" class="alert alert-danger">Please note: Pickup at Brookfield location can take up to 7 days.  Please click on the Shipping Policy above for details.</div>';
        break;
      case '1957':
        message = '<div id="shipDisclaimer" class="alert alert-danger"><strong>CONTACTLESS PICK-UP AVAILABLE</strong><br>Park in front of sandwich board in front of store.<br>Call 310-5976 when you arrive.</div>';
        break;
      case '968':
        message = '<div id="shipDisclaimer" class="alert alert-danger"><strong>CONTACTLESS PICK-UP AVAILABLE</strong><br>Park in valid parking spots directly across from the store<br>Call 310-5980 when you arrive.</div>';
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
      $(this).parent().find('.shippingMethod-description-span').css('display', 'none');
    }
  });

  // International Shipping Notice
  $(`<p class="bold red mb-0">International Shipping unavailable at this time.</p>`).insertAfter('#shippingPolicy');
});