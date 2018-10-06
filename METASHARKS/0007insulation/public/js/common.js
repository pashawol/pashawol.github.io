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

		var w = $(window).width();
 
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
	$(" .top-nav a, .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });

 

	var icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="28" viewBox="0 0 15 28"><defs><path id="ht76a" d="M1203.69 3666.71c-.2.2-.43.29-.7.29a.99.99 0 0 1-.7-1.69l12.32-12.31-12.32-12.31a.99.99 0 1 1 1.4-1.4l13.02 13.01a.99.99 0 0 1 0 1.4z"/></defs><g><g transform="translate(-1202 -3639)"><use xlink:href="#ht76a"/></g></g></svg>';

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + icon);
	// карусель
	$('.s-prod__slider').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   dots: false,
	   speed: 450,
	   infinite: true,
	   loop: true,
	   arrows: true,
	   // centerMode: true,
	   // focusOnSelect: true ,
	    // variableWidth: true,
	    prevArrow: arrr2,
	     nextArrow: arrl2,
	   });
	$('.s-rew__slider').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   dots: true,
	   speed: 450,
	   infinite: true,
	   
	   arrows: false,
	   // centerMode: true,
	   // focusOnSelect: true ,
	    // variableWidth: true, 
	   });

	// слайдер цвета в карточке
 
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

  
	// убираем пробелы в телефоне
	$(".top-line__tel, .s-contact__tel").each(function () {
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
	// адаптивные табы
	$('.tabs').easyResponsiveTabs();

	$('.s-prod__text-block').readmore({
    speed: 475,
		maxHeight: 60,
		// embedCSS: false,
		moreLink: '<a class="btn-more" href="#">Подробнее</a>',
		lessLink: '<a class="btn-more" href="#">Скрыть</a>',
});
});
