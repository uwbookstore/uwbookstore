// Get the category title - (h1.page_header)
let categoryTitle = document.querySelector('h1.page_header');
let titleParent = categoryTitle.parentElement;

// ADD BANNERS/MESSAGES TO CERTAIN PAGES
// create container for banner/message
const divToShow = document.createElement('div');
divToShow.className = 'hidden';

// INSERT NEW DIV BEFORE OR AFTER CATEGORY TITLE
// categoryTitle.after(divToShow);
titleParent.insertBefore(divToShow, categoryTitle);

// FOR FIND YOUR ENERGY
if (
  categoryTitle.textContent.toLowerCase().substring(0, 16) ===
  'find your energy'
) {
  divToShow.className = '';
  divToShow.classList.add('alert', 'alert-success');
  divToShow.innerHTML = `
      <p>
        This is the FYE Page DIV.
      </p>    
    `;
} else if (
  categoryTitle.textContent.toLowerCase().substring(0, 16) ===
  'another category'
) {
  divToShow.className = '';
  divToShow.classList.add('alert', 'alert-info');
  divToShow.innerHTML = `
      <p>
        This is Another Category Page DIV.
      </p>    
    `;
} else if (
  categoryTitle.textContent.toLowerCase().substring(0, 22) ===
  "men's long sleeve tees"
) {
  divToShow.className = '';
  divToShow.classList.add('alert', 'alert-danger');
  divToShow.innerHTML = `
      <p>
        This is the Men's Long Sleeve Tees Page
      </p>    
    `;
}

// SET LOCALSTORAGE WITH EXPIRY
const date = new Date().setDate(new Date().getDate() + 30);

localStorage.setItem(
  'test-item',
  JSON.stringify({
    value: 'string',
    expDate: date,
  })
);

const item = localStorage.getItem('test-item');

if (item) {
  const res = new Date().getTime() > JSON.parse(item).expDate;
  if (res) {
    localStorage.removeItem('test-item');
  } else {
    console.log(JSON.parse(item).value);
  }
} else {
  console.log('No item');
}
