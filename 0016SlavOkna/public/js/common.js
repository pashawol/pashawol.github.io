$(function() {
// слайдер в шапке и  под ним
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
 
$('.s-contact .modal-btn').click(function(){
    
    $("#small-dialog .text").text($(this).parents(".item").find("h4").text())
    $("#small-dialog .h3").text("Связаться с региональным  представителем");
    $("#small-dialog .order").val($("#small-dialog .h3 ").text())
})

$('footer a, .top_line a, .trop a ').click(function(){
   // var  t_h4= $(this).parents("item").find("h4").text();
    $("#small-dialog .text").text("и мы с Вами свяжемся в ближайшее время")
    $("#small-dialog .h3").text("Заполните форму");
    $("#small-dialog .order").val($(".modal-window .h3 ").text())
})

 // модальльное окно для форм
 $('.modal-btn, .btn-modal').magnificPopup({
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

// форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: $("form").attr("action"), //Change
      data: th.serialize()
    }).done(function() {
          // $.magnificPopup.close();
         $.magnificPopup.open({
        items: {
          src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      })
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });

// прокрутка к якорям
$(" .top_line li a, .logo, footer li a, .landingMenu2 a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 80;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
function calc_1(a,b, c,d){
  return 100;
}
// калькулятор
$(".s-calc_1").each(function(){

    var th = $(this),
      summ = 0,
      var_price = parseInt(th.find(".variunt-count").val()),
      input_price_height = parseInt(th.find('.input-number input.height').val()), 
      input_price_width = parseInt(th.find('.input-number input.width').val()),
      var_radio = parseInt(th.find(".input-radio-wrap input:checked").data("price"));
      th.find(".big").text(summ);
     
    $(".variant-item").click(function(){
      $(this).parents(".variant").addClass("active").find(".variant-item").removeClass("active");
      $(this).addClass("active");
      th.find(".col-lg-4:nth-child(2)").addClass("active");
      summ += calc_1(var_price,input_price_height,input_price_width ,var_radio);
       th.find(".big").text(summ);
    })

    th.find("form").change(function() { 
     
      summ += calc_1(var_price,input_price_height,input_price_width ,var_radio);


      th.find(".big").text(summ);


   })

  })

});
// карта
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

