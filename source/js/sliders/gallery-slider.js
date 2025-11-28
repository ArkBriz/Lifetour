import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/css';

const breakpoint = window.matchMedia('(max-width: 1439px)');
const wrapper = document.querySelector('.gallery__slider .swiper-wrapper');

let slider = null;

const enableSwiper = () => {
  if(!slider) {
    slider = new Swiper('.gallery__slider', {
      modules: [Navigation],

      slidesPerView: 'auto',
      spaceBetween: 5,
      speed: 1000,
      loop: true,

      navigation: {
        nextEl: '.gallery__slider .swiper-button-next',
        prevEl: '.gallery__slider .swiper-button-prev',
      },

      breakpoints: {
        768: {
          allowTouchMove: false,
        }
      }
    });
  }
};

const disableSwiper = () => {
  if (slider) {
    slider.destroy(true, true);
    slider = null;
  }
};

const checkBreakpoint = () => {
  if (breakpoint.matches) {
    enableSwiper();
  } else {
    disableSwiper();
  }
};

checkBreakpoint();
breakpoint.addEventListener('change', checkBreakpoint);
