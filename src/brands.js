const brands = [
  {
    name: "'47 Brand",
    image: '47Brand.png',
    link: '47-Brand',
  },
  {
    name: 'Antigua',
    image: 'antigua.png',
    link: 'Antigua',
  },
  {
    name: 'Badger Doodles',
    image: 'badgerDoodles.png',
    link: 'Badger-Doodles',
  },
  {
    name: 'Blue 84',
    image: 'blue84.png',
    link: 'Blue-84',
  },
  {
    name: 'Blue Q',
    image: 'blue-Q.png',
    link: 'Blue-Q',
  },
  {
    name: 'Boxercraft',
    image: 'boxercraft.png',
    link: 'Boxercraft',
  },
  {
    name: 'Champion',
    image: 'champion.png',
    link: 'Champion',
  },
  {
    name: 'Columbia',
    image: 'columbia.png',
    link: 'Columbia',
  },
  {
    name: 'Game Bibs',
    image: 'gameBibs.png',
    link: 'Game-Bibs',
  },
  {
    name: 'Gameday Social',
    image: 'gameDaySocial.png',
    link: 'Gameday-Social',
  },
  {
    name: 'Gear For Sports',
    image: 'gear.png',
    link: 'Gear-For-Sports',
  },
  {
    name: 'Hair2U',
    image: 'hair2U.png',
    link: 'Hair-2-U',
  },
  {
    name: 'Hydro Flask',
    image: 'HydroFlask.png',
    link: 'Hydro-Flask',
  },
  {
    name: 'Hype and Vice',
    image: 'hype.png',
    link: 'Hype-and-Vice',
  },
  {
    name: 'Johnnie-O',
    image: 'johnnieO.png',
    link: 'Johnnie-O',
  },
  {
    name: 'Julia Gash',
    image: 'juliaGash.png',
    link: 'Julia-Gash',
  },
  {
    name: 'Kady Luxe',
    image: 'kadyluxe.png',
    link: 'Kady-Luxe',
  },
  {
    name: 'Kokyuo',
    image: 'kokyuo.png',
    link: 'Kokuyo',
  },
  {
    name: 'Jewelry by Kyle Cavan',
    image: 'kyleCavan.png',
    link: 'Kyle-Cavan',
  },
  {
    name: "Lands' End",
    image: 'landsEnd.png',
    link: 'Lands-End',
  },
  {
    name: 'League',
    image: 'league.png',
    link: 'League',
  },
  {
    name: 'Legacy',
    image: 'legacy.png',
    link: 'Legacy',
  },
  {
    name: 'Manitowoc Minute',
    image: 'manitowocMinute.png',
    link: 'Manitowoc-Minute',
  },
  {
    name: 'Decomposition by Michael Roger',
    image: 'michael-roger.png',
    link: 'Michael-Roger',
  },
  {
    name: 'Old Fashioned Golf',
    image: 'oldFashionedGolf.png',
    link: 'Old-Fashioned-Golf',
  },
  {
    name: 'Tommy Bahama',
    image: 'tommyBahama.png',
    link: 'Tommy-Bahama',
  },
  {
    name: 'Under Armour',
    image: 'underArmour.png',
    link: 'Under-Armour',
  },
  {
    name: 'Wisconsin Design Team',
    image: 'wiscDesignTeam.png',
    link: 'Wisconsin-Design-Team',
  },
  {
    name: 'ZooZatz',
    image: 'zooZatz.png',
    link: 'ZooZatz',
  },
];

const brandsContainer = document.getElementById('brands-page');
const linkURL = 'https://www.uwbookstore.com/Wisconsin-Badgers/shop-by-brand/';
const imgURL = 'https://i.univbkstr.com/img/logos/brands/';

/**
 * TODO: Make function that takes in container element and checks if flickity & refactor code.
 */
if (brandsContainer) {
  brands.forEach((brand) => {
    const brandItem = document.createElement('div');
    brandItem.classList.add('merch__card-item');
    const { name, image, link } = brand;
    brandItem.innerHTML = `
    <a href="${linkURL}${link}" class="merch__card-link">
      <img src="${imgURL}${image}" class="merch__card-img img-fluid d-block mx-auto" role="presentation">
      <span class="merch__card-title">${name}</span>
    </a>
  `;
    brandsContainer.appendChild(brandItem);
  });
}

const homeBrandsContainer = document.getElementById('shop-by-brand');
if (homeBrandsContainer) {
  brands.forEach((brand) => {
    const brandItem = document.createElement('div');
    brandItem.classList.add('shop-by-brand-cell');
    const { name, image, link } = brand;
    brandItem.innerHTML = `
    <a href="${linkURL}${link}">
      <img src="${imgURL}${image}" alt="${name}" class="img-fluid d-block" />
    </a>
  `;
    homeBrandsContainer.appendChild(brandItem);
  });
}
