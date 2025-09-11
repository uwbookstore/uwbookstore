$(document).ready(function () {
  $('a.ebookActivateLink').text('Click here to activate in-store purchase.');
  $('a.pageHelp[href="help/eBookActivate.htm"]').hide();
  // $('select.providerSelect option[value="2"]').remove();
  $('div.panel-heading:empty').hide();
  $('<p class="hide">Testing...</p>').insertAfter('a.campusEbookLink');
  $('<div id="ubs-shelf-tags"></div>')
    .html(
      [
        '<div class="row">',
        '<div class="col-md-6 text-center">',
        '<h3>VitalSource Tag</h3><br>',
        '<img src="https://i.univbkstr.com/text/images/vitalSource.jpg" class="img-responsive" alt="CEI Code">',
        '</div>',
        '<div class="col-md-6 text-center">',
        '<h3>Campus eBookstore Tag</h3>',
        '<img src="https://i.univbkstr.com/text/images/cei-code.jpg" class="img-responsive" alt="CEI Code">',
        '</div>',
        '</div>',
      ].join('\n')
    )
    .insertAfter('p#ebookActivateMessageMain');
});
