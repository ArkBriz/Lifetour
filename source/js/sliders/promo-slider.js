import Swiper from "swiper";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.hero__slider', {
  modules: [Pagination],
  loop: true,
  autoHeight: true,

  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
  },

  breakpoints: {
    1440: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    },
  },
});
