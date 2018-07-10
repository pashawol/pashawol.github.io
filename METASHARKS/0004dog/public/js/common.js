 jQuery(document).ready(function ($) {

 	// для свг
 	svg4everybody({});
 	// Custom JS

 	$(".filter-toggle--js").click(function () {
 		$(".bx-filter").slideToggle();
 	})
 	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

 	var arrl2 = (' <div class="l">' + icon),
 		arrr2 = (' <div class="r">' + icon);

 	$('.product-item-detail-tabs-list, .bx-breadcrumb').slick({
 		dots: false,
 		arrows: false,
 		infinite: false,
 		speed: 600,
 		slidesToShow: 1,
 		centerMode: false,
 		variableWidth: true,
 	});


 	$('.s-catalog__carusel--js').slick({
 		slidesToScroll: 1,
 		slidesToShow: 4,
 		dots: false,
 		arrows: true,
 		infinite: false,

 		speed: 600,
 		prevArrow: arrl2,
 		nextArrow: arrr2,
 		responsive: [{
 				breakpoint: 1024,
 				settings: {
 					slidesToShow: 3,

 				}
 			},
 			{
 				breakpoint: 767,

 				settings: {
 					slidesToShow: 2,
 				}
 			},
 			{
 				breakpoint: 480,
 				settings: {
 					slidesToShow: 1,
 				}
 			}
 			// You can unslick at a given breakpoint now by adding:
 			// settings: "unslick"
 			// instead of a settings object
 		]
 	});

 	// var buyCourseForm = $("#fast-order-form");
 	// buyCourseForm.validate({
 	// 	lang: 'rus',
 	// 	submitHandler: function (form) {
 	// 		var data = buyCourseForm.serialize();
 	// 		var url = "/include/order.php"
 	// 		$.ajax({
 	// 			url: url,
 	// 			type: "POST",
 	// 			dataType: 'json',
 	// 			data: data,
 	// 			success: function (data) {
 	// 				if (data.STATUS == "ERROR") {
 	// 					$("#buy_error").html(data.HTML);
 	// 				} else if (data == "TRUE") {
 	// 					$("#buy_error").html();
 	// 					$('#buyOneClick').modal('toggle');
 	// 					$('#order_create').modal();
 	// 				}

 	// 			},
 	// 			error: function (e, data) {
 	// 				$("#buy_error").html();
 	// 				$("#buy_error").html("Не удалось создать заказ. Если ошибка повторится, направьте обращение через  <a href='/about/contacts/'>форму</a> на странице котактов.");
 	// 			}
 	// 		});
 	// 		return false;
 	// 	}
 	// });

 	// $("body").on("keydown", "[type='tel']", function (event) {

 	// 	// Разрешаем: backspace, delete, tab и escape
 	// 	if ((event.keyCode == 61 && event.shiftKey === true) || event.keyCode == 107 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
 	// 		// Разрешаем: Ctrl+A
 	// 		(event.keyCode == 65 && event.ctrlKey === true) ||
 	// 		// Разрешаем: home, end, влево, вправо
 	// 		(event.keyCode >= 35 && event.keyCode <= 39)) {
 	// 		// Ничего не делаем
 	// 		return;
 	// 	} else {
 	// 		// Обеждаемся, что это цифра, и останавливаем событие keypress
 	// 		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
 	// 			event.preventDefault();
 	// 		}
 	// 	}
 	// });



	//  кнопка  поиска на мобиле
	 $("header.bx-header").append('<button class="btn btn-default btn-toggle-search" name="s" type="button"><i class="fa fa-search"></i></button>')
	 $(".btn-toggle-search").on('click', function () {
		 $("#search").slideToggle();
		 $(this).find("i").toggleClass("fa-search").toggleClass("fa-times");
	   })
 });
