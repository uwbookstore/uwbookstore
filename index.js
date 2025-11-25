// const rotators = [
//   {
//     url: 'https://www.uwbookstore.com/soar-welcome',
//     imgName: 'soarRotator',
//     text: `Welcome SOAR Students &amp; Families! Don't Miss out on your FREE shirt!`,
//   },
//   {
//     url: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Apple-Products',
//     imgName: 'appleRotator',
//     text: `Buy a Mac for college. Get AirPods.* - Buy an iPad for college. Get Apple Pencil.*<br>
//             *Terms apply`,
//   },
// ];

// const carouselContainer = document.getElementById('ubs-carousel');
// const carouselIndicators = document.querySelector('.carousel-indicators');
// const carouselSlides = document.querySelector('.carousel-inner');

// rotators.forEach((rotator, idx) => {
//   const container = document.createElement('div');
//   const button = document.createElement('button');

//   if (idx === 0) {
//     button.type = 'button';
//     button.className = 'active';
//     button.setAttribute('data-bs-target', '#ubs-carousel');
//     button.setAttribute('data-bs-slide-to', `${idx}`);
//     button.setAttribute('aria-label', `Slide ${idx}`);
//     button.setAttribute('aria-current', 'true');
//   } else {
//     button.type = 'button';
//     button.setAttribute('data-bs-target', '#ubs-carousel');
//     button.setAttribute('data-bs-slide-to', `${idx}`);
//     button.setAttribute('aria-label', `Slide ${idx + 1}`);
//     button.setAttribute('aria-current', 'true');
//   }

//   idx === 0
//     ? (container.className = 'carousel-item active')
//     : (container.className = 'carousel-item');

//   container.innerHTML = `
//     <a href="${rotator.url}">
//       <picture>
//         <source media="(min-width: 48em)"
//           srcset="https://i.univbkstr.com/v3/img/pages/home/rotator/${rotator.imgName}-lg.jpg" width="1170"
//           height="450">
//         <source media="(min-width: 28.125em)"
//           srcset="https://i.univbkstr.com/v3/img/pages/home/rotator/${rotator.imgName}-md.jpg" width="768"
//           height="840">
//         <img alt="" src="https://i.univbkstr.com/v3/img/pages/home/rotator/${rotator.imgName}-sm.jpg"
//           class="img-fluid" loading="lazy" width="450" height="500">
//       </picture>
//     </a>
//     <div class="sr-only carousel-caption">
//       ${rotator.text}
//     </div>
//   `;

//   carouselIndicators.appendChild(button);
//   carouselSlides.appendChild(container);
// });

const brands = [
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/47-Brand',
    logo: '47Brand.png',
    text: "'47 Brand",
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Antigua',
    logo: 'antigua.png',
    text: 'Antigua',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Badger-Doodles',
    logo: 'badgerDoodles.png',
    text: 'Badger Doodles',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Blue-84',
    logo: 'blue84.png',
    text: 'Blue 84',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Blue-Q',
    logo: 'blue-Q.png',
    text: 'Blue Q',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Boxercraft',
    logo: 'boxercraft.png',
    text: 'Boxercraft',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Champion',
    logo: 'champion.png',
    text: 'Champion',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Columbia',
    logo: 'columbia.png',
    text: 'Columbia',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Game-Bibs',
    logo: 'gameBibs.png',
    text: 'Game Bibs',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Gameday-Social',
    logo: 'gameDaySocial.png',
    text: 'Gameday Social',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Gear-For-Sports',
    logo: 'gear.png',
    text: 'Gear For Sports',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Hair-2-U',
    logo: 'hair2U.png',
    text: 'Hair2U',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Hydro-Flask',
    logo: 'HydroFlask.png',
    text: 'Hydro Flask',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Hype-and-Vice',
    logo: 'hype.png',
    text: 'Hype and Vice',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Iron-Joc',
    logo: 'ironJoc.png',
    text: 'Iron Joc',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Johnnie-)',
    logo: 'johnnieO.png',
    text: 'Johnnie-O',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Julia-Gash',
    logo: 'juliaGash.png',
    text: 'Julia Gash',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Kady-Luxe',
    logo: 'kadyluxe.png',
    text: 'Kady Luxe',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/kyle-Cavan',
    logo: 'kyleCavan.png',
    text: 'Kyle Cavan',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Lands-End',
    logo: 'landsEnd.png',
    text: "Lands' End",
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/League',
    logo: 'league.png',
    text: 'League',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Legacy',
    logo: 'legacy.png',
    text: 'Legacy',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Manitowoc-Minute',
    logo: 'manitowocMinute.png',
    text: 'Manitowoc Minute',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Old-Fashioned-Golf',
    logo: 'oldFashionedGolf.png',
    text: 'Old Fashioned Golf',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Tommy-Bahama',
    logo: 'tommyBahama.png',
    text: 'Tommy Bahama',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Under-Armour',
    logo: 'underArmour.png',
    text: 'Under Armour',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Wisconsin-Design-Team',
    logo: 'wiscDesignTeam.png',
    text: 'Wisconsin Design Team',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/ZooZatz',
    logo: 'zooZatz.png',
    text: 'ZooZatz',
  },
];

const brandsContainer = document.getElementById('shop-by-brand');

brands.forEach((brand) => {
  const container = document.createElement('div');

  container.className = 'shop-by-brand-cell';
  container.innerHTML = `
    <a href="${brand.link}">
      <img src="https://i.univbkstr.com/v3/img/logos/brands/${brand.logo}" alt="${brand.text}" class="img-fluid d-block">
    </a>
  `;

  brandsContainer.appendChild(container);
});
