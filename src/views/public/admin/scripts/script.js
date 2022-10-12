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

var viewPassword = document.querySelector("form span.password");
var passwordField = document.querySelector("input#password");
var isPasswordVisible = false;

viewPassword.addEventListener("click", () => {
  if (!isPasswordVisible) showPassword();
  else hidePassword();
});

showPassword = () => {
  viewPassword.innerText = "lock_open";
  passwordField.attributes.type.textContent = "text";
  isPasswordVisible = true;
};

hidePassword = () => {
  viewPassword.innerText = "lock";
  passwordField.attributes.type.textContent = "password";
  isPasswordVisible = false;
};
