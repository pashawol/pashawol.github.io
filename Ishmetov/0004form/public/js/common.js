jQuery(document).ready(function ($) {

	// для свг
	// svg4everybody({});
	// Custom JS
       

	$(window).on("load",function(){
		$(".form-wrap__text-block").mCustomScrollbar({
			// theme:"light-thick"
		});
});
 
	// $(".js-form-validate").parsley();
	var $sections = $('.tabs__content');
	function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter('.active'));
  }
	$(".btn-tab-next").click(function(){
		var th = $(this); 
		$('.js-form-validate').parsley().validate({
			group: 'block-' + curIndex()
		});
	 
		 if (!th.parents('.tabs__content').find(".form-control").hasClass("parsley-error")) {
		 	th.parents('.tabs__content').hide().removeClass('active')
			.next().fadeIn().addClass('active');
		}
	 
		})

		$(".btn-tab-prev").click(function(){
			$('.tabs__content').hide().removeClass('active')
			.eq("0").fadeIn().addClass('active');
		})
		
	// для плаваюещего label
	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');

	$('input, textarea').keyup(function () {
		if ($(this).val().trim() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
	});


	// форма
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			$.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			})
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
			}, 4000);
		});
		return false;
	});

	// маска на инпут
	// $("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
	// 	"mask": "+7(999)999-99-99"
	// });

 


});
