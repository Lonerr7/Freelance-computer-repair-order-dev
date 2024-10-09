import * as functions from './modules/functions.js';
import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// Checking if browsers supports .webp
functions.isWebp();

// popup
const dialog = document.querySelector('.popup');
const closeModalBtn = dialog.querySelector('.popup__close');
const openModalBtns = document.querySelectorAll('.open-modal');

const closeOnOverlayClick = ({currentTarget, target}) => {
  const dialog = currentTarget;
  const isOverlayClick = target === dialog;

  if (isOverlayClick) {
    closeModal();
  }
}

const openModalAndBlockScroll = () => {
  dialog.showModal();
  document.body.classList.add('scroll-block');
}

const returnScroll = () => {
  document.body.classList.remove('scroll-block');
}

const closeModal = () => {
  dialog.close();
  returnScroll();
}

openModalBtns.forEach(btn => {
  btn.addEventListener('click', openModalAndBlockScroll);
})
closeModalBtn.addEventListener('click', closeModal);
dialog.addEventListener('click', closeOnOverlayClick);
dialog.addEventListener('cancel', returnScroll);

// Slider
new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
});

// Burger
const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu__list');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    burgerBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
  })
})