// REWRITE MERCHDETAIL PAGE DOM
// Define variables
const containDiv = document.getElementById('ContainDiv');

// Create new wrapper for merchdetail page
const merchMain = document.createElement('div');
merchMain.id = 'merch-main';
merchMain.className = 'merch';
merchMain.innerHTML = `
  <div id="merch-main" class="merch">
    <div class="flex merch__detail">
      <div id="merch-imgs" class="merch__detail-images"></div>
      <div id="merch-info" class="merch__detail-info"></div>
    </div>
  </div>
`;

// Prepend new wrapper to ContainDiv element
containDiv.prepend(merchMain);

const prodName = document.querySelector('h2.merchTitle').textContent;
const prodSku = document.querySelector('p.merchItem span').textContent;
const description = document.querySelector('.merchDesc').innerHTML;
const merchDisclaimer = document.querySelector('input.merchDisclaimer');
const noAddCart = document.querySelector('div.hiddenCartText');
const imgArray = document.querySelectorAll('a.merchThumbnail').length;
const detail = document.querySelector('a.merchThumbnail img');

console.log(noAddCart, imgArray, detail);
// merchDisclaimer ? console.log(merchDisclaimer) : null;
