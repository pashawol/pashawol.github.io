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
     $(".prod-item__h3").height('auto').equalHeights();
    

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
 
 
// стрелки для слайдера
 var arr_l = (' <div class="l"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19"><path fill="#6e6e72" d="M.2 9.57L9 1.16a.66.66 0 0 1 .43-.18c.16 0 .3.07.43.18l.95.91c.12.12.18.26.18.41 0 .16-.06.3-.18.42L3.39 9.99l7.42 7.09a.56.56 0 0 1 0 .83l-.95.9a.61.61 0 0 1-.87 0L.2 10.4a.56.56 0 0 1-.19-.41c0-.16.06-.3.2-.42z"/></svg></div>'),
      arr_r =(' <div class="r"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19"><path fill="#6e6e72" d="M10.8 9.57L2.01 1.16a.69.69 0 0 0-.44-.18.64.64 0 0 0-.43.18l-.95.91a.57.57 0 0 0 0 .83l7.42 7.09-7.42 7.09a.55.55 0 0 0-.18.41c0 .16.06.3.18.42l.95.9a.6.6 0 0 0 .43.18c.16 0 .31-.06.44-.18l8.79-8.41a.58.58 0 0 0 .19-.41c0-.16-.07-.3-.19-.42z"/></svg></div> ');
 

    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 450, 
      infinite: true,
      loop: true,  
     arrows: true, 
      prevArrow: arr_l,
      nextArrow: arr_r,
        autoplay: true,
  autoplaySpeed: 4000,
    });

     $('.sliderfo4').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      speed: 450, 
      infinite: true,
      loop: true,  
     arrows: true, 
      prevArrow: arr_l,
      nextArrow: arr_r,
      responsive: [
      
      {
        breakpoint: 1199,
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



  $('  select.custom').styler();

  $(".mobile-toggle").click(function(){
    $(this).next().fadeToggle(150);
  })
  $(document).mouseup(function (e) {
    var container = $(".filter");
    if (container.has(e.target).length === 0){
        $(".mobile-toggle").next().fadeOut();
    }
});
});
