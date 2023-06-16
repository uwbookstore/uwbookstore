// const navToggle = document.getElementById('ubs-nav-toggle');
// const navbar = document.getElementById('ubs-nav');

// navToggle.addEventListener('click', toggleCollapse);

// function toggleCollapse() {
//   toggleAriaExpanded(navToggle);
//   toggleAriaExpanded(navbar);
//   navToggle.classList.toggle('collapsed');
//   navbar.classList.toggle('show');
// }

// function toggleAriaExpanded(elem) {
//   let x = elem.getAttribute('aria-expanded');
//   x === 'true' ? (x = 'false') : (x = 'true');
//   elem.setAttribute('aria-expanded', x);
// }

// https://getbutterfly.com/how-to-implement-jquery-slidetoggle-in-vanilla-javascript/

$(document).ready(() => {
  // Mobile navbar toggle
  const navToggle = $('#ubs-nav-toggle');
  const navbar = $('#ubs-nav');
  navToggle.click((e) => {
    e.stopPropagation();
    navToggle.toggleClass('collapsed');
    navbar.slideToggle();
  });

  $('.drop-down-menu').click(function (e) {
    e.stopPropagation();
  });

  $('.drop-down-toggle').off('focus');
  $('.drop-down-toggle').off('click');

  $('.drop-down-toggle').click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $('.has-megamenu, .drop-down').removeClass('open');
      $(this).parent().toggleClass('open');
    }
  });
});
