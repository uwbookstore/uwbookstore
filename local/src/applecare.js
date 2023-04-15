$(document).ready(function () {
  // Prompt User to purchase AppleCare+
  // Produc/AppleCare+ SKU array...
  const skuArr = [
    // ["2052508", "https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-3-year"],
    [
      '19425204895',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M1-3-year',
    ],
    [
      '19425204898',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M1-3-year',
    ],
    [
      '19425204901',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M1-3-year',
    ],
    [
      '19425308041',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425308135',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425308229',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425308323',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '2075911',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425308088',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425308182',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425308276',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425308370',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-with-M2-3-year ',
    ],
    [
      '19425313788',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-13-with-M2-3-year ',
    ],
    [
      '19425313878',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-13-with-M2-3-year ',
    ],
    [
      '2075912',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-13-with-M2-3-year ',
    ],
    [
      '19425313833',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-13-with-M2-3-year ',
    ],
    [
      '19425313923',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-13-with-M2-3-year ',
    ],
    [
      '19425255104',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-3-year',
    ],
    [
      '19425255105',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-3-year',
    ],
    [
      '19425255106',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-3-year',
    ],
    [
      '19425255107',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-3-year',
    ],
    [
      '19425254591',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-with-M1-3-year',
    ],
    [
      '19425254729',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-with-M1-3-year',
    ],
    [
      '19425254637',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-with-M1-3-year',
    ],
    [
      '19425254775',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-with-M1-3-year',
    ],
    [
      '19425212880',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425244038',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425243994',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425244082',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212250',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212514',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212426',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212602',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212294',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212558',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212470',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425212646',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19019971132',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19019971133',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19019971134',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-3-Year ',
    ],
    [
      '19425209174',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-3-year',
    ],
    [
      '19425209216',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-3-year',
    ],
    [
      '19425251565',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-9th-gen-2-year',
    ],
    [
      '19425251592',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-9th-gen-2-year',
    ],
    [
      '19425251646',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-9th-gen-2-year',
    ],
    [
      '19425251673',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-9th-gen-2-year',
    ],
    [
      '19425338744',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425338771',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425338798',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425338825',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425338960',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425338987',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425339014',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425339041',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year ',
    ],
    [
      '19425279459',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425279540',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425279486',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425279513',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425281955',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425279675',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425279756',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425279702',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425279729',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425282009',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-5th-gen-2-year ',
    ],
    [
      '19425326460',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-4th-gen-2-year',
    ],
    [
      '19425326487',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-4th-gen-2-year',
    ],
    [
      '19425326514',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-4th-gen-2-year',
    ],
    [
      '19425326541',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-4th-gen-2-year',
    ],
    [
      '19425326568',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-4th-gen-2-year',
    ],
    [
      '19425324139',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-129-6th-gen-2-year',
    ],
    [
      '19425324166',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-129-6th-gen-2-year',
    ],
    [
      '19425324193',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-129-6th-gen-2-year',
    ],
    [
      '19425324220',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-129-6th-gen-2-year',
    ],
    [
      '19425324247',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-129-6th-gen-2-year',
    ],
    [
      '19425258820',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-7-2-year',
    ],
    [
      '19425259396',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-7-2-year',
    ],
    [
      '19425321496',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19425321498',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19425321500',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19425325037',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19425321503',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19425321505',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19425321507',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19425325078',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Watch-Series-8-Aluminum-2-year',
    ],
    [
      '19019909842',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-year ',
    ],
    [
      '19425281838',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-year ',
    ],
    [
      '19425332403',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-year ',
    ],
    [
      '19425339716',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Pro-2-year',
    ],
    [
      '19425224494',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-year',
    ],
    [
      '19425224497',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-year',
    ],
    [
      '19425224506',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-year',
    ],
    [
      '19425224503',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-year',
    ],
    [
      '19425224509',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-year',
    ],
    [
      '2070487',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-Beats-2-year',
    ],
    [
      '19019909695',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-Beats-2-year',
    ],
    [
      '19425309771',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-TV-3-year',
    ],
  ];

  for (let i = 0; i < skuArr.length; i += 1) {
    if (
      $('.cart_title').text().indexOf(skuArr[i][0]) !== -1 &&
      $('.cart_title').text().indexOf('AppleCare') === -1
    ) {
      if (!sessionStorage.getItem('apple-care')) {
        $(
          '<div class="modal fade" id="apple-care" tabindex="-1" role="dialog" aria-labelledby="apple-careModal"></div>'
        ).appendTo('body');

        $('#apple-care').html(
          [
            '<div class="modal-dialog" role="document">',
            '<div class="modal-content">',
            '<div class="modal-header" id="apple-careModal">',
            '<button type="button" data-dismiss="modal" aria-label="Close" class="close">',
            '<span>×</span>',
            '</button>',
            '<h3 class="modal-title">AppleCare+</h3>',
            '</div>',
            '<div class="modal-body">',
            '<p>Every MacBook, iPad and Mac comes with a one-year limited hardware warranty and 90 days of complimentary tech support. AppleCare+ extends your coverage to two or three years (depending on device) from the purchase date and adds unlimited accidental protection, each claim subject to a service fee plus applicable tax. You will also get 24/7 priority access to Apple experts by chat or phone.</p>',
            '<p>The University Book Store provides in-store service at 711 State St., via Apple Premium Service Provider Graphite.</p>',
            '<p>AppleCare+ is a best-in-class service contract from Apple- not insurance. Terms and conditions apply as detailed in each AppleCare+ listing.</p>',
            '<a href="' +
              skuArr[i][1] +
              '" class="btn btn-primary">Yes, Purchase AppleCare+</a>',
            '</div>',
            '<div class="modal-footer">',
            '<button type="button" class="btn btn-default" data-dismiss="modal">No Thank You</button>',
            '</div>',
            '</div>',
            '</div>',
          ].join('\n')
        );

        sessionStorage.setItem('apple-care', true);
        $('#apple-care').modal('show');
      }
    }
  }
});
