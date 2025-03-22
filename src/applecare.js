$(document).ready(function () {
  // Prompt User to purchase AppleCare+
  // Produc/AppleCare+ SKU array...
  const skuArr = [
    // ["2052508", "https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-3-year"],

    [
      '19594989947',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M2-3-year',
    ],
    [
      '19594990149',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-with-M3-3-year',
    ],
    [
      '19594983625',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983719',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983813',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594989026',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983672',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983766',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983860',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594989073',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594988882',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594988929',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594988976',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594989120',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594984009',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984103',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984197',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989316',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984056',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984150',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984244',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989363',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989172',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989219',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989266',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989410',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594950778',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-3-year',
    ],
    [
      '19594950780',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-3-year',
    ],
    [
      '19594950779',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-3-year',
    ],
    [
      '19594950781',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-3-year',
    ],
    [
      '19594992659',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-3-year',
    ],
    [
      '19594992705',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-3-year',
    ],
    [
      '19594987483',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987348',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987528',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987393',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987573',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987438',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594986960',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594986780',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987005',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594986825',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987050',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594986870',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594987095',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
    ],
    [
      '19594986915',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro-M4-Max-3-year',
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
      '19594918948',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594918975',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M2-2-year',
    ],
    [
      '19594925352',
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
      '19595008623',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008646',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008669',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008692',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008715',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008738',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008761',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008784',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008807',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008830',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008853',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008876',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19594999726',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999749',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999772',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999795',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999818',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999841',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999864',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999887',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999910',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999933',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999956',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999979',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000002',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000025',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000048',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000071',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594997534',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997557',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997580',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997603',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997626',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997649',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997672',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997695',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997718',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997741',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997764',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997787',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997810',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997833',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997856',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997879',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
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
      '19594972896',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-year',
    ],
    [
      '19594972919',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-year',
    ],
    [
      '19594972942',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-year',
    ],
    [
      '19594972965',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-year',
    ],
    [
      '19594908029',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-year',
    ],
    [
      '19594908073',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-year',
    ],
    [
      '19594994296',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-year',
    ],
    [
      '19594994255',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-year',
    ],
    [
      '19594959153',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-year',
    ],
    [
      '19594959241',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-year',
    ],
    [
      '19594959285',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-year',
    ],
    [
      '19594959329',
      'https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-year',
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
