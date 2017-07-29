$(function() {

 
// листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });



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


// Custom JS
  function heightses() {
    var w = $(window).width();
   
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   // $(".news__item h3 ").height('auto').equalHeights();
   // $(".complex__item ").height('auto').equalHeights();
    
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();


  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});
