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

if (document.querySelector("#example-cat")) {
  function range() {
    var range = document.querySelector("#example-cat");
    var imageAfter = document.querySelector(".example__image-after");
    imageAfter.style.width = range.value +  "%";
  }

  range();
}

var btnBefore = document.querySelector(".example__button--before");
var btnAfter = document.querySelector(".example__button--after");
var imageAfter = document.querySelector(".example__image-after");
var imageBar = document.querySelector(".example__controls-bar");

btnBefore.addEventListener("click", function(evn) {
  evn.preventDefault();
  imageAfter.style.width = "0";
  imageBar.classList.remove("example__controls-bar--after");
});

btnAfter.addEventListener("click", function(evn) {
  evn.preventDefault();
  imageAfter.style.width = "100%";
  imageBar.classList.add("example__controls-bar--after");
});

// if (document.documentMode || /Edge/.test(navigator.userAgent)) {
//   jQuery('.art-img img').each(function(){
//       var t = jQuery(this),
//           s = 'url(' + t.attr('src') + ')',
//           p = t.parent(),
//           d = jQuery('<div></div>');

//       p.append(d);
//       d.css({
//           'height'                : t.parent().css('height'),
//           'background-size'       : 'cover',
//           'background-repeat'     : 'no-repeat',
//           'background-position'   : '50% 20%',
//           'background-image'      : s
//       });
//       t.hide();
//   });
// }
