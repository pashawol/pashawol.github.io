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
   $(".prod-item__h3 ").height('auto').equalHeights();
    

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
    speed: 650,
    infinite: false,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="demo-icon icon-ar-left" > </i></div>',
      nextArrow: '   <div class="r"><i class="demo-icon icon-ar-right" > </i></div> ',
    autoplay: true,
  autoplaySpeed: 3000,
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

$('aside .sliderfor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,  
    arrows: true,
    rows: 1,
     prevArrow: ' <div class="l"><i class="demo-icon icon-ar-left" > </i></div>',
      nextArrow: '   <div class="r"><i class="demo-icon icon-ar-right" > </i></div> ',
     responsive: [
     {
          breakpoint: 10000,
          settings: {
            slidesToShow: 1,
          rows: 4,  
          }
        },
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
           rows: 1,  
          }
        },
   
     {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            rows: 1,  
            
          }
        },
      ]
  });

// слайдер с миниатюрами
 $('.slider-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false, 
  asNavFor: '.slider-small',
  dots: false,
  arrows: false,
  
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
  prevArrow: ' <div class="l"><i class="demo-icon icon-ar-left" > </i></div>',
      nextArrow: '   <div class="r"><i class="demo-icon icon-ar-right" > </i></div> ',
  // draggable: false 

  responsive: [
       
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
         
        }
      }
     
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


     // настройки здесь http://xdan.ru/samij-udobnij-datetimepicker.html
jQuery.datetimepicker.setLocale('ru');
$('.date_input').datetimepicker({
  format:'d.m.Y H:i',
  dayOfWeekStart: 1,
  // выбирает доспуное время
  allowTimes:[
'09:00','11:00','12:00','21:00'
],
 
  closeOnDateSelect:false,
  // closeOnWithoutClick :true
});

  $(".hidden-fil").click(function(){
    $(this).toggleClass("active");
     $(".hidden-cat").removeClass("active");
      $(".hidden-filter").slideToggle();
      $(".hidden-nav").slideUp();
  })
  $(".hidden-cat").click(function(){
    $(this).toggleClass("active");
     $(".hidden-fil").removeClass("active");
      $(".hidden-nav").slideToggle();
     $(".hidden-filter").slideUp();
  })

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

   $(".aside-menu__item-active  .aside-menu__sub").show();
   // выпадающее меню
// $('.aside-menu-pr .aside-menu__item-parent').on('click', function(){
//         $(this).removeAttr('href');
//         var element = $(this);
//         if (element.hasClass('aside-menu__item-active')) {
//             element.removeClass('aside-menu__item-active');
//             element.find('li').removeClass('aside-menu__item-active');
//             element.find('ul').slideUp();
//         }
//         else {
//             element.addClass('aside-menu__item-active');
//             element.children('ul').slideDown();
//             element.siblings('li').children('ul').slideUp();
//             element.siblings('li').removeClass('aside-menu__item-active');
//             element.siblings('li').find('li').removeClass('aside-menu__item-active');
//             element.siblings('li').find('ul').slideUp();
//         }
//     });



     var navbar =  $('.aside-menu-pr');
      var wrapper = $('.main-block');
      // var topH= $(".s-form__wrap").offset().top;
      // var topH2= $(".s-form__wrap").offset().bottom;
   // var botH=$(window).height() - $("footer  ").height() -  $(".s-blogger-2  ").height();
    $(window).scroll(function(){
        var nsc = $(document).scrollTop();
        if(wrapper.size() > 0){
            var bp1 = wrapper.offset().top;
        }else{
            var bp1 = 0;
        }

        // var bp2 = $('.content-block').offset().bottom - 300;
        
        navbar.css('top', 15); 

        if (nsc>bp1) {  navbar.css('position','fixed', 'top', 0); }
        else   { navbar.css('position','relative'); }

    });

    
// листалка по стр
 $(" .aside-menu__sub a , aside a.scroll , .header-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 50;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
  $("aside a.scroll").click(function(){
    $(".aside-menu__link").removeClass("aside-menu__link-active");
    $(this).addClass("aside-menu__link-active");
  })

  // // $("")
  // $('.foot-right  .custom-label').on('click',  function(e) {
  //    $(".foot-right__btn").removeAttr("disabled")
 
  // })

  var c = document.querySelector('.custom-label__input');
if(c !== null) {
    c.onclick = function () {
        if (c.checked) {
            $(".foot-right__btn").removeAttr("disabled")
        } else {
            $(".foot-right__btn").attr("disabled", "disabled")
        }
    }
}
});
