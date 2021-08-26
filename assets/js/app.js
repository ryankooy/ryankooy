$(document).ready(() => {
  $('.acc').addClass('uk-hidden');

  $('.enter').on('click', () => {
    $('.landing, .footer').hide();
    $('.acc').removeClass('uk-hidden');

    setTimeout(() => byeBG(), 550);
  })

  const byeBG = () => {
    $('html, body').attr('style', 'background-image: none;');
  }
})
