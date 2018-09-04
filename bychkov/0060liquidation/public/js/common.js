 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS
  
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
 $(" .top-nav a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

				$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
});

 

			// слайдер цвета в карточке
			var swiper5 = new Swiper('.s-gal__slider--js', {
				// slidesPerView: 1, 
				spaceBetween: 0, 
				// initialSlide: 2,
				watchOverflow: true, 
				loop: true,
				speed: 600, 
				preloadImages: false, 
				lazy: true,
				loadPrevNext: true,
				navigation: {
					nextEl: ('.swiper-button-next'),
				 prevEl: ('.swiper-button-prev'),
			 },
			 autoplay: {
				delay: 5000,
			},
			});
			var counter = $('.swiper-counter'); 
			counter.text('01'); 
			swiper5.on('slideChange', function () {
				var index = swiper5.realIndex +1 ;
				counter.text('0' + index);
		
		});
		
 
  $('[data-target="#modal-win"]').click(function () {
			$("#thanks .h4").text($(this).data("tt"));
			$("#thanks p").text($(this).data('pt'));
			
			$("#modal-win .h4").text($(this).data("title"));
			$("#modal-win p").text($(this).data('par'));

			$("#modal-win .btn").text($(this).data('btn')).removeClass("btn-primary").removeClass("btn-danger").addClass($(this).data('btnclass'));
			$("#modal-win .order").val($(this).data('order'));
	  })

 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function() {
			$('#modal-win').modal('hide');
			$('	#thanks').modal('show'); 
       setTimeout(function() { 
        th.trigger("reset"); 
      }, 4000);
    });
    return false;
  });

 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

 

	 document.ondragstart = noselect; 
	 // запрет на перетаскивание 
	 document.onselectstart = noselect; 
	 // запрет на выделение элементов страницы 
	 document.oncontextmenu = noselect; 
	 // запрет на выведение контекстного меню 
	 function noselect() {return false;} 
});

 