$(function() {

$(".filter-item").each(function(){

    var minn = parseInt($(this).find('.minus').val());
    var maxx = parseInt($(this).find('.plus').val());
$(this).find( ".slider-range" ).slider({
      range: true,
      min: minn,
      max: maxx,
      values: [ minn, maxx ],
      slide: function( event, ui ) {
        
       $(this).parents(".filter-item").find('.minus').val(  ui.values[ 0 ] );
        $(this).parents(".filter-item").find('.plus').val(  ui.values[ 1 ] );
      }
    });
     $(this).find('.minus').val(    $(this).find( ".slider-range" ).slider( "values", 0 )   );
     $(this).find('.plus').val(     $(this).find( ".slider-range" ).slider( "values", 1 )   );
 
});
$(".next").click(function(){
  $(".preim__slider .slick-current").next().click();
})

$(".preim__slider .slide").click(function(){
  var th =$(this).parents(".preim");
  th.find(".preim__img-wrap ").css({"background-image": "url("+$(this).find("img").attr("src")+")"});
  th.find(".preim__img-wrap img").attr("src", $(this).find("img").attr("src"))
  th.find("h3").text( $(this).find("p").text())
  th.find(".text-wrap p").text( $(this).data("text"));
})


// ПРЕИМУЩЕСТВА КОМПАНИИ слайдер
$('.carusel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 900,
    infinite: true,  
    arrows: false,
    focusOnSelect: true,
   useTransform:false,
     // prevArrow: ' <div class="l"><i class="demo-icon  icon-arr-l"> </i></div>',
    // nextArrow: '   <div class="r"><i class="demo-icon icon-arr-r"> </i></div> ',
      responsive: [
      
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        
        }
      }
    ]
  });


$('.otz__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 900,
    infinite: true,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
    nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
 
  });
$('.otz p').readmore({
  speed: 75,
  moreLink: '<a href="#" class="more">Читать отзыв полностью</a>',
  lessLink: '<a href="#" class="more">Скрыть</a>',
  speed: 300,
  maxHeight: 77,
});

$('.patner__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 900,
    infinite: true,  
    // arrows: false,
    focusOnSelect: true,
   arrows: true,
     prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
    nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
      responsive: [
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 3,
         
        }
      } ,
{
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
         
        }
      } ,

    ]
  });
// слайдер с миниатюрами
 $('.ot-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false, 
  asNavFor: '.slider-nav',
  dots: false,
  prevArrow: ' <div class="l"></div>',
  nextArrow: '   <div class="r"></div> ',
  adaptiveHeight: true,

  // draggable: false 

});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.ot-slider',
  dots: false,  
  // centerMode: true,
  focusOnSelect: true,
  // vertical: false,
  arrows: true,
  prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
  nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
  // draggable: false 

  responsive: [
    
      
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
         
        }
      }
     
    ]
});

$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      // verticalFit: true,
      
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
       
    }
    
  });

// aккорион
$("p.toogle").click(function(){
  $(this).parents(".catalog__filter").find(".hide-toogle").slideToggle();
  $(this).next(".hide-toogle").slideToggle();
  $(this).toggleClass("active");
})



$('.slide-project__carusel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 900,
    infinite: true,  
    arrows: true,
    focusOnSelect: true,
   useTransform:false,
    prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
  nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
      responsive: [
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        
        }
      },
       {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        
        }
      },
        {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        
        }
      },
        
    ]
  });


// мобильное меню
 var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });

// пролистывание по стр к якорям
    $(" .top_line li a, .trop.main-mnu li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


// табы
$(function() {
$(' .tabs__caption   .tab-btn:first-child  ').addClass("active")
 $('.tabs__content:first-child ').addClass("active");
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
 

});
