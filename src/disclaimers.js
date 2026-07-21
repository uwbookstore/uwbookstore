const merchDisclaimerFormCheck = document.querySelector('.form-check.mt-3');
const merchDisclaimer = document.querySelector('[data-merch-disclaimer');
const disclaimerLabel = document.querySelector(
  '.form-check.mt-3 > label.form-check-label',
);
const disclaimerText = document.createElement('span');

const merchDisclaimerHtml = document.createElement('div');
merchDisclaimerHtml.id = 'item-disclaimer';
merchDisclaimerHtml.classList.add('alert', 'alert-warning');

if (merchDisclaimerFormCheck) {
  merchDisclaimerFormCheck.classList.remove('mt-3');
  disclaimerLabel.appendChild(merchDisclaimer);
  disclaimerLabel.appendChild(disclaimerText);
  merchDisclaimerHtml.appendChild(disclaimerLabel);
  merchDisclaimerFormCheck.after(merchDisclaimerHtml);

  // Add needed disclaimer text
  // IRON JOC DISCLAIMER
  if (document.getElementById('landsEnd')) {
    disclaimerText.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE!  Store pick-up orders will incur a $7.50 drop ship charge.</strong> This item ships directly from the manufacturer and is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms.</strong>
    `;
  }
  // LANDS' END DISCLAIMER
  else if (document.getElementById('landsEndReally')) {
    disclaimerText.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! — Lands&apos; End may take 10-15 business days (M-F) to ship. Lands&rsquo; End orders will incur a $10 handling fee due to it being drop shipped from the manufacturer.</strong> This custom item is <strong>NOT ELIGIBLE</strong> for <strong>returns or exchanges</strong> and does not qualify for <strong>expedited or free shipping. By clicking this box, you are agreeing to these terms.</strong>
    `;
  } // KYLE CAVAN DISCLAIMER
  else if (document.getElementById('kyleCavan')) {
    disclaimerText.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE!</strong> Shipping time takes 10-15 business days (M-F). This item ships directly from the manufacturer and is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for store pick-up, promotional discounts, expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms.</strong>
    `;
  }
  // CDI DROPSHIP DISCLAIMER
  else if (document.getElementById('cdiDrop')) {
    disclaimerText.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! Custom orders will incur a $10 handling fee due to it being drop shipped from the manufacturer.</strong> This custom item is <strong>NOT ELIGIBLE</strong> for <strong>returns or exchanges</strong> and does not qualify for <strong>expedited or free shipping. By clicking this box, you are agreeing to these terms.</strong>
    `;
  }
  // SMPH LANDS' END DISCLAIMER
  else if (document.getElementById('smphLe')) {
    disclaimerText.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! — Lands&rsquo; End items will be charged when order is placed. Your order will be placed with Lands&rsquo; End at the end of the sale. Lands&rsquo; End may take 10-15 business days (M-F) to ship. Store pick-up orders will incur a $7.50 drop ship charge. By clicking this box, you are agreeing to these terms.</strong>
    `;
  }
  // JARDINE DISCLAIMER
  else if (document.getElementById('jardine')) {
    disclaimerText.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! — This is a manufacturer direct item. This item ships separately. Please allow 10 business days (M-F) for delivery</strong>. This custom item is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms</strong>.
    `;
  }
  // DEFAULT DISCLAIMER
  else {
    // disclaimerText.innerHTML = disclaimerLabel.textContent;
    // TODO: Move input to front of text
  }
}
