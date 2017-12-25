 jQuery(document).ready(function($) { 

  // Custom JS
  
 
 // карусель
 
   
 $('.slider__block').slick({
 		slidesToShow: 1,
    slidesToScroll: 1, 
    arrows: false, 
    dots: false,
  	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider__block',
   arrows: false, 
  dots: true,
});
		  
 // карусель
 $('.s-brands__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,  
    infinite: true,
    loop: true,  
    arrows: false,  
     variableWidth: true,
    
    });

});
