var button = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");

if (document.querySelector(".main-nav--open")) {
  menu.classList.remove("main-nav--open");
  button.classList.remove("page-header__toggle--no-js");
  button.classList.add("page-header__toggle--open");
}

button.addEventListener("click", function(evn) {
  evn.preventDefault(evn);
  menu.classList.toggle("main-nav--open");
  button.classList.toggle("page-header__toggle--open");
});

// SLIDER - BEFORE AFTER
if (document.querySelector(".example__button")) {
  var btnBefore = document.querySelector(".example__button--before");
  var btnAfter = document.querySelector(".example__button--after");
  var imageAfter = document.querySelector(".example__image-after");
  var imageBar = document.querySelector(".example__controls-bar");
  var mediaTablet = window.matchMedia("(min-width: 768px)");

  var btnBar = document.querySelector(".example__controls-button");


  btnBefore.addEventListener("click", function(evn) {
    evn.preventDefault();
    imageAfter.style.width = "0";
    imageBar.classList.remove("example__controls-bar--after");
    btnBar.style.left = "0";
  });

  btnAfter.addEventListener("click", function(evn) {
    var barWidth = parseInt(window.getComputedStyle(imageBar).width, 10);
    var btnWidth = parseInt(window.getComputedStyle(btnBar).width, 10);
    evn.preventDefault();
    imageAfter.style.width = "100%";
    imageBar.classList.add("example__controls-bar--after");
    btnBar.style.left = barWidth - btnWidth + "px";
  });

  if (mediaTablet) {
    imageAfter.style.width = parseInt(window.getComputedStyle(btnBar).left, 10) / 4 + "%";

    btnBar.onmousedown = function(e) {
      var barWidth = parseInt(window.getComputedStyle(imageBar).width, 10);
      var btnWidth = parseInt(window.getComputedStyle(btnBar).width, 10);
      var startOffset = e.pageX;
      var oldOffset = parseInt(window.getComputedStyle(btnBar).left, 10);
      function moveAt(e) {
        newOffset = startOffset - e.pageX;
        if (newOffset > 0) {
          var widthRight = oldOffset - newOffset;
          btnBar.style.left = widthRight + "px";
          imageAfter.style.width = widthRight / 4 + "%";
          if (parseInt(btnBar.style.left, 10) <= 0) {
            btnBar.style.left = 0;
          }
        }
        if (newOffset < 0) {
          var widthLeft = oldOffset + Math.abs(newOffset);
          btnBar.style.left = widthLeft + "px";
          imageAfter.style.width = widthLeft / 4 + "%";
          if (parseInt(btnBar.style.left, 10) >= (barWidth - btnWidth)) {
            btnBar.style.left = barWidth - btnWidth + "px";
          }
        }
      }
      document.onmousemove = function(e) {
        moveAt(e);
      }
      document.onmouseup = function() {
        document.onmousemove = null;
        btnBar.onmouseup = null;
      }
    }
  }
}
