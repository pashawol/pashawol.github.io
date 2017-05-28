$(function() { 
$('.slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  speed: 600,
	   
	  infinite: false,
	   prevArrow: ' <div class="l"><i class="demo-icon icon-left-open-mini"></i></div>',
  nextArrow: '   <div class="r"><i class="demo-icon icon-right-open-mini"></i></div> ',
	});
 
 $('.btn-modal').magnificPopup({
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

  var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });
});
