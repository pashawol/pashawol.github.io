jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


	var url = document.location.href;
	$.each($(".top-nav__nav a "), function () {

		if (this.href == url) {
			if ($(this).hasClass("top-nav__link") == true) {

				$(this).addClass('top-nav__link-active');
			}
			if ($(this).hasClass("footer__link") == true) {

				$(this).addClass('footer__link-active');
			}

		};

	});
	// галерея
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
	// мобильное меню

	$(".wrapp-hidden .menu-item-has-children ").each(function(){
		$(this).append('<div class="toggle-l"></div>');
	})

	$( '.wrapp-hidden .menu-item-has-children  ').on('click', '.toggle-l', function(){
			$(this).prev().slideToggle().parent().toggleClass("active");
			return false;
		}) 

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
		if (container.has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});

	function heightses() {

		var w = $(window).width(); 
		// скрывает моб меню

		var topH = $(".header-block ").innerHeight();
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			}
			else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
	}

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
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
	$(" .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });
	var icon = '<svg class="icon icon-arr-left "><use xlink:href="img/svg/sprite.svg#arr-left">';

	var arrr2 = (' <div class="l">' + icon),
		arrl2 = (' <div class="r">' + icon);
	//  слайдер в  карточке товара
$(' .s-gal__slider-big').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	speed: 450,
	asNavFor: '.s-gal__slider-small',
	infinite: true,
	loop: true,
	arrows: false,
	swipe: false,
});
$('.s-gal__slider-small').slick({
	slidesToShow: 7,
	slidesToScroll: 1,
	dots: false,
	speed: 450,
	infinite: true,
	loop: true,
	arrows: true,
	prevArrow: arrr2,
	nextArrow: arrl2,
	swipe: false,
	// focusOnSelect: true,
	asNavFor: '.s-gal__slider-big',
	responsive: [

		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 6,
			}
		},
		
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 5,
			}
		},
		
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
			}
		},
		
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
			}
		},
		


		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
	// swipeToSlide: false
}); 

$('.s-gal__slider-big, .s-gal__slider-small')
.on('lazyLoaded', function(event, slick, image, imageSource){
		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
});
 
	// маска на инпут
	// $("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({ "mask": "+7(999)999-99-99" });

	$('[data-target="#modal-win"]').click(function () {
	 
		$("#modal-win .h3").html($(this).data("title"));
		$("#modal-win .btn").text($(this).data('btn')); 
		$("#modal-win .order").val($(this).data('order'));
	})

});
