 jQuery(document).ready(function($) { 

  // для свг
  svg4everybody({});
  // Custom JS
  

  var url=document.location.href; 
  $.each($(".top-nav__nav a "),function(){
 
  if(this.href==url){
    if($(this).hasClass("top-nav__link") == true){

    $(this).addClass('top-nav__link-active');
    }
    if($(this).hasClass("footer__link") == true){

    $(this).addClass('footer__link-active');
    }

  };
 
  });
      // галерея
  $(".gal").each(function(){
    
  $(this).find("a").magnificPopup({
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
 
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    

    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$("header ").innerHeight();  
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
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

  
// табы  . Теперь данные активного таба остается в storage
$(function() {
var tab = ('tabs'); 

   $('.' + tab + '__caption').each(function(i) {
    var storage = localStorage.getItem('tab' + i);
    if (storage) {
      $(this).find('.' + tab + '__btn').removeClass('active').eq(storage).addClass('active')
       .closest('.' + tab).find('.' + tab + '__content').removeClass('active').eq(storage).addClass('active');
    }
  });

$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) { 
  $(this) 
      .addClass('active').siblings().removeClass('active')
      .closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
      .eq($(this).index()).fadeIn().addClass('active');

    var ulIndex = $('.' + tab + '__caption').index($(this).parents('.' + tab + '__caption'));
    localStorage.removeItem('tab' + ulIndex);
    localStorage.setItem('tab' + ulIndex, $(this).index());
 
});
});

 

 var icon = '<svg class="icon icon-dislike ">  <use xlink:href="img/svg/sprite.svg#arr-r"></use>  </svg>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  
 // карусель
 $('.tab__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
     prevArrow: arrl2,
      nextArrow: arrr2,
    });

var $gallery = $('.tab__slider');
 $gallery.on('lazyLoaded', function(event, slick, image, imageSource){
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
          $.magnificPopup.close();
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

  
  
  $(".pretty-embed__bg").each(function(){ 
    // загрузка фона видео
  $(this).css("background-image",'url(http://img.youtube.com/vi/'  + $(this).data("src")+ '/0.jpg)')
  // включение видео при клике по блоку
   $(this).click(function(){
    $(this).removeClass("on").next()
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1').addClass("on");
   })
   })

   
// accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})
  

 


// табы на ajax
var containerId1 = '.mytabs-container1';
var tabsId1 = '.mytabs1';

 
  $(".main-tabs__content").each(function(){
    var th = $(this);

    // Preload tab on page load

    if(th.find(tabsId1 + ' .current A').length > 0){
      loadTab1(th.find(tabsId1 + ' .current A'));
    }
    
      th.find(tabsId1 + ' A').click(function(){
        if($(this).parent().hasClass('current')){ return false; }
        
        th.find(tabsId1 + ' .current').removeClass('current');
        $(this).parent().addClass('current');
        
        loadTab1($(this));     
          return false;
      });
    function loadTab1(tabObj1){
        if(!th.find(tabObj1) || !th.find(tabObj1).length){ return; }
        th.find(containerId1).addClass('loading');
        th.find(containerId1).hide();
        
        th.find(containerId1).load(tabObj1.attr('href'), function(){
            th.find(containerId1).removeClass('loading');
            th.find(containerId1).fadeIn();



            

       th.find('.tab__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            speed: 450,
            infinite: true,
            loop: true,  
            arrows: true, 
             prevArrow: arrl2,
              nextArrow: arrr2,
            });
        th.find('.tab__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450,
            infinite: true,
            loop: true,  
            arrows: true, 
             prevArrow: arrl2,
              nextArrow: arrr2,
              asNavFor:  th.find('.tab__slider-small')
            });

        th.find('.tab__slider-small').slick({
            slidesToShow: 9,
            slidesToScroll: 1,
            dots: false,
            speed: 450,
            infinite: true,
            loop: true,  
            arrows: false, 
            focusOnSelect: true,
             prevArrow: arrl2,
              nextArrow: arrr2,
              asNavFor: th.find('.tab__slider-big'),
             
            });


        var $gallery = $('.tab__slider,  .tab__slider-big, .tab__slider-small ')
         $gallery.on('lazyLoaded', function(event, slick, image, imageSource){
             image.parent().css('background-image', 'url(' + image.attr('src') + ')');
         });
      });
    }

  });


  
});

