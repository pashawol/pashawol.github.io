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

      // галерея
  $(".gal").each(function(){

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
// слайдер в серт
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
		 // when window width is <= 320px

		 // when window width is <= 480px
		479: {
			 slidesPerView: 1,
		 },

		 991: {
			 slidesPerView: 2,
		 },

		 // when window width is <= 640px


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
			arrows: false,

	});
 $('.s-card-head__slider-small').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: false,
			loop: false,
	   	arrows: true,
	    prevArrow: arrr2,
	    nextArrow: arrl2,
			vertical: true,
			verticalSwiping: true,
			// centerMode: true,

			focusOnSelect: true ,
			asNavFor:  '.s-card-head__slider-big',
			responsive: [

			    {
			      breakpoint: 575,
			      settings: {
			        slidesToShow: 4,
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
										// swipeToSlide: false
			});
 // карусель
 // $('.s-team__slider').slick({
 //    slidesToShow: 3,
 //    slidesToScroll: 1,
 //    dots: false,
 //    speed: 450,
 //    infinite: true,
 //    loop: true,
 //    // centerMode: true,
 //    // focusOnSelect: true ,
 //     // variableWidth: true,
 //    arrows: true,
 //     prevArrow: arrr2,
 //      nextArrow: arrl2,
 //    });

// слайдер цвета в карточке

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

	 if ($("div").is(".container-mix")){
		var containerEl = document.querySelector('.container-mix');

	  var mixer = mixitup(containerEl);
	}


	$(".filter-drop--js").click(function(){
		$(this).toggleClass("active");
		$(".child--js").slideToggle();
	})
});
