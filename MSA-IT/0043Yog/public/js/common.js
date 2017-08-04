$(function() {

	// Custom JS

// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });

	function heightses() {

    var w = $(window).width();
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    

    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }

    var topH=$("header ").innerHeight();  
    if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed');
                    
                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed');
                   
                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed');
                 
                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed');
                  
                }
            });
       // конец добавил 
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="demo-icon icon-ar-left" > </i></div>',
      nextArrow: '   <div class="r"><i class="demo-icon icon-ar-right" > </i></div> ',
 
  });


$('.sliderfor4').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="demo-icon icon-ar-left" > </i></div>',
      nextArrow: '   <div class="r"><i class="demo-icon icon-ar-right" > </i></div> ',
     responsive: [
        
       
        
     {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            
          }
        },
   
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
             
          }
        },
   
     {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            
            
          }
        },
   
     
 

      ]
  });


// всплываюзая галлерея
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
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
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});
