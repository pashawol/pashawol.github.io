 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS
$('[data-toggle="popover"]').popover({
	html: true,
})
 
		
		// прилипает меню
	 $(".header--js").stick_in_parent();
										
	 $(".sidebar-profile, .sidebar-js").stick_in_parent({
		 offset_top: $(".header--js").height() + 30,
		 inner_scrolling: true,
		//  recalc_every: true,
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
			$(".hidden-mnu").height($(window).height()).find(".wrapp-hidden").css("padding-bottom", $(window).height() - h);

		}
		
		$(window).scroll(function () {
			scrolldr();
		})
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
  
	// эффект при наведении на меню
	 $(function () { 
		 var $el, leftPos, newWidth,
			 $mainNav = $(".nav-js"); 
		 $mainNav.each(function () { 
			 var th = $(this);
			 th	.append("<li class='magic-line'></li>");
			 var $magicLine = th.find(".magic-line");

			$magicLine
				
				.width(th.find(" .active a").width())
				.css("left", th.find(" .active a").position().left)
				.data("origLeft", $magicLine.position().left)
				.data("origWidth", $magicLine.width());
			$(window).resize(function () { 
				$magicLine 
					.width(th.find(" .active a").width())
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
	$(".btn-toggle--js").click(function (e) {
		var par = $(this).parents(".block-parent--js");
		par.find(".btn-toggle--js").toggleClass("active");
		par.find(".status-block__body .row").toggleClass("align-items-center");
		par.find(".block-toggle").fadeToggle(150).toggleClass("show");
		return false;
	})
	//  / показать блоки для редактирования на  стр профиля
	//  показать аккордион  стр профиля
	$(".accordion__title--js").click(function () {
		$(this).toggleClass("active").parent()
		.find(".accordion__block--js").slideToggle()
		setTimeout(function () {
					$(this).find(".accordion__block--js").toggleClass("active");
					}, 10);
	})
	
	$(".accordion__title-filter--js").click(function () {
		$(this).toggleClass("active").parent()
		.find(".accordion__block-filter--js").slideToggle()
	 
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

 

 // маска на инпут
	 $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});
	// маска на дату
	 $("input.date-input").attr("pattern", "[0-3]{1}[0-9]{1}\.[0-1]{1}[0-9]{1}\.[1-2]{1}[0-9]{3}")
	 .inputmask({"mask": "99.99.9999"});

 
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
 
// это не полная функция только для демонстрации работы проверки полей
 window.addEventListener('load', function () {
 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
 	var forms = document.getElementsByClassName('needs-validation');
 	// Loop over them and prevent submission
 	var validation = Array.prototype.filter.call(forms, function (form) {
 		form.addEventListener('submit', function (event) {
 			if (form.checkValidity() === false) {
 				event.preventDefault();
 				event.stopPropagation();
 			}
 			form.classList.add('was-validated');
 		}, false);
 	});
 }, false);

//  .datepicker
  $('.datepicker-date').datepicker({
  	locale: 'ru-ru',
  	uiLibrary: 'bootstrap4',
  	format: 'dd.mm.yyyy',

	});
	$(".label-date-picker-js  input").click(function () {
		$(this).next().click();
	})
	//  показать выбор даты на стр приглашения
	$(".input-radio-invite__input").click(function () {
 
		var checked =   document.querySelector('.input-radio-invite__input.time');
		
		if (checked.checked) {
			$(".content__block-time").slideToggle();
		} 
		else {
			$(".content__block-time").slideToggle(); 
		}
	})

});

//  для инпута пароля
 
 function myFunction1() {
	 var x = document.getElementById("password-field-1");
	  var passStatus = document.getElementById('pass-status-1');
 	if (x.type === "password") {
		 x.type = "text";
		 passStatus.className='pass-status-pass';
 	} else {
		 x.type = "password";
		 passStatus.className='pass-status-text';
 	}
 }
 function myFunction2() {
	 var x = document.getElementById("password-field-2");
	  var passStatus = document.getElementById('pass-status-2');
 	if (x.type === "password") {
		 x.type = "text";
		 passStatus.className='pass-status-pass';
 	} else {
		 x.type = "password";
		 passStatus.className='pass-status-text';
 	}
 }
 function myFunction3() {
	 var x = document.getElementById("password-field-3");
	  var passStatus = document.getElementById('pass-status-3');
 	if (x.type === "password") {
		 x.type = "text";
		 passStatus.className='pass-status-pass';
 	} else {
		 x.type = "password";
		 passStatus.className='pass-status-text';
 	}
 }
