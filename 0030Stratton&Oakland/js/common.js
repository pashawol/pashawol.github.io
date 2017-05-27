$(function() {

	$('.main').fullpage({
	 
navigation:true,
slidesNavigation:true,

navigationPosition:'right',

slidesNavPosition:'top',
responsiveWidth:767,
responsiveHeight: 660,
normalScrollElements: ".block-form"
	});
 
$(".link-wrap a").attr("href", ".block-form")
$(".link-wrap a").click(function(){
	 var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
    $("#fp-nav li:last-child a").click();    
        return false; 
})


$(window).on('load', function() {
  $('.preloader').delay(2000).fadeOut('slow');

 
});
$(".block ").each(function(){
	var th =$(this);
	th.find(".item").hover(function(){
		th.find(".item").toggleClass("fade");
		$(this).toggleClass("fadeIn");
	})
})
});
