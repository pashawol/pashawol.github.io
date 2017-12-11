 jQuery(document).ready(function($) { 

 

      var topH=$(".header-block").innerHeight();  
    if($(this).scrollTop()>topH){
                    $('.user-bar  ').addClass('fixed');
                    
                }
                else if ($(this).scrollTop()<topH){
                    $('.user-bar  ').removeClass('fixed');
                   
                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.user-bar  ').addClass('fixed'); 
                }
                else if ($(this).scrollTop()<topH){
                    $('.user-bar  ').removeClass('fixed'); 
                }
            });
       // конец добавил 
   // табы
$(function() {
var tab = ('tabs');
// $(' .' + tab + '__caption   .' + tab + '__btn:first-child  ').addClass('active')
 // $('.' + tab + '__content:first-child ').addClass("active");
$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('.' + tab + '').find('.' + tab + '__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});
    
});
