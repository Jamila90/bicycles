'use strict';

var mainHeader = document.querySelector('.main-header');
var mainNav = document.querySelector('.main-nav');
var toggleBtn = document.querySelector('.main-header__toggle');

mainNav.classList.remove('main-nav--nojs');
toggleBtn.classList.remove('main-header__toggle--nojs');
mainHeader.classList.remove('main-header--nojs');

toggleBtn.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav--closed');
});

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('main-header__toggle--closed');
});