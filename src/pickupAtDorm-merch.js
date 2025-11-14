$(document).ready(function () {
  const dormMsg = $(
    '<div id="dormMsg" class="alert alert-warning" role="alert"><em class="fa fa-exclamation-triangle"></em> Please make sure to include your dorm or apartment and room number in your address. You may edit your <a href="https://secure2.mbsbooks.com/AddressBook?s=www.uwbookstore.com">address here</a>.<br><br><strong>Orders are currently scheduled to be delivered to the specified Front Desks on September 2<sup>nd</sup> and then once per day, M-F. The Desk will notify you via email when your package has arrived at the Mail Desk. You can then pick up during normal Desk hours.</div>'
  );

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
            <em class="fa fa-exclamation-triangle"></em> Must be a dorm or apartment resident to use dorm/apartment delivery.<br>If you are not a dorm/apartment resident, and select this delivery option, your order will be changed to pick up at 711 State Street.<br><br><strong>Orders are currently scheduled to be delivered to the specified Front Desks on August 26<sup>th</sup> and then once per day, M-F. The Desk will notify you via email when your package has arrived at the Mail Desk. You can then pick up during normal Desk hours.</div>
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
    // console.log(pickUpLocation);
    if (!sessionStorage.getItem('dorm-merch')) {
      switch (pickUpLocation) {
        case '2158':
        case '2159':
        case '2160':
        case '2161':
        case '2162':
        case '2163':
        case '2164':
        case '2165':
        case '2166':
        case '2167':
        case '2168':
        case '2169':
        case '2170':
        case '2171':
        case '2172':
        case '2173':
        case '2174':
        case '2175':
        case '2176':
        case '2177':
        case '2178':
        case '2179':
        case '2196':
        case '2197':
        case '2228':
        case '2231':
          sessionStorage.setItem('dorm-merch', pickUpLocation);
          $('#dorm-warning').modal('show');
          dormMsg.insertAfter('select#selectedMethod');
          break;
        case '2155':
          $(
            '<div class="alert alert-danger" role="alert"><em class="fa fa-exclamation-triangle"></em> Be aware that the Health Sciences Learning Center is Badge Access only at this time.</div>'
          ).insertAfter('select#selectedMethod');
          break;
        default:
        // $("#dormMsg").addClass("hide");
      }
    } else {
      switch (pickUpLocation) {
        case '2158':
        case '2159':
        case '2160':
        case '2161':
        case '2162':
        case '2163':
        case '2164':
        case '2165':
        case '2166':
        case '2167':
        case '2168':
        case '2169':
        case '2170':
        case '2171':
        case '2172':
        case '2173':
        case '2174':
        case '2175':
        case '2176':
        case '2177':
        case '2178':
        case '2179':
        case '2196':
        case '2197':
        case '2228':
        case '2231':
          dormMsg.insertAfter('select#selectedMethod');
          break;
        case '2155':
          $(
            '<div class="alert alert-danger" role="alert"><em class="fa fa-exclamation-triangle"></em> Be aware that the Health Sciences Learning Center is Badge Access only at this time.</div>'
          ).insertAfter('select#selectedMethod');
          break;
        default:
        // $("#dormMsg").addClass("hide");
      }
    }
  });
});
