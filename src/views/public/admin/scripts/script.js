var menuopen = false
$('li.submenu').click(() => {
  if (menuopen) {
    $('ul.setores').slideToggle(300)
    $('aside .menu li.submenu i, aside .menu li.submenu svg').removeClass('fa-caret-right').addClass('fa-caret-down')
    menuopen = false
  } else {
    $('ul.setores').slideToggle(300)
    $('aside .menu li.submenu i, aside .menu li.submenu svg').removeClass('fa-caret-down').addClass('fa-caret-right')
    $('aside .menu li.submenu').css('margin-bottom', '50px')
    menuopen = true
  }
})