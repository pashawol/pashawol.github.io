 $(document).ready(function() { 

  // Custom JS
  
 

  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
  
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

 
var   arrl2 = (' <div class="l"> <svg    xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"   width="24"  height="46" viewBox="0 0 111.71 211.53585" >  <path transform="translate(-2552.7439,-10.938105)"style="fill:#050505;stroke-width:0.26458335"  d="m 2556.0855,221.81303 c -2.5912,-1.33319 -3.8193,-3.95754 -3.1708,-6.77566 0.3164,-1.37536 0.5291,-1.59277 48.5756,-49.66956 26.5417,-26.55848 48.2589,-48.46598 48.2603,-48.68333 0,-0.21735 -21.6661,-22.00502 -48.1501,-48.417055 l -48.1527,-48.021876 -0.4294,-1.554734 c -0.7598,-2.750732 0.1801,-5.341214 2.4632,-6.789113 1.6096,-1.020803 3.0713,-1.213198 5.0101,-0.659466 l 1.5469,0.441811 50.7087,50.715126 c 27.8898,27.893317 50.9244,51.131847 51.188,51.641167 0.7693,1.48659 0.6699,4.07596 -0.2134,5.55625 -0.9082,1.52216 -101.0893,101.6471 -102.3215,102.26418 -0.4965,0.24866 -1.5681,0.50811 -2.3813,0.57655 -1.2509,0.10529 -1.7024,0.009 -2.9336,-0.62429 z" /> </svg> </div>'),
      arrr2 = (' <div class="r"> <svg    xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"   width="24"  height="46" viewBox="0 0 111.71 211.53585" >  <path transform="translate(-2552.7439,-10.938105)"style="fill:#050505;stroke-width:0.26458335"  d="m 2556.0855,221.81303 c -2.5912,-1.33319 -3.8193,-3.95754 -3.1708,-6.77566 0.3164,-1.37536 0.5291,-1.59277 48.5756,-49.66956 26.5417,-26.55848 48.2589,-48.46598 48.2603,-48.68333 0,-0.21735 -21.6661,-22.00502 -48.1501,-48.417055 l -48.1527,-48.021876 -0.4294,-1.554734 c -0.7598,-2.750732 0.1801,-5.341214 2.4632,-6.789113 1.6096,-1.020803 3.0713,-1.213198 5.0101,-0.659466 l 1.5469,0.441811 50.7087,50.715126 c 27.8898,27.893317 50.9244,51.131847 51.188,51.641167 0.7693,1.48659 0.6699,4.07596 -0.2134,5.55625 -0.9082,1.52216 -101.0893,101.6471 -102.3215,102.26418 -0.4965,0.24866 -1.5681,0.50811 -2.3813,0.57655 -1.2509,0.10529 -1.7024,0.009 -2.9336,-0.62429 z" /> </svg> </div>');
 
 // карусель
 $('.head-block__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1, 
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,  
     variableWidth: false,
     prevArrow: arrl2,
    nextArrow: arrr2,
    dots: true,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return  thumb ;
    },
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
 

   $(".top_line__link ").click(function(){
    $("#m-prod .form-wrap__title").html("Заказать звонок")
    $("#m-prod .form-wrap__btn").val("Отправить")
    $("#m-prod .order").val("Заказать звонок")
   })

   
 
    $(".s-ec .order").val("Заявка на консультацию") 
   
$(".head-block__btn").click(function(){ 
    $("#m-prod .order").val("Заказ прайса")
   })

   $(".s-prod__btn").click(function(){
    $("#m-prod .form-wrap__title").html('Узнайте оптовую цену на стадикам  <strong>'+ $(this).data("name")+  '</strong>')
    $("#m-prod .form-wrap__btn").val("Узнать стоимость")
    $("#m-prod .order").val("Узнать стоимость")
   })
  $(".s-work__btn ").click(function(){
    $("#m-prod .form-wrap__title").html("Оставьте заявку и узнайте стоимость вашего заказа")
    $("#m-prod .form-wrap__btn").val("Оставить заявку")
    $("#m-prod .order").val("Заявка в блоке- схема работы")
   })

    // галерея
  $(".gal").magnificPopup({
    delegate: 'a.gal-link',
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

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
 // форма

  
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  
   
  // кастомный инпут файл 
 
  var file = $(".add-file input[type=file]");
  file.change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         var name = $(".add-file__filename  ");
       name.text(filename);
  
    }); 



  if ($("div").is("#map1")){


  ymaps.ready(function () {
    var myMap = new ymaps.Map('map1', {
            center: [55.727896069024254,37.44885049999991],
            zoom: 17,
            behaviors: ['drag'],
              
                // controls: ["zoomControl", "fullscreenControl"]
        }, {
            searchControlProvider: 'yandex#search'
        }),

   
        myPlacemark = new ymaps.Placemark([55.727896069024254,37.44885049999991], {
            hintContent: 'Воронеж, ул. Уличная, 32, корп. 1',
            balloonContent: 'Воронеж, ул. Уличная, 32, корп. 1 '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: $("#map1").data("img"),
            // Размеры метки.
            iconImageSize: [37, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-19, -24]
        }) 

    myMap.geoObjects
        .add(myPlacemark) 
});
 }
  // табы
function tabs() {
var tab = ('tabs');
// $(' .' + tab + '__caption   .' + tab + '__btn:first-child  ').addClass('active')
 // $('.' + tab + '__content:first-child ').addClass("active");
$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('.' + tab + '').find('.' + tab + '__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn(150).addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
};

$(".s-prod__link").click(function(){
  $(".char-modal .tabs").remove();
  $(this).next().find(".tabs").clone().prependTo(".char-modal");
  tabs();
 
})


 
  $('.js-form-validate').submit( function() {
   var th = $(this);
    $.ajax({
      type: "POST",
      url: $("form").attr("action"), //Change
      data: th.serialize()
    }).done(function() {
          // $.magnificPopup.close();
        window.location.replace("/thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });

 
  try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };


});



