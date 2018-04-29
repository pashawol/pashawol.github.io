 jQuery(document).ready(function($) {  
// слайдер ползунок
$(".input-range-double").ionRangeSlider({
  type: "double",
   min: 0.8,
    max: 10000,
 });




$(".input-range-single").each(function(){
  let minV = $(this).data("min"),
      maxV = $(this).data("max") ,
      result = $(this).parents(".s-calc__item").find(".text-range-js");
    $(this).ionRangeSlider({ 
       type: "single",
      min: 0.8,
    max: 10000,
        from: minV,
        onStart: function (data) {
        result.text(data.from);
        },
        onChange: function (data) {
            result.text(data.from);
        },
        onFinish: function (data) {
            result.text(data.from);
        },
        onUpdate: function (data) {
            result.text(data.from);
        }
     });
})

$(".btn-toggle-js").click(function(){ 
    $(".toggle-block-js").slideToggle();
    return false;
})



  // для свг
  svg4everybody({}); 

// мобильное меню
  var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").toggleClass("active");
    $("body, html").toggleClass("fixed");
    return false;
  }); 

  // для мобильного меню  
  function heightses() {

    var w = $(window).width(); 
    // скрывает моб меню 
    if (w>767.98){
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
 // $(" .top-nav a").click(function () {
 //        var elementClick = $(this).attr("href");
 //        var destination = $(elementClick).offset().top;
        
 //            $('html, body').animate({ scrollTop: destination }, 1100);
        
 //        return false; 
 //    });
 
var swiperCard = new Swiper('.carusel-slider', {  
      slidesPerView: 'auto', 
      spaceBetween: 30, 
    }); 

var swipergal = new Swiper('.gal-slider', {   
      lazy: true,
      preloadImages: false,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 


// адаптивные табы 
$('.tabs-block').easyResponsiveTabs({
  activate: function() {
    // swiperCard.init();
  },
});
 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  // аккордион в карточке
  $(".show-hide").click(function(){
    $(this).toggleClass("active").next(".tr-tooggle").toggle();
  })
  
  // $("tr[data-toggle='modal'] td").click(function(){
  //   $('#modal-about').modal('show')
  // })

 // карта

 if ($("div").is("#map")){


  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.727896069024254,37.44885049999991],
            zoom: 12,
            behaviors: ['drag'], 
        }, {
            searchControlProvider: 'yandex#search'
        }), 
        myPlacemark = new ymaps.Placemark([55.727896069024254,37.44885049999991], {
            hintContent: 'Воронеж, ул. Уличная, 32, корп. 1',
            balloonContent: 'Воронеж, ул. Уличная, 32, корп. 1 '
        }) 

    myMap.geoObjects
        .add(myPlacemark) 
});
 }
 


});
 
 