// var mySwiper = new Swiper('.swiper-container-h', {
// 	// Optional parameters
// 	direction: 'vertical',
// 	loop: false,
// 	speed: 1000,
// 	mousewheel: true,
// 	keyboard: {
// 		enabled: true,
// 	},
// 	pagination: {
// 		el: '.swiper-pagination-h',
// 		renderBullet: function (index, className) {
// 			var section = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-section');
// 			return '<span class="' + className + '">' + section + '</span>';
// 		},
// 		clickable: true
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// })

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width:56.25em)');
// keep track of swiper instances to destroy later
let mySwiper;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function () {
	if (breakpoint.matches === true) {

		return enableSwiper();

	} else if (breakpoint.matches === false) {
		if (mySwiper !== undefined) mySwiper.destroy(true, true);
		// document.querySelectorAll('section').forEach(section => section.classList.remove('swiper-slide'));
		// document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');
		// document.querySelector('.swiper-container-h').classList.remove('swiper-container-h');
		// or/and do nothing
		return;
	}
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiper = function () {
	mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'vertical',
		loop: false,
		speed: 1000,
		mousewheel: true,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: '.swiper-pagination-h',
			renderBullet: function (index, className) {
				var section = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-section');
				return '<span class="' + className + '">' + section + '</span>';
			},
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

// PROJECTS SLIDER
const flkty = new Flickity('.projects-gallery', {
	// options
	cellAlign: 'left',
	contain: true,
});

// HAMBURGER MENU
const menuIcon = document.querySelector('.header__hamburger');
const nav = document.querySelector('.navigation');
const navLinks = [...document.querySelectorAll('.navigation__link')];
console.log(navLinks);

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('change');
	nav.classList.toggle('change');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		nav.classList.remove('change');
	});
});


// PRELOADER
window.addEventListener('load', () => {
	const preloader = document.querySelector('.loader');
	setTimeout(() => {
		preloader.classList.add('loader-finish');
	}, 2000);
});
