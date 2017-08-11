$(function() {

   
 // ценник в карточках
 $(".prod__price").each(function(){
  var th = $(this)
  th.text(th.parents(".prod__item").find(".prod__currency-item.active").data("bit"));
 })
 $(".prod__currency-item").click(function(){
  var th = $(this);
  var par = th.parents(".prod__item");
  par.find(".prod__currency-item").removeClass("active");
  th.addClass("active");
  par.find(".prod__price").text(th.data("bit"));
 })
$('.marquee-1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10,
  speed:70000,
  slidesToShow: 1,
  // centerMode: true,
  variableWidth: true,
  infinite: true,
  loop:true,
  dots: false,
  arrows: false,
});
 

  $('.otz__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      speed: 300,
      // initialSlide: 6,
      infinite: false,
      loop: false,  
      arrows: true,
      // rtl: true,
      useTransform: false,
       prevArrow: ' <div class="l"><i class="demo-icon icon-left-small"  > </i></div>',
      nextArrow: '   <div class="r"><i class="demo-icon icon-right-small"  > </i></div> ',
          responsive: [
        
       
        
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        },
   
 {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
             variableWidth: false
          }
        }
 

      ]
    });


// листалка по стр
 $(".top-nav__item-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

 
function heightses() {
    var w = $(window).width();
     $(".map .col-md-6").height(500).equalHeights();
    
    
    var topH=$(".top_line  ").height();
  if($(this).scrollTop()>topH){
                  $('.top_line  ').addClass('fixed');
                  
              }
              else if ($(this).scrollTop()<topH){
                  $('.top_line  ').removeClass('fixed');
                 
              }
  $(window).scroll(function(){
              if($(this).scrollTop()>topH){
                  $('.top_line  ').addClass('fixed');
               
              }
              else if ($(this).scrollTop()<topH){
                  $('.top_line  ').removeClass('fixed');
                
              }
          });
      
  }
  $(window).resize(function() {
    heightses();
  });

  $( window ).on( "load", function() {
 heightses();
})

// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });

    // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
     // модалка
  $(".btn-modal").each(function(){
    $(this).attr("href", "#small-dialog")
    $(this).click(function(){
      var th = $(".modal-form");
      th.find(".order").val($(this).data("order"));
      // th.find("p").text($(this).data("p"));
    })
  })
  // Значения в заявках
  var order =$(".modal-form .form_subject, .modal-form  .order"),
      title =  $(".modal-form .form-wrap__title"),
      tSpan =  $(".modal-form .form-wrap__title + span");
    
  $(".prod__btn").click(function(){
    var th = $(this),
        th2= th.parents(".prod__item");
    order.val("Лэндинг Автосервис: Клиента интересует "  +th2.find("h3").text());
    title.text( "Закажите консультацию");
    tSpan.text( "специалиста по ремонту");
    // $(".modal-form").text(th2.find("h3").text());
  })
   
   $(".ec__btn").click(function(){
    order.val("Лэндинг Автосервис: Заявка на бесплатную диагностику");
    title.text( "Оставьте заявку");
    tSpan.text( "на бесплатную диагностику");
   })

   $(".ec__link, .top__btn-modal").click(function(){
    order.val("Лэндинг Автосервис: Получить бесплатную консультацию");
    title.text( "Закажите консультацию");
    tSpan.text( "специалиста по ремонту");
   })


    // модалка
   $('.btn-modal').magnificPopup({
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



 $("form .btn").click(function(){
    var th =$(this);
    setTimeout(function() {
       th.attr("disabled","true"); }, 1)

    

    setTimeout(function() {
     th.removeAttr("disabled"); }, 2000)

    
 })
// форма
$("form").submit(function() {
  var th =$(this);
    $.ajax({
      type: "POST",
      url: "rest.php",
       data: th.serialize()
    }).done(function() {
        setTimeout(function() {
            setTimeout(function() {
       th.find(".btn").attr("disabled","true"); }, 1)
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
         th.find(".btn").removeAttr("disabled");
        // th.find(".btn").removeClass("disabled").attr("disabled","false");
      }, 4000);
    });
    return false;
  });



  $("section, .gal").each(function(){
    $(this).find(".sert__gal, .container-fluid  ").magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          // verticalFit: true,
          
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
           
        }
        
      });

  }) 
   var $_imgH = $(' .gal a');

$_imgH.imagesLoaded( function() {
  $_imgH.imagefill(); 
});

});
