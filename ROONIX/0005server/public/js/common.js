 


jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

 
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
	$('.accordion-toggle-js').click(function(){
		$(this).toggleClass("active")
		.parents('.accordion-parent').find('.accordion-toggle-block-js').toggle().toggleClass("active");
	})
	
	$('.s-right__title').click(function(){
		$(this).toggleClass("active").next().slideToggle();
	})

});
 