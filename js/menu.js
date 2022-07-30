$( document ).ready(function() {
  $(".main-nav__toggle").on('click', function() {
    $(".site-list__item").toggleClass("site-list__item site-list__item--active");
    $(".site-list__item--active").toggleClass("site-list__item site-list__item--active");
  });
  $(".main-nav__toggle--close").on('click', function() {
    $(".site-list__item").toggleClass("site-list__item--active site-list__item");
  });
});