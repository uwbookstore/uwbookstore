document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll("a.page-scroll[href^='#']");

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
