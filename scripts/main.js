// MENU

var menuopen = false
$('header .mob-button').click(() => {
  if (menuopen) {
    $('section.mobile ul').slideToggle(300)
    $('header .mob-button i, header .mob-button svg').removeClass('fa-times').addClass('fa-bars')
    menuopen = false
  } else {
    $('section.mobile ul').slideToggle(300)
    $('header .mob-button i, header .mob-button svg').removeClass('fa-bars').addClass('fa-times')
    menuopen = true
  }
})

// FOOTER

if ($(window.innerWidth)[0] < 460) {
  $('footer .left p').html('&copy; 2022 Empório das Bananas<br>Todos os direitos reservados.')
}