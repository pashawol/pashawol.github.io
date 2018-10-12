(function ($) {
	$('.s-contact__map')
		.click(function () {
			$(this).find('iframe').addClass('clicked')
		})
		.mouseleave(function () {
			$(this).find('iframe').removeClass('clicked')
		});

	$('.city-select').click(function (event) {
		event.preventDefault();
		var city = $(this).data('city');
		var id = $(this).attr('href');
		setMap(id, city);
	});
	$('.s-contact__input-wrap').change(function (event) {
		var city = $(this).val();
		var id = $('option:selected', $(this)).data('href');
		setMap(id, city);
	});

	function setMap(id, city) {
		if (city == city_default) return false;
		city_default = city;
		$('.city-select').removeClass('active');
		$('a[href="' + id + '"]').addClass('active');

		$('.tab_content_city').addClass('d-none');
		$(id).removeClass('d-none');

		if (typeof map_array[city] !== "undefined") {
			$('.s-contact__map iframe').attr('src', map_array[city])
		}
	}
	$('[data-target="#modal-win-deliv"]').click(function (event) {
		var placholder = $(this).data('placholder');
		$('#modal-win-deliv').find('textarea').attr('placeholder', placholder);
	});
	$('textarea.wpcf7-textarea').each(function (index, el) {
		console.log(el)
		$(el).unwrap('span');
	});
})(jQuery)

jQuery(document).ready(function ($) {
	$(".wpcf7").on('wpcf7:mailsent', function (event) {
		$('#modal-win').modal('hide')
		$('#thanks').modal('show')
	});
});

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
	$(".wrapp-hidden .menu-item-has-children>a ").each(function (e) {
		$(this).append('<div class="toggle-l"></div>');
	})
	$('.wrapp-hidden .menu-item-has-children > a  ').click(function () {
		// $('.sub-menu').slideUp();
		$(this).next('.sub-menu').slideToggle().parent().toggleClass("active").siblings().removeClass('active').find('.sub-menu').slideUp();
		return false;
	})
	var toggMnu = $(".toggle-mnu-1").click(function () {
		$(".toggle-mnu-1").toggleClass("on");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});

	$(document).mouseup(function (e) {
		var container = $(".hidden-mnu.active");
		if (container.has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});
	$('#mobile-mnu').swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu").removeClass("active");
				$("body, html").removeClass("fixed");
			}
			if (direction == 'right') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu").removeClass("active");
				$("body, html").removeClass("fixed");
			}
		},
		triggerOnTouchEnd: false,
	});

	function heightses() {
		var w = $(window).width();
		// скрывает моб меню
		var topH = $(".header-block ").innerHeight();
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH * 2 / 3) {
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
	// var icon = '<svg class="icon icon-arr-left "><use xlink:href="/wp-content/themes/unimon/img/svg/sprite.svg#arr-left">';
 
	var icon = '<svg  class="icon icon-arr-left " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33"><defs><path id="d6foa" d="M472 3319.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0zm20.07 7.75l-7.73-7.75 7.73-7.76-1.54-1.53-9.26 9.29 9.26 9.29z"/></defs><g><g transform="translate(-472 -3303)"><use xlink:href="#d6foa"/></g></g></svg>';
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
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 6,
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 5,
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
			}
		}, {
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
			}
		}, ]
	});


	$(' .header-block__slider--big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		asNavFor: '.header-block__slider--small',
		infinite: true,
		loop: true,
		swipe: false,
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
	});
	$('.header-block__slider--small').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		swipe: false,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.header-block__slider--big ',
		responsive: [{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
			}
		}]
	});


	$('.s-why-work-slider-js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 450, 
		infinite: true,
		loop: true,
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		swipe: false,
		appendArrows: '.s-gal'
	});
	$('.s-gal__slider-big, .s-gal__slider-small').on('lazyLoaded', function (event, slick, image, imageSource) {
		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	});

	$('[data-toggle="modal"]').click(function () {
		$(".modal.fade .h3").html($(this).data("title"));
		$(".modal.fade .btn, .modal.fade .btn-name-js ").text($(this).data('btn'));
		$(".modal.fade .order").val($(this).data('order'));

		var par = $(this).data('par');
		$('[name="link"]').val(par);

	})

	$('.btn-name-js').each(function (index, el) {
		if ($(el).parents('.modal.fade').length > 0) {

		} else {
			console.log(el);

		}
	});

	$(".top-line__tel, .s-contact__tel").each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})
	$("div").each(function () {
		var wowAnim = $(this).find(".s-work__col," + ".s-pick__col," + ".s-schema__col-wow," +
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

	// подсказки
	$('[data-toggle="popover"]').popover({
		// trigger: 'focus'
	})
});


(function ($) {
	if ($('#menu-footer4').length) {
		$('#menu-footer4').wrap('<div class="footer__mnu"></div>')
			.css('display', 'block');
	}

})(jQuery)