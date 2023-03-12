let btn = document.querySelector('.ham');
let menu = document.querySelector('.menu');
let li = document.querySelectorAll('#li');
let ul = document.querySelector('ul');

btn.addEventListener('click', function () {
  menu.classList.toggle('add');

})

let myNav = document.getElementById('mynav');
window.onscroll = function () {
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  }
  else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};