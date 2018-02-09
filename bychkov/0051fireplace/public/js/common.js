 jQuery(document).ready(function($) { 

  // Custom JS
    
  var vid = document.getElementById("bgvid");
 

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

 
 
      // галерея
  $(".gal").each(function(){
    
  $(this).find("a").magnificPopup({
    // delegate: 'a',
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
 

// листалка по стр
 // $(" .top-nav a").click(function () {
 //        var elementClick = $(this).attr("href");
 //        var destination = $(elementClick).offset().top;
        
 //            $('html, body').animate({ scrollTop: destination }, 1100);
        
 //        return false; 
 //    });

  

 var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

var   arrr2  = (' <div class="l">'+ icon),
      arrl2 =(' <div class="r">'+ icon);  
 // карусель
 $('.s-team__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
    // centerMode: true,
    // focusOnSelect: true , 
     // variableWidth: true,
     prevArrow: arrr2,
      nextArrow: arrl2,
    });

$('.s-gal__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
    // centerMode: true,
    // focusOnSelect: true , 
     // variableWidth: true,
     prevArrow: arrr2,
      nextArrow: arrl2,
      rows: 2,
       responsive: [
    
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2, 
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

$('.s-rew__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
     adaptiveHeight: true,
     prevArrow: arrr2 + 'Вперед',
      nextArrow: arrl2 + 'Назад',
    });

 $('.s-gal__slider,' +
    '.s-rew__slider' )
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


     
var wowAnim = $(".s-preim__col," +
                ".s-zakaz__col," + 
                ".footer__col," + 
                ".header-block__item," + 
                ".s-work__col");
wowAnim.each(function(i){
 
wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s"); 
// $(this).addClass("wow bounceInUp");
 
 })


   var wow = new WOW({ mobile: false });
        wow.init();

});
 // карта

 $( window ).load(function() {
  if ($("div").is("#map1")){

 ymaps.ready(function () {
    var myMap = new ymaps.Map('map1', {
            center: [59.905,30.419244415344213],
            zoom: 16,
            behaviors: ['drag'],
              
                // controls: ["zoomControl", "fullscreenControl"]
        }, {
            searchControlProvider: 'yandex#search'
        }),

   
        myPlacemark = new ymaps.Placemark([59.90625833506598,30.4190083809509], {
            hintContent: 'г. Санкт-Петербург проспект Обуховской обороны д. 51 K, офис 503',
            balloonContent: 'г. Санкт-Петербург проспект Обуховской обороны д. 51 K, офис 503'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: $("#map1").data("img"),
            // Размеры метки.
            iconImageSize: [88, 97],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, 80]
        }) 

    myMap.geoObjects
        .add(myPlacemark)
       
 
    
});
}
 })
