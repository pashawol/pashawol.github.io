$(function() {

$(".filter-item").each(function(){

    var minn = parseInt($(this).find('.minus').val());
    var maxx = parseInt($(this).find('.plus').val());
$(this).find( ".slider-range" ).slider({
      range: true,
      min: minn,
      max: maxx,
      values: [ minn, maxx ],
      slide: function( event, ui ) {
        
       $(this).parents(".filter-item").find('.minus').val(  ui.values[ 0 ] );
        $(this).parents(".filter-item").find('.plus').val(  ui.values[ 1 ] );
      }
    });
     $(this).find('.minus').val(    $(this).find( ".slider-range" ).slider( "values", 0 )   );
     $(this).find('.plus').val(     $(this).find( ".slider-range" ).slider( "values", 1 )   );
 
});

$('.carusel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 900,
    infinite: true,  
    arrows: false,
    focusOnSelect: true,
   useTransform:false,
     // prevArrow: ' <div class="l"><i class="demo-icon  icon-arr-l"> </i></div>',
    // nextArrow: '   <div class="r"><i class="demo-icon icon-arr-r"> </i></div> ',
      responsive: [
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
         
        }
      } 
    ]
  });
$('.otz__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 900,
    infinite: true,  
    arrows: true,
     prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
    nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
 
  });
$('.otz p').readmore({
  speed: 75,
  moreLink: '<a href="#" class="more">Читать отзыв полностью</a>',
  lessLink: '<a href="#" class="more">Скрыть</a>',
  speed: 300,
  maxHeight: 77,
});

$('.patner__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 900,
    infinite: true,  
    // arrows: false,
    focusOnSelect: true,
   arrows: true,
     prevArrow: ' <div class="l"><i class="fa fa-angle-left" aria-hidden="true"> </i></div>',
    nextArrow: '   <div class="r"><i class="fa fa-angle-right" aria-hidden="true"> </i></div> ',
      responsive: [
      
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
         
        }
      } 
    ]
  });
});
