(function () {
  'use strict';

  $('.name').addClass('animated flip-bottom');

  // $('.photo').on('mouseover mouseout', function (e) {
  //   $('.name').toggleClass('animated flip-top', e.type === 'mouseover');
  // });

  // @todo refazer isso
  $('header').height($(window).height());

  $('.btn-portfolio').on('click', function(event) {
    $('html, body').animate({
      scrollTop: ($('.portfolio').first().offset().top)
    }, 1000);
  });
})();