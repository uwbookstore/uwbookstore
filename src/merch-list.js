// Rewrite MBS default Merch List page
// Define page variables
let categoryTitle = document.querySelector('h1.page_header');
const itemImage = document.querySelectorAll('.merchImage');
const productName = document.querySelectorAll('p.merchTitle');
const searchCatWrapRow = document.querySelector('.searchCatWrap').parentElement;
const noListItems = document.querySelector('.noListItems');
const filterSelectionsRow =
  document.querySelector('.filterSelections').parentElement;
const merchSortBy = document.querySelector('select.merchSortBy');
const filterColumn = document.querySelector('.filterColumn');
const merchColumn = document.querySelector('.merchColumn');
const merchResultsSelect = document.querySelector('select.merchResultsSelect');
const pagination = document.querySelector('ul.pagination');
const pageItems = document.querySelectorAll('.pagination li');

// Create new div for no items found
const noResults = document.createElement('div');
noResults.classList.add('empty-results');

// Make sure we're on a merchList page
if (window.location.href.toLowerCase().search(/merchlist/) !== -1) {
  if (categoryTitle.textContent.toLocaleLowerCase() === 'search all') {
    const searched = window.location.search.split('=');
    const searchTerm = searched[2].replace(/%20/g, ' ');

    // HANDLE NO SEARCH RESULTS RETURNED
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
    // END - NO SEARCH RESULTS FOUND

    // IF THERE ARE SEARCH RESULTS
    // Set the page title
    categoryTitle = `Search Results For: ${searchTerm}`;

    if (searchTerm.toLocaleLowerCase() === 'contact') {
      // TODO: rewrite this down the road
    } else if (
      window.location.href.toLowerCase().indexOf('red%20shirt') > -1 ||
      window.location.href.indexOf('17th') > 1
    ) {
      // TODO: rewrite down the road
    }
  } // END OF if (categoryTitle.toLowerCase() === 'search all')

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

  sortBy.appendChild(merchSortBy);
  merchFilterWrap.appendChild(sortBy);

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

  const merchItem = document.querySelectorAll('.merchItem');
  merchItem.forEach((item) => {
    item.className = '';
    item.classList.add('merch__card-item');
  });

  // CREATE THE PRODUCTS WRAPPER - merch__card
  const merchCard = document.createElement('div');
  merchCard.id = 'merch__card';

  merchFilterWrap.after(merchCard);

  merchColumn.classList.add('flex', 'merch__card');
  merchCard.appendChild(merchColumn);

  merchResultsSelect.classList.remove(
    'wauto',
    'displayib',
    'right5',
    'bottom10'
  );
  merchResultsSelect.classList.add('mx-auto');

  const paginationBtm = document.createElement('div');
  paginationBtm.id = 'pagination-btm';
  paginationBtm.className = 'text-center';
  console.log(merchItem.length);

  if (merchItem.length < 12) {
    console.log('less than 12 items');
    pagination.style.visibility = 'hidden';
    pagination.style.display = 'none';
    merchResultsSelect.style.visibility = 'hidden';
  } else {
    console.log('12 or more items');
    paginationBtm.appendChild(pagination);
    paginationBtm.appendChild(merchResultsSelect);
  }

  merchCard.after(paginationBtm);
  filterSelectionsRow.style.display = 'none';

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
    <a href="https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/New-Items" class="btn btn-primary">
    Back in Stock Items
    </a>
    `;
    merchFilterWrap.after(pageBanner);
  }

  // FOR AM FAM CHAMPIONSHIP ITEMS
  if (categoryTitle.textContent.toLowerCase().substring(0, 6) === 'am fam') {
    pageBanner.innerHTML = `
      <img src="https://i.univbkstr.com/v3/img/landing/merch/AmFamGolf.png" class="img-fluid img__center" alt="AmFam Championship. Official Merchandise Partner of the American Family Insurance Championship.">   
    `;
    filterColumn.after(pageBanner);
  }

  // FOR JULIA GASH ITEMS
  if (
    categoryTitle.textContent.toLowerCase().substring(0, 10) === 'julia gash'
  ) {
    pageBanner.innerHTML = `
      <img alt="Julia Gash" src="https://i.univbkstr.com/v3/img/banners/JuliaGash.png" class="img-fluid">
    `;
    filterColumn.after(pageBanner);
  }

  // SPECIAL PRICING NOTE FOR ELECTRONICS
  if (
    categoryTitle.textContent.toLowerCase().substring(0, 7) === 'macbook' ||
    categoryTitle.textContent.toLowerCase().substring(0, 4) === 'ipad' ||
    categoryTitle.textContent.toLowerCase().includes('laptop')
  ) {
    pageBanner.classList.add('alert', 'alert-info', 'text-center');
    pageBanner.innerHTML = `
        <p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p>
      `;
    merchFilterWrap.after(pageBanner);
  }

  // ADD BACK IN STOCK BADGE TO ITEMS WITH ^ IN PRODUCTNAME
  productName.forEach((item) => {
    const name = item.textContent;

    if (name.includes('^')) {
      const restockBadge = document.createElement('div');
      restockBadge.className = 'restockBadge';
      restockBadge.innerHTML = 'Back in<br>Stock!';

      const merchLink = item.closest('.merchDetailWrapper');
      merchLink.prepend(restockBadge);
    }
  });
} // END OF MERCHLIST IF STATEMENT

/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */

// HANDLE EMPTY NEW ARRIVALS PAGE
if (window.location.href.toLowerCase().search(/newarrivals/) !== -1) {
  if (noListItems) {
    noListItems.style.display = 'none'; // Hide MBS div
    categoryTitle.style.display = 'none'; // Hide MBS page title

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

    searchCatWrapRow.after(noResults);
  }
}
