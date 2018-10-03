jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
		// accordion
		$(".showhide").click(function () {
			$(this).toggleClass("active").next().slideToggle().parents().toggleClass("active");
		})

			// скрыть/показать меню в ЛК 
	$(".filter-aside__btn--js").click(function () {
		$(this).toggleClass("active").next().slideToggle();
	})
	// Custom JS

	$(".top-line__search-toggle--js").click(function () {
		$(".search-block--top-line").slideToggle().find("input").focus();
		
	})
	var url = document.location.href;
	$.each($(".top-nav__nav a "), function () {

		if (this.href == url) {
			if ($(this).hasClass("top-nav__link") == true) {

				$(this).addClass('top-nav__link-active');
			}
			if ($(this).hasClass("footer__link") == true) {

				$(this).addClass('footer__link-active');
			}

		};

	});
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
	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});
	$('.hidden-mnu ul li a').on('click', function () {
		$(".hidden-mnu .toggle-mnu").click();
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
		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		$(".s-catalog__slide .item-prod__title ").height('auto').equalHeights();
		//
 
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
	// $(" .top-nav a").click(function () {
	//        var elementClick = $(this).attr("href");
	//        var destination = $(elementClick).offset().top;

	//            $('html, body').animate({ scrollTop: destination }, 1100);

	//        return false;
	//    });

 
	var icon = '<svg class="icon icon-arr-prev "><use xlink:href="img/svg/sprite.svg#arr-prev">';

	var arrr2 = (' <div class="l">' + icon),
		arrl2 = (' <div class="r">' + icon);
 
	// слайдер в карточке
	$('.header-block__slider').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   dots: false,
	   speed: 450,
	   infinite: true,
	   loop: true,
	   arrows: false, 
		 });
		 

		 $('.kart-head__slider-big').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			asNavFor: '.kart-head__slider-small',
			infinite: false,
			loop: false,
			arrows: true,
			prevArrow: arrr2,
			nextArrow: arrl2,
		});
	 $('.kart-head__slider-small').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				speed: 450,
				infinite: false,
				loop: false,
				arrows: false,
				// centerMode: true,

				focusOnSelect: true ,
				asNavFor:  '.kart-head__slider-big',

				// swipeToSlide: false
				});
 

	$('.s-catalog__slider').slick({
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
		responsive: [
			{
				breakpoint: 992,
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

 
	// кастомный инпут файл

	var file = $(".add-file input[type=file]");
	file.change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		var name = $(".add-file__filename  ");
		name.text(filename);

	});
	// или
	// $(".dropzone").dropzone({
	//  url: "/file/post",
	//  addRemoveLinks: true,
	//      acceptedFiles: 'image/*',
	//      uploadMultiple: true,
	//   });

 
	// убираем пробелы в телефоне
	$(".top-line__tel-link, .s-contact__tel").each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})
	// $(".wow-wrap").each(function () {
	// var wowAnim = $(this).find(".s-dop__col," +
	//                 ".s-pick__col," +
	//                 ".s-condition__col");
	// wowAnim.each(function(i){

	// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

	//    var wow = new WOW({ mobile: false });
	//         wow.init();

	// });
	// });

	// табы  . Теперь данные активного таба остается в storage
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
