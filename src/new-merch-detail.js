const merchImageMain = document.querySelector('.merchImageMain');
const merchImageMainTop = document.querySelector('.merchImageMain .top');
const merchImageMainBottom = document.querySelector('.merchImageMain .bottom');

const thumbnails = document.querySelectorAll('a.merchThumbnail');
const detailImgs = document.querySelectorAll('a.merchThumbnail img');
const merchImage = document.querySelector('.merchImage');
const merchDetailImage = document.querySelector('.merchDetailImage');
const thumbnailWrapper = document.querySelector('.merchThumbnailWrapper');

const priceBlock = document.querySelector('[data-merch-price-container]');
const productDescriptionBlock = document.querySelector('.merchDescription');
const productDescription = document.querySelector('.merchDesc');
priceBlock.after(productDescription);
productDescriptionBlock.style.display = 'none';

const disco = document.querySelector('.disco');

// Check for multiple images
if (thumbnails.length > 0) {
  // Handle multiple images
  const flexSliderHtml = `
    <div class="flexslider">
      <ul class="slides merch__detail-slides"></ul>
    </div>
  `;

  merchImageMain.insertAdjacentHTML('beforeend', flexSliderHtml);

  const slidesList = document.querySelector('ul.slides');

  thumbnails.forEach((thumb, i) => {
    // Create slide item
    const li = document.createElement('li');
    li.id = `thumbnail_${i}`;

    const img = document.createElement('img');
    img.id = `fullsize_${i}`;
    img.alt = '';
    img.setAttribute('role', 'presentation');
    img.className = 'merch__detail-img';

    li.appendChild(img);
    slidesList.appendChild(li);
  });

  detailImgs.forEach((img, j) => {
    const li = document.getElementById(`thumbnail_${j}`);
    const fullImg = document.getElementById(`fullsize_${j}`);

    if (li) {
      li.setAttribute('data-thumb', img.getAttribute('data-full'));
      li.setAttribute('data-thumb-alt', img.getAttribute('alt'));
    }

    if (fullImg) {
      const high = img.getAttribute('data-high');
      fullImg.src = high;
      fullImg.setAttribute('data-src', high);
    }
  });
} else {
  // TODO: FIX SINGLE IMAGE
  // Handle single image
  const merchImg = document.querySelector('img.merchDetailImage');
  const merchImgs = document.querySelector('div#merch-imgs');

  const newImg = document.createElement('img');
  newImg.className = 'merch__detail-img';

  if (merchImg?.getAttribute('src') === '/images/notavail.gif') {
    newImg.src = 'https://i.univbkstr.com/img/misc/no-image.jpg';
    newImg.alt = 'Image not available';
  } else if (merchImg) {
    newImg.src = merchImg.getAttribute('data-high');
    newImg.alt = '';
    newImg.setAttribute('role', 'presentation');
  }

  merchImageMain.appendChild(newImg);
}
// HIDE ORIGINAL MERCH IMAGES BLOCK
merchImage ? (merchImage.style.display = 'none') : '';
thumbnailWrapper ? (thumbnailWrapper.style.display = 'none') : '';
merchDetailImage ? (merchDetailImage.style.display = 'none') : '';
merchImageMainTop ? (merchImageMainTop.style.display = 'none') : '';
merchImageMainBottom ? (merchImageMainBottom.style.display = 'none') : '';
// END OF IMAGE CONTAINER

$('.flexslider').flexslider({
  animation: 'fade',
  controlNav: 'thumbnails',
  directionNav: false,
  slideshow: false,
});

$('#toggle').click(function () {
  const elem = $('#toggle').text();
  if (elem === 'More Info') {
    //Stuff to do when btn is in the read more state
    $('#toggle').text('Read Less');
    $('.merch__detail-overflow').slideDown();
  } else {
    //Stuff to do when btn is in the read less state
    $('#toggle').text('More Info');
    $('.merch__detail-overflow').slideUp();
  }
});

// DISCLAIMERS
const merchDisclaimerFormCheck = document.querySelector('.form-check.mt-3');
const merchDisclaimer = document.querySelector('[data-merch-disclaimer]');
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
