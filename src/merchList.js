$(document).ready(function () {
  let categoryTitle = $('h1.page_header').text();
  const itemImage = $('.merchImage');
  const productName = $('p.merchTitle');

  if (categoryTitle.toLowerCase() === 'search all') {
    const searched = window.location.search.split('=');
    const searchTerm = searched[2].replace(/%20/g, ' ');

    // HANDLE NO SEARCH RESULTS RETURNED
    if (
      baseUrl === 'https://insitestore2.mbsbooks.com/uwmadison/home' ||
      baseUrl === 'https://www.uwbookstore.com/' ||
      baseUrl === 'https://www.uwalumnistore.com/'
    ) {
      if ($('.noListItems').length) {
        $('.noListItems').hide();
        $(
          `<div class="empty-results"><h2>Sorry, we couldn't find any products.</h2><p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p></div>`
        ).insertAfter('.searchCatWrap');
      }
    } else {
      if ($('.noListItems').length) {
        $('.noListItems').hide();
        $(
          `<div class="empty-results"><h2>Sorry, we couldn't find any products.</h2><p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p></div><div class="text-center"><a class="btn btn-primary" href="https://text.uwbookstore.com/SelectTermDept">Search Textbookds</a></div>`
        ).insertAfter('.searchCatWrap');
      }
    }

    categoryTitle = `Search Results For: ${searchTerm}`;

    if (searchTerm.toLowerCase() === 'contact') {
      $('div#merch__header, div.merch__card, div.merchResults').hide();
      $(
        `<div id="page-loader" class="text-center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i><span class="sr-only">Loading...</span></div>`
      ).insertBefore('div#merch__header');
      window.location.replace('https://www.uwbookstore.com/Contact');
    } else if (
      window.location.href.toLowerCase().indexOf('') > -1 ||
      window.location.href.indexOf('17th') > -1
    ) {
      $(
        `<div class="m-2 text-center">Looking for The Red Shirt&trade;, 17<sup>th</sup> Edition? Finde it here:<br><a href=https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/The-Red-Shirt-17th-Edition" class="btn btn-primary m-2">The Red Shirt&trade;</a></div>`
      ).prependTo('#contentSection');
    }
  }

  // REWRITE CATEGORY TITLE FOR CATEGORIES TOO LONG FOR MBS
  if (categoryTitle.toLowerCase().substring(0, 14) === 'dept. of comp.') {
    categoryTitle = 'Department of Computer Science';
    $(document).prop('title', 'Department of Computer Science');
  }

  if (categoryTitle.toLowerCase().substring(0, 18) === 'college of l and s') {
    categoryTitle = 'College of Letters and Science';
    $(document).prop('title', 'College of Letters and Science');
  }

  if (
    categoryTitle.toLowerCase().substring(0, 23) === 'dept of medical physics'
  ) {
    categoryTitle = 'Department of Medical Physics';
    $(document).prop('title', 'Department of Medical Physics');
  }

  // REPLACE MBS MISSING IMAGE IMG
  $.each(itemImage, () => {
    if ($(this).attr('src') === '/images/notavail.gif') {
      $(this)
        .attr('src', 'https://i.univbkstr.com/v3/img/misc/no-image-sm.jpg')
        .attr('alt', 'Image not available');
    }
  });

  if (categoryTitle.toLowerCase() !== 'back to to school promo') {
    // $('.merchButtons').first().hide(); TODO: make sure removing this line doesn't break anything
    $('.viewfiltersDiv, .filterSelections').hide();
    // $('merchButtons a').removeClass('btn-xs top5'); TODO: make sure removing this line doesn't break anything
    $('.merchDetailWrapper').removeClass(' col-xs-12');
    $('.merchItem')
      .removeClass(
        'padding0 bottom10 col-md-3 col-sm-6 col-xs-12 merchListClear4 merchListClearTwo'
      )
      .addClass('merch__card-item');

    // CREATE NEW FLEX CONTAINER FOR ITEMS
    $(
      `
      <div id="merch__header" class="merch__header">
        <h2 class="page_header">${categoryTitle}</h2>
        <div class="merch__header-inputs"></div>
      </div>
      <div id="merch__card"></div>
      <div id="pagination-btm" class="text-center"></div>
      `
    ).insertAfter('.filterColumn');

    // APPEND SEARCH, ITEMS PER PAGE, AND SORT BY TO .merch__header-inputs
    $('.searchCatWrap .input-group').appendTo('.merch__header-inputs');

    // EXTRACT THE VARIOUS input-group ELEMENTS FROM sortCatWrap
    const itemsPerPage = $('#merchResultsSelectID').parent();
    const sortBy = $('#merchSortBySelectID').parent();

    $(itemsPerPage).appendTo('.merch__header-inputs');
    $(sortBy).appendTo('.merch__header-inputs');

    $('.searchCatWrap, .sortCatWrap, h1.page_header').hide();
  } else {
    // TODO: rewrite of Apple back to school script might not be needed - delete else statement?
  }

  // ADD BACK IN STOCK BADGE TO RESTOCKS
  productName.each(function () {
    const name = $(this).text();
    const prevSibling = $(this).prev();
    if (name.includes('^')) {
      $('<div class="restockBadge">Back<br>in Stork!!</div>').prependTo(
        prevSibling
      );
    }
  });

  // HANDLE MERCHANDISE PAGE DISPLAY
  // REMOVE UNNECESSARY CLASSES & HIDE ANY ALL CAPS
  const isUpperCase = (str) => str === str.toUpperCase();

  const merchLink = $('.merchLinkText');

  $.each(merchLink, function () {
    $(this).removeClass('top5');
    $(this).parent().removeClass('textc small displayb padding5');
    if (isUpperCase($(this).text())) {
      $(this).parent().parent().remove();
    }

    if ($(this).text() === 'cold&deg;gear') {
      $(this).html('cold&deg;gear');
    }

    if ($(this).text() === 'heat&deg;gear') {
      $(this).html('heat&deg;gear');
    }

    // TODO: check if we're planning to get in again. If not, delete
    if ($(this).text() === 'Tokyodachi&reg;') {
      $(this).html('Tokyodachi&reg;');
    }
  });

  // HIDE EMPTY CARDS
  const parentDiv = $('.card-body .row');
  $.each(parentDiv, function (i) {
    if (!$(this).children().length > 0) {
      $(this).parent().parent().hide();
    }
  });
});

/* 
 TODO: Lines 41, 94 - check if merch__header is still the correct id
 TODO: line 48 - Make sure to check Red Shirt button link
*/
