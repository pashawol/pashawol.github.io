 jQuery(document).ready(function($) { 

  

 var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';
 var ic = '<svg id="SVGDoc" width="18" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 18 16"><defs><path d="M1298.87864,6789.53532c-0.39053,0.39061 -1.02362,0.39061 -1.41415,0c-0.39062,-0.39061 -0.39062,-1.02386 0,-1.41395l4.12133,-4.12159h-10.58584c-0.55232,0 -1.00001,-0.44761 -1.00001,-0.99981c0,-0.55219 0.44769,-1.00033 1.00001,-1.00033h10.58584l-4.12133,-4.12107c-0.39062,-0.39061 -0.39062,-1.02386 0,-1.41448c0.39053,-0.39061 1.02362,-0.39061 1.41415,0l5.65693,5.65686c0.23973,0.24002 0.31414,0.5684 0.25947,0.87901c0.05467,0.31009 -0.01974,0.63848 -0.25947,0.87849z" id="Path-0"/></defs><desc>Generated with Avocode.</desc><g transform="matrix(1,0,0,1,-1288,-6775)"><g><title>5</title><use xlink:href="#Path-0" fill="#42bbd6" fill-opacity="1"/></g></g></svg>'
var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  
var   arrl3 = (' <div class="l"> ' + ic + ' Предыдущий шаг</div>'),
      arrr3 =(' <div class="r"> Следующий шаг ' + ic + '</div>');  

$(' .s-gal__slider').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
    speed: 450,
    infinite: true,
    loop: true, 
    adaptiveHeight: true, 
    arrows: false,  
    draggable: false,
    fade: true,
    dots: true,
    appendDots:$('.s-gal__col'),
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<div class="s-gal__dots-item"><img src="' + thumb+ '" /></div>';
    },
    
    });
 // карусель

 $('.slider-1 ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: false, 
    appendDots: $(".dots-wrap-1"),
    });

 $('.slider-2 ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: false, 
    appendDots: $(".dots-wrap-2"),
    });

$(' .s-cons__slider').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: false,
    loop: false, 
    adaptiveHeight: true,
   appendDots:$('.s-cons__head'),
   appendArrows:$('.s-cons__head'),
    arrows: true, 
      prevArrow: arrl3,
      nextArrow: arrr3,
    });




 $(".s-doc").each(function(){
  var th = $(this);
  th.find('.s-doc__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    asNavFor: th.find('.s-doc__slider-small'),
    infinite: true,
    loop: true,
    arrows: false,
    draggable: false,
    
  });
    
 th.find('.s-doc__slider-small').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      speed: 450,
      infinite: true,
      loop: true,
       arrows: true,
        prevArrow: arrl2,
      nextArrow: arrr2,
      // centerMode: true,

      focusOnSelect: true ,
      asNavFor:  th.find('.s-doc__slider-big'),
      mobileFirst: true,
      responsive: [{

         breakpoint: 768,
        settings: {
          slidesToShow: 6,
          vertical: true,
          verticalSwiping: true,
         arrows: false,
        }
      },
          {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          }
        },
        {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          }
        }
 
    ]
      // swipeToSlide: false
    });
  });

  $('.s-doc__slide-big').each(function(){
    var th = $(this);
  th.find('.s-doc__carusel-b').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 450, 
    infinite: true,
    loop: true,
     
     arrows: false, 
      dots: false,
 
  });

  })


      $(
        '.s-doc__slider-big,'+
        ' .s-doc__slider-small'
        )
 .on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });


   //     // модальное окно
   // $('.popup-with-move-anim').click(function(e){
   //  e.preventdefault();
   //  // return false;
   // }) 
 
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function() {
      $('#thanks').modal('show');
        $('#modal-win').modal('hide'); 
       
        // window.location.replace("/thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });
   
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]38[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+38(999)999-99-99"});

   
 
 
  Hyphenator.run();
 // включение видео   
  $(".pretty-embed__bg").each(function(){ 
   $(this).on('click', function(){
    $(this).removeClass("on").next()
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1&amp;rel=0').addClass("on");

   })
   }) 


    $(".flex-slide").each(function(){
      $(this).click(function(){
        $(this).closest(".flex-container").find('.flex-slide').removeClass('active');
        $(this).toggleClass("active")
     
            var w = $(window).width(); 
            if (w<768){ 
                var elementClick = $(this);
                var destination = $(elementClick).offset().top; 
                $('html, body').animate({ scrollTop: destination }, 1100); 
            }
            else{
             
            }
         
          })
    });



  // })();

   // accordion HORIZONTAL
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent()
                      .removeClass("active"),
     $(this).next("div").filter(function() {
    return "none" == $(this).css("display") }).slideDown().prev("div")
                      .addClass("active").parent().addClass("active")})


$(".s-doc__btn-sm").click(function(){
  $(".s-doc__h5 p").slideDown();
  $(this).hide(); 

})
 
 $('.tabs').each(function(){

$(this).easyResponsiveTabs();
})
 $(".popup-with-move-anim").click(function(){

    $(".order").val($(this).data("order"))
 })
 $(".custom-input__input-radio ").click(function(){
  $(".time-call").text($(this).val());
 })
});
  $(window).load(function() {
  $(".img2").twentytwenty({
    before_label: 'До', // Set a custom before label
      after_label: 'После', // Set a custom after label
      // default_offset_pct: 1,
      no_overlay: false,
  });  


});   


 

 