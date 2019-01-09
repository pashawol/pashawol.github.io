jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


	// показать поиск в меню
	$(".top-line__btn--search-js").click(function (e) {
		e.preventDefault();
		$(".search-block").fadeToggle().find("input").focus();
	})

	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});

	$(".wrapp-hidden .menu-item-has-children ").each(function(){
		$(this).append('<div class="toggle-l"></div>');
	})

	$( '.wrapp-hidden .menu-item-has-children  ').on('click', '.toggle-l', function(){
			$(this).prev().slideToggle().parent().toggleClass("active");
			return false;
		}) 

 
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

 

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
	}

 


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



	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

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
	
	$('.header-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		// adaptiveHeight: true,
		arrows: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows:'.header-block__arrows',
		appendDots:  '.header-block__dots',
	});

	$('.s-logo__slider--js').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		// mobileFirst: true,
		 
	});
	
	$('.s-catalog__slider--js').slick({
		slidesToShow: 10000,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: false,
		// loop: false,
		arrows: false,
		// mobileFirst: true,
		responsive: [{

      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        // infinite: true
      } 
    }, { 
      breakpoint: 374,
      settings: {
        slidesToShow: 1
      }

    } ]
	});

	
	$('.s-catalog__slider-desk--js').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows:'.section-title__arrows',
		// mobileFirst: true,
		responsive: [{

      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        // infinite: true
      } 
    }, { 
      breakpoint: 374,
      settings: {
        slidesToShow: 1
      }

    } ]
	});
	
	$('.s-catalog').each(function(){

		$(this).find('.s-catalog__slider-desk--js-page').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: true,
			loop: true,
			arrows: true, 
			prevArrow: arrr2,
			nextArrow: arrl2,
			appendArrows: $(this).find('.section-title__arrows'),
			// mobileFirst: true,
			responsive: [{
				
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					// infinite: true
				} 
			}, 
			{ 
				
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					// infinite: true
				} 
			}, 
			
			{ 
				
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					// infinite: true
				} 
			}, 
			
			{ 
				breakpoint: 374,
				settings: {
					slidesToShow: 1
				}
				
			},
		]
	});
	
})
	
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



	$('.s-gal__slider,'+
	// ' .s-project__slider--js ,'+
	// ' .slider-for ,'+
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
				// val = val.replace('8', '');
				// field.val(val);
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input


	//Replace all SVG images with inline SVG
	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}


			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});


	// кастомный инпут файл
  


	$(".pretty-embed__bg").each(function () {
		// загрузка фона видео
		$(this).css("background-image", 'url(http://img.youtube.com/vi/' + $(this).data("src") + '/0.jpg)')
		// включение видео при клике по блоку
		$(this).click(function () {
			$(this).removeClass("on").next()
				.attr("src", 'https://www.youtube.com/embed/' + $(this).data("src") + '?autoplay=1').addClass("on");
		})
	})

	// убираем пробелы в телефоне
	// убираем пробелы в телефоне
	$('[href^="tel:"]').each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})
 


		// тут все настройки  ionden.com/a/plugins/ion.rangeSlider/demo_interactions.html

		$('.slider-rang-wrap').each(function () {
			var th = $(this),
				inMinus = th.find('.minus'),
				inPlus = th.find('.plus');
			var slider = th.find(".range-slider").ionRangeSlider({
				type: "double",
				grid: false,
				min: 0,
				max: 1000,
				grid_snap: false,
				force_edges: true,
				hide_min_max: true,
				// hide_from_to: true,
				// hide_grid_text: true,
				onStart: function (data) {
					inMinus.val(data.from);
					inPlus.val(data.to);
				},
				onChange: function (data) {
					inMinus.val(data.from);
					inPlus.val(data.to);
				},
				onFinish: function (data) {
					inMinus.val(data.from);
					inPlus.val(data.to);
				},
				onUpdate: function (data) {
					inMinus.val(data.from);
					inPlus.val(data.to);
				}
			}); 
		});

	// accordion
	$(".showhide").click(function () {
		$(this).toggleClass("active").next().slideToggle().parent().toggleClass("active");
	})


					// скрыть/показать меню в ЛК 
	$(".filter-aside__btn--js").click(function () {
		// $(this).toggleClass("active")
		$('.aside-filter-mob').toggleClass("active");
		$("body, html").toggleClass("fixedd");
	})
});