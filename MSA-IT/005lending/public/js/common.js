 $(document).ready(function() { 

  // Custom JS
  
// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".hidden-mnu .toggle-mnu").click();
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
 
  function heightses() {

    var w = $(window).width(); 
    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var fix = $("header .top_line")
    var topH=$(".header-block").innerHeight();  
    if($(this).scrollTop() >  topH ){
                    fix.addClass('fixed');
                    
                }
                else if ($(this).scrollTop()<topH){
                    fix.removeClass('fixed');
                   
                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    fix.addClass('fixed'); 
                }
                else if ($(this).scrollTop()<topH){
                    fix.removeClass('fixed'); 
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
 $(" .animate").click(function () {
        var elementClick = $(this).parents(".header-block").next();
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


$(" .top_line__nav-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
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
 
 $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
 
 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: $("form").attr("action"), //Change
      data: th.serialize()
    }).success(function() {
          // $.magnificPopup.close();
            $.magnificPopup.open({
        items: {
          src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
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

  
    //Replace all SVG images with inline SVG
  $('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

  });

if($(".s-widget__col").length <7) {
     $(".s-widget__btn").hide();
}
 $(".s-widget__btn").click(function(e){
    e.preventDefault();
    $(".s-widget__col:hidden").slideDown();
    $(this).fadeOut();
     
   })
   $(".s-widget .popup-with-move-anim").click(function(){

      var th= $(this),
          thp = th.parents(".s-widget__item");
        // $(thp).find(".modal-vidjet__modal-title").clone().prependTo()
        $("#modal .modal__title").text(th.data("title"));
        // $("#modal .form-control-large").text(th.data("title"))
        $("#modal .order").attr("name","Узнать стоимость").val($(this).data("title"));

        $("#modal .modal__text .copy-to-modal").remove();
        thp.find(".copy-to-modal").clone().prependTo("#modal .modal__text");

        $("#modal .modal__video-wrap .pretty-embed__bg, #modal   iframe").remove();
        $("#modal .modal__video-wrap .pretty-embed")
        .html('<div class="pretty-embed__bg on" data-src='+ th.data("iframe") +' style="background-image: url(http://img.youtube.com/vi/'  + th.data("iframe")+ '/0.jpg)" ></div><iframe  allowfullscreen></iframe>');
          
        // $(thp).find(".modal-vidjet__modal-title").clone().prependTo()
   })
 
  $(".pretty-embed__bg").each(function(){ 
    // загрузка фона видео
  $(this).css("background-image",'url(http://img.youtube.com/vi/'  + $(this).data("src")+ '/0.jpg)')
  // включение видео при клике по блоку
   $(".pretty-embed").on('click', '.pretty-embed__bg', function(){
    $(this).removeClass("on").parent().find("iframe")
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1').addClass("on");
   })
   })



});
