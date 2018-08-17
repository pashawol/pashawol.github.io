 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS
 
 
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

 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});


   

		// map
		if ($("div").is("#map1")) {
			ymaps.ready(function () {
				var myMap = new ymaps.Map('map1', {
						center: [55.875392072540954, 37.588150415344224],
						zoom: 17,
						behaviors: ['drag'],

						// controls: ["zoomControl", "fullscreenControl"]
					}, {
						searchControlProvider: 'yandex#search'
					}),


					myPlacemark = new ymaps.Placemark([55.875392072540954, 37.588150415344224], {
						hintContent: 'Москва, Алтуфьевское ш., 	д.48, корпус 1 ',
						balloonContent: 'Москва, Алтуфьевское ш., 	д.48, корпус 1 '
					}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#image',
						// Своё изображение иконки метки.
						iconImageHref: $("#map1").data("img"),
						// Размеры метки.
						iconImageSize: [78, 71],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-42, -180]
					})

				myMap.geoObjects
					.add(myPlacemark)



			});
		}

	 $('.btn').click(function () {
		 var text = $(this).data('title'); 
		 $($(this).data("target")).find(".text--js").text(text + " и получите  ");
		 $($(this).data("target")).find(".form-wrap__btn").val($(this).data('btn'));
	   })
});
