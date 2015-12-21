(function () {
  'use strict';

  $('.name').addClass('animated flip-bottom');

  $('.btn-portfolio,  .btn-contact').on('mouseover mouseout', function (e) {
    $('.photo').toggleClass('animated jump-bounce', e.type === 'mouseover');
  });

  $('.btn-portfolio').on('click', function(event) {
    $('html, body').animate({
      scrollTop: ($('.portfolio').first().offset().top)
    }, 1000);
  });

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

})();