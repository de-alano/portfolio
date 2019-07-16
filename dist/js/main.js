var mySwiper = new Swiper('.swiper-container-h', {
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
	breakpoints: {
		768: {
			direction: 'horizontal',
		}
	}
})

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

// navLinks.forEach(link => {
// 	link.addEventListener('click', () => {
// 		nav.classList.remove('change');
// 	});
// });
