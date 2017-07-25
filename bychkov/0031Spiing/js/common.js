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



// листалка по стр
 $(" header a.btn, .stock a.btn ").click(function () {
        var elementClick = $(".catalog");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


// табы
$(function() {
// $(' .tabs__caption   .tab-btn:first-child  ').addClass("active")
 // $('.tabs__content:first-child ').addClass("active");
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
$(".btn-next").click(function(){
  $(this).parents(".tabs").find(".tab-btn.active").next().click();
  return false;
})
$(".back-link").click(function(){
  $(this).parents(".tabs").find(".tab-btn.active").prev().click();
  return false;
})

});
