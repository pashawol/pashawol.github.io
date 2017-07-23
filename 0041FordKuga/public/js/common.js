$(function() {


// листалка по стр
 $(".top-nav a, .trop.main-mnu a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


 
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

    // маска на инпут
     // модалка
  $(".btn-modal").each(function(){
    $(this).attr("href", "#small-dialog")
    // $(this).click(function(){
    //   var th = $(".modal-form");
    //   th.find(".order").val($(this).data("order"));
    //   // th.find("p").text($(this).data("p"));
    // })
  })

    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");

    // модалка
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
 
 $(".calc__item").each(function(){
  var th = $(this),
     symbol = th.data("symbol")
  th.find( ".calc__range" ).slider({
      range: "max",
      min: 0,
      max: 10000,
      value: 1,
      slide: function( event, ui ) {
       th.find( ".calc__price " ).val( ui.value +" "+ symbol);
      }
    });
    // $( ".filter__distance " ).text( $( ".filter__custom-handle-distance   " ).slider( "value" )+" км" );
    
});
    // $(".ui-slider-range").draggable();
 


 function heightses() {
    var w = $(window).width();
     $(".offers h3 ").height('auto').equalHeights();
     // $(".pride h3 ").height('auto').equalHeights();
     
     var topH=$(".top-line ").innerHeight();  
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
      
  }

  $(window).resize(function() {
    heightses();
  });

  $( window ).on( "load", function() {
 heightses();
})
  heightses();

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
      nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
 
  });

 

});
