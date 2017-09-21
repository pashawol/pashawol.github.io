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
   // $(".category__item h3 ").height('auto').equalHeights();
    

    // скрывает моб меню 
    if (w>1199){
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


 
// табы
$(function() {
// $(' .tabs__caption   .tab-btn:first-child  ').addClass("active")
 // $('.tabs__content:first-child ').addClass("active");
$(' .tabs__caption').on('click', '.tabs__btn:not(.active)', function(e) {

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
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").attr("mask","+7(999)999-99-99");

  
    $.each($("[type='tel']"), function(i,v){
    $(this).inputmask({"mask": $(this).attr("mask")})
    });
   

 // стрелки для слайдера
 var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
      arrl2 = (' <div class="l"><svg  xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div>'),
      arrr2 =(' <div class="r"><svg  xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div> ')
    // слайдер в модальном окне
 

 $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1, 
    speed: 450, 
    arrows: true, 
    dots: true, 
    prevArrow: arrl2,
    nextArrow: arrr2,
});
    // слайдер на главной

$(".carusel").slick({
    slidesToShow: 3,
    slidesToScroll: 1, 
    speed: 450, 
    arrows: true, 
    dots: false, 
    prevArrow: arrl2,
    nextArrow: arrr2,
     responsive: [
   
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
             variableWidth: false
          }
        },
       
   
      {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
             variableWidth: false
          }
        },

 

      ]
});
    // слайдер на главной


      $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
       
    },
    gallery: {
      enabled: true
    },
    
    
  });

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



   // accordion
  $(".showhide").click(function() {
     $(".showhide-all").slideUp(), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp(),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active") })
});
