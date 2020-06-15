$(document).ready(() => {
  $('.acc').addClass('uk-hidden');

  $('.enter').on('click', () => {
    $('.landing, .footer').hide();
    $('.acc').removeClass('uk-hidden');
    $('.acc').attr('uk-scrollspy', 'cls: uk-animation-fade; delay: 100');
    setTimeout(() => byeBG(), 500);
  })

  const byeBG = () => {
    $('html, body').attr('style', 'background-image: none;');
  }
})
