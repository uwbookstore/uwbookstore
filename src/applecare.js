$(document).ready(function () {
  // Prompt User to purchase AppleCare+
  // Produc/AppleCare+ SKU array...
  const skuArr = [
    // ["2052508", "https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-3-year"],

    [
      '19425308041',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19425308135',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19425308229',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19425308323',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '2075911',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19425308088',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19425308182',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19425308276',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19425308370',
      '	https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19594912417',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594912511',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594912605',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594912699',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '2077902',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594912464',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594912558',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594912652',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594912746',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594963568',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594963615',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594963662',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594963709',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19425371051',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M2-3-year',
    ],
    [
      '19425371380',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M2-3-year',
    ],
    [
      '19594912887',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594912981',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594913075',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594913169',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '2077903',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594912934',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594913028',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594913122',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594913216',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594963760',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594963807',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594963854',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594963901',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-with-M3-3-year',
    ],
    [
      '19594909890',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3-3-year',
    ],
    [
      '19594901484',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3-3-year',
    ],
    [
      '19594909935',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3-3-year',
    ],
    [
      '19594901529',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3-3-year',
    ],
    [
      '2077571',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3-3-year',
    ],
    [
      '19594964058',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3-3-year',
    ],
    [
      '19594964103',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3-3-year',
    ],
    [
      '19594900003',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3ProM3Max-3-year',
    ],
    [
      '19594900006',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3ProM3Max-3-year',
    ],
    [
      '19594900004',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3ProM3Max-3-year',
    ],
    [
      '19594900007',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3ProM3Max-3-year',
    ],
    [
      '19594900005',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3ProM3Max-3-year',
    ],
    [
      '19594900008',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M3ProM3Max-3-year',
    ],
    [
      '19594900015',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19594900018',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19594900016',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19594900019',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19594900017',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19594900020',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19594918524',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19594918569',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M3-3-year',
    ],
    [
      '19425338744',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19425338825',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19425338771',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19425338798',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19425338960',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19425339041',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19425338987',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19425339014',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-109-10th-gen-2-year',
    ],
    [
      '19594918813',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594918840',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594918867',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594918894',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594918921',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594918948',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594918975',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594919002',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594919029',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594919056',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594919083',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594919110',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594925325',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925352',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925379',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925406',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925433',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925460',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925487',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925514',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925541',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925568',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925595',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594925622',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M2-2-year',
    ],
    [
      '19594922246',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594922272',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594922298',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594922324',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594922350',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594922376',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594946687',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594946710',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M4-2-year',
    ],
    [
      '19594923863',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19594923890',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19594923917',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19594923944',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19594923971',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19594923998',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19594946779',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19594946802',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M4-2-year',
    ],
    [
      '19425281838',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-year',
    ],
    [
      '19425332403',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-year',
    ],
    [
      '19019909842',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-year',
    ],
    [
      '19594905248',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Pro-2-year',
    ],
    [
      '19425309771',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-TV-3-year',
    ],
    [
      '19425309739',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-TV-3-year',
    ],
  ];

  for (let i = 0; i < skuArr.length; i += 1) {
    if (
      $('.merch-wrapper p').text().indexOf(skuArr[i][0]) !== -1 &&
      $('.merch-wrapper a.black.hover_pointer').text().indexOf('AppleCare') ===
        -1
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
            '<h3 class="modal-title">AppleCare+</h3>',
            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">',
            '</button>',
            '</div>',
            '<div class="modal-body">',
            '<p>Every MacBook, iPad and Mac comes with a one-year limited hardware warranty and 90 days of complimentary tech support. AppleCare+ extends your coverage to two or three years (depending on device) from the purchase date and adds unlimited accidental protection, each claim subject to a service fee plus applicable tax. You will also get 24/7 priority access to Apple experts by chat or phone.</p>',
            '<p>University Book Store provides in-store service at 711 State St., via Apple Premium Service Provider Graphite.</p>',
            '<p>AppleCare+ is a best-in-class service contract from Apple- not insurance. Terms and conditions apply as detailed in each AppleCare+ listing.</p>',
            '<a href="' +
              skuArr[i][1] +
              '" class="btn btn-primary">Yes, Purchase AppleCare+</a>',
            '</div>',
            '<div class="modal-footer">',
            '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No Thank You</button>',
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
