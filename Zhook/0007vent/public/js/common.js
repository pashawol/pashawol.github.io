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
		$(".s-catalog__title ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topNav = $(".top-nav").innerHeight();
		var topH = $("header ").innerHeight();
		$(".header-block").css("paddingTop", topNav);
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



	// листалка по стр
	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});

	$(" .footer__top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1100);
	});


	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

			$('.s-tabs__slider--js').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 650,
				loop: false,
				arrows: false,
			});
		});
	};
	tabscostume('tabs');
	tabscostume('s-tabs');





	var icon = '<svg  width="8" height="14" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 14"><defs><path d="M261.14971,3252.44852l6.85581,6.37974c0.22488,0.22831 0.58971,0.22831 0.8147,0c0.22499,-0.22896 0.22499,-0.59956 0,-0.82787l-6.44257,-5.99556l6.44257,-5.99556c0.22499,-0.22896 0.22499,-0.59956 0,-0.82787c-0.22499,-0.22896 -0.58983,-0.22896 -0.8147,0l-6.85581,6.38039c-0.11993,0.12095 -0.1712,0.28393 -0.16308,0.44304c-0.00813,0.15975 0.04314,0.32144 0.16308,0.44368z" id="Path-0"/></defs><desc>Generated with Avocode.</desc><g transform="matrix(1,0,0,1,-261,-3245)"><g><title>8 copy 4</title><use xlink:href="#Path-0" fill="#6a6c6f" fill-opacity="1"/></g></g></svg>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);


	$('.s-manager__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 650,
		loop: false,
		arrows: false,

	});

	var slickSlide = $('.s-project-slider--js');
	slickSlide.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 650,
		infinite: true,
		arrows: false,
		mobileFirst: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,

			}
		}]

	});


	$('.s-cards__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 650,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,

				}
			},

			{
				breakpoint: 375,
				settings: {
					slidesToShow: 2,

				}
			},


		]

	});



	$('.s-banner__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 650,
		loop: false,
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		adaptiveHeight: true
	});







	$('.s-team__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 650,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,

				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,

				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,

				}
			},

		]
	});
	
	// $('.background').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	speed: 650,
	// 	infinite: true,
	// 	loop: true,
	// 	arrows: false,
 
	// });




	$(".s-project-slider__btn-next--js").click(function () {
		slickSlide.slick('slickNext');
	})

	$(".s-manager__btn-next--js").click(function () {
		$('.s-manager__slider').slick('slickNext');
	})


	$('.s-project-slider--js,' +
			' .s-project__slider--js ,' +
			' .s-cards__slider--js ,' +

			' .slider-for2 ')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});
	// slider


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


	// убираем пробелы в телефоне
	$('[href^="tel:"]').each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})


	$('.player_audio').click(function () {
		if (this.paused == false) {
			this.pause();
			$(this).parent().removeClass("play");

		} else {
			// $('.player_audio').pause();
			$("audio").trigger("pause").parent().removeClass("play");
			this.play();
			$(this).parent().addClass("play");

		}
	});
	$('.player_audio').each(function () {

		if ($('.player_audio').stopped == true) {

			$(this).parent().removeClass("play");
		}
	})

	// позиция модалки в s-team
	$(document).on('click', '.s-team__link-bot--js', function () {
		var th = $(this),
			thPar = th.parents('.s-team__item'),
			thParTop = thPar.position().top,
			thParLeft = thPar.offset().left,
			modal = $(".s-team__modal--js");
		modal.find('img').attr('src', thPar.data('img'));
		modal.find('.text-primary.h6').text(thPar.find('.text-primary.h6').text());
		modal.find('.text-gray').text(thPar.find('.text-gray').text());
		// добавил
		modal.find('.s-team__text-block').html(thPar.find('.text-js').html());
		// /добавил
		if ((thParLeft + modal.width()) > $(window).width()) {
			modal.css({
				"left": 0,
			})
		} else {
			modal.css({
				"left": thParLeft,
			})
		}
		modal.css({
			"top": thParTop,
		})


		modal.fadeIn();
	})
	$(document).on('click', '.s-team__link-bot--hide-js', function () {
		$(".s-team__modal--js").fadeOut();
	});

	$(document).mouseup(function (e) {
		var container = $(".s-team__modal--js");
		if (container.has(e.target).length === 0 && $(".s-team__modal--js").is(':visible')) {
			container.hide();
		}
	});


	// адаптивные табы
	$('.tabs--js').easyResponsiveTabs();


	$('.s-banner__link').click(function(){
			var th= $(this),
					par = th.parent(),
					thLink = $(th.data('target'));
			thLink.find('.resp-tab-btn').eq(par.index()).click();
	})	


// 	// паралакс на стр кейсов
// 	var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
// 	{
// 	height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
// 	onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
// 			console.log(percent);
// 	}
// });

// $(window).resize(function() {
// if ($(window).width() <= 768) {
// 	elem.destroy();
// }
// else {
// 	elem.reinitialize();
// }
// });
});

var galleryThumb = new Swiper('.swiper-container-text', {
	slidesPerView: 'auto',
	mousewheel: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		// hide: true,
		draggable: true,
		snapOnRelease: true,
		dragSize: '1',
	},
	freeMode: true, 
	// pagination: {
		// 	el: '.swiper-pagination',
		// 	type: 'fraction',
		// 	clickable: true,
		// },
	});
	
	var galleryTop = new Swiper('.swiper-container-img', {
		slidesPerView: 1,
	 
		autoplay: {
			delay: 5000, 
		},
		loop: true,
});

// -------------------------------------------------------------
	//   Crazy
	// -------------------------------------------------------------
	// (function () {
	// 	var $frame  = $('#crazy');
	// 	var $slidee = $frame.children('ul').eq(0);
	// 	var $wrap   = $frame.parent();

	// 	// Call Sly on frame
	// 	$frame.sly({
	// 		horizontal: 1,
	// 		itemNav: 'basic',
	// 		smart: 1,
	// 		activateOn: 'click',
	// 		mouseDragging: 1,
	// 		touchDragging: 1,
	// 		releaseSwing: 1,
	// 		startAt: 1,
	// 		scrollBar: '.scrollbar',
	// 		scrollBy: 1, 
	// 		activatePageOn: 'click',
	// 		speed: 300,
	// 		// elasticBounds: 1,
	// 		// easing: 'easeOutExpo',
	// 		dragHandle: 1,
	// 		dynamicHandle: 1, 

 
	// 	});
  
	// }());
 
	jQuery(document).ready(function ($) {
		$(window).on("load",function(){

			$('.scroll-content__text-block').mCustomScrollbar({
				theme: 'rounded-dark',
				mouseWheel: false,
				alwaysShowScrollbar: 2
			});
		})
		})