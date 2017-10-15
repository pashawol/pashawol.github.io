 $(document).ready(function() { 

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
// мобильный фильтр
 var toggMnu = $(".toggle-mnu-2").click(function () {
    
    $(".toggle-mnu-2").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".mobile-filter").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
 

  function heightses() {

    var w = $(window).width();
    // var f = $(".footer").height();
    // $(".main-wrapper").css({"padding-bottom": f})
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    
    // скрывает моб меню 
    if (w>1199){
       $(".toggle-mnu-1, .toggle-mnu-2").removeClass("on");
        
        $(".hidden-mnu, .mobile-filter").removeClass("active");
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
// кастомный select
 $('input.number, .custom-select').styler();

 

var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#fff" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#fff" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
       arrr2= (' <div class="l"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div>'),
      arrl2 =(' <div class="r"><svg   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div> ')
  
 // карусель
 $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true, 
    // centerMode: true,
    // focusOnSelect: true , 
     // variableWidth: true,
     prevArrow: arrr,
  nextArrow: arrl,
    });

  $('.carusel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
    // centerMode: true,
    // focusOnSelect: true , 
     // variableWidth: true,
     prevArrow: arrr2,
      nextArrow: arrl2,

      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
       
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });




 // ui slider
$(".filter-aside__item  ").each(function(){
        
    var 
        th= $(this),
        handle_min = th.find('.minus'),
        handle_max = th.find('.plus'),
        minn = parseInt(handle_min.val()),
        maxx = parseInt(handle_max.val());

 

    th.find( ".filter-aside__range-1" ).slider({
      min: minn,
      max: maxx,
      values: [ minn, maxx ],
      range: true,
      stop: function(event, ui) {
        handle_min.val(  ui.values[ 0 ] );
        handle_max.val(  ui.values[ 1 ] );
        },
        slide: function(event, ui){
        handle_min.val(  ui.values[ 0 ] );
        handle_max.val(  ui.values[ 1 ] );
        }
    });
    handle_min.change(function(){
      var value1=handle_min.val();
      var value2=handle_max.val();

        if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        handle_min.val(value1);
      }
      th.find( ".filter-aside__range-1" ).slider("values",0,value1);  
    });

      
    handle_max.change(function(){
      var value1=handle_min.val();
      var value2=handle_max.val();
      
      if (value2 > 1000) { value2 = 1000; handle_max.val(1000)}

      if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        handle_max.val(value2);
      }
      th.find( ".filter-aside__range-1" ).slider("values",1,value2);
    });
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
 
  

  $('.kart-head__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450, 
            asNavFor: '.kart-head__slider-small', 
            infinite: false,  
            loop: false,  
              arrows: false, 
   
          }); 
         $('.kart-head__slider-small').slick({
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
              asNavFor:  '.kart-head__slider-big',
              
              // swipeToSlide: false
              }); 
          
     $('.kart-head__slider-big').magnificPopup({
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
});
