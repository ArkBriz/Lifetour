import Swiper from "swiper";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlider = new Swiper('.hero__slider', {
  modules: [Pagination],
  loop: true,
  autoHeight: true,
  speed: 1000,

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

// Ensure Swiper recalculates height after fonts load or full page load
const updateHeroAutoHeight = () => {
  try {
    if (heroSlider && typeof heroSlider.updateAutoHeight === 'function') {
      heroSlider.updateAutoHeight();
    }
  } catch (e) {
    // ignore
  }
};

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateHeroAutoHeight).catch(() => {});
}

window.addEventListener('load', updateHeroAutoHeight);
window.addEventListener('resize', updateHeroAutoHeight);
