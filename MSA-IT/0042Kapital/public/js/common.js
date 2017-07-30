$(function() {

	
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
    responsive: [
        
       
        
     {
          breakpoint: 1260,
          settings: {
            slidesToShow: 4,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
          }
        },
   
     
 

      ]
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
    responsive: [
        
       
        
     {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
         
          }
        },
   
     
 

      ]
  });

$(".slider-for2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false, 
    loop: false, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
    responsive: [ 
     
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
         
          }
        }
      ]
  });




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


// Custom JS
  function heightses() {
    var w = $(window).width();
   
   $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".news__item h3 ").height('auto').equalHeights();
   $(".complex__item ").height('auto').equalHeights();
    
    if (w>1260){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();


// слайдер на стр новостей
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
// слайдер с миниатюрами
 $('.slider-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  asNavFor: '.slider-small',
  dots: false,
   
  adaptiveHeight: true,

  // draggable: false 

});
$('.slider-small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-big',
  dots: false,  
  // centerMode: true,
  focusOnSelect: true,
  // vertical: false,
  arrows: true,
  prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
  nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
  // draggable: false 

  responsive: [
    
      
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
         
        }
      }
     
    ]
});




  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99")
    .attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");



});
