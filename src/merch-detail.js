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
  <h2 class="heading__line-center" id="tabs-header"><span>Additional Information</span></h2>
  <div class="tabs-container additional-info">
    <ul aria-labelledby="tabs-title">
      <!-- <li>
        <a id="tab-1" href="#disco">
          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Discontinued Item Policy
        </a>
      </li> -->
      <li>
        <a id="tab-2" href="#returns">
          <i class="fa fa-exchange" aria-hidden="true"></i> Returns &amp; Exchanges
        </a>
      </li>
      <li>
        <a id="tab-3" href="#shipping">
          <i class="fa fa-truck" aria-hidden="true"></i> Shipping &amp; Handling
        </a>
      </li>
      <!-- <li>
        <a id="tab-4" href="#ratings">
          <i class="fa fa-star" aria-hidden="true"></i> Reviews(0)
        </a>
      </li> -->
    </ul>

    <div class="tabs__panels">
      <div id="returns" aria-labelledby="tab-2">
        <h2 class="tabs__header">Returns &amp; Exchanges</h2><br>
        <div class="row">
          <div class="col-md-6">
            <h2 class="tabs__header">Non-Tech Returns &amp; Exchanges</h2>
            <p>If you are not completely satisfied with any product, we will gladly replace it or refund the purchase
              price
              of the item. A non-text item may be returned any time as long as it was purchased from a University Book
              Store
              location or website and is in saleable condition. Returns without a receipt will be refunded at the
              lowest
              price
              ever sold and credited to a University Book Store gift card. See associate for details.<br>Please do the
              following:</p>
            <ol>
              <li>Items must be in new condition w/original packaging &amp; accessories.</li>
              <li>Circle the item(s) on the packing list and note whether you want an EXCHANGE or CREDIT.</li>
              <li>If an exchange, please make note as to what Size and/or Color you want.</li>
            </ol>
          </div>
          <div class="col-md-6">
            <h2 class="tabs__header">Tech Return Policy</h2>
            <p>Tech items may be returned within 15 days, with receipt and in new condition, complete with all
              packaging
              and
              pieces. Unopened product may be refunded in full and opened product will be subject to a 15% restocking
              fee,
              with the following exceptions:</p>
            <ol>
              <li>Open Batteries, graphing calculators, in-ear headphones, ink/toner, printers, and storage devices
                are
                not
                returnable.</li>
              <li>Special Order and sale items are generally not returnable- ask for details before purchasing please.
              </li>
              <li>Defective items may require warranty processing or may be exchanged for the same item after verified
                defective, per manufacturer and store policies.</li>
            </ol>
          </div>
        </div>
        <br>
        <p>Purchases may be returned to any of our stores with the packing list or send returns to:</p>
        <address class="returns">University Book Store<br>
          ATTN: Online Sales Returns Department<br>
          4509 West Beltline Hwy<br>
          Madison, WI 53711</address>
        <p>Credit card purchases will be credited to the charge card used for the initial purchase. If the purchase
          was
          made
          with a personal check, we will issue a check.</p>
      </div>

      <div id="shipping" aria-labelledby="tab-3">
        <h2 class="tabs__header">Shipping &amp; Handling</h2>
        <div class="text-center">
          <img src="https://i.univbkstr.com/v3/img/misc/usps.png" alt="USPS Logo">
          <img src="https://i.univbkstr.com/v3/img/misc/ups.png" alt="UPS Logo">
        </div>
        <p><strong>Methods for shipping are:</strong></p>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>Ground Shipping (5-7 days)</td>
              <td>$7.00 + $0.50 for each item</td>
            </tr>
            <tr>
              <td>2nd Day Air</td>
              <td>$21.00 + $1.00 for each item</td>
            </tr>
            <tr>
              <td>Next Day Air</td>
              <td>$45.00 + $2.00 for each item</td>
            </tr>
          </tbody>
        </table>
        <p>Order processing time is 5-7 business days (for ground shipping) or 1-2 business days (for expedited and
          pick
          up
          at store orders).</p>
        <p><strong>Methods for shipping Gift Cards ONLY are:</strong></p>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>Gift Card (Ground)</td>
              <td>$3.50</td>
            </tr>
            <tr>
              <td>Gift Card (2nd Day Air)</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Gift Card (Next Day Air)</td>
              <td>$30.00</td>
            </tr>
          </tbody>
        </table>
        <p>From the Delivery Methods section select your shipping method and then click "Continue".</p>
        <p>Handling charges are applied to products that have special shipping requirements. Items that require
          handling
          charges are noted as such in the description field of that item.</p>
        <p>Out of country orders are usually sent USPS International Priority Mail and will arrive in 6-10 business
          days.
          These orders are not shipped or charged until we can weigh the order and check with USPS for options /
          prices.
          We
          will then e-mail that information to the customer for approval.</p>
        <p>Items are shipped Monday through Friday between the hours of 8 AM and 3 PM.</p>
        <p>We offer the option to "Pick Up At Store" at the following locations:<br>
          Library Mall (711 State Street)<br>
          Health Sciences Learning Center (750 N. Highland Ave)<br>
          Hilldale Mall (454 N. Midvale Blvd)<br>
          Please allow for our normal processing time of 3 – 4 business days. You will receive notification once the
          order
          has been delivered to the store of your choice.</p>
        <p>Brookfield (95 North Moorland Road, Suite E2 - Brookfield)<br>
          Please allow for a processing time of 4-8 business days. You will receive notification once the order has
          been
          delivered to the store of choice.</p>
        <p>We are happy to work with customers who have particular shipping needs. Please feel free to <a
            href="https://www.uwbookstore.com/Contact">email</a> us, or call us toll free at 800-993-2665 ext. 5997.
        </p>
      </div>
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
const select = document.querySelector('select.merchDropdown');
const logos = document.querySelector('.lcsLogoWrapper');
const colors = document.querySelector('.lcsColorWrapper');
const sizes = document.querySelector('.lcsSizeWrapper');
const sizeOptions = document.querySelectorAll(
  'button.typeCodeOption span.sizeName'
);
const logoOptions = document.querySelectorAll(
  'button.typeCodeOption span.logoName'
);
const colorOptions = document.querySelectorAll(
  'button.typeCodeOption span.colorName'
);
const singleItem = document.querySelector('span.selectedSize');
const disclaimerSpan = document.querySelector('span.normal');
const disclaimerError = document.querySelector('p.merchDisclaimerError');
const merchSelectError = document.querySelector('p.merchSelectError');
const addGiftErrorLCS = document.querySelector('p.addGiftErrorLCS');
const addGiftError = document.querySelector('p.addGiftError');
const qtyInput = document.getElementById('merchQTY');
const addToCartBtn = document.querySelector('a.addToCart.btn.btn-primary');
const addToCartTypes = document.querySelector(
  'a.addToCartTypes.btn.btn-primary'
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
colorOptions ? changeLCS(colorOptions) : null;

// HANDLE SIZE PICKER & SIZE CHART LINK
// create container div
const merchSizes = document.createElement('div');
merchSizes.id = 'sizes';
merchSizes.className = 'merch__detail-size';

const sizeGuideDiv = document.createElement('label');
sizeGuideDiv.className = 'merch__detail-size-label';
select
  ? (sizeGuideDiv.textContent = 'Make Selection:')
  : (sizeGuideDiv.textContent = 'Size |');

// ADD SIZE CHART LINK TO PRODUCT AS NEEDED
let sizeChartUrl, sizeChartBrand;
const sizeChartLink = document.createElement('a');
sizeChartLink.classList.add('merch__detail-size-link', 'gtmSizeTrack');

if (sizes && prodName.toLowerCase().substring(0, 13) === 'the red shirt') {
  sizeChartUrl = 'sizeChart/redShirt';
  sizeChartBrand = 'The Red Shirt™';
} else if (sizes && prodName.toLowerCase().substring(0, 8) === 'champion') {
  sizeChartUrl = 'sizeChart/champion';
  sizeChartBrand = 'Champion';
} else if (sizes && prodName.toLowerCase().substring(0, 9) === 'game bibs') {
  sizeChartUrl = 'sizeChart/gameBibs';
  sizeChartBrand = 'Game Bibs';
} else if (sizes && prodName.toLowerCase().substring(0, 8) === 'columbia') {
  sizeChartUrl = 'sizeChart/columbia';
  sizeChartBrand = 'Columbia';
} else if (
  sizes &&
  prodName.toLowerCase().substring(0, 12) === 'under armour'
) {
  sizeChartUrl = 'sizeChart/ua';
  sizeChartBrand = 'Under Armour';
} else if (sizes && prodName.toLowerCase().substring(0, 7) === 'blue 84') {
  sizeChartUrl = 'sizeChart/blue84';
  sizeChartBrand = 'Blue 84';
} else if (
  sizes &&
  prodName.toLowerCase().substring(0, 13) === 'for bare feet'
) {
  sizeChartUrl = 'sizeChart/fbf';
  sizeChartBrand = 'For Bare Feet';
} else if (
  sizes &&
  prodName.toLowerCase().substring(0, 12) === 'college kids'
) {
  sizeChartUrl = 'sizeChart/cllgKids';
  sizeChartBrand = 'College Kids';
} else if (
  sizes &&
  (prodName.toLowerCase().substring(0, 13) === '&#39;47 brand' ||
    prodName.toLowerCase().substring(0, 9) === "'47 brand")
) {
  sizeChartUrl = 'sizeChart/47Brand';
  sizeChartBrand = "'47 Brand";
} else if (
  sizes &&
  prodName.toLowerCase().substring(0, 13) === 'all star dogs'
) {
  sizeChartUrl = 'sizeChart/allStarDog';
  sizeChartBrand = 'All Star Dogs';
} else if (sizes && prodName.toLowerCase().substring(0, 7) === 'zoozatz') {
  sizeChartUrl = 'sizeChart/zooZatz';
  sizeChartBrand = 'ZooZatz';
} else if (sizes && prodName.toLowerCase().substring(0, 10) === 'boxercraft') {
  sizeChartUrl = 'sizeChart/boxercraft';
  sizeChartBrand = 'Boxercraft';
} else if (sizes && prodName.toLowerCase().substring(0, 10) === "lands' end") {
  sizeChartUrl = 'sizeChart/landsEnd';
  sizeChartBrand = "Lands' End";
} else if (sizes && prodName.toLowerCase().substring(0, 6) === 'league') {
  sizeChartUrl = 'sizeChart/league';
  sizeChartBrand = 'League';
} else if (sizes && prodName.toLowerCase().substring(0, 7) === 'vantage') {
  sizeChartUrl = 'sizeChart/vantage';
  sizeChartBrand = 'Vantage';
} else if (
  sizes &&
  prodName.toLowerCase().substring(0, 30) === 'little earth wisconsin pet hat'
) {
  sizeChartUrl = 'sizeChart/littleEarth';
  sizeChartBrand = 'Little Earth';
} else if (
  (prodName.indexOf('Hat') >= 0 || prodName.indexOf('Visor') >= 0) &&
  sizes &&
  prodName.toLowerCase().substring(0, 6) === 'legacy'
) {
  sizeChartUrl = 'sizeChart/legacy';
  sizeChartBrand = 'Legacy Hat';
} else if (sizes) {
  sizeChartUrl = 'sizeChart';
  sizeChartBrand = '';
}
sizeChartLink.href = `https://i.univbkstr.com/${sizeChartUrl}`;
sizeChartLink.textContent = `Size Guide`;
sizeChartLink.title = `${sizeChartBrand} Size Guide`;

if (sizes || logos || colors) {
  let pickerArray;
  sizes
    ? (pickerArray = sizes.innerHTML)
    : logos
      ? (pickerArray = logos.innerHTML)
      : (pickerArray = colors.innerHTML);
  merchSizes.innerHTML = `
  <div class="flex merch__detail-size-picker">${pickerArray}</div>
`;
  merchSizes.prepend(sizeChartLink);
  merchSizes.prepend(sizeGuideDiv);
} else if (!logos && !sizes && !colors && singleItem) {
  let singleItemText = singleItem.textContent.toLowerCase();

  if (singleItemText === 'xxx-large' || singleItemText === '3x-large') {
    singleItemText = '3XL';
  } else if (singleItemText === '4x' || singleItemText === '4x-large') {
    singleItemText = '4XL';
  } else if (singleItemText === '5x' || singleItemText === '5x-large') {
    singleItemText = '5XL';
  } else if (singleItemText === '6x' || singleItemText === '6x-large') {
    singleItemText = '6XL';
  } else if (singleItemText === 'newborn 3 month') {
    singleItemText = 'NB/3M';
  } else if (singleItemText === 'large/x-large') {
    singleItemText = 'L/XL';
  } else {
    singleItemText = capitalizeFirstLetter(singleItem.textContent);
  }
  merchSizes.innerHTML = `
    <div class="flex merch__detail-size-picker">
      <span class="btn btn-default typeSelected btn-w-auto">${singleItemText}</span>
    </div>
  `;
  merchSizes.prepend(sizeGuideDiv);
} else if (select) {
  merchSizes.prepend(sizeGuideDiv);
  merchSizes.appendChild(select);
}

// Append Quantity & Add to Cart button
const addToCartField = document.createElement('div');
addToCartField.id = 'add-qty';
addToCartField.classList.add('flex', 'merch__detail-add"></div>');
const qtyWrapper = document.createElement('div');
qtyWrapper.className = 'merch__detail-qty';
qtyWrapper.innerHTML = `<label for="merchQTY" class="sr-only">Quantity: </label>`;
const btnWrapper = document.createElement('div');
btnWrapper.className = 'merch__detail-add-btn';

addToCartBtn
  ? btnWrapper.append(addToCartBtn)
  : addToCartTypes
    ? btnWrapper.append(addToCartTypes)
    : '';
qtyWrapper.append(qtyInput);
addToCartField.append(qtyWrapper);
btnWrapper.append(document.querySelector('p.addedToCart'));
addToCartField.append(btnWrapper);

// Add Additional Info Tabs below product

// Append error messages to info block
merchSelectError ? merchSizes.appendChild(merchSelectError) : '';
addGiftErrorLCS ? merchSizes.appendChild(addGiftErrorLCS) : '';
addGiftError ? merchSizes.appendChild(addGiftError) : '';

// Append elements to info block
merchInfoWrapper.append(pageHeader);
merchInfoWrapper.append(priceBlock);
merchInfoWrapper.append(infoBlock);
merchDisclaimer ? merchInfoWrapper.appendChild(merchDisclaimerHtml) : '';
merchDisclaimer ? merchDisclaimerHtml.after(disclaimerError) : '';

sizes ? merchInfoWrapper.appendChild(merchSizes) : '';
singleItem ? merchInfoWrapper.appendChild(merchSizes) : '';
select ? merchInfoWrapper.appendChild(merchSizes) : '';

merchInfoWrapper.append(addToCartField);

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

function capitalizeFirstLetter(string) {
  const newString = string.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
}

/*
  TODO: See if any of the code below is needed any more
    if ($('#tOs').length > 0) {
    $('#tOs').insertBefore('div.merch__detail-add');
  }

  if ($('#sold-out').length > 0) {
    $('#sold-out').insertBefore('div.merch__detail-add');
  }

**/
