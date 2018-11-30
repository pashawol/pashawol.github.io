jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS




	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});

	$(document).mouseup(function (e) {
		var container = $(".hidden-mnu.active");
		if (container.has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});
	// закрыть меню при горизонтальном свайпе
	$('.hidden-mnu.active').swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu.active").removeClass("active");
				$("body, html").removeClass("fixed");
			}
			if (direction == 'right') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu.active").removeClass("active");
				$("body, html").removeClass("fixed");
			}
		},
		triggerOnTouchEnd: false,
	});
	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню
		$(" .btn-top").click(function () {
			var elementClick = $('header');
			var destination = $(elementClick).offset().top;

			$('html, body').animate({
				scrollTop: destination
			}, 1100);

			return false;
		});

		var topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});


		var topH = $(window).height() / 2;
		// console.log(topH);
		if ($(this).scrollTop() > topH) {

			$('.btn-top  ').addClass('active');

		} else if ($(this).scrollTop() < topH) {

			$('.btn-top  ').removeClass('active');

		}
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {

				$('.btn-top  ').addClass('active');
			} else if ($(this).scrollTop() < topH) {

				$('.btn-top ').removeClass('active');
			}
		});
		// конец добавил
	}

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



 


	var icon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.2 477.2" style="enable-background:new 0 0 477.2 477.2;" xml:space="preserve"> <g> 	<path class="st0" d="M145.2,238.6L360.7,23.1c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0L116.5,229.1c-5.3,5.3-5.3,13.8,0,19.1 	l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.2,238.6z"/>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.s-news-fead__slider--js').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		// dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		// centerMode: true,
		dots: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{

			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}

		}]
	});
	
	$('.s-project-slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		// centerMode: true,
		dots: false,
		// focusOnSelect: true ,
		// variableWidth: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [
			{

			breakpoint: 1199,
			settings: {
				slidesToShow: 5,
			}

		},
		
			{

			breakpoint: 991,
			settings: {
				slidesToShow: 4,
			}

		},
		
			{

			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}

		},
		
			{

			breakpoint: 440,
			settings: {
				slidesToShow: 2,
			}

		},

	]
	});

	$('.s-news-fead__slider--js, .s-project-slider--js')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});


	$(".s-about__slider").slick({
		dots: true,
		customPaging: function (slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<span>' + thumb + '</span>';
		},

		arrows: true,
		infinite: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		appendDots: '.s-about__dots-wrap',
		dotsClass: 'slick-dots-custom',
		prevArrow: arrr2,
		nextArrow: arrl2,


	});


	// modal window
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	// / modal window

	// modal галерея
	$(".gal").each(function () {

		$(this).find("a").magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				// titleSrc: function(item) {
				//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				// }
			},
			gallery: {
				enabled: true
			}
		});
	})
	// /modal галерея


	// mask for input
	var customOptions = {
		onKeyPress: function (val, e, field, options) {

			if (val.replace(/\D/g, '').length === 2) {
				val = val.replace('8', '');
				field.val(val);
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input
	if ($("div").is("#map")) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
					center: [55.70103956904464, 37.5890599999999],
					zoom: 17,
					behaviors: ['drag'],

					// controls: ["zoomControl", "fullscreenControl"]
				}, {
					searchControlProvider: 'yandex#search'
				}),


				myPlacemark = new ymaps.Placemark([55.70103956904464, 37.5890599999999], {
					hintContent: '117312, г.Москва,   ул.Вавилова, д.9А, стр. 5',
					balloonContent: '117312, г.Москва,  ул.Вавилова, д.9А, стр. 5 '
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'img/mark.png',
					// Размеры метки.
					iconImageSize: [41, 59],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-22, -70]
				})

			myMap.geoObjects
				.add(myPlacemark)



		});
	}

});