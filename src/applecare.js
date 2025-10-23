document.addEventListener('DOMContentLoaded', function () {
  console.log(`...this is the new script`);
  // Prompt User to purchase AppleCare+
  // Product/AppleCare+ SKU/Link array...
  const skuArr = [
    // ["2052508", "https://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-3-year"],

    [
      '19594983625',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983719',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983813',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594989026',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983672',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983766',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594983860',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594989073',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594988882',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594988929',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594988976',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594989120',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-13-M4-3-Years',
    ],
    [
      '19594984009',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984103',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984197',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989316',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984056',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984150',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594984244',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989363',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989172',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989219',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989266',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19594989410',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Air-15-M4-3-Years',
    ],
    [
      '19595048899',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M5-3-Years ',
    ],
    [
      '19595049040',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M5-3-Years ',
    ],
    [
      '19595048946',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M5-3-Years ',
    ],
    [
      '19595049087',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M5-3-Years ',
    ],
    [
      '19595048993',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M5-3-Years ',
    ],
    [
      '19595049134',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M5-3-Years ',
    ],
    [
      '19594987483',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987348',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987528',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987393',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987573',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987438',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-14-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594986960',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594986780',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987005',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594986825',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987050',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594986870',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594987095',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19594986915',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-MacBook-Pro-16-M4-Pro--M4-Max-3-Years',
    ],
    [
      '19595008623',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008646',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008669',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008692',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008715',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008738',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008761',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008784',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008807',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008830',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008853',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19595008876',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-11-A16-2-Years',
    ],
    [
      '19594999726',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999749',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999772',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999795',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999818',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999841',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999864',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999887',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999910',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999933',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999956',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594999979',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000002',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000025',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000048',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19595000071',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-11-M3-2-Years',
    ],
    [
      '19594997534',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997557',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997580',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997603',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997626',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997649',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997672',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997695',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997718',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997741',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997764',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997787',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997810',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997833',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997856',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19594997879',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Air-13-M3-2-Years',
    ],
    [
      '19595039541',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039563',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039585',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039607',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039629',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039651',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039717',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039739',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039673',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039695',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039761',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039783',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-11-M5-2-Years ',
    ],
    [
      '19595039809',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039831',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039853',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039875',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039897',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039919',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039985',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595040007',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039941',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595039963',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595040029',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19595040051',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-Pro-13-M5-2-Years',
    ],
    [
      '19594972896',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-Years',
    ],
    [
      '19594972919',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-Years',
    ],
    [
      '19594972942',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-Years',
    ],
    [
      '19594972965',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iPad-mini-A17Pro-2-Years',
    ],
    [
      '19594908029',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-Years',
    ],
    [
      '19594908073',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-Years',
    ],
    [
      '19594994296',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-Years',
    ],
    [
      '19594994255',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Mac-mini-M4-3-Years',
    ],
    [
      '19594959153',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-Years',
    ],
    [
      '19594959241',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-Years',
    ],
    [
      '19594959285',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-Years',
    ],
    [
      '19594959329',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-iMac-M4-3-Years',
    ],
    [
      '19595038707',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595038727',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595038647',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595038667',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595038827',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595038847',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595038767',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595038787',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-SE-3-2-Years',
    ],
    [
      '19595046671',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046018',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046113',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046132',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046170',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046189',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046056',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046075',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046251',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046270',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046365',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046384',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046422',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046441',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046308',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595046327',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Series-11-2-Years',
    ],
    [
      '19595048465',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048499',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048533',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048159',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048193',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048227',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048567',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048601',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048261',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048295',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048431',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048125',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048635',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048669',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048703',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048329',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048363',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19595048397',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-Watch-Ultra-3-2-Years',
    ],
    [
      '19425309771',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-TV-3-year',
    ],
    [
      '19425309739',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Apple-TV-3-year',
    ],
    [
      '19594968852',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-Years',
    ],
    [
      '19594968960',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-2-Years',
    ],
    [
      '19595054369',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Pro-3-2-Years',
    ],
    [
      '19594954389',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-Years',
    ],
    [
      '19594954403',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-Years',
    ],
    [
      '19594954417',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-Years',
    ],
    [
      '19594954431',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-Years',
    ],
    [
      '19594954445',
      'http://www.uwbookstore.com/Wisconsin-Badgers/Tech/AppleCare/AppleCare-for-Headphones-AirPods-Max-2-Years',
    ],
  ];

  const merchWrapperText = document.querySelectorAll('.merch-wrapper p');
  const appleCareText = document.querySelectorAll(
    '.merch-wrapper a.black.hover_pointer'
  );

  let foundSku = null;
  let appleCareAlreadyListed = false;

  // Check for any matching SKU
  skuArr.forEach(([sku, url]) => {
    merchWrapperText.forEach((p) => {
      if (p.textContent.includes(sku)) {
        foundSku = [sku, url];
      }
    });
  });

  // Check if AppleCare is already listed
  appleCareText.forEach((a) => {
    if (a.textContent.toLowerCase().includes('applecare')) {
      appleCareAlreadyListed = true;
    }
  });

  // Only show modal if SKU matched and AppleCare not already listed
  if (
    foundSku &&
    !appleCareAlreadyListed &&
    !sessionStorage.getItem('apple-care')
  ) {
    // Create Bootstrap modal
    const modalHTML = `
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="apple-careModal">
                <h3 class="modal-title">AppleCare+</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
              </div>
              <div class="modal-body">
                <p>Every MacBook, iPad and Mac comes with a one-year limited hardware warranty and 90 days of complimentary tech
                  support. AppleCare+ extends your coverage to two or three years (depending on device) from the purchase date and
                  adds unlimited accidental protection, each claim subject to a service fee plus applicable tax. You will also get
                  24/7 priority access to Apple experts by chat or phone.</p>
                <p>University Book Store provides in-store service at 711 State St., via Apple Premium Service Provider Graphite.
                </p>
                <p>AppleCare+ is a best-in-class service contract from Apple- not insurance. Terms and conditions apply as
                  detailed in each AppleCare+ listing.</p>
                <a href="${foundSku[1]}" class="btn btn-primary">Yes, Purchase AppleCare+</a>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No Thank You</button>
              </div>
            </div>
          </div>
        `;

    const modalContainer = document.createElement('div');
    modalContainer.id = 'apple-care';
    modalContainer.classList.add('modal', 'fade');
    modalContainer.setAttribute('tabindex', '-1');
    modalContainer.setAttribute('role', 'dialog');
    modalContainer.setAttribute('aria-labelledby', 'apple-careModal');

    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    sessionStorage.setItem('apple-care', 'true');

    const appleCareModal = new bootstrap.Modal(
      document.getElementById('apple-care')
    );
    appleCareModal.show();
  }
});
