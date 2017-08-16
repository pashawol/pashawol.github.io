
var ui = {

  headerScroll: function() {
    $('.header-scroll .search .btn').click(function(e){
      $(this).closest('.search').addClass('open');
      e.preventDefault();
    });
    $(document).click( function(event){
      if( $(event.target).closest(".header-scroll .search").length )
        return;
        $(".header-scroll .search").removeClass('open');;
      event.stopPropagation();
    });
  },

  footerEmpty: function() {
    $('.footer-empty').height($('footer').outerHeight());
  },

  mainBanner: function() {
    if ($('.main-banner').length>0) {
      $('.main-banner').slick({
        dots: false,
        infinite: true,
      });
    }
  },

  popup: function() {
    $('.video-container .video-block .video-lnk').magnificPopup({
      type: 'iframe'
      // other options
    });
    $('.callback-btn').magnificPopup({
        type: 'inline'
    });
  },

  companyFigures: function() {
    if ( $('.company-figures').length>0 && $(window).width() < 480 ) {
      $('.company-figures .list').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
          ]
      });
    }
  },

  animNumber: function() {

    if ( $('.company-figures .num').length>0) {
      $('.company-figures .num').each(function(){
        var num = $(this).data('num');
        var speed = $(this).data('speed');
        if ($(window).scrollTop() +$(window).height() - $(window).height()/10 >$(this).offset().top && !$(this).hasClass('active')) {
          $(this).addClass('active').animateNumber({ number: num },speed);
        }
      });
    }
  },

  mobileNav: function() {
    $('header .header-mobile .btn-nav').click(function(e){
      $(this).toggleClass('active');
      $('.header-scroll').stop().slideToggle();
      e.preventDefault();
    });
  },

  videoMore: function() {
    $('.video-container .lnk-more a').click(function(e){
      $(this).toggleClass('active');
      $('.video-container .video-list .right').stop().slideToggle();
      if ($(this).hasClass('active')) {
        $(this).text('Свернуть')
      } else {
        $(this).text('Показать еще')
      }
      e.preventDefault();
    });
  },

  mainInit: function () {
    this.footerEmpty();
    this.mainBanner();
    this.animNumber();
    this.mobileNav();
    this.companyFigures();
    this.popup();
    this.videoMore();
    this.headerScroll();
  }
};
$(document).ready(function(){
  ui.mainInit();
}); // end document.ready


$(window).load(function() {


}); // end window.load


$(window).resize(function(){
  ui.footerEmpty();
}); // end window.resize

$(window).scroll(function () {
  ui.animNumber();
}); // end window.scroll
