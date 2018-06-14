 jQuery(document).ready(function($) {

	// для свг
	svg4everybody({});
	// Custom JS


	var url=document.location.href;
	$.each($(".top-nav__nav a "),function(){

	if(this.href==url){
		if($(this).hasClass("top-nav__link") == true){

		$(this).addClass('top-nav__link-active');
		}
		if($(this).hasClass("footer__link") == true){

		$(this).addClass('footer__link-active');
		}

	};

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
		$(".hidden-mnu").slideToggle();
		$("body, html").toggleClass("fixed");
		return false;
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
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 // $(" .top-nav a").click(function () {
 //        var elementClick = $(this).attr("href");
 //        var destination = $(elementClick).offset().top;

 //            $('html, body').animate({ scrollTop: destination }, 1100);

 //        return false;
 //    });


 // адаптивные табы
 $('.tabs-block').easyResponsiveTabs();

// слайдер
 var swiper1 = new Swiper('.slider-js', {
			// slidesPerView: 5,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

		});

		var swiper5 = new Swiper('.carusel-js', {
				 slidesPerView: 4,
				 spaceBetween: 30,
				 freeMode: true,
				 loop: true,
				 navigation: {
					 nextEl: '.swiper-button-next.arr-slider-2',
					 prevEl: '.swiper-button-prev.arr-slider-2',
				 },

			 breakpoints: {
					 991: {
						 slidesPerView:'auto',
					 },
					 576:{
							 freeMode: false,
							 slidesPerView:1,
					 }
				 }
			 });

		var swiper6 = new Swiper('.carusel-gal-js', {
				 slidesPerView: 3,
				 spaceBetween: 30,
				 freeMode: true,
				 loop: true,
				 navigation: {
					 nextEl: '.swiper-button-next.arr-slider-gal',
					 prevEl: '.swiper-button-prev.arr-slider-gal',
				 },
				 lazy: true,
	       lazy: {
	         loadPrevNext: true,
	       },
			 breakpoints: {
					 991: {
						 slidesPerView:'auto',
					 },
					 576:{
							 freeMode: false,
							 slidesPerView:1,
					 }
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


	 if ($("div").is("#map")){


	  ymaps.ready(function () {
	    var myMap = new ymaps.Map('map', {
	            center: [55.727896069024254,37.44885049999991],
	            zoom: 12,
	            behaviors: ['drag'],
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),
	        myPlacemark = new ymaps.Placemark([55.727896069024254,37.44885049999991], {
	            hintContent: 'Воронеж, ул. Уличная, 32, корп. 1',
	            balloonContent: 'Воронеж, ул. Уличная, 32, корп. 1 '
	        })

	    myMap.geoObjects
	        .add(myPlacemark)
	});
	 }

	 if ($("div").is("#map2")){


	  ymaps.ready(function () {
	    var myMap = new ymaps.Map('map2', {
	            center: [55.727896069024254,37.44885049999991],
	            zoom: 12,
	            behaviors: ['drag'],
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),
	        myPlacemark = new ymaps.Placemark([55.727896069024254,37.44885049999991], {
	            hintContent: 'Воронеж, ул. Уличная, 32, корп. 1',
	            balloonContent: 'Воронеж, ул. Уличная, 32, корп. 1 '
	        })

	    myMap.geoObjects
	        .add(myPlacemark)
	});
	 }


});
