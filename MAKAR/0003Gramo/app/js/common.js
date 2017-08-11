$(function() {

	$(function() {
$(' .tabs__caption   .tab-btn:first-child ,  div.tabs__content:first-child ').addClass("active").addClass('current'); 
 $('.s-script  div.tabs__content:nth-child(2), .s-script .tabs__caption   li:nth-child(2)  ').addClass("active");
$(' .tabs__caption').on('click', '.tab-btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});

	$('.s-vozm  .tabs__caption.mob li').click(function(){
		$(".s-vozm .tabs__caption.mob li").removeClass("current")
		$(this).addClass("current")
		 $(".hide-div").slideUp(); 
		 // $(this).next().slideDown(); 
    if($(this).next().is(':visible')){ 
    	  $(this).next().slideUp();
    	  $(this).removeClass("current");
    }
     else
    {
        $(this).next().slideDown();
        // $(this).next().slideDown();
    	
    }
	})
// карусель в презентациях
$('.slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  speed: 600,
	   
	  infinite: false,
	   prevArrow: ' <div class="l"> </div>',
  nextArrow: '   <div class="r"> </div> ',
	  responsive: [
	    
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	      
	      }
	    },
	    {
	      breakpoint: 690,
	      settings: {
	        slidesToShow: 1,
	       
	      }
	    } 
	  ]
	});


$(" .top_line li a, p.bott.text-center a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


 var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
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
});
