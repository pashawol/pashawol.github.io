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


// или
// Cache selectors
var lastId,
    topMenu = $(" .top-nav ul"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a.top-nav__link"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1600);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter(".top-nav__link[href='#"+id+"']").parent().addClass("active");
   }                   
});
// табы
$(function() {
var tab = ('tabs');
$(' .' + tab + '__caption   .' + tab + '__btn:first-child  ').addClass('active')
 $('.' + tab + '__content:first-child ').addClass("active");
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


var   arrl2 = (' <div class="l"> <svg    xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"   width="24"  height="46" viewBox="0 0 111.71 211.53585" >  <path transform="translate(-2552.7439,-10.938105)"style="fill:#050505;stroke-width:0.26458335"  d="m 2556.0855,221.81303 c -2.5912,-1.33319 -3.8193,-3.95754 -3.1708,-6.77566 0.3164,-1.37536 0.5291,-1.59277 48.5756,-49.66956 26.5417,-26.55848 48.2589,-48.46598 48.2603,-48.68333 0,-0.21735 -21.6661,-22.00502 -48.1501,-48.417055 l -48.1527,-48.021876 -0.4294,-1.554734 c -0.7598,-2.750732 0.1801,-5.341214 2.4632,-6.789113 1.6096,-1.020803 3.0713,-1.213198 5.0101,-0.659466 l 1.5469,0.441811 50.7087,50.715126 c 27.8898,27.893317 50.9244,51.131847 51.188,51.641167 0.7693,1.48659 0.6699,4.07596 -0.2134,5.55625 -0.9082,1.52216 -101.0893,101.6471 -102.3215,102.26418 -0.4965,0.24866 -1.5681,0.50811 -2.3813,0.57655 -1.2509,0.10529 -1.7024,0.009 -2.9336,-0.62429 z" /> </svg> </div>'),
    arrr2 = (' <div class="r"> <svg    xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"   width="24"  height="46" viewBox="0 0 111.71 211.53585" >  <path transform="translate(-2552.7439,-10.938105)"style="fill:#050505;stroke-width:0.26458335"  d="m 2556.0855,221.81303 c -2.5912,-1.33319 -3.8193,-3.95754 -3.1708,-6.77566 0.3164,-1.37536 0.5291,-1.59277 48.5756,-49.66956 26.5417,-26.55848 48.2589,-48.46598 48.2603,-48.68333 0,-0.21735 -21.6661,-22.00502 -48.1501,-48.417055 l -48.1527,-48.021876 -0.4294,-1.554734 c -0.7598,-2.750732 0.1801,-5.341214 2.4632,-6.789113 1.6096,-1.020803 3.0713,-1.213198 5.0101,-0.659466 l 1.5469,0.441811 50.7087,50.715126 c 27.8898,27.893317 50.9244,51.131847 51.188,51.641167 0.7693,1.48659 0.6699,4.07596 -0.2134,5.55625 -0.9082,1.52216 -101.0893,101.6471 -102.3215,102.26418 -0.4965,0.24866 -1.5681,0.50811 -2.3813,0.57655 -1.2509,0.10529 -1.7024,0.009 -2.9336,-0.62429 z" /> </svg> </div>');
      
 // карусель
 $('.s-project__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    dots: true,
    speed: 450,
    infinite: false,
    loop: false,  
    swipe: false,
    // centerMode: true,
    // focusOnSelect: true , 
     variableWidth: false,
      arrows: true, 
     prevArrow: arrl2,
      nextArrow: arrr2,
    draggable: false,
    });

  $('.s-project__slider-midd').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  loop: false,  
  infinite: false,
  adaptiveHeight: true,
  asNavFor: '.s-project__slider-sm'
});
$('.s-project__slider-sm').slick({
// lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.s-project__slider-midd',
  dots: false,
  loop: false,  
  infinite: false,
  focusOnSelect: true
});

  
  $('.s-team__slider-big').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  loop: false,  
  infinite: false,
  adaptiveHeight: true,
  arrows: true, 
  prevArrow: arrl2,
  nextArrow: arrr2,
  asNavFor: '.s-team__slider-sm'
});
$('.s-team__slider-sm').slick({
// lazyLoad: 'ondemand',
  slidesToShow: 10,
  slidesToScroll: 1,
  asNavFor: '.s-team__slider-big',
  dots: false,
  loop: false,  
  infinite: false,
  focusOnSelect: true,
  arrows: true, 
  prevArrow: arrl2,
  nextArrow: arrr2,
  responsive: [
    { 
      breakpoint: 1199,
      settings: {
        slidesToShow: 8,
        
      }

    },

      { 
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          
        }

      },

      { 
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          
        }

      },
       { 
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          
        }

      },

 ]
});


 $('.s-project__slider-big, .s-project__slider-midd, .s-project__slider-sm, .s-team__slider-sm, .s-team__slider-big')
 .on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });
 
 // $('.s-project__slider-big').on('afterChange',function(event, image){
 //     // console.log("nextSlide");
 //   $(this).find('  .img-wrap').each(function(){
 //    console.log($(this).find("img").attr("src"));
 //    $(this).css({"background-image": $(this).find("img").attr("src") })
 //  })
 // })

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

   // timer  http://www.jqueryscript.net/time-clock/Extremely-Lightweight-jQuery-Countdown-Timer-Plugin-downCount.html
$('.countdown').each(function(){
  var dat = $(this).find(".date.d-none").text();
$(this).downCount({  
   date: dat,
  offset: +10
});
})
  


 
        
 // ui slider
$(".s-calc").each(function(){ 
    var 
        th= $(this),
        handle_min = th.find('.minus'),
        minn = parseInt(handle_min.val()),
        maxx = 1000;

 

    var slider = th.find( ".s-calc__range-1" ).slider({
      range: "min",
      min: minn,
      max: 100,
      values: 1,
      slide: function( event, ui ) {
        handle_min.val( ui.value );
      }
    });
    // handle_min.val($("#slider-range").slider("values"))
    handle_min.on( "change",function(){ 
      slider.slider("value", $(this).val());  
    });
 
});




// accordion
  $(".showhide").click(function() {
     $(".showhide-all").slideUp(), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp(),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active") })



 ymaps.ready(function () {
    var myMap = new ymaps.Map('map1', {
            center: [51.67682134332114,39.246444082451085],
            zoom: 15,
            behaviors: ['drag'],
              
                // controls: ["zoomControl", "fullscreenControl"]
        }, {
            searchControlProvider: 'yandex#search'
        }),

   
        myPlacemark = new ymaps.Placemark([51.677603654725326,39.24610075969719], {
            hintContent: 'Воронеж, ул. Уличная, 32, корп. 1',
            balloonContent: 'Воронеж, ул. Уличная, 32, корп. 1 '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: $("#map1").data("img"),
            // Размеры метки.
            iconImageSize: [45, 59],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-22, -30]
        }) 

    myMap.geoObjects
        .add(myPlacemark)
       
 
    
});
});
