 $(document).ready(function(){
    $(".phonenum").mask("+7 (999) 999-99-99");
  $(".fancy").fancybox({
    width : 650,
    height  : 380,
    autoSize  : false,
    closeClick  : false,
    closeBtn: true,
    openEffect: 'fade'
  });
  $(".fancy33").fancybox({
    width : 325,
    height  : 420,
    autoSize  : false,
    closeClick  : false,
    closeBtn: true,
    openEffect: 'fade'
  });
  $(".fancyp").fancybox({
    width : 801,
    height  : 500,
    autoSize  : false,
    closeClick  : false,
    closeBtn: true,
    openEffect: 'fade'
  });
  $(".fancys").fancybox({

    autoSize  : true,
    closeClick  : false,
    closeBtn: true,
    openEffect : 'fade',
        closeEffect : 'fade'
  });
  $(".fancy9").fancybox({
    width : 1100,
    height  : 500,
    autoSize  : false,
    closeClick  : false,
    closeBtn: true,
    openEffect: 'fade'
  });
  $(".fancyx").fancybox({
    width : 800,
    height  : 500,
    autoSize  : false,
    closeClick  : false,
    closeBtn: true,
    openEffect: 'fade'
  });
  $(".fancyim").fancybox({
    prevEffect  : 'none',
    nextEffect  : 'none',
    //scrolling   : 'hidden',
    //fitToView: false, // won't shrink to fit in the viewport
        maxWidth: "76%", // need to explain?
        helpers: {
            title: {
                type: "inside" // can fit larger title/captions
            },
      overlay: {
        locked: true 
      }
        },
        beforeLoad: function () {
            // optional:
            // get a large title from a data attribute
            this.title = $(this.element).data("caption");
        }
  });
 

  $('.scrollto').click(function(){
  var selected = $(this).attr('href').replace('/', '');
  $.scrollTo(selected, 1000, {offset: -90});
  return false;
});


$("#cal").keyup(function() {
  var value = $(this).val().replace(/\D/g, '');
  $(this).val(value);
  var pages = Math.ceil(value/4) + 17;
  $("#calf").val(pages);
});
$("#cal2").keyup(function() {
  var value = $(this).val().replace(/\D/g, '');
  $(this).val(value);
  var pages = Math.ceil(value/4) + 5;
  $("#calf2").val(pages);
});
$("#cal3").keyup(function() {
  var value = $(this).val().replace(/\D/g, '');
  $(this).val(value);
  var pages = parseInt(value) + 17;
  $("#calf3").val(pages);
});
 
$(".fancy33").click(function(){
    var value = $(this).attr('data');
    $("#zap_date").val(value);
    console.log($("#zap_date").val());
  });

$(".check_fio").submit(function(event) {
    var phone = $(this).find('input[name=number]').val().length;
    console.log(phone);
    if(phone>6){
      $(this).find('input[name=number]').removeClass('ferr');
      return true;
    }else{
      $(this).parent().find('.f_error').show();
      $(this).find('input[name=number]').addClass('ferr');
      return false;
    }
  });
  
  
 
  
  function setHeiHeight() {
    var wh = $(window).height();
    $('#head').css({
      height: wh + 'px'
    });
  }
  

    if($(window).width()>640){
      $("#video").YTPlayer(); 
      
      setInterval ( function() {
        $('#mo1').toggleClass('scale');
      },800);
      
      
      setInterval ( function() {
        $('.ap1').toggleClass('scale');
      },900);
      
      setInterval ( function() {
        $('.ap2').toggleClass('scale');
      },1000);
    
      setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
      $(window).resize( setHeiHeight ); // обновляем при изменении размеров окна
    }
  
  


  $(".posi a").click(function(){
    $("#send .order").val("Заявка на тариф: " + $(this).data("order"));
  })
  $("#topmenu .reg, #head .fancys").click(function(){
    $("#send .order").val("Заявка в шапке "  );
  })
  $("#footer .fancys").click(function(){
    $("#send .order").val("Заявка в подвале "  );
  })
  $(" .scroll-l").click(function () {
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          
              $('html, body').animate({ scrollTop: destination }, 1100);
          
          return false; 
      });
  
 

});
 
 jQuery(document).ready(function($) { 

  // Custom JS
  
 
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
 // $(" .top-nav a").click(function () {
 //        var elementClick = $(this).attr("href");
 //        var destination = $(elementClick).offset().top;
        
 //            $('html, body').animate({ scrollTop: destination }, 1100);
        
 //        return false; 
 //    });


// или
// Cache selectors
var lastId,
    topMenu = $(" .top-nav ul"),
    topMenuHeight = topMenu.outerHeight()+15,
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

 

 var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  
 // карусель
 $('.s-team__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
    // centerMode: true,
    // focusOnSelect: true , 
     // variableWidth: true,
     prevArrow: arrr2,
      nextArrow: arrl2,
    });


   
   
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

   
});


$(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height  > 800) {
      $("#notuse").addClass('freeuse');
      }else{
      $("#notuse").removeClass('freeuse');
      }
    })