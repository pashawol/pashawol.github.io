 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
	// Custom JS
	
	// dropdown  меню
	// $(".s-order").stick_in_parent({
	// 	offset_top: $(".top-nav--fixed").height() + 10,
	// 	inner_scrolling: true,
	//  //  recalc_every: true,
	// });

	$('.dropdown-cat__toggle--js').click(function () {
		$(this).next().toggle().parents(".dropdown-cat").toggleClass("show");
	 $(this).parents(".dropdown-cat").hasClass("show")?($(".dropdown-cat__title").text("Закрыть"),$("body").addClass("fixed-drop"))  : ($(".dropdown-cat__title").text("Все категории"), $("body").removeClass("fixed-drop")); 
	 
		})
			//Assigning the h2 markup to accordion title
	$(".dropdown-cat__menu").each(function () {
		var $categoryTabs = $(this);
		var itemCount = 0;
		var $tabItemh2;
		$categoryTabs.find('.dropdown-cat-sub').before("<div class='d-lg-none category-accordion  '>");
		$categoryTabs.find('.category-accordion').each(function () {
				$tabItemh2 = $(this);
				var innertext = $categoryTabs.find('.dropdown-cat-has-children__item:eq(' + itemCount + ') .dropdown-cat-has-children__link').html();
				$categoryTabs.find('.category-accordion:eq(' + itemCount + ')').append(innertext);
				itemCount++;
		});
	});

	// accordion в меню
var $catalog_nav = $('.catalog-nav');
$(".dropdown-cat-sub-accordion").on('click', ' .category-accordion', function() {
		var $el = $(this),
				$dropdown_cat_sub_accordion = $el.parent('.dropdown-cat-sub-accordion');
		if ($el.hasClass('active')) return false;
		//скрываем то есть удаляем класс active
		$('.dropdown-cat-sub.active,.category-accordion.active', $catalog_nav).removeClass('active');
		$el.addClass("active").next().addClass("active");
		var h = 0;
		$('.dropdown-cat-sub-accordion', $catalog_nav).each(function(index, el) {
				if (el == $dropdown_cat_sub_accordion[0]) {
						return false;
				}
				h += $(el).innerHeight();
		});
		$('.custom-scroll-js').animate({
				scrollTop: h
		}, 500);
 
});

	// открыть дочернее меню в dropdown
	$(".dropdown-cat-has-children__item--js").hover(function () {
		
		$(this).closest('.dropdown-cat__menu').find(".dropdown-cat-has-children__item--js").removeClass('active');
		$(this).addClass('active').closest('.dropdown-cat__menu').find('.dropdown-cat-sub').removeClass('active');
		$(this).closest('.dropdown-cat__menu').find(".dropdown-cat-sub-accordion").eq($(this).index()).find(".dropdown-cat-sub").addClass('active');
		 $(".dropdown-cat__menu").addClass('active');
		},
		function () {
			$(".dropdown-cat__menu").removeClass('active');

	  }
	);


		$(document).mouseup(function (e) {
			var container = $(".dropdown-cat.show");
			if (container.has(e.target).length === 0){
				 $(".dropdown-cat__menu").hide();
				// $("body").toggleClass("fixed");
				$(".dropdown-cat__title").text("Все категории");
				$(".dropdown-cat").removeClass("show");
				$("body").removeClass("fixed-drop");
				$(".dropdown-cat-has-children__item--js").removeClass('active');
				$('.dropdown-cat-sub').removeClass('active');
				$('.dropdown-cat-sub.active,.category-accordion.active, .dropdown-cat__menu.active', $catalog_nav).removeClass('active');
					}
			});

 

			// open search-block 
	$(".top-nav__search-toggle--js").click(function () {
		$(".search-block--js").slideToggle()
		.find(".form-control").focus();
		})
		
 


		// accordion в меню
		// $(".dropdown-cat-sub-accordion").on('click', ' .category-accordion', function() {
		// 	$(this).toggleClass("active").next().slideToggle();
		// 	if (($(this).offset().top ) >= ($(' html, body').height() / 2)){
		// 		$('.custom-scroll-js').animate({ scrollTop: $(this).offset().top + topHeader}, 1100);
		// 	}
		// })


//  табы  в выборе способа доставки
$(".delivary-method .custom-input__input" ).change(function () {
	var index = $(this).parents('.delivary-col').index();
	console.log(index);
	$(this).closest('.delivary-method').find('.delivary-item').hide().removeClass('active')
	.eq(index).fadeIn().addClass('active');
  })
	
	// accordion в оформлении покупки
	$(".accordion__toggle").click(function () {
		$(this).toggleClass("active").next().slideToggle().toggleClass("active");
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
    if (container.has(e.target).length === 0 && $(".top-nav").has(e.target).length === 0){
       $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body, html").removeClass("fixed");
        }
		});
		
		// скрывает лишний текст в отзывах
 
		$('.article-js ').moreLines({
			linecount: 6,
			// custom text
			buttontxtmore: '<span class="  btn btn-sm btn-outline-primary" href="#">Читать полностью</span>', 
			buttontxtless: '<span class="  btn btn-sm btn-outline-primary" href="#">Скрыть</span>', 
			animationspeed: 450
		});


 
  function heightses() {

    var w = $(window).width();
   
		// show/hide fixed menu
    var topH=$("header ").innerHeight(); 
    $(window).scroll(function(){
			if($(this).scrollTop()>topH){
				$('.top-nav--js').addClass('fixed');
			}
			else  {
				$('.top-nav--js').removeClass('fixed');
			}
		});
		// конец добавил
		$(".main-wrapper").css("padding-bottom",$("footer").outerHeight())
  }
  
	// скрывает моб меню 
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
 $(" .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

            $('html, body').animate({ scrollTop: destination }, 1100);

        return false;
    });


// табы  . Теперь данные активного таба остается в storage
$(function() {
var tab = ('tabs'); 
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



 var icon = '<svg class="icon icon-left-arr "><use xlink:href="img/svg/sprite.svg#left-arr">';

var   arrr2 = (' <div class="l">'+ icon),
      arrl2 =(' <div class="r">'+ icon);
 // карусель
 $('.header-block__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    infinite: true,
    loop: true,
		arrows: true, 
		dots: true,
    prevArrow: arrr2,
		nextArrow: arrl2,
		appendArrows: '.header-block__arrow-wrap .container',
		// autoplay: true,
		 // autoplaySpeed: 5000,
		 responsive: [ 
      {

      breakpoint: 575,
      settings: {
        arrows: false, 
      }

 
    }]
  });
	//  слайдр  каталоге
	$(".s-catalog__carusel--js").each(function () {

		// слайдер цвета в карточке
		var swiper4 = new Swiper($(this), {
		  // slidesPerView: 5,
			slidesPerView: 4,
			slidesPerGroup: 4,
			breakpoints: { 
				768: {
					slidesPerView: 2, 
					slidesPerGroup: 2,
				}, 
			 	992: {
					slidesPerView: 3, 
					slidesPerGroup: 3,
				}
			}, 
			speed: 750,
			spaceBetween: 0, 
			loop: true, 
			watchOverflow: true, 
			preloadImages: false, 
			lazy: true,
			lazy: {
				loadPrevNext: true,
			},
			navigation: {
				nextEl: $(this).parent().find('.swiper-button-next'),
			 prevEl: $(this).parent().find('.swiper-button-prev'),
		 },
		 
	 });
 })
 
	//  слайдр  бренды
	$(".s-brands__carusel--js").each(function () {

		// слайдер цвета в карточке
		var swiper5 = new Swiper($(this), {
			// slidesPerView: 5,
			
			slidesPerView: 6, 
			slidesPerGroup: 6,
			breakpoints: { 

				768: {
					slidesPerView: 3, 
					slidesPerGroup: 3,
				}, 
			 	992: {
					slidesPerView: 4,
					slidesPerGroup: 4, 
				}
			}, 
			speed: 750,
			spaceBetween: 0, 
			loop: true,
		  
			preloadImages: false, 
			lazy: true,
			lazy: {
				loadPrevNext: true,
			},
			navigation: {
				nextEl: $(this).parent().find('.swiper-button-next'),
			 prevEl: $(this).parent().find('.swiper-button-prev'),
		 },
		 
	 });
 })

//  слайдер в  карточке товара
$(' .prod-head__slider-big').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	speed: 450,
	asNavFor: '.prod-head__slider-small',
	infinite: false,
	loop: false,
	arrows: false,
 
});
$('.prod-head__slider-small').slick({
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
		asNavFor:  '.prod-head__slider-big',
		responsive: [

				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
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
 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

 
	 $('.popover-toggle').popover({
		trigger: 'hover',
		placement: "auto",
	})

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
