$(function() {

	$('.number-plus-minus input ').styler({
				selectSearch: true,
			});
	function heightses() {
		var w = $(window).width();
   if (w> 768){
   $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".preim__item p ").height('auto').equalHeights();
		}	
    if (w< 768){
				$(".otz__item .text-wrap ").height('auto');
   $(".preim__item p ").height('auto');

			}
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();

});
