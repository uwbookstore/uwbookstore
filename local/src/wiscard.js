$(document).ready(function () {
  // $("#applyPromoBtn").hide();
  // Check for WisCard as payment option
  // and verify there isn't a promo code already
  $('#campusAccount').hide();

  if ($('.accountNumberTitle').length > 0) {
    if ($('input#promoCode').val().trim() === '') {
      $('input#promoCode').val('WISCARD4');
      $('#applyPromoBtnHidden').click();
    }
  }

  if ($('input#promoCode').val() === 'WISCARD4') {
    $('input#promoCode').css('color', '#fff').attr('onfocus', "this.value=''");
    $('p#lblValidPromoMsg').hide();
  }

  // Suppress promo code error
  // for WISCARD promo when
  // inelligible item is selected
  if (
    $('input#promoCode').val() === 'WISCARD4' &&
    $(
      "div.validation-summary-errors ul li:contains('You do not have items in your shopping cart that qualify for the promotion.')"
    ).length
  ) {
    $(
      "div.validation-summary-errors ul li:contains('You do not have items in your shopping cart that qualify for the promotion.')"
    ).hide();
  }

  // If promo code is entered,
  // force "click" of #applyPromoBtn
  // $("#promoCode").blur(function () {
  //   if ($(this).val().trim() !== "") {
  //     $("#applyPromoBtn").click();
  //   }
  // });

  $('#shipdesc').removeClass('col-xs-12 bottom10');
  $('#campusVerify').addClass('alert alert-danger');
  $('<p class="center red">Gift Card Verification Checkbox</p>').prependTo(
    '#campusVerify'
  );

  $('<div id="msg-text"></div>').appendTo('#shipdesc').hide();

  $('select#selectedMethod').change(function () {
    const shipType = $(this).val();

    switch (shipType) {
      case '990':
      case '986':
      case '987':
        $('#shipdesc').show();
        $('#msg-text')
          .html(
            '<div class="alert alert-danger">This shipping method is valid for the shipping of Gift Cards only. If you choose this method and are purchasing anything other than a gift card, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.<br /><br />Your order will be shipped via UPS&reg;, FedEx&reg; or USPS&reg; which will take 1-3 business days (Mon-Fri, dependent on location and shipping method chosen) to reach you.</div>'
          )
          .show();
        break;
      case '646':
      case '649':
        $('#shipdesc').show();
        $('#msg-text')
          .html(
            '<div class="alert alert-danger">Our order processing time is 1-2 business days (Mon-Fri) for expedited orders.  After your order is processed it will be shipped via UPS&reg;, FedEx&reg; or USPS&reg; which will take 1-2 business days (Mon-Fri, dependent on location and shipping method chosen) to reach you.</div>'
          )
          .show();
        break;
      case '1278':
        $('#shipdesc').show();
        $('#msg-text')
          .html(
            '<div class="alert alert-danger">This shipping method is to be used for International Orders only. If you choose this method and are shipping domestically, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.</div>'
          )
          .show();
        break;
      case '2193':
        $('#shipdesc').show();
        $('#msg-text')
          .html(
            '<div class="alert alert-danger">This shipping method is to be used for orders over $75 (pre-tax subtotal). If you choose this method and your order total is less than $75, the shipping method will be corrected to "Ground Shipping" and you will be charged accordingly.</div>'
          )
          .show();
        break;
      case '2298':
        $('#shipdesc').show();
        $('#msg-text')
          .html(
            '<div class="alert alert-danger">*$1.28 flat rate ground shipping to a contiguous U.S. delivery address. Excludes Lands\' End items, textbooks, all StandardChair of Gardner products, custom orders, tech items, and drop-ship items. <strong>Orders with any excluded items will be charged the full standard shipping fee.</strong> All items with a handling charge will receive $1.28 ground shipping but handling charge will still be applied.</div>'
          )
          .show();
        break;
      default:
        $('#msg-text').hide();
    }
  });

  $("select#selectedMethod option:contains('GC Only Ground est. $3.50')").text(
    'Gift Card Only Ground est. $3.50'
  );
  $("select#selectedMethod option:contains('GC 2nd Day est. $20.00')").text(
    'Gift Card 2nd Day est. $20.00'
  );
  $("select#selectedMethod option:contains('GC Next Day est. $30.00')").text(
    'Gift Card Next Day est. $30.00'
  );

  const pickUpLocation = $('select#selectedMethod').val();

  switch (pickUpLocation) {
    case '970':
    case '1626':
      $(
        '<div id="shipDisclaimer" class="alert alert-danger">Please note: Pickup at Brookfield location can take up to 7 days.  Please click on the Shipping Policy above for details.</div>'
      ).insertAfter('select#selectedMethod');
      break;
    case '1957':
      $(
        '<div id="shipDisclaimer" class="alert alert-danger"><strong>CONTACTLESS PICK-UP AVAILABLE</strong><br>Park in front of sandwich board in front of store.<br>Call 310-5976 when you arrive.</div>'
      ).insertAfter('select#selectedMethod');
      break;
    case '968':
      $(
        '<div id="shipDisclaimer" class="alert alert-danger"><strong>CONTACTLESS PICK-UP AVAILABLE</strong><br>Park in valid parking spots directly across from the store<br>Call 310-5980 when you arrive.</div>'
      ).insertAfter('select#selectedMethod');
      break;
    default:
      break;
  }

  $(
    `<p class="bold red mb-0">International Shipping unavailable at this time.</p>`
  ).insertAfter('#shipPolicyLink');
});
