$(function() {

	 
 // ценник в карточках
 $(".prod__item .currency__price").each(function(){
  var th = $(this)
  th.text(th.parents(".prod__item").find(".currency__item.active").data("bit"));
 })
 $(".prod__item .currency__item").click(function(){
  var th = $(this);
  var par = th.parents(".prod__item");
  par.find(" .currency__item").removeClass("active");
  th.addClass("active");
  par.find(" .currency__price").text(th.data("bit"));
 })


  $('.prod .sliders').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      speed: 300,
      // initialSlide: 6,
      infinite: false,
      loop: false,  
      arrows: true,
      // rtl: true,
      useTransform: false,
       prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
      nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
          responsive: [
        
       
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
             variableWidth: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
 
 {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
             variableWidth: false
          }
        }
 

      ]
    });


// листалка по стр
 $("header .btn").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

 
function heightses() {
    var w = $(window).width();
    
    
    
    var topH=$(".top_line  ").height();
  if($(this).scrollTop()>topH){
                  $('.top_line  ').addClass('fixed');
                  
              }
              else if ($(this).scrollTop()<topH){
                  $('.top_line  ').removeClass('fixed');
                 
              }
  $(window).scroll(function(){
              if($(this).scrollTop()>topH){
                  $('.top_line  ').addClass('fixed');
               
              }
              else if ($(this).scrollTop()<topH){
                  $('.top_line  ').removeClass('fixed');
                
              }
          });
      
  }
  $(window).resize(function() {
    heightses();
  });

  $( window ).on( "load", function() {
 heightses();
})

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
    

      $('.prod__btn').each(function(){
        var th = $(this),
            th2= th.parents(".prod__item");
        th.attr("href","#small-dialog")
        .click(function(){
            // ценник в модалке
          $(".modal-form ").each(function(){
              $(this).find(".currency__price").val(th2.find(".currency__item.active").data("bit")).text(th2.find(".currency__item.active").data("bit"));
              $(this).find(".currency__item:nth-child(1)").data("bit",th2.find(".currency__item:nth-child(1)").data("bit"))
              $(this).find(".currency__item:nth-child(2)").data("bit",th2.find(".currency__item:nth-child(2)").data("bit"))
              $(this).find(".currency__item:nth-child(3)").data("bit",th2.find(".currency__item:nth-child(3)").data("bit"))
             })
          
        })

        th.magnificPopup({
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


      })
     // ценник в модалке
 
 $(".currency__item").click(function(){
  var th = $(this);
  var par = th.parents(".modal-form");
  par.find(".currency__item").removeClass("active");
  th.addClass("active");
  par.find(".currency__price").val(th.data("bit")).text(th.data("bit"));
 })


});
