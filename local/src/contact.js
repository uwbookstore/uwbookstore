$(document).ready(() => {
  let subUrl;

  if (window.location.host === 'www.uwbookstore.com') {
    subUrl = 'www.uwbookstore.com';
  } else if (window.location.host === 'text.uwbookstore.com') {
    subUrl = 'text.uwbookstore.com';
  } else if (window.location.host === 'www.uwalumnistore.com') {
    subUrl = 'www.uwalumnistore.com';
  }

  if ($('#fname').val() === '') {
    $('#fname').focus();
  } else {
    $('#email').focus();
  }

  $.extend({
    getUrlVars: function () {
      const vars = [];
      let hash;
      const hashes = window.location.href
        .slice(window.location.href.indexOf('?') + 1)
        .split('&');
      for (let i = 0; i < hashes.length; i + 1) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function (name) {
      return $.getUrlVars()[name];
    },
  });

  if ($('div.confirmationText').length) {
    $('div.confirmationText').addClass('alert alert-success');
    // console.log('Message sent');
  } else {
    $('<h1 class="heading__line mb-1">Contact Us</h1>').prependTo(
      '.panel.panel-info'
    );
    $(
      '.contactInfo, .contactName, .contactAddress1, .contactAddress2, .contactCityState, .contactPhone, #contackBack'
    ).hide();
    $('div.panel-body div:first-child')
      .removeClass('col-md-4 col-sm-6 col-xs-12 bottom10')
      .addClass('col-md-4');
    $('div.panel-body div:nth-child(2)')
      .removeClass('col-lg-4 col-md-5 col-sm-6 col-xs-12')
      .addClass('col-md-8');
    $('<h3>Contact Us</h3>').appendTo('.panel-heading');
    $('.panel-heading').hide();
    if (
      window.location.host === 'www.uwbookstore.com' ||
      window.location.host === 'insitestore2.mbsbooks.com/uwmadison/'
    ) {
      $(
        '<div class="contact-info" style="margin-bottom: 3rem;"><h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Store Contact Information:</h2><div>University Book Store<br>711 State Street<br>Madison, WI 53703</div><div class="phone">(608) 257-3784</div><div class="phone">(800) 993-2665</div></div><p>If this is a question about a confirmed order please include your order number in the "Message" box. This information will help us respond to your message more rapidly.</p><p>Your question may already be answered. We have made a list of questions that come in the most.<br><a href="https://www.uwbookstore.com/Customer-Help#faq" title="FAQ">FAQ</a></p><p>View our <a href="https://www.uwbookstore.com/Customer-Help#return" title="Our Return Policy">return policy</a></p>'
      ).appendTo('div.panel-body > div:first-child');
    } else if (window.location.host === 'text.uwbookstore.com/') {
      $(
        '<div class="contact-info" style="margin-bottom: 3rem;"><h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Store Contact Information:</h2><div>University Book Store<br>711 State Street<br>Madison, WI 53703</div><div class="phone">(608) 257-3784</div><div class="phone">(800) 993-2665</div></div><p>If this is a question about a confirmed order please include your order number in the "Message" box. This information will help us respond to your message more rapidly.</p><p>Your question may already be answered. We have made a list of questions that come in the most.<br><a href="https://text.uwbookstore.com/SiteText?id=2369#faq" title="FAQ">FAQ</a></p><p>View our <a href="https://text.uwbookstore.com/SiteText?id=2369#return" title="Our Return Policy">return policy</a></p>'
      ).appendTo('div.panel-body > div:first-child');
    } else if (window.location.host === 'waa.uwbookstore.com/') {
      $(
        '<div class="contact-info" style="margin-bottom: 3rem;"><h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Store Contact Information:</h2><div>University Book Store<br>711 State Street<br>Madison, WI 53703</div><div class="phone">(608) 257-3784</div><div class="phone">(800) 993-2665</div></div><p>If this is a question about a confirmed order please include your order number in the "Message" box. This information will help us respond to your message more rapidly.</p><p>View our <a href="https://www.uwbookstore.com/Customer-Help#return" target="_blank" title="Our Return Policy">return policy</a></p>'
      ).appendTo('div.panel-body > div:first-child');
    }
    $(
      '<div id="dntn-form" style="display: none;"><h2 class="heading__line-center" style="margin-bottom: 2.5rem;">Donation Requests</h2><p class="text-center">Please click on the button below to fill out our online Donation Request Form.<br>Thank you.</p><p class="text-center"><a href="https://i.univbkstr.com/donations/" class="btn btn-primary">Donation Request Form</a></p></div>'
    ).insertAfter('#selectedSubject');
    $('<p id="msg-text"></p>').insertAfter('#selectedSubject').hide();
  }

  $('.SubmitButton').addClass('btn-disabled');
  $(
    '<p id="sel_msg" class="alert alert-danger text-center" style="width: 30rem;">Please select a valid subject</p>'
  ).insertAfter('#selectedSubject');

  if (window.location.href.search(/order_id/) !== -1) {
    // $('#selectedSubject').val('1052').attr('disabled','disabled').addClass('dd-hidden');
    $('#selectedSubject')
      .val('1183')
      .addClass('dd-hidden')
      .attr('disabled', 'disabled');
    $('#message').val(
      'Question regarding order#: ' + $.getUrlVar('order_id') + ',\n'
    );
    $('.SubmitButton').removeClass('btn-disabled');
    $('#sel_msg').hide();
  } else if (window.location.href.search(/employment/) !== -1) {
    // $('#selectedSubject').val('1049').attr('disabled','disabled').addClass('dd-hidden');
    $('#selectedSubject')
      .val('1538')
      .addClass('dd-hidden')
      .attr('disabled', 'disabled');
    $('#message').val('Question regarding a job posting...\n');
    $('.SubmitButton').removeClass('btn-disabled');
    $('#sel_msg').hide();
  } else if (window.location.href.search(/tech-questions/) !== -1) {
    $('#selectedSubject')
      .val('2426')
      .addClass('dd-hidden')
      .attr('disabled', 'disabled');
    $('#message').val(
      'I would like to be kept updated about the University Book Store Technology Store.\n'
    );
    $('.SubmitButton').removeClass('btn-disabled');
    $('#sel_msg').hide();
  } else if (window.location.href.search(/framing/) !== -1) {
    $('#selectedSubject')
      .val('1540')
      .addClass('dd-hidden')
      .attr('disabled', 'disabled');
    $('#message').val('Custom framing question.\n');
    $('.SubmitButton').removeClass('btn-disabled');
    $('#sel_msg').hide();
  }

  $('#selectedSubject').on('change', function () {
    const selOpt = Number($(this).val());

    $('.SubmitButton').removeClass('btn-disabled');
    $('#sel_msg').hide();
    $('#msg-text').removeAttr('class');
    if (selOpt === 1090) {
      $('.SubmitButton').addClass('btn-disabled');
      $('#sel_msg').show();
      $('#msg-text').hide();
    } else if (selOpt === 1353) {
      // 2416 for donations - 1363=Tech
      $(
        '#fname, #lname, #email, #message, button.g-recaptcha.SubmitButton'
      ).hide();
      $('#dntn-form').show();
      $('#msg-text').hide();
    } else if (selOpt === 1351) {
      $(
        '#fname, #lname, #email, #message, button.g-recaptcha.SubmitButton'
      ).hide();
      $('#msg-text')
        .html(
          '<div class="text-center"><h2 class="heading__line-center" style="margin-bottom: 2.5rem;">APPLE SERVICE - GRAPHITE</h2><p class="mainP">Your campus service &amp; support<br>for Mac, iPhone&reg;, iPad&reg; and<br>all Apple branded accessories</p><p class="hours">Graphite Hours: Monday-Friday 9am-5:30pm</p><p class="contact">Call <a href="tel:+16082332775">608-233-2775</a> or email <a href="mailto:campus-service@graphiteas.com">campus-service@graphiteas.com</a> to contactGraphite. For more information about Graphite, visit <a href="https://www.graphiteas.com/" target="_blank">www.graphiteas.com</a></p></div>'
        )
        .show();
    } else if (selOpt === 1184 || selOpt === 195) {
      if ($('#h_nav a:contains("Log Out")').length) {
        $('#msg-text')
          .html(
            'If inquiring about an order, please include the <a href="https://secure2.mbsbooks.com/Orders?s=' +
              subUrl +
              '"> order number</a>.'
          )
          .show();
      } else {
        $('#msg-text')
          .text('If inquiring about an order, please include the order number.')
          .addClass('red')
          .show();
      }
      $(
        '#fname, #lname, #email, #message, button.g-recaptcha.SubmitButton'
      ).show();
      $('#dntn-form').hide();
    } else if (selOpt === 1349) {
      $('#msg-text')
        .html(
          'If you are experiencing problems with the website, please include the following information in your message:<ul class="ul"><li>Error message(s) – (If any)</li><li>What system you are on (Mac, PC, mobile device)</li><li>What browser you are using (Chrome, Firefox, Safari, IE, etc.)</li><li>What page you were one when you encountered the error/problem.</li></ul>'
        )
        .show();
    } else {
      $(
        '#fname, #lname, #email, #message, button.g-recaptcha.SubmitButton'
      ).show();
      $('#dntn-form, #msg-text').hide();
    }
  });
});
