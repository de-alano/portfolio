const init = (() => {
	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	// Initialize Swiper
	const breakpoint = window.matchMedia('(min-width:56.25em)');
	// Keep track of swiper instances to destroy later
	let mySwiper;
	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			return enableSwiper();
		} else if (breakpoint.matches === false) {
			if (mySwiper !== undefined) mySwiper.destroy(true, true); // Destroy swiper on mobile
			return;
		}
	};

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

		// Add swiper to cta button -> scroll to contact section
		document.querySelector('.hero__btn').addEventListener('click', (e) => {
			e.preventDefault();
			mySwiper.slideTo(5, 1500); // 5 - contact section
		})
	};

	// Keep an eye on viewport size changes
	breakpoint.addListener(breakpointChecker);
	// Kickstart
	breakpointChecker();

	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	// INITIALIZE DRAGGABLE PROJECTS SLIDER
	const flkty = new Flickity('.projects-gallery', {
		// options
		cellAlign: 'left',
		contain: true,
	});

	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	// HAMBURGER MENU
	const menuIcon = document.querySelector('.header__hamburger');
	const nav = document.querySelector('.navigation');
	const navLinks = [...document.querySelectorAll('.navigation__link')];

	menuIcon.addEventListener('click', () => {
		menuIcon.classList.toggle('change');
		nav.classList.toggle('change');
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('change');
			menuIcon.classList.remove('change');
		});
	});


	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	// INITIALIZE SMOOTH SCROLL 
	// -> menu items
	const scroll = new SmoothScroll('.navigation a[href*="#"]', {
		speed: 700
	});
	// -> cta button
	const cta = new SmoothScroll('.hero__caption-wrapper a[href*="#"]', {
		speed: 700
	});

	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	// INITIALIZE ANIMATE ON SCROLL
	let scrollAnimations;

	scrollAnimations = sal({
		once: false
	});

	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	/* ------------------------------------------------------------------------------------------------------------------------------------------------ */
	// PRELOADER - OPTIONS
	window.addEventListener('load', () => {
		const preloader = document.querySelector('.loader');
		setTimeout(() => {
			preloader.classList.add('loader-finish');
		}, 2000);
	});
})();


