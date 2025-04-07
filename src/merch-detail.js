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
// END OF IMAGE CONTAINER
