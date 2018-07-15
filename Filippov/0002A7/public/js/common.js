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
    mainClass: 'my-mfp-zoom-in',
		callbacks: {

	 close: function() {
		$(".form-wrap__prev-video iframe").remove();
	 }
	 // e.t.c.
 }
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

	  // анимации
	var wowAnim = $(".s-before__col," +
		".s-pick__col," +
		".s-condition__col");
	wowAnim.each(function (i) {

		wowAnim.eq(i).attr("data-wow-delay", i * .1 * 2 + "s");
		// $(this).addClass("wow bounceInUp");


	})
	var wow = new WOW({
		mobile: false
	});
	wow.init();
 

	skrollr.init({
		smoothScrolling: false,
		mobileDeceleration: 0.004
	});
});
