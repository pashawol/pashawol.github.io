 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS



// фикссировать поналель цены в карточке товара
	// var topH=   $(".buy-block-after").offset().top;
	 if ($("div").is(".buy-block")){
		 $("body").css("padding-bottom", $(".buy-block-after").height())
	var topH=   $(".buy-block-after").offset().top + $(".buy-block__inner").innerHeight();
	// var topH= $(".s-product__head").height() + $(".buy-block__inner").height();
	// if($(window).scrollTop()>topH){
	// 		$('.buy-block__inner-js  ').addClass('fixed');
	// }
	// else {
	// 		$('.buy-block__inner-js  ').removeClass('fixed');
	//
	// }

	$(window).scroll(function(){
		var wH=   $(this).scrollTop() + $(this).height();
		if(wH > topH){
				$('.buy-block__inner-js  ').addClass('fixed');
				console.log(topH);
				console.log(wH);
		}
		else{
				$('.buy-block__inner-js  ').removeClass('fixed');

		}
});
}
		 // конец добавил
	// показать строку поиска
 $(".top-line__icon--search-js, .search-top .icon-close ").click(function(){
	 $(".search-top").slideToggle()
 })
	$('.trop, .aside').find(".dropdown > a , .drop-inner > a , .drop-sub-inner > a ").each(function() {
			var th = $(this);
			th.click(function() {
					th.toggleClass('active').next().slideToggle();
					th.parent().toggleClass('active');
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
    $(".hidden-mnu").toggleClass("active");
    $("body, html").toggleClass("fixed");
    return false;
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

		$('.drop > a ').each(function() {

				var th = $(this);
				th.click(function(e) {
							e.preventDefault();
						th.toggleClass('active').next().slideToggle();
						th.parent().toggleClass('active');
				})
		})

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


 // слайдер в шапке
	var swiper = new Swiper('.slider-js', {
		pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
			autoplay: {
		 delay: 5000,
		reverseDirection: true,
	 },
		 });
 // слайдер в шапке
	var swiper = new Swiper('.slider-js-na', {
		pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
		lazy: true,
		loadPrevNext: true,
		slideToClickedSlide: true,
		 });

 // слайдер в шапке
	var swiper1 = new Swiper('.s-brand-slider__slider', {
		pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
			autoplay: {
		 delay: 5000,
		reverseDirection: true,
	 },
	 slidesPerView: 'auto',
	 // lazy: true,
	 // loadPrevNext: true,
	 loop: true,
	 slideToClickedSlide: true,
	 // spaceBetween: 'rem(30)',
		 });
 // слайдер в шапке
	var swiper2 = new Swiper('.catalog-carusel-js', {
		pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
	 slidesPerView: 2,
	 lazy: true,
	 loadPrevNext: true,
	 loopFillGroupWithBlank: true,
	 // spaceBetween: 'rem(30)',
		 });

// слайдер цвета в карточке


 $('.gallery-js').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
	infinite: true,
  asNavFor: '.gallery-thumbs'
});
$('.gallery-thumbs').slick({
  // slidesToShow: 3,
	variableWidth: true,
  slidesToScroll: 1,
  asNavFor: '.gallery-js',
  dots: false,
	arrows: false,
	infinite: false,
  // centerMode: true,
  focusOnSelect: true
});

// слайдер цвета в карточке
 var swiperColor = new Swiper('.color-slider-1', {
      // slidesPerView: 5,
      slidesPerView: 4,
      watchOverflow: true,
      spaceBetween: 0,
      freeMode: true,
      slidesPerGroup: 3,
       // centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
       freeModeMomentum: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

// слайдер цвета в карточке
 var swiperColor = new Swiper('.color-slider-2', {
      // slidesPerView: 5,
      slidesPerView: 'auto',
      watchOverflow: true,
      spaceBetween: 0,
      freeMode: true,
      slidesPerGroup: 3,
       // centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
       freeModeMomentum: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });


		// показать блок друго подарка
		 $(".s-card-prod__btn-toggle").click(function(e){
			 e.preventDefault();
			$(this).toggleClass("active")
			$(".toggle-block-js").slideToggle().toggleClass("active");

			swiper.update();

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
	$(".btn-modal-close").click(function(){
		$.magnificPopup.close();
	})
	// accordion
 $(".showhide").click(function() {
 	 $(this).toggleClass("active").next("div").slideToggle().parents().toggleClass("active");
 })


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





});
