// REWRITE MERCHDETAIL PAGE DOM
// Define variables
const containDiv = document.getElementById('ContainDiv');

// Create new wrapper for merchdetail page
const merchMain = `
  <div id="merch-main" class="merch">
    <div class="flex merch__detail">
      <div id="merch-imgs" class="merch__detail-images"></div>
      <div id="merch-info" class="merch__detail-info"></div>
    </div>
  </div>
`;

// Prepend new wrapper to ContainDiv element
containDiv.insertAdjacentHTML('afterbegin', merchMain);

const merchInfoWrapper = document.getElementById('merch-info');
const prodName = document.querySelector('h2.merchTitle')?.textContent || '';
const prodSku = document.querySelector('p.merchItem span')?.textContent || '';
const description = document.querySelector('.merchDesc')?.innerHTML || '';
const merchDisclaimer = document.querySelector('input.merchDisclaimer');
const noAddCart = document.querySelector('div.hiddenCartText');
const thumbnails = document.querySelectorAll('a.merchThumbnail');
const detailImgs = document.querySelectorAll('a.merchThumbnail img');
const gmPromo = document.querySelector('p.gmPromo');
const logos = document.querySelector('.lcsLogoWrapper');
const colors = document.querySelector('.lcsColorWrapper');
const sizes = document.querySelector('.lcsSizeWrapper');
const sizeOptions = document.querySelectorAll(
  'button.typeCodeOption span.sizeName'
);
const logoOptions = document.querySelectorAll(
  'button.typeCodeOption span.logoName'
);

// Check for multiple images
if (thumbnails.length > 0) {
  // Handle multiple images
  const flexSliderHtml = `
    <div class="flexslider">
      <ul class="slides merch__detail-slides"></ul>
    </div>
  `;
  const merchImgs = document.querySelector('div#merch-imgs');
  merchImgs.insertAdjacentHTML('beforeend', flexSliderHtml);

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
  // Handle single image
  const merchImg = document.querySelector('img.merchDetailImage');
  const merchImgs = document.querySelector('div#merch-imgs');

  const newImg = document.createElement('img');
  newImg.className = 'merch__detail-img';

  if (merchImg?.getAttribute('src') === '/images/notavail.gif') {
    newImg.src = 'https://i.univbkstr.com/v3/img/misc/no-image.jpg';
    newImg.alt = 'Image not available';
  } else if (merchImg) {
    newImg.src = merchImg.getAttribute('data-high');
    newImg.alt = '';
    newImg.setAttribute('role', 'presentation');
  }

  merchImgs.appendChild(newImg);
}
// HIDE ORIGINAL MERCH IMAGES BLOCK
document.querySelector('.merchImage').style.display = 'none';
// END OF IMAGE CONTAINER

// START PRODUCT DETAILS LAYOUT
// Add the product name
const pageHeader = document.createElement('h2');
pageHeader.className = 'merch__detail-title';
pageHeader.textContent = prodName;

// Create the price block
const priceBlock = document.createElement('div');
priceBlock.id = 'priceBlock';
priceBlock.className = 'merch__detail-price';

const prodPrice = document.querySelector('span.merchPriceCurrent').textContent;
const origPrice = document
  .querySelector('p.merchRegPrice')
  ?.innerHTML.split('$')
  .pop();

// Check for sale price
if (document.querySelector('p.salePrice')) {
  const salePrice = prodPrice.replace(/\$/g, '');

  const salePriceHtml = `
    <span class="original">$${origPrice}</span><span class="sale">$${salePrice}</span>
  `;

  priceBlock.insertAdjacentHTML('beforeend', salePriceHtml);
} else {
  priceHtml = `
    <span>${prodPrice}</span>
  `;
  priceBlock.insertAdjacentHTML('beforeend', priceHtml);
}

// Add the product description
const infoBlock = document.createElement('div');
infoBlock.id = 'description-block';
infoBlock.className = 'merch__detail-description';

// HANDLE DISCLAIMERS
const merchDisclaimerHtml = document.createElement('div');
merchDisclaimerHtml.id = 'item-disclaimer';
merchDisclaimerHtml.classList.add('alert', 'alert-warning');
const disclaimerLabel = document.createElement('label');
const disclaimerSpan = document.querySelector('span.normal');
const disclaimerError = document.querySelector('p.merchDisclaimerError');

if (merchDisclaimer) {
  disclaimerLabel.appendChild(merchDisclaimer);
  merchDisclaimerHtml.appendChild(disclaimerLabel);

  // Add needed disclaimer text
  // LANDS' END DISCLAIMER
  if (document.getElementById('landsEndReally')) {
    disclaimerSpan.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! — Lands&apos; End may take 10-15 business days (M-F) to ship. Lands&rsquo; End orders will incur a $10 handling fee due to it being drop shipped from the manufacturer.</strong> This custom item is <strong>NOT ELIGIBLE</strong> for <strong>returns or exchanges</strong> and does not qualify for <strong>expedited or free shipping. By clicking this box, you are agreeing to these terms.</strong>
    `;
    disclaimerLabel.appendChild(disclaimerSpan);
  }
  // KYLE CAVAN DISCLAIMER
  else if (document.getElementById('kyleCavan')) {
    disclaimerSpan.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE!</strong> Shipping time takes 10-15 business days (M-F). This item ships directly from the manufacturer and is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for store pick-up, promotional discounts, expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms.</strong>
    `;
    disclaimerLabel.appendChild(disclaimerSpan);
  }
  // CDI DROPSHIP DISCLAIMER
  else if (document.getElementById('cdiDrop')) {
    disclaimerSpan.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! — Custom orders will incur a $10 handling fee due to it being drop shipped from the manufacturer.</strong> This custom item is <strong>NOT ELIGIBLE</strong> for <strong>returns or exchanges</strong> and does not qualify for <strong>expedited or free shipping. By clicking this box, you are agreeing to these terms.</strong>
    `;
    disclaimerLabel.appendChild(disclaimerSpan);
  }
  // SMPH LANDS' END DISCLAIMER
  else if (document.getElementById('smphLe')) {
    disclaimerSpan.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! — Lands&rsquo; End items will be charged when order is placed. Your order will be placed with Lands&rsquo; End at the end of the sale. Lands&rsquo; End may take 10-15 business days (M-F) to ship. Store pick-up orders will incur a $7.50 drop ship charge. By clicking this box, you are agreeing to these terms.</strong>
    `;
    disclaimerLabel.appendChild(disclaimerSpan);
  }
  // JARDINE DISCLAIMER
  else if (document.getElementById('jardine')) {
    disclaimerSpan.innerHTML = `
      <strong>PLEASE READ BEFORE PURCHASE! — This is a manufacturer direct item. This item ships separately. Please allow 10 business days (M-F) for delivery</strong>. This custom item is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms</strong>.
    `;
    disclaimerLabel.appendChild(disclaimerSpan);
  }
  // DEFAULT DISCLAIMER
  else {
    disclaimerLabel.appendChild(disclaimerSpan);
  }
}

infoBlock.innerHTML = `
  <h3 class="merch__detail-title-small">The Details</h3>
  ${description}
  ${noAddCart ? noAddCart : ''}
  <div class="merch__detail-sku">
  <strong>Item:</strong> ${prodSku}
  </div>
  ${gmPromo ? gmPromo : ''}
`;

// HIDE ORIGINAL MERCH INFO BLOCK
// document.querySelector('.merchInfo').style.display = 'none';

sizeOptions ? changeLCS(sizeOptions) : null;
logoOptions ? changeLCS(logoOptions) : null;

// HANDLE SIZE PICKER & SIZE CHART LINK
// create container div
const merchSizes = document.createElement('div');
merchSizes.id = 'sizes';
merchSizes.className = 'merch__detail-size';

if (sizes) {
  const sizeArray = sizes.innerHTML;
  merchSizes.innerHTML = `
  <div class="flex merch__detail-size-picker">${sizeArray}</div>
`;
}

// Append elements to info block
merchInfoWrapper.append(pageHeader);
merchInfoWrapper.append(priceBlock);
merchInfoWrapper.append(infoBlock);
merchDisclaimer ? merchInfoWrapper.appendChild(merchDisclaimerHtml) : '';
merchDisclaimer ? merchDisclaimerHtml.after(disclaimerError) : '';
sizes ? merchInfoWrapper.appendChild(merchSizes) : '';

// HELPER FUNCTION TO CHANGE SIZE BUTTON TEXT
function changeLCS(elem) {
  elem.forEach((e) => {
    const btnText = e.textContent.toLowerCase();
    if (btnText === 'small/medium') {
      e.textContent = 'S/M';
    } else if (btnText === 'medium/large') {
      e.textContent = 'M/L';
    } else if (btnText === 'large/x-large' || btnText === 'large/xlarge') {
      e.textContent = 'L/XL';
    } else if (btnText === 'xx-small') {
      e.textContent = '2XS';
    } else if (btnText === 'x-small') {
      e.textContent = 'XS';
    } else if (btnText === 'small') {
      e.textContent = 'S';
    } else if (btnText === 'medium') {
      e.textContent = 'M';
    } else if (btnText === 'large') {
      e.textContent = 'M';
    } else if (btnText === 'x-large') {
      e.textContent = 'XL';
    } else if (btnText === 'xx-large' || btnText === '2x-large') {
      e.textContent = '2XL';
    } else if (btnText === 'xxx-large' || btnText === '3x-large') {
      e.textContent = '3XL';
    } else if (btnText === '5x') {
      e.textContent = '5XL';
    } else if (btnText === '6x') {
      e.textContent = '6XL';
    } else if (btnText === 'newborn 3 month') {
      e.textContent = 'NB/3M';
    } else if (btnText === '3 month') {
      e.textContent = '3M';
    } else if (btnText === '6 month') {
      e.textContent = '6M';
    } else if (btnText === '12 month') {
      e.textContent = '12M';
    } else if (btnText === '18 month') {
      e.textContent = '18M';
    } else if (btnText === '24 month') {
      e.textContent = '24M';
    } else if (btnText === '2 toddler') {
      e.textContent = '2T';
    } else if (btnText === '3 toddler') {
      e.textContent = '3T';
    } else if (btnText === '4 toddler') {
      e.textContent = '4T';
    } else if (btnText === '5 toddler') {
      e.textContent = '5T';
    } else if (btnText === '5/6 toddler') {
      e.textContent = '5/6T';
    } else if (btnText === '6 toddler') {
      e.textContent = '6T';
    } else if (btnText === '6 child') {
      e.textContent = '6C';
    } else if (btnText === '7 child') {
      e.textContent = '7C';
    } else if (btnText === '6 x 8 / 6 x 8') {
      e.parentElement.classList.add('btn-w-auto');
    } else if (btnText === '6 x 8 / 8 x 10') {
      e.parentElement.classList.add('btn-w-auto');
    } else if (btnText === '8 x 10 / 8 x 10') {
      e.parentElement.classList.add('btn-w-auto');
    } else if (btnText === 'toddler') {
      e.parentElement.classList.add('btn-w-auto');
    } else {
      e.parentElement.classList.add('btn-w-auto');
    }
  });
}
