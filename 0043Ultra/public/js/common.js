$(function() {

	// Custom JS
	function heightses() {

   
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();


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


  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});
