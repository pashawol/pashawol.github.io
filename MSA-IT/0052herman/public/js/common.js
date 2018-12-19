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
				titleSrc: function(item) {
				  return  item.el.data('source') ;
				}
			},
			gallery: {
				enabled: true
			}
		});
	})
	// видео в модалке
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		// disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	// /видео в модалке
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

	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();
		$(".main-wrapper").css("padding-bottom", $('footer').height() + 30)
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


	// слайдер
	$('.header-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		// prevArrow: arrr2,
		// nextArrow: arrl2,
	});

	// карусель
	$('.s-solon__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		mobileFirst: true,
		// prevArrow: arrr2,
		// nextArrow: arrl2,
		responsive: [{
				breakpoint: 1280,
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
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});




	// срабытывает при lazy  загрузке изображений. Ставит картинки  фоном блок
	$('.s-solon__slider--js')
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
	$(".top-line__tel, .s-contact__tel").each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})

	// аккордион  в боковом меню
	$('.aside__item--has-children > a  ').click(function () {
		// $('.sub-menu').slideUp();
		$(this).toggleClass("active").next('.aside-sub-menu').slideToggle().parent().toggleClass("active");
		return false;
	})
	// аккордион  в боковом меню

	// скрыть/показать боковом меню
	$(".aside__btn--js").click(function () {
		$(this).toggleClass("active").next().slideToggle().parent().toggleClass("active");
	})
});


// слайдер на стр товара
var $gallery = $('.s-content__slider--js');
var slideCount = null;
jQuery(document).ready(function ($) {
	var icon = '<svg class="icon icon-arr-right "><use  xlink:href="img/svg/sprite.svg#arr-right"></use> </svg>',
			arrr2 = (' <div class="l">' + icon),
			arrl2 = (' <div class="r">' + icon);
	$gallery.slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows:'.slide-count-wrap',
		responsive: [{
				breakpoint: 1280,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});
});

$gallery.on('init', function (event, slick) {
	slideCount = slick.slideCount;
	setSlideCount();
	setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
	var $el = $('.slide-count-wrap').find('.total');
	$el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
	var $el = $('.slide-count-wrap').find('.current');
	$el.text(currentSlide + 1);
}
