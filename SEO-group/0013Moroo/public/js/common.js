jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	// показать /скрыть поиск
	$('.search-block__btn-close--js, .top-nav__btn--js').click(function (e) {
		e.preventDefault();
		$(".search-block").fadeToggle().find("input").focus();
	})

	$(".menu-mobile--js .menu-item-has-children>a").click(function () {
		var th = $(this);
		th.toggleClass('active').next().slideToggle();
		return false;
	})
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

	if (window.matchMedia("(min-width: 992px)").matches) {

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



	var icon = '<svg   width="7" height="11" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 7 11"><defs><path d="M2405.34031,3298.86633l4.09574,4.09473c0.36709,0.33278 0.36709,0.90914 0,1.25776l-4.09574,4.049c-0.36709,0.3785 -0.85641,0.46951 -1.22265,0.09055l-0.15363,-0.15167c-0.32041,-0.33323 -0.38152,-0.69725 -0.06111,-1.00014c1.00919,-0.9861 2.03323,-1.9867 3.04242,-2.98774c0.33569,-0.34862 0.33569,-0.92498 0,-1.25776c-1.00919,-1.01644 -2.03323,-2.01703 -3.04242,-3.03302c-0.32041,-0.27301 -0.2593,-0.66691 0.06111,-0.97026l0.15363,-0.15167c0.36624,-0.36356 0.85556,-0.27347 1.22265,0.06022z" id="Path-0"/></defs><desc>Generated with Avocode.</desc><g transform="matrix(1,0,0,1,-2403,-3298)"><g><use xlink:href="#Path-0" fill="#899ba3" fill-opacity="1"/></g></g></svg>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.s-team__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: false,
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
		loop: false,
		// adaptiveHeight: true,
		arrows: false,
		appendArrows: '.header-block__arrows',
		appendDots: '.header-block__dots',
	});

	$('.s-about__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: false,
		// adaptiveHeight: true,
		arrows: false,
		// appendArrows:'.header-block__arrows',
		// appendDots:  '.header-block__dots',
	});

	$('.s-rating__group').each(function () {

		$(this).find('.s-rating__slider--js').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: true,
			loop: false,
			arrows: true,
			mobileFirst: true,
			prevArrow: arrr2,
			nextArrow: arrl2,
			appendArrows: $(this).find('.s-rating__arrows'),
			// the magic
			responsive: [{

				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}

			}, {

				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				}

			}]
		});

	})
	$('.s-news__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: false,
		arrows: false,
		mobileFirst: true,
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,

		responsive: [{

			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}

		}, {

			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}

		}]
	});

	$('.s-rating__slider--js,' +
			'.s-about__slider--js ,' +
			'.s-news__slider--js ,' +
			' .slider-for2 ')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
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
				val = val.replace('8', '');
				field.val(val);
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input



});


// Для лэзи загрузки


document.addEventListener("DOMContentLoaded", function () {
	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	let active = false;

	const lazyLoad = function () {
		if (active === false) {
			active = true;

			setTimeout(function () {
				lazyImages.forEach(function (lazyImage) {
					if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
						lazyImage.src = lazyImage.dataset.src;
						lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function (image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
});



document.addEventListener("DOMContentLoaded", function () {
	var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

	if ("IntersectionObserver" in window) {
		let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					lazyBackgroundObserver.unobserve(entry.target);
				}
			});
		});

		lazyBackgrounds.forEach(function (lazyBackground) {
			lazyBackgroundObserver.observe(lazyBackground);
		});
	}
});