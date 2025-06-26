// HANDLE MERCHANDISE PAGE
// HIDE ANY CATEGORY IN ALL CAPS
// REMOVE ALL EMPTY CATEGORIES

// Remove card styles if on gift items page
const urlParam = (name) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || 0;
};

if (
  window.location.href.toLowerCase().search(/gift-items/) !== -1 ||
  urlParam('mc_id') === '1113'
) {
  const categoryName = document.querySelectorAll('.category-name');
  categoryName.forEach((category) => {
    if (category.textContent.toLowerCase() === 'gift items') {
      const categoryParentDiv = category.parentElement.parentElement;
      const categoryBody = category.parentElement.nextElementSibling;
      const categoryHeader = document.createElement('div');
      categoryHeader.classList.add('jumbotron', 'landing');
      categoryHeader.innerHTML = '<h2>Badger Gifts</h2>';

      category.parentElement.style.display = 'none';
      categoryParentDiv.classList.remove('card');
      categoryBody.classList.add('card-body-gift');
      categoryBody.style.padding = '20px 0 10px';
      categoryParentDiv.insertBefore(categoryHeader, category.parentElement);
    }
  });
}

// Hide parent of .panel-body if it has no children
document.querySelectorAll('.card-body .row').forEach((card) => {
  if (card.children.length === 0) {
    card.parentElement.parentElement.style.display = 'none';
  }
});

// IF NOT ON MAIN MERCHANDISE PAGE, HIDE PAGE HEADER
const pageHeader = document.querySelector('.page_header');
if (pageHeader.textContent.toLowerCase() !== 'merchandise categories') {
  pageHeader.style.display = 'none';
} else {
  pageHeader.textContent = 'Categories';
}

// Hide parent containers based on category name text content
[
  'New Arrivals',
  'SPECIAL',
  'PACKAGE',
  'Study Aids',
  "WOMEN'S HATS",
  'DNR MAPS',
  'General Books',
  'CAP & GOWN',
  "MEN'S S&L",
  "WOMEN'S S&L",
  'SHARED DO',
  'School Of Business',
].forEach((keyword) => {
  document.querySelectorAll('.category-name').forEach((elem) => {
    if (elem.textContent.includes(keyword)) {
      elem.parentElement.parentElement.style.display = 'none';
    }
  });
});

// Hide categories that we don't want displayed
[
  'AirPods Promo',
  'Ron Dayne Tees',
  'UA Jerseys',
  'Alumni Crew Neck',
  'Axe Game 2024',
  'B10 Tournament Champs',
  'Back in Stock',
  'Basketball Items',
  'Bed & Bath',
  'Biking Items',
  'Black Out the Kohl Center',
  'BookTok',
  'Bucky on Parade',
  'Bucky on Parade Figurines',
  'Buttons',
  'Champion Pre-Sale',
  'Champion Sale',
  'ChampionUpsideDown',
  'Clear Bags',
  'Cow Print',
  'Custom Orders',
  'Dorm Accessories',
  'Duck Hunt',
  'Engineering Supplies',
  'Family Equality',
  'Family Weekend',
  'Fine Gifts',
  'Fitness',
  'Football Items',
  'Frozen Confines',
  'Game Day Ready',
  'Halloween Items',
  'Hawaiian Shirts',
  'Health and Beauty',
  'Holiday Gift Guide',
  'Index Cards',
  'Jacket Sale',
  'Jewelry Sale',
  'Jump Around',
  'Made in U.S.A.',
  "Men's Hockey",
  'Miscellaneous Supplies',
  'Organizers & Ring Binders',
  'Other Sports',
  'Outfit of the Week',
  'Paper',
  'Pens',
  'Recycled',
  'Roll Badge',
  'School of Nursing',
  'School of Nursing Hood',
  'School Supplies',
  'Snoopy',
  'Soccer Items',
  'Spirals, Notebooks & Pads',
  'Spring Items',
  'Squishy Plush',
  "St. Patrick's Day Items",
  'Starter Jackets',
  'Steve Stricker Collection',
  'Stocking Stuffers',
  'Stripe Out Red',
  'Study Gear',
  'Sunglasses',
  'Upside Down',
  'UW Band Items',
  "Valentine's Gift Ideas",
  'Vault',
  'Vintage Inspired Logo',
  'Volleyball Items',
  "Wando's",
  'White Items',
  'Wisconsin Family',
  'Wisconsin Socks',
  'Wisconsin vs. Alabama Tee',
  "Women's Hockey",
  "Women's Hockey Champions",
  "Women's Sports",
  'Wrestling Items',
  'Writing Supplies',
  'Yard Signs',
  '20 Celebration Gowns-P',
  '2020 Celebration Gowns',
].forEach((keyword) => {
  document.querySelectorAll('.merchLinkText').forEach((elem) => {
    if (elem.textContent.includes(keyword)) {
      elem.parentElement.parentElement.style.display = 'none';
    }
  });
});

// Helper function to test if string is uppercase
const isUpperCase = (str) => str === str.toUpperCase();

// Process .merchLinkText elements
document.querySelectorAll('.merchLinkText').forEach((link) => {
  link.classList.remove('top5');
  link.parentElement.classList.remove('textc', 'small', 'displayb', 'padding5');

  const text = link.textContent;

  if (isUpperCase(text)) {
    link.parentElement.parentElement.classList.add('hide');
  }

  if (text === 'cold°gear') {
    link.innerHTML = 'cold&deg;gear';
  }

  if (text === 'heat°gear') {
    link.innerHTML = 'heat&deg;gear';
  }

  if (text === 'Wite-Out®') {
    link.innerHTML = 'Wite-Out&reg;';
  }
});
