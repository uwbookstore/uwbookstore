document.addEventListener('DOMContentLoaded', function () {
  // const dynamicCard = document.querySelector('.card.checkoutDynamic');
  // dynamicCard.style.display = 'none';

  const qtyInput = document.getElementById('dynamicQTY');
  const addToCardBtn = document.querySelector('.dynamicAdd');

  if (typeof Storage !== undefined) {
    if (!sessionStorage.getItem('checkoutDeal')) {
      // Create Bootstrap modal
      const modalHTML = `
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="checkoutDealModal">
                <h3 class="modal-title">Yours today for only $10!</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
              </div>
              <div class="modal-body">
                <div className="flex merch__card">
                  <div class="merch__card-item text-center">
                    <div>
                      <img class="merch__card-img img-fluid d-block mx-auto" src="https://www.uwbookstore.com/storeimages/177-1571250-1.png"
                      alt="">
                      <span class="merch__card-title">Northwest Wisconsin Super Plush Blanket (Red/White)</span>
                      <div id="input-container" style="margin-inline: auto; width: 40%"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No Thank You</button>
              </div>
            </div>
          </div>
        `;

      const modalContainer = document.createElement('div');
      modalContainer.id = 'checkoutDeal';
      modalContainer.classList.add('modal', 'fade');
      modalContainer.setAttribute('tabindex', '-1');
      modalContainer.setAttribute('role', 'dialog');
      modalContainer.setAttribute('aria-labelledby', 'checkoutDealModal');

      modalContainer.innerHTML = modalHTML;
      document.body.appendChild(modalContainer);

      const inputContainer = document.getElementById('input-container');
      inputContainer.appendChild(qtyInput);
      inputContainer.appendChild(addToCardBtn);

      sessionStorage.setItem('checkoutDeal', 'true');

      const checkoutDealModal = new bootstrap.Modal(
        document.getElementById('checkoutDeal')
      );
      checkoutDealModal.show();
    }
  }
});
