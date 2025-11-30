import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/css';

new Swiper('.reviews__slider', {
  modules: [Navigation],

  spaceBetween: 15,
  speed: 1000,

  navigation: {
    nextEl: '.reviews__slider .swiper-button-next',
    prevEl: '.reviews__slider .swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      allowTouchMove: false,
    },

    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
    }
  },
});
