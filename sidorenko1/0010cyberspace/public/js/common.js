 jQuery(document).ready(function($) { 

  // для свг
  svg4everybody({});
  // Custom JS
  

 
      // галерея
  $(".gal").each(function(){
    
  $(this).find("a").magnificPopup({
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
// мобильное меню
 // мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    
    $(this).toggleClass("active");
    $(".hidden-mnu").fadeToggle("150").toggleClass("active");
   
    return false;
  }); 
    
    $(document).mouseup(function (e) {
    var container = $(".hidden-mnu.active");
    if (container.has(e.target).length === 0 && $(".toggle-mnu-1.active").has(e.target).length === 0){
      
      $(".hidden-mnu").fadeOut("150").removeClass("active");
      $(".toggle-mnu-1").removeClass("active");
        }
    });


// листалка по стр
 // $(" .top-nav a").click(function () {
 //        var elementClick = $(this).attr("href");
 //        var destination = $(elementClick).offset().top;
        
 //            $('html, body').animate({ scrollTop: destination }, 1100);
        
 //        return false; 
 //    });


 
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
 

// слайдер в шапке
 var swiper = new Swiper('.header-block__slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
// слайдер каталога
 var swiper2 = new Swiper('.carusel-js', {
      // slidesPerView: 5,
      watchOverflow: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true, 
       freeModeMomentum: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });
 // слайдер партнеры
  var swiper3 = new Swiper('.s-patner__slider', {
      slidesPerView: 5,
      spaceBetween: 0,
       // freeModeMomentum: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
           breakpoints: {
        1200: {
         slidesPerView: 'auto',
          watchOverflow: true,
          freeMode: true,
          
        } 
      }
    });
 

     var swiper4 = new Swiper('.s-stock__slider', {
          // slidesPerView: 5,
          watchOverflow: true,
          slidesPerView: 'auto',
          spaceBetween: 20,
          freeMode: true, 
          freeModeMomentum: true, 
          loop: true
        });

     var swiper5 = new Swiper('.s-artical__slider', {
          // slidesPerView: 5,
          watchOverflow: true,
          slidesPerView: 'auto',
          freeMode: true, 
          freeModeMomentum: true, 
          loop: true
        });

  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    if (w<767){
        // слайдер каталога
    }
    else{
 
    }
  }

  $(window).resize(function() {
    heightses();
   
  });
 
 heightses();


});
