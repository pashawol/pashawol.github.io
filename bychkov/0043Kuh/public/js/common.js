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
      $(".hidden-mnu .toggle-mnu").click();
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
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 $(" .top-nav a, .a-scroll, .wrapp-hidden li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top + 40;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
// табы
$(function() {
// $(' .tabs__caption   .tabs-btn  ').addClass("active")
 // $('.tabs__content:first-child ').addClass("active");
$(' .tabs').on('click', '.tabs-btn:not(.active)', function(e) {

  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('.tabs__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});

  var why = (".s-why")
   
 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

// accordion
  // $(why+'__item').click(function() {
  //    $(why+'__text').slideUp(), $(why+'__item').removeClass("active"), 
  //    $(this).find(why+'__text').filter(function() {
  //           return "block" == $(this).css("display") }).slideUp(),
  //            $(this).find(why+'__text').filter(function() {
  //           return "none" == $(this).css("display") }).slideDown().parents(why+'__item').addClass("active") })

     
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});
