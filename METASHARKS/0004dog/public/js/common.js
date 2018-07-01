 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS

  $(".filter-toggle--js").click(function () {
		$(".bx-filter").slideToggle();
	})
 $('.bx-breadcrumb').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 600,
		slidesToShow: 1,
		centerMode: false,
		variableWidth: true,
 });

});
