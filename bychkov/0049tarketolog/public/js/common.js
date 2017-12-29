 jQuery(document).ready(function($) { 

  // Custom JS
  
var scene = document.getElementById('scene');
var parallaxInstance = new   Parallax(scene, {
  relativeInput: true
});
 
 var scene2 = document.getElementById('scene2');
var parallaxInstance = new   Parallax(scene2, {
  relativeInput: true
});
 
 
//  var scene5 = document.getElementById('scene5');
// var parallaxInstance = new   Parallax(scene5, {
//   relativeInput: true
// });
 
 
  var scene4 = document.getElementById('scene4');
var parallaxInstance = new   Parallax(scene4, {
  relativeInput: true
});
 
 
 



ion.sound({
    sounds: [
        {
            name: "glass"
        } 
    ],
    // volume: 0.02,
    volume: 1,
    path: "sounds/",
    preload: true
});


 // $.ionSound({
 //            sounds: ["bip-1", "bip-2", "wuf-1", "wuf-2", "wuf-3", "wuf-4"],
 //            path: "sounds/",
 //            volume: 0.9
 //        });

 //        // ===================================================== Sounds
        $(document).on('mouseenter',
            '.btn ', function () {
              ion.sound.play("glass");
            });
        // SIModals.beforeOpen = function () {
        //     $.ionSound.play('wuf-4');
        // };
        // SIModals.beforeClose = function () {
        //     $.ionSound.play('wuf-3');
        // }; 

  // accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})

 
    $(document).click(function (e) {
    var container = $(".toggle-place");
    if (container.has(e.target).length === 0){
        container.fadeOut();
    }
});

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
    var topH=$(".header-block").innerHeight() - 130;  
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
 $(" .scroll").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
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


/*
 * jQuery liLanding v 2.1
 *
 * Copyright 2013, Linnik Yura | LI MASS CODE | http://masscode.ru
 * Free to use
 *
 * Last Update: 19.06.2016
 */
(function ($) {
  var methods = {
    init: function (options) {
      var p = {
        show: function (linkEl, landingItem) {}, 
        hide: function (linkEl, landingItem) {},
        topMargin: 0,
        speedFactor: 1
      };
      if (options) {
        $.extend(p, options);
      }
      return this.each(function () {
        var el = $(this);
        var elPos = el.offset().top;
        var wHalf = $(window).height()/2
        var scrollId = function(){};
        
        //assign events only links with anchors
        $('a',el).on('click',function(){
          var linkItem = $(this);
          if(!linkItem.is('.cur')){
            var linkHref = linkItem.attr('href');
            var linkTarget = $(linkHref);
            var linkTargetPos = linkTarget.offset().top;
            var windowPos = $(window).scrollTop();
            var animDuration = linkTargetPos - windowPos
            if(animDuration < 0){
              animDuration = animDuration*-1  
            }
            //scroll the page to the desired block
            if(linkTarget.length){
              $('html, body').stop(true).animate({scrollTop:(linkTargetPos-parseFloat(p.topMargin))},animDuration*p.speedFactor,function(){
                $(window).trigger('scroll');
              });
            }
          }
          return false;
        })
        //stop the animation by scrolling
        var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
        if (document.attachEvent) //if IE (and Opera depending on user setting)
          document.attachEvent("on"+mousewheelevt, function(e){
            $('html, body').stop(true);   
          });
        else if (document.addEventListener) //WC3 browsers
          document.addEventListener(mousewheelevt, function(e){
            //e.detail //direction
            $('html, body').stop(true);
          }, false)
        //highlight the desired link in the menu by scrolling
        $(window).on('scroll',function(e){
          clearTimeout(scrollId);
          var windowPos = $(window).scrollTop();
          if(windowPos > elPos){
            el.addClass('landingFix');  
          }else{
            el.removeClass('landingFix'); 
          }
          scrollId = setTimeout(function(){
            $('section').each(function(){
              var landingItem = $(this);
              var landingItemHeight = landingItem.height();
              var landingItemTop = landingItem.offset().top - wHalf;
              var linkHref = landingItem.attr('id');
              var linkEl = $('a[href="#'+linkHref+'"]',el);
              var status;

              if((windowPos+ landingItemHeight )> landingItemTop && windowPos < (landingItemTop + landingItemHeight)){
                if(!linkEl.is('.cur')){
                  linkEl.addClass('cur');
                  if (p.show !== undefined) {
                    p.show(linkEl, landingItem);
                  }
                }
              }else{
                if(linkEl.is('.cur')){
                  linkEl.removeClass('cur');
                  if (p.hide !== undefined) {
                    p.hide(linkEl, landingItem);
                  }
                }
              }
            });
          },100);
        })
        $(window).trigger('scroll');
      });
    }
  };
  $.fn.liLanding = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Метод ' + method + ' в jQuery.liLanding не существует');
    }
  };
})(jQuery);

//Инициализация плагина
$(window).load(function(){
  $('.top-nav__nav').liLanding({
  // topMargin: 0
  });
})


var wow = new WOW({ mobile: false });
        wow.init();