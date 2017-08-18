$(function() {

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
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    

    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
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
 $(" .top-nav a, .a-scroll, .wrapp-hidden li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top + 40;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

// табы
$(function() {
$(' .tabs').on('click', '.tabs__btn:not(.active)', function(e) {

  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('.tabs__content').hide().removeClass('active')
    .eq($(this).index()).fadeIn().addClass('active');
    $(".tabs__hidden").fadeOut()
      $(".tabs__hidden-block").addClass("hidden");;
    $('.tabs__slider').slick('unslick');
     section_slider();

    return false;
});
});

 // табы планировки в кальке
$(function() {
$(' .tabs-c__caption').on('change', 'input', function(e) {
  $(this)
    .closest('.tabs-c').find('.tabs-c__content').hide().removeClass('active')
    .eq($(this).parents(".tabs-c__btn").index()).fadeIn().addClass('active');
     
    return false;
});
});

 
   
 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
  
 var arrl = (' <div class="l"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"   sodipodi:docname="arr-left.svg" inkscape:version="0.92.1 r15371"><path d="M 455,455 V 0 H 0 V 455 Z M 275.435,99.411 296.683,120.589 190.12,227.5 296.683,334.411 275.435,355.589 147.763,227.5 Z" id="path2" inkscape:connector-curvature="0" style="fill:#ff5320" /></svg></div>'),
      arrr =(' <div class="r"><svg   xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 455 455;" viewBox="0 0 455 455" version="1.1"><path id="path2" fill="#ff5320" d="M0,0v455h455V0H0z M179.565,355.589l-21.248-21.178L264.88,227.5L158.317,120.589l21.248-21.178L307.237,227.5  L179.565,355.589z" /></svg></div> ')
      arrl2 = (' <div class="l"><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div>'),
      arrr2 =(' <div class="r"><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" viewBox="0 0 370.814 370.814" style="enable-background:new 0 0 370.814 370.814;" xml:space="preserve" sodipodi:docname="left-arrow-chevron.svg" inkscape:version="0.92.1 r15371"><polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401   " fill="#ff5320" id="polygon2" /></svg></div> ')
 
 
  // слайдер в каталоге
   function  section_slider2(){

       $('.tabs__slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 450,
      asNavFor: '.tabs__slider',
      draggable: false,
      swipe: false, 
      fade: true,
      infinite: true,
      loop: true,  
    });

 

   $('.tabs__small-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        infinite: true,
        loop: true,  
        arrows: true, 
        centerMode: true,
        prevArrow: arrl,
        nextArrow: arrr,
        
        }); 
    }
    section_slider2();
 function  section_slider(){

  
  $('.tabs__slider').slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true, 
    centerMode: true,
    asNavFor: '.tabs__slider-big',
    prevArrow: arrl,
    nextArrow: arrr,
    focusOnSelect: true,
    responsive: [ 
      {
          breakpoint: 991,
          settings: {
            slidesToShow: 2, 
          }
        }, 
      {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
           
          }
        }  
      ]
    });
 
    }
    section_slider();
 
$(".tabs__close").click(function(){
      $(".tabs__item").removeClass("active")
      $(".tabs__hidden").fadeOut();
       $('.tabs__small-slider, .tabs__slider-big').slick('unslick');
    
})

$(".tabs__item").click(function(){
  $(".tabs__item").removeClass("active")
  $(this).addClass("active");
   $(".tabs__hidden-block").removeClass("hidden");
  $(".tabs__hidden").fadeIn()
   $('.tabs__small-slider, .tabs__slider-big').slick('unslick');
  section_slider2();
})


// слайдеры в отзывах
$(".slider-small").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: false,
     arrowa:false,
    dots: true,
     
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a style="background-image: url('+thumb+');"><img src="'+thumb+'"></a>';
    },

     
});
  
$(".slider-big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    swipe: false, 
    arrows:false,
    dots: false,
    draggable: false,
    fade: true,
    adaptiveHeight: true,
   
});
  // кнопки переключения слайдов
  $(".reviews").find('.right-arr').on('click', function(){ 
      $(".reviews").find(' .slider-big').slick("slickNext"); 
  }) 
  $(".reviews").find('.left-arr').on('click', function(){ 
      $(".reviews").find('.slider-big').slick("slickPrev"); 
  }) 

  // настройки https://eonasdan.github.io/bootstrap-datetimepicker/
// настройки часовой зоны http://momentjs.com/
$(".date").datetimepicker({
  locale: 'ru-ru',
  
  format: 'DD.MM.YYYY',
  tooltips: {
    today: 'Go to today',
    clear: 'Clear selection',
    close: 'Close the picker',
    selectMonth: 'Select Month',
    prevMonth:'Прошлый месяц',
    nextMonth: 'Следующий месяц',
    selectYear: 'Select Year',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    selectDecade: 'Select Decade',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevCentury: 'Previous Century',
    nextCentury: 'Next Century',
    incrementHour: 'Добавить час',
    pickHour: 'Выбрать время',
    decrementHour:'На час меньше',
    incrementMinute: 'Добавить минуты',
    pickMinute: 'Выбрать минуты',
    decrementMinute:'Уменьшить минуты',
    incrementSecond: 'Increment Second',
    pickSecond: 'Pick Second',
    decrementSecond:'Decrement Second',
}

});
$(".time").datetimepicker({
  locale: 'ru-ru', 
   format: 'LT',
   
   tooltips: {
    today: 'Go to today',
    clear: 'Clear selection',
    close: 'Close the picker',
    selectMonth: 'Select Month',
    prevMonth:'Прошлый месяц',
    nextMonth: 'Следующий месяц',
    selectYear: 'Select Year',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    selectDecade: 'Select Decade',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevCentury: 'Previous Century',
    nextCentury: 'Next Century',
    incrementHour: 'Добавить час',
    pickHour: 'Выбрать время',
    decrementHour:'На час меньше',
    incrementMinute: 'Добавить минуты',
    pickMinute: 'Выбрать минуты',
    decrementMinute:'Уменьшить минуты',
    incrementSecond: 'Increment Second',
    pickSecond: 'Pick Second',
    decrementSecond:'Decrement Second',

}
 
});
  // кастомный инпут файл
 // $(".file-upload input[type=file]").change(function(){
 //         var filename = $(this).val().replace(/.*\\/, "");
 //        $(this).parents(".formm-wrap").find(".filename").text(filename);
 //        if ($(".filename").text() != ''){
 //                $(this).parents(".formm-wrap").find(".file-name-wrap span").prepend('<img src="img/error.png" alt="" class="error">');
 //              }
 //        else {
 //           $(this).parents(".formm-wrap").find(".file-name-wrap").remove('.res-i');
 //        }
 //    });
 // $(".formm-wrap ").on("click", ".error", function(){
 //    var th= $(this);
 //    th.find(".file-upload input[type=file]").val("");
 //    th.find(".file-upload .filename").text("");
 // })


 // кастомный инпут файл 
var $_input  = function(){
  $(".formm-wrap").each(function(e){ 
  var th = $(this)
  var file = th.find("input[type=file]");
  file.attr("name", "file_"+e);
  file.change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         var name =  th.find("span.filename ");
       name.text(filename);
        if (name.text() != ''){
              th.find(".del").addClass("active");
              $(".add-input").addClass("active");
              }
        else {
           th.find(".del").removeClass("active");
            $(".add-input").removeClass("active");
        }
    });
  th.find(".del").click(function(){
    th.find("input  ").val("");
    th.find(".filename").text("");
    $(this).removeClass("active");
      
  })
  }) 
}

$_input();



    // галлерея в кальке
    $(".vyd__vyd-item").each(function(){
      var th =  $(this);
     th.find(".more").click(function(){
      th.find(".gal:first-child").click();
      return false;
     })
    th.magnificPopup({
    delegate: 'a.gal',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
  });
    })

    $(".btn-next").click(function(){
      $(this).parents(".s-calc__step").removeClass("active").hide().next().fadeIn().addClass("active")
    })
    $(".btn-prev").click(function(){
      $(this).parents(".s-calc__step").removeClass("active").hide().prev().fadeIn().addClass("active")
    })

  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});
