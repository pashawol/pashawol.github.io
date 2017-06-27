$(function() {

	// Custom JS
	function heightses() {

   
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".problem").height('auto').equalHeights();
    
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

 
});
