$( document ).ready(function() {
$(".top-nav nav ul").clone().prependTo(".main-mnu.hidden-mnu");
$(".aside-2 .aside-nav  ").clone().appendTo(".toogle-1  ").removeClass("hidden-sm").removeClass(" hidden-xs");
$(".aside-2 .aside-filter  ").clone().appendTo(".toogle-2  ").removeClass("hidden-sm").removeClass(" hidden-xs").find("h3.hidden-nav ").removeClass("hidden-nav");

   var toggMnu = $(".top-nav .toggle-mnu").click(function () {
    
    $(this).toggleClass("on");
    $("body").toggleClass("fixed");
    $(".hidden-mnu").slideToggle();
     return false;
 
  });

$(function () {
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu").click();
    });
  });

 

 var toggMnu2 = $(".katalog-btn .toggle-mnu-1").click(function () {
    $("body").toggleClass("fixed");
    $(" .toogle-1").toggleClass("on");
    $(".katalog-btn-2  .toggle-mnu").addClass("on");
     return false;
   
  });
 var toggMnu3 = $(".katalog-btn .toggle-mnu-2").click(function () {
    $("body").toggleClass("fixed");
    $(" .toogle-2").toggleClass("on");
    $(".katalog-btn-2  .toggle-mnu").addClass("on");
     return false;
  
  });
 
 

// закрывает меню каталог и фильтр
var toggMnu3 = $(".katalog-btn-2  .toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $("body").toggleClass("fixed");
    $(this).parents(".toogle").toggleClass("on");
     return false;
  });


$('.aside-nav ul  li').each(function(){
if ($(this).children('ul').length != 0 ){
      
      $(this).addClass("has-sub");
    
    }
    
})
// выпадающее меню
$('nav li.has-sub').each(function(){
$(this).prepend("<div class='after'>");
if ($(this).hasClass('open')) {
$(this).children('ul').show();

}
})

$(".title-search-result").appendTo("header .search-wrap");
$('nav li.has-sub > .after').on('click', function(){
        // $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {

            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
 
    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

    // заполнение картинкой блока
$_image_w = $(' .news-item .img-wrap, .aside-banner, .img-head ')
$_image_w.imagesLoaded( function() {
  $_image_w.imagefill(); 
});
// $('.banner-wrap .banner-item').imagesLoaded( function() {
//   $('.banner-wrap .banner-item').imagefill();
// });


// табы
$(function() {
$('ul.tabs__caption li:first-child()').addClass("active");
$('ul.tabs__caption + div.tabs__content').addClass("active");
$('.prod-tabs-wrap div.tabs__content:first-child()').addClass("active");
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {

    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      heightses();
  });
// footerToBottom();
});



$('  select').styler();
// цвет селекта
    /*
$(".select-color .jq-selectbox__dropdown li").each(function(){
    // дефолтный цвет селекта 
  var $_color = $(this).parent("ul").children(":first").text(); 
  var $_css = {
                "color": $_color
                ,"background-color": $_color
                ,"border-color": $_color 
              };
  var $_parent = $(this).parents(".select-wrap ").find(".jq-selectbox__select-text, .jq-selectbox__select"); 
   $_parent.css($_css);  
   // цвет option
   $_color = $(this).text();
   $_css = { "color": $_color,"background-color": $_color ,"border-color": $_color  };
  $(this).css($_css);
   // измение цвета селекта при клике  на option        
  $(this).click(function(){
    $_parent.css($_css);
    
  })
})*/




//  function footerToBottom() {


// var browserHeight = $(window).height(),
// footerOuterHeight = $('footer').outerHeight(true),
// mainHeightMarginPaddingBorder = $('.wrap-foot-bot').outerHeight(true) - $('.wrap-foot-bot').height();
// $('.wrap-foot-bot').css({
// 'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
// });
// };
// footerToBottom();
// $(window).resize(function () {
// footerToBottom();
// });
 

function heightses() {


     $('.cat-wrap .main-wrap,.favorites-wrap .main-wrap, .s-rec').each(function(){
        var highestBox = 0;
        $('.item-prod-wrap ', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.item-prod-wrap,  .item-prod, .item-prod-wrap .aside-banner',this).height(highestBox);

         var highestBox2 = 0;
        $('.name ', this).each(function(){
            if($(this).height() > highestBox2) {
                highestBox2 = $(this).height();
            }
        });
        $('.name',this).height(highestBox2);
    });

  $(".tabs__content .item-prod-wrap .name a, .favorites-wrap .item-prod-wrap .name a").height("auto").equalHeights();
    // $(".wrap-reg .form-wrap").height("auto").equalHeights();
    // $(".item-prod-wrap .name a").height("auto").equalHeights();
    $(".tabs__content .item-prod-wrap, .favorites-wrap .item-prod-wrap").each(function(){
     var h =  ($(this).find('.item-prod').height() )
      $(this).height(h);
     
    })
    // $(".carusel-prod .item-prod-wrap").each(function(){
    //  var h =  ($(this).find('.item-prod').height() )
    //   $(this).height("auto");
     
    // })
  
  }

  $(window).resize(function() {
    heightses();

  });
   // heightses();
$( window ).on( "load", function() {
 heightses();
 
})
heightses();
setTimeout(function() {  heightses();  }, 1);

// heightses();
 // heightses();
  // настройки здесь http://xdan.ru/samij-udobnij-datetimepicker.html
jQuery.datetimepicker.setLocale('ru');
$('.date_input').datetimepicker({
  format:'d.m.Y H:i',
  dayOfWeekStart: 1,
  // выбирает доспуное время
  allowTimes:[
'09:00','11:00','12:00','21:00'
],
 
  closeOnDateSelect:false,
  // closeOnWithoutClick :true
});


$(".hidden-nav").click(function(){
  $(this).toggleClass("active").next().slideToggle();
  // footerToBottom();
})

$(".filter-item").each(function(){

    var min = Number($('.min-price.minus').val());
    var max = Number($('.max-price.plus').val());
$(this).find( ".slider-range" ).slider({
      range: true,
      min: min,
      max: max,
      values: [ min, max ],
      slide: function( event, ui ) {
        
       $(this).parents(".filter-item").find('.minus').val(  ui.values[ 0 ] );
        $(this).parents(".filter-item").find('.plus').val(  ui.values[ 1 ] );
      }
    });
     $(this).find('.minus').val(    $(this).find( ".slider-range" ).slider( "values", 0 )   );
     $(this).find('.plus').val(     $(this).find( ".slider-range" ).slider( "values", 1 )   );
 
});


// слайдер на главной

$('.slider-wrap').slick({
   arrows: false,
    dots: true,
     speed: 600,
});


// большой слайдер в карточке + карусель  + zoom gall
$('.gal-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  asNavFor: '.gal-small',
  infinite: false,
   speed: 600,
});
$('.gal-small').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.gal-big',
  dots: false,
  arrows: false, 
  focusOnSelect: true,
  infinite: false,
   speed: 600,
});

$('.gal-big').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
       
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });

  // карусель - С этим товаром покупают
  $('.carusel-prod').slick({  
  speed: 600,
  slidesToShow: 1,
  arrows: true,
  draggable: false,
  prevArrow: ' <div><i class="demo-icon icon-angle-up"> </i></div>',
  nextArrow: '   <div><i class="demo-icon icon-angle-down"> </i></div> ',
  fade: true
});


  
    $(".carusel-prod-wrap .item-prod-absolute").hover(function(){

      $(this).parents(".carusel-prod-wrap").find(".slick-arrow").css({"z-index": "-1"});

    },
    function(){

      $(this).parents(".carusel-prod-wrap").find(".slick-arrow").css({"z-index": "1"});

    }
    )


      $_parModal = {
    type: 'inline',
    tClose: "Закрыть",
    fixedContentPos: true,
    fixedBgPos: false, 
    // closeMarkup: '<button title="Закрыть" type="button" class="mfp-close"><i class="demo-icon icon-i-close"> </i></button>',
    overflowY: 'auto',
    // showCloseBtn: true,
  closeBtnInside: true,
    // closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  };
    $('.detailelem').click(function () {
        $('#modal-basket p').text($('h1.title').text());
        $('#modal-basket img').attr('src',$('.bx_bigimages_aligner img').attr('src'));
        }

    );
    $('.mdlsub').click(function () {
            $('#msgsubscr').val($('.mdlsub').text().trim());
            $('#modal-sub p').text($('h1.title').text());
            $('#modal-sub img').attr('src',$('.bx_bigimages_aligner img').attr('src'));
        }
    );


    $('.likedcostum').click(function () {
        var classq = 'inf';
        var id = $(this).attr('date-id');
        var itemcur = this;
        $.ajax({
            type: "POST",
            url: "/bitrix/templates/eshop_bootstrap_green/costumlib/addfav.php",
            dataType: "text",
            timeout: 50000,
            async:false,
            data:{id:id,classq:classq}, // передаем пхп скрипту нужный
            success: function(data) {
               $(itemcur).parents('.col-sm-4.col-xs-6.col-600').remove();
                var curit = Number($('.btn-wrap div.lkdcstm span').text());
                $('.btn-wrap div.lkdcstm span').text(curit - 1);
                $('.likecountfav').text(curit - 1);
            },
            error: function(request, status, errorT) {

            }
        })


    });

  $('.liked a').click(function () {

         var qw =  this;
      var fullelem =  $(this).parents('.item-prod');

      var classq = $(this).attr('class');

          var id = $(this).attr('date-id');

          $('.modalfavsrc').attr('src',$(fullelem).find('.img-wrap img').attr('src'));
          $('#modal-favorites p').text($(fullelem).find('.name.text-center a').text());
      console.log(classq);
          $.ajax({
              type: "POST",
              url: "/bitrix/templates/eshop_bootstrap_green/costumlib/addfav.php",
              dataType: "text",
              timeout: 50000,
              async:false,
              data:{id:id,classq:classq}, // передаем пхп скрипту нужный
              success: function(data) {

                  if(data == 'add'){
                  var curit = Number($('.btn-wrap div.lkdcstm span').text());
                  $('.btn-wrap div.lkdcstm span').text(curit + 1);
                  $(qw).html('<i class="demo-icon icon-i-heart-2"></i> В избранном');
                      $(qw).attr('class','inf');

                      $(qw).attr('href','#modal-favorites');
                  }
                  if(data == 'remove'){
                      var curit = Number($('.btn-wrap div.lkdcstm span').text());
                      $('.btn-wrap div.lkdcstm span').text(curit - 1);
                      $(qw).html('<i class="demo-icon icon-i-heart-2"></i> В избранное');
                      $(qw).attr('class','nofv');
                      $(qw).attr('href','');
                  }

              },
              error: function(request, status, errorT) {

              }
          })

      }

  );


    $('.frmfree').click(function () {

        $('#small-dialog #tvrmdlll').val($('h1.title').text());
        }

    );


    // модальные окна
    // на кнопке с отзывом добавишь класс modal-btn и ссылку #modal-review"
    $('.modal-btn, .liked a, .item-prod .btn-basket, .head-prod-item .btn-basket').magnificPopup($_parModal);

    
  $(".modal-window a.more").click(function(e){
    e.preventDefault();
    $.magnificPopup.close(); 
  })
  // маска на телеФОН В Карточке
   // $(".head-prod-item-1 .input-wrap input").inputmask("+375-999999999");
});