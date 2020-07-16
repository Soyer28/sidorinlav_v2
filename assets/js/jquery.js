$(document).ready(function ($) {

   //START SCROLL-TO-TOP

   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.scroll-top').fadeIn();
      } else {
         $('.scroll-top').fadeOut();
      }
   });
   $('.scroll-top').click(function () {
      $("html, body").animate({
         scrollTop: 0
      }, 600);
      return false;
   });

   //END SCROLL-TO-TOP

   //START SLIDER

   $(".ui-slider-handle").click(function () {
      $(".ui-state-default").animate({
         left: 400
      }, 400);
      $("#slide-2006").css("background-image", "none");
      $(".color-white").css("color", "#000");
      $("#slide-2007").css("background-image", "linear-gradient(to top, #1d1d1dbd, #00000083), url(../img/2.png)");
      $("#slide-2007").css("color", "#fff");
   });

   $(".ui-slider-handle").dblclick(function () {
      $(".ui-state-default").animate({
         left: 800
      }, 400);
      $("#slide-2006").css("background-image", "none");
      $("#slide-2007").css("background-image", "none");
      $("#slide-2009").css("color", "#000");
      $(".color-grey").css("color", "#fff");
      $("#slide-2007").css("color", "#000");
      $("#slide-2009").css("background-image", "linear-gradient(to top, #1d1d1dbd, #00000083), url(../img/2.png)");
      $("#slide-2009").css("color", "#fff");
   });


   $("#slide-2007").css("background-image", "none");
   $("#slide-2009").css("background-image", "none");

   //END SLIDER

   //START ANIMATIONS

   var waypoint = new Waypoint({
      element: document.getElementById('header'),
      handler: function (direction) {
         $(".anim1").addClass("animated fadeInLeft");
      },
      offset: 60
   });

   var waypoint = new Waypoint({
      element: document.getElementById('section-biografy'),
      handler: function (direction) {
         $(".anim2").addClass("animated fadeInLeft");
      },
      offset: 60
   });

   var waypoint = new Waypoint({
      element: document.getElementById('section-biografy'),
      handler: function (direction) {
         $(".anim3").addClass("animated fadeInRight");
      },
      offset: 60
   });

   var waypoint = new Waypoint({
      element: document.getElementById('header'),
      handler: function (direction) {
         $(".anim4").addClass("animated fadeInDown");
      },
      offset: 60
   });

   var waypoint = new Waypoint({
      element: document.getElementById('section-around-biografy'),
      handler: function (direction) {
         $(".anim5").addClass("animated slideInUp");
      },
      offset: 60
   });

   var waypoint = new Waypoint({
      element: document.getElementById('section-about'),
      handler: function (direction) {
         $(".anim6").addClass("animated fadeInLeft");
      },
      offset: 60
   });

   var waypoint = new Waypoint({
      element: document.getElementById('section-video-about'),
      handler: function (direction) {
         $(".anim7").addClass("animated fadeInLeft");
      },
      offset: 60
   });


   //END ANIMATIONS

});