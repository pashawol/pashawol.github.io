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
    $(document).mouseup(function (e) {
    var container = $(".hidden-mnu.active ");
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-1  ").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
    // $(".top_line__catalog-inner").slideUp(); 
    }
    });

  

      var toggMnu2 = $(".top_line__gum").click(function () {
    
    $(this).toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".top_line__catalog-inner").slideToggle(); 
    return false;
  });
 var w = $(window).width();
  if (w>991){
        $(".top_line__gum").addClass("on");
        $(".top_line__catalog-inner").show(); 
    }

  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    
    
    if (w<991) {
      $(".top_line__gum").removeClass("on");
        $(".top_line__catalog-inner").hide(); 
    }
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

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();


 
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


var  arrl2 = (' <div class="l"></div>'),
      arrr2 =(' <div class="r"></div> ')
  
 // карусель
 $('.header-block__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: false,
    dots: true,  
     prevArrow: arrl2,
    nextArrow: arrr2,
    customPaging : function(slider, i) {
          var thumb = $(slider.$slides[i]).data('thumb');
          return '<a style="background-image: url(' + thumb + ')"></a>';
      },
    });

$('.prod-head__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: false,
    dots: true,  
     
    });


$('.s-sert__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
     prevArrow: arrl2,
    nextArrow: arrr2,
      responsive: [
    {
      breakpoint: 991,
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
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });



$('.s-patner__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
     prevArrow: arrl2,
    nextArrow: arrr2,
      responsive: [
    {
      breakpoint: 991,
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
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });




 $('.header-block__slider')
 .on('lazyLoaded', function(event, slick, image, imageSource){
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
    mainClass: 'my-mfp-zoom-in',
    lazyLoad:'progressive',
    ustomPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="'+thumb+'"></a>';
    },
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


 

  $(".aside-filter .before").click(function(){
    $(this).parents(".aside-filter__item").find(".aside-filter__wrap").slideToggle("open")
    $(this).parents(".aside-filter__item").toggleClass("open")
  })
 $(".aside-filter__big-btn").click(function(){
    $(".aside-filter__inner").slideToggle();
 })

  $('.custom-select').styler();


  $(".btn-js").click(function(){
    $(this).toggleClass("active").parents("tr").next().find(".child-wrap").slideToggle();
  })
});
