$(function() {

	// Custom JS
	function heightses() {

   
   $(".otz__item .text-wrap ").height('auto').equalHeights();
    
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();


// мобильное меню
   var toggMnu = $(".toggle-mnu-1").click(function () {
    
    $(this).toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").slideToggle();
    return false;
  }); 
    $('.hidden-mnu ul li a').on('click', function () {
      $(".toggle-mnu-1").click();
    });

    
     // модалка
  $(".btn-modal").each(function(){
    $(this).attr("href", "#small-dialog")
    // $(this).click(function(){
    //   var th = $(".modal-form");
    //   th.find(".order").val($(this).data("order"));
    //   // th.find("p").text($(this).data("p"));
    // })
  })

  // $(".aside__item-have").click(function(){
  //      $(".aside__item-have").removeClass("active");

  // })

  // выпадающее меню
$(' .aside__item-have  ').on('click', function(){
        // $(this).removeAttr('href');
        var element = $(this);
        if (element.hasClass('active')) {
            element.find('ul').slideUp();
            element.removeClass('active');
        }
        else {
            element.children('ul').slideDown(); 
            element.addClass('active');
            element.siblings('li').find('ul').slideUp();
            element.siblings('li').removeClass('active'); 
        }
    });


  $('.content__slider').slick({  
      speed: 600,
      slidesToShow: 1,
      // adaptiveHeight: true,
      // vertical: true,
      arrows: false,
      // draggable: false,
      // prevArrow: ' <div><i class="demo-icon icon-angle-up"> </i></div>',
      // nextArrow: '   <div><i class="demo-icon icon-angle-down"> </i></div> ',
      // fade: true,
      dots:true,
      // adaptiveHeight: true
      // centerMode: true,
    });
    $(".aside__mobile-catalog").click(function(){
      $(this).toggleClass("active")
      .next().slideToggle();
    })
  // маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
});
