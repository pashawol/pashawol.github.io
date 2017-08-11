$(function() {

	// Custom JS
	function heightses() { 
   $(".catalog__item p ").height('auto').equalHeights(); 
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

 

// $('.otz-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: false,
//     speed: 900,
//     infinite: true,  
//     arrows: true,
//      prevArrow: ' <div class="l">',
//     nextArrow: '   <div class="r"> ',
 
//   });


  // модалка
  $(".btn-modal").each(function(){
    $(this).attr("href", "#small-dialog")
    $(this).click(function(){
      var th = $(".modal-form");
      th.find(".order").val($(this).data("order"));
      // th.find("p").text($(this).data("p"));
    })
  })
  $(".catalog .btn-modal , .header__btn ").each(function(){
    $(this).attr("href", "#small-dialog-2")

  })
   
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

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
// плитки в отзвах
  // Custom JS
function plitki() {
  var $container = $(".otz .row-top"); 
    $container.masonry({
      columnWidth: ".col-md-6",
      itemSelector: ".col-md-6"
    });
};
plitki();
});
