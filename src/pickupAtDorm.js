$(document).ready(function () {
  $(
    '<div class="modal fade" id="dorm-warning" tabindex="-1" role="dialog" aria-labelledby="dorm-warningLabel"></div>'
  ).appendTo('body');
  $('#dorm-warning').html(
    [
      `
      <div class="modal-dialog" role="document">
        <div class="modal-content dorm-warning">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Pick up at Dorms</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="alert alert-danger" role="alert">
            <em class="fa fa-exclamation-triangle"></em> Must be a dorm or apartment resident to use dorm/apartment delivery.<br>If you are not a dorm/apartment resident, and select this delivery option, your order will be changed to pick up at 711 State Street.<br><br><strong>Orders are currently scheduled to be delivered to the specified Front Desks on January 20<sup>th</sup> and then once per day, M-F, until February 2<sup>nd</sup>. The Desk will notify you via email when your package has arrived at the Mail Desk. You can then pick up during normal Desk hours.</div>
            <p>Please make sure to include your dorm or apartment, and room number in your address. You may edit your <a href="https://secure2.mbsbooks.com/AddressBook?s=www.uwbookstore.com">address here</a>.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
      `,
    ].join('\n')
  );

  $('#studentIDText')
    .parent()
    .removeClass('left5')
    .attr('style', 'margin-block-start: -1.5rem')
    .addClass('alert alert-danger');

  const selectElement = document.getElementById('shippingMethod-select');

  selectElement.addEventListener('change', (e) => {
    const pickUpLocation = e.target.value;

    switch (pickUpLocation) {
      case '2001':
      case '2002':
      case '2003':
      case '1973':
      case '2004':
      case '2005':
      case '1974':
      case '2006':
      case '2007':
      case '2008':
      case '2009':
      case '1976':
      case '2010':
      case '1977':
      case '2011':
      case '1978':
      case '2012':
      case '2013':
      case '1979':
      case '1980':
      case '2198':
      case '2199':
      case '2229':
      case '2230':
        if (!sessionStorage.getItem('dorm')) {
          sessionStorage.setItem('dorm', pickUpLocation);
        }
        $('#dorm-warning').modal('show');
        dormMsg.insertAfter('select#selectedMethod');
        break;
      case '2155':
        $(
          '<div class="alert alert-danger" role="alert"><em class="fa fa-exclamation-triangle"></em> Be aware that the Health Sciences Learning Center is Badge Access only at this time.</div>'
        ).insertAfter('select#selectedMethod');
        break;
      default:
    }
  });
});
