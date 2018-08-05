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
    // скрывает моб меню
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
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

  $(window).resize(function() {
    heightses();

  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 $(".footer li a, .top-nav li a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

				$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
});
 
 // маска на инпут
  //  $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});


       //Replace all SVG images with inline SVG
       $('img.img-svg').each(function () {
       	var $img = $(this);
       	var imgClass = $img.attr('class');
       	var imgURL = $img.attr('src');

       	$.get(imgURL, function (data) {
       		// Get the SVG tag, ignore the rest
       		var $svg = $(data).find('svg');

       		// Add replaced image's classes to the new SVG
       		if (typeof imgClass !== 'undefined') {
       			$svg = $svg.attr('class', imgClass + ' replaced-svg');
       		}

       		// Remove any invalid XML tags as per http://validator.w3.org
       		$svg = $svg.removeAttr('xmlns:a');

       		// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
       		if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
       			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
       		}


       		// Replace image with new SVG
       		$img.replaceWith($svg);

       	}, 'xml');

       });


});
