$(function() {

	 
 // ценник в карточках
 $(".prod__price").each(function(){
  var th = $(this)
  th.text(th.parents(".prod__item").find(".prod__currency-item.active").data("bit"));
 })
 $(".prod__currency-item").click(function(){
  var th = $(this);
  var par = th.parents(".prod__item");
  par.find(".prod__currency-item").removeClass("active");
  th.addClass("active");
  par.find(".prod__price").text(th.data("bit"));
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
});
