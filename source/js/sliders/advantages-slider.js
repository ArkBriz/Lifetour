import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const sliderContainer = document.querySelector('.advantages__slider');
const wrapper = document.querySelector('.advantages__slider .swiper-wrapper');
const breakpoint = window.matchMedia('(min-width: 1440px)');

let slider = null;

const addExtraSlides = () => {
  const extraSlides = [
    {
      heading: 'Безопасность',
      content: 'Уделяем внимание безопасности клиентов, внедряя строгие процедуры и протоколы безопасности. Имеем планы действий на случай непредвиденных обстоятельств и даём гарантию полной безопасности во время всего тура.',
      modifier: 'advantages__slide--safety',
    },
    {
      heading: 'Экспертиза и знания',
      content: 'Наша команда опытных гидов имеет обширные знания о местности, погодных условиях и технике безопасности. Это гарантирует, что наши клиенты находятся в надёжных руках и могут в полной мере насладиться опытом без опасений.',
      modifier: 'advantages__slide--crown',
    },
    {
      heading: 'Оборудование и снаряжение',
      content: 'Мы предоставляем клиентам все необходимое оборудование, необходимое для путешествия. Это избавляет клиентов от необходимости покупать, брать с собой снаряжение, что делает путешествие более удобным и экономически выгодным.',
      modifier: 'advantages__slide--boots',
    },
    {
      heading: 'Индивидуальные маршруты',
      content: 'Предлагаем широкий выбор туров, отвечающих различным уровням мастерства и интересам. Мы также можем адаптировать маршруты к вашим конкретным потребностям и предпочтениям, чтобы вы получили индивидуальный опыт.',
      modifier: 'advantages__slide--route',
    },
    {
      heading: 'Бережное отношение к природе',
      content: 'Уделяем первостепенное внимание охране окружающей среды и гарантируем, что туры оказывают минимальное воздействие на природную среду. Наша компания следует принципу «Не оставлять следов».',
      modifier: 'advantages__slide--leaf',
    },
  ];

  extraSlides.forEach((slide) => {
    const element = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = slide.heading;

    const p = document.createElement('p');
    p.textContent = slide.content;

    element.className = `advantages__slide swiper-slide ${slide.modifier} advantages__slide--extra`;
    element.appendChild(h3);
    element.appendChild(p);
    wrapper.appendChild(element);
  });
};

const enableSwiper = () => {
  if (!slider) {
    sliderContainer.classList.remove('is-disabled');
    addExtraSlides();

    slider = new Swiper('.advantages__slider', {
      modules: [Navigation],

      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 30,
      speed: 1500,
      allowTouchMove: false,
      centeredSlides: true,
      initialSlide: 2,
      loop: true,

      navigation: {
        nextEl: '.advantages__slider .swiper-button-next',
        prevEl: '.advantages__slider .swiper-button-prev',
      },
    });
  }
};

const disableSwiper = () => {
  if (slider) {
    slider.destroy(true, true);
    slider = null;
  }
  const extraSlides = document.querySelectorAll('.advantages__slide--extra');
  extraSlides.forEach((slide) => slide.remove());
  sliderContainer.classList.add('is-disabled');
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
