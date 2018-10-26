jQuery(document).ready(function ($) {

	// для свг
	// svg4everybody({});
	// Custom JS
       

	$(window).on("load",function(){
		$(".form-wrap__text-block").mCustomScrollbar({
			// theme:"light-thick"
		});
});
  
 
			var $sections = $('.tabs__content');
		
			function navigateTo(index) {
				// Mark the current section with the class 'current'
				$sections
					.removeClass('active').hide()
					.eq(index).fadeIn()
						.addClass('active');
			 
			}
		
			function curIndex() {
				// Return the current index by looking at which section has the class 'current'
				return $sections.index($sections.filter('.active'));
			}
		
			// Previous button is easy, just go back
			$('.btn-tab-prev').click(function(e) {
				e.preventDefault()
				navigateTo(0);
			});
		
			// Next button goes forward iff current block validates
			$('.btn-tab-next').click(function() {
				$('.js-form-validate').parsley().whenValidate({
					group: 'block-' + curIndex()
				}).done(function() {
					navigateTo(curIndex() + 1);
				});
			});
		
			// Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
			$sections.each(function(index, section) {
				$(section).find(':input').attr('data-parsley-group', 'block-' + index);
			});
			// navigateTo(0); // Start at the beginning
 
		
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
		 
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// window.location.replace("/");
				// $.magnificPopup.close();
			}, 4000);
		});
		return false;
	});

	// маска на инпут
	var customOptions = {
		onKeyPress: function(val, e, field, options) {
	
			if (val.replace(/\D/g, '').length===2)
			{
					val = val.replace('8','');    
					field.val(val);
			 }
			 field.mask("+7(000)000-00-00", options);
			}
	};               
	$('input[type="tel"]').attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

 
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

});
