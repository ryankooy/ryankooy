$(document).ready(function () {
  $('.acc').hide();

  $('.enter').on('click', function () {
    $('.landing').addClass('uk-animation-fade uk-animation-reverse');
    $('.acc').show();
    $('.acc').attr('uk-scrollspy', 'cls: uk-animation-fade; target: ul; delay: 1000; repeat: true');
  });
});
