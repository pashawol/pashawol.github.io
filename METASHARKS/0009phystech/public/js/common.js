

// Для лэзи загрузки


document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            // lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
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


// лэзи 
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src +')';
            lazyImage.src = lazyImage.dataset.src;
            // lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
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



document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});



jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	$(".wrapp-hidden .nav__item--has-children > a").click(function (e) {
		e.preventDefault();
		$(this).next().slideToggle();
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

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		if ($('div').is('.news-block__item')){

			$(".news-block__item>div:first-child ").height('auto').equalHeights();
		}
		//


		// скрывает моб меню

		var topH = $(".top-nav").innerHeight();

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
	tabscostume('tab');

	// адаптивные табы
	$('.resp-tabs-js').easyResponsiveTabs({
		activate: function () {}
	});


	var icon = '<svg viewBox="0 0 28 54"  fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27 1L1 27L27 53"  /> ';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель

	$('.header-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,

	});

	function tabslider() {

		$(' .s-infrastructure__slider--js').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			speed: 450,
			infinite: true,
			loop: true,
			arrows: false,

		});
		$('.s-infrastructure__slider--js ')
			.on('lazyLoaded', function (event, slick, image, imageSource) {
				image.parent().css('background-image', 'url(' + image.attr('src') + ')');
			});
	}
	tabslider();
	$('.s-content__slider--js ').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,

	});

	$('.s-main-calendar__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		prevArrow: arrr2,
		nextArrow: arrl2,

	});

	$('.s-logos__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		speed: 450,
		infinite: true,
		loop: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{
				breakpoint: 1440,
				settings: {
					slidesToShow: 6
				}
			},

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},

			{
				breakpoint: 375,
				settings: {
					slidesToShow: 2
				}
			}

		]
	});


	$('.s-news__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}

		]
	});


	$(' .s-content__slider--js, .s-news__slider--js')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});

	$(".resp-accordion, .s-infrastructure__tab-btn").click(function () {
		$('.s-infrastructure__slider--js').slick('unslick')
		tabslider();
	})

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


	var $li = $('.nav__item--has-children').hover(
		function () {
			var self = this;
			hovertimer = setTimeout(function () {
				$(self).addClass('hover-block');
				// $("html, .top-nav.fixed").addClass("fixed-brand");
			}, 500);
		},
		function () {
			clearTimeout(hovertimer);
			$li.removeClass('hover-block');
			// $("html, .top-nav.fixed").removeClass("fixed-brand");
		}
	);


	// для плаваюещего label
	// для плаваюещего label

	// для плаваюещего label


	$('input, textarea').not('[type="radio"]').not('[type="checkbox"]').each(function () {

		if ($(this).val().trim() == '') {
			$(this).closest('label').addClass('empty');
		}
	})
	$('input, textarea').not('[type="radio"]').not('[type="checkbox"]').keyup(function () {
		if ($(this).val().trim() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
	});
 
	// =============================================== добавил
	// прилипает карта
	$(".s-contact__map-wrap").stick_in_parent();
	//gijgo.com/datepicker
	var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

	$('.datepicker-date').each(function () {
		var th = $(this);
		th.datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			format: 'dd.mm.yyyy',
			minDate: today,
			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			// modal: true
		});

		th.click(function () {
			// th.next().click();
		})
	})

	$(".date-picker-block-js").each(function () {

		var th = $(this);

		th.find('.startDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			minDate: today,
			select: function (e) {
				th.find('.startDate').parents('label').removeClass("empty");
			},
			maxDate: function () {
				return th.find('.endDate').val();
			}
		});
		th.find('.endDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',

			select: function (e) {
				th.find('.endDate').parents('label').removeClass("empty");
			},
			minDate: function () {
				return th.find('.startDate').val();
			}
		});
		th.find('input').next().hide();
		// th.find('input').click(function () {
		// 	$(this).next().click();
		// })
	})
	
	$(".time-picker").each(function () {

		var th = $(this);
		th.timepicker({
			mode: '24hr',
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			format: 'H.M', 
			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			// modal: true
		});

		th.click(function () {
			th.next().click();
		})
	})


	// скрывает лишний текст 

	// $('.s-patner__text').moreLines({
	// 	linecount: 9,
	// 	// custom text
	// 	buttontxtmore: '<span class="  btn btn-sm btn-outline-primary" href="#">Показать</span>',
	// 	buttontxtless: '<span class="  btn btn-sm btn-outline-primary" href="#">Скрыть</span>',
	// 	animationspeed: 450
	// });

	$('.s-patner__text').readmore({
		speed: 75,
		moreLink: '<span class="  btn btn-sm btn-outline-primary" href="#">Показать</span>',
		lessLink: '<span class="  btn btn-sm btn-outline-primary" href="#">Скрыть</span>',
		speed: 475,
		collapsedHeight: 200,
	});


	$('.news-block__slider--js').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		dots: false,
		responsive: [

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},

			{
				breakpoint: 440,
				settings: {
					slidesToShow: 1
				}
			},


		]
	});

	function hNewtop() {
		var th = $(".news-block");
		var hNew = th.height();
		// th.css('margin-top', hNew);
		$(".header-block__slide").css({
			'paddingBottom': hNew + 130
		});
		$(".header-block__slider .slick-dots").css({
			'top': -hNew - 100
		});
	}
	$(window).resize(function () {
		hNewtop();
	});
	hNewtop();


 
$('.s-price-servise__item').hover(function(){
	$(this).find(".s-price-servise__text").slideToggle(100);
})


$('.btn-popover').popover({
	html: true,
	offset: 100,
	placement: 'bottom', 
	// placement: 'left', 
})


// custom slider range
$(".js-range-slider").ionRangeSlider({
	skin: "round",
	type: "double",
	min: 0,
	max: 100,
});

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


  


	$(".time-picker-block-js").each(function () {

		var th = $(this);

		th.find('.startTime').timepicker({
			mode: '24hr',
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			format: 'H', 
			select: function (e) {
				th.parents('label').removeClass("empty");
			}, 
		 
		});
		th.find('.endTime').timepicker({
			mode: '24hr',
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			format: 'H', 
		});
		th.find('input').next().hide();
		th.find('input').click(function () {
			$(this).next().click();
		})
	})
	
 
	$(' .s-offices__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,

	});
	$('.s-offices__slider--js ')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});


		var galleryThumb = new Swiper('.blockpicker__slider--js', {
			slidesPerView: 'auto',
			mousewheel: true,
			scrollbar: {
				el: '.swiper-scrollbar',
				// hide: true,
				draggable: true,
				snapOnRelease: true,
				// dragSize: '260',
			},
			
			freeMode: true, 
			// pagination: {
				// 	el: '.swiper-pagination',
				// 	type: 'fraction',
				// 	clickable: true,
				// },
			});

			// timer jqueryscript.net/time-clock/Minimal-jQuery-Countdown-Plugin-with-Custom-Timezone-Countdown-Clock.html
			$('.example-timer').countdown({
				date: '03/26/2019 16:20:59',
				offset: 5,
				// Countdown text
				day: 'День',
				days: 'Дней',
				hour: 'Час',
				hours: 'Часов',
				minute: 'Минута',
				minutes: 'Минут',
				second: 'Секунда',
				seconds: 'Секунд'
				}, function () {
					alert('Merry Christmas!');
				});
});



