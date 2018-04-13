 jQuery(document).ready(function($) { 


  // для свг
  svg4everybody({});
  // Custom JS
  

  $(".dropdown .top-nav__link, .drop-inner .drop__link, .drop-sub-inner .drop-sub__link, .drop-sub-inner > a").click(function(e){
    e.preventDefault();
    // e.prevenDefault()
  })  
 
 // var togli =  '.dropdown, .drop-inner, .drop-sub-inner';
 $('.trop, .aside').find(".dropdown > a , .drop-inner > a , .drop-sub-inner > a ").each(function(){

  var th = $(this);
  th.click(function(){ 
    
    th.toggleClass('active').next().slideToggle();
    th.parent().toggleClass('active');
  })
 })
 

$(".btn-toggle-js").click(function(){
  $(this).toggleClass("active").next().slideToggle();
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
 
  function heightses() {

    var w = $(window).width();
     // прижать футер к низу
     $(".main-wrapper").css("padding-bottom", $("footer").height() + 60)
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
 $(" .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


// или
// Cache selectors
 
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

 
// слайдер в шапке
 var swiper = new Swiper('.header-block__slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
// слайдер каталога
 var swiper2 = new Swiper('.slider-js', {
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

var titles = [];
    $('.s-product__slider-js .swiper-slide').each(function(i) {
      titles.push($(this).data('name'))
    });


var mySwiper3 = new Swiper('.s-product__slider-js', {
  // Optional parameters
   pagination: {
        el: '.swiper-pagination.row',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="tab__link  ' + className + '"> <div class="dots-inner"> <img class="res-i" src="' + titles[index] + '" /></div></div>';
        },
      },

});

// слайдер цвета в карточке
 var swiper4 = new Swiper('.color-slider', {
      // slidesPerView: 5,
      slidesPerView: 'auto',
      watchOverflow: true,
      spaceBetween: 0,
      freeMode: true, 
       // centeredSlides: true, 
      loop: true,
      loopFillGroupWithBlank: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
       freeModeMomentum: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
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
 
 $(".s-filter__item-js ").each(function(i){
  var th = $(this);
  th.attr("href", '#modal-filter' + i)
    .next().attr("id", 'modal-filter' + i);
 })
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  
   

  // кастомный селект
$('.custom-select-js').each(function(){

  $(this).select2();
})
  // кастомный инпут файл 
    $(".dropzone").dropzone({ 
    url: "/file/post",
    addRemoveLinks: true,
        acceptedFiles: 'image/*',
        uploadMultiple: true,
     });

    // показать / скрыть блок  написания отзыва
    $(".s-rew__btn-toggle").click(function(){
      $(this).toggleClass("active").next().slideToggle();
    })
    // показать блок друго подарка
     $(".s-card-prod__btn-toggle").click(function(){
      $(this).toggleClass("active")
      $(".toggle-block-js").slideToggle().toggleClass("active");

      swiper2.update();

    })
  

});
 
 

