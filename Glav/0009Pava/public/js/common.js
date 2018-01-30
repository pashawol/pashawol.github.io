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
  $(document).mouseup(function (e) {
    var container = $(".hidden-mnu.active");
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
        }
       
    });
     $(".trop li.menu-item-has-children").click(function(){
       $(this).siblings().find(".trop__nav").slideUp();
      $(this).find(".trop__nav").slideToggle();
      return false;
    })
 
 
  $(".reg__link").click(function(){
    $(".reg").toggleClass("active");
    $(this).toggleClass("active")

    .next().fadeToggle(150);
     return false;
  })
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    
     $(".catalog").each(function(){
       
      // $(this).find(".prod-block__inner").height('auto').equalHeights();
      $(this).find(".prod-block").height('auto').height($(this).find(".prod-block__inner").innerHeight());
      // $(this).find(".prod-block__inner").height('auto').equalHeights();
   })

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

 $(".prod-block").hover(function(){
  $(this).find(".prod-block__body").slideToggle(150);
 })
 
  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



     $(".filter__sort-btn").click(function(){
        $(".filter__wrapper").fadeToggle(100);
        $(".filter__slider-title, .filter__slider").slick("refresh");

      
 var swiper = new Swiper('.swiper-container', {
      // init: false,
      slidesPerView: 'auto',
      
      freeMode: true,
      freeModeMomentum:false,
      scrollbar: {
        el: '.swiper-scrollbar',
        
      },
    
      mousewheel: true,
    });
          // section_slider();
     })
 
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

 

 var icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.06 477.18"><g   data-name="Слой 2"><g  data-name="Capa 1"><g id="g4"><path id="path2" d="M248.18,229.08,23.08,4A13.51,13.51,0,1,0,4,23.08l215.5,215.5L4,454.08a13.46,13.46,0,0,0,0,19.1,13.59,13.59,0,0,0,9.5,4,13.17,13.17,0,0,0,9.5-4l225.1-225.1a13.43,13.43,0,0,0,.1-19Z"/></g></g></g></svg>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  

 // карусель
 $('.s-event__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
    // centerMode: true,
    // focusOnSelect: true , 
     // variableWidth: true,
     prevArrow: arrl2,
      nextArrow: arrr2,
       responsive: [
    
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    }  
  ]
    });
 // карусель
 $('.header-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: false, 
    dots: true,
    
      
    });

function section_slider(){
 $('.filter__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true, 
   arrows: false, 
    dots: false,
     infinite: true,
  infinite: false,
  loop: false,
  // draggable: false,
  swipe: false,
  asNavFor:  '.filter__slider-title'
});
$('.filter__slider-title').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
  asNavFor: '.filter__slider',
  variableWidth: true,  
  arrows: true, 
  dots: false,
  prevArrow: arrl2,
  nextArrow: arrr2,
  infinite: false,
  loop: false,
  swipe: false,
   focusOnSelect: true ,
  // centerMode: true, 
});
}
 
  $('.kart-head__slider').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
 
  variableWidth: true,  
  arrows: true, 
  dots: false,
  prevArrow: arrl2,
  nextArrow: arrr2,
  infinite: false,
  loop: false,
  // swipe: false,
   focusOnSelect: true ,
  // centerMode: true, 
});
  // $(".filter__ovh").niceScroll({
  //   // horizrailenabled : false,
  //   "verge" : "500",
  //   cursorborder: "0",
  //   cursorborderradius: "4px",
  //   cursorwidth: "10px",
  //   cursorcolor: "#752995", 
  //   background: " #e8eef1",
  //   // autohidemode: false,
  //   // railpadding: "5"
  //   touchbehavior: "true",
  // });
 

section_slider();



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
              arrows: false,
              vertical: true,
              verticalSwiping: true,
              // centerMode: true,

              focusOnSelect: true ,
              asNavFor:  '.kart-head__slider-big',

              // swipeToSlide: false
              });
  


 $('.s-event__slider,'+
    // '.kart-head__slider-big,'+
    // ' .kart-head__slider-small,'+
    ' .carusel')
 .on('lazyLoaded', function(event, slick, image, imageSource){
     image.parents(".img-wrap").css('background-image', 'url(' + image.attr('src') + ')');
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
 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function() {
          $.magnificPopup.close();
             $.magnificPopup.open({
        items: {
          src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      })
        // window.location.replace("/thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });
  $(".contact").magnificPopup({
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


  // кастомный инпут файл 
 
  var file = $(".add-file input[type=file]");
  file.change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         var name = $(".add-file__filename  ");
       name.text(filename);
  
    }); 


  
  $(".pretty-embed__bg").each(function(){ 
    // загрузка фона видео
  $(this).css("background-image",'url(http://img.youtube.com/vi/'  + $(this).data("src")+ '/0.jpg)')
  // включение видео при клике по блоку
   $(this).click(function(){
    $(this).removeClass("on").next()
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1').addClass("on");
   })
   })
});
