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
	}
 
	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	$(" .top-nav__link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top - 90;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });

 



	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.s-team__slider').slick({
		slidesToShow: 3,
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
	
	$('.s-rew__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4, 
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3, 
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2, 
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	
	$('.s-rates__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 650,
		infinite: true,
		arrows: false,
		mobileFirst: true,
		adaptiveHeight: true
	});
	
	$('.s-rew__slider')
.on('lazyLoaded', function(event, slick, image, imageSource){
	 image.parent().css('background-image', 'url(' + image.attr('src') + ')');
});
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
		mainClass: 'my-mfp-zoom-in'
	});

	// / modal window

	// modal галерея
	$(".gal").each(function () {

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
	// /modal галерея


	// mask for input
	var customOptions = {
		onKeyPress: function (val, e, field, options) {

			if (val.replace(/\D/g, '').length === 2) {
				// val = val.replace('8', '');
				// field.val(val);
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
	
	$('.popup-with-move-anim').click(function(){
		var th =$(this);
		if($(this).is(".s-rates__btn")){

			$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title') +'  <div class="text-primary2">'+th.data('type'));
			$(th.attr('href')).find(".order").val(th.data('title') +' '+th.data('type'));
		} 
		else{
			$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
			$(th.attr('href')).find(".order").val(th.data('btn'));

		}
		$(th.attr('href')).find(".form-wrap__title-sub--js").text('Заполните форму, и мы свяжемся с Вами в течение дня для уточнения деталей');
		$(th.attr('href')).find(".form-wrap__btn").val(th.data('btn'));
		$(th.attr('href')).find(".btn-name").text(th.data('btn'));
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
			});
			return false;
		});
		// /form
	

});