 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS


   var url=document.location.href;
  $.each($(".s-po-body .s-catalog-tab-link "),function(){

  if(this.href==url){
    if($(this).hasClass("s-catalog-tab-link") == true){

    $(this).addClass('active');
    }


  };

  });

$('.popover-js').popover({
  placement: 'auto',
  trigger: 'hover',
})



 var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

 $(".date-picker-block-js").each(function(){

    var th = $(this);

        th.find('.startDate').datepicker({
               locale: 'ru-ru',
            uiLibrary: 'bootstrap4',
            // iconsLibrary: 'fontawesome',
            format: 'dd.mm.yyyy',
            minDate: today,
            maxDate: function () {
                return th.find('.endDate').val();
            }
        });
        th.find('.endDate').datepicker({
               locale: 'ru-ru',
            uiLibrary: 'bootstrap4',
            // iconsLibrary: 'fontawesome',
            format: 'dd.mm.yyyy',
            minDate: function () {
                return th.find('.startDate').val();
            }
        });
 })
 $('.datepicker-date').datepicker({
               locale: 'ru-ru',
            uiLibrary: 'bootstrap4',
            format: 'dd.mm.yyyy',

        });

 $(".label-date-picker-js  input").click(function(){
  $(this).next().click();
 })
   // accordion
  $(".showhide").click(function() {
     $(this).toggleClass("active").next("div").slideToggle().parents().toggleClass("active");
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
    $(".hidden-mnu").slideToggle();
    $("html, body").toggleClass("fixed");
    return false;
  });


// листалка по стр
 $(" .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

            $('html, body').animate({ scrollTop: destination }, 1100);

        return false;
    });




// слайдер на главной
 var swiper = new Swiper('.s-articals__slider', {
      loop: true ,
			speed: 450,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       preloadImages: false,
      lazy: true,
      lazy: {
        loadPrevNext: true,
      }

    });

// слайдер в карточке

var swiperCard = new Swiper('.carusel-slider', {
      // loop: true ,
			speed: 450,
      // init: false,
      // slidesPerView: 3,
      // slidesPerColumn: 3,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
// слайдер в блоге

var swiperblog = new Swiper('.blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
			speed: 450,
      // slidesPerColumn: 3,
      // slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       preloadImages: false,
      lazy: true,
      lazy: {
        loadPrevNext: true,
      },
           breakpoints: {
        992: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 1,
        }
      }
    });

		// слайдеры со стр сдать авто
		var swiperR = new Swiper('.slider-one', {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 30,
				speed: 450,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				lazy: true,
	      lazy: {
	        loadPrevNext: true,
	      }
			});

		// слайдеры со стр сдать авто
		var swiperfr = new Swiper('.slider-carusel-js', {
				loop: true,
				slidesPerView: 1,
				speed: 450,
					slideToClickedSlide: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				lazy: true,
	      lazy: {
	        loadPrevNext: true,
	      }
			});

		// слайдеры со стр about
		var swiperfr = new Swiper('.slider-carusel-ab-js', {
				loop: true,
				slidesPerView: 1,
				speed: 450,
				slideToClickedSlide: true,
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				lazy: true,
	      lazy: {
	        loadPrevNext: true,
	      },
				effect: 'coverflow',
	      grabCursor: true,
	      centeredSlides: true,
	      slidesPerView: 'auto',
	      coverflowEffect: {
	        rotate: 0,
	        stretch: -30,
	        depth: 100,
	        modifier: 1,
	        slideShadows : false,
	      },
	      grabCursor: true,
			});

  // аккордион в ЛК

  $(".toggle-td-js").click(function(){
    $(this).toggleClass("active").parent("tr").find(".hidden-td-js .td-inner").slideToggle(250).toggleClass("active");
  })


function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //

  $(".btn-more-js").click(function(){
    var tr= $(this).parents(".s-po-body__section").find("tr:hidden");
     if (w>992) {
           tr.fadeIn();


       }
     else  if (  w < 991.98){
          tr.css("display", "block");
        }
  })



    // скрывает/показывает td  в аккордионе
     $(".hidden-td-js .td-inner").each(function(){
          if (w>992){
               $(".toggle-td-js").removeClass("active");
              $(this).removeClass("active").removeAttr("style")

           }
        else  if (  w < 991.98 &&  !$(this).hasClass("active")) {

            $(this).hide();
        }
     })

    if (w>992){
        $(".s-po-body__section tr").removeAttr("style");
      // swiperCard.init();
      // swiperCard.destroy();
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("html, body").removeClass("fixed");
    }


    var topH=$("header ").height() + $('.top-nav  ').height();
    var topH2=$(".header-block ").height();
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed-ready');
                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed-ready');
                }
            });

    if($(this).scrollTop()>topH2){
                    $('.top-nav  ').addClass('fixed');

                }
                else if ($(this).scrollTop()<topH2){
                    $('.top-nav  ').removeClass('fixed');

                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH2){
                    $('.top-nav  ').addClass('fixed');
                }
                else if ($(this).scrollTop()<topH2){
                    $('.top-nav  ').removeClass('fixed');
                }
            });

       // конец добавил
  }

  $(window).resize(function() {
    heightses();
  });

 heightses();



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
$(".data-modal").click(function(){
	var mod= $(this).attr("href");
	$(mod).find(".form-wrap__title").text($(this).data("title"));
})


  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });



 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

	 // включение видео
	   $(".pretty-embed__bg").each(function(){
	    $(this).on("click", function(){
	     $(this).removeClass("on").next()
	     .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1').addClass("on");
	    })
	    })

 $(".input-range").each(function(){
  let minV = $(this).data("min"),
      maxV = $(this).data("max") ;

     $(this).ionRangeSlider({
      type: "double",
       min: minV,
        max: maxV,
     });

 })
 $(".input-range-single").each(function(){
  let minV = $(this).data("min"),
      maxV = $(this).data("max") ;

     $(this).ionRangeSlider({
      type: "single",
       min: minV,
        max: maxV,
     });

 })

 $(".s-calc__range-js").each(function(){
  let minV = $(this).data("min"),
      maxV = $(this).data("max") ;

     $(this).ionRangeSlider({
      grid: true,
			force_edges: true,
			from: 2,
			 prettify_enabled: true,
			values: [
			 "0 ₽",   "500 тыс.&nbsp;₽",
			 "1 млн.&nbsp;₽", "5 млн.&nbsp;₽", "10 млн.&nbsp;₽"
	 ]
     });

 })

});
