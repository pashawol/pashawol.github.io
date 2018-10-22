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
			},
			gallery: {
				enabled: true
			}
		});
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

 
	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
	}

// изменить размер меню при скроле
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.top-nav  ').addClass('fixed');
		} else {
			$('.top-nav  ').removeClass('fixed');
		}
	});


	// листалка по стр
	// $(" .top-nav a").click(function () {
	//        var elementClick = $(this).attr("href");
	//        var destination = $(elementClick).offset().top;

	//            $('html, body').animate({ scrollTop: destination }, 1100);

	//        return false;
	//    });


	// табы  . Теперь данные активного таба остается в storage
	$(function () {
		var tab = ('tabs');

		$('.' + tab + '__caption').each(function (i) {
			var storage = localStorage.getItem('tab' + i);
			if (storage) {
				$(this).find('.' + tab + '__btn').removeClass('active').eq(storage).addClass('active')
					.closest('.' + tab).find('.' + tab + '__content').removeClass('active').eq(storage).addClass('active');
			}
		});

		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

			var ulIndex = $('.' + tab + '__caption').index($(this).parents('.' + tab + '__caption'));
			localStorage.removeItem('tab' + ulIndex);
			localStorage.setItem('tab' + ulIndex, $(this).index());

		});
	});

// выравнивает высоту в миниатюрах
	function heightses() {

		
		
		$(".s-catalog").each(function(){
			// if (window.matchMedia("(min-width: 992px)").matches) {
				$(this).find(".item-prod__title").height('auto').equalHeights();
				$(this).find(".item-prod__text").height('auto').equalHeights();
				// $(this).find(".item-prod__caption").height('auto').equalHeights();
			// }
				$(this).find(".item-prod__inner").height('auto').equalHeights();
				$(this).find(".item-prod").height('auto').height($(this).find(".item-prod__inner").height());
				// $(this).find(".item-prod__inner").height('auto').equalHeights();
			})
			
  }

  $(window).resize(function() {
    heightses();
   
  });
 

 heightses();
// показывает скрытый блок в миниатюрах
 $(".item-prod").hover(function(){
  $(this).find(".item-prod__toggle-block").slideToggle(100);
 })

	var icon = '<svg   viewBox="0 0 49 95" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M48 0.5L1 47.5L48 94.5" stroke="black"/> </svg>';

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + icon);
	// карусель
	$('.s-slider').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   dots: false,
	   speed: 450,
	   infinite: true,
	   loop: true,
		 arrows: true,
		//  autoplay: true,
  	// autoplaySpeed: 3000,
	   // centerMode: true,
	   // focusOnSelect: true ,
			// variableWidth: true,
			
	    prevArrow: arrr2,
			 nextArrow: arrl2,
			 adaptiveHeight: true
	   });
		 
	$('.s-catalog__slider').slick({
	   slidesToShow: 3,
	   slidesToScroll: 3,
	   dots: false,
	   speed: 450,
	   infinite: true,
	   loop: true,
		 arrows: true,
		//  autoplay: true,
  	// autoplaySpeed: 3000,
	   // centerMode: true,
	   // focusOnSelect: true ,
			// variableWidth: true,
			
	    prevArrow: arrr2,
			 nextArrow: arrl2,
			//  adaptiveHeight: true
			responsive: [
				{
					breakpoint: 991,
					settings: {
					 
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				} 
			]
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

  
 $(".top-nav__btn--basket").click(function(e){
	 e.preventDefault();
	$(this)
	.next().toggleClass("show")
	.parent().toggleClass("show");
 })

	$(document).mouseup(function (e) {
		var container = $(".basket-dropdown.show");
		if (container.parent().has(e.target).length === 0 ) {
			container.removeClass("show")
			.prev().attr("aria-expanded", "false")
			.parent().removeClass("show");
		}
	});

	// показать поиск в меню
	$(".top-nav__btn--search , .search-block__btn--close ").click(function(e){
		e.preventDefault();
		$(".search-block").toggle().find("input").focus();
	})

		// замедление ховера в меню
		var $li = $('.header .dropdown-cat').hover(
			function () {
					var self = this;
					hovertimer = setTimeout(function(){
							$(self).addClass('hover-block');
							// $("html, .top-nav.fixed").addClass("fixed-brand");
						}, 500);
					},
					function () {
						clearTimeout(hovertimer);
						$li.removeClass('hover-block');
						$("html, .top-nav.fixed").removeClass("fixed-brand");
			}
	);
});
