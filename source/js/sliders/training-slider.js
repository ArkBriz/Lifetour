import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/css';

new Swiper('.training__slider', {
  modules: [Navigation],

  spaceBetween: 15,

  navigation: {
    nextEl: '.training__slider .swiper-button-next',
    prevEl: '.training__slider .swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: false,
    },

    1440: {
      slidesPerView: 4,
    }
  },
});
