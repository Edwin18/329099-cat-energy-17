var button = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");

if (document.querySelector(".main-nav--open")) {
  menu.classList.remove("main-nav--open");
  button.classList.add("page-header__toggle--open");
}

button.addEventListener("click", function(evn) {
  evn.preventDefault(evn);
  menu.classList.toggle("main-nav--open");
  button.classList.toggle("page-header__toggle--open");
});

// SLIDER - BEFORE AFTER

function range() {
  var range = document.querySelector("#example-cat");
  var imageAfter = document.querySelector(".example__image-after");
  imageAfter.style.width = range.value +  "%";
}

range();
