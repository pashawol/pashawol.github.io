 jQuery(document).ready(function($) { 

  // Custom JS
  
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
       
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
  var icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.15 477.17"><title>arr-l</title><g id="" data-name="Слой 2"><g id="Capa_1" data-name="Capa 1"><path d="M32.68,238.58l215.5-215.5A13.51,13.51,0,0,0,229.08,4L4,229.08a13.46,13.46,0,0,0,0,19.1l225.1,225a13.59,13.59,0,0,0,9.5,4,13.17,13.17,0,0,0,9.5-4,13.46,13.46,0,0,0,0-19.1Z"/></g></g></svg>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  
 // карусель
 $('.slider-js').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,  
    prevArrow: arrl2,
    nextArrow: arrr2,
    adaptiveHeight: true
    });
  
    $(  '.slider-js'   )
 .on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });

 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

    $('.main-wrapper').fullpage({
   
navigation:true,
slidesNavigation:false,

navigationPosition:'left', 
responsiveWidth:1200,
responsiveHeight: 800,
normalScrollElements: ".block-form"
  });


 
        
            //             $(".text-js").niceScroll({
            //   horizrailenabled : false,
            //   "verge" : "500",
            //   cursorborder: "0",
            //   cursorborderradius: "1px",
            //   cursorwidth: "6px",
            //   cursorcolor: "#0ca8cb", 
            //   background: " #3d75a5",
            //   // railpadding: "5"
            //   touchbehavior: "true",
            //   autohidemode: false,
            // });
    $(".text-js").mCustomScrollbar({
    axis:"y", // horizontal scrollbar
    theme:"my-theme"
});
      });