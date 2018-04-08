 jQuery(document).ready(function($) { 

  // для свг
  svg4everybody({});
  // Custom JS
  
 
      // галерея
  $(".gal").each(function(){
    
  $(this).find("a.img-bg").magnificPopup({
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

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
 

// листалка по стр
 $(" .top-nav a, .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
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
 

var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  
  
$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4, 
  prevArrow: arrl2,
  nextArrow: arrr2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3, 
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2 
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1, 
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});   
   
var wowAnim = $(".animate-block," +
                ".s-pick__col," + 
                ".s-condition__col");
wowAnim.each(function(i){
 
wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s"); 
// $(this).addClass("wow bounceInUp");
 
   var wow = new WOW({ mobile: false });
        wow.init();

});

// паралакс
 
 var scrollorama = $.scrollorama({
        blocks:'.scrollblock'
      
    });
 
 scrollorama
  .animate('.abs-img',{delay: -1200, duration: 1200, property:'top', start:50, end:-100 })
  .animate('.abs-img2',{delay: -100, duration: 1200, property:'top', start:50, end:-100 })
});
