$(document).ready(function () {
  $('.acc').hide();

  $('.enter').on('click', function () {
    $('.landing').addClass('uk-animation-fade uk-animation-reverse');
    $('.acc').show();
  });
});
