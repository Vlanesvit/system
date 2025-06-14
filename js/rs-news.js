/* ====================================
Инициализация слайдера в блоке rs-news
==================================== */
function initNewsSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-news__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-news');

		sliderBlocks.forEach(sliderBlock => {
			const sliders = sliderBlock.querySelectorAll('.rs-news__slider');

			sliders.forEach(slider => {
				const arrowPrev = sliderBlock.querySelector('.rs-news__button-prev');
				const arrowNext = sliderBlock.querySelector('.rs-news__button-next');
				const pagination = sliderBlock.querySelector('.rs-news__pagination');

				const swiperMain = new Swiper(slider, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 800,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					touchStartPreventDefault: false,

					// Цикличность слайдера
					// loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
					},

					slidesPerView: 4,
					spaceBetween: 30,

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							slidesPerView: 1.22,
							spaceBetween: 24,
						},
						767.98: {
							slidesPerView: 2.4,
							spaceBetween: 24,
						},
						991.98: {
							slidesPerView: 3,
							spaceBetween: 24,
						},
						1439.98: {
							slidesPerView: 3,
							spaceBetween: 24,
						}
					},
				});
			});

		});
	}
}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initNewsSliders();
});