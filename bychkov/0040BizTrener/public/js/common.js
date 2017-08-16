$(function() {


// листалка по стр
 $(".top-nav a, .trop.main-mnu a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
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
     // модалка
  $(".btn-modal").each(function(){
    $(this).attr("href", "#small-dialog")
   
  })

$(".slider__btn").each(function(){
    $(this).attr("href", "#direction-dialog")
    $(this).click(function(){
      $(".modal-text .too-modal").remove();
      $(this).parent().find(".too-modal").clone().prependTo(".modal-text")
    })
  })

  $("#thanks .btn-primary").click(function(){
    $(".mfp-close").click();
    return false;
  })
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");

    // модалка
   $('.btn-modal').magnificPopup({
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  }); 
 
    // $(".ui-slider-range").draggable();
 // видео в мод окне
 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
 


//  function section_slider(){

  
 
//  }

 $('.client__slider').slick({
  slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,
    rows: 3,
     prevArrow: ' <div class="l"><i class="icon-back" aria-hidden="true"> </i></div>',
      nextArrow: '   <div class="r"><i class="icon-back" aria-hidden="true"> </i></div> ',
       responsive: [
        
       
        
      {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
           
          }
        }, 
        
      {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
           
          }
        }, 

      {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            
          }
        },  
      {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
            rows: 2,
          }
        },
 
 {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
             rows: 2,
          }
        },
 

      ]
});
 $('.s-carusel__slider').slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,
    
     prevArrow: ' <div class="l"><i class="icon-back" aria-hidden="true"> </i></div>',
      nextArrow: '   <div class="r"><i class="icon-back" aria-hidden="true"> </i></div> ',
       responsive: [ 
      {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
           
          }
        }, 
      {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
           
          }
        } 
 

      ]
});



  $("section ").each(function(){
    $(this).find(".s-carusel__slider ").magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          // verticalFit: true,
          
        },
        gallery: {
          enabled: true
        },
        // zoom: {
        //   enabled: true,
        //   duration: 300, // don't foget to change the duration also in CSS
           
        // }
        
      });

  }) 
 function heightses() {
    var w = $(window).width();
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
  // if ( w< 767 ){
  //    section_slider();
    
  // }
  // else{
  //  // $('.client__slider').slick('unslick');
  // }
  
      
  }

  $(window).resize(function() {
    heightses();
  });

  $( window ).on( "load", function() {
 heightses();
})
  heightses();

 

  $('.trainer .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true, 
    loop: true, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-back" aria-hidden="true"> </i></div>',
      nextArrow: '   <div class="r"><i class="icon-back" aria-hidden="true"> </i></div> ',
 
  });
  

// форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: $("form").attr("action"), //Change
      data: th.serialize()
    }).done(function() {
          // $.magnificPopup.close();
         $.magnificPopup.open({
        items: {
          src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      })
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });
   $(".reviews__btn").click(function(){
      $(".reviews__item:hidden").slideDown();
      $(this).fadeOut(); 
    })
});
