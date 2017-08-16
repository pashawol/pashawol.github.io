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
 $(" .top-nav a, .a-scroll, .wrapp-hidden li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top + 40;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

// табы
$(function() {
// $(' .tabs__caption   .tabs-btn  ').addClass("active")
 // $('.tabs__content:first-child ').addClass("active");
$(' .tabs').on('click', '.tabs__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('.tabs__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
    $(".tabs__hidden").fadeOut();
    $('.tabs__slider-big, .tabs__slider, .tabs__small-slider').slick('unslick');
     section_slider();
    return false;
});
});

 
   
 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
  
 var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> ')
  // слайдер в каталоге
   function  section_slider(){

       $('.tabs__slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 450,
      asNavFor: '.tabs__slider',
      draggable: false,
      fade: true,
    });

   
  $('.tabs__slider').slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true, 
    // centerMode: true,
    asNavFor: '.tabs__slider-big',
    prevArrow: arrl,
    nextArrow: arrr,
    focusOnSelect: true,
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

   $('.tabs__small-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        infinite: true,
        loop: true,  
        arrows: true, 
        centerMode: true,
        prevArrow: arrl,
        nextArrow: arrr,
        
        }); 
    }
    section_slider();


$(".tabs__item").click(function(){
  $(".tabs__item").removeClass("active")
  $(this).addClass("active");
  $(".tabs__hidden").fadeIn();
   $('.tabs__small-slider, .tabs__slider-big, .tabs__slider').slick('unslick');
  section_slider();
})
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});
