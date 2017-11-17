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

    $(" .trop__link").click(function(e){
      e.preventDefault();
       // $(this).siblings().find(".drop").slideUp();
      $(this).next( ".drop").slideToggle();
       // return false;
    })
  $(".drop__link ").click(function(e){
    e.preventDefault();
       $(this).parent().siblings().find(".drop-sub").slideUp();
      $(this).next( ".drop-sub").slideToggle();
       // return false;

    })
 
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
 
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();

 
// табы
$(function() {
var tab = ('tabs');
// $(' .' + tab + '__caption   .' + tab + '__btn:first-child  ').addClass('active')
 // $('.' + tab + '__content:first-child ').addClass("active");
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

   
});
