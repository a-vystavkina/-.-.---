'use strict';

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


var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".page"); 
 var close = document.querySelector(".button-close");

link.addEventListener("click", function (evt) { 
	evt.preventDefault();
	popup.classList.add("page-active");
 });

close.addEventListener("click", function (evt) { 
 evt.preventDefault(); 
 popup.classList.remove("page-active"); 
 });
