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
      $(".toggle-mnu-1").click();
    });



  function heightses() {

    var w = $(window).width();
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    

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


 
$(function() {
// $(' .tabs__caption   .tab-btn:first-child  ').addClass("active")
 // $('.tabs__content:first-child ').addClass("active");
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
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99")
    .attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");


    // галлерея
    $('.s-gal').magnificPopup({
    delegate: 'a.s-gal__link-img',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
  });
    // видео в галлереи
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

 
    // слайдер с миниатюрами
 $('.reviews__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false, 
  asNavFor: '.slider-nav',
  dots: false,
   arrows: false,  
  adaptiveHeight: true,

  // draggable: false 

});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.reviews__slider',
  dots: false,  
  // centerMode: true,
  focusOnSelect: true,
  // vertical: false,
  arrows: false, 
  // centerMode: true,
  variableWidth: true
 
});


// карта
// http://api.2gis.ru/doc/maps/ru/examples/markers/
      // api
 
        var map  ;
        DG.then(function () {

        map = DG.map('map', {
        center: [55.90065756884205,37.53963449999995],
        zoom: 16,
        lazy: true,
        // fullscreenControl: false,
        //- zoomControl: false,
        scrollWheelZoom: false,
        // doubleClickZoom: false,
        });
        var myIcon = DG.icon({
          iconUrl: 'img/svg/placeholder-filled-point.svg',
          iconRetinaUrl: 'img/svg/placeholder-filled-point.svg',
          iconSize: [37, 45],
          iconAnchor: [22, 60],
          // popupAnchor: [-3, -76],
          
      });

                  marker1 = DG.marker([55.74207806900115,37.602956499999976], {icon: myIcon}).addTo(map).bindPopup(
        '<p>119034, Москва, 2 - Обыденский переулок, д. 11</p>')
        .bindLabel(' <div class="my-hint "><h3>VR Полигон</h3> <p>119034, Москва, 2 - Обыденский переулок, д. 11</p> </div>');

                  marker2 = DG.marker([55.90065756884205,37.53963449999995], {icon: myIcon}).addTo(map).bindPopup(
         '<p>127411, Москва, Дмитровское шоссе, 157-9</p>')
        .bindLabel(' <div class="my-hint "> <h3>главный офис</h3><p>127411, Москва, Дмитровское шоссе, 157-9</p> </div>');
      
                  group = DG.featureGroup([marker1, marker2]);
                  group.addTo(map);
                  group.on('click', function(e) {
                      map.setView([e.latlng.lat, e.latlng.lng]);
                  });
         
         
        });

   $(".p-1").click(function(){
    $(".leaflet-marker-icon:nth-child(2)").click();
   }) 
    $(".p-2").click(function(){
    $(".leaflet-marker-icon:nth-child(1)").click();
   }) 

    $(".btn-top").click(function (){
                $('body,html').animate({
                    scrollTop:0
                }, 1500);
                return false;
            });


   $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

});
