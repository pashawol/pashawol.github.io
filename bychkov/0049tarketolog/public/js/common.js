 

 jQuery(document).ready(function($) { 
 
 var audio = new Audio('audio_file.mp3');
 
   $(".type-wrap").each(function(){

  var th = $(this).find(".op").text();
    // $(this).find(".type").waypoint(function(){   
    $(this).find(".type").typed({
      strings: [th],
      typeSpeed: 60,
      fadeOutDelay: 30,
      startDelay: 1000,
      cursorChar: "<span class='cursor'>",  
      preStringTyped: function() {
        audio.play();
      }, 
      onStringTyped: function() {
        audio.pause();
        $(".typed-cursor").fadeOut();
        }  
     }) 
    // },
    //   {
        
    //   offset: '90%'
    //   }
    //   )

   });
 
   
// $('.top-nav__nav').simpleMenu({
//   menuSpeedAnimate:             600, 
//   slidingLine:                  true, 
//   slidingLineClassNameActive:   'active',
   
// });

var lastId,
    topMenu = $(" .top-nav ul"),
    topMenu1 = $(" .top-nav "),
    topMenuHeight = topMenu1.outerHeight() + 25,
    // All list items
    menuItems = topMenu.find("a.top-nav__link"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1600);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter(".top-nav__link[href='#"+id+"']").parent().addClass("active");
   }                   
});
  // Custom JS
  // паралакс
var scene = document.getElementById('scene');
var parallaxInstance = new   Parallax(scene, {
  relativeInput: true
});
 
 var scene2 = document.getElementById('scene2');
var parallaxInstance = new   Parallax(scene2, {
  relativeInput: true
});
 
  
 
 
  var scene4 = document.getElementById('scene4');
var parallaxInstance = new   Parallax(scene4, {
  relativeInput: true
});
  var scene5 = document.getElementById('scene5');
var parallaxInstance = new   Parallax(scene5, {
  relativeInput: true
});

  // паралакс
  
       // ===================================================== Sounds
// звук
ion.sound({
    sounds: [
        {
            name: "glass"
        } ,
        {
            name: "snap"
        } ,
        

         {
            name: "button_click"
        } 
    ], 
    volume: 1,
    
    path: "sounds/", 
});
        $(document).on('mouseenter',
            '.btn ,'+ 
            ' .link-more,'+ 
            ' .top-nav__link,'+ 
            ' s-rew__item-m-v,'+ 
            ' .sound-btn' , function () {
              ion.sound.play("glass");
            });

          $(document).on('mouseenter',
            '.hover-block'
            , function () {
              ion.sound.play("snap");
            });


           $(".btn, .btn-click, .top-nav__link").click(function(){

            
              ion.sound.play("button_click");
             
           });
 
  // accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})

 
    $(document).click(function (e) {
    var container = $(".toggle-place");
    if (container.has(e.target).length === 0){
        container.fadeOut();
    }
});
$(".link-more").click(function(){
  $(this).hide()
  .parents(".row").find("div:hidden").slideDown();
   return false;
})
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
 
   // всплывающая медиа галлерея
$('.magnific-all').each(function() {
  var $container = $(this);
  var $imageLinks = $container.find('.img-wrap');
 
  var items = [];
  $imageLinks.each(function() {
    var $item = $(this);
    var type = 'image';
    if ($item.hasClass('video-link')) {
      type = 'iframe';
    }
    var magItem = {
      src: $item.attr('href'),
      type: type
    };
    magItem.title = $item.data('title');
    items.push(magItem);
    });
 
  $imageLinks.magnificPopup({
    mainClass: 'mfp-fade',
    items: items,
    gallery:{
        enabled:true,
        tPrev: $(this).data('prev-text'),
        tNext: $(this).data('next-text')
    },
    type: 'image',
    callbacks: {
      beforeOpen: function() {
        var index = $imageLinks.index(this.st.el);
        if (-1 !== index) {
          this.goTo(index);
        }
      }
    }
  });
});
  function heightses() {

    var w = $(window).width();
   $(".s-vers__body p ").height('auto').equalHeights();
   //
    
      // стики
 
   $(".stick_in").stick_in_parent({
      offset_top:  125
   });
    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$(".header-block").innerHeight() - 130;  
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
 $(" .scroll").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 40;
            setTimeout(function(){


            $('html, body').animate({ scrollTop: destination }, 1100);
          }, 500);
        
        return false; 
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


});
  

var wow = new WOW({ mobile: false });
        wow.init();