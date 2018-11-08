jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


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

		// var topH = $(".header ").height();

		// $(window).scroll(function () {
		// 	$(this).scrollTop() > topH / 2 ?( $('.top-line  ').addClass('fixed-ready')) :  	$('.top-line  ').removeClass('fixed-ready');
		// 	$(this).scrollTop() > topH ?( $('.top-line  ').addClass('fixed')) :  	$('.top-line  ').removeClass('fixed');

		// });


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
	$(" .top-nav a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});



	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	};
	tabscostume('tab');



	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + icon);
	// карусель
	$('.s-team__slider').slick({
		slidesToShow: 3,
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

	// form
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			$.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			})
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
			}, 4000);
		});
		return false;
	});
	// /form

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



	new fullpage('.one-page-js', {
		anchors: ['#footer'],
		//options here
		navigation: false,
		slidesNavigation: true,
		sectionSelector: '.section-js',
		navigationPosition: 'right',
		responsiveWidth: 340,
		responsiveHeight: 500,
		parallax: true,
		showActiveTooltip: true,
		lockAnchors: true,
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollOverflowReset: true,

		normalScrollElements: ".footer",
		onLeave: function (origin, destination, direction) {
			var leavingSection = this;

			//after leaving section 2
			if (origin.index == 0 && direction == 'down') {
				$(".top-line ").addClass("fixed-ready");
				// $(".count-block ").removeClass("text-white");
			} else if (origin.index == 1 && direction == 'up') {
				$(".top-line ").removeClass("fixed");

			}
			if (destination.index == 1) {
				// $(".count-block ").addClass("text-white");
				// $(".s-stores__col").addClass('fadeInRightBig');
			}

			if (destination.index == 2) {
				// $(".delievary-img").addClass('fadeIn');
				// $(".delievary-img-2").addClass('fadeInRightBig');
			}
			if ( !destination.isLast) {

				// $(".count-block__current--js ").animate({
				// 	opacity: 0,
				// }, 600).animate({
				// 	opacity: 1,
				// }, 600);
				$(".count-block").addClass('blick');
				setTimeout(() => {
					$(".count-block").removeClass('blick');
					
				}, 600);
			}
		},

		afterLoad: function (origin, destination, direction) {
			var loadedSection = this;

			//using index
			if (destination.index == 1) {
				$(".top-line ").addClass("fixed");
				$(".count-block ").removeClass("text-white");
				
				// alert
			}
			

			//using anchorLink
			if (destination.index == 0) {
				$(".top-line ").removeClass("fixed-ready");
				$(".count-block ").addClass("text-white");
				// alert("Section 2 ended loading");
			}
			
			if (destination.isLast) {

				// alert("Section 2 ended loading");
				$(".count-block__current--js").text("0" + (destination.index));
			} else {
				$(".count-block__current--js").text("0" + (destination.index + 1));

			}
			// $(".count-block__current--js, .count-block__all--js").removeClass('blick').addClass("blick");

			$(".count-block__all--js").text("0" + ($(".section-js").length - 1));

			// console.log(destination.index);
			// deleteLog = true;
		},
	});

	$(" .scroll-link-down").click(function (e) {
		e.preventDefault();
		fullpage_api.moveSectionDown();
	});


	var wow = new WOW({
		mobile: false
	});
	wow.init();


//  показать/ скрыть дочернее меню
	$(".aside-nav:not(.active)").hover(function () {
			fullpage_api.setAllowScrolling(false);
		},
		function () {
			fullpage_api.setAllowScrolling(true);
		}
	);


	$("  .menu-item-has-children>a").click(function (e) {
		e.preventDefault();
		// $(".aside-nav").removeClass("active");
		$(this).toggleClass("active")
			.next().toggleClass("active")
			.parent().toggleClass("active")
			.siblings().removeClass('active')
			.find('sub-menu, a').removeClass('active');
		// $("body, html").removeClass("fixed");
		$("body, html").toggleClass("fixed");
		$(".aside-nav").toggleClass("active")
 
			$(".aside-nav").hasClass('active') || !$(".aside-nav").hasClass('fixed') ? fullpage_api.setAllowScrolling(false) : fullpage_api.setAllowScrolling(true);
	 
	})
	$(".toggle-sub-menu--js").click(function(){
		$(this).parents('.menu-item-has-children').find("  a.active").click();
	})
	$(document).mouseup(function (e) {
		var container = $(".menu-item-has-children.active");
		if (container.has(e.target).length === 0) {
			$(".menu-item-has-children, .aside-nav, .sub-menu,  a ").removeClass('active');
			$("body, html").removeClass("fixed");
			if (!$(".aside-nav").hasClass('fixed')) {
			fullpage_api.setAllowScrolling(true);
			}
		}
	});

	$(document).mouseup(function (e) {
		var container = $(".menu-item-has-children.active");
		if (container.has(e.target).length === 0) {
			$(".menu-item-has-children, .aside-nav, .sub-menu,  a ").removeClass('active');
			$("body, html").removeClass("fixed");
			fullpage_api.setAllowScrolling(true);
		}
	});
// / показать/ скрыть дочернее меню

//  показать/ скрыть   меню в моб версии

$(".toggle-menu--js").click(function () {
	$("body, html").toggleClass("fixed");
	$(".aside-nav").toggleClass('fixed')
	.hasClass('fixed') ? fullpage_api.setAllowScrolling(false) : fullpage_api.setAllowScrolling(true);
});
$(".aside-nav__toggle-menu--js").click(function () {
	$("body, html").removClass("fixed");
	$(".aside-nav").removClass('fixed').removeClass('active');
	 fullpage_api.setAllowScrolling(true);
});


$(document).mouseup(function (e) {
	var container = $(".aside-nav.fixed");
	if (container.has(e.target).length === 0) {
		$(".aside-nav ").removeClass('fixed').removeClass('active');
		// $("body, html").removeClass("fixed");
		fullpage_api.setAllowScrolling(true);
	}
});

//  /показать/ скрыть   меню в моб версии

});