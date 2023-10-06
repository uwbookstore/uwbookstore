$(document).ready(() => {
  const baseUrl = 'https://www.uwbookstore.com/';
  const itemCount = $('span#cart-itemCount').text();
  console.log('Loaded...');
  if (itemCount === '0') {
    console.log('Empty cart');
    if (baseUrl === 'https://www.uwbookstore.com/') {
      console.log(`We're on the right site...`);
      $('.cart-leftCard-header .card-header').html(`
      <div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i>
        <p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="${baseUrl}" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a>
        <div class="cart__account">
          <p><a class="btn btn-text" href="${baseUrl}Customer-Help" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span
            class="phone">(800) 993-2665</span>
        </div>
      </div>
      </div>      
      `);
    }
  }
});
