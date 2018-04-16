 $(document).ready(function(){
  // для свг
  svg4everybody({});
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
  $(" .scroll-ll").click(function () {
          var elementClick = $("body");
          var destination = $(elementClick).offset().top;
          
              $('html, body').animate({ scrollTop: destination }, 1100);
          
          return false; 
      });
  
  $(" .scroll-l").click(function () {
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          
              $('html, body').animate({ scrollTop: destination }, 1100);
          
          return false; 
      });
  
 

});
 
 jQuery(document).ready(function($) { 

  // Custom JS


   // var togli =  '.dropdown, .drop-inner, .drop-sub-inner';
 $('.trop').find(".menu-item-has-children > a ").each(function(){

  var th = $(this);
  th.click(function(){ 
    
    th.toggleClass('active').next().slideToggle();
    th.parent().toggleClass('active');
  })
 })
 
 
// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $("  .aside").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
   var toggMnu = $(".toggle-mnu-2").click(function () {
    
    $(".toggle-mnu-2").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(" .trop").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  }); 
  
    // $(document).mouseup(function (e) {
    // var container = $(".aside");
    // if (container.has(e.target).length === 0){
    //    $(".toggle-mnu-1").removeClass("on");
    //   // $("body").toggleClass("fixed");
    //   $(".aside").removeClass("active");
    //   $("body").removeClass("fixed");
    //     }
    // });
 
  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //
    

    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".aside").removeClass("active");
        $("body").removeClass("fixed");
    }
     if (w>1199){
       $(".toggle-mnu-2").removeClass("on");
        // $("body").removeClass("fixed");
        $(".trop").removeClass("active");
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
 
 heightses();


 
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
// адаптивные табы 
$('.tabs-block').easyResponsiveTabs();

 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

    // accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})
  $(".gal__link").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',

      helpers : {
        title : {
          type : 'inside'
        }
      }
    });

});


$(window).scroll(function() {
      var height = $(window).scrollTop();
      var header  = $("header").height();
      var header2  = $("#head").height();
      var header3  = $("#header-block").height();
      if(height  > header && height  > header2 && height  > header3) {
      $("#notuse").addClass('freeuse');
      }else{
      $("#notuse").removeClass('freeuse');
      }
    })