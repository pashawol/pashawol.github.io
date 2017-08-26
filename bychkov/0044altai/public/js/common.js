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
   $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".google-map, .panel-top  ").height('auto').equalHeights();
    

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

// листалка по стр
 $(" .top-nav a, .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
 
  // стрелки для слайдера
 var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
      arrl2 = (' <div class="l"><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div>'),
      arrr2 =(' <div class="r"><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div> ')
 
    $('.sliderone').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      speed: 450,
      infinite: true,
      loop: true,  
       arrows: true, 
      prevArrow: arrl2,
      nextArrow: arrr2,
    });

    $('.slider__article').readmore({
      speed: 300,
      moreLink: '<a href="#" class="more ">Read more</a>',
      lessLink: '<a href="#" class="more ">Close</a>',
      maxHeight: 90,
      heightMargin: 20
      // embedCSS: false
    });

  $('  select.custom').styler();


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
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});


 
              function google_maps_59a14b0ccd688(){var latlng = new google.maps.LatLng(50.0785006,87.7745501);var draggable = true;var myOptions = {zoom        : 8,center        : latlng,mapTypeId      : google.maps.MapTypeId.ROADMAP,styles  : [{"featureType":"landscape.natural.landcover","stylers":[{"gamma":0.44},{"hue":"#2bff00"}]},{"featureType":"water","stylers":[{"hue":"#00a1ff"},{"saturation":29},{"gamma":0.74}]},{"featureType":"landscape.natural.terrain","stylers":[{"hue":"#00ff00"},{"saturation":54},{"lightness":-51},{"gamma":0.4}]},{"featureType":"transit.line","stylers":[{"gamma":0.27},{"hue":"#0077ff"},{"saturation":-91},{"lightness":36}]},{"featureType":"landscape.man_made","stylers":[{"saturation":10},{"lightness":-23},{"hue":"#0099ff"},{"gamma":0.71}]},{"featureType":"poi.business","stylers":[{"hue":"#0055ff"},{"saturation":9},{"lightness":-46},{"gamma":1.05}]},{"featureType":"administrative.country","stylers":[{"gamma":0.99}]},{"featureType":"administrative.province","stylers":[{"lightness":36},{"saturation":-54},{"gamma":0.76}]},{"featureType":"administrative.locality","stylers":[{"lightness":33},{"saturation":-61},{"gamma":1.21}]},{"featureType":"administrative.neighborhood","stylers":[{"hue":"#ff0000"},{"gamma":2.44}]},{"featureType":"road.highway.controlled_access","stylers":[{"hue":"#ff0000"},{"lightness":67},{"saturation":-40}]},{"featureType":"road.arterial","stylers":[{"hue":"#ff6600"},{"saturation":52},{"gamma":0.64}]},{"featureType":"road.local","stylers":[{"hue":"#006eff"},{"gamma":0.46},{"saturation":-3},{"lightness":-10}]},{"featureType":"transit.line","stylers":[{"hue":"#0077ff"},{"saturation":-46},{"gamma":0.58}]},{"featureType":"transit.station","stylers":[{"gamma":0.8}]},{"featureType":"transit.station.rail","stylers":[{"hue":"#ff0000"},{"saturation":-45},{"gamma":0.9}]},{"elementType":"labels.text.fill","stylers":[{"gamma":0.58}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"gamma":2.01},{"hue":"#00ffff"},{"lightness":22}]},{"featureType":"transit","stylers":[{"saturation":-87},{"lightness":44},{"gamma":1.98},{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"gamma":0.06},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"hue":"#00aaff"},{"lightness":-6},{"gamma":2.21}]},{"elementType":"labels.text.stroke","stylers":[{"gamma":3.84}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"gamma":9.99}]},{"featureType":"administrative","stylers":[{"gamma":0.01}]}],draggable      : draggable,zoomControl     : true,mapTypeControl   : false,streetViewControl : false,scrollwheel     : false};
              var map = new google.maps.Map(document.getElementById("google-map-area-59a14b0ccd688"), myOptions);var marker = new google.maps.Marker({position     : latlng,icon : "http://aktru.ya14.ru/wp-content/uploads/2015/04/map1.png",map          : map});}
              jQuery(document).ready(function($){google_maps_59a14b0ccd688();});