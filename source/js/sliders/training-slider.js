import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/css';

new Swiper('.training__slider', {
  modules: [Navigation],

  spaceBetween: 15,
  speed: 700,
  centeredSlides: true,
  initialSlide: 2,

  navigation: {
    nextEl: '.training__slider .swiper-button-next',
    prevEl: '.training__slider .swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: false,
      centeredSlides: false,
      initialSlide: 0,
    },

    1440: {
      slidesPerView: 4,
    }
  },
});
