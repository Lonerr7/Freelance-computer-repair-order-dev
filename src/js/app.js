import * as functions from './modules/functions.js';

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

