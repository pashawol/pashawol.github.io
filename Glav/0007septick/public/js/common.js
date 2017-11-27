 jQuery(document).ready(function($) { 

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
    $(document).mouseup(function (e) {
    var container = $(".hidden-mnu.active");
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
        }
    });
 
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    

    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$(".top_line").innerHeight();  
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
      arrl2 = (' <div class="l"> <svg xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xml:space="preserve"  style="enable-background:new 0 0 477.175 477.175;"  viewBox="0 0 477.175 477.175"  y="0px"  x="0px" > <path  id="path2"   d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" /> </svg></div>'),
      arrr2 = (' <div class="r"> <svg xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xml:space="preserve"  style="enable-background:new 0 0 477.175 477.175;"  viewBox="0 0 477.175 477.175"  y="0px"  x="0px" > <path  id="path2"   d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" /> </svg></div>');
       
 // карусель
 $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: false, 
     
    });


 // карусель
 $('.dealers__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
     prevArrow: arrl2,
    nextArrow: arrr2, 
    // centerMode: true,
    focusOnSelect: true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,  
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2, 
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

 // карусель
 $('.s-gal__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true, 
     prevArrow: arrl2,
    nextArrow: arrr2, 
    // centerMode: true,
    focusOnSelect: true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,  
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2, 
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

 // карусель
 $('.s-video__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true, 
     prevArrow: arrl2,
    nextArrow: arrr2, 
     responsive: [
  
      
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, 
      }
    
  }
  ]
    });




  $('.prod-head__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450, 
            asNavFor: '.prod-head__slider-small', 
            infinite: false,  
            loop: false,  
              arrows: false, 
   
          }); 
         $('.prod-head__slider-small').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: false,  
              loop: false,  
              arrows: false, 
              // centerMode: true,
               
              focusOnSelect: true , 
              asNavFor:  '.prod-head__slider-big',
              
              // swipeToSlide: false
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
 
    // галерея
  $(".s-gal__slider, .gal").each(function(){

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


 $('.s-gal__slider')
 .on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });
 // форма
  
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  
    //Replace all SVG images with inline SVG
  $('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

  });


  
 // ui slider
$(".s-filter__item  ").each(function(){
        
    var 
        th= $(this),
        handle_min = th.find('.minus'),
        handle_max = th.find('.plus'),
        minn = parseInt(handle_min.val()),
        maxx = parseInt(handle_max.val());

 

    th.find( ".s-filter__range-1" ).slider({
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
      th.find( ".s-filter__range-1" ).slider("values",0,value1);  
    });

      
    handle_max.change(function(){
      var value1=handle_min.val();
      var value2=handle_max.val();
      
      if (value2 > 1000) { value2 = 1000; handle_max.val(1000)}

      if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        handle_max.val(value2);
      }
      th.find( ".s-filter__range-1" ).slider("values",1,value2);
    });
});

$(".s-filter__toggle").click(function(){
  $(this).next(".s-filter__panel").slideToggle();
})
 
});
