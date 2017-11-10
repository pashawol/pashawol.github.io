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
    
    var container = $(".hidden-mnu");
      if(container.hasClass("active")== true){
           $(document).mouseup(function (e) {
          if (container.has(e.target).length === 0){
              $(".toggle-mnu-1").toggleClass("on");
              // $("body").toggleClass("fixed");
              $(".hidden-mnu").toggleClass("active");
              $("body").toggleClass("fixed");
          }
        });
       }
  function heightses() {

    var w = $(window).width();
   // $(".s-inside__title ").height('auto').equalHeights();
   // $(".s-inside__text ").height('auto').equalHeights();
   //
    

  var $container = $(".plitki "); 
    $container.masonry({
      columnWidth: ".plitki-col",
      itemSelector: ".plitki-col"
    });
 
    // изменение размера заголовков
    $(".s-inside__title").each(function(){
      var th = $(this),
          thh = th.height();
      if( thh > 26 ){
        th.css("font-size", 22)
      }
       if (thh > 52 ) {
        th.css("font-size", 18)
      }
    })
 
    // скрывает моб меню 
    if (w>991){
        $container.masonry('reloadItems');
    }
    else  {
        $container.masonry('destroy');
    }

    if (w>768){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$(".header-slider, .top_line-page").innerHeight();  
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



// листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });



// табы
$(function() {
var tab = ('tabs');
// $(' .' + tab + '__caption   .' + tab + '__btn:first-child  ').addClass('active')
 // $('.' + tab + '__content:first-child ').addClass("active");
$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('.' + tab + '').find('.' + tab + '__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});


var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
      arrl2 = (' <div class="l"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div>'),
      arrr2 =(' <div class="r"><svg   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div> ')
  
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
               
                prevArrow: arrl2,
                nextArrow: arrr2,
              });
 

// карусель
 $('.s-team__slider').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: true,
              loop: true,  
              arrows: true, 
              // centerMode: true,
              // focusOnSelect: true , 
               variableWidth: true,
               prevArrow: arrl2,
            nextArrow: arrr2,
              });

// карусель
 $('.js-carusel-inside').slick({
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: false,
              loop: false,  
              arrows: true, 
              // centerMode: true,
              // focusOnSelect: true , 
               
               prevArrow: arrl2,
              nextArrow: arrr2,
              variableWidth: false,
              responsive: [
                   
                  {
                    breakpoint: 768,
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
       // модальное окно
   $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

   fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'scroll',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
 
    // галерея

  $(".gal").each(function(){

    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        // titleSrc: function(item) {
        //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        // }
      },
      gallery: {
        enabled: true
      }
    });
  })
 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  
 
 
 $(".s-treners__carusel-js").flipster({
    style: 'flat',
    spacing: -0.38,
    loop: true,
    buttons: true,
    scrollwheel: false,
    // buttonPrev: arrl2,
    // [text|html]
    // Changes the text for the Previous button

    // buttonNext: arrr2,
 });

// http://parsleyjs.org/doc/index.html#installation-localization




    $('.custom-select').styler();


 
 $(".js-form-validate").parsley();

 $(".js-btn").click(function(){
    $(this).fadeOut();
    $(".form-wrap__hidden-block").fadeIn("slow");
 })

// загрузка карты
 $(".s-contact__map-wrap").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.457673763605!2d37.63089231607825!3d55.83737199293355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53663b52b0681%3A0xd7f1400e765b7db8!2z0YPQuy4g0KHQtdC70YzRgdC60L7RhdC-0LfRj9C50YHRgtCy0LXQvdC90LDRjywgMTfQujUsINCc0L7RgdC60LLQsCwgMTI5MjI2!5e0!3m2!1sru!2sru!4v1508852606099" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>')
 


});
