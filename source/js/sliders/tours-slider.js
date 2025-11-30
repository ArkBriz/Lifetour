import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/css';

new Swiper('.tours .swiper', {
  modules: [Navigation],
  spaceBetween: 15,
  autoHeight: true,
  speed: 700,

  navigation: {
    nextEl: '.tours .swiper-button-next',
    prevEl: '.tours .swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      allowTouchMove: false,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
