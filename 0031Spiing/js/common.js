$(function() {

	$('.number-plus-minus input ').styler({
				selectSearch: true,
			});
	function heightses() {

   
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();

});
