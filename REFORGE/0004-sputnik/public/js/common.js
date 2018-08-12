 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS

 
// меню
 function rest() {


 	// Cache selectors
 	var lastId,
 		topMenu = $(".top-nav ul"),
 		topMenuHeight = 80,
 		// All list items
 		menuItems = topMenu.find("a"),
 		// Anchors corresponding to menu items
 		scrollItems = menuItems.map(function () {
 			var item = $($(this).attr("href"));
 			if (item.length) {
 				return item;
 			}
 		});

 	// Bind click handler to menu items
 	// so we can get a fancy scroll animation
 	menuItems.click(function (e) {
 		var href = $(this).attr("href"),
 			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
 		$('html, body').stop().animate({
 			scrollTop: offsetTop
 		}, 1500);
 		e.preventDefault();
 	});

 	// Bind to scroll
 	$(window).scroll(function () {
 		// Get container scroll position
 		var fromTop = $(this).scrollTop() + topMenuHeight;

 		// Get id of current scroll item
 		var cur = scrollItems.map(function () {
 			if ($(this).offset().top < fromTop)
 				return this;
 		});
 		// Get the id of the current element
 		cur = cur[cur.length - 1];
 		var id = cur && cur.length ? cur[0].id : "";

 		if (lastId !== id) {
 			lastId = id;
 			// Set/remove active class
 			menuItems
 				.parent().removeClass("active")
 				.end().filter("a[href='#" + id + "']").parent().addClass("active");
 		}
 	});
 }

 rest();

 $('.player_audio').click(function () {
 	if (this.paused == false) {
 		this.pause();
 		$(this).parent().removeClass("play");

 	} else {
 		// $('.player_audio').pause();
 		$("audio").trigger("pause").parent().removeClass("play");
 		this.play();
 		$(this).parent().addClass("play");

 	}
 });
 $('.player_audio').each(function () {

	 if ($('.player_audio').stopped == true){
		 
		 $(this).parent().removeClass("play");
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
      // titleSrc: function(item) {
      //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      // }
    },
    gallery: {
      enabled: true
    }
  });
	})
	
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	 
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
// мобильное меню
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
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body, html").removeClass("fixed");
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
    var topH = $(".top-nav-wrap").offset().top;
		$(".top-nav-wrap").css("margin-bottom", $(".top-nav").height())
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed');
                }
                else  {
                    $('.top-nav  ').removeClass('fixed');
                }
            });
       // конец добавил
  }

  $(window).resize(function() {
    heightses();

  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 $(" .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

            $('html, body').animate({ scrollTop: destination }, 1100);

        return false;
    });

  var swiper = new Swiper('.carusel-text--js', {
		slidesPerView: "auto", 
		loopedSlides: 26,
		loop: true,
		direction: 'vertical',
		freeMode: true,
		speed: 650,
		// autoHeight: true,
		nested: true,
		roundLengths: true,
		observer: true,
		observeParents: true,
	 
  	pagination: {
  		el: '.swiper-pagination',
			clickable: true,
  	},
			slideToClickedSlide: true,
			centeredSlides: true
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

 $('.popup-with-move-anim').click(function () {
	 $($(this).attr("href")).find(".extra.h5.text-center.pb-3")
	 .text($(this).data("title"));
	 $($(this).attr("href")).find(".form-wrap__btn")
	 .val($(this).data("btn"));
   })

 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

   
// анимация на  блоки
   var wowAnim = $(".s-warning__item," +
   	".s-protect li," +
   	".animate-block");
   wowAnim.each(function (i) {

   	wowAnim.eq(i).attr("data-wow-delay", i * .1 * 2 + "s");
   	// $(this).addClass("wow bounceInUp");


	 })
	   var wow = new WOW({
	   	mobile: false
	   });
		 wow.init();
		 

		  // accordion
		  $(".showhide").click(function () {


		  $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"),
		  	$(this).next("div").filter(function () {
		  		return "block" == $(this).css("display")
		  	}).slideUp().parent().removeClass("active"),
		  	$(this).next("div").filter(function () {
		  		return "none" == $(this).css("display")
		  	}).slideDown().prev("div").addClass("active").parent().addClass("active")
		  })
 
			// map
if ($("div").is("#map1")) {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map1', {
				center: [55.72503706901697, 37.39698199999999],
				zoom: 18,
				behaviors: ['drag'],

				// controls: ["zoomControl", "fullscreenControl"]
			}, {
				searchControlProvider: 'yandex#search'
			}),


			myPlacemark = new ymaps.Placemark([55.72503706901697, 37.39698199999999], {
				hintContent: 'г. Москва, ул. Горбунова 2, офис 301',
				balloonContent: 'г. Москва, ул. Горбунова 2, офис 301 '
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: $("#map1").data("img"),
				// Размеры метки.
				iconImageSize: [95, 105],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-42, -90]
			})

		myMap.geoObjects
			.add(myPlacemark)



	});
}


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

$(".s-about__btn-small").click(function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.s-about').find('.s-about__text-block ').removeClass('active ')
		.eq($(this).index()).addClass('active');
})

$(".s-about__text-block ").click(function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.s-about').find('.s-about__btn-small').removeClass('active ')
		.eq($(this).index()).addClass('active');
})


});
