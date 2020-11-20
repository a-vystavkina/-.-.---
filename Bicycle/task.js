'use strict';


let sliderItem = document.querySelectorAll('.slider__item');
let sliderDot = document.querySelectorAll('.slider__dot');
let index = 0;



for (let i = 0; i < sliderDot.length; i++) {
	sliderDot[i].onclick = () => {dotSlide(i)};
}

function changeSlide (key) {
	let classSlideArrow = event.target.classList;
	
	sliderItem[index].classList.remove('slider__item_active');

	sliderItem[index].classList.add('slider__item_active');
}

function dotSlide(key) {
	sliderItem[index].classList.remove('slider__item_active');
	sliderItem[key].classList.add('slider__item_active')
	index = key;
}