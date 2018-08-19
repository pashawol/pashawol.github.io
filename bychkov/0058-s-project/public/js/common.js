 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS
 
 // мобильное меню
 var toggMnu = $(".toggle-mnu-1").click(function () {

 	$(".toggle-mnu-1").toggleClass("on");
 	// $("body").toggleClass("fixed");
 	$(".hidden-mnu").toggleClass("active");
 	$("body, html").toggleClass("fixed");
 	return false;
 });

   function heightses() {

   	var w = $(window).width();
   	// $(".otz__item .text-wrap ").height('auto').equalHeights();
   	//


   	// скрывает моб меню

   	var topH = $("header ").innerHeight();

   	$(window).scroll(function () {
   		if ($(this).scrollTop() > topH) {
   			$('.top-nav  ').addClass('fixed');
   		} else {
   			$('.top-nav  ').removeClass('fixed');
   		}
   	});
   	// конец добавил
	 }
	 
	   $(window).resize(function () {
	   	heightses();

	   });


	   heightses();
   if (window.matchMedia("(min-width: 992px)").matches) {

   	$(".toggle-mnu-1").removeClass("on");
   	// $("body").removeClass("fixed");
   	$(".hidden-mnu").removeClass("active");
   	$("body").removeClass("fixed");
   }


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
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
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
 
  
	 $(".swiper-carusel").each(function () {

		 // слайдер цвета в карточке
		 var swiper4 = new Swiper($(this), {
			//  slidesPerView: 5,
			 slidesPerView: 'auto',
			 watchOverflow: true,
			 spaceBetween: 0,
			 freeMode: true,
			 watchOverflow: true, 
			 loop: true,
			 loopFillGroupWithBlank: true,
			 touchRatio: 0.2,
			 slideToClickedSlide: true,
       freeModeMomentum: true,
			 navigation: {
				 nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
      },
			
    });
	})
	
	 $(".s-gal__slider--js").each(function () {

		 // слайдер цвета в карточке
		 var swiper4 = new Swiper($(this), {
			 slidesPerView: 1, 
			 spaceBetween: 15, 
			 watchOverflow: true, 
			 loop: true,
			 loopFillGroupWithBlank: true,
			 
			 preloadImages: false, 
			 lazy: true,
			 loadPrevNext: true,
			 navigation: {
				 nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
			},
			 effect: 'flip',
			 grabCursor: true,
			 pagination: {
				 el: '.swiper-pagination',
			 },
			
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

 // листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

            $('html, body').animate({ scrollTop: destination }, 1100);

        return false;
    });
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});


  
	 $('.btn').click(function () {
		 var text = $(this).data('title'); 
		 $($(this).data("target")).find(".text--js").text(text + " и получите  ");
		 $($(this).data("target")).find(".form-wrap__btn").val($(this).data('btn'));
	   })
});
// 3caCXY$KRYZ03*Eclv
