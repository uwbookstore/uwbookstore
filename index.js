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
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/47Brand.png',
    text: "'47 Brand",
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Antigua',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/antigua.png',
    text: 'Antigua',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Badger-Doodles',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/badgerDoodles.png',
    text: 'Badger Doodles',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Blue-84',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/blue84.png',
    text: 'Blue 84',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Blue-Q',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/blue-Q.png',
    text: 'Blue Q',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Boxercraft',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/boxercraft.png',
    text: 'Boxercraft',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Champion',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/champion.png',
    text: 'Champion',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Columbia',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/columbia.png',
    text: 'Columbia',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Cutter-and-Buck',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/cutterAndBuck.png',
    text: 'Cutter &amp; Buck',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Game-Bibs',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/gameBibs.png',
    text: 'Game Bibs',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Gear-For-Sports',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/gear.png',
    text: 'Gear For Sports',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Hydro-Flask',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/HydroFlask.png',
    text: 'Hydro Flask',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Hype-and-Vice',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/hype.png',
    text: 'Hype and Vice',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Iron-Joc',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/ironJoc.png',
    text: 'Iron Joc',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Johnnie-)',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/johnnieO.png',
    text: 'Johnnie-O',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Julia-Gash',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/juliaGash.png',
    text: 'Julia Gash',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Kady-Luxe',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/kadyluxe.png',
    text: 'Kady Luxe',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/kyle-Cavan',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/kyleCavan.png',
    text: 'Kyle Cavan',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Lands-End',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/landsEnd.png',
    text: "Lands' End",
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/League',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/league.png',
    text: 'League',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Legacy',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/legacy.png',
    text: 'Legacy',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Manitowoc-Minute',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/manitowocMinute.png',
    text: 'Manitowoc Minute',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Old-Fashioned-Golf',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/oldFashionedGolf.png',
    text: 'Old Fashioned Golf',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Tommy-Bahama',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/tommyBahama.png',
    text: 'Tommy Bahama',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Under-Armour',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/underArmour.png',
    text: 'Under Armour',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/Wisconsin-Design-Team',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/wiscDesignTeam.png',
    text: 'Wisconsin Design Team',
  },
  {
    link: 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/ZooZatz',
    logo: 'https://i.univbkstr.com/v3/img/logos/brands/zooZatz.png',
    text: 'ZooZatz',
  },
];

const brandsContainer = document.getElementById('shop-by-brand');

brands.forEach((brand) => {
  const container = document.createElement('div');

  container.className = 'shop-by-brand-cell';
  container.innerHTML = `
    <a href="${brand.link}">
      <img src="${brand.logo}" alt="${brand.text}" class="img-fluid d-block">
    </a>
  `;

  brandsContainer.appendChild(container);
});
