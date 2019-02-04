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

	$(".dropdown-toggle-js").click(function () {
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

	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';
	var icon2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"/>';

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + icon);

	var arrl3 = (' <div class="l">' + icon2),
		arrr3 = (' <div class="r">' + icon2);

	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');
		});
	};

	tabscostume('tabs');
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(".s-catalog__slider--js-2-prod").slick('destroy');
		hiddenSlider();

	})

	tabscostume('tabs-po');
	$('  .tabs-po__caption').slick({
		dots: false,
		infinite: false,
		loop: false,
		speed: 450,
		slidesToShow: 1,
		arrows: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		focusOnSelect: true,
		// centerMode: true,

		variableWidth: true
	});
	$('.tabs-po__caption').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		// console.log(currentSlide);
		$(this).find(".slick-slide").eq(nextSlide).click();
	});
});