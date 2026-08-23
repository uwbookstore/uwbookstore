const mainItem = document.querySelector('.mainItem');

// Create new wrapper for merchdetail page
const additionalInfo = `
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
          <img src="https://i.univbkstr.com/img/misc/usps.png" alt="USPS Logo">
          <img src="https://i.univbkstr.com/img/misc/ups.png" alt="UPS Logo">
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
        <p>We are happy to work with customers who have particular shipping needs. Please feel free to <a
            href="https://www.uwbookstore.com/Contact">email</a> us, or call us toll free at 800-993-2665 ext. 5997.
        </p>
      </div>
    </div>
  </div>
`;

mainItem.insertAdjacentHTML('afterend', additionalInfo);

// Image variables
const merchImageMain = document.querySelector('.merchImageMain');
const merchImageMainTop = document.querySelector('.merchImageMain .top');
const merchImageMainBottom = document.querySelector('.merchImageMain .bottom');
const thumbnails = document.querySelectorAll('a.merchThumbnail');
const detailImgs = document.querySelectorAll('a.merchThumbnail img');
const merchImage = document.querySelector('.merchImage');
const merchDetailImage = document.querySelector('.merchDetailImage');
const thumbnailWrapper = document.querySelector('.merchThumbnailWrapper');

const prodName = document.querySelector('.merchTitle')?.textContent || '';
const priceBlock = document.querySelector('[data-merch-price-container]');
const productDescriptionBlock = document.querySelector('.merchDescription');
const productDescription = document.querySelector('.merchDesc');
priceBlock.after(productDescription);
productDescriptionBlock.style.display = 'none';

const merchButtons = document.querySelectorAll(
  '.btn.btn-default.merch-typecode-option',
);
const merchSelectError = document.querySelector('[data-merch-type-error]');
merchSelectError
  ? merchSelectError.classList.add('callout', 'callout-danger', 'fit-content')
  : '';

// Fix MBS default messages
const merchDiscountValue = document.querySelectorAll(
  '.merch-value.merch-value--gm',
);

const merchDiscountInfo = document.createElement('div');
merchDiscountInfo.classList.add('pill', 'pill__info');

if (merchDiscountValue) {
  merchDiscountValue.forEach((item) => {
    if (item.textContent === 'Buy 1 Get 50 Percent Off') {
      item.textContent = 'Buy One, Get One 50% Off';
      merchDiscountInfo.textContent =
        'Discounts applied will not be viewable until the end of checkout.';
      item.after(merchDiscountInfo);
    }
  });
}

const merchSuggested = document.querySelector('.merchSuggested');
const suggestedItems = document.querySelectorAll('.suggestedItem');
const merchTypecodeLabel = document.querySelector('.merch-typecode-label');
const merchTypeCodes = document.querySelector('.merch-typecodes');
const merchTypeCodeGroup = document.querySelector('.merch-typecode-group');
const lcsInventoryDisplayData = document.querySelector(
  '.lcs-inventory-display-data',
);
const lcsInventoryDisplayWrapper = document.querySelector(
  '.inventory-display-wrapper',
);

const hiddenCartText = document.querySelector('.hiddenCartText');

hiddenCartText
  ? hiddenCartText.classList.add('callout', 'callout-warning', 'fit-content')
  : '';

lcsInventoryDisplayData ? merchTypeCodes.after(lcsInventoryDisplayData) : '';
lcsInventoryDisplayWrapper
  ? merchTypeCodes.after(lcsInventoryDisplayWrapper)
  : '';

const disco = document.querySelector('.disco');
const tabsHeader = document.querySelector('.tabs-container ul');
const tabsContent = document.querySelector('.tabs__panels');
const itemRanking = document.getElementById('itemRanking');

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
  // Handle single image
  const merchImg = document.querySelector('img.merchDetailImage');
  const imgWrapper = document.querySelector(
    '.mainItem .row .col-sm-6:has(img)',
  );

  const newImg = document.createElement('img');
  newImg.className = 'merch__detail-img';

  if (merchImg?.getAttribute('src') === '/assets/img/error/not-available.gif') {
    newImg.src = 'https://i.univbkstr.com/img/misc/no-image.jpg';
    newImg.alt = 'Image not available';
  } else if (merchImg) {
    newImg.src = merchImg.getAttribute('data-high');
    newImg.alt = '';
    newImg.setAttribute('role', 'presentation');
  }

  imgWrapper.appendChild(newImg);
}

const merchSizes = document.createElement('div');
merchSizes.id = 'sizes';
merchSizes.className = 'merch__detail-size';

const sizeGuideDiv = document.createElement('span');
sizeGuideDiv.className = 'merch__detail-size-label';
sizeGuideDiv.textContent = 'Select |';

// ADD SIZE CHART LINK TO PRODUCT AS NEEDED
let sizeChartUrl, sizeChartBrand;
const sizeChartLink = document.createElement('a');
sizeChartLink.classList.add('merch__detail-size-link', 'gtmSizeTrack');

if (prodName.toLowerCase().substring(0, 13) === 'the red shirt') {
  sizeChartUrl = 'sizeChart/redShirt';
  sizeChartBrand = 'The Red Shirt™';
} else if (prodName.toLowerCase().substring(0, 8) === 'champion') {
  sizeChartUrl = 'sizeChart/champion';
  sizeChartBrand = 'Champion';
} else if (prodName.toLowerCase().substring(0, 9) === 'game bibs') {
  sizeChartUrl = 'sizeChart/gameBibs';
  sizeChartBrand = 'Game Bibs';
} else if (prodName.toLowerCase().substring(0, 8) === 'columbia') {
  sizeChartUrl = 'sizeChart/columbia';
  sizeChartBrand = 'Columbia';
} else if (prodName.toLowerCase().substring(0, 12) === 'under armour') {
  sizeChartUrl = 'sizeChart/ua';
  sizeChartBrand = 'Under Armour';
} else if (prodName.toLowerCase().substring(0, 7) === 'blue 84') {
  sizeChartUrl = 'sizeChart/blue84';
  sizeChartBrand = 'Blue 84';
} else if (prodName.toLowerCase().substring(0, 13) === 'for bare feet') {
  sizeChartUrl = 'sizeChart/fbf';
  sizeChartBrand = 'For Bare Feet';
} else if (prodName.toLowerCase().substring(0, 12) === 'college kids') {
  sizeChartUrl = 'sizeChart/cllgKids';
  sizeChartBrand = 'College Kids';
} else if (
  prodName.toLowerCase().substring(0, 13) === '&#39;47 brand' ||
  prodName.toLowerCase().substring(0, 9) === "'47 brand"
) {
  sizeChartUrl = 'sizeChart/47Brand';
  sizeChartBrand = "'47 Brand";
} else if (prodName.toLowerCase().substring(0, 13) === 'all star dogs') {
  sizeChartUrl = 'sizeChart/allStarDog';
  sizeChartBrand = 'All Star Dogs';
} else if (prodName.toLowerCase().substring(0, 7) === 'zoozatz') {
  sizeChartUrl = 'sizeChart/zooZatz';
  sizeChartBrand = 'ZooZatz';
} else if (prodName.toLowerCase().substring(0, 10) === 'boxercraft') {
  sizeChartUrl = 'sizeChart/boxercraft';
  sizeChartBrand = 'Boxercraft';
} else if (prodName.toLowerCase().substring(0, 10) === "lands' end") {
  sizeChartUrl = 'sizeChart/landsEnd';
  sizeChartBrand = "Lands' End";
} else if (prodName.toLowerCase().substring(0, 6) === 'league') {
  sizeChartUrl = 'sizeChart/league';
  sizeChartBrand = 'League';
} else if (prodName.toLowerCase().substring(0, 7) === 'vantage') {
  sizeChartUrl = 'sizeChart/vantage/update.html';
  sizeChartBrand = 'Vantage';
} else if (prodName.toLowerCase().substring(0, 8) === 'kadyluxe') {
  sizeChartUrl = 'sizeChart/kadyluxe';
  sizeChartBrand = 'KadyLuxe';
} else if (prodName.toLowerCase().substring(0, 12) === 'peter millar') {
  sizeChartUrl = 'sizeChart/peterMillar';
  sizeChartBrand = 'peterMillar';
} else if (
  prodName.toLowerCase().substring(0, 30) === 'little earth wisconsin pet hat'
) {
  sizeChartUrl = 'sizeChart/littleEarth';
  sizeChartBrand = 'Little Earth';
} else if (
  (prodName.indexOf('Hat') >= 0 || prodName.indexOf('Visor') >= 0) &&
  merchSizes &&
  prodName.toLowerCase().substring(0, 6) === 'legacy'
) {
  sizeChartUrl = 'sizeChart/legacy';
  sizeChartBrand = 'Legacy Hat';
} else {
  sizeChartUrl = 'sizeChart';
  sizeChartBrand = '';
}
sizeChartLink.href = `https://i.univbkstr.com/${sizeChartUrl}`;
sizeChartLink.textContent = `Size Guide`;
sizeChartLink.title = `${sizeChartBrand} Size Guide`;

merchTypeCodeGroup ? merchTypecodeLabel.after(sizeChartLink) : '';
merchTypeCodeGroup ? merchTypecodeLabel.after(sizeGuideDiv) : '';
merchTypecodeLabel ? (merchTypecodeLabel.style.display = 'none') : '';

// HANDLE SUGGESTED SELL ITEMS
const otherSuggested = document.createElement('div');
otherSuggested.innerHTML = `
  <h2 class="heading__line-center">Other Suggested Items</h2>
  <div id="suggested-grid" class="flex merch__card"></div>
`;
merchSuggested ? mainItem.after(otherSuggested) : '';
merchSuggested ? (merchSuggested.style.display = 'none') : '';

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

// HIDE ORIGINAL MERCH IMAGES BLOCK
merchImage ? (merchImage.style.display = 'none') : '';
thumbnailWrapper ? (thumbnailWrapper.style.display = 'none') : '';
merchDetailImage ? (merchDetailImage.style.display = 'none') : '';
merchImageMainTop ? (merchImageMainTop.style.display = 'none') : '';
merchImageMainBottom ? (merchImageMainBottom.style.display = 'none') : '';
// END OF IMAGE CONTAINER

// DISCLAIMERS
const merchDisclaimerFormCheck = document.querySelector('.form-check.mt-3');
const merchDisclaimer = document.querySelector('[data-merch-disclaimer]');
const disclaimerLabel = document.querySelector(
  '.form-check.mt-3 > label.form-check-label',
);
const disclaimerText = document.createElement('span');

const merchDisclaimerHtml = document.createElement('div');
merchDisclaimerHtml.id = 'item-disclaimer';
merchDisclaimerHtml.classList.add('callout', 'callout-warning');

if (merchDisclaimerFormCheck) {
  merchDisclaimerFormCheck.style.display = 'none';
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

// Size charts colorbox
$('.merch__detail-size-link').colorbox({
  current: '{current} of {total}',
  rel: 'merch__detail-size-link',
  iframe: true,
  width: '75%',
  height: '90%',
});

if (window.matchMedia) {
  // Establishing media check
  const width700Check = window.matchMedia('(max-width: 700px)');
  if (width700Check.matches) {
    $.colorbox.remove();
  }
}
