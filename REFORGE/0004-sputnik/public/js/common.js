 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS

 
// меню
 function rest() {


 	// Cache selectors
 	var lastId,
 		topMenu = $(".top-nav ul"),
 		topMenuHeight = 15,
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
 		}, 300);
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
		// effect: 'coverflow',
		// coverflowEffect: {
		// 	depth: 1,
		// 	rotate: 0,
		// 	stretch: 0,
		// 	modifier: 1,
		// 	slideShadows: false,
		// },
  	pagination: {
  		el: '.swiper-pagination',
			clickable: true,
  	},
			slideToClickedSlide: true,
			centeredSlides: true
  });

// слайдер цвета в карточке
 var swiper4 = new Swiper('.color-slider', {
      // slidesPerView: 5,
			slidesPerView: 'auto',
			
      watchOverflow: true,
      spaceBetween: 0,
      freeMode: true,
      slidesPerGroup: 3,
       // centeredSlides: true,
      loop: true,
      loopFillGroupWithBlank: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
       freeModeMomentum: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

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


 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function() {
          $.magnificPopup.close();
             $.magnificPopup.open({
        items: {
          src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      })
        // window.location.replace("/thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });

 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});


    //Replace all SVG images with inline SVG
  $('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }


        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

  });


  // кастомный инпут файл

  var file = $(".add-file input[type=file]");
  file.change(function(){
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


  $(".pretty-embed__bg").each(function(){
    // загрузка фона видео
  $(this).css("background-image",'url(http://img.youtube.com/vi/'  + $(this).data("src")+ '/0.jpg)')
  // включение видео при клике по блоку
   $(this).click(function(){
    $(this).removeClass("on").next()
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1').addClass("on");
   })
   })

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
});
