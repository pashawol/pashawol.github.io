 jQuery(document).ready(function($) { 
 
  // графики
 $(".knob").knob();
 
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    
 
    var topH=$(".header").innerHeight();  
    if($(this).scrollTop()>topH){
                    $('.top_line  ').addClass('fixed');
                    
                }
                else if ($(this).scrollTop()<topH){
                    $('.top_line  ').removeClass('fixed');
                   
                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top_line  ').addClass('fixed'); 
                }
                else if ($(this).scrollTop()<topH){
                    $('.top_line  ').removeClass('fixed'); 
                }
            });
     $('.knob').each(function(){
            $(this).parents(".s-graf__round-wrap").find(".s-graf__proc").attr("style", $(this).attr("style"));
        })
      
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
 $(" .top_line ul a, footer   ul a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


 
   // timer  http://www.jqueryscript.net/time-clock/Extremely-Lightweight-jQuery-Countdown-Timer-Plugin-downCount.html
$('.count_down').each(function(){
  var dat = $(".d-time").text();
$(this).downCount({  
   date: dat,
  // offset: +10
});
})
  
 
       // модальное окно
   $('.popup-with-move-anim').magnificPopup({
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
 
    // галерея
  $(".gal").magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      // titleSrc: function(item) {
      //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      // }
    },
    gallery: {
      enabled: true
    }
  });
  
 
  
  $(".pretty-embed__bg").each(function(){ 
    // загрузка фона видео
  // $(this).css("background-image",'url(http://img.youtube.com/vi/'  + $(this).data("src")+ '/0.jpg)')
  // включение видео при клике по блоку
   $(this).click(function(){
    $(this).addClass("on").find("iframe")
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1');
   })
   })


// accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})
  

});
