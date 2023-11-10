$(document).ready(() => {
  const itemCount = $('span#cart-itemCount').text();

  if (itemCount === '0') {
    if (baseUrl === 'https://www.uwbookstore.com/') {
      $(`
      <div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i>
        <p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="${baseUrl}" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a>
        <div class="cart__account">
          <p><a class="btn btn-text" href="${baseUrl}Customer-Help" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span
            class="phone">(800) 993-2665</span>
        </div>
      </div>
      </div>      
      `).insertAfter('.cart-leftCard-header');
      $('.cart-leftCard-header').hide();
    } else if (baseUrl === 'https://text.uwbookstore.com/') {
      $(`
      <div class="cart__container"><i class="cart__icon fa fa-shopping-cart" aria-hidden="true"></i>
        <p class="cart__p">Your shopping cart is empty.</p><a class="btn btn-primary cart__btn" href="${baseUrl}" title="Shop Clothing &amp; Gifts">Shop Clothing &amp; Gifts</a>
        <div class="cart__account">
          <p><a class="btn btn-text" href="${baseUrl}Customer-Help" title="Customer Help">Customer Help</a></p><span class="phone">(608) 257-3784</span> or <span
            class="phone">(800) 993-2665</span>
        </div>
      </div>
      </div>      
      `).insertAfter('.cart-leftCard-header');
      $('.cart-leftCard-header').hide();
    }
  }
});
