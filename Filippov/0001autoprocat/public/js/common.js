 jQuery(document).ready(function($) { 

  // для свг
  svg4everybody({});
  // Custom JS
  
 

$('.popover-js').popover({
  placement: 'auto',
  trigger: 'hover',
})
 


 var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

 $(".date-picker-block-js").each(function(){

    var th = $(this);

        th.find('.startDate').datepicker({ 
               locale: 'ru-ru',
            uiLibrary: 'bootstrap4',
            // iconsLibrary: 'fontawesome',
            format: 'dd.mm.yyyy',
            minDate: today,
            maxDate: function () {
                return th.find('.endDate').val();
            }
        });
        th.find('.endDate').datepicker({
               locale: 'ru-ru',
            uiLibrary: 'bootstrap4',
            // iconsLibrary: 'fontawesome',
            format: 'dd.mm.yyyy',
            minDate: function () {
                return th.find('.startDate').val();
            }
        });
 })
 $(".label-date-picker-js  input").click(function(){
  $(this).next().click();
 })
   // accordion
  $(".showhide").click(function() { 
     $(this).toggleClass("active").next("div").slideToggle().parents().toggleClass("active");
  })
  
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
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").slideToggle("active");
    $("html, body").toggleClass("fixed");
    return false;
  }); 
    
  
// листалка по стр
 $(" .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


 
 
// слайдер на главной
 var swiper = new Swiper('.s-articals__slider', { 
      loop: true ,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       preloadImages: false, 
      lazy: true,
      lazy: {
        loadPrevNext: true,
      }
       
    });

// слайдер в карточке

var swiperCard = new Swiper('.carusel-slider', { 
      // loop: true ,
      // init: false,
      // slidesPerView: 3,
      // slidesPerColumn: 3,
      slidesPerView: 'auto', 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      } 
    });

function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    

    // скрывает моб меню 
    if (w<992){
        // swiperCard.init();
    }
     
   
    if (w>992){
      // swiperCard.init();
      // swiperCard.destroy();
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("html, body").removeClass("fixed");
    }
    var topH=$("header ").height() + $('.top-nav  ').height();  
    var topH2=$(".header-block ").height();  
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed-ready'); 
                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed-ready'); 
                }
            });

    if($(this).scrollTop()>topH2){
                    $('.top-nav  ').addClass('fixed');
                    
                }
                else if ($(this).scrollTop()<topH2){
                    $('.top-nav  ').removeClass('fixed');
                   
                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH2){
                    $('.top-nav  ').addClass('fixed'); 
                }
                else if ($(this).scrollTop()<topH2){
                    $('.top-nav  ').removeClass('fixed'); 
                }
            });

       // конец добавил 
  }

  $(window).resize(function() {
    heightses();
   
  });
 

 

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
 
  
 
   
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  
    
   // $(".dropzone").dropzone({ 
   //  url: "/file/post",
   //  addRemoveLinks: true,
   //      acceptedFiles: 'image/*',
   //      uploadMultiple: true,
   //   });

  
  $(".pretty-embed__bg").each(function(){ 
    // загрузка фона видео
  $(this).css("background-image",'url(http://img.youtube.com/vi/'  + $(this).data("src")+ '/0.jpg)')
  // включение видео при клике по блоку
   $(this).click(function(){
    $(this).removeClass("on").next()
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1').addClass("on");
   })
   })

 $(".input-range").each(function(){
  let minV = $(this).data("min"),
      maxV = $(this).data("max") ;

     $(this).ionRangeSlider({
      type: "double",
       min: minV,
        max: maxV,
     });

 })
 $(".input-range-single").each(function(){
  let minV = $(this).data("min"),
      maxV = $(this).data("max") ;

     $(this).ionRangeSlider({
      type: "single",
       min: minV,
        max: maxV,
     });

 })
 
});
