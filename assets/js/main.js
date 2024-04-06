new WOW().init();

// Minus Plus Counter 
$(document).ready(function () {
  $(".loader-wrapper").fadeOut("slow")
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// Banner Slider 
var swiper = new Swiper(".bannerSlider", {
  loop: true,
  effect: "fade",
  autoplay: {
    disableOnInteraction: false
  },
  speed: 1500,
  slidesPerView: 1
});

// Best Hotels Slider 
var swiper = new Swiper(".hotelSlider", {
  loop: true,
  navigation: {
    nextEl: ".hotelSlider-next",
    prevEl: ".hotelSlider-prev",
  },
  breakpoints: {
    '575': {
      slidesPerView: 2
    },
    '992': {
      slidesPerView: 3
    },
    '1400': {
      slidesPerView: 4
    }
  },
  freeMode: true
});

// Properties Slider 
var swiper = new Swiper(".propertiesSlider", {
  loop: true,
  navigation: {
    nextEl: ".propertiesSlider-next",
    prevEl: ".propertiesSlider-prev",
  },
  breakpoints: {
    '575': {
      slidesPerView: 2
    },
    '992': {
      slidesPerView: 3
    },
    '1400': {
      slidesPerView: 4
    }
  },
  freeMode: true
});

// Review Slider 
var swiper = new Swiper(".review-slider", {
  loop: true,
  navigation: {
    nextEl: ".review-slider-next",
    prevEl: ".review-slider-prev",
  },
  breakpoints: {
    '575': {
      slidesPerView: 1
    }
  },
  freeMode: true,
  autoplay: {
    disableOnInteraction: false
  },
  speed: 500,
});

// Tabs script
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// Header Sticky

// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 500) {
//     $('header').addClass('header-sticky');
//   }
//   else {
//     $('header').removeClass('header-sticky');
//   }
// });
