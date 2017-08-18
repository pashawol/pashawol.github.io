$(function() {

	
 $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true, 
    loop: true, 
    arrows: false,
     // prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      // nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
     
  });


$(".complex__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true, 
    loop: true, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
    responsive: [
        
       
        
     {
          breakpoint: 1260,
          settings: {
            slidesToShow: 4,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
          }
        },
   
     
 

      ]
  });


$(".slider-for4").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false, 
    loop: false, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
    responsive: [
        
       
        
     {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
             variableWidth: false
          }
        },
   
     {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
         
          }
        },
   
     
 

      ]
  });

$(".slider-for2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false, 
    loop: false, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
    responsive: [ 
     
     {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
         
          }
        }
      ]
  });


$(".preim__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    
    dots: false,
    speed: 450,
    infinite: false, 
    loop: false, 
    arrows: true,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
    responsive: [ 
        {
          breakpoint: 480,
          settings: {
             slidesToShow: 1,
          }
        },

      ]
  });




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

// Слайдер  ход строительства

  var cours = (".coursecont");
  $(cours+"__slider").slick({
      infinite: false, 
    loop: false, 
    prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
    nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
    variableWidth: true,
    loop: true,
    slidesToShow: 1,
    // centerMode: true,
  })

  $(cours+'__slider').on("click", '.coursecont__slide:not(.coursecont__slide-active)',function(){
    $(this)
    .addClass("coursecont__slide-active").siblings().removeClass("coursecont__slide-active");
  })
 
     
  $(cours+"__img-wrap").each(function(){
    $(this).height(  246 * ( parseInt($(this).data("h")) / 100));

})
  // consolelog($(".coursecont__img-wrap").height(  2,46 * ( parseInt($(this).data("h")) / 100)));
// конец Слайдер  ход строительства
// Custom JS
  function heightses() {
    var w = $(window).width();
   
   $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".news__item h3 ").height('auto').equalHeights();
   $(".complex__item ").height('auto').equalHeights();
   $(cours+"__item").height('auto').equalHeights();
    
    if (w>1260){
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


// слайдер на стр новостей
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
  });
// слайдер с миниатюрами
 $('.slider-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  asNavFor: '.slider-small',
  dots: false,
   
  adaptiveHeight: true,

  // draggable: false 

});
$('.slider-small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-big',
  dots: false,  
  // centerMode: true,
  focusOnSelect: true,
  // vertical: false,
  arrows: true,
  prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
  nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
  // draggable: false 
  // variableWidth: true,
  responsive: [
    
      
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
         
        }
      }
     
    ]
});

  // выбор варианта кредита

  $('.type-buy .mode__row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    
    dots: false,
    speed: 450,
    infinite: false, 
    loop: false, 
    arrows: false,
     prevArrow: ' <div class="l"><i class="icon-left"  > </i></div>',
      nextArrow: '   <div class="r"><i class="icon-right" > </i></div> ',
    responsive: [ 
        {
          breakpoint: 1260,
          settings: {
             // slidesToShow: 3,
              // variableWidth: true,
          }
        },
       
     {
            breakpoint: 991,
            settings: {
               slidesToShow: 1,
                variableWidth: true,
            }
          },
         
    
    
      ]
  });


  
  $(".type-buy").on('click', '.mode__slide:not(.mode__slide-active)', function(e) {

    $(this)
    .addClass('mode__slide-active').addClass('current').siblings().removeClass('mode__slide-active')
    $(".types-bye").text($(this).data("type"))
    // .closest('div.tabs').find('div.tabs__content').hide().removeClass('active')
    // .eq($(this).index()).fadeIn().addClass('active'); 
  })

  // кастомный селект
  $("  select").styler({
        selectSearch: true,
      });
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99")
    .attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");

// подсветка карты
$('.map-img').maphilight({
  strokeColor: 'ff0000',

});

$('.btn-modal').magnificPopup({
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',

  }); 
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

$("area.btn-modal").click(function(){
  var th= $(this),
      mod = $("#map-dialog");
  mod.find(".d-rooms").text(th.data("rooms"));
  mod.find(".d-flor").text(th.data("flor"));
  mod.find(".d-totalarea").text(th.data("totalarea"));
  mod.find(".d-livingspace").text(th.data("livingspace"));
  mod.find("img").attr("src", th.data("img"));

})
});
