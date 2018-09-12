jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	$('.popover-dismiss').popover({
		trigger: 'focus'
	})
 
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
	// мобильное меню
	
	$(".wrapp-hidden .menu-item-has-children ").each(function(){
		$(this).append('<div class="toggle-l"></div>');
	})

	$( '.wrapp-hidden .menu-item-has-children  ').on('click', '.toggle-l', function(){
			$(this).prev().slideToggle().parent().toggleClass("active");
			return false;
		}) 

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
		if (container.has(e.target).length === 0&& $(".top-nav").has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});

	$(".s-buttons__item--js").hover(function () {
		$(this).toggleClass("active").find("ul").slideToggle(150);
	  })
	function heightses() {

		var w = $(window).width();
		$(".s-buttons__item--js").height('auto').equalHeights();
		//

		$(".s-buttons__item-wrap--js").each(function () {
			var th = $(this);
			th.height('auto').height(th.find(".s-buttons__item--js").height());
		})

		// скрывает моб меню

		var topH = $(".top-nav").height();
		var topH2 = $("header ").height() ;
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH ) {
				$('.top-nav  ').addClass('fixed-ready');
			} else 
				$('.top-nav  ').removeClass('fixed-ready'); 
	 
			if ($(this).scrollTop() > topH2) {
				$('.top-nav  ').addClass('fixed');
			} else
				$('.top-nav  ').removeClass('fixed');
		});

		// конец добавил
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
	// $(window).on("load", function () {
	// 	heightses();

	// })

	heightses();



	// листалка по стр
	$(" .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination - 60}, 1100);

	       return false;
	   });

	// слайдер цвета в карточке
	var swiper2 = new Swiper('.slider-more-js', {
		// slidesPerView: 5,
		// slidesPerView: 1, 
		speed: 750,
		spaceBetween: 0, 
		loop: true,  
		preloadImages: false, 
		lazy: true,
		autoplay: {
			delay: $('.slider-more-js').data("speed"),
		},
		lazy: {
			loadPrevNext: true,
		},
	 
 });
 

  
//  слайдр  в шапке
$(".slider-js").each(function () {

	// слайдер цвета в карточке
	var swiper = new Swiper($(this), {
		// slidesPerView: 5,
		// slidesPerView: 1, 
		speed: 750,
		spaceBetween: 0, 
		loop: true,  
		preloadImages: false, 
		lazy: true,
		autoplay: {
			delay: $(this).data("speed"),
		},
		lazy: {
			loadPrevNext: true,
		},
		navigation: {
			nextEl: $(this).parents(".pos-r").find('.swiper-button-next'),
		 prevEl: $(this).parents(".pos-r").find('.swiper-button-prev'),
	 },
	 pagination: {
    el: $(this).parents(".pos-r").find('.swiper-pagination'),
		type: 'bullets',
		clickable: true,
  },
	 
 });
 if( $("div").is(".slider-more-js")){ 
	//  galleryTop.controller.control = galleryThumbs;
	swiper.controller.control = swiper2;
	}

})
 



$(".carusel-js").each(function () {

	// слайдер цвета в карточке
	var swiper3 = new Swiper($(this), {
		slidesPerView: 4,
		// slidesPerView: 1, 
		speed: 750,
		spaceBetween: 0, 
		loop: true,  
		preloadImages: false, 
		lazy: true,
		autoplay: {
			delay: $(this).data("speed"),
		},
		lazy: {
			loadPrevNext: true,
		},
		navigation: {
			nextEl: $(this).parents(".pos-r").find('.swiper-button-next'),
		 prevEl: $(this).parents(".pos-r").find('.swiper-button-prev'),
	 },
	 pagination: {
    el: $(this).parents(".pos-r").find('.swiper-pagination'),
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		 
		991: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 20,
		},
		420: {
			slidesPerView: 1,
			// spaceBetween: 10,
		}
	}
	 
 });
})
 
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

 
 

});
