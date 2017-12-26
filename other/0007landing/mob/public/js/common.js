 jQuery(document).ready(function($) { 

  // Custom JS
  
 
 // карусель
 
   
 $('.slider__block').slick({
    // slidesToShow: 1,
   //  slidesToScroll: 1, 
    arrows: false, 
    dots: false,  
    speed: 450, 
    asNavFor: '.slider-nav',
    touchThreshold: 5
});
$('.slider-nav').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
  asNavFor: '.slider__block',
   arrows: false, 
  dots: true,  
  speed: 450, 
  touchThreshold: 5
});
      
 // карусель
 $('.s-brands__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,  
    arrows: false,  
     variableWidth: true, 
     speed: 450,
     touchThreshold: 5
    
    });

});
