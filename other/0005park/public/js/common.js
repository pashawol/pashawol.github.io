
 jQuery(document).ready(function($) { 



  
  var vid = document.getElementById("bgvid");
 

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

 
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


 


var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
      arrl2 = (' <div class="l"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div>'),
      arrr2 =(' <div class="r"><svg   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div> ')
  
 // карусель
 $('.s-patner__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    // centerMode: true,
    // focusOnSelect: true  
    arrows: true, 
     prevArrow: arrl2,
      nextArrow: arrr2,
       responsive: [
     
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2, 
      }
    },
     
  ]
    });

 
 // слацдеры в табах
 
var slfo = $(".s-object .sliders__slider-img");
var $gallery = $(".s-object .sliders__slider-text");  
//custom code
  var slideCount = $('.s-object .slide-count-wrap'); 


var slfo2 = $(".s-sezon .sliders__slider-img");
var $gallery2 = $(".s-sezon .sliders__slider-text");  
//custom code
  var slideCount2 = $('.s-sezon .slide-count-wrap'); 
function section_slider(){


  $gallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(this).find('.slide-count-wrap').html('<span class="current">' + i + '</span> ' + '/' + ' <span class="total">' + slick.slideCount + '</span>');
  });

 
 slfo.slick({
  slidesToShow: 1,
  slidesToScroll: 1, 
  fade: true,
  asNavFor: $gallery,
  arrows: false, 
  
});

$gallery.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: slfo,
  dots: false, 
   arrows: true, 
   prevArrow: arrl2,
    nextArrow: arrr2,

});
 
 slfo.on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 }); 
  $gallery2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(this).find('.slide-count-wrap')
    .html('<span class="current">' + i + '</span> ' + '/' + ' <span class="total">' + slick.slideCount + '</span>');
  });

 
 slfo2.slick({
  slidesToShow: 1,
  slidesToScroll: 1, 
  fade: true,
  asNavFor: $gallery2,
  arrows: false, 
  
});

$gallery2.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: slfo2,
  dots: false, 
   arrows: true, 
   prevArrow: arrl2,
    nextArrow: arrr2,

});
 
 

 slfo2.on('lazyLoaded', function(event, slick, image, imageSource){
     image.parent().css('background-image', 'url(' + image.attr('src') + ')');
 });
 }

 section_slider();
// табы  . Теперь данные активного таба остается в storage
 

// табы  . Теперь данные активного таба остается в storage
$(function() {
var tab = ('tabs'); 
  $( tab + '__caption').each(function(i) {
    var storage = localStorage.getItem('tab' + i);
    if (storage) {
      $(this).find('.' + tab + '__btn').removeClass('active').eq(storage).addClass('active')
        .closest('.' + tab).find('.' + tab + '__content').removeClass('active').eq(storage).addClass('active');
    }
  }); 
$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');

    var ulIndex = $('.' + tab + '__caption').index($(this).parents('.' + tab + '__caption'));
    localStorage.removeItem('tab' + ulIndex);
    localStorage.setItem('tab' + ulIndex, $(this).index());

    slfo.slick("destroy");
    slfo2.slick("destroy");
    $gallery.slick("destroy");
    $gallery2.slick("destroy");
     section_slider();
});
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
 setTimeout(
  function(){
    $(".link-foot").click()
  }
  , 45000)

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

 
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  
  // анимированные числа
 $(".numbers__block").each(function(){
  var th = $(this)
th.waypoint(function(){   
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
th.find('.numbers__strong').each(function() {
  var tcount = $(this).data("number");
  $(this).animateNumber({ number: tcount,
  
    numberStep: comma_separator_number_step},
    2000);
});
    },
    {
      
    offset: '90%'
    }
    )

 })
   
 
 
});
