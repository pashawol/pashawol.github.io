$(function() {


 function heightses() {

    var w = $(window).width();
     $(".tabs__pablic-item p").height('auto').equalHeights();
 
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();
 
 
 
// табы
$(function() {
// $(' .tabs__caption   .tabs__btn:first-child  ').addClass("active")
 // $('.tabs__content1:first-child ').addClass("active");
$(' .tabs__caption').on('click', '.tabs__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content1').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
   
   	 heightses();
    return false;
});
});
  $(".tabs__btn").click(function(){
  	$(this).next().find(".accordion-hidd").slideToggle()
  })
});
