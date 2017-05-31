$(function() {

	$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 900,
    infinite: true,  
    // arrows: false,
     prevArrow: ' <div class="l"><i class="demo-icon  icon-arr-l"> </i></div>',
  nextArrow: '   <div class="r"><i class="demo-icon icon-arr-r"> </i></div> ',
  });

$('.carusel').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  speed: 900,
	  infinite: true,  
	  // arrows: false,
	   prevArrow: ' <div class="l"><i class="demo-icon  icon-arr-l"> </i></div>',
  nextArrow: '   <div class="r"><i class="demo-icon icon-arr-r"> </i></div> ',
      responsive: [
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
         
        }
      } 
    ]
	});


$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: $("form").attr("action"), //Change
      data: th.serialize()
    }).done(function() {
       $(".otvet-ok").animate({"opacity":" 1"},"slow");
    
    });
    return false;
  });

 // всповаща галл
$("section").each(function(){
  $(this).find('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      // verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
       
    }
    
  });
})


function heightses() {
    var w = $(window).width();
    
    
    
    var topH=$(".top_line  ").height();
  if($(this).scrollTop()>topH){
                  $('.top_line  ').addClass('fixed');
                  
              }
              else if ($(this).scrollTop()<topH){
                  $('.top_line  ').removeClass('fixed');
                 
              }
  $(window).scroll(function(){
              if($(this).scrollTop()>topH){
                  $('.top_line  ').addClass('fixed');
               
              }
              else if ($(this).scrollTop()<topH){
                  $('.top_line  ').removeClass('fixed');
                
              }
          });
      
  }
  $(window).resize(function() {
    heightses();
  });

  $( window ).on( "load", function() {
 heightses();
})

// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });
 

 // модальльное окно для форм
 $('.btn-modal').magnificPopup({
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
});
ymaps.ready(init);
        var myMap, 
            myPlacemark;
        function init(){ 
            myMap = new ymaps.Map("map", {
           
                center: [52.34624838674198,30.701533637939377],

                behaviors: ['drag'],
                zoom: 11,
                controls: ["zoomControl", "fullscreenControl"]

            });   
            myPlacemark = new ymaps.Placemark([52.34144520792636,30.65230165561091], {
                hintContent: 'г. Гомель, Речицкий район, д. Борщевка 10',
                balloonContent: 'г. Гомель, Речицкий район, д. Борщевка 10'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-metka.png',
            // Размеры метки.
            iconImageSize: [265, 76],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, -90]
        });
            myMap.geoObjects.add(myPlacemark);
          }

