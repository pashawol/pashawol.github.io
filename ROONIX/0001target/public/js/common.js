 jQuery(document).ready(function($) {

	// для свг
	svg4everybody({});
	// Custom JS
 if ($("div").is("#bgvid")){
	var vid = document.getElementById("bgvid");


	if (window.matchMedia('(prefers-reduced-motion)').matches) {
			vid.removeAttribute("autoplay");
			vid.pause();
			pauseButton.innerHTML = "Paused";
	}

	function vidFade() {
		vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function()
	{
	// only functional if "loop" is removed
	vid.pause();
	// to capture IE10
	vidFade();
	});
	}

	$("body").on("change", ".form-control", function () {
		if ($(this).val() === ''){

			$(this).removeClass("active").next(".form-wrap__title").removeClass("active");
		}
		else{
			$(this).addClass("active").next(".form-wrap__title").addClass("active");

		}

	})
			// галерея
	$(".gal").each(function(){

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
	 var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});

	$(document).mouseup(function (e) {
	var container = $(".hidden-mnu.active");
	if (container.has(e.target).length === 0){
		 $(".toggle-mnu-1").removeClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
			}
	});
	function heightses() {

		var w = $(window).width();
	 // $(".otz__item .text-wrap ").height('auto').equalHeights();
	 //
		// скрывает моб меню
		if (w>991){
			 $(".toggle-mnu-1").removeClass("on");
				// $("body").removeClass("fixed");
				$(".hidden-mnu").removeClass("active");
				$("body").removeClass("fixed");
		}
		var topH=$("header ").innerHeight();

		$(window).scroll(function(){
								if($(this).scrollTop()>topH){
										$('.top-nav  ').addClass('fixed');
								}
								else {
										$('.top-nav  ').removeClass('fixed');
								}

						});
			 // конец добавил
	}

	$(window).resize(function() {
		heightses();

	});
 heightses();

 $(window).scroll(function(){
		 if($(this).scrollTop()>250){
				 $('.btn-top--js ').addClass('active');
		 }
		 else {
				 $('.btn-top--js ').removeClass('active');
		 }

 });
 // листалка по стр
	$(" .header-block__scroll--js").click(function () {
				 var elementClick = $(".s-about");
				 var destination = $(elementClick).offset().top;

						 $('html, body').animate({ scrollTop: destination }, 1100);

				 return false;
		 });
 // листалка по стр
	$(" .btn-top--js").click(function () {
				 var elementClick = $("body");
				 var destination = $(elementClick).offset().top;

						 $('html, body').animate({ scrollTop: destination }, 1100);

				 return false;
		 });
// cлайдер для каталога
$(".carusel-js-wrap").each(function(){
	var th = $(this);
	var swiper2 = new Swiper(th.find('.cat-carusel-js'), {
		navigation: {
			nextEl: th.find('.swiper-button-next'),
			prevEl: th.find('.swiper-button-prev'),
		},

		lazy: true,
		lazy: {
		 loadPrevNext: true,
	 },
		slidesPerView: 4,
		loop: true,
		spaceBetween: 20,
		speed: 900,
		breakpoints: {
		479: {
			 slidesPerView: 1,
		 },

		 991: {
			 slidesPerView: 2,
		 },
		 1199: {
			 slidesPerView: 3,
		 },

	 }
	});
 })

	var swiper3 = new Swiper('.filter-carusel-js', {

		slidesPerView: 'auto',
		spaceBetween: 30,
		speed: 900,
		clickable: true,
	});

	var icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.98 12"><title>arrow-right</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><path d="M32,12c-.2-.21-.4-.43-.61-.64s-.51-.49-.79-.75L34.19,7H0V5H34.15l0,0L30.66,1.42l.24-.26,1-1.05L32,0h0L38,6l-.3.31L34.4,9.62,32.06,12Z"/></g></g></svg>';

var   arrl2 = (' <div class="l">'+ icon),
			arrr2 =(' <div class="r">'+ icon);
// слайдер    в карточке

$('.s-card-head__slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		asNavFor: '.s-card-head__slider-small',
		infinite: false,
		loop: false,
		arrows: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
	});
 $('.s-card-head__slider-small').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: false,
			loop: false,
			 arrows: false,
			vertical: true,
			verticalSwiping: true,
			// centerMode: true,

			focusOnSelect: true ,
			asNavFor:  '.s-card-head__slider-big',
	
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
		mainClass: 'my-mfp-zoom-in',
		callbacks: {
			open: function () {
				$("#modal-basket").each(function () {
					var th = $(this);
					var swiper4 = new Swiper(th.find('.cat-carusel-js'), {
						navigation: {
							nextEl: th.find('.swiper-button-next'),
							prevEl: th.find('.swiper-button-prev'),
						},

						lazy: true,
						lazy: {
							loadPrevNext: true,
						},
						slidesPerView: 3,
						loop: true,
						spaceBetween: 20,
						speed: 900,
						breakpoints: {
							479: {
								slidesPerView: 1,
							},

							991: {
								slidesPerView: 2,
							},
							// 1199: {
							// 	slidesPerView: 3,
							// },

						}
					});
				})

			},
		 
		}
	});



	 if ($("div").is(".container-mix")){
		var containerEl = document.querySelector('.container-mix');

		var mixer = mixitup(containerEl);
	}


	$(".filter-drop--js").click(function(){
		$(this).toggleClass("active");
		$(".child--js").slideToggle();
	})


	// табы
	$(function() {
	var tab = ('tabs');
	$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn().addClass('active');
	});
	});
	// табы в order
	$(function() {
	$('.btn-radio__input').each(function  () {

		$(this).click(function (e) {
			$(this).closest('.s-order__item').find('.delivery-var').hide().removeClass('active')
				.eq($(this).parents(".btn-col").index()).fadeIn().addClass('active');
		});
	})
	});


	    // стики

	    $(".stick_in").stick_in_parent({
	    	offset_top: 65
			});
			 // маска на инпут
			 $("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
			 	"mask": "+7(999)999-99-99"
			 });
});
