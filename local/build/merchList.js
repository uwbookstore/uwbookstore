$(document).ready(function () {
  let categoryTitle = $('h1.page_header').text();
  const itemImage = $('.merchImage');
  const productName = $('p.merchTitle');

  $('ul.breadcrumb, .searchCatWrap, .sortCatWrap, .merchTop.Buttons, .pageHelp, h1.page_header, .bottomButtons').hide();
  // $(".pagination").parent().hide();

  if (categoryTitle.toLowerCase() === 'search all') {
    const searched = window.location.search.split('=');
    const searchTerm = searched[2].replace(/%20/g, ' ');

    // HANDLE NO SEARCH RESULTS RETURNED
    if (baseUrl === 'https://www.uwbookstore.com/' || baseUrl === 'https://www.uwalumnistore.com/') {
      if ($('.noListItems').length) {
        $('.noListItems').hide();
        $(`<div class="empty-results"><h1>Sorry, we couldn't find any products.</h1><p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p></div>`).insertAfter('.searchCatWrap');
      }
      console.log(`UW Book Store or UW Alumni Store`);
    } else {
      if ($('.noListItems').length) {
        $('.noListItems').hide();
        $(`<div class="empty-results"><h1>Sorry, we couldn't find any products.</h1><p>We were unable to find results for <strong>${searchTerm}</strong>. Please check your spelling or try searching for similar terms.</p></div><div class="text-center"><a class="btn btn-primary" href="https://text.uwbookstore.com/SelectTermDept">Search Textbooks</a></div>`).insertAfter('.searchCatWrap');
      }
      console.log(`Texbooks...`);
    }

    categoryTitle = 'Search Results For: ' + searchTerm;

    if (searchTerm.toLowerCase() === 'contact') {
      $('div#merch__filter, div.merch__card, div.merchResults').hide();
      $('<div id="page-loader" class="text-center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span></div>').insertBefore('div#merch__filter');
      window.location.replace('https://www.uwbookstore.com/Contact');
    } else if (window.location.href.toLowerCase().indexOf('red%20shirt') > -1 || window.location.href.indexOf('13th') > -1) {
      $('<div class="m-2 text-center">Looking for The Red Shirt&trade;, Fifteenth Edition? Find it here:<br><a href="https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/The-Red-Shirt-15th-Edition" class="btn btn-primary m-2">The Red Shirt&trade;</a></div>').prependTo('#contentSection');
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

  if (categoryTitle.toLowerCase().substring(0, 23) === 'dept of medical physics') {
    categoryTitle = 'Department of Medical Physics';
    $(document).prop('title', 'Department of Medical Physics');
  }

  if (categoryTitle.toLowerCase().substring(0, 22) === '20 celebration gowns-p') {
    categoryTitle = '2020 Celebration Gowns (Previously Rented)';
    $(document).prop('title', '2020 Celebration Gowns (Previously Rented)');
  }

  // $.each(mItem, function (i) {
  //     if ($(this).has("span.salePriceTitle").length) {
  //         $('<div class="merch__card-special">SALE!</div>').appendTo($(this));
  //     }
  // });

  $.each(itemImage, function () {
    if ($(this).attr('src') === '/images/notavail.gif') {
      $(this).attr('src', 'https://i.univbkstr.com/uwbookstore/img/no-image-sm.jpg').attr('data-src', 'holder.js/200x200?auto=yes&text=Image not available').attr('alt', 'Image not available');
    }
  });

  if (categoryTitle.toLowerCase() !== 'back to school promo') {
    $('.merchButtons').first().hide();
    $('.viewfiltersDiv,.filterSelections').hide();
    $('.merchButtons a').removeClass('btn-xs top5');
    $('.merchDetailWrapper').removeClass(' col-xs-12');
    $('.merchItem').removeClass('padding0 bottom10 col-md-3 col-sm-6 col-xs-12 merchListClear4 merchListClearTwo').addClass('merch__card-item');
    $('a.prevBackward,a.nextForward').removeClass('btn-primary').addClass('btn-secondary btn-rnd');
    $('a.prevBackward').html('<i class="fa fa-angle-left"></i><span class="visually-hidden">Previous Page</span>');
    $('a.nextForward').html('<i class="fa fa-angle-right"></i><span class="visually-hidden">Next Page</span>');
    $('.merchResultsText, .merchResultsSelect, .merchResultsPer').removeClass('displayib');
    $('<div id="merch__filter" class="merch__filter"><h2 class="heading__list">' + categoryTitle + '</h2></div><div id="merch__card" class="group"></div><div id="pagination-btm" class="text-center"></div>').insertAfter('.filterColumn');
    const pageItems = $('.pagination li');

    if (pageItems.length === 1) {
      $('ul.pagination, select.merchResultsSelect').hide();
    }
    $('ul.pagination').appendTo('#pagination-btm');
    $('select.merchResultsSelect').removeClass('wauto displayib right5 bottom10').addClass('mx-auto').appendTo('#pagination-btm');

    $('<div id="sort-by" class="merch__filter--item"><label style="display: block;">Sort By</label></div><div class="merch__filter--item"><a class="btn btn-primary" href="https://www.uwbookstore.com/ShoppingCart">Shopping Cart</a></div>').appendTo('#merch__filter');
    $('select.merchSortBy').removeClass('wauto bottom10').appendTo('#sort-by');

    $('.merchColumn').addClass('grid merch__card').appendTo('#merch__card');

    $('.logoOption').removeClass('btn-default').addClass('btn-primary');
  } else {
    $('p.merchPrice, .merchResults').hide();
    $('.viewfiltersDiv,.filterSelections').hide();
    $('.merchButtons a').removeClass('btn-xs top5');
    $('.merchDetailWrapper').removeClass(' col-xs-12');
    $('.merchItem').removeClass('padding0 bottom10 col-md-3 col-sm-6 col-xs-12 merchListClear4 merchListClearTwo').addClass('merch__card-item');
    $(`    <div class="text-center"> <img class="img-responsive mx-auto mb-4 mobi-hide"
        src="https://i.univbkstr.com/uwbookstore/img/apple/backToSchool.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
      <img class="img-responsive mx-auto mb-4 dt-hide"
        src="https://i.univbkstr.com/uwbookstore/img/apple/backToSchool-sm.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
    </div>
    <div id="merch__card" class="group"></div>
    <div class="row">
      <div class="col-md-6">
        <div id="promo-alert" class="alert alert-info">
          <strong>This Back-to-School when you buy a qualifying Mac you can get free AirPods 3rd-Gen with Lightning
            Case, in
            addition to our everyday educational discounts!*</strong>
          <ol>
            <li>Add a qualifying Mac to your cart.</li>
            <li>Add eligible AirPods to your cart.<br>
              AirPods 3rd-Gen with Lightning Case are free after $169 promotional savings.<br>
              Or upgrade to AirPods 3rd-Gen with MagSafe Wireless Charging Case for $10 plus tax after $169 promotional
              savings.<br>
              Or upgrade to AirPods Pro 2nd-Gen with MagSafe Wireless Charging Case for $80 plus tax after $169
              promotional
              savings.</li>
            <li>AirPods discount will automatically be applied to eligible AirPods at end of checkout with qualifying
              Mac
              purchase.</li>
            <li>Complete your purchase by logging in or creating an account and supplying your payment info.</li>
          </ol><br><br>
          <div class="fineprint">*Qualified Purchasers receive Promotion Savings when they purchase an eligible Mac with
            eligible AirPods or eligible iPad with eligible Apple Pencil at a Qualifying Location. Only one eligible
            Promotion
            Product per eligible Mac or eligible iPad per Qualified Purchaser. Offer subject to availability. While
            supplies
            last. Additional restrictions may apply. View full <a
              href="https://edseminarsonline.s3-us-west-2.amazonaws.com/usfm_fy23/BTS/3%20-%20BTS%20FY23%20T%26Cs%20US%20-%205.30.pdf"
              style="text-decoration: underline;">terms
              and conditions</a> of offer.
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div id="promo-alert" class="alert alert-info">
          <strong>This Back-to-School when you buy a qualifying iPad Air or Pro you can get a free Apple Pencil 2nd-Gen,
            in addition to
            our everyday educational discounts!*</strong>
          <ol>
            <li>Add a qualifying iPad to your cart.</li>
            <li>Add Apple Pencil 2nd-Gen to your cart.</li>
            <li>Apple Pencil 2nd-Gen will automatically be discounted to free at end of checkout with qualifying iPad
              purchase.</li>
            <li>Complete your purchase by logging in or creating an account and supplying your payment info.</li>
          </ol><br><br>
          <div class="fineprint">*Qualified Purchasers receive Promotion Savings when they purchase an eligible iPad
            with Apple Pencil 2nd-Gen at a
            Qualifying Location. Only one Eligible Apple Pencil Promotion Product per Eligible iPad per Qualified
            Purchaser. Offer
            subject to availability. While supplies last. Additional restrictions apply. For <a
              href="https://edseminarsonline.s3-us-west-2.amazonaws.com/usfm_fy23/BTS/3%20-%20BTS%20FY23%20T%26Cs%20US%20-%205.30.pdf"
              style="text-decoration: underline;">full terms and conditions</a> of offer, see
            here.
          </div>
        </div>
      </div>
    </div>`).insertAfter('.filterColumn');
    const pageItems = $('.pagination li');

    if (pageItems.length === 1) {
      $('ul.pagination, select.merchResultsSelect').hide();
    }
    $('.merchColumn').addClass('grid merch__card').appendTo('#merch__card');
    // $(
    //     '<div class="text-center"><a href="' +
    //         baseUrl +
    //         'shoppingcart" class="btn btn-primary mt-2">View Cart</a></div>'
    // ).insertAfter("#promo-alert");
  }

  if (window.location.href.search(/search-red/) !== -1) {
    $('<div class="m-2 text-center">Looking for previous years? Find them here:<br><a href="https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/The-Red-Shirt" class="btn btn-primary m-2">The Red Shirt&trade;</a></div>').insertAfter('#merch__card');
  }

  if (categoryTitle.toLowerCase().substring(0, 12) === 'scandinavian') {
    $('<div class="alert alert-warning"><p style="text-align: center; margin: 0; font-size: 20px;"><em>Note</em> - All books sold in packs of five &mdash; price listed is for five books.</p></div>').insertAfter('.merch__filter');
  }

  if (categoryTitle.toLowerCase().substring(0, 6) === 'am fam') {
    $('<img src="https://i.univbkstr.com/images/banners/AmFamGolf.png" class="img-responsive img__center" alt="AmFam Championship. Official Merchandise Partner of the American Family Insurance Championship.">').insertBefore('.merch__filter');
  }

  // if (categoryTitle.toLowerCase().substring(0, 15) === 'cap & gown pack') {
  //   $(
  //     `<div class="alert alert-danger text-center">Online rentals are now closed. You may rent in store or over the telephone (1-800-993-2665 ext.5907 - add $10.00 for service fee).</div>`
  //   ).insertAfter('.merch__filter');
  // }

  if (categoryTitle.toLowerCase().substring(0, 6) === 'laptop') {
    if (window.location.host === 'www.uwbookstore.com') {
      $(`<img class="img-responsive mx-auto mb-4 mobi-hide"
        src="https://i.univbkstr.com/uwbookstore/img/apple/backToSchool.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
      <img class="img-responsive mx-auto mb-4 dt-hide"
        src="https://i.univbkstr.com/uwbookstore/img/apple/backToSchool-sm.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li></ul>`).insertAfter('.merch__filter');
    } else {
      $(
      // <a href="https://text.uwbookstore.com/MerchList?ID=28519">
      //         <img src="https://i.univbkstr.com/uwbookstore/img/tech/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive mobi-hide mb-2">
      //         <img src="https://i.univbkstr.com/uwbookstore/img/home/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive dt-hide mb-2">
      //         </a>
      `<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28374" class="btn btn-primary">Dell Laptops</a></li></ul>`).insertAfter('.merch__filter');
    }
  }

  if (categoryTitle.toLowerCase().substring(0, 10) === 'julia gash') {
    $('<img alt="Julia Gash" src="https://i.univbkstr.com/global/img/banners/JuliaGash.png" class="img-responsive">').insertBefore('.merch__filter');
  }

  if (categoryTitle.toLowerCase().substring(0, 19) === 'maxwell street days') {
    $('<img alt="Maxwell Street Days" src="https://i.univbkstr.com/images/banners/maxwellStreetDays-sm.jpg" class="img-responsive dt-hide"><img alt="Maxwell Street Days" src="https://i.univbkstr.com/images/banners/maxwellStreetDays.jpg" class="img-responsive mobi-hide">').insertBefore('.merch__filter');
  }

  if (categoryTitle.toLowerCase().substring(0, 16) === 'dell laptop') {
    if (window.location.host === 'www.uwbookstore.com') {
      // $(
      //     '<a href="https://i.univbkstr.com/downloads/4746_Dell_BTS_POP_Kit_2022_RETAIL_POSTCARD_EDITABLE.pdf" target="_blank"><img src="https://i.univbkstr.com/global/img/banners/Dell-Rebate-2022.jpg" class="mobi-hide img-responsive img__center" alt="Student Rebate"><img src="https://i.univbkstr.com/global/img/banners/Dell-Rebate-2022-sm.jpg" class="dt-hide img-responsive img__center" alt="Student Rebate"><div class="visually-hidden">STUDENT OFFER. $100 Rebate - WITH THE PURCHASE OF A DELL PC $499+. Offer valid 05/01/2022 - 10/31/2022</div></a>'
      // ).insertBefore(".merch__filter");
      $('<ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook" class="btn btn-primary">MacBooks</a></li></ul>').insertAfter('.merch__filter');
    } else {
      // $(
      //     '<a href="https://i.univbkstr.com/downloads/4746_Dell_BTS_POP_Kit_2022_RETAIL_POSTCARD_EDITABLE.pdf" target="_blank"><img src="https://i.univbkstr.com/global/img/banners/Dell-Rebate-2022.jpg" class="mobi-hide img-responsive img__center" alt="Student Rebate"><img src="https://i.univbkstr.com/global/img/banners/Dell-Rebate-2022-sm.jpg" class="dt-hide img-responsive img__center" alt="Student Rebate"><div class="visually-hidden">STUDENT OFFER. $100 Rebate - OF A DELL PC $499+ OF A DELL PC $499+. Offer valid 05/01/2022 - 10/31/2022</div></a>'
      // ).insertBefore(".merch__filter");
      $('<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28462" class="btn btn-primary">All Laptops</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li></ul>').insertAfter('.merch__filter');
    }
  }

  if (categoryTitle.toLowerCase().substring(0, 7) === 'macbook') {
    if (window.location.host === 'www.uwbookstore.com') {
      $(`<img class="img-responsive mx-auto mb-4 mobi-hide"
        src="https://i.univbkstr.com/uwbookstore/img/apple/backToSchool.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
      <img class="img-responsive mx-auto mb-4 dt-hide"
        src="https://i.univbkstr.com/uwbookstore/img/apple/backToSchool-sm.jpg"
        alt="Save on Mac or iPad, get AirPods. Save on an iPad for college. Get Apple Pencil." />
        <ul class="page-nav"><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Laptops" class="btn btn-primary">All Laptops</a></li><li><a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Dell-Laptop" class="btn btn-primary">Dell Laptops</a></li></ul>`).insertAfter('.merch__filter');
      // $('<div class="merch__card-special">UW Discount</div>').prependTo('div.merchItem');;
    } else {
      $(
      // `<a href="https://text.uwbookstore.com/MerchList?ID=28519">
      //         <img src="https://i.univbkstr.com/uwbookstore/img/tech/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive mobi-hide mb-2">
      //         <img src="https://i.univbkstr.com/uwbookstore/img/home/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive dt-hide mb-2">
      //         </a>
      //         `
      `<ul class="page-nav"><li><a href="https://text.uwbookstore.com/MerchList?ID=28367" class="btn btn-primary">MacBooks</a></li><li><a href="https://text.uwbookstore.com/MerchList?ID=28374" class="btn btn-primary">Dell Laptops</a></li></ul>`).insertAfter('.merch__filter');
    }
  }

  if (categoryTitle.toLowerCase().substring(0, 11) === 'dell laptop') {
    if (window.location.host === 'www.uwbookstore.com') {
      $(`<a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook">
                <img src="https://i.univbkstr.com/uwbookstore/img/tech/dellBanner.png" alt="Dell Education Rebate Offers" class="img-responsive mobi-hide mb-2">
                <img src="https://i.univbkstr.com/uwbookstore/img/tech/dellBanner-sm.png" alt="Dell Education Rebate Offers" class="img-responsive dt-hide mb-2">
                </a>`).insertAfter('.merch__filter');
      // $('<div class="merch__card-special">UW Discount</div>').prependTo('div.merchItem');;
    } else {
      $(`<a href="https://text.uwbookstore.com/MerchList?ID=28519">
                <img src="https://i.univbkstr.com/uwbookstore/img/tech/dellBanner.png" alt="Dell Education Rebate Offers" class="img-responsive mobi-hide mb-2">
                <img src="https://i.univbkstr.com/uwbookstore/img/tech/dellBanner-sm.png" alt="Dell Education Rebate Offers" class="img-responsive dt-hide mb-2">
                </a>`).insertAfter('.merch__filter');
    }
  }

  // if (categoryTitle.toLowerCase().substring(0, 5) === 'ipads') {
  //   if (window.location.host === 'www.uwbookstore.com') {
  //     $(
  //       `<a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/MacBook">
  //               <img src="https://i.univbkstr.com/uwbookstore/img/tech/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive mobi-hide mb-2">
  //               <img src="https://i.univbkstr.com/uwbookstore/img/home/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive dt-hide mb-2">
  //               </a>`
  //     ).insertAfter('.merch__filter');
  //     // $('<div class="merch__card-special">UW Discount</div>').prependTo('div.merchItem');;
  //   } else {
  //     $(
  //       `<a href="https://text.uwbookstore.com/MerchList?ID=28519">
  //               <img src="https://i.univbkstr.com/uwbookstore/img/tech/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive mobi-hide mb-2">
  //               <img src="https://i.univbkstr.com/uwbookstore/img/home/appleTech.jpg" alt="Buy a Mac or iPad for college. Get AirPods." class="img-responsive dt-hide mb-2">
  //               </a>`
  //     ).insertAfter('.merch__filter');
  //   }
  // }

  if (categoryTitle.toLowerCase().substring(0, 9) === 'higher ed') {
    $('<img class="img-responsive mobi-hide mx-auto mb-4" src="https://i.univbkstr.com/global/img/banners/higherEducation.jpg" alt="Free Tote and Cheet Sheet&reg; with any $35+ Purchase. Available for a limited time. One per purchase. While supplies last." /><img class="img-responsive dt-hide mx-auto" src="https://i.univbkstr.com/global/img/banners/higherEducation-sm.jpg" alt="Free Tote and Cheet Sheet&reg; with any $35+ Purchase. Available for a limited time. One per purchase. While supplies last." />').insertBefore('.merch__filter');
  }

  if (categoryTitle.toLowerCase().substring(0, 7) === 'macbook' || categoryTitle.toLowerCase().substring(0, 11) === 'dell laptop' || categoryTitle.toLowerCase().substring(0, 4) === 'ipad' || categoryTitle.toLowerCase().substring(0, 6) === 'laptop') {
    $('<div class="alert alert-info center"><p><strong>The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</strong></p></div>').insertBefore('#merch__card');
  }

  // if (categoryTitle.toLowerCase().substring(0, 19) === "cap & gown packages") {
  //     $(
  //         '<div class="text-center alert alert-warning"><p><strong>To avoid long lines, please promptly pick up your order once you receive notice that your order is ready.<br>Orders not picked up at the Book Store may incur a transit fee to the ceremony.</strong></p></div>'
  //     ).insertBefore("#merch__card");
  // }

  // if (categoryTitle.toLowerCase().substring(0, 12) === "new arrivals") {
  //     $('<div class="merch__card-new hide">Restock!</div>').prependTo("div.merchItem");
  // }

  // if (categoryTitle.toLowerCase().substring(0, 12) === "new arrivals") {
  //     $('<div class="merch__card-restock hide">Restock!</div>').prependTo("div.merchItem");
  // }

  productName.each(function () {
    const name = $(this).text();
    if (name.includes('^')) {
      $('<div class="merch__card-restock">Back in Stock!</div>').prependTo($(this).parent().parent().parent());
    }
  });

  // if ($("span.gc-promo").length > 0) {
  //     console.log('Eligible MacBook')
  // }
});