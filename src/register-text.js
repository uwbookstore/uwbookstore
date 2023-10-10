$(document).ready(function() {
  $("#custShipAdd2").attr("placeholder", "Dorm, Dorm room, Apt#");

  $(
    '<div class="alert alert-warning" id="room-msg">If you are planning on having your order shipped to your dorm, please enter your dorm name and room number.</div>'
  ).insertAfter("#custShipAdd2");

  $("#custShipAdd2").blur(function() {
    if (!this.value) {
      $(this)
        .parent()
        .addClass("has-error");
      $(this).attr("placeholder", "Please enter dorm, and dorm room if applicable");
      // $("#room-msg").show();
    } else {
      $(this)
        .parent()
        .removeClass("has-error");
      $(this).attr("placeholder", "Dorm, Dorm room, Apt#");
      // $("#room-msg").hide();
    }
  });

  $("#custStudID").attr("placeholder", "Student ID/Phone Number *");

  $("#custStudID").blur(function() {
    if (!this.value) {
      $(this)
        .parent()
        .addClass("has-error");
    } else {
      $(this)
        .parent()
        .removeClass("has-error");
    }
  });
});
