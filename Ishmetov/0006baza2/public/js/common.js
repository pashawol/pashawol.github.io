jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS
  

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		
		// конец добавил
	}
	// скрывает моб меню
	if( !$("div").is('.one-page-js')) {
	var topH = $(".top-line ").height();

	$(window).scroll(function () {
		$(this).scrollTop() > 0 / 2 ?( $('.top-line  ').addClass('top-line--page-fixed')) :  	$('.top-line  ').removeClass('top-line--page-fixed');
		// $(this).scrollTop() > topH ?( $('.top-line  ').addClass('fixed')) :  	$('.top-line  ').removeClass('fixed');

	});

}

 


	// листалка по стр
	$(" .top-nav a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

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
	tabscostume('tab');



	var icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.01 11.98"><path id="dpc6a" class="cls-1" d="M0,6.19.2,6,0,5.79,5.65,0,7,1.36,3.45,5H43V7H3.44L7,10.61,5.65,12ZM2.47,6,3,6.52V5.45Z"/></svg>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.s-store-slider__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
	});

	$('.s-store-slider__slider--js')
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
				val = val.replace('8', '');
				field.val(val);
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input

 

	// кастомный инпут файл

	var file = $(".add-file input[type=file]");
	file.change(function () {
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


	$(".pretty-embed__bg").each(function () {
		// загрузка фона видео
		$(this).css("background-image", 'url(http://img.youtube.com/vi/' + $(this).data("src") + '/0.jpg)')
		// включение видео при клике по блоку
		$(this).click(function () {
			$(this).removeClass("on").next()
				.attr("src", 'https://www.youtube.com/embed/' + $(this).data("src") + '?autoplay=1').addClass("on");
		})
	})

 

if($("div").is('.one-page-js')) {

	new fullpage('.one-page-js', {
		anchors: ['#footer'],
		//options here
		navigation: false,
		slidesNavigation: true,
		sectionSelector: '.section-js',
		navigationPosition: 'right',
		responsiveWidth: 1200,
		responsiveHeight: 600,
		parallax: true,
		showActiveTooltip: true,
		lockAnchors: true,
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollOverflowReset: true,

		normalScrollElements: ".footer",
		onLeave: function (origin, destination, direction) {
			var leavingSection = this;

			//after leaving section 2
			if (origin.index == 0 && direction == 'down') {
				$(".top-line ").addClass("fixed-ready");
				// $(".count-block ").removeClass("text-white");
			} else if (origin.index == 1 && direction == 'up') {
				$(".top-line ").removeClass("fixed");

			}
			
			if (destination.index == 1) {
				// $(".count-block ").addClass("text-white");
				// $(".s-stores__col").addClass('fadeInRightBig');
			}

			if (destination.index == 2) {
				// $(".delievary-img").addClass('fadeIn');
				// $(".delievary-img-2").addClass('fadeInRightBig');
			}
			if ( !destination.isLast) {

				// $(".count-block__current--js ").animate({
				// 	opacity: 0,
				// }, 600).animate({
				// 	opacity: 1,
				// }, 600);
				$(".count-block").addClass('blick');
				setTimeout(() => {
					$(".count-block").removeClass('blick');
					
				}, 600);
			}
		},
 

		afterLoad: function (origin, destination, direction) {
			var loadedSection = this;
		
			//using index
			if (destination.index == 1) {
				$(".top-line ").addClass("fixed");
				if ($("div").is(".header-dark")){

					$(".count-block ").removeClass("text-white");
				}
				
				// alert
			}
			

			//using anchorLink
			if (destination.index == 0) {
				$(".top-line ").removeClass("fixed-ready");
				if ($("div").is(".header-dark")){

					$(".count-block ").addClass("text-white");
				}
				// alert("Section 2 ended loading");

			}
		
			if (destination.isLast) {

				// alert("Section 2 ended loading");
				$(".count-block__current--js").text("0" + (destination.index));
				$(".top-line").addClass("bg-white");
			} else {
				$(".count-block__current--js").text("0" + (destination.index + 1));
				$(".top-line").removeClass("bg-white");

			}
			// $(".count-block__current--js, .count-block__all--js").removeClass('blick').addClass("blick");

			$(".count-block__all--js").text("0" + ($(".section-js").length - 1));

			// console.log(destination.index);
			// deleteLog = true;
		},
	});

	$(" .scroll-link-down").click(function (e) {
		e.preventDefault();
		fullpage_api.moveSectionDown();
	});

	
	//  показать/ скрыть дочернее меню
		$(".aside-nav:not(.active)").hover(function () {
				fullpage_api.setAllowScrolling(false);
			},
			function () {
				fullpage_api.setAllowScrolling(true);
			}
		);
}
	var wow = new WOW({
		mobile: false
	});
	wow.init();




	$("  .menu-item-has-children>a").click(function (e) {
		e.preventDefault();
		// $(".aside-nav").removeClass("active");
		$(this).toggleClass("active")
			.next().toggleClass("active")
			.parent().toggleClass("active")
			.siblings().removeClass('active')
			.find('sub-menu, a').removeClass('active');
		// $("body, html").removeClass("fixed");
		$("body, html").toggleClass("fixed");
		$(".aside-nav").toggleClass("active")
		if($("div").is('.one-page-js')) {

			$(".aside-nav").hasClass('active') || !$(".aside-nav").hasClass('fixed')   ? fullpage_api.setAllowScrolling(false) : fullpage_api.setAllowScrolling(true);
			
		}
	})
	$(".toggle-sub-menu--js").click(function(){
		$(this).parents('.menu-item-has-children').find("  a.active").click();
	})

// / показать/ скрыть дочернее меню

//  показать/ скрыть   меню в моб версии

$(".toggle-menu--js").click(function () {
	$("body, html").toggleClass("fixed");
	$(".aside-nav").toggleClass('fixed')
	.hasClass('fixed') && $("div").is('.one-page-js') ? fullpage_api.setAllowScrolling(false) : fullpage_api.setAllowScrolling(true);
});
$(".aside-nav__toggle-menu--js").click(function () {
	$("body, html").removeClass("fixed");
	$(".aside-nav").removeClass('fixed').removeClass('active');
	if($("div").is('.one-page-js')) {
	 fullpage_api.setAllowScrolling(true);
	}
});


$(document).mouseup(function (e) {
	var container = $(".menu-item-has-children.active");
	if (container.has(e.target).length === 0) {
		$(".menu-item-has-children, .aside-nav, .sub-menu,  a ").removeClass('active');
		$("body, html").removeClass("fixed");
		if (!$(".aside-nav").hasClass('fixed') && $("div").is('.one-page-js')) {
		fullpage_api.setAllowScrolling(true);
		}
	}
});
 
$(document).mouseup(function (e) {
	var container = $(".aside-nav.fixed");
	if (container.has(e.target).length === 0 && !$(".aside-nav").hasClass("active")) {
		$(".aside-nav ").removeClass('fixed').removeClass('active');
		// $("body, html").removeClass("fixed");
		if($("div").is('.one-page-js')) {
		fullpage_api.setAllowScrolling(true);
	}
	}
});

//  /показать/ скрыть   меню в моб версии

// аккордион в  карточке товара
$(".s-prod-body__item-title").click(function(){
	$(this).toggleClass("active").next().slideToggle().toggleClass("active");
})
// /аккордион в  карточке товара
});