 jQuery(document).ready(function($) { 


  // для свг
  svg4everybody({});
  // Custom JS
 
      // галерея
  $(" .gal").each(function(){
    
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
    $("body").toggleClass("fixed");
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
      $("body").removeClass("fixed");
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
 $("  .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
				var destination = $(elementClick).offset().top;
					 
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

 
// листалка по стр
 $(" .top-nav ul a").click(function () {
        var elementClick = $(this).attr("href");
				var destination = $(elementClick).offset().top;
						$(".top-nav ul a").removeClass("active")
						$(this).addClass("active");
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

 

	 var icon = '<svg class="icon icon-arr-r">  <use xlink:href="img/svg/sprite.svg#chevron-right"></use>  </svg>';

var   arrl2 = (' <div class="l">'+ icon),
      arrr2 =(' <div class="r">'+ icon);  
 
 
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
 
// accordion
  $(".showhide").click(function() {


     $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"), 
     $(this).next("div").filter(function() {
            return "block" == $(this).css("display") }).slideUp().parent().removeClass("active"),
             $(this).next("div").filter(function() {
            return "none" == $(this).css("display") }).slideDown().prev("div").addClass("active").parent().addClass("active")})
 

 

// табы на ajax
var containerId1 = '.mytabs-container1';
var tabsId1 = '.mytabs1';

 
  $(".main-tabs__content").each(function(){
    var th = $(this);

    // Preload tab on page load

    if(th.find(tabsId1 + ' .current A').length > 0){
      loadTab1(th.find(tabsId1 + ' .current A'));
    }
    
      th.find(tabsId1 + ' A').click(function(){
        if($(this).parent().hasClass('current')){ return false; }
        
        th.find(tabsId1 + ' .current').removeClass('current');
        $(this).parent().addClass('current');
        
        loadTab1($(this));     
          return false;
      });
    function loadTab1(tabObj1){
        if(!th.find(tabObj1) || !th.find(tabObj1).length){ return; }
        th.find(containerId1).addClass('loading');
        th.find(containerId1).hide();
        
        th.find(containerId1).load(tabObj1.attr('href'), function(){
            th.find(containerId1).removeClass('loading');
            th.find(containerId1).fadeIn();

    // галерея
    
      $(".tab__slider2, .tab__slide-slider ").find("img").each(function(){
      
        $(this).parent().addClass("gal-link").attr("href", "dop/" + $(this).attr("data-lazy"))
        // .wrap('<a href="dop/'+$(this).attr("data-lazy")+'">')
      })
   
      $(".tab__slider2 , .tab__slide-slider ").each(function(){
        
      $(this).find(".gal-link").magnificPopup({
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

         // листалка по стр
 $("  .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });
 $(".s-indr .btn").each(function(){
  var th = $(this);
  th.click(function(){
    $("#modal .h2").text("УТОЧНИТЬ ЦЕНУ");
    $("#modal .order").val("Уточнить цену");
    $("#modal .btn").val("Уточнить цену");

    $("#modal .type  ").val(th.parents(".main-tabs__content").find(".current a").text());
    $(" #modal .meb ").val(th.prev().text());
  })
})
			



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
   

       th.find('.tab__slider1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            speed: 450,
            infinite: true,
            loop: true,  
            arrows: true, 
             prevArrow: arrl2,
							nextArrow: arrr2,
							 adaptiveHeight: true
						});
					th.find('.tab__slider2').slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						speed: 450,
						infinite: true,
						loop: true,
						arrows: true,
						prevArrow: arrl2,
						nextArrow: arrr2,
						adaptiveHeight: true,
					});

        
        th.find('.tab__slide-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450,
            infinite: true,
            loop: true,  
            arrows: true, 
             prevArrow: arrl2,
							nextArrow: arrr2,
							 adaptiveHeight: true,
				 
            });


        th.find('.tab__slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 450,
            infinite: true,
						loop: true,  
            arrows: false, 
            draggable: false,
						swipe: false,
						adaptiveHeight: true,
						asNavFor:  th.find('.tab__slider-small'),
						responsive: [
							
							{
								breakpoint: 991,
								settings: {
									draggable: true,
									swipe: true,
									arrows: true,
									prevArrow: arrl2,
									nextArrow: arrr2,
							
							}

						} 
					]
            });

        th.find('.tab__slider-small').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            dots: false,
            speed: 450,
            infinite: true,
            loop: true,  
            arrows: false, 
            focusOnSelect: true,
             prevArrow: arrl2,
              nextArrow: arrr2,
              asNavFor: th.find('.tab__slider-big'),
             
            });


        var $gallery = $('.tab__slider1,  .tab__slider-small ')
         $gallery.on('lazyLoaded', function(event, slick, image, imageSource){
             image.parent().css('background-image', 'url(' + image.attr('src') + ')');
         });
      });
    }
		
  });
	
	$('.main-tabs').on('click', '.toggle-l', function () {
		$(this).parent().next().slideToggle()
		 return false;

	})

  $('.s-sert__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,  
     prevArrow: arrl2,
      nextArrow: arrr2 ,
     responsive: [
     
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
						});
					

  $('.s-rew__slider, .contact__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,  
    arrows: true,  
     prevArrow: arrl2,
      nextArrow: arrr2 ,
      adaptiveHeight: true
    });


 $('.contact__slider').on('lazyLoaded', function(event, slick, image, imageSource){
             image.parent().css('background-image', 'url(' + image.attr('src') + ')');
         });
     
  // включение видео   
  $(".pretty-embed__bg").each(function(){ 
   $(this).click(function(){
    $(this).removeClass("on").next()
    .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src")+'?autoplay=1&amp;rel=0').addClass("on");
   })
   })


   $(".footer__btn").click(function(){
    $("#modal .h2").text("ЗАКАЗ КОНСУЛЬТАЦИИ");
     $("#modal .order").val("Заказ консультации в подвале сайта");
      $("#modal .btn").val("Заказать консультацию");
     $("#modal .type, #modal .meb ").val("");
  })
$(".cost-content-l input").on("input, change" , function(){
  var th = $(this);
  if (th.attr("id") == 'top'){
    $("#inp_secl_t").val(th.val() + "см");
  }
  

})


   $(".header-block__inner .order").val("Заявка в шапке")
   $(".s-needs .order").val("Заявка в блоке потребностей")
   $(".s-form .order").val("Заявка в блоке вызова замерщика")
   $(".s-calc .order").val("Заявка с калькулятора")
   $(".s-accord .order").val("Заявка с FAQ")
   $("#modal-big .order").val('Заявка  c " У ВАС РЕМОНТ?"' )



    // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function() {
      //     $.magnificPopup.close();
      //        $.magnificPopup.open({
      //   items: {
      //     src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
      //     type: 'inline'
      //   }
      // })
        window.location.replace("/thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
	});
	
	  
	$('.s-why__row ').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		responsive: [

			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2
				}
			},
			
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1
				}
			}, 
		]
	});
	
	$('.s-ind__row ').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		responsive: [

			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2
				}
			},
			
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1
				}
			}, 
		]
	});
	
	$(' .s-video__row').slick({
		slidesToShow: 109,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: false,
		loop: false,
		arrows: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		responsive: [

			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 1
				}
			}  
		]
	});
	$(' .s-client__row').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: false,
		loop: false,
		arrows: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		responsive: [

			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 2
				}
			} ,
			 
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 1
				}
			} ,

		]
	});


});

