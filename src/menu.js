$(document).ready(function () {
  $('#mens-nav li').clone().appendTo('#menu-mens');
  $('#womens-nav li').clone().appendTo('#menu-womens');
  $('#infant-nav li').clone().appendTo('#menu-youth');
  $('#toddler-nav li').clone().appendTo('#menu-youth');
  $('#youth-nav li').clone().appendTo('#menu-youth');
  $('#kids-nav li').clone().appendTo('#menu-youth');
  $('#ua-nav li').clone().appendTo('#menu-underarmour');
  $('#hat-nav li').clone().appendTo('#menu-uw-hats');
  $('#clearance-nav li').clone().appendTo('#menu-sale-items');
  $('#sport-nav li').clone().appendTo('#menu-sports');
  $('#technav-1 ul li').clone().appendTo('#menu-tech');
  $('#technav-2 ul li').clone().appendTo('#menu-tech-2');
  $('#technav-3 ul li').clone().appendTo('#menu-tech-3');
  $('#technav-4 ul li').clone().appendTo('#menu-tech-4');

  // Clone the navigation links
  // Clothing
  $('#mens-nav li').clone().appendTo('.meganav__menu.men');
  $('#womens-nav li').clone().appendTo('.meganav__menu.women');
  $('#infant-nav li').clone().appendTo('.meganav__menu.kids');
  $('#toddler-nav li').clone().appendTo('.meganav__menu.kids');
  $('#youth-nav li').clone().appendTo('.meganav__menu.kids');
  $('#kids-nav li').clone().appendTo('.meganav__menu.kids');
  $('#ua-nav li').clone().appendTo('.meganav__menu.underarmour');
  $('#hat-nav li').clone().appendTo('.meganav__menu.uw-hats');

  // Gifts
  $('#bag-nav li').clone().appendTo('#gift-bags');
  $('#drink-nav li').clone().appendTo('#gift-drinkware');
  $('#home-nav li').clone().appendTo('#gift-home');
  $('#tailgate-nav li').clone().appendTo('#gift-tailgate');
  $('#kidsGift-nav li').clone().appendTo('#gift-kids');
  $('#fineGift-nav li').clone().appendTo('#gift-fine');
  $('#gift1-nav li').clone().appendTo('#gift-miscellaneous');
  $('#gift2-nav li').clone().appendTo('#gift-miscellaneous');

  // TODO: Delete once new gift page is live
  // Gifts
  $('#bag-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#drink-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#fineGift-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#fineGift-nav li').clone().appendTo('.meganav__menu.fineGift');
  $('#home-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#tailgate-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#supply-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#gift1-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#gift2-nav li').clone().appendTo('.meganav__menu.gift-items');
  $('#sport-nav li').clone().appendTo('.meganav__menu.sports');
  $('#clearance-nav li').clone().appendTo('.meganav__menu.sale-items');
});
