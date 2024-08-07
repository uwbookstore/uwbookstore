$(document).ready(function () {
  $('a.view_sellers.hover_pointer').addClass('btn btn-primary');

  // $('h3.Print_Price_Title').text('Price');
  $('h3.Print_Price_Title').hide();

  // Look for Unizin titles...
  if (
    $('h2.Book_Title:contains(UZN)').length ||
    $('h2.Book_Title:contains(uzn)').length
  ) {
    // console.log("This is a Unizin course");
    $('h2.Book_Title:contains(UZN)')
      .parent()
      .parent()
      .parent()
      .addClass('hide-btn');
    $('h2.Book_Title:contains(uzn)')
      .parent()
      .parent()
      .parent()
      .addClass('hide-btn');
    $(
      '<div class="alert alert-danger mb-15"><p>This course is participating in the University\'s Engage eText Program. The course\'s textbook and other required materials (e.g., homework or lab software) will be delivered digitally via an online eText tool. The eText and materials have already been pre-purchased for all students enrolled in the course, and the charges will appear on each student\'s tuition bill. Students who decide to opt out of using the digital materials will not be charged and will need to purchase the required text(s) elsewhere.</p><p>This loose leaf copy of the course\'s textbook is only available for students who have not opted out and wish to have a printed version of the text in addition to the digital version. Proof of enrollment in the course is required</p><label><input id="unizen-confirm" type="checkbox" value="" style="margin-right: 1rem">I understand that proof of enrollment in the course is required and must present my student ID at the time of order pickup to validate my enrollment status.</label></div>'
    ).insertBefore($('h1.page_header').parent());

    $('.hide-btn .col-lg-10 .price-div button.add_cart').hide();
    $('#unizen-confirm').change(function () {
      if (this.checked) {
        $('.hide-btn .col-lg-10 .price-div button.add_cart').show();
      } else {
        $('.hide-btn .col-lg-10 .price-div button.add_cart').hide();
      }
    });
  } // END Unizin Titles

  $('.Materials_Course').each(function (index) {
    if (
      $(this).is(
        ':contains("This course does not require any course materials")'
      )
    ) {
      $(this).find('.course_after_cart_button').hide();
    }

    if ($(this).is(':contains("UZN")')) {
      $(this).find('.No_Material_Course_Text').hide();
      $(this).find('.No_Material_Course_Text_Req').hide();
      $(this).find('.course_after_cart_button').hide();

      $(
        '<div class="panel-body"><p class="col-xs-12 textl alert alert-warning p-2">This course includes an eText textbook. The eText fees will be automatically charged via your tuition.</p></div>'
      ).appendTo($(this).find('.card-body:last()'));
    } else if ($(this).is(':contains("SEE ")')) {
      const instructor = $('span.No_Material_Course_Instructor').text();
      $(this).find('.No_Material_Course_Text').html(`
            <p class="bold">Please go to <a href="https://text.uwbookstore.com/SelectTermDept">${
              instructor.split('|')[index].split('SEE')[1]
            }</a> for course requirements.</p>
            <div class="alert alert-info p-2">
              <p>Textbook requirements have not yet been determined for this course.If your instructor decides not to require any materials, this course will not be processed.</p>
            </div>
            <div class="alert alert-info p-2">
              <p><em>Your professor has not provided the store a list of materials for this course. This page will be updated if we receive information. Please check back.</em></p>
              <!-- <p class="center">If you've received a syllabus from your professor indicating there is a required book or required materials, send a screenshot (must be legible) of your syllabus to Amber, <a href="mailto:textbooks@uwbookstore.com">textbooks@uwbookstore.com</a>.  Be the first person to do so and receive a free Book Store t-shirt!<br>If your instructor decides not to require any materials, this course will not be processed.</p> -->
            </div>
          `);
      $(this)
        .find('.No_Material_Course_Text_Req')
        .addClass('alert alert-info p-2');
    } else {
      $(this)
        .find('.No_Material_Course_Text')
        .html(
          `
          <div class="alert alert-info p-2">
            <p><em>Your professor has not provided the store a list of materials for this course. This page will be updated if we receive information. Please check back.</em></p>
            <!-- <p class="center">If you've received a syllabus from your professor indicating there is a required book or required materials, send a screenshot (must be legible) of your syllabus to Amber, <a href="mailto:textbooks@uwbookstore.com">textbooks@uwbookstore.com</a>.  Be the first person to do so and receive a free Book Store t-shirt!<br>If your instructor decides not to require any materials, this course will not be processed.</p> -->
          </div>
          `
        );

      $(this)
        .find('.No_Material_Course_Text_Req')
        .addClass('alert alert-info p-2');
    }
  });
});

// Textbook requirements have not yet been determined for this course.If your instructor decides not to require any materials, this course will not be processed. $('.No_Material_Course_Location:contains("UZN")')
