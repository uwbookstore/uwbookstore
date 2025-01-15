$(document).ready(function () {
  // let categoryTitle = $('h1.page_header').text();
  // const itemImage = $('.merchImage');
  const productName = $('p.merchTitle');

  productName.each(function () {
    const name = $(this).text();
    const prevSibling = $(this).prev();
    if (name.includes('^')) {
      $('<div class="restockBadge">Back<br>in Stock!</div>').prependTo(
        prevSibling
      );
    }
  });

  const parentDiv = $('.panel-body');
  $.each(parentDiv, function () {
    if (!$(this).children().length > 0) {
      $(this).parent().hide();
    }
  });

  $(".category-name:contains('SPECIAL')").parent().parent().hide();
  $(".category-name:contains('PACKAGE')").parent().parent().hide();
  $(".category-name:contains('Study Aids')").parent().parent().hide();
  $('.category-name:contains("WOMEN\'S HATS")').parent().parent().hide();
  $('.category-name:contains("WINTER HATS")').parent().parent().hide();

  const isUpperCase = (str) => str === str.toUpperCase();

  const merchLink = $('.merchLinkText');
  $.each(merchLink, function () {
    $(this).removeClass('top5');
    $(this).parent().removeClass('textc small displayb padding5');
    if (isUpperCase($(this).text())) {
      $(this).parent().parent().addClass('hide');
    }

    if ($(this).text() === 'cold&deg;gear') {
      $(this).html('cold&deg;gear');
    }

    if ($(this).text() === 'heat&deg;gear') {
      $(this).html('heat&deg;gear');
    }

    if ($(this).text() === 'Tokyodachi&reg;') {
      $(this).html('Tokyodachi&reg;');
    }
  });
});
