//menu header
$('.js-mobile').on('click', function(){
  $(this).toggleClass("js-mobile--close");
  $("html").toggleClass("js-locked");
  $(".header-nav").toggleClass("active");
});
$('.header-language span').on('click', function(){
  $(this).next("ul").slideToggle();
});
$('.news-show__option-fill span').on('click', function(){
    $(this).next("ul").slideToggle();
});

const swiper = new Swiper(".mv-list", {
  loop: true,
  
  effect: "fade",
  
  fadeEffect: {
    crossFade: true,
  },
  
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".show-menu", {
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    loop: true,
    pagination: {
    el: ".show-menu__nav-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".show-menu__nav-next",
        prevEl: ".show-menu__nav-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 1,
            
        },
        768: {
            slidesPerView: 3,
        },
    }
});
var swiper3 = new Swiper(".support-list", {
    slidesPerView: 5,
    freeMode: true,
    loop: true,
    pagination: {
    el: ".support-list__pagination",
    clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        375: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        }
    }
});

//backtop
jQuery(document).ready(function ($) {
  
    $(window).on("scroll", function () {
        if($(window).scrollTop()> $("#footer").offset().top - $(window).outerHeight() + 24){
            $("#backtop").addClass("active");
        }
        else {
            $("#backtop").removeClass("active");
        }
        if ($(this).scrollTop() > 10) {
            $("#backtop").addClass("on");
        } else {
            $("#backtop").removeClass("on");
        }
    });
    $('#backtop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

var swiper4 = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper5 = new Swiper(".mySwiper2", {
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    thumbs: {
        swiper: swiper4,
    },
});