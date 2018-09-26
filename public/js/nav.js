/*
  Function to toggle side nav when hamburger icon is clicked
*/
$(function () {
  if ($(".banner-container").length > 0) {
    $(".nav-bar").addClass("nav-home");
    $(".nav-bar").removeClass("white-nav");
    $("#nav-dummy").removeClass("nav-dummy");
  } 
});

$(function () {
  $(".nav-hamburg").click(function () {
    $(".nav-bar").toggleClass("body-extend");
    $(".side-nav").toggleClass("side-nav-extend");
    $(".page").toggleClass("body-extend");
    $("body").toggleClass("no-scroll");
  });
});
