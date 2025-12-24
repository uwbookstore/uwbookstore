// Rewrite MBS default Merch List page
// Define page variables
let categoryTitle = document.querySelector('h1.page_header');
const itemImage = document.querySelectorAll('.merchImage');
const productName = document.querySelectorAll('p.merchTitle');
const searchCatWrapRow = document.querySelector('.searchCatWrap').parentElement;
const noListItems = document.querySelector('.noListItems');
const merchSortBy = document.querySelector('select.merchSortBy');
const filterColumn = document.querySelector('.filterColumn');
const merchColumn = document.querySelector('.merchColumn');
const merchResultsSelect = document.querySelector('select.merchResultsSelect');
const pagination = document.querySelector('ul.pagination');

// Create new div for no items found
const noResults = document.createElement('div');
noResults.classList.add('empty-results');

// Make sure we're on a merchList or newarrivals page
// if (
//   window.location.href.toLowerCase().search(/merchlist/) !== -1 ||
//   window.location.href.toLowerCase().search(/newarrivals/) !== -1
// ) {

if (categoryTitle.textContent.toLowerCase() === 'search all') {
  const searched = window.location.search.split('=');
  const searchTerm = searched[2].replace(/%20/g, ' ');

  // NO RESULTS RETURNED
  if (noListItems) {
    noListItems.style.display = 'none'; // Hide MBS div
    categoryTitle.style.display = 'none'; // Hide MBS page title

    if (baseUrl === 'https://text.uwbookstore.com/') {
      noResults.innerHTML = `
        <div class="empty-results">
          <h1>Sorry, we couldn't find any products.</h1>
          <p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p>
        </div>
        
        <div class="text-center">
          <a class="btn btn-primary" href="https://text.uwbookstore.com/SelectTermDept">Search Textbooks</a>
        </div>
        `;
    } else {
      noResults.innerHTML = `
        <div class="empty-results">
          <h1>Sorry, we couldn't find any products.</h1>
          <p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p>
        </div>
        `;
    }
    searchCatWrapRow.after(noResults);
  }

  categoryTitle.textContent = `Search Results For: ${searchTerm}`;
} // END OF if (categoryTitle.toLowerCase() === 'search all')
else if (
  categoryTitle.textContent.toLowerCase() === 'new arrivals' &&
  noListItems
) {
  noListItems.style.display = 'none'; // Hide MBS div
  categoryTitle.style.display = 'none'; // Hide MBS page title

  if (baseUrl === 'https://www.uwbookstore.com/') {
    noResults.innerHTML = `
        <section class="empty-results text-center">
          <h1>
            Badger fans, stay tuned&mdash;new gear is coming!
          </h1>
          <p class="bold">
            Until then, explore our best-selling favorites and show your Wisconsin pride!
          </p>
          <div class="row">
            <div class="col-sm-12 col-md-6 mb-2">
              <a href="http://www.uwbookstore.com/Wisconsin-Badgers/Mens/Best-Sellers">
                <img src="https://i.univbkstr.com/v3/img/pages/newArrivals/letsGo.jpg" alt=""
                  class="img-fluid d-block mb-2">
              </a>
              <div class="text-center">
                <a href="http://www.uwbookstore.com/Wisconsin-Badgers/Mens/Best-Sellers" class="btn btn-primary">Shop Men's
                  Best
                  Sellers</a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 mb-2">
              <a href="http://www.uwbookstore.com/Wisconsin-Badgers/Womens/Best-Sellers">
                <img src="https://i.univbkstr.com/v3/img/pages/newArrivals/badgers.jpg" alt=""
                  class="img-fluid d-block mb-2">
              </a>
              <div class="text-center">
                <a href="http://www.uwbookstore.com/Wisconsin-Badgers/Womens/Best-Sellers" class="btn btn-primary">Shop
                  Women's
                  Best Sellers</a>
              </div>
            </div>
          </div>
        </section>
      `;
  } else {
    noResults.innerHTML = `
        <section class="empty-results text-center">
          <h1>
            Badger fans, stay tuned&mdash;new gear is coming!
          </h1>
          <p class="bold">
            Until then, explore our best-selling favorites and show your Wisconsin pride!
          </p>
        </section>
      `;
  }
  searchCatWrapRow.after(noResults);
}

if (!noListItems) {
  // FIX CATEGORY TITLES SINCE MBS HAS CHARACTER LIMITS
  if (
    categoryTitle.textContent.toLowerCase().substring(0, 14) ===
    'dept. of comp.'
  ) {
    categoryTitle.textContent = 'Department of Computer Science';
    document.title = 'Department of Computer Science';
  } else if (
    categoryTitle.textContent.toLowerCase().substring(0, 18) ===
    'college of l and s'
  ) {
    categoryTitle.textContent = 'College of Letters and Science';
    document.title = 'College of Letters and Science';
  } else if (
    categoryTitle.textContent.toLowerCase().substring(0, 23) ===
    'dept of medical physics'
  ) {
    categoryTitle.textContent = 'Department of Medical Physics';
    document.title = 'Department of Medical Physics';
  } else if (
    categoryTitle.textContent.toLowerCase().substring(0, 25) ===
    'electrical & computer eng'
  ) {
    categoryTitle.innerHTML =
      'Department of Electrical &amp; Computer Engineering';
    document.title = 'Department of Electrical &amp; Computer Engineering';
  } else if (
    categoryTitle.textContent.toLowerCase().substring(0, 18) ===
    'passcases, wallets'
  ) {
    categoryTitle.innerHTML = 'Passcases, Wallets, &amp; Keychains';
    document.title = 'Passcases, Wallets, &amp; Keychains';
  }

  // HIDE SEARCHCATWRAP PARENT
  searchCatWrapRow.style.display = 'none';

  // CREATE HEADER WRAPPER DIV, ADD CLASS & ID
  const merchFilterWrap = document.createElement('div');
  merchFilterWrap.classList.add('merch__filter');
  merchFilterWrap.id = 'merch__filter';

  categoryTitle.style.display = 'none';

  merchFilterWrap.innerHTML = `
      <h2 class="heading__list">${categoryTitle.textContent}</h2>
  `;

  const sortBy = document.createElement('div');
  sortBy.id = 'sort-by';
  sortBy.className = 'merch__filter--item';
  sortBy.innerHTML = `
    <label style="display: block;">Sort By</label>  
  `;

  merchSortBy ? sortBy.appendChild(merchSortBy) : null;
  merchSortBy ? merchFilterWrap.appendChild(sortBy) : null;

  const shoppingCartBtn = document.createElement('div');
  shoppingCartBtn.className = 'merch__filter--item';
  shoppingCartBtn.innerHTML = `
    <a class="btn btn-primary" href="https://www.uwbookstore.com/ShoppingCart">
      Shopping Cart
    </a>  
  `;
  merchFilterWrap.appendChild(shoppingCartBtn);

  // SELECT ELEMENT TO ADD HEADER WRAPPER AFTER
  filterColumn.after(merchFilterWrap);

  // REPLACE MBS's NO IMAGE AVAILABLE GIF
  itemImage.forEach((image) => {
    if (image.getAttribute('src') === '/images/notavail.gif') {
      image.setAttribute(
        'src',
        'https://i.univbkstr.com/v3/img/misc/no-image-sm.jpg'
      );
      image.setAttribute('alt', 'Image not available');
    }
  });

  // RESET MBS MERCHITEM CLASSES AND ADD CUSTOM ONES
  const merchItems = document.querySelectorAll('.merchItem');
  merchItems.forEach((item) => {
    item.className = '';
    item.classList.add('merchItem', 'merch__card-item');
  });

  // CREATE THE PRODUCTS WRAPPER - merch__card
  const merchCard = document.createElement('div');
  merchCard.id = 'merch__card';

  merchFilterWrap.after(merchCard);

  merchColumn.classList.add('flex', 'merch__card');
  merchCard.appendChild(merchColumn);

  // merchResultsSelect.classList.remove(
  //   'wauto',
  //   'displayib',
  //   'right5',
  //   'bottom10'
  // );
  // merchResultsSelect.classList.add('mx-auto');

  const paginationBtm = document.createElement('div');
  paginationBtm.id = 'pagination-btm';
  paginationBtm.className = 'text-center';

  merchCard.after(paginationBtm);
  // paginationBtm.appendChild(pagination);
  // paginationBtm.appendChild(merchResultsSelect);
  const filterSelectionsRow =
    document.querySelector('.filterSelections').parentElement;

  filterSelectionsRow ? (filterSelectionsRow.style.display = 'none') : null;

  // ADD BANNERS/MESSAGES TO CERTAIN PAGES
  // create container for banner/message
  const pageBanner = document.createElement('div');

  // FOR SCANDINAVIAN STUDIES
  if (
    categoryTitle.textContent.toLowerCase().substring(0, 12) === 'scandinavian'
  ) {
    pageBanner.classList.add('alert', 'alert-warning');
    pageBanner.innerHTML = `
      <p style="text-align: center; margin: 0; font-size: 20px;">
        <em>Note</em> - All books sold in packs of five &mdash; price listed is for five books.
      </p>    
    `;
    merchFilterWrap.after(pageBanner);
  }

  // FOR NEW ARRIVALS
  if (categoryTitle.textContent.toLowerCase() === 'new arrivals') {
    pageBanner.classList.add('text-center');
    pageBanner.innerHTML = `
    <a href="https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Back-in-Stock" class="btn btn-primary">
    Back in Stock Items
    </a>
    `;
    merchFilterWrap.after(pageBanner);
  }

  // FOR CAP & GOWN PACKAGES
  // if (categoryTitle.textContent.toLowerCase() === 'cap & gown packages') {
  //   pageBanner.classList.add('alert', 'alert-danger', 'text-center');
  //   pageBanner.innerHTML = `
  //       <p class="mb-0"><strong>RENT IN-STORE @ 711 STATE STREET IN PERSON ONLY. ONLINE ORDERS ARE CLOSED.</strong></p>
  //     `;
  //   merchFilterWrap.after(pageBanner);
  // }

  // FOR AM FAM CHAMPIONSHIP ITEMS
  if (categoryTitle.textContent.toLowerCase().substring(0, 6) === 'am fam') {
    pageBanner.innerHTML = `
      <div class="alert alert-danger text-center mb-3">
        <h2 class="mb-1">Thanks for supporting the American Family Championship.</h2>
        <p class="mb-0">All of the products have been packed up for the event!<br>Come see us at TPC Wisconsin June 6-8.</p>
      </div>
      <img src="https://i.univbkstr.com/v3/img/landing/merch/AmFamGolf.png" class="img-fluid img__center d-block" alt="AmFam Championship. Official Merchandise Partner of the American Family Insurance Championship.">   
    `;
    filterColumn.after(pageBanner);
  }

  // FOR JULIA GASH ITEMS
  if (
    categoryTitle.textContent.toLowerCase().substring(0, 10) === 'julia gash'
  ) {
    pageBanner.innerHTML = `
      <img alt="Julia Gash" src="https://i.univbkstr.com/v3/img/banners/JuliaGash.png" class="img-fluid img__center d-block">
    `;
    filterColumn.after(pageBanner);
  }

  // FOR SHOP BY BRAND - APPLE
  if (categoryTitle.textContent.toLowerCase().substring(0, 5) === 'apple') {
    pageBanner.innerHTML = `
      <picture>
        <source media="(min-width: 28.125em)"
          srcset="https://i.univbkstr.com/v3/img/banners/appleBanner.jpg" width="1320"
          height="200">
        <img alt="Apple Authorized Campus Store" src="https://i.univbkstr.com/v3/img/banners/appleBanner-sm.jpg"
          class="img-fluid img__center d-block mb-2" loading="lazy" width="450" height="200">
      </picture>
    `;
    filterColumn.after(pageBanner);
  }

  // SPECIAL PRICING NOTE FOR ELECTRONICS
  if (categoryTitle.textContent.toLowerCase().substring(0, 4) === 'ipad') {
    pageBanner.classList.add('alert', 'alert-info', 'text-center');
    pageBanner.innerHTML = `
        <p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p>
      `;
    merchFilterWrap.after(pageBanner);
  }

  // if (categoryTitle.textContent.toLowerCase().includes('best sellers')) {
  //   productName.forEach((item) => {
  //     const specialBadge = document.createElement('div');
  //     specialBadge.className = 'specialBadge';
  //     specialBadge.textContent = 'Best Seller';
  //     const merchLink = item.closest('.merchDetailWrapper');
  //     merchLink.prepend(specialBadge);
  //   });
  // }

  // ADD MACBOOK/DELL CROSSLINKS
  if (baseUrl === 'https://www.uwbookstore.com/') {
    if (
      categoryTitle.textContent.toLowerCase().substring(0, 16) === 'dell laptop'
    ) {
      pageBanner.innerHTML = `
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Surface-Laptop" class="btn btn-primary">Surface Laptops</a></li></ul>
        <div class="alert alert-info text-center">
          <p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p>
        </div>
      `;
      merchFilterWrap.after(pageBanner);
    } else if (
      categoryTitle.textContent.toLowerCase().substring(0, 14) ===
      'surface laptop'
    ) {
      pageBanner.innerHTML = `
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li></ul>
        <div class="alert alert-info text-center">
          <p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p>
        </div>
      `;
      merchFilterWrap.after(pageBanner);
    } else if (
      categoryTitle.textContent.toLowerCase().substring(0, 7) === 'macbook'
    ) {
      pageBanner.innerHTML = `
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Surface-Laptop" class="btn btn-primary">Surface Laptops</a></li></ul>
        <div class="alert alert-info text-center">
          <p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p>
        </div>
      `;
      merchFilterWrap.after(pageBanner);
    } else if (
      categoryTitle.textContent.toLowerCase().substring(0, 6) === 'laptop'
    ) {
      pageBanner.innerHTML = `
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Surface-Laptop" class="btn btn-primary">Surface Laptops</a></li></ul>
        <div class="alert alert-info text-center">
          <p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p>
        </div>
      `;
      merchFilterWrap.after(pageBanner);
    }
  }

  // ADD RED SHIRT HELP BUTTON
  if (
    window.location.href.toLowerCase().indexOf('red%20shirt') > -1 ||
    window.location.href.indexOf('17th') > -1
  ) {
    pageBanner.classList.add('p-0', 'text-center');
    pageBanner.innerHTML = `
      Looking for The Red Shirt&trade;, 18<sup>th</sup> Edition? Find it here:<br>
      <a href="https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/The-Red-Shirt-18th-Edition" class="btn btn-primary m-2">The Red Shirt&trade;</a>    
    `;
    filterColumn.after(pageBanner);
  }

  // ADD BACK IN STOCK BADGE TO ITEMS WITH ^ IN PRODUCTNAME
  productName.forEach((item) => {
    const name = item.textContent.toLowerCase();
    const merchLink = item.closest('.merchDetailWrapper');

    if (name.includes('^')) {
      const restockBadge = document.createElement('div');
      restockBadge.className = 'restockBadge';
      restockBadge.innerHTML = 'Back in<br>Stock!';

      merchLink.prepend(restockBadge);
    }

    const specialBadge = document.createElement('div');
    specialBadge.className = 'specialBadge';
    // if (name.startsWith('ipad air') || name.startsWith('ipad pro')) {
    //   specialBadge.textContent = 'Free Pencil Pro';
    //   merchLink.prepend(specialBadge);
    // }

    // if (name.startsWith('macbook') || name.startsWith('imac')) {
    //   specialBadge.textContent = 'Free AirPods';
    //   merchLink.prepend(specialBadge);
    // }
  });
}
// } END OF MERCHLIST IF STATEMENT

// USE JQUERY TO CHECK PAGE ITEMS LENGTH
// IF ONLY ONE PAGE OF RESULTS, HIDE PAGINATION
// AND MERCHRESULTSSELECT BOX
$(document).ready(() => {
  const pageItems = $('.pagination li');
  const merchItem = $('.merchItem');
  $('ul.pagination').appendTo('#pagination-btm');

  $('select.merchResultsSelect')
    .removeClass('wauto displayib right5 bottom10')
    .addClass('mx-auto')
    .appendTo('#pagination-btm');

  if (merchItem.length <= 24 && pageItems.length === 1) {
    $('ul.pagination, select.merchResultsSelect').hide();
  }
});
