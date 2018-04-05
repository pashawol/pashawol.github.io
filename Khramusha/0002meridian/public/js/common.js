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

  $(".wrapp-hidden .menu-item-has-children > a").click(function(e){
      e.preventDefault();
      $(this).parent().toggleClass("active");
      $(this).next().slideToggle();

  })
 
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

 
// табы  . Теперь данные активного таба остается в storage
$(function() {
var tab = ('tabs'); 
 
$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) { 
  $(this) 
      .addClass('active').siblings().removeClass('active')
      .closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
      .eq($(this).index()).fadeIn().addClass('active');
  
 
});
});

 

 var icon = '<svg class="icon icon-map ">  <use xlink:href="img/svg/sprite.svg#arr-r"></use>  </svg>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  
 // карусель
 
$('.header-block__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true,  
    prevArrow: arrl2,
    nextArrow: arrr2,
    });

$('.carusel-js').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true,  
    prevArrow: arrl2,
    nextArrow: arrr2,

     responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1, 
      }
    } 
  ]
    });

$('.text-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true,  
    prevArrow: arrl2,
    nextArrow: arrr2,

     responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1, 
      }
    } 
  ]
    });


$('.s-mach__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,
    loop: false,  
    arrows: true,  
    prevArrow: arrl2,
    nextArrow: arrr2,

     responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1, 
      }
    } 
  ]
    });



 $('.header-block__slider,\
   .s-mach__slider,\
  .carusel-js \
  ').on('lazyLoaded', function(event, slick, image, imageSource){
             image.parent().css('background-image', 'url(' + image.attr('src') + ')');
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
