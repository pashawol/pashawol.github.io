 jQuery(document).ready(function($) { 

  // Custom JS
  
 // accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})
  

  
var   arrl2 = (' <div class="l"><img class="res-i" src="img/l.png" alt="">'),
      arrr2 =(' <div class="r"><img class="res-i" src="img/r.png" alt="">');  
 // карусель
 $('.s-rew__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
     adaptiveHeight: true,
     prevArrow: arrr2,
      nextArrow: arrl2,
    });

      $('.s-rew__slider')
 .on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });
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
 
   
 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function() {
          // $.magnificPopup.close();
      $.magnificPopup.open({
        items: {
          src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
          // type: 'inline'
        }
      })
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
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});
 // листалка по стр
 $(" .scroll-l").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
  $(".top_line__btn").click(function(){
    $("form .order").val("Заявка в шапке");
    $(".modal-f  .form-wrap__h4").text("на бесплатную консультацию");

  })
  $(".s-catalog__btn").click(function(){
    $("form .order").val("Заявка на:" + $(this).data("order"));
    $(".modal-f .form-wrap__h4").text("на развивающую доску");

  })

});
