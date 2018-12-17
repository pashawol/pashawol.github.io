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

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню

		var topH = $(".top-line").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-line  ').addClass('fixed');
			} else {
				$('.top-line  ').removeClass('fixed');
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
	// $(" .top-nav a").click(function () {
	//        var elementClick = $(this).attr("href");
	//        var destination = $(elementClick).offset().top;

	//            $('html, body').animate({ scrollTop: destination }, 1100);

	//        return false;
	//    });


	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	};
	tabscostume('tabs');



	var icon = '<svg width="41" height="79" viewBox="0 0 41 79" fill="none" xmlns="http://www.w3.org/2000/svg"> 	<path d="M1 78L39.5 39.5L1.00001 0.999997" stroke="black"/> </svg> ';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.s-team__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
	});
	// карусель
	$('.s-gal__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		// infinite: false,
		// loop: false,  
		arrows: false,
		draggable: false,

	});



	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		// infinite: false,
		//  loop: false,   
		asNavFor: '.slider-nav',
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false, 
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true, 
		responsive: [

			{
				breakpoint: 991.98,
				settings: { 
					vertical: false,
					verticalSwiping: false,

				}
			} ,
			
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2 ,
					vertical: false,
					verticalSwiping: false,
				}
			} ,

		]

	});


	$('.s-project__slider--js').slick({
		slidesToShow: 3,
		slidesToScroll: 1, 
		dots: false,
		arrows: false, 
		focusOnSelect: true, 
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [
 
			
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2 , 
				}
			} ,

		]

	});

	$('.s-gal__slider,'+
	' .s-project__slider--js ,'+
	' .slider-for ,'+
	' .slider-for2 ')
.on('lazyLoaded', function(event, slick, image, imageSource){
	 image.parent().css('background-image', 'url(' + image.attr('src') + ')');
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
			 
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input

 
	// или
	// $(".dropzone").dropzone({
	//  url: "/file/post",
	//  addRemoveLinks: true,
	//      acceptedFiles: 'image/*',
	//      uploadMultiple: true,
	//   });
	// accordion
	$(".showhide").click(function () {


		$(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"),
			$(this).next("div").filter(function () {
				return "block" == $(this).css("display")
			}).slideUp().parent().removeClass("active"),
			$(this).next("div").filter(function () {
				return "none" == $(this).css("display")
			}).slideDown().prev("div").addClass("active").parent().addClass("active")
		})

 

	// убираем пробелы в телефоне
	$(".top-line__tel, .s-contact__tel").each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})
	 		// прилипает меню
			 $(".top-nav").stick_in_parent({
				parent: 'body'
			 });
										
});