$(function() {

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
      $(".toggle-mnu-1").click();
    });



  function heightses() {

    var w = $(window).width();
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    

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


 
$(function() {
// $(' .tabs__caption   .tab-btn:first-child  ').addClass("active")
 // $('.tabs__content:first-child ').addClass("active");
$(' .tabs__caption').on('click', '.tab-btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99")
    .attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");


    // галлерея
    $('.s-gal').magnificPopup({
    delegate: 'a.s-gal__link-img',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
  });
    // видео в галлереи
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

 
    // слайдер с миниатюрами
 $('.reviews__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false, 
  asNavFor: '.slider-nav',
  dots: false,
   arrows: false,  
  adaptiveHeight: true,

  // draggable: false 

});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.reviews__slider',
  dots: false,  
  // centerMode: true,
  focusOnSelect: true,
  // vertical: false,
  arrows: false, 
  // centerMode: true,
  variableWidth: true
 
});



    // переход по карте
   $(".p-1").click(function(){
    $(".leaflet-marker-icon:nth-child(2)").click();
   }) 
    $(".p-2").click(function(){
    $(".leaflet-marker-icon:nth-child(1)").click();
   }) 

    $(".btn-top").click(function (){
                $('body,html').animate({
                    scrollTop:0
                }, 1500);
                return false;
            });


   $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(".showhide").click(function() {
     $(".showhide-all").slideUp(500), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp(500),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown(500).prev("div").addClass("active") })
});
