$(document).ready(function () {
  $('.acc').addClass('uk-hidden');

  $('.enter').on('click', function () {
    $('.landing').addClass('uk-animation-fade uk-animation-reverse');
    $('.footer').addClass('uk-animation-fade uk-animation-reverse');
    $('.acc').removeClass('uk-hidden');
    $('.acc').attr('uk-scrollspy', 'cls: uk-animation-fade; target: ul; delay: 1000; repeat: true');
  });
});
