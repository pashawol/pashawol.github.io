 jQuery(document).ready(function($) { 

  // Custom JS
  
 
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    
}
  $(window).resize(function() {
    heightses();
   
  });
 

 heightses();

 
    $(".s-main__btn-wrap-js").each(function() {

          if ($(this).children().length <= 6) { 
             $(this).children().removeClass(" col-4").addClass(" col-6"); 
               
             }
          else  {
               $(this).children().removeClass(" col-6").addClass(" col-4"); 
                
          }
    });
   
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  
   
var wowAnim = $(".s-dop__col," +
                ".s-pick__col," + 
                ".s-condition__col");
wowAnim.each(function(i){
 
wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s"); 
// $(this).addClass("wow bounceInUp");
 
   var wow = new WOW({ mobile: false });
        wow.init();

});
});
