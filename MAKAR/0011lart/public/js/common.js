 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
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
    $("body, html").toggleClass("fixed");
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
      $("body, html").removeClass("fixed");
        }
    });

  function heightses() {

    var w = $(window).width();
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   //


    // скрывает моб меню
    if (w>767){
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


 // карусель
 // $('.s-team__slider').slick({
 //    slidesToShow: 3,
 //    slidesToScroll: 1,
 //    dots: false,
 //    speed: 450,
 //    infinite: true,
 //    loop: true,
 //    arrows: true,
 //    // centerMode: true,
 //    // focusOnSelect: true ,
 //     // variableWidth: true,
 //     prevArrow: arrr2,
 //      nextArrow: arrl2,
 //    });

 // слайдер в шапке
 var swiper = new Swiper('.slider-js', {
	 navigation: {
		 nextEl: '.swiper-button-next',
		 prevEl: '.swiper-button-prev',
	 },
	 // autoplay: {
		//  delay: 5000,
		//  reverseDirection: true,
	 // },
	 lazy: true,
	 loadPrevNext: true,
 });

 // слайдер в серт
 $(".carusel-js-wrap").each(function(){
	 var th = $(this);
	 var swiper2 = new Swiper(th.find('.carusel-js'), {
		 navigation: {
			 nextEl: th.find('.swiper-button-next'),
			 prevEl: th.find('.swiper-button-prev'),
		 },
		 // autoplay: {
			//  delay: 5000,
			//  reverseDirection: true,
		 // },
		 lazy: true,
		 loadPrevNext: true,
		 slidesPerView: 4,
		 loop: true,
		 spaceBetween: 30,
		 breakpoints: {
	    // when window width is <= 320px

	    // when window width is <= 480px
	    767: {
	      slidesPerView: 2,
				spaceBetween: 10
	    },
	    // when window width is <= 640px
	    991: {
	      slidesPerView: 3,
	    }
	  }
	 });
	})
 // слайдер в серт
 var swiper3 = new Swiper('.cat-carusel-js', {
	 navigation: {
		 nextEl: '.carusel-js-wrap .swiper-button-next',
		 prevEl: '.carusel-js-wrap .swiper-button-prev',
	 },
	 // autoplay: {
		//  delay: 5000,
		//  reverseDirection: true,
	 // },
	 lazy: true,
	 loadPrevNext: true,
	 slidesPerView: 3,
	 loop: true,
	 spaceBetween: 30,
	 breakpoints: {
    // when window width is <= 320px

    // when window width is <= 480px
    767: {
      slidesPerView: 1
    },
    // when window width is <= 640px
    991: {
      slidesPerView: 2,
			spaceBetween: 20,
    }
  }
 });

// слайдер    в карточке

	$('.s-card-head__slider-big').slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false,
						speed: 450,
						asNavFor: '.s-card-head__slider-small',
						infinite: false,
						loop: false,
							arrows: false,

					});
				 $('.s-card-head__slider-small').slick({
							slidesToShow: 5,
							slidesToScroll: 1,
							dots: false,
							speed: 450,
							infinite: false,
							loop: false,
							arrows: false,
							vertical: true,
							verticalSwiping: true,
							// centerMode: true,

							focusOnSelect: true ,
							asNavFor:  '.s-card-head__slider-big',
							responsive: [

							    {
							      breakpoint: 575,
							      settings: {
							        slidesToShow: 4,
							      }
							    }
							    // You can unslick at a given breakpoint now by adding:
							    // settings: "unslick"
							    // instead of a settings object
							  ]
														// swipeToSlide: false
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


// var wowAnim = $(".s-dop__col," +
//                 ".s-pick__col," +
//                 ".s-condition__col");
// wowAnim.each(function(i){

// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

//    var wow = new WOW({ mobile: false });
//         wow.init();

// });


});
