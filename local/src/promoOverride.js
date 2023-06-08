const gmPromo = document.querySelectorAll('p.gmPromo');
const promoMsg = document.querySelectorAll('span.Merch_Promo_Message');

const updatePromo = (el) => {
  if (el.length) {
    el.forEach((x) => {
      x.classList.remove('red', 'bold');
      x.classList.add('alert', 'alert-success');
      const promoTxt = x.textContent;

      if (promoTxt === 'Buy 1 Get 20 Percent Off') {
        x.innerHTML = `<strong>Get 20% Off this item when purchased with the ABSN bundle.</strong><br>Promotional Discounts applied to items on your cart may not be viewable until the end of the checkout process.`;
      } else if (promoTxt === 'Buy 1 Get $129.00 Off') {
        x.innerHTML = `<strong>Apple Back-to-School Promo</strong><br>
                      Get $129.00 Off <a href="https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Back-to-School-AirPods">AirPods</a> (limit one) with eligible Mac or iPad purchase.<br>Valid for UW student, staff, faculty and UW Health personal purchases, NOT for department purchases.<br> Qualified purchasers may only receive one promo with iPad purchase and one promo with Mac purchase.<br><br>Discount will not reflect until related items are added to your cart and/or after shipping/delivery method is chosen during checkout.`;
      }
    });
  }
};

updatePromo(gmPromo);
updatePromo(promoMsg);

// $(document).ready(function () {
//   'use strict';
//   $('.oneCartTitlePromo').addClass('message_merch_promo'),
//     $('.oneMerchGMPromo').addClass('message_merch_promo'),
//     $('.merchPromo').addClass('message_merch_promo'),
//     $('.Merch_Promo_Message').addClass('message_merch_promo'),
//     $('merchDiscount').addClass('message_merch_promo'),
//     0 < $('.hiddenCartText').length &&
//       ($('.hiddenCartText').addClass('alert'),
//       $('.hiddenCartText').addClass('alert-danger'),
//       $('#promoMsg').hide(),
//       $('#Qty').hide(),
//       $('.hiddenCartText').css('margin-top', '15px'));
//   var e = $('.gmPromo');
//   0 < $('.gmPromo').length &&
//     ($('.gmPromo').hide(),
//     $(
//       '<div class="message_merch_promo">' +
//         $(e).text() +
//         '<br><span id="promoMsg">Discount will not reflect until related items are added to your cart and/or after shipping/delivery method is chosen during checkout.</span></div>'
//     ).insertAfter('#description-block')),
//     0 < $('p.merchDiscount').text().length &&
//       $(
//         '<div class="row"><div class="col-md-6 col-md-offset-3"><div class="alert alert-success" style="width: 100%; margin: 2rem auto;"><div class="center"><em>NOTE:</em></div><div class="center">Promotional Discounts applied to items on your cart will not be viewable until the end of the checkout process.</div></div></div></div>'
//       ).insertAfter('#merch__filter'),
//     $('.bts').length &&
//       $(
//         '<div class="message_merch_promo">Apple Back-to-School Promo!<br>Get $159.00 Off <a href="http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AirPods-Promo">AirPods</a> (limit one) with purchase!<br><span id="promoMsg">Valid for UW student, staff, or faculty personal purchases, NOT for department purchases.</span><br><br><span id="promoMsg">Discount will not reflect until related items are added to your cart and/or after shipping/delivery method is chosen during checkout.</span></div>'
//       ).insertAfter('#description-block'),
//     $('.oneCartTitlePromo').addClass('message_merch_promo'),
//     $('.oneMerchGMPromo').addClass('message_merch_promo'),
//     $('.merchPromo').addClass('message_merch_promo'),
//     $('.Merch_Promo_Message').addClass('message_merch_promo'),
//     $('merchDiscount').addClass('message_merch_promo'),
//     0 < $('.hiddenCartText').length &&
//       ($('.hiddenCartText').addClass('alert'),
//       $('.hiddenCartText').addClass('alert-danger'),
//       $('#promoMsg').hide(),
//       $('#Qty').hide(),
//       $('.hiddenCartText').css('margin-top', '15px'));
//   var o = new Date(),
//     s = new Date(2020, 5, 10, 0, 0, 0),
//     e = new Date(2020, 9, 12, 23, 59, 59);
//   s <= o &&
//     o < e &&
//     ($('h2.merch__detail-title:contains("AirPods")').each(function () {
//       $('.message_merch_promo').each(function () {
//         $(this).html(
//           $(this)
//             .html()
//             .replace(
//               'Buy 1 Get $159.00 Off',
//               "Apple Back-to-School Promo!<br>$159.00 Off (limit one) with select <a href='https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Back-to-School-AirPods/1-Choose-a-Qualifying-Apple-Product'>Elligible Product</a>!<br><span id='promoMsg'>Valid for UW student, staff, or faculty personal purchases, NOT for department purchases.</span><br>"
//             )
//         );
//       });
//     }),
//     (-1 === window.location.href.search(/checkout/) &&
//       !window.location.href.search(/shoppingcart/)) ||
//       ($('.message_merch_promo').each(function () {
//         $(this).html(
//           $(this)
//             .html()
//             .replace(
//               'Buy 1 Get $159.00 Off',
//               "Apple Back-to-School Promo!<br>$159.00 Off (limit one) with select <a href='https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Back-to-School-AirPods/1-Choose-a-Qualifying-Apple-Product'>Elligible Product</a>!<br><span id='promoMsg'>Valid for UW student, staff, or faculty personal purchases, NOT for department purchases.</span><br>"
//             )
//         );
//       }),
//       $('.message_merch_promo').each(function () {
//         $(this).html(
//           $(this)
//             .html()
//             .replace(
//               'Buy 1 Get 1 Free',
//               "Apple Back-to-School Promo!<br>$159.00 Off (limit one) with select <a href='https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Back-to-School-AirPods/1-Choose-a-Qualifying-Apple-Product'>Elligible Product</a>!<br><span id='promoMsg'>Valid for UW student, staff, or faculty personal purchases, NOT for department purchases.</span><br>"
//             )
//         );
//       }),
//       $('.message_merch_promo').each(function () {
//         $(this).html(
//           $(this)
//             .html()
//             .replace(
//               'Buy 1 Get $349.95 Off',
//               "Apple Back-to-School Promo!<br>$159.00 Off (limit one) with select <a href='https://www.uwbookstore.com/Wisconsin-Badgers/Tech/Back-to-School-AirPods/1-Choose-a-Qualifying-Apple-Product'>Elligible Product</a>!<br><span id='promoMsg'>Valid for UW student, staff, or faculty personal purchases, NOT for department purchases.</span><br>"
//             )
//         );
//       })));
// });
