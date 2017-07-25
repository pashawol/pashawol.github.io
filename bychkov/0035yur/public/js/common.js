$(function() {

	// Custom JS
	function heightses() {

   
   // $(".otz__item .text-wrap ").height('auto').equalHeights();
   $(".problem").height('auto').equalHeights();
   $(".when__item").height('auto').equalHeights();
    
  }

  $(window).resize(function() {
    heightses();
   
  });
$( window ).on( "load", function() {
 heightses();

})

 heightses();



// листалка по стр
 $(" .link__map").click(function () {
        var elementClick = $(".map");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });


  $(".vyb__open").click(function(){
      var th = $(this);
      $(".vyb__close").hide();
      $(".vyb__hidden").slideUp();
      $(".vyb__open").show();
      $(".vyb__item-wrap").removeClass("open");
      th.prev().slideDown().prev().show();
      th.parents(".vyb__item-wrap").addClass("open");
      th.hide();
  })
  
  $(".vyb__close").click(function(){
      var th = $(this);
      $(".vyb__item-wrap").removeClass("open");
      th.next().slideUp().next().show();
      th.hide();
  })



  $(".hidd").click(function(){
      
      var th = $(this);
      var par= th.parents(".our__item")
     
            $(".our__item ul").slideUp(); 
            $(".open").removeClass("hidden");
            $(".our__open").removeClass("active__open");
            $(".close").addClass("hidden");
          
      
      if(par.find("ul").is(":visible") ==true){
            $(".our__item ul").slideUp(); 
            $(".open").removeClass("hidden");
            $(".our__open").removeClass("active__open");
            $(".close").addClass("hidden");
          
      }

      else{
            par.find("ul").slideDown();
      
            th.removeClass("hidd");
            th.find(".open").addClass("hidden");
            th.find(".close").removeClass("hidden");
            th.addClass("active__open");
          }
  })
  

 

  $('section.otz .row.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    speed: 900,
    infinite: false,
    loop: false,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
    nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
        responsive: [
      
     
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        
        }
      }
    ]
  });

  $(".header__btn").each(function(event){
    $(this).attr("href", "#small-dialog");
    // event.preventDefault();
    return false;

  })
   // модалка
   $('.header__btn, .btn-modal').magnificPopup({
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


  $("section").each(function(){
    $(this).find(".gal__row  ").magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          // verticalFit: true,
          
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
           
        }
        
      });

  }) 

  // переход в форме на стр dispute
  $(".form-debt__wrap .custom-label__input").click(function(){
    $(".custom-label").removeClass("active");
    var th= $(this);
    th.parents(".form-debt__wrap").find(".form-debt__btn.disabled")
    .removeClass("disabled");
    th.parent().addClass("active");
  })
  $(".form-debt__btn.next").click(function(e){
    var th= $(this);
    th.parents(".form-debt__item.form-debt__item-active").removeClass("form-debt__item-active").next("").fadeIn();
    return false;
  })
// маска на инпут
    $("input[type='tel']").inputmask("+7(999)999-99-99").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
    
   
});
