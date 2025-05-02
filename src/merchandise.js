// HANDLE MERCHANDISE PAGE
// HIDE ANY CATEGORY IN ALL CAPS
// REMOVE ALL EMPTY CATEGORIES

// Hide parent of .panel-body if it has no children
document.querySelectorAll('.panel-body').forEach((panel) => {
  if (panel.children.length === 0) {
    panel.parentElement.style.display = 'none';
  }
});

// Hide parent containers based on category name text content
['New Arrivals', 'SPECIAL', 'PACKAGE', 'Study Aids', "WOMEN'S HATS"].forEach(
  (keyword) => {
    document.querySelectorAll('.category-name').forEach((elem) => {
      if (elem.textContent.includes(keyword)) {
        elem.parentElement.parentElement.style.display = 'none';
      }
    });
  }
);

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

  if (text === 'Tokyodachi®') {
    link.innerHTML = 'Tokyodachi&reg;';
  }
});
