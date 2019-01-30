jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


	var url = document.location.href;
	$.each($(".nav__link "), function () {

		if (this.href == url) {
			$(this).addClass('active');
		};

	});

	// закрыть/открыть мобильное меню
	$(".toggle-menu-mobile--js ").click(function () {

		$(".toggle-menu-mobile--js").addClass("hid");
		$(".menu-mobile--js ").addClass("active");

		setTimeout(function () {
			$(".menu-mobile--js li a").addClass("up");
		}, 1000);

		setTimeout(function () {
			$(".close_btn").addClass("active")
		}, 500);

		$("body, html").addClass("fixed");
		return false;
	});

	$(".close_btn ").click(function () {

		$(this).toggleClass("active");
		$(".menu-mobile--js li a").addClass("down");

		setTimeout(function () {

			$(".menu-mobile--js ").removeClass("active");
			$(".toggle-menu-mobile--js").removeClass("hid");
		}, 1000);

		setTimeout(function () {

			$(".menu-mobile--js li a").removeClass("up").removeClass("down");
		}, 1500);

		$("body, html").removeClass("fixed");
		return false;
	});



	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();
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

	$('.main-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 1200,
		infinite: true,
		loop: true,
		// verticalSwiping	: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1800,
		// mobileFirst: true,
		vertical: true,

	});
 
	// /modal галерея
	$('.thanks-block').click(function () {

		$(this).removeClass('active')
	})
	// form

	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			ym(52125640, 'reachGoal', 'zakaz');
			$('.thanks-block').addClass('active')
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				$('.thanks-block').removeClass('active')
				// $.magnificPopup.close();
			}, 4000);
		});
		return false;
	});
	$('.form-wrap__btn').click(function () {
		$(".btn--js").click();
		return false;
	})
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
 

	$('.s-project__item').click(function (e) {
		if ($(this).attr('href') == '#') {
			return false;
		}
	})
		// modal галерея
		// $(".gal").each(function () {

		// 	$(this).find("a").magnificPopup({
		// 		type: 'image',
		// 		closeOnContentClick: false,
		// 		closeBtnInside: false,
		// 		mainClass: 'mfp-with-zoom mfp-img-mobile',
		// 		tClose: 'Закрыть (Esc)',
		// 		image: {
		// 			verticalFit: true,
		// 			// titleSrc: function(item) {
		// 			//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
		// 			// }
		// 		},
		// 		gallery: {
		// 			enabled: true
		// 		}
		// 	});
		// })
		// /modal галерея
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
						lazyImage.src = lazyImage.dataset.srcset;
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


if ($('div').is('.preloader')) {

	
	$(function () {
		
		var p = $(".preloader__item"),
		
		len = p.length,
		
		indx = 0;
		
		! function go() {
			
			p.eq(indx).fadeIn(0, function () {
				$(this).delay(200).fadeOut(0, go)
				
			});  
			indx = ++indx; 
			return false; 
		}()
		
	});
	
	
	
	
	$(window).on('load', function () {
		var $preloader = $('.preloader');
		$preloader.delay(1500).fadeOut('slow');
		$('top-nav--dark, .main-block__text-block, .main-block + .footer').hide().delay(1500).fadeIn('slow')
	});
}