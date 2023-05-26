$(document).ready(function () {
  $('#contentSection ul.breadcrumb, a.pageHelp, h1.page_header').hide();

  $(
    '<div id="merch-main" class="merch"><div class="grid merch__detail"><div id="merch-imgs" class="merch__detail-images"></div><div id="merch-info" class="merch__detail-info"></div></div></div>'
  ).prependTo('div#ContainDiv');

  const prodName = $('h2.merchTitle').text();
  const prodSku = $('p.merchItem span').text();
  const description = $('div.merchDesc').html();
  const itemDisclaimer = $('input.merchDisclaimer');
  const noAddCart = $('div.hiddenCartText');
  const imgArray = $('a.merchThumbnail').length;
  const detail = $('a.merchThumbnail img');

  // Check to see if there is more than one image
  if (imgArray > 0) {
    $(
      '<div class="flexslider"><ul class="slides merch__detail-slides"></ul></div>'
    ).appendTo('div#merch-imgs');
    for (let i = 0; i < imgArray; i += 1) {
      $(
        '<li id="thumbnail_' +
          i +
          '"><img id="fullsize_' +
          i +
          '" alt="' +
          prodName +
          ' image" class="merch__detail-img lazyload"></li>'
      ).appendTo('ul.slides');
      $.each(detail, function (j) {
        $('li#thumbnail_' + j).attr('data-thumb', $(this).attr('data-full'));
        $('li#thumbnail_' + j).attr('data-thumb-alt', $(this).attr('alt'));
        $('img#fullsize_' + j).attr('data-src', $(this).attr('data-high'));
      });
    }
  } else {
    // Only one image
    if ($('img.merchDetailImage').attr('src') === '/images/notavail.gif') {
      // No image available
      $(
        '<img src="https://i.univbkstr.com/uwbookstore/img/no-image.jpg" data-src="holder.js/600x600?auto=yes&text=Image not available" class="merch__detail-img" alt="Image not available">'
      ).appendTo('div#merch-imgs');
    } else {
      $(
        '<img src="' +
          $('img.merchDetailImage').attr('data-high') +
          '" alt="' +
          prodName +
          '" class="merch__detail-img">'
      ).appendTo('div#merch-imgs');
    }
  } // END of imgArray if

  // Start Product Details layout
  $('<h2 class="merch__detail-title">' + prodName + '</h2>').appendTo(
    'div#merch-info'
  );

  // Price blockk
  const prodPrice = $('span.merchPriceCurrent').text();
  let salePrice = $('span.merchPriceCurrent').text();
  $('<div id="priceBlock" class="merch__detail-price"></div>').appendTo(
    'div#merch-info'
  );

  // Check for sale price. If item is on sale
  // figure percent off and add savings text.
  // Otherwise, add the regular price
  if ($('p.salePrice').length > 0) {
    const origPrice = $('p.merchRegPrice').html().split('$').pop();
    salePrice = salePrice.replace(/\$/g, '');
    // let pctOff = origPrice - salePrice;
    // pctOff /= origPrice;
    // pctOff *= 100;
    // pctOff = Math.round(pctOff);

    $('<span class="original">$' + origPrice + '</span>').appendTo(
      'div#priceBlock'
    );
    // $('<span class="sale">$' + salePrice + ' - ' + pctOff + '% Off!</span>').appendTo('div#priceBlock');
    $('<span class="sale">$' + salePrice + '</span>').appendTo(
      'div#priceBlock'
    );
  } else {
    $('<span>' + prodPrice + '</span>').appendTo('div#priceBlock');
  } // END of price-block if
  if (
    prodName.substring(0, 7) === 'MacBook' ||
    prodName.substring(0, 13) === 'Apple MacBook' ||
    prodName.substring(0, 10) === 'Apple iPad' ||
    prodName.substring(0, 4) === 'Dell'
  ) {
    $(
      '<div class="alert alert-info">The price displayed is our special educational price available to UW Students, Faculty, Staff, Alumni, &amp;&nbsp;UW&nbsp;Health Employees.</div>'
    ).appendTo('div#merch-info');
  }

  $(
    '<div id="description-block" class="merch__detail-description"><h3 class="merch__detail-title-small">The Details</h3>'
  ).appendTo('div#merch-info');

  $(
    '<div class="merch__detail-description-open ">' + description + '</div>'
  ).appendTo('div#description-block');
  $(noAddCart)
    .addClass('alert alert-warning text-center m5')
    .appendTo('#description-block');
  $(
    '<div class="merch__detail-sku"><strong>Item:</strong> ' +
      prodSku +
      '</div>'
  ).appendTo('div#description-block');
  $('p.gmPromo').appendTo('div#description-block');

  if (itemDisclaimer.length > 0 && $('div#kyleCavan').length > 0) {
    $(
      '<div id="item-disclaimer" class="alert alert-warning"><label></label></div>'
    ).appendTo('div#merch-info');
    $(itemDisclaimer).next('.normal').appendTo('#item-disclaimer label');
    $(itemDisclaimer).removeClass('top4').prependTo('#item-disclaimer label');
    $('.normal').html(
      '<strong>PLEASE READ BEFORE PURCHASE!</strong> Shipping time takes 10-15 business days (M-F).  This item ships directly from the manufacturer and is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for store pick-up, promotional discounts, expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms.</strong>'
    );
    $('div#kyleCavan').hide();
    $('p.merchDisclaimerError').insertAfter('#item-disclaimer');
  } else if (itemDisclaimer.length > 0 && $('div#landsEnd').length > 0) {
    $(
      '<div id="item-disclaimer" class="alert alert-warning"><label></label></div>'
    ).appendTo('div#merch-info');
    $(itemDisclaimer).next('.normal').appendTo('#item-disclaimer label');
    $(itemDisclaimer).removeClass('top4').prependTo('#item-disclaimer label');
    $('.normal').html(
      '<strong>PLEASE READ BEFORE PURCHASE!</strong> This item ships directly from the manufacturer and is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for store pick-up, promotional discounts, expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms.</strong>'
    );
    $('div#landsEnd').hide();
    $('p.merchDisclaimerError').insertAfter('#item-disclaimer');
  } else if (itemDisclaimer.length > 0 && $('div#landsEndReally').length > 0) {
    $(
      '<div id="item-disclaimer" class="alert alert-warning"><label></label></div>'
    ).appendTo('div#merch-info');
    $(itemDisclaimer).next('.normal').appendTo('#item-disclaimer label');
    $(itemDisclaimer).removeClass('top4').prependTo('#item-disclaimer label');
    $('.normal').html(
      `<strong>PLEASE READ BEFORE PURCHASE! — Lands' End may take 9-14 business days (M-F) to ship. Store pick-up orders will incur a $7.50 drop ship charge.</strong>This custom item is <strong>NOT ELIGIBLE</strong> for returns or exchanges and does not qualify for promotional discounts, expedited or free shipping. <strong>By clicking this box, you are agreeing to these terms.</strong>`
    );
    $('div#landsEnd').hide();
    $('p.merchDisclaimerError').insertAfter('#item-disclaimer');
  } else if (itemDisclaimer.length > 0) {
    $(
      '<div id="item-disclaimer" class="alert alert-warning"><label></label></div>'
    ).appendTo('div#merch-info');
    $(itemDisclaimer).next('.normal').appendTo('#item-disclaimer label');
    $(itemDisclaimer).removeClass('top4').prependTo('#item-disclaimer label');
    // $("<em>*</em>").prependTo("#item-disclaimer span.normal");
    $('p.merchDisclaimerError').insertAfter('#item-disclaimer');
  }

  // Change the dropdown select to buttons,
  // and hide the select element.
  const select = $('select.merchDropdown option');
  const logos = $('.lcsLogoWrapper');
  const sizes = $('.lcsSizeWrapper');
  const merchLogoTitle = $('.merchLogoTitle');
  const merchSizeTitle = $('.merchSizeTitle');

  function changeSizes(elem) {
    $.each(elem, function () {
      if ($(this).text().toLowerCase() === 'small/medium') {
        $(this).text('S/M');
      } else if ($(this).text().toLowerCase() === 'medium/large') {
        $(this).text('M/L');
      } else if (
        $(this).text().toLowerCase() === 'large/x-large' ||
        $(this).text().toLowerCase() === 'large/xlarge'
      ) {
        $(this).text('L/XL');
      } else if ($(this).text().toLowerCase() === 'xx-small') {
        $(this).text('2XS');
      } else if ($(this).text().toLowerCase() === 'x-small') {
        $(this).text('XS');
        if ($('span.xsmall').length) {
          $(this).parent().addClass('disabled').attr('disabled', 'disabled');
        }
      } else if ($(this).text().toLowerCase() === 'small') {
        $(this).text('S');
        if ($('span.sml').length) {
          $(this).parent().addClass('disabled').attr('disabled', 'disabled');
        }
      } else if ($(this).text().toLowerCase() === 'medium') {
        $(this).text('M');
        if ($('span.medium').length) {
          $(this).parent().addClass('disabled').attr('disabled', 'disabled');
        }
      } else if ($(this).text().toLowerCase() === 'large') {
        $(this).text('L');
        if ($('span.large').length) {
          $(this).parent().addClass('disabled').attr('disabled', 'disabled');
        }
      } else if ($(this).text().toLowerCase() === 'x-large') {
        $(this).text('XL');
        if ($('span.xlg').length) {
          $(this).parent().addClass('disabled').attr('disabled', 'disabled');
        }
      } else if (
        $(this).text().toLowerCase() === 'xx-large' ||
        $(this).text().toLowerCase() === '2x-large'
      ) {
        $(this).text('2XL');
        if ($('span.xxlg').length) {
          $(this).parent().addClass('disabled').attr('disabled', 'disabled');
        }
      } else if (
        $(this).text().toLowerCase() === 'xxx-large' ||
        $(this).text().toLowerCase() === '3x-large'
      ) {
        $(this).text('3XL');
        if ($('span.xxxlg').length) {
          $(this).parent().addClass('disabled').attr('disabled', 'disabled');
        }
      } else if (
        $(this).text().toLowerCase() === 'XXXX-LARGE' ||
        $(this).text().toLowerCase() === '4X'
      ) {
        $(this).text('4XL');
      } else if ($(this).text().toLowerCase() === '5x') {
        $(this).text('5XL');
      } else if ($(this).text().toLowerCase() === '6x') {
        $(this).text('6XL');
      } else if ($(this).text().toLowerCase() === 'newborn 3 month') {
        $(this).text('NB/3M');
      } else if ($(this).text().toLowerCase() === '3 month') {
        $(this).text('3M');
      } else if ($(this).text().toLowerCase() === '6 month') {
        $(this).text('6M');
      } else if ($(this).text().toLowerCase() === '12 month') {
        $(this).text('12M');
      } else if ($(this).text().toLowerCase() === '18 month') {
        $(this).text('18M');
      } else if ($(this).text().toLowerCase() === '24 month') {
        $(this).text('24M');
      } else if ($(this).text().toLowerCase() === '2 toddler') {
        $(this).text('2T');
      } else if ($(this).text().toLowerCase() === '3 toddler') {
        $(this).text('3T');
      } else if ($(this).text().toLowerCase() === '4 toddler') {
        $(this).text('4T');
      } else if ($(this).text().toLowerCase() === '5 toddler') {
        $(this).text('5T');
      } else if ($(this).text().toLowerCase() === '5/6 toddler') {
        $(this).text('5/6T');
      } else if ($(this).text().toLowerCase() === '6 toddler') {
        $(this).text('6T');
      } else if ($(this).text().toLowerCase() === '6 child') {
        $(this).text('6C');
      } else if ($(this).text().toLowerCase() === '7 child') {
        $(this).text('7C');
      } else if ($(this).text().toLowerCase() === '6 x 8 / 6 x 8') {
        $(this).parent().addClass('btn-w-auto');
      } else if ($(this).text().toLowerCase() === '6 x 8 / 8 x 10') {
        $(this).parent().addClass('btn-w-auto');
      } else if ($(this).text().toLowerCase() === '8 x 10 / 8 x 10') {
        $(this).parent().addClass('btn-w-auto');
      } else if ($(this).text().toLowerCase() === 'toddler') {
        $(this).parent().addClass('btn-w-auto');
      } else {
        $(this).parent().addClass('btn-w-auto');
      }
    });
  }

  if (sizes.length > 0) {
    const sizeArray = sizes.html();
    $(
      '<div id="sizes" class="merch__detail-size"><div class="grid merch__detail-size-picker">' +
        sizeArray +
        '</div></div>'
    ).appendTo('div#merch-info');
    $('<label class="merch__detail-size-label">Size |</label>').prependTo(
      'div#sizes'
    );
  } else if (
    logos.length === 0 &&
    sizes.length === 0 &&
    $('span.selectedSize').length
  ) {
    const singleItem = $('span.selectedSize').text().toLowerCase();

    if (singleItem === 'xxx-large') {
      $(
        '<div id="sizes" class="merch__detail-size"><div class="grid merch__detail-size-picker"><span class="btn btn-default typeSelected">3XL</span></div></div>'
      ).appendTo('div#merch-info');
    } else if (singleItem === 'newborn 3 month') {
      $(
        '<div id="sizes" class="merch__detail-size"><div class="grid merch__detail-size-picker"><span class="btn btn-default typeSelected">NB/3M</span></div></div>'
      ).appendTo('div#merch-info');
    } else {
      $(
        '<div id="sizes" class="merch__detail-size"><div class="grid merch__detail-size-picker"><span class="btn btn-default typeSelected">' +
          singleItem +
          '</span></div></div>'
      ).appendTo('div#merch-info');
    }

    $('<label class="merch__detail-size-label">Size |</label>').prependTo(
      'div#sizes'
    );
  } else if (logos.length > 0) {
    const logoArray = logos.html();
    $(
      '<div id="sizes" class="merch__detail-size"><div class="grid merch__detail-size-picker">' +
        logoArray +
        '</div></div>'
    ).appendTo('div#merch-info');
    $('<label class="merch__detail-size-label">Size |</label>').prependTo(
      'div#sizes'
    );
  }

  const sizeOptions = $('button.typeCodeOption span.sizeName');
  const logoOptions = $('button.typeCodeOption span.logoName');

  changeSizes(sizeOptions);
  changeSizes(logoOptions);

  if (logos.length > 0 && sizes.length > 0) {
    logos.hide();
  }

  if (select.length > 0) {
    // Select dropdown...

    $('<div id="sizes" class="merch__detail-size "></div>').appendTo(
      'div#merch-info'
    );
    $('<label class="merch__detail-size-label">Amount:</label>').appendTo(
      'div#sizes'
    );
    $('select.merchDropdown').appendTo('div#sizes').addClass('form-control');
    $('<div class="grid merch__detail-size-picker"></div>').appendTo(
      'div#sizes'
    );

    $.each(select, function (i) {
      $(
        '<div id="size_' + i + '" data-name="' + $(this).text() + '"></div>'
      ).appendTo('.grid.merch__detail-size-picker');

      $('<input type="radio" id="size-option_' + i + '" name="r">')
        .attr('value', $(this).val())
        .attr('checked', i === 0)
        .click(function () {
          $('select.merchDropdown').val($(this).val());
          $('.addGiftRegButton').attr('data-dropdownValue', $(this).val());
          $('.addSingleReg').attr('data-dropdownValue', $(this).val());
        })
        .appendTo('#size_' + i);

      if (
        $(this).text() === '$5 ($5.00)' ||
        $(this).text() === '$5.00 ($5.00)'
      ) {
        $(this).text('$5');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if (
        $(this).text() === '$10 ($10.00)' ||
        $(this).text() === '$10.00 ($10.00)'
      ) {
        $(this).text('$10');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if (
        $(this).text() === '$20 ($20.00)' ||
        $(this).text() === '$20.00 ($20.00)'
      ) {
        $(this).text('$20');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if (
        $(this).text() === '$25 ($25.00)' ||
        $(this).text() === '$25.00 ($25.00)'
      ) {
        $(this).text('$25');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if ($(this).text() === '$30 ($30.00)') {
        $(this).text('$30');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if ($(this).text() === '$40 ($40.00)') {
        $(this).text('$40');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if (
        $(this).text() === '$50 ($50.00)' ||
        $(this).text() === '$50.00 ($50.00)'
      ) {
        $(this).text('$50');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if ($(this).text() === '$60 ($60.00)') {
        $(this).text('$60');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if ($(this).text() === '$70 ($70.00)') {
        $(this).text('$70');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if (
        $(this).text() === '$75 ($75.00)' ||
        $(this).text() === '$75.00 ($75.00)'
      ) {
        $(this).text('$75');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if ($(this).text() === '$80 ($80.00)') {
        $(this).text('$80');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if ($(this).text() === '$90 ($90.00)') {
        $(this).text('$90');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else if (
        $(this).text() === '$100 ($100.00)' ||
        $(this).text() === '$100.00 ($100.00)'
      ) {
        $(this).text('$100');
        $('<label for="size-option_' + i + '">' + $(this).text() + '</label>')
          .appendTo('#size_' + i)
          .parent()
          .addClass('picker');
      } else {
        $(
          '<label for="size-option_' + i + '">' + $(this).text() + '</label>'
        ).appendTo('#size_' + i);
      }

      if ($('#size_0').attr('data-name') === 'Please Select') {
        $('#size_0').hide();
      }
    });

    $('select.merchDropdown').hide();
    $('select.merchDropdown').appendTo('div#sizes');
  }

  $(
    'p.merchDisclaimerError, p.merchSelectError, p.addGiftErrorLCS, p.addGiftError'
  ).prependTo('div#sizes');

  // Add size charts
  if (logos.length > 0 && prodName.substring(0, 13) === 'The Red Shirt') {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/redShirt/" class="merch__detail-size-link gtmSizeTrack" title="The Red Shirt&trade; Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 8) === 'Champion'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/champion/" class="merch__detail-size-link gtmSizeTrack" title="Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 9) === 'Game Bibs'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/gameBibs/" class="merch__detail-size-link gtmSizeTrack" title="Game Bibs Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 8) === 'Columbia'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/columbia/" class="merch__detail-size-link gtmSizeTrack" title="Columbia Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 12) === 'Under Armour'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/ua/" class="merch__detail-size-link gtmSizeTrack" title="Under Armour Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 12) === 'Peter Millar'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/peterMillar/" class="merch__detail-size-link gtmSizeTrack" title="Peter Millar Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 7) === 'Blue 84'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/blue84/" class="merch__detail-size-link gtmSizeTrack" title="Blue 84 Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 13) === 'For Bare Feet'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/fbf/" class="merch__detail-size-link gtmSizeTrack" title="For Bare Feet Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 12) === 'College Kids'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/cllgKids/" class="merch__detail-size-link gtmSizeTrack" title="College Kids Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 13) === '&#39;47 Brand'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/47Brand/" class="merch__detail-size-link gtmSizeTrack" title="&#39;47 Brand Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 8) === '47 Brand'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/47Brand/" class="merch__detail-size-link gtmSizeTrack" title="&#39;47 Brand Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 9) === "'47 Brand"
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/47Brand/" class="merch__detail-size-link gtmSizeTrack" title="&#39;47 Brand Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 8) === 'JanSport'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/jansport/chart.html" class="merch__detail-size-link gtmSizeTrack" title="JanSport Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 13) === 'All Star Dogs'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/allStarDog/" class="merch__detail-size-link gtmSizeTrack" title="All Star Dogs Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 10) === 'Boxercraft'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/boxercraft/" class="merch__detail-size-link gtmSizeTrack" title="Boxercraft Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 10) === "Lands' End"
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/landsEnd/" class="merch__detail-size-link gtmSizeTrack" title="Lands\' End Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 6) === 'League'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/league/" class="merch__detail-size-link gtmSizeTrack" title="League Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 7) === 'Vantage'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/vantage" class="merch__detail-size-link gtmSizeTrack" title="Vantage Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (
    (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) &&
    prodName.substring(0, 11) === 'Alternative'
  ) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/alternativeApparel" class="merch__detail-size-link gtmSizeTrack" title="Alternative Apparel Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  } else if (merchLogoTitle.length > 0 || merchSizeTitle.length > 0) {
    $(
      '<a href="https://i.univbkstr.com/sizeChart/" class="merch__detail-size-link gtmSizeTrack" title="General Size Guide">Size Guide</a>'
    ).insertAfter('.merch__detail-size-label');
  }

  // Append Quantity & Add to Cart button
  const qty = $('input#merchQTY');
  $('<div class="grid merch__detail-add"></div>').appendTo('div#merch-info');
  $(
    '<div class="merch__detail-qty"><label for="merchQTY">Quantity: </label></div>'
  ).appendTo('.merch__detail-add');
  $(qty).appendTo('.merch__detail-qty');
  $('<div class="merch__detail-add-btn"></div>').appendTo('.merch__detail-add');
  $('a.addToCart.btn.btn-primary').appendTo('.merch__detail-add-btn');
  $('a.addToCartTypes.btn.btn-primary').appendTo('.merch__detail-add-btn');

  $('.addToCartTypes').click(function () {
    $('#ItemCount').effect('bounce', { times: 6 }, 1000);
    $('html, body').delay(800).animate({ scrollTop: 0 }, 750);
  });

  $('p.addedToCart').appendTo('.merch__detail-add-btn');
  // $(".backCart").hide();

  if ($('#tOs').length > 0) {
    $('#tOs').insertBefore('div.merch__detail-add');
  }

  if ($('#sold-out').length > 0) {
    $('#sold-out').insertBefore('div.merch__detail-add');
  }

  $('p.addedToCart').appendTo('.merch__detail-add-btn');

  $('<div class="regLink"></div>').insertAfter('.merch__detail-add');

  $(
    '<h2 class="heading__line-center" id="tabs-header"><span>Additional Information</span></h2><div class="tabs"><ul class="tabs__nav"><li class="tabs__item"><a href="#returns" class="tabs__link"><i class="fa fa-exchange" aria-hidden="true"></i> Returns &amp; Exchanges</li><li class="tabs__item"><a href="#shipping" class="tabs__link"><i class="fa fa-truck" aria-hidden="true"></i> Shipping &amp; Handling</li></ul></div>'
  ).insertAfter('#merch-main');

  $('<div id="tabs__container" class="tabs__container group"></div>').appendTo(
    'div.tabs'
  );

  $('div#tabs__container').html(
    [
      '<div id="returns">',
      '<h2 class="tabs__header">Returns &amp; Exchanges</h2><br>',
      '<div class="row">',
      '<div class="col-md-6">',
      '<h2 class="tabs__header">Non-Tech Returns &amp; Exchanges</h2>',
      '<p>If you are not completely satisfied with any product, we will gladly replace it or refund the purchase price of the item. A non-text item may be returned any time as long as it was purchased from a University Book Store location or website and is in saleable condition. Returns without a receipt will be refunded at the lowest price ever sold and credited to a University Book Store gift card. See associate for details.<br>Please do the following:</p>',
      '<ol>',
      '<li>Items must be in new condition w/original packaging &amp; accessories.</li>',
      '<li>Circle the item(s) on the packing list and note whether you want an EXCHANGE or CREDIT.</li>',
      '<li>If an exchange, please make note as to what Size and/or Color you want.</li>',
      '</ol>',
      '</div>',
      '<div class="col-md-6">',
      '<h2 class="tabs__header">Tech Return Policy</h2>',
      '<p>Tech items may be returned within 15 days, with receipt and in new condition, complete with all packaging and pieces. Unopened product may be refunded in full and opened product will be subject to a 15% restocking fee, with the following exceptions:</p>',
      '<ol>',
      '<li>Open Batteries, graphing calculators, in-ear headphones, ink/toner, printers, and storage devices are not returnable.</li>',
      '<li>Special Order and sale items are generally not returnable- ask for details before purchasing please.</li>',
      '<li>Defective items may require warranty processing or may be exchanged for the same item after verified defective, per manufacturer and store policies.</li>',
      '</ol>',
      '</div>',
      '</div>',
      '<br>',
      '<p>Purchases may be returned to any of our stores with the packing list or send returns to:</p>',
      '<address class="returns">The University Book Store<br>',
      'ATTN: Online Sales Returns Department<br>',
      '4509 West Beltline Hwy<br>',
      'Madison, WI 53711</address>',
      '<p>Credit card purchases will be credited to the charge card used for the initial purchase. If the purchase was made with a personal check, we will issue a check.</p>',
      '</div>',
      '<div id="shipping">',
      '<h2 class="tabs__header">Shipping &amp; Handling</h2>',
      '<div class="text-center">',
      '<img src="https://i.univbkstr.com/images/catalog/usps.png" alt="USPS Logo" class="lazyload">',
      '<img src="https://i.univbkstr.com/images/catalog/ups.png" alt="UPS Logo" class="lazyload">',
      '</div>',
      '<p><strong>Methods for shipping are:</strong></p>',
      '<table class="table table-striped">',
      '<tbody>',
      '<tr>',
      '<td>Ground Shipping (5-7 days)</td>',
      '<td>$7.00 + $0.50 for each item</td>',
      '</tr>',
      '<tr>',
      '<td>2nd Day Air</td>',
      '<td>$21.00 + $1.00 for each item</td>',
      '</tr>',
      '<tr>',
      '<td>Next Day Air</td>',
      '<td>$45.00 + $2.00 for each item</td>',
      '</tr>',
      '</tbody>',
      '</table>',
      '<p>Order processing time is 5-7 business days (for ground shipping) or 1-2 business days (for expedited and pick up at store orders).</p>',
      '<p><strong>Methods for shipping Gift Cards ONLY are:</strong></p>',
      '<table class="table table-striped">',
      '<tbody>',
      '<tr>',
      '<td>Gift Card (Ground)</td>',
      '<td>$3.50</td>',
      '</tr>',
      '<tr>',
      '<td>Gift Card (2nd Day Air)</td>',
      '<td>$20.00</td>',
      '</tr>',
      '<tr>',
      '<td>Gift Card (Next Day Air)</td>',
      '<td>$30.00</td>',
      '</tr>',
      '</tbody>',
      '</table>',
      '<p>From the Delivery Methods section select your shipping method and then click "Continue".</p>',
      '<p>Handling charges are applied to products that have special shipping requirements. Items that require handling charges are noted as such in the description field of that item.</p>',
      '<p>Out of country orders are usually sent USPS International Priority Mail and will arrive in 6-10 business days. These orders are not shipped or charged until we can weigh the order and check with USPS for options / prices. We will then e-mail that information to the customer for approval.</p>',
      '<p>Items are shipped Monday through Friday between the hours of 8 AM and 3 PM.</p>',
      '<p>We offer the option to "Pick Up At Store" at the following locations:<br>',
      'Library Mall (711 State Street)<br>',
      'Health Sciences Learning Center (750 N. Highland Ave)<br>',
      'Hilldale Mall (454 N. Midvale Blvd)<br>',
      'Please allow for our normal processing time of 3 – 4 business days. You will receive notification once the order has been delivered to the store of your choice.</p>',
      '<p>Brookfield (95 North Moorland Road, Suite E2 - Brookfield)<br>',
      'Please allow for a processing time of 4-8 business days. You will receive notification once the order has been delivered to the store of choice.</p>',
      '<p>We are happy to work with customers who have particular shipping needs. Please feel free to <a href="https://www.uwbookstore.com/Contact">email</a> us, or call us toll free at 800-993-2665 ext. 5997.</p>',
      '</div>',
    ].join('\n')
  );

  const rating = $('div.merchRank');
  if ($(rating).length > 0) {
    const rankCount = $('span.rankCount').text();
    $(
      '<li class="tabs__item"><a href="#ratings" class="tabs__link"><i class="fa fa-star" aria-hidden="true"></i> Reviews ' +
        rankCount +
        '</a>'
    ).appendTo('ul.tabs__nav');
    $('<div id="ratings"></div>').appendTo('.tabs__container');
    $('div#itemRanking').appendTo('#ratings');

    $('#itemRanking a.pleaseLogin').removeClass('displayb');
  }

  if ($('span.disco').length > 0) {
    $(
      '<li class="tabs__item"><a href="#disco" class="tabs__link"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Discontinued Item Policy</a></li>'
    ).prependTo('ul.tabs__nav');
    $('<div id="disco"></div>').appendTo('div#tabs__container');

    $('div#disco').html(
      [
        '<p>You will not be charged for your order until the order ships.<br />',
        'We search for discontinued items at each of our 5 locations so it may take longer for those items to be pulled. <span>If you are placing a Next Day Air or 2nd Day Air order the order processing time will be delayed while we check all of our locations for the discontinued item.</span></p>',
        "<p>If we don't find the item, your order packing slip will show it as &quot;Discontinued&quot; and you will not receive that item.</p>",
      ].join('\n')
    );
  }

  $('<i class="close-p fa fa-times"></i>').appendTo(
    'p.merchDisclaimerError, p.merchSelectError, p.addGiftErrorLCS, p.addGiftError'
  );
  $('.close-p').on('click', function () {
    $(this).parent('p').fadeOut();
  });

  // Additional Information Tabs
  $('ul.tabs__nav').each(function () {
    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    let $active;
    let $content;
    const $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $(
      $links.filter('[href="' + window.location.hash + '"]')[0] || $links[0]
    );
    $active.addClass('tabs__link-active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function (e) {
      // Make the old tab inactive.
      $active.removeClass('tabs__link-active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('tabs__link-active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

  if ($('.merchSuggested').length) {
    $(
      '<h2 class="heading__line-center"><span>Other Suggested Items</span></h2><div id="suggested-grid" class="grid merch__card"></div>'
    ).insertBefore('#tabs-header');
    $('.suggestedItem ').each(function (i) {
      $(this)
        .addClass('merch__card-item')
        .removeClass('col-sm-2 col-xs-6')
        .appendTo('#suggested-grid');
      $('.suggestedLink')
        .addClass('merch__card-link')
        .attr('id', i)
        .removeClass('textc');
      $('.suggestedImg')
        .addClass('merch__card-img')
        .removeAttr('width')
        .removeClass('margin_auto');
      $('.suggestedName').addClass('merch__card-title');
      $('.suggestedPrice').removeClass('center').addClass('merch__card-price');
    });
  }

  $('.flexslider').flexslider({
    animation: 'fade',
    controlNav: 'thumbnails',
    directionNav: false,
    slideshow: false,
  });

  $('#toggle').click(function () {
    const elem = $('#toggle').text();
    if (elem === 'More Info') {
      //Stuff to do when btn is in the read more state
      $('#toggle').text('Read Less');
      $('.merch__detail-overflow').slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $('#toggle').text('More Info');
      $('.merch__detail-overflow').slideUp();
    }
  });

  // Size charts colorbox
  $('.merch__detail-size-link').colorbox({
    current: '{current} of {total}',
    rel: 'merch__detail-size-link',
    iframe: true,
    width: '75%',
    height: '90%',
  });

  if (window.matchMedia) {
    // Establishing media check
    const width700Check = window.matchMedia('(max-width: 700px)');
    if (width700Check.matches) {
      $.colorbox.remove();
    }
  }

  //set location of previous page and continue shopping buttons
  const { hostname } = window.location;
  const previouspage = document.referrer;
  const currentpage = $(window.location).attr('href');
  if (currentpage === previouspage) {
    $('.backButton').prop('href', 'http://' + hostname);
  } else {
    if (previouspage.indexOf(hostname) >= 0) {
      $('.backButton').prop('href', previouspage);
    } else {
      $('.backButton').prop('href', 'http://' + hostname);
    }
  }

  const pickupMsg = document.getElementById('puo');
  if (pickupMsg) {
    pickupMsg.innerHTML =
      '<strong>This item has a handling charge of $15.00. Will not apply to In-Store Pickups.</strong>';
  }

  $('div.merchItem').hide();
});
