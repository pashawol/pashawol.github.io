 jQuery(document).ready(function($) { 

  // Custom JS
  
// мобильное меню
   var toggMnu1 = $(".catalog-aside__item").find(".catalog-aside__link").click(function () {
    
    $(this).toggleClass("active").next().toggleClass("active");
    // $("body").toggleClass("fixed");
    return false;
  }); 
       $(document).mouseup(function (e) {
    var container = $(".drop-menu.active");
    if (container.has(e.target).length === 0){
       $(".catalog-aside__link").removeClass("active").next().removeClass("active");
      // $("body").removeClass("fixed");
        }
    });
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
 
 $(".catalog-aside__title").click(function(){
  $(this).next().slideToggle();
 })
  function heightses() {

    var w = $(window).width();
    // var h = $(".item-prod__inner").height();
   // $(".item-prod").height('auto').height(h);
   //
   $(".drop-menu").css("min-height", $(window).height()  - $(".top_line").height())
   $(".catalog-aside__nav ul").css("max-height", $(window).height() - $(".catalog-aside__title").height() - $(".top_line").height())
   $(".drop-menu .row").each(function(){
      $(this).find(".drop-menu__img-wrap ").height('auto').equalHeights();
   })
   $(".s-catalog__block").each(function(){
      $(this).find(".item-prod__title").height('auto').equalHeights();
      $(this).find(".item-prod__inner").height('auto').equalHeights();
      $(this).find(".item-prod").height('auto').height($(this).find(".item-prod__inner").height());
      // $(this).find(".item-prod__inner").height('auto').equalHeights();
   })


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


 $(".catalog-aside__item").hover(function(){
    $(this).find(".drop-menu .row").each(function(){
      $(this).find(".drop-menu__img-wrap").height('auto').equalHeights();
   })
 })

var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
      arrl2 = (' <div class="l"><img src="img/arr-left.png" alt=""></div>'),
      arrr2 =(' <div class="r"><img src="img/arr-right.png" alt=""></div> ')
  
 
 // карусель
 $('.header-block__slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: true,
              loop: true,  
              arrows: true,  
               prevArrow: arrl,
                nextArrow: arrr,
              });

  $('.prod-head__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450, 
            asNavFor: '.prod-head__slider-small', 
            infinite: false,  
            loop: false,  
            arrows: true, 
            prevArrow: arrl2,
            nextArrow: arrr2,
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

 $(".item-prod").hover(function(){
  $(this).find(".item-prod__list").slideToggle(150);
 })
 
    // галерея
  $(".gal").magnificPopup({
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


 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

   $('.custom-select').styler();
     
});
