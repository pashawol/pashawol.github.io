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

    fixedContentPos: false,
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




  $(".s-calc").each(function(){
    var th= $(this);
    th.find(".variant-item").click(function(){ 
      $(this).parents(".variant").addClass("active").find(".variant-item").removeClass("active");
      $(this).addClass("active");
      th.find(".col-lg-4:nth-child(2)").addClass("active").find(".input-number").find("input:first-of-type").focus();
      th.find(".variunt-count").val($(this).data("price")); 
    
    })
    th.find(' .input-wrap input').change(function(){
      th.find(".variant").addClass("active");
    })
    th.find(".yes").click(function(){
      $(this).parents(".input-radio-wrap").next().removeClass("disabled");
    })
    th.find(".no").click(function(){
      $(this).parents(".input-radio-wrap").next(".input-radio-wrap").addClass("disabled")
      .find("input").each(function(){
        $(this).removeAttr("checked");
      })

    })

  })

// калькулятор 1
function calc_1(a,b, c,d){
  return 101;
}
 
    var th_1 = $(".s-calc_1"),
        summ_1 = 0,
        var_price_1 = parseInt(th_1.find(".variunt-count").val()),
        input_h_1 = parseInt(th_1.find('input.height').val()), 
        input_w_1 = parseInt(th_1.find('input.width').val()),
        var_mater_1 = parseInt(th_1.find(".mater:checked").data("price"));
        th_1.find(".big").text(summ_1);
        summ_1 = calc_1(var_price_1,input_h_1,input_w_1 ,var_mater_1);
    th_1.find(".variant-item").click(function(){
      
      th_1.find(".big").text(summ_1);
    })

    th_1.find(".variunt-count, .input-wrap input").change(function() { 
      th_1.find(".big").text(summ_1);
    });
  


 
// калькулятор 2
function calc_2(a,b, c,d,e,f){
  return 102;
}
    var th_2 = $(".s-calc_2"),
        summ_2 = 0,
        var_price_2 = parseInt(th_2.find(".variunt-count").val()),
        input_h_2 = parseInt(th_2.find('input.height').val()), 
        input_w_2 = parseInt(th_2.find('input.width').val()),
        var_mater_2 = parseInt(th_2.find(".mater:checked").data("price"));
        var_vitraj_2 = parseInt(th_2.find(".vitraj:checked").data("price"));
        var_vVitraj_2 = parseInt(th_2.find(".vVitraj:checked").data("price"));
        th_2.find(".big").text(summ_2);
      summ_2 = calc_2(var_price_2,input_h_2,input_w_2 ,var_mater_2, var_vitraj_2, var_vVitraj_2);
    th_2.find(".variant-item").click(function(){
      th_2.find(".big").text(summ_2);
    })
    th_2.find("  .variunt-count, .input-wrap input ").change(function() { 
      th_2.find(".big").text(summ_2);
    });
 
 
// калькулятор 3
function calc_3(a,b,c,d){
  return 103;
}
 
    var th_3 = $(".s-calc_3"),
        summ_3 = 0,
        var_price_3 = parseInt(th_3.find(".variunt-count").val()),
        input_sq_3 = parseInt(th_3.find('input.sq').val()),
        var_mater_3 = parseInt(th_3.find(".mater:checked").data("price"));
        var_coat_3 = parseInt(th_3.find(".coat:checked").data("price"));
        th_3.find(".big").text(summ_3);
        summ_3 = calc_3(var_price_3 , input_sq_3 ,var_mater_3, var_coat_3);
      th_3.find(".variant-item").click(function(){
      th_3.find(".big").text(summ_3);
    })

    th_3.find(".variunt-count, .input-wrap input").change(function() { 
      th_3.find(".big").text(summ_3);
    });
  
 
$("input[type='tel']").inputmask("8-999-999-99-99");


// $(".s-opis_plitka").each(function(i){ 
//   $(".s-opis_plitka").eq(i).find(".col-md-6").each(function(){ 
//   $(this).attr("data-wow-delay", i*.1*2 + "s"); 
//   }) 
// })



$(".s-opis_plitka:nth-child(odd) .col-md-6:first-child").addClass("wow slideInRight");
$(".s-opis_plitka:nth-child(odd) .col-md-6:last-child").addClass("wow slideInLeft");
$(".s-opis_plitka:nth-child(even) .col-md-6:first-child").addClass("wow slideInLeft");
$(".s-opis_plitka:nth-child(even) .col-md-6:last-child").addClass("wow slideInRight");



new WOW().init({mobile:  false,   });

});
