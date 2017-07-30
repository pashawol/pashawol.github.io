$(function() {

	// Custom JS
function plitki() {
  var $container = $(".contant .row");
  $container.imagesLoaded(function () {
    $container.masonry({
      columnWidth: ".col-sm-5",
      itemSelector: ".col"
    });
// растягивать картинки на размер блока
    $(".img-pl").imagefill();
  });
};
plitki();
// растягивать картинки на размер блока
 $_image_w = $(' .img-bg ')
$_image_w.imagesLoaded( function() {
  $_image_w.imagefill(); 
});

});
