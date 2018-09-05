 jQuery(document).ready(function($) {

  // Custom JS
 

    $(".s-main__btn-wrap-js").each(function() {
        var ch = $(this).children();
					// добавил
					if  (ch.length > 2 ) {
						ch.find(".btn").addClass("btn-sm");

					}
          if  (ch.length == 3) {
             ch.find(".btn").addClass("btn-3");

             }
          // добавил
          if  (ch.length <= 3) {
             ch.removeClass(" col-4").removeClass(" col-6").addClass(" col-12");

             }
        else if  (ch.length <= 6) {
             ch.removeClass(" col-4").removeClass(" col-12").addClass(" col-6");

             }
          else  {
               ch.removeClass(" col-6").removeClass(" col-12").addClass(" col-4");
          }
    });
    $(".s-colors__btn-wrap-js").each(function() {
        var ch = $(this).children();
         if  (ch.length > 2) {
              ch.find(".btn").removeClass("btn-lg");


           }
           if  (ch.length > 3) {
              ch.removeClass("col-12").addClass("col-6");

           }

          if  (ch.length >= 4) {
             ch.filter(":odd").find(".btn").addClass("btn-right");

             }

             if  ( ch.length  == 2) {
                ch.find(".btn").addClass("btn-2-2");

             }
             if  ( ch.length  == 3) {
                ch.find(".btn").addClass("btn-3-3");

             }

          if  ( ch.length  == 4) {
                ch.find(".btn").addClass("btn-4-4");

             }
          if  (ch.length >= 5) {
                ch.find(".btn").addClass("btn-5-6");

             }

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


	function heightses() {
	 $(".section .btn ").height('auto').equalHeights();
	}
	$(window).resize(function() {
		heightses();
	});

	$( window ).on( "load", function() {
	 heightses();

	})
 heightses();
 
	
  $('#keyboard__mail').jkeyboard({
		 layout: 'english__mail',
			shift : false,
			capslock : false, 
			// layout_id : 0,
			input: $('#search__mail'),
		 
	 });
	  $('#keyboard__tel').jkeyboard({
	  	layout: 'numbers_only',
	   
	  	input: $('#search__tel'),

	  });
	  $('#keyboard__tel-2').jkeyboard({
	  	layout: 'litter',
	   
	  	input: $('#search__tel'),

	  });
		
	  $('#keyboard__tel-3').jkeyboard({
	  layout: 'numbers_only_2',
	   
	  	input: $('#search__tel'),

	  });

	 $('.btn-mail').click(function () {
	 $('#keyboard__mail').slideDown();
	 $('#keyboard__tel').slideUp();
	 $('#search__mail').addClass('active');
		$('#search__tel, .btn-tel').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.btn-tel').click(function () {
		
		$('#keyboard__tel').slideDown();
		$('#keyboard__mail').slideUp();
		$('#search__mail, .btn-mail').removeClass('active');
		$('#search__tel').addClass('active');
		$(this).addClass('active');
		});
		
		$("input[type='tel']").inputmask(
			// "[9]{1,2}(999)999-99-99"
			"[9](999)999-99-99"
			, {
			autoUnmask: true,
			showMaskOnHover: false,
				showMaskOnFocus: false,
		});
	  // маска на инпут
	 var galleryThumbs = new Swiper('.s-card__slider', {
		  	// effect: 'flip',
		  	// grabCursor: true,
				init: false,
		  	loop: true,
		  	effect: 'coverflow', 
		  	centeredSlides: true,
				slidesPerView: 'auto',
				slideToClickedSlide: true,
				speed: 650,
				shortSwipes: false,
				longSwipes: false,
				followFinger: false,
				allowTouchMove: false,
				touchMoveStopPropagation: false,
				touchRatio: 0.2,
		  	coverflowEffect: {
		  		depth: 15,
		  		rotate: 0,
		  		stretch: 7.58,
		  		modifier: 1,
		  		slideShadows: false,
		  	},
		  	navigation: {
		  		nextEl: '.swiper-button-next',
		  		prevEl: '.swiper-button-prev',
				},
			 
			});
 
	 var galleryTop = new Swiper('.gallery-top', {
		 // effect: 'flip',
		 // grabCursor: true,
		 init: false,
		 loop: true,
		 centeredSlides: true,
		 slidesPerView: 'auto',
		 slideToClickedSlide: true,
		 speed: 850,
		 shortSwipes: false,
		 longSwipes: false,
		 followFinger: false,
		 allowTouchMove: false,
		 touchMoveStopPropagation: false,
		 touchRatio: 0.2,
		 effect: 'coverflow',
		 coverflowEffect: {
			 depth: -3,
			 rotate: 0,
			 stretch: 0,
			 modifier: 1,
			 slideShadows: false,
		 },
		 
	 });
	 if( $("div").is(".gallery-top")){

		//  galleryTop.controller.control = galleryThumbs;
		 galleryThumbs.controller.control = galleryTop;
		}


			if ($(".s-card__slide").length > 2){
				$(".s-card__slide").removeClass("active");
				$(".swiper-container").removeClass("active");
				$(".swiper-wrapper").removeClass("justify-content-center");

				$(".slick-arrow").show();
				if( $("div").is(".gallery-top")){
				galleryTop.init();
				}
				galleryThumbs.init();
			}

});
