const body = document.querySelector('.page-body');
const menu = document.querySelector('.page-header__nav');
const toggler = document.querySelector('.page-header__toggler');
const links = document.querySelectorAll('.page-header__nav .nav__link');

toggler.addEventListener('click', () => {
  menu.classList.toggle('page-header__nav--closed');
  toggler.classList.toggle('page-header__toggler--open');

  const isOpen = toggler.classList.contains('page-header__toggler--open');
  toggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  body.classList.toggle('page-body--lock', isOpen);
});

const closeMenu = () => {
  menu.classList.add('page-header__nav--closed');
  toggler.classList.remove('page-header__toggler--open');
  toggler.setAttribute('aria-expanded', 'false');
  body.classList.remove('page-body--lock');
};

links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const desktopBreakpoint = window.matchMedia('(min-width: 1440px)');

desktopBreakpoint.addEventListener('change', (evt) => {
  if (evt.matches) {
    closeMenu();
  }
});
