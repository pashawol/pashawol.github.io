$(function() {

  // Custom JS

// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".aside").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".hidden-mnu .toggle-mnu").click();
    });



  
          $(".aside__child-item .toggle ").click(function() {
           $(this)
           .next(".aside__sub-nav.mob").slideToggle()
           .parent().toggleClass("active");

          })
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
    

    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".aside").removeClass("active");
        $("body").removeClass("fixed");
        // $(".aside__sub-nav").show();
        $(".aside__sub-nav").removeClass("mob").parent().removeClass("active");
    }
    if (w<991){
        // $(".aside__sub-nav").hide();
        $(".aside__sub-nav").addClass("mob");
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



// листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


 $("  .aside__row").click(function(){  
      $(this).toggleClass("current").next().slideToggle();
 })
   // accordion
  $(".showhide").click(function() {
     $(".showhide-all").slideUp(), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp(),
             $(this).next().filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev().addClass("active") })
  $(".showhide2").click(function() {
     $(".showhide2-all").slideUp(), $(".showhide2").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp(),
             $(this).next().filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev().addClass("active") })
  //    $(".aside__nav").niceScroll({
  //   horizrailenabled : false,
  //   "verge" : "500",
  //   cursorborder: "0",
  //   cursorborderradius: "0",
  //   cursorwidth: "10px",
  //   // cursorcolor: "#EF5440",
  //   // autohidemode: "false"
  // });
  // var p = $(".aside__nav");
  // // var p = $(".aside__child-item");
  // var position = p.position();

  // $(".aside__child-item").hover(
  //   function(){
  //       $(this).find(".aside__sub-nav").css("top",$(this).position.top)
  // },
  // function(){

  // }
  // )
});
