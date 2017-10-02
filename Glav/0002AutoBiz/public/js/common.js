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
   $(".contact-head__item ").height('auto').equalHeights(); 
   $(".contact-head__item-big").height('auto').equalHeights(); 
   $(".s-tarif__head").height('auto').equalHeights(); 
   $(".s-tarif__caption-wrap").height('auto').equalHeights(); 
   
   $(".convenience__item").height('auto').equalHeights(); 
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
 $(" .top-nav ul a.scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - $(".top-nav").height();
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
// табы

$(function() { 
$(' .tabs1__caption   .tabs1__btn:first-child  ').addClass("active")

 $('.tabs1__content:first-child ').addClass("active");
$(' .tabs1').on('click , mouseover', '.tabs1__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('div.tabs1').find('div.tabs1__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn(150).addClass('active'); 
});
});
 

$(function() {
$(' .tabs__caption   .tabs__btn:first-child  ').addClass("active")
 $('.tabs__content:first-child ').addClass("active");
$(' .tabs').on('click', '.tabs__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn(150).addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});



// для svg
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


  var arrl = (' <div class="l"></div>'),
      arrr =(' <div class="r"></div> ');
      


   $('.sliderfor5').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        infinite: true,
        loop: true,  
        arrows: true,  
        prevArrow: arrl,
        nextArrow: arrr,
        responsive: [
      
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        
        }
      }
    ]
        }); 

   
   $('.sliderfor3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        infinite: true,
        loop: true,  
        arrows: true,  
        prevArrow: arrl,
        nextArrow: arrr,
        responsive: [
      
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        
        }
      }
    ]
        }); 

   $(".time").datetimepicker({
  locale: 'ru-ru', 
   format: 'LT',
   
   tooltips: {
     
    incrementHour: 'Добавить час',
    pickHour: 'Выбрать время',
    decrementHour:'На час меньше',
    incrementMinute: 'Добавить минуты',
    pickMinute: 'Выбрать минуты',
    decrementMinute:'Уменьшить минуты',
 
}
 
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
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");

     $('.s-rew__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            speed: 450,  
            infinite: true,
            loop: true,  
            arrows: false,  
          }); 

});
