 $(document).ready(function() { 

  // Custom JS
  
// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".top-nav-mobile-wrap").fadeToggle();
    $("body").toggleClass("fixed");
    return false;
  }); 
    
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    

    // скрывает моб меню 
    // if (w>991){
    //    $(".toggle-mnu-1").removeClass("on");
    //     // $("body").removeClass("fixed");
    //     $(".hidden-mnu").removeClass("active");
    //     $("body").removeClass("fixed");
    // }
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



// табы
$(function() {
var tab = ('tabs');
// $(' .' + tab + '__caption   .' + tab + '__btn:first-child  ').addClass('active')
 // $('.' + tab + '__content:first-child ').addClass("active");
$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').addClass('current').siblings().removeClass('active')
    .closest('.' + tab ).find('.' + tab + '__content').hide().removeClass(tab +'active')
    .eq($(this).index()).fadeIn().addClass(tab +'active');
   
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
    return false;
});
});

// mnu выпадающее
$(function() {
var tab = ('drop-block');
  // $(' .' + tab + '__caption   .' + tab + '__btn:first-child  ').addClass('active')
   // $('.' + tab + '__content:first-child ').addClass("active");
  $('.' + tab + '__mnu').on('click mouseenter mouseleave', '.' + tab + '__mnu-item:not(.'+tab + '__mnu-item-active)', function(e) {
     
    $(this)
      .addClass(tab + '__mnu-item-active').siblings().removeClass(tab + '__mnu-item-active')
      .closest('.' + tab).find('.' + tab + '__sub-mnu').hide().removeClass(tab +'__sub-mnu-active')
      .eq($(this).index()).fadeIn().addClass(tab +'__sub-mnu-active');
     
      // $('.slider-small, .slider-big').slick('unslick');
      //  section_slider();
      return false;
  }); 

       // $('.' + tab + '__content:first-child ').addClass("active");
  $('.' + tab + '__sub-mnu-item').hover( function(e) {
    $(this)
      .addClass(tab + '__mnu-item-active').siblings().removeClass(tab + '__mnu-item-active')
      .closest('.' + tab).find('.' + tab + '__sub-news-item').removeClass(tab +'__sub-news-item-active')
      .eq($(this).index()).addClass(tab +'__sub-news-item-active');
     
      // $('.slider-small, .slider-big').slick('unslick');
      //  section_slider();
      return false;
  });

  var nav = ("drop");

  $(".top-nav-js .drop").hover(
   function(e) {
     
      $(this).siblings().removeClass("drop-active")
      .closest(".top-nav__nav").find('.drop-block').removeClass("drop-block-active")
      $(this)
      .addClass('drop-active' )
      .find('.drop-block').slideDown().addClass('drop-block-active');
     
      // $('.slider-small, .slider-big').slick('unslick');
      //  section_slider();
      return false;

  }
    ,
    function(){
          $(this)
        .removeClass('drop-active' )
        .find('.drop-block').hide().removeClass('drop-block-active');
    }
  )

 

 $(".top-nav-mobile-wrap .drop").hover(
   function(e) {
     
      $(this).siblings().removeClass("drop-active")
      .closest(".top-nav__nav").find('.drop-block').removeClass("drop-block-active")
      $(this)
      .addClass('drop-active' )
      .find('.drop-block').fadeIn().addClass('drop-block-active');
     
      // $('.slider-small, .slider-big').slick('unslick');
      //  section_slider();
      return false;

  }
    // ,
    // function(){
    //       $(this)
    //     .removeClass('drop-active' )
    //     .find('.drop-block').hide().removeClass('drop-block-active');
    // }
  )

});



var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
      arrl2 = (' <div class="l"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div>'),
      arrr2 =(' <div class="r"><svg   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path></div> ')
  
 // карусель
 $('.s-team__slider').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: true,
              loop: true,  
              arrows: true, 
              // centerMode: true,
              // focusOnSelect: true , 
               variableWidth: true,
               prevArrow: arrl2,
            nextArrow: arrr2,
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
 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: $("form").attr("action"), //Change
      data: th.serialize()
    }).done(function() {
          $.magnificPopup.close();
        window.location.replace("/thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });
  $(".contact").magnificPopup({
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


  // кастомный инпут файл 
 
  var file = $(".add-file input[type=file]");
  file.change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         var name = $(".add-file__filename  ");
       name.text(filename);
  
    }); 



  $(".js-form-validate").parsley();
});
