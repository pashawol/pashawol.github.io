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
     
    $(document).mouseup(function (e) {
    var container = $(".hidden-mnu.active");
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
        }
    });


    $(".trop__item.dropdown").click(function(){
       $(this).siblings().find(".drop").slideUp();
      $(this).find(".drop").slideToggle();
    })


var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 

 // фильтр
   var toggMnu = $(".s-filter__gum, .s-filter__head-title").click(function () {
    
    $(".s-filter__gum").toggleClass("on");
    $(".s-filter__head-title").fadeToggle(100);
    // $("body").toggleClass("fixed");
    $(".s-filter__inner").slideToggle(250);
     
  }); 

  var $container = $(".plitki "); 
  function mass() {

  // $container.imagesLoaded().progress( function() {
    $container.masonry({
      columnWidth: ".plitki-col",
      itemSelector: ".plitki-col",
      percentPosition: true
    });

  }  
  mass();
  $(".s-plitky__btn").click(function(e){
      e.preventDefault();
      var $items = $(".s-plitky__col:hidden");
      $items.addClass("on");
    // append items to grid
       mass();
      $(this).hide();
   })
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    

  // })
 
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



// листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

 

var   arrl2 = (' <div class="l"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="11" viewBox="0 0 38 11"><defs><path id="arr" d="M730 664v-2h30v2zm30 3l5-4-5-4z"/></defs><g transform="translate(-728 -657)"><use fill="#808285" xlink:href="#arr"/></g></svg></div>'),
      arrr2 =(' <div class="r"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="11" viewBox="0 0 38 11"><defs><path id="arr" d="M730 664v-2h30v2zm30 3l5-4-5-4z"/></defs><g transform="translate(-728 -657)"><use fill="#808285" xlink:href="#arr"/></g></svg></div> ')
 
var $gallery = $('.main-slider__slider');
var slideCount = null;
 
 // карусель
 $gallery.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,  
    prevArrow: arrl2,
    nextArrow: arrr2,
    });
 
 $gallery.on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });

$gallery.find(".slick-arrow").prependTo(".main-slider__arrow-wrap");
 

var $gallery2 = $('.s-rew__slider'); 
 $gallery2.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,  
    prevArrow: arrl2,
    nextArrow: arrr2,
    });
    $gallery.on('lazyLoaded', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
}); 
$gallery2.find(".slick-arrow").prependTo(".s-rew__arrow-wrap");
 


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
  $('.popup-with-move-anim').click(function(){
    $(".modal-form .form-wrap__title").html($(this).data("title"))
  })

  var $gal3= $('.s-gal__slider, .rew-page__slider');
   $('.s-gal__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1, 
  arrows: true,  
  prevArrow: arrl2,
  nextArrow: arrr2,
  asNavFor: '  .slider-nav',
  infinite: false,
  loop: false,  
  responsive: [
    {
      breakpoint: 991,
      settings: { 
        slidesToShow: 1
      }
    }
  ]
});
  $('.rew-page__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1, 
  arrows: true,  
  prevArrow: arrl2,
  nextArrow: arrr2,
  asNavFor: '  .slider-nav',
  infinite: false,
  loop: false,  
   
});

    $gal3.on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });

$(' .slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: $('.s-gal__slider, .rew-page__slider'),
  // centerMode: true,
  focusOnSelect: true,
  // variableWidth: true,
  arrows: false,
  infinite: false,
  loop: false,  
   responsive: [
    {
      breakpoint: 991,
      settings: { 
        slidesToShow: 6
      }
    },
    {
      breakpoint: 768,
      settings: { 
        slidesToShow: 5
      }
    },
    {
      breakpoint: 576,
      settings: { 
        slidesToShow: 1,
        variableWidth: true,
      }
    },
    {
      breakpoint: 370,
      settings: { 
        slidesToShow: 2,
        variableWidth: false,
      }
    },

  ]
});
   $gal3.find(".slick-arrow").prependTo(".slider-foot-inner");
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

 
   } )
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

   
});
