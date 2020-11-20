'use strict';

//слайдер
let sliderItem = document.querySelectorAll('.slider-item');
let slide = 0;
let slideInterval = setInterval(nextSlide, 4000);
let next = document.querySelector('.slider-prev');
let prev = document.querySelector('.slider-next');

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function nextSlide() {
    clearInterval(slideInterval);
    slideShow(slide + 1);
}

function prevSlide() {
    clearInterval(slideInterval);
    slideShow(slide - 1);
}

function slideShow(n) {
    slideInterval = setInterval(nextSlide, 4000);
    sliderItem[slide].classList.remove('slider-item-show');
    slide = (n+sliderItem.length)%sliderItem.length;
    sliderItem[slide].classList.add('slider-item-show');
}


// (function()(
//   document.querySelector('.button-close').addEventListener('click', function() {
//   document.querySelector('.page-active').classList.remove('.page-active');
// });
// })()


//popup

let buttonShow = document.querySelector('.button-show');
let buttonHide = document.querySelector('.button-hide');
let popup = document.querySelector('.page');

buttonShow.addEventListener ('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup-open');
})


buttonHide.addEventListener('click', function() {
  popup.classList.remove('popup-open');
});

