jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


  

	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню
 
     

	// для плаваюещего label
	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');

	// $('input, textarea').keyup(function () {
	// 	if ($(this).val().trim() !== '') {
	// 		$(this).closest('label').removeClass('empty');
	// 	} else {
	// 		$(this).closest('label').addClass('empty');
	// 	}
	// });



	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').on('keyup change click input cut copy paste', function () {

		if ($(this).val() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
		$(this).on('.keyup', function () {
			if ($(this).val() !== '') {
				$(this).closest('label').removeClass('empty');
			} else {
				$(this).closest('label').addClass('empty');
			}
		});
	})

	// form Validate
	$('.js-form-validate').parsley();


	// табы на радиокнопках
	$('input[data-tab-radio]').change(function () {
		var th = $(this),
			tabRadio = th.data('tab-radio');
		$('#' + tabRadio).fadeIn(100).addClass("active")
			.siblings('.tab-radio-content').removeClass('active').hide();
	})

	//  если радио таб выбран показать блок
	$('input[data-tab-radio]').each(function () {
		var th = $(this),
			tabRadio = th.data('tab-radio');
		if (th.is(":checked")) {

			$('#' + tabRadio).fadeIn(100).addClass("active")
				.siblings('.tab-radio-content').removeClass('active').hide();
		}
	})
	//  $(".tab-radio-content-close").click(function(){
	// 	 var thpar = $(this).parents('.tab-radio-content'),
	// 			thtab = thpar.attr('id');

	// 			thpar.fadeOut(100).removeClass("active");
	// 			$('[data-tab-rad='+thtab+']').prop('checked', false);
	//  })
	// /табы на радиокнопках

	//  аккордион 
	$(".accordion__toggle-btn").click(function () {
		$(this).toggleClass('active').next().slideToggle().toggleClass('active');
	})
	//  /аккордион 


	$('.btn-tab-js').click(function (e) {
		e.preventDefault();
		var th = $(this),
			tabRadio = th.data('tab-block');
		console.log(tabRadio);
		//  th.hide();
		$('#' + tabRadio).fadeIn(100).addClass("active")
			.siblings('.tab-radio-content').removeClass('active').hide();

	})
	$(".tab-radio-content-close--js").click(function () {
		var thpar = $(this).parents('.tab-radio-content'),
			thtab = thpar.attr('id');

		thpar.fadeOut(100).removeClass("active");
	})


	// кастомный инпут файл

	var file = $(".add-file input.add-file__input[type=file]");
	file.change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		var name = $(".add-file__filename  ");
		name.text(filename);

	});

	$(".table-history__tr--js").click(function () {
		$(this).toggleClass("active").next().find('.table-history__inner-block--js').slideToggle(150);
	})

	// показать/скрыть блок в поиске
	var hblock = $('.search-block, .search-block__btn-close, .search-block__toggle-block');
	$('body').on('keyup', '.search-block__input', function () {
		// console.log("1");
		$(this).val().length > 2 ? hblock.addClass('active') : hblock.removeClass('active');
	})
	$('.search-block__btn-close').click(function () {
		hblock.removeClass('active');
	})

	$(document).mouseup(function (e) {
		var container = $(".search-block.active");
		if (container.has(e.target).length === 0) {
			hblock.removeClass('active');
		}
	});
	// показать/скрыть блок в поиске



	$(".date-picker-block-js").each(function () {

		var th = $(this);

		th.find('.startDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			// minDate: today,
			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			maxDate: function () {
				return th.find('.endDate').val();
			}
		});
		th.find('.endDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',

			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			minDate: function () {
				return th.find('.startDate').val();
			}
		});
		th.find('input').next().hide();
		th.find('input').click(function () {
			$(this).next().click();
		})
	})

 $(".dropdown-toggle-js").click(function(){
	$(this).next().toggle().parent().toggleClass("show");
	return false;
 })


 $(document).mouseup(function (e) {
	var container = $(".dropdown--js.show");
	if (container.has(e.target).length === 0) {
		$(".dropdown--js").removeClass("show");
		$(".dropdown-menu--js").hide();
		// $("body").toggleClass("fixed");
	 
	}
});
});