

$(function() {

  // Custom JS

// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    // $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
    $('.hidden-mnu  a.scroll-a').on('click', function () {
      $(".hidden-mnu .toggle-mnu-1").click();
      rest();
    });
 
function  rest(){


// Cache selectors
var lastId,
    topMenu = $("  .wrapp-hidden ul"),
    topMenuHeight = 15,
    // All list items
    menuItems = topMenu.find("a.scroll-a"),
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
  }, 300);
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
         .end().filter(".scroll-a[href='#"+id+"']").parent().addClass("active");
   }                   
});
} 

rest();

  function heightses() {

    var w = $(window).width();
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    

    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
     var topH=$("header").height();  
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


 
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99")
    .attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");


    // галлерея
    $('.s-gal').magnificPopup({
    delegate: 'a.s-gal__link-img',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
  });
    // видео в галлереи
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

 
    // слайдер с миниатюрами
 $('.reviews__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false, 
  asNavFor: '.slider-nav',
  dots: false,
   arrows: false,  
  adaptiveHeight: true,

  // draggable: false 

});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.reviews__slider',
  dots: false,  
  // centerMode: true,
  focusOnSelect: true,
  // vertical: false,
  arrows: false, 
  // centerMode: true,
  // variableWidth: true,
  responsive: [
        
       
        
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 6,
             variableWidth: false
          }
        }, 
        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
             variableWidth: false
          }
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 4,
             variableWidth: false
          }
        },

      {
          breakpoint: 580,
          settings: {
            slidesToShow: 3,
             variableWidth: false
          }
        },

      {
          breakpoint: 440,
          settings: {
            slidesToShow: 2,
             variableWidth: false
          }
        },

 

      ]
});



    // переход по карте
   $(".p-1").click(function(){
    $(".leaflet-marker-icon:nth-child(2)").click();
   }) 
    $(".p-2").click(function(){
    $(".leaflet-marker-icon:nth-child(1)").click();
   }) 

    $(".btn-top").click(function (){
                $('body,html').animate({
                    scrollTop:0
                }, 1500);
                return false;
            });


   $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

// accordion
  $(".showhide").click(function() {
     $(".showhide-all").slideUp(), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp(),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active") })

  $('.game-all__row').mixItUp();
  $(".place").click(function(){
    $(".toggle-place").fadeToggle();
    return false;
  })
     
    $(document).click(function (e) {
    var container = $(".toggle-place");
    if (container.has(e.target).length === 0){
        container.fadeOut();
    }
});

  $('  .scroll-link').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

     //smoothscroll
//     $('header.main .scroll-a, header.main .wrapp-hidden .scroll-a').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top- 20
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('header.main .scroll-a, header.main .wrapp-hidden .scroll-a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top +10 <= scrollPos && refElement.position().top   + refElement.height() > (scrollPos )) {
//             $('header.main .scroll-a, header.main .wrapp-hidden .scroll-a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
//   }


 




// Cache selectors
var lastId,
    topMenu = $("  .top-nav ul"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a.scroll-a"),
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
  }, 300);
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
         .end().filter(".scroll-a[href='#"+id+"']").parent().addClass("active");
   }                   
});
 
// форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: $("form").attr("action"), //Change
      data: th.serialize()
    }).done(function() {
          // $.magnificPopup.close();
         $.magnificPopup.open({
        items: {
          src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      })
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });
});

