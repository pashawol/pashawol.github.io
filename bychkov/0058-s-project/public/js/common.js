 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS


  var url=document.location.href;
  $.each($(".top-nav__nav a "),function(){

  if(this.href==url){
    if($(this).hasClass("top-nav__link") == true){

    $(this).addClass('top-nav__link-active');
    }
    if($(this).hasClass("footer__link") == true){

    $(this).addClass('footer__link-active');
    }

  };

	});
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
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
  
    var topH=$("header ").innerHeight();

    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed');
                }
                else  {
                    $('.top-nav  ').removeClass('fixed');
                }
            });
       // конец добавил
  }
  
  if (window.matchMedia("(min-width: 992px)").matches) {

       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
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


  
	 $(".swiper-carusel").each(function () {

		 // слайдер цвета в карточке
		 var swiper4 = new Swiper($(this), {
			//  slidesPerView: 5,
			 slidesPerView: 'auto',
			 watchOverflow: true,
			 spaceBetween: 0,
			 freeMode: true,
			 watchOverflow: true, 
			 loop: true,
			 loopFillGroupWithBlank: true,
			 touchRatio: 0.2,
			 slideToClickedSlide: true,
       freeModeMomentum: true,
			 navigation: {
				 nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
      },
			
    });
	})
	
	 $(".s-gal__slider--js").each(function () {

		 // слайдер цвета в карточке
		 var swiper4 = new Swiper($(this), {
			 slidesPerView: 1, 
			 spaceBetween: 15, 
			 watchOverflow: true, 
			 loop: true,
			 loopFillGroupWithBlank: true,
			 
			 preloadImages: false, 
			 lazy: true,
			 loadPrevNext: true,
			 navigation: {
				 nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
			},
			 effect: 'flip',
			 grabCursor: true,
			 pagination: {
				 el: '.swiper-pagination',
			 },
			
    });
	})

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


// var wowAnim = $(".s-dop__col," +
//                 ".s-pick__col," +
//                 ".s-condition__col");
// wowAnim.each(function(i){

// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

//    var wow = new WOW({ mobile: false });
//         wow.init();

// });


});
