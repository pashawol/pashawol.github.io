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
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$("header ").height();

    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('header .top-nav  ').addClass('fixed');
                }
                else  {
                    $('header .top-nav  ').removeClass('fixed');
                }
            });
       // конец добавил
	}
		// показать строку поиска
		$(".top-nav__btn--search-js, .search-top .icon-close ").click(function () {
			$(".search-top").slideToggle()
		})
		$('.trop, .aside').find(".dropdown > a , .drop-inner > a , .drop-sub-inner > a ").each(function () {
			var th = $(this);
			th.click(function () {
				th.toggleClass('active').next().slideToggle();
				th.parent().toggleClass('active');
			})
		})

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

  
 

  // кастомный селект
 $('.custom-select').select2();


//  инпут слайдер
  $(".input-range").each(function () {
		let 
				th = $(this),
				minV = th.data("min"),
				maxV = th.data("max"),
				rez = th.parents(".form-wrap__range-wrap").find(".result-js");
  
		th.ionRangeSlider({
				min: minV,
				max: maxV,
		});

		th.on("change", function () {
			var	from = th.data("from");
			rez.val(from);
		});
		rez.on("change", function () {
			from = rez.val();
		})
  })
});
