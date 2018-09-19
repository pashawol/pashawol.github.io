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

	$(".wrapp-hidden .menu-item-has-children ").each(function () {
		$(this).append('<div class="toggle-l"></div>');
	})

	$('.wrapp-hidden .menu-item-has-children  ').on('click', '.toggle-l', function () {
		$(this).prev().slideToggle().parent().toggleClass("active");
		return false;
	})

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('mobile-mnu'),
		'padding': 280,
		'tolerance': 70
	});

	// Toggle button
	$('.toggle-button').click(function () {
		slideout.toggle();
		// $('#panel').toggleClass("fixed");
	});
	$('#mobile-mnu').swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			slideout.toggle();
			// console.log(direction);
			// $('.toggle-button').toggleClass("on");
		}
	});
	slideout.on('beforeopen', function () {
		$('.toggle-button').addClass("on");
		$('#panel').addClass("fixed");
	});

	slideout.on('beforeclose', function () {
		$('.toggle-button').removeClass("on");
		$('#panel').removeClass("fixed");
	});

	// var toggMnu = $(".toggle-mnu-1").click(function () {

	// 	$(".toggle-mnu-1").toggleClass("on");
	// 	// $("body").toggleClass("fixed");
	// 	$(".hidden-mnu").toggleClass("active");
	// 	$("body, html").toggleClass("fixed");
	// 	return false;
	// });
	// $('.hidden-mnu ul li a').on('click', function () {
	// 	$(".hidden-mnu .toggle-mnu").click();
	// });
	// $(document).mouseup(function (e) {
	// 	var container = $(".hidden-mnu.active");
	// 	if (container.has(e.target).length === 0) {
	// 		$(".toggle-mnu-1").removeClass("on");
	// 		// $("body").toggleClass("fixed");
	// 		$(".hidden-mnu").removeClass("active");
	// 		$("body, html").removeClass("fixed");
	// 	}
	// });

	function heightses() {

		var w = $(window).width();
		// скрывает моб меню

		var topH = $(".header-block ").innerHeight();
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
	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});
	var icon = '<svg class="icon icon-arr-left "><use xlink:href="img/svg/sprite.svg#arr-left">';

	var arrr2 = (' <div class="l">' + icon),
		arrl2 = (' <div class="r">' + icon);
	//  слайдер в  карточке товара
	$(' .slider-text-js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		asNavFor: '.s-gal__slider-small',
		infinite: true,
		loop: true,
		fade: true,
		arrows: false,
		swipe: false,
	});
	$(' .slider-js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		asNavFor: '.s-gal__slider-small',
		infinite: true,
		loop: true,
		arrows: false,
		swipe: false,
	});

	$('.s-gal__slider-small').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		swipe: false,
		focusOnSelect: true,
		asNavFor: '.slider-js, .slider-text-js',
		responsive: [

			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 6,
				}
			},

			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
				}
			},

			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
				}
			},

			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3,
				}
			},
		]
	});

	$('.s-gal__slider-big, .s-gal__slider-small')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});

	$('[data-target="#modal-win"]').click(function () {

		$("#modal-win .h3").html($(this).data("title"));
		$("#modal-win .btn, #modal-win .btn-name-js ").text($(this).data('btn'));
		$("#modal-win .order").val($(this).data('order'));
	})

	// убираем пробелы в телефоне
	$(".top-line__tel, .s-contact__tel").each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})

	$("div").each(function () {

		var wowAnim = $(this).find(".s-work__col," +
		".s-pick__col," +
		".s-schema__col-wow," +
		// ".s-gal__col-wow," +
		// ".s-type__col-wow," +
		// ".s-control__col-wow," +
		// ".s-advantages__col-wow," +
		// ".s-tuning__col-wow," +
		// ".s-prod__col--wow," +
		// ".s-whom__col--wow," +
		".s-condition__col");
		wowAnim.map(function (i) { 
			wowAnim.eq(i).attr("data-wow-delay", i * .1 * 1.5 + "s"); 
			
		});
	})
						var wow = new WOW({
							mobile: false
						});
						wow.init();
});
