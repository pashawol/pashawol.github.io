jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS
 

		var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

	// галерея
	$(".gal").each(function () {

		$(this).find("a").magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: true,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
			 
				cursor: 'mfp-zoom-out-cur', // Class that adds  
				verticalFit: true, // Fits image in area  
			},
			gallery: {
				enabled: true,
					arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">' + icon + '</button>', // markup of an arrow button
						titleSrc: 'title', // Attribute of the  
			}
		});
	})

 
 

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + icon);
	// карусель
	$('.s-content__slider').slick({
	   slidesToShow: 2,
	   slidesToScroll: 1,
	   dots: false,
	   speed: 450,
	   infinite: true,
	   loop: true,
		 arrows: true,
		 mobileFirst: true, 
			prevArrow: arrl2,
			nextArrow: arrr2,
			responsive: [{
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
 $('.s-content__slider')
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
	$("input[type='tel']").attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
		"mask": "+9(999)999-99-99"
	});

 

	// кастомный инпут файл

	var file = $(".add-file input[type=file]");
	file.change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		var name = $(".add-file__filename  ");
		name.text(filename);

	});
 
	$('body').prepend('<div class="catalog-bg">');
  // аккордион в боковом меню
	$(".s-catalog__link--js").click(function (e) {
		e.preventDefault();
		var accord = $(this).next();
		accord.hasClass("active") ?  (accord.slideUp(200).removeClass("active"), $(this).removeClass("active")) : (accord.slideDown(200).addClass("active"), $(this).addClass("active"));
		
	})
	// показать список товаров
	$('.s-catalog__link--sub-js').click(function () {
		$('.s-catalog__link--sub-category-js, .s-catalog--sub-prod-js ').removeClass('active');
		$(this).toggleClass('active').parent().siblings().find('.s-catalog__link--sub-js ').removeClass('active');
		

		!$(this).hasClass("active") ? ($('.s-catalog--sub-category-js ').removeClass('active'), $("body, html").removeClass("fixed"), $('.close-menu-wrap').removeClass('close-hidden')) : ($('.s-catalog--sub-category-js, .s-catalog--menu-js').addClass('active'), $("body, html").addClass("fixed"), $('.close-menu-wrap').addClass('close-hidden'));
		
	})
	
	// показать  товар
		$('.s-catalog__link--sub-category-js').click(function () {
			$(this).toggleClass('active').parent().siblings().find('.s-catalog__link--sub-category-js ').removeClass('active');

			!$(this).hasClass("active") ? ($('.s-catalog--sub-prod-js').removeClass('active')) : ($('.s-catalog--sub-prod-js').addClass('active'));
			
			})
			// закрыть окно продукта
			$('.s-catalog__close--prod-js').click(function () {
				$('.s-catalog__link--sub-category-js, .s-catalog--sub-prod-js ').removeClass('active');
				// $("body, html").removeClass("fixed")
				
			})
			
			// закрыть окно категории клик по белому фону
		$('.catalog-bg ').click(function () {
			$('.s-catalog--menu-js, .s-catalog__link--sub-js, .s-catalog--sub-category-js, .s-catalog__link--sub-category-js, .s-catalog--sub-prod-js ').removeClass('active');
			$("body, html").removeClass("fixed").removeClass("fixed-mob");
			
		})
		
		// закрыть окно категории

		function CloseCategry( ) {
			$('.s-catalog__link--sub-js, .s-catalog--sub-category-js, .s-catalog__link--sub-category-js, .s-catalog--sub-prod-js ').removeClass('active');
			
		}

		
		$('  .s-catalog__close--category-js').click(function () {
			CloseCategry();
			$('.close-menu-wrap').toggleClass('close-hidden');
			// $("body, html").removeClass("fixed")
		 
			})

			
			// закрыть окно меню 
		$('.s-catalog__close--menu-js').click(function () {
			CloseCategry();
			$('.s-catalog--menu-js ').removeClass('active');
			$("body, html").removeClass("fixed").removeClass("fixed-mob");
			})

		$(".toggle-menu-js").click(function () {
			$('.s-catalog--menu-js ').addClass('active'); 
			$("body, html").toggleClass("fixed-mob");
		
		 
			})
 
 
var wow = new WOW({ mobile: false });
		 wow.init();

});
