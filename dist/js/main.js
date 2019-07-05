var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'vertical',
	loop: false,
	speed: 1000,
	mousewheel: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
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