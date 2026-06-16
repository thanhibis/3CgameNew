"use strict";

//menu header
$('.js-mobile').on('click', function () {
  $(this).toggleClass("js-mobile--close");
  $("html").toggleClass("js-locked");
  // $(".nav-menu").slideToggle();
  // e.preventDefault();
  $(".header-nav").fadeToggle();
});
$('.header-language span').on('click', function () {
  $(this).next("ul").slideToggle();
});
const swiper = new Swiper(".mv-list", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiper2 = new Swiper(".show-menu", {
  slidesPerView: 3,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".show-menu__nav-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".show-menu__nav-next",
    prevEl: ".show-menu__nav-prev"
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});

// $(document).on("click", function(){
// 	$("aa").hide();
// });

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 10) {
//         $("#header").addClass("js-fixed");
//     }
//     else {
//         $("#header").removeClass("js-fixed");
//     }
// });

//resize slider load page
// var window_type;
// var $window = $(window);
// if ($window.width() <= 1024) {
//     window_type = 'sp';
// } else {
//     window_type = 'pc';
// }
// $(window).resize(function() {
//     if($window.width() <= 1024){
//         if( (window_type != 'sp') ){
//             location.reload();
//         }
//     }else{
//         if(window_type != 'pc'){
//             location.reload();
//         }
//     }
// });

// $(window).on("load resize",function () {
//     $("main").css("padding-top",$("#header").outerHeight());
// });