jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS
  

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню
 

	};

	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	$(" .footer__link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });


	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	};
	tabscostume('tabs');



	var icon = '<img src="img/arrow-left.svg" alt=""/>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.s-team__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
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
	


			//custom code
			var slideCount = $('.slideCount');
			var slideCount2 = $('.slideCount2');
			var slickSlide = $('.header-block__slider--js');
			
			slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 1;
				$('.slideCount').html('<span class="slideCountItem">' + i + '</span> ' + 'из' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
				$('.slideCount2').html(i);

			});
			
			
			// slickSlide
			// .on('lazyLoaded', function(event, slick, image, imageSource){
			// 	image.parent().css('background-image', 'url(' + image.attr('src') + ')');
			// });
			
			slickSlide.slick({
	// $('.header-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		appendArrows: '.header-block__arrow-wrap',
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
	});

	$('.s-5-reasons__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
		speed: 600,
		// infinite: false,
		// loop: false,
		appendDots: '.s-5-reasons__dots-wrap',
		// loop: true,
		arrows: false,
		// mobileFirst: true,
		asNavFor: '.slider-nav--js'
		 
	});
	

	
	$('.slider-nav--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		// infinite: false,
		// loop: false,
		// appendDots: '.s-5-reasons__dots-wrap',
		// loop: true,
		arrows: false,
		mobileFirst: true,
		focusOnSelect: true,
		asNavFor: '.s-5-reasons__slider--js',
		responsive: [
			{

      breakpoint: 768,
      settings: {
        slidesToShow: 5
      }

		} 

	 ]
		 
	});

	$('.s-servises__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: false,
		loop: false,
		adaptiveHeight: true,
		// loop: true,
		arrows: false,
		// mobileFirst: true,
		 
	});

	$('.js-link-item[data-slide]').click(function (e) {
		e.preventDefault();
		var th = $(this),
			thAttr = +(th.data('slide'));
			if (+thAttr >= 0  && ($(".slick-active").data("slide") != thAttr) ){
				console.log(thAttr);
				$('.js-link-item').removeClass('active')
				$('.js-link-item[data-slide='+thAttr+']').addClass('active');
				$(".s-servises__slider--js").slick('slickGoTo', thAttr);
			}
		//   data-id-elem="9148"
		// return false;
	})
	$('.s-servises__slider--js').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		// console.log(nextSlide);
		
		$('.js-link-item').removeClass('active')
				$('.js-link-item[data-slide='+nextSlide+']').addClass('active');
	});



	$('.s-team__slider-lg--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
		speed: 600, 
		appendDots: '.s-5-reasons__dots-wrap', 
		arrows: false, 
		asNavFor: '.s-team__slider-sm--js'
		 
	});
	

	
	$('.s-team__slider-sm--js').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		// infinite: false,
		// loop: false,
		// appendDots: '.s-5-reasons__dots-wrap',
		// loop: true,
		arrows: false,
		mobileFirst: true,
		focusOnSelect: true,
		asNavFor: '.s-team__slider-lg--js',
		responsive: [
			{
				
				breakpoint: 1200,
				settings: {
					slidesToShow: 7,
					vertical: true,
					verticalSwiping: true,
				}
				
			} ,
			
			{
				
				breakpoint: 768,
				settings: {
					vertical: true,
					verticalSwiping: true,
				}
				
			} ,
			
			{
				
				breakpoint: 475,
				settings: {
					// slidesToShow: 4, 
					slidesToShow: 5,
      }

		} ,
		
			{
				
				breakpoint: 375,
				settings: {
					slidesToShow: 4, 
					// slidesToShow: 5,
      }

		} ,




	 ]
		 
	});


	// $('.s-servises__slider--js').slick({
	// 	slidesToShow: 1, 
	// 	dots: false,
	// 	infinite: false,
	// 	adaptiveHeight: true,
	// 	speed: 600, 
	// 	arrows: false, 
	// });


	$('.s-gal__slider,'+
	' .s-5-reasons__slider--js ,'+
	' .s-servises__slider--js ,'+
	' .s-project__slider--js ,'+
	' .s-servises__slider--js ,'+ 
	' .slider-for2 ')
.on('lazyLoaded', function(event, slick, image, imageSource){
	 image.parent().css('background-image', 'url(' + image.attr('src') + ')');
});
	// slider
	// var swiper4 = new Swiper('.color-slider', {
	// 	// slidesPerView: 5,
	// 	slidesPerView: 'auto',
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	freeMode: true,
	// 	watchOverflow: true,
	// 	slidesPerGroup: 3,

	// 	// centeredSlides: true,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},

	// });
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

	// form
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			$.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			})
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
			}, 4000);
		});
		return false;
	});
	// /form

	// mask for input
 
 
	$("input[type='tel']").attr("pattern", "[+]38[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+38(999)999-99-99"});

});


// Для лэзи загрузки


document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
							window.addEventListener("DOMContentLoaded", lazyLoad);
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
	window.addEventListener("DOMContentLoaded", lazyLoad);
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