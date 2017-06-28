$(function() {

	// Custom JS
	function heightses() {

   
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".problem").height('auto').equalHeights();
   $(".when__item").height('auto').equalHeights();
    
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 $(" .link__map").click(function () {
        var elementClick = $(".map");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


  $(".vyb__open").click(function(){
      var th = $(this);
      $(".vyb__close").hide();
      $(".vyb__hidden").slideUp();
      $(".vyb__open").show();
      $(".vyb__item-wrap").removeClass("open");
      th.prev().slideDown().prev().show();
      th.parents(".vyb__item-wrap").addClass("open");
      th.hide();
  })
  
  $(".vyb__close").click(function(){
      var th = $(this);
      $(".vyb__item-wrap").removeClass("open");
      th.next().slideUp().next().show();
      th.hide();
  })



  $(".our__open").click(function(){
      $(".our__item ul").slideUp();

      $(".open").removeClass("hidden");
      $(".our__open").removeClass("active");
      $(".close").addClass("hidden");
      
      var th = $(this);
      th.prev().slideToggle();
      th.toggleClass("active");
      th.find(".open").toggleClass("hidden");
      th.find(".close").toggleClass("hidden");
  })
  
  $(".our__open.active").click(function(){
      $(".our__item ul").slideUp();

      $(".open").removeClass("hidden");
      $(".our__open").removeClass("active");
      $(".close").addClass("hidden");

      
  })
  
 

  $('section.otz .row.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    speed: 900,
    infinite: false,
    loop: false,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
    nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
        responsive: [
      
     
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        
        }
      }
    ]
  });
});
