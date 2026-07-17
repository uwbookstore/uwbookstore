document.addEventListener('DOMContentLoaded', () => {
  const discountSKUs = ['2078789', '2055318', '2061829', '2067290', '2078795'];

  const priceBlockContainer = document.getElementById('priceBlock');

  const sku = document
    .querySelector('.merch__detail-sku')
    ?.textContent.trim()
    .split(' ')[1];

  if (discountSKUs.includes(sku)) {
    priceBlockContainer.style.display = 'none';
  }

  // // Loop through all product cards
  // document.querySelectorAll('.merch__card-item').forEach((card) => {
  //   // Get the SKU
  //   const sku = card.querySelector('.merchSKU')?.textContent.trim();

  //   // If this SKU is in the discount list, hide the price
  //   if (discountSKUs.includes(sku)) {
  //     const price = card.querySelector('.merchPrice');
  //     if (price) {
  //       price.style.display = 'none';
  //     }
  //   }
  // });
});
