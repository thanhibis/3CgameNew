"use strict";

//menu header
$('.js-mobile').on('click', function () {
  $(this).toggleClass("js-mobile--close");
  $("html").toggleClass("js-locked");
  $(".header-nav").toggleClass("active");
});
$('.news-show__option-fill span').on('click', function () {
  $(this).next("ul").slideToggle();
});
$('.header-account__content-language dt').on('click', function () {
  $(this).next("dd").slideToggle();
});
$('.header-account__img').on('click', function (e) {
  e.stopPropagation();
  $(this).next('.header-account__content').toggleClass('active');
  $('.header-language ul').removeClass('active');
});
$('.header-language span').on('click', function (e) {
  e.stopPropagation();
  $(this).next('ul').toggleClass('active');
  $('.header-account__content').removeClass('active');
});
$(document).on('click', function (e) {
  if (!$(e.target).closest('.header-account').length) {
    $('.header-account__content').removeClass('active');
  }
  if (!$(e.target).closest('.header-language').length) {
    $('.header-language ul').removeClass('active');
  }
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
  centeredSlides: true,
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
  },
  breakpoints: {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 1
    },
    768: {
      slidesPerView: 3
    }
  }
});
var swiper3 = new Swiper(".support-list", {
  slidesPerView: 5,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".support-list__pagination",
    clickable: true
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    375: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 4
    },
    1400: {
      slidesPerView: 5
    }
  }
});
var swiper4 = new Swiper(".recruit-benefits", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".recruit-benefits__pagination",
    clickable: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    700: {
      slidesPerView: 2
    }
  }
});

//backtop
jQuery(document).ready(function ($) {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $("#footer").offset().top - $(window).outerHeight() + 24) {
      $("#backtop").addClass("active");
    } else {
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
  watchSlidesProgress: true
});
var swiper5 = new Swiper(".mySwiper2", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  thumbs: {
    swiper: swiper4
  }
});
if ($("#uploadBox").length > 0) {
  const uploadBox = document.getElementById("uploadBox");
  const fileInput = document.getElementById("fileInput");
  const uploadText = document.getElementById("uploadText");
  uploadBox.addEventListener("click", () => {
    fileInput.click();
  });
  fileInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
      uploadText.textContent = file.name;
      console.log(file);
    }
  });
}
jQuery('.open-popup').click(function (e) {
  $("html").addClass("js-locked");
  $(".popup").addClass("active");
  e.preventDefault();
});
$('.close-popup').on('click', function () {
  $("html").removeClass("js-locked");
  $(".popup").removeClass("active");
});
const input = document.querySelector('#amount');
input.addEventListener('input', function () {
  // Chỉ giữ lại số
  let value = this.value.replace(/\D/g, '');
  if (!value) {
    this.value = '';
    return;
  }

  // Format theo VN
  this.value = Number(value).toLocaleString('vi-VN');
});
const amountInput = document.querySelector('#amount-detail');
const amountRadios = document.querySelectorAll('input[name="amount"]');
function toggleAmountInput() {
  const checked = document.querySelector('input[name="amount"]:checked');
  console.log(checked);
  if (checked.value === 'other') {
    amountInput.style.display = 'block';
  } else {
    amountInput.style.display = 'none';
  }
}

// Gán sự kiện cho tất cả radio
amountRadios.forEach(radio => {
  radio.addEventListener('change', toggleAmountInput);
});

// Chạy khi tải trang
toggleAmountInput();