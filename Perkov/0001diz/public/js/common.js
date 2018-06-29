$(function() {
 var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> '),
      arrl2 = (' <div class="l"><svg  xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div>'),
      arrr2 =(' <div class="r"><svg  xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div> ')
    // слайдер в модальном окне

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

  function heightses() {

    var w = $(window).width();
   // $(".s-team__text-wrap").height('auto').equalHeights();
   // $(".s-team__img-wrap").height('auto').equalHeights();
   // $(".s-team h3").height('auto').equalHeights();


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
     if (w<991){


     }
  }
  $(window).resize(function() {
    heightses();
  });
$( window ).on( "load", function() {
 heightses();
})
 heightses();
// листалка по стр
 $(" .scrolll").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

            $('html, body').animate({ scrollTop: destination }, 1600);

        return false;
    });


 // $(".top-nav .logo").click(function () {
 //        var destination = $("header").offset().top;

 //            $('html, body').animate({ scrollTop: destination }, 1600);

 //        return false;
 //    });



  $('  .scroll-link').on('click',function (e) {
      e.preventDefault();
			$.magnificPopup.close();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });




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
 $('.s-team__slider').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: true,
              loop: true,
              arrows: true,
              centerMode: true,
              focusOnSelect: true ,
               variableWidth: true,
               prevArrow: arrl2,
            nextArrow: arrr2,
              });
 // листалка по стр
 $(" .footer__btn").click(function () {
        var destination = $("body").offset().top;

            $('html, body').animate({ scrollTop: destination }, 1600);

        return false;
    });



// табы
$(function() {
// $(' .tabs__caption   .tab-btn:first-child  ').addClass("active")
 // $('.tabs__content:first-child ').addClass("active");
$(' .tabs__caption').on('click', '.tabs__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content')
    .eq($(this).index()).addClass('active').next().removeClass("active").next().removeClass("active")
   $(this)
    .closest('div.tabs').find('div.tabs__content')
    .eq($(this).index()).prev().addClass('active').prev().addClass('active')
    // $('.slider-small, .slider-big').slick('unslick');
    //  section_slider();
     $(this)

    .closest('div.tabs').find('.span').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
    return false;
});
});

// табы  . Теперь данные активного таба остается в storage
$(function() {
var tab = ('main-tabs');



$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {
  $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
      .eq($(this).index()).fadeIn().addClass('active');


});
});



  $(".price__link").click(function(){

  $(this).parents('.price').find(".price__btn").attr("data-tarif", $(this).find("h3").text())
  .attr("data-title", $(this).data("title"));
  })

$(".s-team__about .name").click(function(){
  // $(".s-team__more:visible").fadeOut();

  $(this).next().fadeIn(150);
  $(this).parents(".s-team__item").addClass("active")
})
$(document).mouseup(function (e) {
    var container = $(".s-team__more");
    if (container.has(e.target).length === 0){
        container.fadeOut(150);
        $(".s-team__item").removeClass("active")
    }
});
$(".s-team__more .before").click(function(){
  $(this).parent().fadeOut(150);
  $(this).parents(".s-team__item").removeClass("active")
})



// открытие блоков в s-team
var team = ".s-team"
$(team+"__btn").click(function(){
  if($(team + "__row-block:nth-last-child(2)").is(":visible")==true){
    $(this).text("Скрыть")
  }
  if($(team + "__row-block:last-child").is(":visible")==false){
    $(this).parents(team).find(team + "__row-block:visible").next(team + "__row-block:hidden").slideDown();
  }
  else{
    $(team + "__row-block").not(":first").slideUp(450);
     $(this).text("показать еще СОТРУДНИКОВ ")
  }
    return false;
})






 $("input[type='tel']").attr("pattern","[+]7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}").inputmask("+79999999999");
  // // маска на инпут
  //   $("input[type='tel']").inputmask("+7 999 9999999").attr("pattern","[+]7[ ][0-9]{3}[ ][0-9]{3}[0-9]{2}[0-9]{2}");
     // стрелки для слайдера

$(".rewier__caption p").readmore({
      speed: 300,
      moreLink: '<a href="#" class="more ">ЧИТАТЬ ОТЗЫВ ПОЛНОСТЬЮ</a>',
      lessLink: '<a href="#" class="more more-close">СКРЫТЬ</a>',
      maxHeight: 87,
      heightMargin: 0,
      collapsedHeight: 100,
      // embedCSS: false
    });
 $('.rewier__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450,
            asNavFor: '.rewier__slider-small',
            infinite: true,
            loop: true,
            arrows: true,
            prevArrow: arrl2,
            nextArrow: arrr2,
          });
         $('.rewier__slider-small').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              dots: false,
              speed: 450,
              infinite: true,
              loop: true,
              arrows: false,
              // centerMode: true,
              focusOnSelect: true ,
               variableWidth: true,
              asNavFor:  '.rewier__slider-big',
              });

    $(".rewier .slick-arrow ").click(function(){
      $(".more-close").click();
    })


       // Значения в заявках
  var order =$(".modal-form .form_subject, .modal-form  .order"),
      title =  $(".modal-form h3"),
      tSpan =  $(".modal-form h3 + p");


  $(".top-nav__btn").click(function(){
    var th = $(this)
        order.val("Заявка : "  + th.text());
        tSpan.text("на проект");
  })

  $(".price__btn").click(function(){
    var th = $(this)
        order.val("Заявка на: "  + th.data("tarif"));
        tSpan.text(th.parents(".tabs").find(".price__link.active").data("title"));
  })

  $(".s-team__sovet").click(function(){
    var th = $(this)
        order.val("Заявка: спросить совет у специалиста: "  + th.parents(".s-team__item").find("h3").text());
        tSpan.text(" на бесплатную консультацию");
  })

$(".footer .popup-with-move-anim").click(function(){
    var th = $(this)
        order.val("Заказать звонок в подвале ");
        // tSpan.text(" на бесплатную консультацию");
  })



  $(".gift  .order").val('Заявка с блока: "Абонемент в подарок"'  );

  $(".s-discount  .order").val("Заявка c блока на скидку 15%"  );
  $(".contact  .order").val("Заявка в контактах"  );

// форма

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


 $('.contact__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false,
    loop: false,
    arrows: true,
    // centerMode: true,
    // focusOnSelect: true ,
     // variableWidth: true,
     prevArrow: arrl2,
    nextArrow: arrr2,
    });

		$('.contact__slider')
		.on('lazyLoaded', function(event, slick, image, imageSource){
				image.parent().css('background-image', 'url(' + image.attr('src') + ')');
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
  $(".contact__slider").magnificPopup({
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



















// табы на ajax
var containerId1 = '.mytabs-container1';
var tabsId1 = '.mytabs1';

$(document).ready(function(){
  $(".main-tabs__content").each(function(){
    var th = $(this);

    // Preload tab on page load

    if($(tabsId1 + ' LI.current A').length > 0){
      loadTab1($(tabsId1 + ' LI.current A'));
    }

      $(tabsId1 + ' A').click(function(){
        if($(this).parent().hasClass('current')){ return false; }

        $(tabsId1 + ' LI.current').removeClass('current');
        $(this).parent().addClass('current');

        loadTab1($(this));
          return false;
      });
    function loadTab1(tabObj1){
        if(!tabObj1 || !tabObj1.length){ return; }
        $(containerId1).addClass('loading');
        $(containerId1).hide();

        $(containerId1).load(tabObj1.attr('href'), function(){
            $(containerId1).removeClass('loading');
            $(containerId1).fadeIn();

       $(".port__item").each(function(){


      $(this).magnificPopup({
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
     })
              });
    }

  })
});



// табы на ajax
var containerId2 = '.mytabs-container2';
var tabsId2 = '.mytabs2';

$(document).ready(function(){
  $(".main-tabs__content").each(function(){
    var th = $(this);

    // Preload tab on page load

    if($(tabsId2 + ' LI.current A').length > 0){
      loadTab2($(tabsId2 + ' LI.current A'));
    }

      $(tabsId2 + ' A').click(function(){
        if($(this).parent().hasClass('current')){ return false; }

        $(tabsId2 + ' LI.current').removeClass('current');
        $(this).parent().addClass('current');

        loadTab2($(this));
          return false;
      });
    function loadTab2(tabObj2){
        if(!tabObj2 || !tabObj2.length){ return; }
        $(containerId2).addClass('loading');
        $(containerId2).hide();

        $(containerId2).load(tabObj2.attr('href'), function(){
            $(containerId2).removeClass('loading');
            $(containerId2).fadeIn();

       $(".port__item").each(function(){


      $(this).magnificPopup({
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
     })
              });
    }

  })
});
