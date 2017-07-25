$(function() {

	// Custom JS
	function heightses() {

   
   $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".news__caption h3 ").height('auto').equalHeights();
    
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();


 $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true, 
    loop: true, 
    arrows: false,
     // prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      // nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
 
  });


$(".complex__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true, 
    loop: true, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
 
  });


$(".slider-for4").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false, 
    loop: false, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
 
  });




// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });


  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99")
    .attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");



});
