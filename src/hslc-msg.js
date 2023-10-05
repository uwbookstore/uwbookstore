$(document).ready(() => {
  const itemDisclaimer = $('input.merchDisclaimer');

  if (itemDisclaimer.length > 0 && $('div#smphLe').length > 0) {
    $(
      '<div id="item-disclaimer" class="alert alert-warning"><label></label></div>'
    ).appendTo('div#merch-info');
    $(itemDisclaimer).next('.normal').appendTo('#item-disclaimer label');
    $(itemDisclaimer).removeClass('top4').prependTo('#item-disclaimer label');
    $('.normal').html(
      `<strong>PLEASE READ BEFORE PURCHASE! — Lands&rsquo; End items will be charged when order is placed. Your order will be placed with Lands&rsquo; End at the end of the sale. Lands&rsquo; End may take 10-15 business days (M-F) to ship. Store pick-up orders will incur a $7.50 drop ship charge. By clicking this box, you are agreeing to these terms.</strong>`
    );
    $('div#smphLe').hide();
    $('p.merchDisclaimerError').insertAfter('#item-disclaimer');
  }
});