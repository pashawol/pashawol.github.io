 jQuery(document).ready(function($) {

  // видео фон
  jQuery("#video").YTPlayer();
  // для свг
  svg4everybody({});
  // Custom JS

  $(".s-video__item").click(function() {
    $("#modal-vid .modal-body").html($(this).find(".block-js").html());
  })

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

// accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"),
     $(this).next("div").filter(function() {
      return "block" == $(this).css("display")
      }).slideUp().parent().removeClass("active"),
       $(this).next("div").filter(function() {
      return "none" == $(this).css("display")
      }).slideDown().prev("div").addClass("active").parent().addClass("active")})

// адаптивные табы
$('.tabs-block').easyResponsiveTabs();
 $(".s-about-accord .resp-tab-active").each(function(){
  $(this).next().find(".before").addClass("anim");
 })
  $(".s-about-accord .resp-tab-btn").click(function(){
      $(".before").removeClass("anim");
      $(".s-about-accord .resp-tab-active").next().find(".before").addClass("anim");
  })

  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap "
  }

  $(window).resize(function() {
    heightses();

  });
$( window ).on( "load", function() {

  var typed = new Typed('.typed-js', {
  strings: [ "родинок","папиллом","бородавок","кератом"],
  startDelay: 300,
  typeSpeed: 150,
  backSpeed: 100,
  startDelay: 5,
  backDelay: 450,
  showCursor: false,
  loop: true
});

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

// слайдер цвета в карточке
 var swiper4 = new Swiper('.slider-sr-js', {
      // slidesPerView: 5,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: "fade",
      loadPrevNext: true,
      shortSwipes: false,
       pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><span class="' + className + '__inner"></span></span>';
        },
      },
      preloadImages: false,
    // Enable lazy loading
    lazy: true

    });
 var swiper5 = new Swiper('.carusel-js', {
      // slidesPerView: 5,
      slidesPerView:'auto',
      spaceBetween: 70,
			freeMode: true,
      // loop: true,
			navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
			on: {
    sliderMove: function () {
			$(".s-team__item").each(function(){
				$(this).removeClass("active").find(".hidden-block").slideUp();
			})
    }
    },
		breakpoints: {
        1199: {
          spaceBetween: 20,
        },
				576:{
						freeMode: false,
					  slidesPerView:1,
				}
			}
    });

    $('.ba-slider').beforeAfter();
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
	$(".s-team__item").click(function(){
		$(this).toggleClass("active").find(".hidden-block").slideToggle();
	})

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



  // кастомный инпут файл

  var file = $(".add-file input[type=file]");
  file.change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         var name = $(".add-file__filename  ");
       name.text(filename);

    });
  // или
   // $(".dropzone").dropzone({
   //  url: "/file/post",
   //  addRemoveLinks: true,
   //      acceptedFiles: 'image/*',
   //      uploadMultiple: true,
   //   });


  $(".pretty-embed__bg").each(function(){
    // загрузка фона видео
  $(this).css("background-image",'url(http://img.youtube.com/vi/'  + $(this).data("src")+ '/0.jpg)')
  // включение видео при клике по блоку
   $(this).click(function(){
    $(this).removeClass("on").next()
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1').addClass("on");
   })
   })

});
