

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
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");

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
				date: '04/22/2019 16:20:59',
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


					$(" .nav--js a").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
		 });
		 


		 var $li = $('.nav__item--has-children').hover(
			function () {
				var self = this;
				hovertimer = setTimeout(function () {
					$(self).addClass('hover-block');
					// $("html, .top-nav.fixed").addClass("fixed-brand");
				}, 100);
			},
			function () {
				clearTimeout(hovertimer);
				$li.removeClass('hover-block');
				// $("html, .top-nav.fixed").removeClass("fixed-brand");
			}
		);
	
	});
		 
// 		$(document).ready(function() {
// 			const path = ' M185.137 6.26067L234.178 30.3243M185.137 6.26067L304.501 11.8138M185.137 6.26067L120.365 128.892M185.137 6.26067L134.707 30.3243M185.137 6.26067L114.813 30.3243M185.137 6.26067L247.595 1.17029L304.501 11.8138M234.178 30.3243L304.501 11.8138M234.178 30.3243L120.365 128.892M234.178 30.3243L413.225 62.7176M234.178 30.3243L319.306 76.1377M234.178 30.3243L261.475 77.9887M234.178 30.3243L134.707 189.977M304.501 11.8138L413.225 62.7176M304.501 11.8138L366.497 33.5636L413.225 62.7176M120.365 128.892L84.7405 115.472M120.365 128.892L134.707 30.3243M120.365 128.892L72.7115 173.318M120.365 128.892L134.707 189.977M120.365 128.892L109.724 305.205M120.365 128.892L63.4584 269.109M84.7405 115.472L134.707 30.3243M84.7405 115.472H74.0994M84.7405 115.472L72.7115 173.318M134.707 30.3243H114.813M134.707 30.3243L74.0994 115.472M114.813 30.3243L74.0994 115.472M114.813 30.3243L64.8463 92.7971M114.813 30.3243L81.9646 60.8665L64.8463 92.7971M74.0994 115.472L63.4584 148.791M74.0994 115.472C74.1718 115.321 74.168 115.037 74.0994 114.64M64.8463 92.7971L57.9065 127.504L63.4584 148.791M64.8463 92.7971L63.4584 148.791M64.8463 92.7971C67.8806 99.0295 73.4965 111.156 74.0994 114.64M63.4584 148.791L72.7115 161.286M63.4584 148.791L68.0849 161.054M72.7115 161.286L74.0994 114.64M72.7115 161.286V173.318M72.7115 173.318L68.0849 161.054M72.7115 173.318H63.4584M72.7115 173.318L69.9356 202.055M413.225 62.7176L319.306 76.1377M413.225 62.7176L390.093 85.3929M413.225 62.7176L474.296 142.313M413.225 62.7176L449.775 95.1109L474.296 142.313M319.306 76.1377L261.475 77.9887M319.306 76.1377L293.86 96.9619M319.306 76.1377L474.296 142.313M319.306 76.1377L390.093 85.3929M319.306 76.1377L427.105 186.275M319.306 76.1377L368.81 240.881M261.475 77.9887L134.707 189.977M261.475 77.9887L238.805 168.69M261.475 77.9887L293.86 96.9619M134.707 189.977L109.724 305.205M134.707 189.977L138.871 352.406M134.707 189.977L187.45 256.615M134.707 189.977L238.805 168.69M134.707 189.977L240.192 229.312M109.724 305.205L63.4584 269.109M109.724 305.205L138.871 352.406M109.724 305.205L124.991 393.592M63.4584 269.109L69.9356 202.055M63.4584 269.109L124.991 393.592M63.4584 269.109L33.8485 283.455M138.871 352.406L187.45 256.615M138.871 352.406L327.172 313.534M138.871 352.406L353.08 363.975M138.871 352.406C145.04 376.007 157.377 423.672 157.377 425.523M138.871 352.406L124.991 393.592M138.871 352.406L231.865 421.358M187.45 256.615L240.192 229.312M187.45 256.615L327.172 313.534M240.192 229.312L327.172 313.534M240.192 229.312L317.918 248.748M240.192 229.312L238.805 168.69M327.172 313.534L353.08 363.975M327.172 313.534C327.172 312.424 321.003 269.88 317.918 248.748M327.172 313.534L368.81 240.881M353.08 363.975L427.105 186.275M353.08 363.975L442.373 252.45M353.08 363.975L368.81 240.881M353.08 363.975L404.435 324.178M353.08 363.975L380.377 350.092M353.08 363.975L340.126 418.118M353.08 363.975L329.022 406.087M353.08 363.975L231.865 421.358M317.918 248.748L368.81 240.881M317.918 248.748L238.805 168.69M238.805 168.69L293.86 96.9619M238.805 168.69L368.81 240.881M293.86 96.9619L368.81 240.881M474.296 142.313L390.093 85.3929M474.296 142.313L427.105 186.275M474.296 142.313L480.773 180.259L476.609 208.025M474.296 142.313L476.609 208.025M474.296 142.313L442.373 252.45M427.105 186.275L442.373 252.45M427.105 186.275L368.81 240.881M476.609 208.025L442.373 252.45M476.609 208.025L463.655 245.508L442.373 279.753M476.609 208.025L442.373 279.753M442.373 252.45V279.753M442.373 252.45L404.435 324.178M442.373 279.753L404.435 324.178M404.435 324.178L380.377 350.092M380.377 350.092L340.126 418.118M340.126 418.118L329.022 448.661M340.126 418.118V477.352M329.022 448.661V406.087M329.022 448.661L305.889 481.054M329.022 448.661L340.126 477.352M329.022 448.661L337.813 495.862M329.022 448.661L311.904 494.474M329.022 406.087L231.865 421.358M329.022 406.087L288.771 443.108M329.022 406.087L305.889 481.054M231.865 421.358L288.771 443.108M231.865 421.358L305.889 481.054M231.865 421.358L157.377 425.523M288.771 443.108L305.889 481.054M305.889 481.054L311.904 494.474M305.889 481.054L187.45 473.187M305.889 481.054L157.377 425.523M340.126 477.352L346.14 495.862H337.813M340.126 477.352L337.813 495.862M337.813 495.862L311.904 494.474M311.904 494.474L187.45 473.187M311.904 494.474C310.423 494.221 229.551 500.847 189.3 504.192M187.45 473.187L189.3 504.192M187.45 473.187L168.018 491.235M187.45 473.187L157.377 425.523M189.3 504.192L168.018 491.235M168.018 491.235L157.377 425.523M168.018 491.235L137.483 417.193M157.377 425.523L137.483 417.193M157.377 425.523L124.991 393.592M137.483 417.193L124.991 393.592M137.483 417.193L124.991 407.475M124.991 393.592L33.8485 283.455M124.991 393.592V407.475M124.991 393.592L106.948 403.773M124.991 393.592L61.6078 403.773M124.991 393.592L94.9189 388.039M124.991 393.592L31.0726 317.236M68.0849 161.054L63.4584 173.318M63.4584 173.318L1 229.312M63.4584 173.318L31.0726 221.908M63.4584 173.318L69.9356 202.055M63.4584 173.318L25.5207 258.928M1 229.312L31.0726 221.908M1 229.312L25.5207 258.928M31.0726 221.908L25.5207 258.928M69.9356 202.055L25.5207 258.928M69.9356 202.055L33.8485 283.455M25.5207 258.928L12.5664 281.604M25.5207 258.928L17.1929 300.577M25.5207 258.928L33.8485 283.455M25.5207 258.928L23.2074 305.205M12.5664 281.604L17.1929 300.577M12.5664 281.604L10.7157 292.247L17.1929 300.577M17.1929 300.577L23.2074 305.205M33.8485 283.455L23.2074 305.205M33.8485 283.455L31.0726 317.236M23.2074 305.205L31.0726 317.236M23.2074 305.205V324.641M23.2074 305.205L7.93982 317.236M124.991 407.475L106.948 403.773M106.948 403.773H61.6078M61.6078 403.773L94.9189 388.039M61.6078 403.773L33.8485 359.81M61.6078 403.773L25.5207 368.14M61.6078 403.773L23.2074 389.89M61.6078 403.773L31.0726 400.534L23.2074 389.89M94.9189 388.039L31.0726 317.236M94.9189 388.039L33.8485 359.81M31.0726 317.236L33.8485 359.81M23.2074 324.641L33.8485 359.81M23.2074 324.641L7.93982 317.236M23.2074 324.641L20.8942 341.763M33.8485 359.81L25.5207 368.14M33.8485 359.81L20.8942 341.763M25.5207 368.14L23.2074 389.89M25.5207 368.14L20.8942 341.763M23.2074 389.89L20.8942 341.763M23.2074 389.89L14.8796 373.231L20.8942 341.763M20.8942 341.763L7.93982 317.236 ';
// 			window.animateSVGPath({
// 			path,
// 			selector: '.animate-js-second',
// 			paddingVertical: 300,
// 			paddingHorizontal: 300
// 			});
// 		});
// 



