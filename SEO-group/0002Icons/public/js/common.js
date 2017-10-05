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
      $(".hidden-mnu .toggle-mnu").click();
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
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
// табы
$(function() {
$(' .tabs__caption   .tabs__btn:first-child  ').addClass("active")
 $('.tabs__content:first-child ').addClass("active");
$(' .tabs__caption').on('click', '.tabs__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('.tabs').find('.tabs__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");


      // стрелки для слайдера
 var   arrl2 = (' <div class="l"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="30" viewBox="0 0 18 30"><path fill="#85131b" d="M17 30h-2.3L1 15 14.7 0H17L9.73 15z"/></svg></div>'),
      arrr2 =(' <div class="r"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="30" viewBox="0 0 18 30"><path fill="#85131b" d="M.99 30H3.3l13.71-15L3.3 0H.99l7.29 15z"/></svg></div> ')
 
    $('.slider6').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      speed: 450,
       lazyLoad: 'ondemand',
      // fade: true,
       arrows: true, 
      prevArrow: arrl2,
      nextArrow: arrr2,
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
            variableWidth: true
            
          }
        } 
      ]
    }); 


    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 450,
       lazyLoad: 'ondemand',
      // fade: true,
       arrows: true, 
      prevArrow: arrl2,
      nextArrow: arrr2,
      // variableWidth: true
    }); 

  // боковое меню
    $(".aside__sub ").each(function(){
      $(this).prev()
      .append('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 18 30"><path fill="#85131b" d="M.99 30H3.3l13.71-15L3.3 0H.99l7.29 15z"/>')
      $(this).prev().click(function(e){
        
       e.preventDefault();
        // $(".aside__link.current").removeClass("current");
        $(this).toggleClass('current')
        .next().slideToggle();
      })
    })
 
 $(" .mob-catalog__sub").each(function(){
      $(this).prev()
      .append('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 18 30"><path fill="#85131b" d="M.99 30H3.3l13.71-15L3.3 0H.99l7.29 15z"/>')
      $(this).prev().click(function(e){
        
       e.preventDefault();
        // $(".aside__link.current").removeClass("current");
        $(this).toggleClass('current')
        .next().slideToggle();
      })
    })
 


function plitki() {
  var $container = $(".main-block__row "); 
    $container.masonry({
      columnWidth: ".prod-item__main-block",
      itemSelector: ".prod-item__main-block",
       
    });
 
};
plitki();

$(".btn-catalog").click(function(){
  $(".mob-catalog").slideToggle();
})

 $('.panel__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450, 
            asNavFor: '.panel__slider-small', 
            infinite: false,  
            loop: false,  
              arrows: false, 
               responsive: [ 
      {
          breakpoint: 1199,
          settings: {
            prevArrow: arrl2,
            nextArrow: arrr2,
            arrows: true , 
           
          }
        } 
      ]
          }); 
         $('.panel__slider-small').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: false,  
              loop: false,  
              arrows: true, 
              // centerMode: true,
              prevArrow: arrl2,
              nextArrow: arrr2,
              focusOnSelect: true , 
              asNavFor:  '.panel__slider-big',
              vertical: true,
              // swipeToSlide: false
              }); 
          
     $('.panel__slider-big').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
  });
     $('input.number, .custom-select').styler();


     // модальное окно
   $('.popup-with-move-anim').magnificPopup({
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
});
