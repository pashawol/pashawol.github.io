$(function() {

	// табы
$(function() {
$(' .tabs__caption   .tab-btn:first-child ').addClass("active"); 
$('  div.tabs__content:first-child  ').addClass("active");
  $(' .tabs__caption').on('click', '.tab-btn:not(.active)', function() {

    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
      // $('.slider-small, .slider-big').slick('unslick');
      //  section_slider();
});
});

});
