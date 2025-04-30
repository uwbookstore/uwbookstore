// Get the category title - (h1.page_header)
let categoryTitle = document.querySelector('h1.page_header');

// ADD BANNERS/MESSAGES TO CERTAIN PAGES
// create container for banner/message
const divToShow = document.createElement('div');
divToShow.className = 'hidden';
categoryTitle.after(divToShow);

// FOR FIND YOUR ENERGY
if (
  categoryTitle.textContent.toLowerCase().substring(0, 16) ===
  'find your energy'
) {
  divToShow.className = '';
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
  divToShow.classList.add('alert', 'alert-info');
  divToShow.innerHTML = `
      <p>
        This is the Men's Long Sleeve Tees Page
      </p>    
    `;
}
