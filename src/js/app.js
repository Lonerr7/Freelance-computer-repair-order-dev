import * as functions from './modules/functions.js';
import Swiper from 'swiper/bundle';

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

  breakpoints : {
    800: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 2,
    },
    100: {
      slidesPerView: 1
    }
  }
});

// Burger
const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu__list');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  if (document.body.classList.contains('scroll-block')) {
    document.body.classList.remove('scroll-block')
  } else {
    document.body.classList.add('scroll-block')
  }

});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    burgerBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('scroll-block')
  })
})

// Tabs
const tabBtns = document.querySelectorAll('.pricing__btn');
const tabsContainer = document.querySelector('.pricing__buttons');
const tabsContent = document.querySelectorAll('.pricing__block');

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.pricing__btn');

  if (!clicked) {
    return;
  }
  
  tabBtns.forEach(tab => {
    tab.classList.remove('pricing__btn--active');
  })
  clicked.classList.add('pricing__btn--active');

  // Active tabs content
  tabsContent.forEach(tabContent => {
    tabContent.classList.remove('pricing__block--active');
  })
  document.querySelector(`.pricing__block--${clicked.dataset.btn}`).classList.add('pricing__block--active')
})

// Send form
const mailPath = 'mail.php'

document.querySelectorAll('.feedback').forEach( (e) => {

	e.addEventListener('submit', function(e) {

		let th      = this,
		    params  = new FormData(this),
		    request = new XMLHttpRequest()

		request.open('POST', mailPath, true)
		request.send(params)

		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function() { th.reset() }, 1000)
				alert('Thank you!')
			}
		}

		e.preventDefault()

	})

})