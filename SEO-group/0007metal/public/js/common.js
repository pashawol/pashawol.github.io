 jQuery(document).ready(function($) {

  // Custom JS


  var url=document.location.href;
  $.each($(".top-nav__nav a "),function(){

  if(this.href==url){
    if($(this).hasClass("top-nav__link") == true){

    $(this).addClass('top-nav__link-active');
    }
    if($(this).hasClass("footer__link") == true){

    $(this).addClass('footer__link-active');

    }

  };
  });

  $(".search-btn").click(function(){

    $(".form-search").toggleClass("active");
  })
  $(".wrapp-hidden .menu-item-has-children > a").click(function(e){
      e.preventDefault();
      $(this).parent().toggleClass("active");
      $(this).next().slideToggle();

  })

 var icon = '<svg  width="20" height="33" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 20 33"><defs><path d="M19.28635,5753.37047l13.70573,13.07555l-1.5579,1.56472l-13.70544,-13.07555l-0.15511,0.15533l-1.56174,-1.56907l15.44113,-15.50981l1.56199,1.56907z" id="Path-0"/></defs><desc>Generated with Avocode.</desc><g transform="matrix(1,0,0,1,-15,-5737)"><g><title>Forward</title><use xlink:href="#Path-0" fill="#d7d7d7" fill-opacity="1"/></g></g></svg>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);

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
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: false,
              loop: false,
              arrows: false,
              // centerMode: true,

              focusOnSelect: true ,
              asNavFor:  '.kart-head__slider-big',

              // swipeToSlide: false
              });
      $('.kart-head__slider-big, .kart-head__slider-small, .carusel')
 .on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });
  $('.gal').each(function(){
    $(this).magnificPopup({
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


    $('.slider').slick({
       mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        infinite: true,
        loop: true,
        arrows: true,
         prevArrow: arrl2,
          nextArrow: arrr2,
          rows: 3,

        });

      $('.s-rew__slider').slick({
       mobileFirst: true,
           dots: true,
            speed: 450,
            infinite: true,
            loop: true,
            arrows: true,
         prevArrow: arrl2,
          nextArrow: arrr2,

           slidesToShow: 1,
            slidesToScroll: 1,

        });

  function heightses() {
    var w = $(window).width();
    if (w < 767){
      $('  .s-rew__slider').slick("init");
    }
    if (w > 767){
      $('  .s-rew__slider').slick("destroy");
    }
    var topH=$(".header ").height();
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

// мобильный фильтр
 var toggMnu = $(".toggle-mnu-2").click(function () {

    $(".toggle-mnu-2").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".mobile-filter").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  });
  $(document).mouseup(function (e) {
    var container = $(".mobile-filter.active");
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-2").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".mobile-filter").removeClass("active");
      $("body").removeClass("fixed");
        }
    });

// листалка по стр
 // $(" .top-nav a").click(function () {
 //        var elementClick = $(this).attr("href");
 //        var destination = $(elementClick).offset().top;

 //            $('html, body').animate({ scrollTop: destination }, 1100);

 //        return false;
 //    });



// табы  
$(function() {
var tab = ('tabs');

 

$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {
  $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
      .eq($(this).index()).fadeIn().addClass('active');

     

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



$('input.number, .custom-select').styler();

});
