$(function() {


// листалка по стр
 $(".top-nav a, .trop.main-mnu a, .header-btn").click(function () {
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
 // видео в мод окне
 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
 

 
// +/-
$(".incr-btn").on("click", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });



     var navbar =  $('.s-form__total');
      var wrapper = $('.s-form__wrap');
      // var topH= $(".s-form__wrap").offset().top;
      // var topH2= $(".s-form__wrap").offset().bottom;
   // var botH=$(window).height() - $("footer  ").height() -  $(".s-blogger-2  ").height();
    $(window).scroll(function(){
        var nsc = $(document).scrollTop();
        var bp1 = wrapper.offset().top;
        var bp2 = $('.s-ways').offset().top - 300;
        
        if (nsc>bp1) {  navbar.css('position','fixed', 'top', '0'); }
        else   { navbar.css('position','relative'); }

        if (nsc>bp2) { navbar.css('top', bp2-nsc); }
        else { navbar.css('top', '0'); }
    });



  // Custom JS
  function heightses() {

   
   $(".s-form__label-title label ").height('auto').equalHeights();

   // добавил
     var w = $(window).width();
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


$(".s-ways__item").each(function(){
  $(this).find('.popovers').popover({
  'html': true,
})
});

// выбор цвета
$(".s-form__color-item").click(function(){
  var th = $(this);
  th.addClass("active").siblings().removeClass('active'); 

  th.parents(".s-form__item-prod").find(".s-form__img-wrap").css('background-image','url('+th.data("src")+')');
})
$(".dop-file").on('change', function(){
  $(".s-form__dop-file").slideDown();
  $(".s-form__block-osn").slideUp();
})
$(".dop-new").on('change', function(){
  $(".s-form__dop-file").slideUp();
  $(".s-form__block-osn").slideDown();
})

});
