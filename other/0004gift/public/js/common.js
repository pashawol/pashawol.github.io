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


 if ($("div").is("#map1")){
 ymaps.ready(function () {
    var myMap = new ymaps.Map('map1', {
            center: [59.87463006425739,30.344245999999966],
            zoom: 15,
            behaviors: ['drag'],
              
                // controls: ["zoomControl", "fullscreenControl"]
        }, {
            searchControlProvider: 'yandex#search'
        }),

   
        myPlacemark = new ymaps.Placemark([59.87463006425739,30.344245999999966], {
            hintContent: 'Воронеж, ул. Уличная, 32, корп. 1',
            balloonContent: 'Воронеж, ул. Уличная, 32, корп. 1 '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: $("#map1").data("img"),
            // Размеры метки.
            iconImageSize: [100, 146],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -73]
        }) 

    myMap.geoObjects
        .add(myPlacemark) 
});
}

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
  $(".top-nav__btn").click(function(){
    $(".modal .order").val("Получите каталог");
  })
  $(".wrapp-hidden form .order , header form .order").val("Получить расчет(в шапке)");
  $(".s-take .order").val("Оформить заказ и получить 5 подарков");
  $(".s-delivery .order").val("Узнать подробности доставки");
  $(".s-offer .order").val("Получить уникальное предложение");
  $(".s-qu .order").val("Задать вопрос");


  $(".s-category__btn").click(function(){
    $(".modal .order").val($(this).data("order"));
  })
 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "action.php", //Change
      data: th.serialize()
    }).success(function() {
          // $.magnificPopup.close();
      //        $.magnificPopup.open({
      //   items: {
      //     src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
      //     type: 'inline'
      //   }
      // })
        window.location.replace("thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });
   
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

   
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
  topMargin:60
  });
})

