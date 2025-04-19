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
const prodName = document.querySelector('.merchTitle')?.textContent || '';
const prodSku = document.querySelector('p.merchItem span')?.textContent || '';
const description = document.querySelector('.merchDesc')?.innerHTML || '';
const merchDisclaimer = document.querySelector('input.merchDisclaimer');
const noAddCart = document.querySelector('div.hiddenCartText');
const thumbnails = document.querySelectorAll('a.merchThumbnail');
const detailImgs = document.querySelectorAll('a.merchThumbnail img');
const merchImage = document.querySelector('.merchImage');
const merchDetailImage = document.querySelector('.merchDetailImage');
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
const disco = document.getElementById('disco');
const tabsHeader = document.querySelector('.tabs-container ul');
const tabsContent = document.querySelector('.tabs__panels');
const merchSuggested = document.querySelector('.merchSuggested');
const suggestedItems = document.querySelectorAll('.suggestedItem');
const itemRanking = document.getElementById('itemRanking');

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
merchImage ? (merchImage.style.display = 'none') : '';
merchDetailImage ? (merchDetailImage.style.display = 'none') : '';
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
  const priceHtml = `
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

// if (
//   categoryTitle.toLowerCase().substring(0, 10) === 'flash sale' ||
//   categoryTitle.toLowerCase().substring(0, 15) === 'flamingo hoodie'
// ) {
//   $(`
//       <div class="alert alert-warning text-center" style="max-width: 50%; margin: auto;"><h2 class="mb-0"><strong>SOLD OUT!</strong></h2></div>
//     `).insertBefore('#merch__card');
// }

infoBlock.innerHTML = `
  <h3 class="merch__detail-title-small">The Details</h3>
  ${description}
  <div id="merch-sku" class="merch__detail-sku">
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

if (select || logos || colors) {
  sizeGuideDiv.textContent = 'Make Selection:';
} else {
  sizeGuideDiv.textContent = 'Size |';
}

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
  logos
    ? (pickerArray = logos.innerHTML)
    : colors
      ? (pickerArray = colors.innerHTML)
      : (pickerArray = sizes.innerHTML);
  merchSizes.innerHTML = `
  <div class="flex merch__detail-size-picker">${pickerArray}</div>
`;

  sizes ? merchSizes.prepend(sizeChartLink) : null;
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
const merchSku = document.getElementById('merch-sku');

if (!noAddCart) {
  addToCartBtn
    ? btnWrapper.append(addToCartBtn)
    : addToCartTypes
      ? btnWrapper.append(addToCartTypes)
      : '';
  qtyWrapper.append(qtyInput);
  addToCartField.append(qtyWrapper);
  btnWrapper.append(document.querySelector('p.addedToCart'));
  addToCartField.append(btnWrapper);
} else {
  btnWrapper.append(noAddCart);
  addToCartField.append(btnWrapper);
  noAddCart.classList.add('mt-2', 'alert', 'alert-warning', 'text-center');
}

// Check if item is discontinued. If yes, show info in tabs
const discoTab = document.createElement('li');
discoTab.innerHTML = `
  <a id="tab-1" href="#discontinued">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Discontinued Item Policy
  </a>
`;

if (disco) {
  const discoDiv = document.createElement('div');
  discoDiv.id = 'discontinued';
  discoDiv.setAttribute('aria-labelledby', 'tab-1');
  discoDiv.innerHTML = `
  <p>You will not be charged for your order until the order ships.<br>
    We search for discontinued items at each of our 5 locations so it may take longer for those items to be
    pulled.
    <span>If you are placing a Next Day Air or 2nd Day Air order the order processing time will be delayed
      while we check all of our locations for the discontinued item.</span>
  </p>
  <p>If we don't find the item, your order packing slip will show it as "Discontinued" and you will not receive
    that item.
  </p>
`;
  tabsHeader.prepend(discoTab);
  tabsContent.prepend(discoDiv);
}

// CHECK FOR ITEM RATINGS
if (itemRanking) {
  const rankCount = document.querySelector('span.rankCount').textContent;

  const ratingsTab = document.createElement('li');
  ratingsTab.innerHTML = `
    <a id="tab-4" href="#ratings">
      <i class="fa fa-star" aria-hidden="true"></i> Reviews ${rankCount}
    </a> 
  `;

  const ratingsDiv = document.createElement('div');
  ratingsDiv.id = 'ratings';
  ratingsDiv.setAttribute('aria-labelledby', 'tab-4');
  ratingsDiv.appendChild(itemRanking);

  tabsHeader.append(ratingsTab);
  tabsContent.append(ratingsDiv);
}

// HANDLE SUGGESTED SELL ITEMS
const otherSuggested = document.createElement('div');
otherSuggested.innerHTML = `
  <h2 class="heading__line-center">Other Suggested Items</h2>
  <div id="suggested-grid" class="flex merch__card"></div>
`;
merchSuggested
  ? document.getElementById('merch-main').after(otherSuggested)
  : '';

const suggestedGrid = document.getElementById('suggested-grid');

suggestedItems.forEach((item, i) => {
  const link = item.childNodes[3];
  const image = item.childNodes[3].childNodes[3];
  const name = item.childNodes[3].childNodes[7];
  const price = item.childNodes[5];

  item.classList.remove('col-sm-2', 'col-xs-6');
  item.classList.add('merch__card-item');
  link.id = i + 1;
  link.classList.add('merch__card-link');
  image.classList.remove('margin_auto');
  image.classList.add('merch__card-img');
  image.removeAttribute('width');
  name.classList.add('merch__card-title');
  price.classList.remove('center');
  price.classList.add('merch__card-price');
  suggestedGrid.appendChild(item);
});

// ADD A CLOSE ICON TO ERROR MESSAGE
// ADD CLICK EVENT HANDLER TO ICON
const closeIcon = document.createElement('i');
closeIcon.classList.add('close-p', 'fa', 'fa-times');
disclaimerError ? disclaimerError.appendChild(closeIcon) : null;
merchSelectError ? merchSelectError.appendChild(closeIcon) : null;

document.querySelectorAll('.close-p').forEach((el) => {
  el.addEventListener('click', () => {
    const parentP = el.closest('p');
    if (parentP) {
      parentP.style.transition = 'opacity 0.4s ease';
      parentP.style.opacity = 0;
      setTimeout(() => {
        parentP.style.display = 'none';
      }, 400); // Match fade duration
    }
  });
});

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

if (!noAddCart) {
  logos ? merchInfoWrapper.appendChild(merchSizes) : '';
  colors ? merchInfoWrapper.appendChild(merchSizes) : '';
  sizes ? merchInfoWrapper.appendChild(merchSizes) : '';
  singleItem ? merchInfoWrapper.appendChild(merchSizes) : '';
  select ? merchInfoWrapper.appendChild(merchSizes) : '';
}

merchInfoWrapper.append(addToCartField);

// Pick up in store message
const pickupMsg = document.getElementById('puo');
if (pickupMsg) {
  pickupMsg.innerHTML = `<strong>This item has a handling charge of $15.00. Will not apply to In-Store Pickups.</strong>`;
}

document.querySelector('.row.merchItem')
  ? (document.querySelector('.row.merchItem').style.display = 'none')
  : '';
document.querySelector('.mainItem')
  ? (document.querySelector('.mainItem').style.display = 'none')
  : '';
document.querySelector('.page_header')
  ? (document.querySelector('.page_header').style.display = 'none')
  : '';
document.querySelector('.backCart')
  ? (document.querySelector('.backCart').style.display = 'none')
  : '';

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
    } else if (btnText === '9-11 medium') {
      e.parentElement.classList.add('btn-w-auto');
    } else if (btnText === '10-13 large') {
      e.parentElement.classList.add('btn-w-auto');
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

/* TODO: CONVERT TO JS - MOVE TO LINE 354 **/
// if (categoryTitle.toLowerCase().substring(0, 6) === 'am fam') {
//   $(
//     '<img src="https://i.univbkstr.com/v3/img/landing/merch/AmFamGolf.png" class="img-fluid img__center" alt="AmFam Championship. Official Merchandise Partner of the American Family Insurance Championship.">'
//   ).insertBefore('.merch__filter');
// }

// if (categoryTitle.toLowerCase().substring(0, 6) === 'laptop') {
//   if (window.location.host === 'www.uwbookstore.com') {
//     $(
//       `<!-- <img class="img-fluid mx-auto mb-4 mobi-hide"
//       src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool.jpg"
//       alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
//     <img class="img-fluid mx-auto mb-4 dt-hide"
//       src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool-sm.jpg"
//       alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." /> -->
//       <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li></ul>`
//     ).insertAfter('.merch__filter');
//   } else {
//     $().insertAfter('.merch__filter');
//     // <a href="https://text.uwbookstore.com/MerchList?ID=28519">
//     //         <img src="https://i.univbkstr.com/v3/img/pages/tech/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-fluid mobi-hide mb-2">
//     //         <img src="https://i.univbkstr.com/v3/img/pages/tech/appleTech-sm.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-fluid dt-hide mb-2">
//     //         </a>
//     // `<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28374" class="btn btn-primary">Dell Laptops</a></li></ul>`
//   }
// }

// if (categoryTitle.toLowerCase().substring(0, 10) === 'julia gash') {
//   $(
//     '<img alt="Julia Gash" src="https://i.univbkstr.com/v3/img/banners/JuliaGash.png" class="img-fluid">'
//   ).insertBefore('.merch__filter');
// }

// if (categoryTitle.toLowerCase().substring(0, 16) === 'touchdown monday') {
//   $(
//     `
//     <img src="https://i.univbkstr.com/v3/img/landing/tdMonday/tdMonday-sm.png" alt="Touchdown Monday" class="img-fluid mx-auto mb-2 dt-hide">
//     <img src="https://i.univbkstr.com/v3/img/landing/tdMonday/tdMonday.png" alt="Touchdown Monday" class="img-fluid mx-auto mb-2 mobi-hide">

//     <section class="text-center">
//       <p style="font-size: 2rem">Show your support for the Wisconsin Badgers in style every Monday after a home game with Touchdown Monday! Score big with 5% off<sup>*</sup> for every touchdown the Badgers make, and watch your savings skyrocket up to an incredible 25% off. It&apos;s the ultimate win-win - you support the Badgers and treat yourself to some fresh new red and white gear. Don&apos;t miss out on this perfect opportunity - touchdown fever awaits!</p>
//     </section>
//     <section class="text-center tdMonday-footer">
//       <h1 class="red">This is an EXCLUSIVE IN-STORE offer you don't want to miss!</h1>
//       <p>No need to keep track of those touchdowns, we've got you covered.<br>Sign up now and be the first to get the inside scoop on new products and exciting updates.</p>
//       <!-- <i class="fa-solid fa-arrow-down"></i> -->
//       <a href="https://www.uwbookstore.com/Email-Signup" class="btn btn-primary mb-2" style="font-size: 2rem; padding-inline: 4rem; height: 5rem; line-height: 5rem;">Sign Up Now!</a>
//     </section>
//     `
//   ).insertBefore('.merch__filter');
//   $('.merch__filter').hide();
//   $(
//     `
//     <section class="text-center">
//       <p style="font-size: 11px;">*5% off your purchase of collegiate clothing and gifts, for every Badger touchdown on Monday, 09.18.23 only. Maximum discount of 25% off. Sale is valid on regularly priced eligible items at all store locations. Excludes sale items, textbooks, school supplies, gift cards, The Red Shirt, Public Access Lands items, Lands&rsquo; End items, Alumni Park items, Fine Gifts by M.LaHart &amp; Company, all Standard Chair of Gardner products, computers, computer accessories, consumer electronics, magazines, tickets, food, special orders, academic attire, previous purchases, drop-ship items, and shipping and handling charges. This offer cannot be combined with any other offers. Not valid online.</p>
//     </section>
//     `
//   ).insertAfter('.merch__card');
// }

// if (categoryTitle.toLowerCase().substring(0, 16) === 'dell laptop') {
//   if (window.location.host === 'www.uwbookstore.com') {
//     /* $(
//         '<a href="https://i.univbkstr.com/downloads/4746_Dell_BTS_POP_Kit_2022_RETAIL_POSTCARD_EDITABLE.pdf" target="_blank"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021.jpg" class="mobi-hide img-fluid img__center" alt="Student Rebate"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021-sm.jpg" class="dt-hide img-fluid img__center" alt="Student Rebate"><div class="visually-hidden">STUDENT OFFER. $100 Rebate - WITH THE PURCHASE OF A DELL PC $499+. Offer valid 05/01/2022 - 10/31/2022</div></a>'
//     ).insertBefore(".merch__filter"); */
//     $(
//       '<ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li></ul>'
//     ).insertAfter('.merch__filter');
//   } else {
//     /* $(
//         '<a href="https://i.univbkstr.com/downloads/4746_Dell_BTS_POP_Kit_2022_RETAIL_POSTCARD_EDITABLE.pdf" target="_blank"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021.jpg" class="mobi-hide img-fluid img__center" alt="Student Rebate"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021-sm.jpg" class="dt-hide img-fluid img__center" alt="Student Rebate"><div class="visually-hidden">STUDENT OFFER. $100 Rebate - OF A DELL PC $499+ OF A DELL PC $499+. Offer valid 05/01/2022 - 10/31/2022</div></a>'
//     ).insertBefore(".merch__filter"); */
//     $(
//       '<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28462" class="btn btn-primary">All Laptops</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li></ul>'
//     ).insertAfter('.merch__filter');
//   }
// }

// if (categoryTitle.toLowerCase().substring(0, 7) === 'macbook') {
//   if (window.location.host === 'www.uwbookstore.com') {
//     $(
//       `<!-- <img class="img-fluid mx-auto mb-4 mobi-hide"
//       src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool.jpg"
//       alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
//     <img class="img-fluid mx-auto mb-4 dt-hide"
//       src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool-sm.jpg"
//       alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." /> -->
//       <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li></ul>`
//     ).insertAfter('.merch__filter');
//     // $('<div class="merch__card-special">UW Discount</div>').prependTo('div.merchItem');
//   } else {
//     $().insertAfter('.merch__filter');
//     /* `<a href="https://text.uwbookstore.com/MerchList?ID=28519">
//             <img src="https://i.univbkstr.com/v3/img/pages/tech/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-fluid mobi-hide mb-2">
//             <img src="https://i.univbkstr.com/v3/img/pages/tech/appleTech-sm.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-fluid dt-hide mb-2">
//             </a>
//             `
//     `<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28374" class="btn btn-primary">Dell Laptops</a></li></ul>` */
//   }
// }

// if (
//   categoryTitle.toLowerCase().substring(0, 7) === 'macbook' ||
//   categoryTitle.toLowerCase().substring(0, 11) === 'dell laptop' ||
//   categoryTitle.toLowerCase().substring(0, 4) === 'ipad' ||
//   categoryTitle.toLowerCase().substring(0, 6) === 'laptop'
// ) {
//   $(
//     '<div class="alert alert-info center"><p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p></div>'
//   ).insertBefore('#merch__card');
// }

/*
  TODO: See if any of the code below is needed any more
    if ($('#tOs').length > 0) {
    $('#tOs').insertBefore('div.merch__detail-add');
  }

  if ($('#sold-out').length > 0) {
    $('#sold-out').insertBefore('div.merch__detail-add');
  }

**/
