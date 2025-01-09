$(document).ready(function () {
  let categoryTitle = $('h1.page_header').text();
  const itemImage = $('.merchImage');
  const productName = $('p.merchTitle');

  if (categoryTitle.toLowerCase() === 'search all') {
    const searched = window.location.search.split('=');
    const searchTerm = searched[2].replace(/%20/g, ' ');

    // HANDLE NO SEARCH RESULTS RETURNED
    if (
      baseUrl === 'https://www.uwbookstore.com/' ||
      baseUrl === 'https://www.uwalumnistore.com/'
    ) {
      if ($('.noListItems').length) {
        $('.noListItems').hide();
        $(
          `<div class="empty-results"><h1>Sorry, we couldn't find any products.</h1><p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p></div>`
        ).insertAfter('.searchCatWrap');
      }
      console.log(`UW Book Store or UW Alumni Store`);
    } else {
      if ($('.noListItems').length) {
        $('.noListItems').hide();
        $(
          `<div class="empty-results"><h1>Sorry, we couldn't find any products.</h1><p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p></div><div class="text-center"><a class="btn btn-primary" href="https://text.uwbookstore.com/SelectTermDept">Search Textbooks</a></div>`
        ).insertAfter('.searchCatWrap');
      }
      console.log(`Texbooks...`);
    }

    categoryTitle = 'Search Results For: ' + searchTerm;

    if (searchTerm.toLowerCase() === 'contact') {
      $('div#merch__filter, div.merch__card, div.merchResults').hide();
      $(
        '<div id="page-loader" class="text-center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span></div>'
      ).insertBefore('div#merch__filter');
      window.location.replace('https://www.uwbookstore.com/Contact');
    } else if (
      window.location.href.toLowerCase().indexOf('red%20shirt') > -1 ||
      window.location.href.indexOf('13th') > -1
    ) {
      $(
        '<div class="m-2 text-center">Looking for The Red Shirt&trade;, 17<sup>th</sup> Edition? Find it here:<br><a href="https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/The-Red-Shirt-17th-Edition" class="btn btn-primary m-2">The Red Shirt&trade;</a></div>'
      ).prependTo('#contentSection');
    }
  }

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

  if (
    categoryTitle.toLowerCase().substring(0, 22) === '20 celebration gowns-p'
  ) {
    categoryTitle = '2020 Celebration Gowns (Previously Rented)';
    $(document).prop('title', '2020 Celebration Gowns (Previously Rented)');
  }

  $.each(itemImage, function () {
    if ($(this).attr('src') === '/images/notavail.gif') {
      $(this)
        .attr('src', 'https://i.univbkstr.com/v3/img/misc/no-image-sm.jpg')
        .attr('data-src', 'holder.js/200x200?auto=yes&text=Image not available')
        .attr('alt', 'Image not available');
    }
  });

  const pageItems = $('.pagination li');

  if (pageItems.length === 1) {
    $('ul.pagination').hide();
  }

  if (window.location.href.search(/search-red/) !== -1) {
    $(
      '<div class="m-2 text-center">Looking for previous years? Find them here:<br><a href="https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/The-Red-Shirt" class="btn btn-primary m-2">The Red Shirt&trade;</a></div>'
    ).insertAfter('#merch__card');
  }

  if (categoryTitle.toLowerCase().substring(0, 12) === 'scandinavian') {
    $(
      '<div class="alert alert-warning"><p style="text-align: center; margin: 0; font-size: 20px;"><em>Note</em> - All books sold in packs of five &mdash; price listed is for five books.</p></div>'
    ).insertAfter('.merch__filter');
  }

  if (categoryTitle.toLowerCase().substring(0, 6) === 'am fam') {
    $(
      '<img src="https://i.univbkstr.com/v3/img/landing/merch/AmFamGolf.png" class="img-fluid img__center" alt="AmFam Championship. Official Merchandise Partner of the American Family Insurance Championship.">'
    ).insertBefore('.merch__filter');
  }

  if (categoryTitle.toLowerCase().substring(0, 6) === 'laptop') {
    if (window.location.host === 'www.uwbookstore.com') {
      $(
        `<!-- <img class="img-fluid mx-auto mb-4 mobi-hide"
        src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
      <img class="img-fluid mx-auto mb-4 dt-hide"
        src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool-sm.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." /> -->
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li></ul>`
      ).insertAfter('.merch__filter');
    } else {
      $().insertAfter('.merch__filter');
    }
  }

  if (categoryTitle.toLowerCase().substring(0, 10) === 'julia gash') {
    $(
      '<img alt="Julia Gash" src="https://i.univbkstr.com/v3/img/banners/JuliaGash.png" class="img-fluid">'
    ).insertBefore('.merch__filter');
  }

  if (categoryTitle.toLowerCase().substring(0, 16) === 'dell laptop') {
    if (window.location.host === 'www.uwbookstore.com') {
      // $(
      //     '<a href="https://i.univbkstr.com/downloads/4746_Dell_BTS_POP_Kit_2022_RETAIL_POSTCARD_EDITABLE.pdf" target="_blank"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021.jpg" class="mobi-hide img-fluid img__center" alt="Student Rebate"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021-sm.jpg" class="dt-hide img-fluid img__center" alt="Student Rebate"><div class="visually-hidden">STUDENT OFFER. $100 Rebate - WITH THE PURCHASE OF A DELL PC $499+. Offer valid 05/01/2022 - 10/31/2022</div></a>'
      // ).insertBefore(".merch__filter");
      $(
        '<ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li></ul>'
      ).insertAfter('.merch__filter');
    } else {
      // $(
      //     '<a href="https://i.univbkstr.com/downloads/4746_Dell_BTS_POP_Kit_2022_RETAIL_POSTCARD_EDITABLE.pdf" target="_blank"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021.jpg" class="mobi-hide img-fluid img__center" alt="Student Rebate"><img src="https://i.univbkstr.com/v3/img/banners/Dell-Rebate-2021-sm.jpg" class="dt-hide img-fluid img__center" alt="Student Rebate"><div class="visually-hidden">STUDENT OFFER. $100 Rebate - OF A DELL PC $499+ OF A DELL PC $499+. Offer valid 05/01/2022 - 10/31/2022</div></a>'
      // ).insertBefore(".merch__filter");
      $(
        '<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28462" class="btn btn-primary">All Laptops</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li></ul>'
      ).insertAfter('.merch__filter');
    }
  }

  if (categoryTitle.toLowerCase().substring(0, 7) === 'macbook') {
    if (window.location.host === 'www.uwbookstore.com') {
      $(
        `<!-- <img class="img-fluid mx-auto mb-4 mobi-hide"
        src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
      <img class="img-fluid mx-auto mb-4 dt-hide"
        src="https://i.univbkstr.com/v3/img/pages/tech/apple/backToSchool-sm.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." /> -->
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li></ul>`
      ).insertAfter('.merch__filter');
      // $('<div class="merch__card-special">UW Discount</div>').prependTo('div.merchItem');
    } else {
      $().insertAfter('.merch__filter');
      // `<a href="https://text.uwbookstore.com/MerchList?ID=28519">
      //         <img src="https://i.univbkstr.com/v3/img/pages/tech/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-fluid mobi-hide mb-2">
      //         <img src="https://i.univbkstr.com/v3/img/pages/tech/appleTech-sm.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-fluid dt-hide mb-2">
      //         </a>
      //         `
      // `<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28374" class="btn btn-primary">Dell Laptops</a></li></ul>`
    }
  }

  if (
    categoryTitle.toLowerCase().substring(0, 7) === 'macbook' ||
    categoryTitle.toLowerCase().substring(0, 11) === 'dell laptop' ||
    categoryTitle.toLowerCase().substring(0, 4) === 'ipad' ||
    categoryTitle.toLowerCase().substring(0, 6) === 'laptop'
  ) {
    $(
      '<div class="alert alert-info center"><p class="mb-0"><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p></div>'
    ).insertBefore('#merch__card');
  }

  productName.each(function () {
    const name = $(this).text();
    const prevSibling = $(this).prev();
    if (name.includes('^')) {
      $('<div class="merch__card-restock">Back in Stock!</div>').prependTo(
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
