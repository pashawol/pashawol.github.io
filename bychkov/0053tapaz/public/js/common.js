 jQuery(document).ready(function($) {

  // Custom JS

  svg4everybody({});

    $(".s-main__btn-wrap-js").each(function() {
        var ch = $(this).children();
					// добавил
					if  (ch.length > 2 ) {
						ch.find(".btn").addClass("btn-sm");

					}
          if  (ch.length == 3) {
             ch.find(".btn").addClass("btn-3");

             }
          // добавил
          if  (ch.length <= 3) {
             ch.removeClass(" col-4").removeClass(" col-6").addClass(" col-12");

             }
        else if  (ch.length <= 6) {
             ch.removeClass(" col-4").removeClass(" col-12").addClass(" col-6");

             }
          else  {
               ch.removeClass(" col-6").removeClass(" col-12").addClass(" col-4");
          }
    });
    $(".s-colors__btn-wrap-js").each(function() {
        var ch = $(this).children();
         if  (ch.length > 2) {
              ch.find(".btn").removeClass("btn-lg");


           }
           if  (ch.length > 3) {
              ch.removeClass("col-12").addClass("col-6");

           }

          if  (ch.length >= 4) {
             ch.filter(":odd").find(".btn").addClass("btn-right");

             }

             if  ( ch.length  == 2) {
                ch.find(".btn").addClass("btn-2-2");

             }
             if  ( ch.length  == 3) {
                ch.find(".btn").addClass("btn-3-3");

             }

          if  ( ch.length  == 4) {
                ch.find(".btn").addClass("btn-4-4");

             }
          if  (ch.length >= 5) {
                ch.find(".btn").addClass("btn-5-6");

             }

    });

    // модальное окно
   $('.popup-with-move-anim').magnificPopup({
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


	function heightses() {
	 $(".section .btn ").height('auto').equalHeights();
	}
	$(window).resize(function() {
		heightses();
	});

	$( window ).on( "load", function() {
	 heightses();

	})
 heightses();

// клавиатура
var kv =	$('#keyboard').keyboard({
		// openOn: null,
			stayOpen: true,
				alwaysOpen: true,
					layout: 'custom',
						openOn: null,
						stayOpen: true,
						// 		// layout: 'qwerty'
						display: {
							'bksp': '\u2190',
							'enter': 'return',
							'normal': 'ABC',
							'meta1': '.?123',
							'meta2': '#+=',
							'accept': '\u21d3'
						},

						layout: 'custom',
						customLayout: {
							'normal': [
								'q w e r t y u i o p {bksp}',
								'a s d f g h j k l {enter}',
								'{s} z x c v b n m @ . {s}',
								'{meta1} {space} _ - '
							],
							'shift': [
								'Q W E R T Y U I O P {bksp}',
								'A S D F G H J K L {enter}',
								'{s} Z X C V B N M @ . {s}',
								'{meta1} {space} _ - '
							],
							'meta1': [
								'1 2 3 4 5 6 7 8 9 0 {bksp}',
								'` | { } % ^ * / \' {enter}',
								'{meta2} $ & ~ # = + . {meta2}',
								'{normal} {space} ! ? '
							],
							'meta2': [
								'[ ] { } \u2039 \u203a ^ * " , {bksp}',
								'\\ | / &lt; &gt; $ \u00a3 \u00a5 \u2022 {enter}',
								'{meta1} \u20ac & ~ # = + . {meta1}',
								'{normal} {space} ! ? '
							]
						},


						css: {
							// input & preview
					 
							container: 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix ui-tel-mail',
					
					 
						},
			// layout: 'qwerty'
	})
	// // .addTyping()
	// ;

	// Typing Extension
	$('.btn-mail').click(function () {
	 kv;
		var kb = $('#keyboard').getkeyboard();
			if (kb.isOpen) {
				kb.close();
			} else {
				kb.reveal();
			}
			kb.reveal()
	// kb.reveal()
	 
	});
	
	$('.btn-tel').click(function () {
	var kb = 	$('#keyboard').getkeyboard();
		if (kb.isOpen) {
			kb.close();
		} else {
			kb.reveal();
		}
	kb.reveal()
	});




	$('#password')
		.keyboard({
			openOn: null,
			stayOpen: true,
			layout: 'qwerty'
		})
		// .addTyping()
		;

	$('#password-opener').click(function () {
		var kb = $('#password').getkeyboard();
		// close the keyboard if the keyboard is visible and the button is clicked a second time
		if (kb.isOpen) {
			kb.close();
		} else {
			kb.reveal();
		}
	});

});
