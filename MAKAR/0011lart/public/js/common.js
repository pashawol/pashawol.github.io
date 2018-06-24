 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS


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
      $("body, html").removeClass("fixed");
        }
    });

  function heightses() {

    var w = $(window).width();
    // скрывает моб меню
    if (w>767){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$("header ").innerHeight();
    if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed');

                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed');

                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed');
                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed');
                }
            });
       // конец добавил
  }

  $(window).resize(function() {
    heightses();

  });
 heightses();

 // слайдер в шапке
 var swiper = new Swiper('.slider-js', {
	 navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev',
	 },
	 // autoplay: {
		//  delay: 5000,
		//  reverseDirection: true,
	 // },
	 lazy: true,
	 lazy: {
    loadPrevNext: true,
  },
	 speed: 900,
 });

 // слайдер в серт
 $(".carusel-js-wrap").each(function(){
	 var th = $(this);
	 var swiper2 = new Swiper(th.find('.carusel-js'), {
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
		 spaceBetween: 30,
		 speed: 900,
		 breakpoints: {
	    767: {
	      slidesPerView: 2,
				spaceBetween: 10
	    },
	    991: {
	      slidesPerView: 3,
	    }
	  }
	 });
	})
 // слайдер в серт
 var swiper3 = new Swiper('.cat-carusel-js', {
	 navigation: {
		 nextEl: '.carusel-js-wrap .swiper-button-next',
		 prevEl: '.carusel-js-wrap .swiper-button-prev',
	 },
	 // autoplay: {
		//  delay: 5000,
		//  reverseDirection: true,
	 // },
	 lazy: true,

	 slidesPerView: 3,
	 loop: true,
	 spaceBetween: 30,
	 speed: 900,
	 lazy: {

      loadPrevNext: true,

  },
	 breakpoints: {
    767: {
      slidesPerView: 1
    },
    991: {
      slidesPerView: 2,
			spaceBetween: 20,
    }
  }
 });

// слайдер    в карточке

 

var   arrl2 = (' <div class="l  swiper-button-hand swiper-button-hand-prev swiper-button-prev"><svg class="icon icon-arr-l "> <use xlink:href="img/svg/sprite.svg#arr-l"></use>   </svg>'),
			arrr2 =(' <div class="r  swiper-button-hand swiper-button-hand-next swiper-button-next"><svg class="icon icon-arr-lr "> <use xlink:href="img/svg/sprite.svg#arr-lr"></use>   </svg>');
	$(' .s-card-head__slider-big').slick({
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
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});


});
