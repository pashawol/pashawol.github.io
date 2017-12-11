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
});
