 jQuery(document).ready(function($) { 

  // Custom JS
  

  var url=document.location.href; 
  $.each($(".top-nav__nav a "),function(){
 
  if(this.href==url){
    if($(this).hasClass("top-nav__link") == true){

    $(this).addClass('active');
    }
    if($(this).hasClass("footer__link") == true){

    $(this).addClass('footer__link-active');
    }

  };
 
  }); 

 
 
// табы  . Теперь данные активного таба остается в storage
$(function() {
var tab = ('tabs'); 

   $('.' + tab + '__caption').each(function(i) {
    var storage = localStorage.getItem('tab' + i);
    if (storage) {
      $(this).find('.' + tab + '__btn').removeClass('active').eq(storage).addClass('active')
       .closest('.' + tab).find('.' + tab + '__content').removeClass('active').eq(storage).addClass('active');
    }
  });

$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) { 
  $(this) 
      .addClass('active').siblings().removeClass('active')
      .closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
      .eq($(this).index()).fadeIn().addClass('active');

    var ulIndex = $('.' + tab + '__caption').index($(this).parents('.' + tab + '__caption'));
    localStorage.removeItem('tab' + ulIndex);
    localStorage.setItem('tab' + ulIndex, $(this).index());
 
});
});

    
  $(' .js-slider, .js-slider-2, .slider ').on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 }); 
 


var    arrl1 = (' <div class="l"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>'),
      arrr1 =(' <div class="r"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>'),
     arrl2 = (' <div class="l"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="26" viewBox="0 0 16 26"><defs><path id="z7yva" d="M1250.41 703.26l-7.8 12.7-1.3-2.13 6.48-10.59-6.79-11.1 1.3-2.14 6.8 11.09zm6.59 0l-7.8 12.7-1.3-2.13 6.47-10.59-6.78-11.1 1.3-2.14 6.8 11.09z"/></defs><g><g transform="translate(-1241 -690)"><use fill="#8e9aa9" xlink:href="#z7yva"/></g></g></svg></div>'),
      arrr2 =(' <div class="r"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="26" viewBox="0 0 16 26"><defs><path id="z7yva" d="M1250.41 703.26l-7.8 12.7-1.3-2.13 6.48-10.59-6.79-11.1 1.3-2.14 6.8 11.09zm6.59 0l-7.8 12.7-1.3-2.13 6.47-10.59-6.78-11.1 1.3-2.14 6.8 11.09z"/></defs><g><g transform="translate(-1241 -690)"><use fill="#8e9aa9" xlink:href="#z7yva"/></g></g></svg></div>')
  
 // карусель
 $('.slider').slick({ 
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,  
     variableWidth: true,
     prevArrow: arrl2,
      nextArrow: arrr2,
    });

 // $('.s-news').slick({ 
 //    // slidesToScroll: 0,
 //     infinite: false,

 //    centerMode: true,
 //    dots: false,
 //    speed: 450, 
 //    arrows: true,  
 //     variableWidth: true,
 //     prevArrow: arrl2,
 //      nextArrow: arrr2, 
 //    });

  var swiper = new Swiper('.s-news', {
       
      // spaceBetween: 30,
      slidesPerView: 'auto',
      freeMode: true,
      freeModeMomentum: false,
      navigation: {
        nextEl: '.l.slick-arrow',
        prevEl: '.r.slick-arrow',
      },
    });

   $('.js-slider').slick({
    infinite: false,
    loop: false,  
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    asNavFor: '.js-slider-title',
    respondTo:  'window',
     accessibility: false,
      accessibility: false,
        // variableWidth: true,
  });
  $('.js-slider-title').slick({
       infinite: false,
    loop: false,  
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-slider',
    dots: false, 
    arrows: true, 
    prevArrow: arrl1,
    nextArrow: arrr1,
    respondTo:  'window', 
      // variableWidth: true,

  });
 
 

  
    $('.js-slider-2').each(function() {
        $(this).slick({
          infinite: false,
          loop: false,  
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, 
            dots: true,
            appendDots:$(this).siblings('.s-events__slider-title-2'),
            customPaging : function(slider, i) {
              var thumb = $(slider.$slides[i]).find(".s-events__slide-2").data('thumb');
              return '<div class="s-events__slide-text-2">'+thumb+'</div>';
          }
        });
    });



 

   // мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".main-block, .top-nav").toggleClass("active");
    // $("body").toggleClass("fixed");
     
     // $('.js-slider-title').slick("destroy");
     setTimeout(function(){
        // $('.js-slider').resize(); 
     $('.js-slider, .js-slider-2').slick('refresh');
     }, 500);
     

     console.log(2);
    return false;
  }); 
 
 
  function heightses() {

    var w = $(window).width();
   
     if (w<991){
       $(".toggle-mnu-1").removeClass("on");
        $(".main-block, .top-nav").removeClass("active"); 
    }
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();

 

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

 $(".tabs__polosa .color").each(function(){
  $(this).css({"width": parseInt($(this).data("now")) / parseInt($(this).data("all")) * 100  + "%"});
})
});

 