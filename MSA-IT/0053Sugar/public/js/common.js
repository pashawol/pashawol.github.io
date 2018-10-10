jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


	// галерея
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



	// мобильное меню
	$(".trop__nav-item--has-sub-menu   ").each(function (e) {
		$(this).append('<div class="toggle-l"></div>');
	})
	$('.trop__nav-item--has-sub-menu  ').on('click', '.toggle-l', function () {
		$(this).prev().slideToggle().parent().toggleClass("active");
		return false;
	})
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


	// скрывает / показывает мобильное меню при медиа запросе
	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
	}


	// листалка по стр
	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});

	// кнопки листание на стр журнала
	$('.s-magazine-body__btn').click(function () {
		var thd = $(this).attr("href");
		$(this).addClass("active").siblings().removeClass('active');
		$('.s-magazine-body__item-group').removeClass("active");
		$(thd).addClass("active");
	})


	// слайдеры
	var icon = '<svg  width="9" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9 15"><defs><path d="M1555.75184,1567.21126l7.70325,7.70322l-0.70713,0.70723l-0.34321,-0.34323l-6.70131,6.72841l-0.69031,-0.69132l6.70072,-6.72803l-6.66914,-6.66951z" id="Path-0"/></defs> <g transform="matrix(1,0,0,1,-1555,-1567)"><g> <use xlink:href="#Path-0"  fill-opacity="1"/></g></g></svg>';

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + icon);
	// карусель
	$('.slider-js').each(function (params) {

		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: true,
			loop: true,
			arrows: true,
			prevArrow: arrr2,
			nextArrow: arrl2,
			// adaptiveHeight: true,
			appendArrows: $(this).parent().find(' .arrow-wrap'),
		});
	})


	$('.s-patner__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		mobileFirst: true,
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		adaptiveHeight: true,
		appendArrows: '.s-patner .arrow-wrap',
		responsive: [{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});

	$('.slider-js')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});

	// модальное окно
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


	// маска на инпут
	$("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
		"mask": "+7(999)999-99-99"
	});



	// оценить сайт
	// тут все настройки  ionden.com/a/plugins/ion.rangeSlider/demo_interactions.html
	$("#range_45").ionRangeSlider({
		values: [
			"плохо", "средне", "хорошо", "отлично", "вааще!"
		],
		from: 3,
		grid: true,
		grid_snap: true,
		force_edges: true,
		hide_min_max: true,
		hide_from_to: true,
		// hide_grid_text: true,
		onStart: function (data) {
			$('.range-rezult--js').text(data.from_value);
		},
		onChange: function (data) {
			$('.range-rezult--js').text(data.from_value);
		},
		onFinish: function (data) {
			$('.range-rezult--js').text(data.from_value);
		},
		onUpdate: function (data) {
			$('.range-rezult--js').text(data.from_value);
		}
	});



	// // всплывашка в карте 
	$(' .js-show-area').each(function () {
		var th = $(this);
		thContent = $('#' + th.data('zone'));
		th.popover({
			template: '<div class="popover popover-map" role="tooltip"><div class="popover-close"></div><div class="popover-body"></div></div>',

			container: '.svg-map',
			// placement: 'auto'
		});
		th.on('shown.bs.popover', function () {
			$(".popover-body").html($('#' + th.data('zone')).html());
			th.addClass('active').siblings().removeClass('active').popover('hide');;

		})

		th.on('hide.bs.popover', function () {
			th.removeClass('active');
		})


		$("body").on('click', '.popover-close', function () {
			th.popover('hide');

		})
	})
	// / всплывашка в карте 


	// скрыть/показать меню в ЛК 
	$(".s-po-aside__btn--js").click(function () {
		$(this).toggleClass("active").next().slideToggle();
	})


// табы   
$(function () {
	var tab = ('tabs'); 
	$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn().addClass('active'); 
});

});
});