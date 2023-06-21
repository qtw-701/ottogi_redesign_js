'use strict';

// header event
const headerToggle = document.querySelector('.header__toggle');
const navbar = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.header__nav__close');
headerToggle.addEventListener('click', () => {
  navbar.classList.remove('nav__hide');
});
closeBtn.addEventListener('click', () => {
  navbar.classList.add('nav__hide');
});

// top button
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
const topBtn = document.querySelector('.top__btn');
document.addEventListener('scroll', () => {
  if (window.scrollY >= headerHeight) {
    topBtn.style.opacity = 1;
    topBtn.style.pointerEvents = 'all';
  } else {
    topBtn.style.opacity = 0;
    topBtn.style.pointerEvents = 'none';
  }
});
