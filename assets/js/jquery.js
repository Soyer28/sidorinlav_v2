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

   let counterSlider = 6;
   let left = 400;
   $("#slide-2007").css("background-image", "none");
   $("#slide-2008").css("background-image", "none");

   $(".ui-slider-handle").click(function () {
      if(left > 800) {
         left = 400;
      }
      if(counterSlider >= 6 && counterSlider < 8) {
         let slide = `#slide-200${counterSlider}`;
         $(slide).css("background-image", "none");
         $(slide + '> .block-description > p').css("color", "black");
         $(slide + '> .block-description > span').css("color", "black");
         let nextSlide = `#slide-200${++counterSlider}`;
         $(".ui-state-default").animate({
            left: left
         }, 400);
         left = left + 400;
         $(nextSlide).css("background-image", "linear-gradient(to top, #1d1d1dbd, #00000083), url(../img/2.png)");

         $(nextSlide + '> .block-description > span').css("color", "red");
         $(nextSlide + '> .block-description > p').css("color", "red");

      } else {
         let slide = `#slide-200${counterSlider}`;
         $(slide).css("background-image", "none");
         $(slide + '> .block-description > p').css("color", "black");
         $(slide + '> .block-description > span').css("color", "black");
         counterSlider = 6;
         slide = `#slide-200${counterSlider}`;
         $(".ui-state-default").animate({
            left: 0
         }, 400);
         $(slide).css("background-image", "linear-gradient(to top, #1d1d1dbd, #00000083), url(../img/2.png)");

         $(slide + '> .block-description > span').css("color", "red");
         $(slide + '> .block-description > p').css("color", "red");
      }
   });


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