 jQuery(document).ready(function($) { 
  // для свг
  svg4everybody({});
  // Custom JS
   
// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
   
    $(document).mouseup(function (e) {
    var container = $(".hidden-mnu.active");
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
        }
    });
  
  $(".js-link-edit").click(function(){
    var thp = $(this).parents('.s-client__item');
    if(thp.find('.js-edit-text').is(":visible") == true){

        thp.find('.js-edit-text').fadeOut(function(){
        thp.find('.js-edit-input').fadeIn();
      })
    }
    else   {

        thp.find('.js-edit-input').fadeOut(function(){
          
        thp.find('.js-edit-text').fadeIn()
        });
     
    }

});
});
