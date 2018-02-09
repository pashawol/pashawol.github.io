 jQuery(document).ready(function($) { 

  // Custom JS
 
      var swiper = new Swiper('.swiper-container', { 
      slidesPerView: 'auto',
      freeMode: true,
      freeModeMomentum: false,
          slidesPerColumn: 2,
          loop: false, 
          init: false,
      
      
    });

// $(".s-why__caption.active ").click(function(){
//   $(this).toggleClass("active").parents(".s-why__item").toggleClass("active");
// })
 

isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
    $(".s-why__item").on(' click    ', function(){

    $(this).toggleClass("active").siblings().removeClass('active')
    $(this).find(".s-why__caption").toggleClass("active").siblings().removeClass('active') 
  })
     $(".s-dop__col").on(' click    ', function(){

    $(this).toggleClass("active").siblings().removeClass('active')
    $(this).find(".s-dop__caption").toggleClass("active").siblings().removeClass('active') 
  })

}
else{
   $(".s-why__item").hover( function(){

    $(this).toggleClass("active").find(".s-why__caption").toggleClass("active");
  })
    $(".s-dop__col").hover( function(){

    $(this).toggleClass("active").find(".s-dop__caption").toggleClass("active");
  })

}

  function heightses() {

    var w = $(window).width();
   $(".s-step__title").height('auto').equalHeights();
   //
    

    // скрывает моб меню 
    if (w<1199){
          swiper.init();

    }
    if(w> 1199){
          swiper.init("false");

    }
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$("header .top_line").innerHeight();  
    if($(this).scrollTop()>topH){
                    $('header .top_line  ').addClass('fixed');
                    
                }
                else if ($(this).scrollTop()<topH){
                    $('header .top_line  ').removeClass('fixed');
                   
                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('header .top_line  ').addClass('fixed'); 
                }
                else if ($(this).scrollTop()<topH){
                    $('header .top_line  ').removeClass('fixed'); 
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


 

 var swiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 3,
      spaceBetween: 0,
      // init: false,
       

       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         
        
        992: {
          slidesPerView: 2, 
        },
        480: {
          slidesPerView: 1, 
        }
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


   
var wowAnim = $(".s-dop__col" +
                ".s-pick__col" + 
                ".s-condition__col");
wowAnim.each(function(i){
 
wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s"); 
// $(this).addClass("wow bounceInUp");
 
 
})
  var wow = new WOW({ mobile: false });
        wow.init();

 // accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})
  


});


$(document).on("submit",".js-form-validate",function(  ){



  $.post( "/action.php",$(this).serialize(), function( data ) {
    console.log(data);
    $.magnificPopup.open({
      items: {
        src: $('#thanks'),
        type: 'inline',
      }})

  });


  return false;
});