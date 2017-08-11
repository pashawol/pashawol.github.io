$(function() {

	// Custom JS
	function heightses() {

   
   $(".catalog__thumbnail .caption .text-wrap").height('auto').equalHeights();
   $(".doc .caption p").height('auto').equalHeights();
    


        var topH=$(".top_line   ").height();
  if($(this).scrollTop()>topH){
            $('.top_line-fixed  ').addClass('active');
            
        }
        else if ($(this).scrollTop()<topH){
            $('.top_line-fixed  ').removeClass('active');
           
        }
  $(window).scroll(function(){
        if($(this).scrollTop()>topH){
            $('.top_line-fixed  ').addClass('active');
         
        }
        else if ($(this).scrollTop()<topH){
            $('.top_line-fixed  ').removeClass('active');
          
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



// листалка по стр
 $(" .top_line a, section.globus a,   .btn-bott").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

$("section, .doc__item").each(function(){
  var th= $(this);
  th.find(".look-link.look-doc").click(function(){
    th.find(".img-wrap").click();
  })
   th.find('.zoom-gal, .lic-gal').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        // verticalFit: true,
        
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
// мобильное меню
var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });
  $('select ').styler();



  // модалка
  $(".btn-modal").each(function(){
    $(this).attr("href", "#small-dialog-2")
    $(this).click(function(){
      var th = $(".modal-form");
      th.find(".order").val($(this).data("p"));
      // th.find("p").text($(this).data("p"));
    })
  })
  $(".top_line .btn-modal, footer .btn-modal , .catalog .btn-modal").each(function(){
    $(this).attr("href", "#small-dialog")

  })
    
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
});
