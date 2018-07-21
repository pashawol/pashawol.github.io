 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS

	// показать меню разширенного поиска
	$(".search-adv__btn--js").click(function () {
		$(".search-adv__btn--js").toggleClass("active").find(".search-adv__text").toggle(300);
		$(".search-adv__block--js").toggle(300);
		})
		
		// прилипает меню
	 $(".header--js").stick_in_parent();
										
	 $(".sidebar-profile").stick_in_parent({
		 offset_top: $(".header--js").height() + 30,
		 inner_scrolling: true,
		//  recalc_every: true,
	 });

	//  $(".sidebar-profile").stickyfloat('update', {
	//  	duration: 0,
	//  	stickToBottom: true
	//  });
	

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
    $(".hidden-mnu").fadeToggle().toggleClass("active");
    $("body, html").toggleClass("fixed");
    return false;
  });
     
		

	 $('.dropdown-toggle').dropdown({
		 boundary: 'window',
		//  display: 'static',
		 offset: '20',
		 placement: 'bottom'
	 })
	//  подбор высота для dropdown и  мобильного меню
		var 	h = $(window).height() - $(".header--js").height();
		function scrolldr() { 
			h = $(window).height() - $(".header--js").height();
			$(".dropdown__block").each(function () {
			$(this).find(".dropdown__body").css({"max-height": h - 104 });
		})
			$(".hidden-mnu").height(h);

		}
		
		// $(window).scroll(function () {
		// 	scrolldr();
		// })
		scrolldr();
		// scrolldr();

		$(".dropdown-toggle").click(function () { 
		$(this).next().find(".dropdown__body").css({
			"max-height": h - 104
		});
	})

  function heightses() { 
    var w = $(window).width(); 
    // скрывает моб меню
    if (w>991){
       $(".toggle-mnu-1").removeClass("on"); 
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    } 
  }

  $(window).resize(function() {
		heightses();
		scrolldr();

  });
 
 heightses();



// листалка по стр
 $(" .content__btn-top--js").click(function () {
    $('html, body').animate({ scrollTop:0 }, 1100);
    return false;
  });
 
// листалка по стр
 // $(" .top-nav a").click(function () {
 //        var elementClick = $(this).attr("href");
 //        var destination = $(elementClick).offset().top;

 //            $('html, body').animate({ scrollTop: destination }, 1100);

 //        return false;
 //    });

	// эффект при наведении на меню
	 $(function () { 
		 var $el, leftPos, newWidth,
			 $mainNav = $(".nav-js"); 
		 $mainNav.each(function () { 
			 var th = $(this);
			 th	.append("<li class='magic-line'></li>");
			 var $magicLine = th.find(".magic-line");

			$magicLine
				
				.width(th.find(" .active").width())
				.css("left", th.find(" .active a").position().left)
				.data("origLeft", $magicLine.position().left)
				.data("origWidth", $magicLine.width());
			$(window).resize(function () { 
				$magicLine 
					.width(th.find(" .active").width())
					.css("left", th.find(" .active a").position().left)
					.data("origLeft", $magicLine.position().left)
					.data("origWidth", $magicLine.width());
			})

			th.find(" li a").hover(function () {
				$el = $(this);
				leftPos = $el.position().left;
				newWidth = $el.parent().width();
				$magicLine.stop().animate({
					left: leftPos,
					width: newWidth
				});
			}, function () {
				$magicLine.stop().animate({
					left: $magicLine.data("origLeft"),
					width: $magicLine.data("origWidth")
				});
			});
		 })
	 });
	// / эффект при наведении на меню
	//  показать блоки для редактирования на  стр профиля
	$(".btn-toggle--js").click(function () {
		var par = $(this).parents(".block-parent--js");
		par.find(".btn-toggle--js").toggleClass("active");
		par.find(".status-block__body .row").toggleClass("align-items-center");
		par.find(".block-toggle").fadeToggle(150).toggleClass("show");
	})
	//  / показать блоки для редактирования на  стр профиля
	//  показать аккордион  стр профиля
	$(".accordion__title--js").click(function () {
		$(this).toggleClass("active").parents(".accordion")
		.find(".accordion__block--js").slideToggle()
		setTimeout(function () {
					$(this).find(".accordion__block--js").toggleClass("active");
					}, 10);
	})
	// / показать аккордион  стр профиля


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



 var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.4-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);
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

// слайдер цвета в карточке
 var swiper4 = new Swiper('.color-slider', {
      // slidesPerView: 5,
      slidesPerView: 'auto',
      watchOverflow: true,
      spaceBetween: 0,
      freeMode: true,
      slidesPerGroup: 3,
       // centeredSlides: true,
      loop: true,
      loopFillGroupWithBlank: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
       freeModeMomentum: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

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
       name.text("не  загружено").text(filename);

    });
  // или
   // $(".dropzone").dropzone({
   //  url: "/file/post",
   //  addRemoveLinks: true,
   //      acceptedFiles: 'image/*',
   //      uploadMultiple: true,
   //   });


 

// var wowAnim = $(".s-dop__col," +
//                 ".s-pick__col," +
//                 ".s-condition__col");
// wowAnim.each(function(i){

// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

//    var wow = new WOW({ mobile: false });
//         wow.init();

// });


});
