 jQuery(document).ready(function($) { 

  // для свг
  svg4everybody({});
  // Custom JS
  
// мобильный фильтр
 var toggMnu = $(".toggle-mnu-2").click(function () {
    
    $(".toggle-mnu-2").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".mobile-filter").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
 
 
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
    if( $(".hidden-mnu").hasClass("active") == true) {
      if (container.has(e.target).length === 0 && $(".toggle-mnu-1.active").has(e.target).length === 0){
        
        $(".hidden-mnu").fadeOut("150").removeClass("active");
        $(".toggle-mnu-1").removeClass("active");
          }
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
     var swiper6 = new Swiper('.s-rec-prod__slider', {
          // slidesPerView: 5,
          watchOverflow: true,
          slidesPerView: 'auto',
          freeMode: true, 
          freeModeMomentum: true, 
          loop: true
        });
// слайдер в карточке товара
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

              focusOnSelect: true ,
              asNavFor:  '.kart-head__slider-big',
              responsive: [{

                    breakpoint: 1366,
                    settings: {
                      slidesToShow: 3,
                      infinite: true
                    }

                  } ]
              // swipeToSlide: false
              });

  // ui slider
$(".filter-aside__item  ").each(function(){
        
    var 
        th= $(this),
        handle_min = th.find('.minus'),
        handle_max = th.find('.plus'),
        minn = parseInt(handle_min.val()),
        maxx = parseInt(handle_max.val());

 

    th.find( ".filter-aside__range-1" ).slider({
      min: minn,
      max: maxx,
      values: [ minn, maxx ],
      range: true,
      stop: function(event, ui) {
        handle_min.val(  ui.values[ 0 ] );
        handle_max.val(  ui.values[ 1 ] );
        },
        slide: function(event, ui){
        handle_min.val(  ui.values[ 0 ] );
        handle_max.val(  ui.values[ 1 ] );
        }
    });
    handle_min.change(function(){
      var value1=handle_min.val();
      var value2=handle_max.val();

        if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        handle_min.val(value1);
      }
      th.find( ".filter-aside__range-1" ).slider("values",0,value1);  
    });

      
    handle_max.change(function(){
      var value1=handle_min.val();
      var value2=handle_max.val();
      
      if (value2 > 1000) { value2 = 1000; handle_max.val(1000)}

      if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        handle_max.val(value2);
      }
      th.find( ".filter-aside__range-1" ).slider("values",1,value2);
    });
});


// сокращнеие текста
 $(".text-js").readmore({
     speed: 300,
    maxHeight: 90,
    heightMargin: 20,
    moreLink: '<a href="#" class="more accent">Показать больше</a>',
lessLink: '<a href="#" class="more accent">Скрыть</a>'
});
});
