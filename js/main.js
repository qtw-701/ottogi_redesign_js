'use strict';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

// sns filtering
const categories = document.querySelector('.sns__categories');
const snsLists = document.querySelectorAll('.sns__list');
const snsListsContainer = document.querySelector('.sns__lists');

filterSNS('daily');

categories.addEventListener('click', e => {
  const target = e.target;
  const filter = target.dataset.category;

  handleActiveSelection(target);
  filterSNS(filter);
});

function handleActiveSelection(target) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  target.classList.add('selected');
}

function filterSNS(filter) {
  snsLists.forEach(snsList => {
    if (!filter) {
      return;
    }
    if (filter === snsList.dataset.type) {
      snsList.style.display = 'block';
    } else {
      snsList.style.display = 'none';
    }
  });
}

// Slide
const slides = document.querySelector('.slides');

window.addEventListener('load', () => {
  resizeSlidesHeight();
});

window.addEventListener('resize', () => {
  resizeSlidesHeight();
});

function resizeSlidesHeight() {
  const slideHeight = document
    .querySelector('.slide > a > img')
    .getBoundingClientRect().height;
  slides.style.height = `${slideHeight}px`;
}

const swiperSlide = new Swiper('.slides', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperProduct = new Swiper('.products__slide-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
