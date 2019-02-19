// import { setTimeout } from "timers";

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
						lazyImage.src = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function (image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
							window.addEventListener("DOMContentLoaded", lazyLoad);
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
	window.addEventListener("DOMContentLoaded", lazyLoad);
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
jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS



	// листалка по стр
	$(" .footer__link").click(function () {
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
	tabscostume('tabs');



	var icon = '<img src="img/arrow-left.svg" alt=""/>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);

	//custom code
	var slideCount = $('.slideCount');
	var slideCount2 = $('.slideCount2');
	var slickSlide = $('.header-block__slider--js');

	slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.slideCount').html('<span class="slideCountItem">' + i + '</span> ' + 'из' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
		$('.slideCount2').html(i);

	});


	// slickSlide
	// .on('lazyLoaded', function(event, slick, image, imageSource){
	// 	image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	// });

	slickSlide.slick({
		// $('.header-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		appendArrows: '.header-block__arrow-wrap',
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
	});

	$('.s-5-reasons__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		speed: 600,
		arrows: false,
		mobileFirst: true,
		asNavFor: '.slider-nav--js',
		dots: true,
		appendDots: '.s-5-reasons__dots-wrap',

	});



	$('.slider-nav--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		arrows: false,
		mobileFirst: true,
		focusOnSelect: true,
		asNavFor: '.s-5-reasons__slider--js',
		responsive: [{

				breakpoint: 768,
				settings: {
					slidesToShow: 5
				}

			}

		]

	});

	$('.s-servises__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: false,
		loop: false,
		adaptiveHeight: true,
		// loop: true,
		arrows: false,
		// mobileFirst: true,

	});

	$('.js-link-item[data-slide]').click(function (e) {
		e.preventDefault();
		var th = $(this),
			thAttr = +(th.data('slide'));
		if (+thAttr >= 0 && ($(".slick-active").data("slide") != thAttr)) {
			console.log(thAttr);
			$('.js-link-item').removeClass('active')
			$('.js-link-item[data-slide=' + thAttr + ']').addClass('active');
			$(".s-servises__slider--js").slick('slickGoTo', thAttr);
		}
		//   data-id-elem="9148"
		// return false;
	})
	$('.s-servises__slider--js').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		// console.log(nextSlide);

		$('.js-link-item').removeClass('active')
		$('.js-link-item[data-slide=' + nextSlide + ']').addClass('active');
	});



	$('.s-team__slider-lg--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		adaptiveHeight: true,
		speed: 600,
		arrows: false,
		asNavFor: '.s-team__slider-sm--js'

	});



	$('.s-team__slider-sm--js').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		// infinite: false,
		// loop: false,
		// appendDots: '.s-5-reasons__dots-wrap',
		// loop: true,
		arrows: false,
		mobileFirst: true,
		focusOnSelect: true,
		asNavFor: '.s-team__slider-lg--js',
		responsive: [{

				breakpoint: 1200,
				settings: {
					slidesToShow: 7,
					vertical: true,
					verticalSwiping: true,
				}

			},

			{

				breakpoint: 768,
				settings: {
					vertical: true,
					verticalSwiping: true,
				}

			},

			{

				breakpoint: 475,
				settings: {
					// slidesToShow: 4, 
					slidesToShow: 5,
				}

			},

			{

				breakpoint: 375,
				settings: {
					slidesToShow: 4,
					// slidesToShow: 5,
				}

			},




		]

	});

	$('.s-gal__slider,' +
			' .s-5-reasons__slider--js ,' +
			' .s-servises__slider--js ,' +
			' .s-project__slider--js ,' +
			' .s-servises__slider--js ,' +
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
			},
			gallery: {
				enabled: true
			}
		});
	})
	// /modal галерея



	// mask for input


	$("input[type='tel']").attr("pattern", "[+]38[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
		"mask": "+38(999)999-99-99"
	});

	$('[data-target="#modal-win"]').click(function () {
		$('#modal-win .title-js').html($(this).data('title'));
	})

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		loop: true,
		fixedContentPos: false
	});
	
	
	var galleryThumbs = new Swiper('.carusel-text--js', {
		init: false,
		slidesPerView: 1,
		// loop: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true, 
		slideToClickedSlide: true,
		centeredSlides: true,
		breakpointsInverse: true,
		breakpoints: {
			// when window width is <= 320px
			768: {
				
				freeMode: true,
				spaceBetween: 10,
				slidesPerView: 8,
				direction: 'vertical',
			} ,
			
		576: {
				
				 
				slidesPerView: 2, 
			} ,

			}
		});
		
		
		var galleryTop = new Swiper('.pink-block__slider--js', {
			init: false,
			spaceBetween: 10,
			// loop: true,
			navigation: {
				nextEl: '.pink-block__btn-control--next',
				// prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: galleryThumbs,
			},
		});

	$('.s-look__link').click(function(){
		var $index = $(this).parent().index();
		setTimeout(() => {
			
			galleryThumbs.init();
			galleryTop.init();
		}, 200);
		
		setTimeout(() => { 
			galleryThumbs.slideTo($index); 
			galleryTop.slideTo($index); 
			console.log($index);
		//  $(".carusel-text__slide").eq($index).click();
		  
		}, 300);

	});
 



	// })
	$(".accordion__btn").click(function () {
		$(this).toggleClass('active').next().slideToggle().siblings('.accordion__toggle-block').slideUp();
		// $(this).next().siblings().slideUp();
		$(this).siblings().removeClass('active');
	})


});