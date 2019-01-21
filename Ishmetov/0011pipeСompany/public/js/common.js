jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS
  
	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню
		var topH = $(".header-block").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > (topH /2)) {
				$('.top-nav  ').addClass('fixed-ready');
			} else {
				$('.top-nav  ').removeClass('fixed-ready');
			}

			
			if ($(this).scrollTop() > (topH * .8)) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}


		});
		// конец добавил
		// конец добавил
	}

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-menu-mobile--js").removeClass("on");
		// $("body").removeClass("fixed");
		$(".menu-mobile--js").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	$(" .top-nav a").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top - $('.top-nav').height() * .9;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });


 


	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель


	// window.onload = function() {

		//custom code
		var slideCount = $('.slideCount');
		var slickSlide = $('.s-gal__slider--js');
		
		slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			$('.slideCount').html('<span class="slideCountItem">' + i + '</span> ' + '/' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
		});
		
		
		slickSlide
		.on('lazyLoaded', function(event, slick, image, imageSource){
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});
		
		slickSlide.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
	dots: false,
	speed: 450,
	infinite: true,
	loop: true,
	arrows: true,
	mobileFirst: true,
	// centerMode: true,
	// focusOnSelect: true ,
	// variableWidth: true,
	prevArrow: arrr2,
	nextArrow: arrl2,
});

$('.s-gal__slider--js')
.on('lazyLoaded', function(event, slick, image, imageSource){
	image.parent().css('background-image', 'url(' + image.attr('src') + ')');
});
// slider
 
	// modal window
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
		tClose: 'Закрыть (Esc)',
	});

	// / modal window

	// modal галерея
	$(".gal").each(function () {

		$(this).find("a").magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			tClose: 'Закрыть (Esc)',
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
	// /modal галерея

	$('.popup-with-move-anim').click(function(){
		var th =$(this);
	 
			$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
			$(th.attr('href')).find(".order").val(th.data('order')); 
		$(th.attr('href')).find(".form-wrap__btn").text(th.data('btn')); 
	})

		// form
		$("form").submit(function () { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: 'action.php', //Change
				data: th.serialize()
			}).success(function () {
				// $.magnificPopup.close();
				$.magnificPopup.open({
					items: {
						src: '#thanks', 
						type: 'inline', 
						fixedContentPos: true,
						fixedBgPos: true, 
						overflowY: 'auto', 
						closeBtnInside: true,
						preloader: false, 
						midClick: true,
						removalDelay: 300,
						mainClass: 'my-mfp-zoom-in'
					}
				})
				// window.location.replace("/thanks.html");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
					// $.magnificPopup.close();
				}, 4000);
				ym(51692438, 'reachGoal', 'zakaz');
			});
			return false;
		});
		// /form
	// mask for input
	var customOptions = {
		onKeyPress: function (val, e, field, options) {

			if (val.replace(/\D/g, '').length === 2) {
				val = val.replace('8', '');
				field.val(val);
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input
 
	// убираем пробелы в телефоне
	$('[href^="tel:"]').each(function () {
		var str = $(this).attr('href');
		$(this).attr('href', str.replace(/\s/g, ''));
	})
	// $(".wow-wrap").each(function () {
	// var wowAnim = $(this).find(".s-dop__col," +
	//                 ".s-pick__col," +
	//                 ".s-condition__col");
	// wowAnim.each(function(i){

	// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

	//    var wow = new WOW({ mobile: false });
	//         wow.init();

	// });
	// });

		$(".header-block__before--js").click(function(){
			var destination = $('.header-blocks').offset().top - $('.top-nav.fixed-ready').height();
			$('html, body').animate({ scrollTop: destination }, 1100);
		})


			$(".s-prod__btn--more").click(function(){
				var parent = $(this).parents('.s-prod__item');
				parent.find(".s-prod__btn--more").toggleClass('active');
				parent.find(".s-prod__hidden-block").slideToggle();
			}) 
			$(".s-prod__btn--back-js").click(function(){
				var parent = $(this).parents('.s-prod__item');
				parent.find(".s-prod__btn--more").removeClass('active');
				parent.find(".s-prod__hidden-block").slideUp(); 
			})
				if (window.matchMedia("(min-width: 768px)").matches && $("div").is("#map1")) {
					$.getScript('//api-maps.yandex.ru/2.1/?lang=ru_RU', function(){
							// alert('script loaded');
					
						ymaps.ready(function () {
						var myMap = new ymaps.Map('map1', {
								center: [55.005015569688226,82.94555549999993],
								zoom: 17,
								behaviors: ['drag'],
				
								// controls: ["zoomControl", "fullscreenControl"]
							}, {
								searchControlProvider: 'yandex#search'
							}),
				
				
							myPlacemark = new ymaps.Placemark([55.005015569688226,82.94555549999993], {
								hintContent: 'г. Новосибирск,  Большевистская 101, оф. 902',
								balloonContent: 'г. Новосибирск,  Большевистская 101, оф. 902 '
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#image',
								// Своё изображение иконки метки.
								iconImageHref: $("#map1").data("img"),
								// Размеры метки.
								iconImageSize: [90, 90],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-42, -90]
							})
				
						myMap.geoObjects
							.add(myPlacemark)
				
				
				
					});
				}); 

			}


			// анимация на  блоки
 
	 
			
				// var wow = new WOW({
				// 	mobile: false
				// });
				// wow.init();
				
});


document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src =   lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});



document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});