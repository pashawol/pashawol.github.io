jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

 
	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-menu-mobile--js").click(function () {

		$(".toggle-menu-mobile--js").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".menu-mobile--js").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});
	$('.menu-mobile--js ul li a').on('click', function () {
		$(".menu-mobile--js .toggle-mnu").click();
	});
	$(document).mouseup(function (e) {
		var container = $(".menu-mobile--js.active");
		if (container.has(e.target).length === 0) {
			$(".toggle-menu-mobile--js").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".menu-mobile--js").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});
	// закрыть меню при горизонтальном свайпе
	$('.menu-mobile--js.active').swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				$(".toggle-menu-mobile--js").removeClass("on");
				$(".menu-mobile--js.active").removeClass("active");
				$("body, html").removeClass("fixed");
			}
			if (direction == 'right') {
				$(".toggle-menu-mobile--js").removeClass("on");
				$(".menu-mobile--js.active").removeClass("active");
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

		var topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
	}

	if (window.matchMedia("(min-width: 576px)").matches) {

		$(".toggle-menu-mobile--js").removeClass("on");
		// $("body").removeClass("fixed");
		$(".menu-mobile--js").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();

 


	var icon = '<svg   width="44" height="82" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 44 82"><defs><path d="M155,3381.00403l-38.00407,-38.00391l38.00407,-38.00418" id="Path-0"/><clipPath id="ClipPath1027"><use xlink:href="#Path-0" fill="#ffffff"/></clipPath></defs><desc>Generated with Avocode.</desc><g transform="matrix(1,0,0,1,-114,-3302)"><g><title>Прямоугольник 4</title><use xlink:href="#Path-0" fill-opacity="0" fill="#ffffff" stroke-dashoffset="0" stroke-dasharray="" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="1" stroke="#714195" stroke-miterlimit="50" stroke-width="10" clip-path="url(&quot;#ClipPath1027&quot;)"/></g></g></svg>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.card-head__slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		asNavFor: '.card-head__slider-small',
		infinite: false,
		loop: false,
		arrows: false,

	});
	$('.card-head__slider-small').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: false,
		loop: false,
		arrows: false,

		// prevArrow: arrr2,
		// nextArrow: arrl2,
		// centerMode: true,

		focusOnSelect: true,
		asNavFor: '.card-head__slider-big',

		// swipeToSlide: false
	});


	// var icon = '<svg class="icon icon-arr-right "><use  xlink:href="img/svg/sprite.svg#arr-right"></use> </svg>',
	// arrr2 = (' <div class="l">' + icon),
	// arrl2 = (' <div class="r">' + icon);
	// Добавил
		// карусель
		$('.s-gal__slider--js').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: true,
			loop: true,
			arrows: true,
			mobileFirst: true,
			prevArrow: arrr2,
			nextArrow: arrl2,
			responsive: [ 
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				} 
			]
		});

			// срабытывает при lazy  загрузке изображений. Ставит картинки  фоном блок
	$('.s-gal__slider--js')
	.on('lazyLoaded', function (event, slick, image, imageSource) {
		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	});

		// срабытывает при lazy  загрузке изображений. Ставит картинки  фоном блок
$('.card-head__slider-small, .card-head__slider-big ')
.on('lazyLoaded', function (event, slick, image, imageSource) {
	image.parent().css('background-image', 'url(' + image.attr('src') + ')');
});
	// slider
	// var swiper4 = new Swiper('.color-slider', {
	// 	// slidesPerView: 5,
	// 	slidesPerView: 'auto',
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	freeMode: true,
	// 	watchOverflow: true,
	// 	slidesPerGroup: 3,

	// 	// centeredSlides: true,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},

	// });
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
		mainClass: 'my-mfp-zoom-in',
		tClose: 'Закрыть (Esc)',
	});

	// / modal window

	// modal галерея
	$(".gal").each(function () {

		$(this).find("a").magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			tClose: 'Закрыть (Esc)',
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
  

	$(".s-nomer__col").hover(function(){
		$(this).find(".s-nomer__toogle-block").toggle();
		$(this).find(".s-nomer__caption--js").toggleClass('active');
	})


	if ( $("div").is("#map1")) {
		$.getScript('//api-maps.yandex.ru/2.1/?lang=ru_RU', function(){
				// alert('script loaded');
		
			ymaps.ready(function () {
			var myMap = new ymaps.Map('map1', {
					center: [44.945660074568785,37.30175149999996],
					zoom: 17,
					behaviors: ['drag'],
	
					// controls: ["zoomControl", "fullscreenControl"]
				}, {
					searchControlProvider: 'yandex#search'
				}),
	
	
				myPlacemark = new ymaps.Placemark([44.945660074568785,37.30175149999996], {
					hintContent: 'г. Новосибирск,  Большевистская 101, оф. 902',
					balloonContent: 'г. Новосибирск,  Большевистская 101, оф. 902 '
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: $("#map1").data("img"),
					// Размеры метки.
					iconImageSize: [29, 40],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-42, -90]
				})
	
			myMap.geoObjects
				.add(myPlacemark)
	
	
	
		});
	}); 

}

// листалка по стр
	$(" .top-nav__link").click(function () {
				 var elementClick = $(this).attr("href");
				//  if ($('div').is(elementClick) == true){
	       var destination = $(elementClick).offset().top - 80;

					 
					 $('html, body').animate({ scrollTop: destination }, 1100);
					 return false;
					// }

	   });

});

 