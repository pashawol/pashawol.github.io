 jQuery(document).ready(function($) { 

  // Custom JS
  
 
 // карусель
 

    var galleryTop = new Swiper('.slider__block', {
      slidesPerView: 1,
      loop: true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });
    var galleryThumbs = new Swiper('.slider-nav', {
      // spaceBetween: 1,
      centeredSlides: true,
      slidesPerView: 1,
      loop: true,
      // touchRatio: 0.2,
      slideToClickedSlide: true,
       pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

		  
 // карусель
    var swiper = new Swiper('.s-brands__slider', {
      slidesPerView: 3,
      spaceBetween: 0,
       loop: true,
      
    }); 

});
