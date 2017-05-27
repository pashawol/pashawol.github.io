$(function() {

	$('.main').fullpage({
		// showActiveTooltip: true,
		// slidesNavigation: true,
		// responsiveWidth: 1,
		// responsiveHeight: 1,
		// responsiveSlides: true, 
		// // scrollBar: true,
		// loopBottom: false,
		// loopTop: false,
		// loopHorizontal: true,
		// continuousVertical: true,
		// continuousHorizontal: true,
		// scrollHorizontally: true,
		// interlockedSlides: true,
		// dragAndMove: true,
		// offsetSections: true,
		// // resetSliders: true,
		// // fadingEffect: true,
		// // scrollOverflow: true,
		// scrollOverflowReset: true,
		// scrollOverflowOptions: null,
		// touchSensitivity: 15,
		// // normalScrollElementTouchThreshold: 5,
		// bigSectionsDestination: null,
		// controlArrows: true,
		// verticalCentered: true,
		// // responsiveSlides: true,
		
navigation:true,
slidesNavigation:true,

navigationPosition:'right',

slidesNavPosition:'top',
responsiveWidth:767,
responsiveHeight: 630,
	});
//  var SECTION_DEFAULT_SEL = '.section';
// var SECTION = 'fp-section';
// var SECTION_SEL = '.' + SECTION;
// var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
// var SECTION_FIRST_SEL = SECTION_SEL + ':first';
// var SECTION_LAST_SEL = SECTION_SEL + ':last';
// var TABLE_CELL = 'fp-tableCell';
// var TABLE_CELL_SEL = '.' + TABLE_CELL;
// var AUTO_HEIGHT = 'fp-auto-height';
// var AUTO_HEIGHT_SEL = '.fp-auto-height';
$(".link-wrap a").attr("href", ".block-form")
$(".link-wrap a").click(function(){
	 var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
    $("#fp-nav li:last-child a").click();    
        return false; 
})


$(window).on('load', function() {
  $('.preloader').delay(2000).fadeOut('slow');

 
});

});
