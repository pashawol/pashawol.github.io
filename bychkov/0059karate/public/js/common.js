 $(document).ready(function () {
 	$("input[name=phone]").mask("+7 999 999 99 99"), $(".callback_form, .modal_form").each(function () {
 		$(this).validate({
 			rules: {
 				name: {
 					required: !0
 				},
 				phone: {
 					required: !0
 				}
 			},
 			messages: {
 				name: {
 					required: "Обязательное поле!"
 				},
 				phone: {
 					required: "Обязательное поле!"
 				}
 			},
 			errorClass: "error",
 			validClass: "valid",
 			errorElement: "span",
 			errorPlacement: function (e, t) {
 				t.attr("placeholder", e.text())
 			},
 			submitHandler: function (e) {
 				yaCounter35902090.reachGoal($(e).data("name")), $.ajax({
 					type: "POST",
 					url: "php/send.php",
 					data: $(e).serialize(),
 					success: function (e) {
 						$.fancybox.close(), $.fancybox({
 							content: $("#thanks").show(),
 							padding: 0
 						}), setTimeout(function () {
 							$.fancybox.close()
 						}, 7e3)
 					},
 					error: function (e) {
 						$.fancybox.close(), $.fancybox({
 							content: $("#error").show(),
 							padding: 0
 						}), setTimeout(function () {
 							$.fancybox.close()
 						}, 7e3)
 					}
 				})
 			}
 		})
 	})
 var arrr2 = (' <div class="l">'),
			 arrl2 = (' <div class="r">'),
			 tabSliderJs = $(".slider-tab-js, .js-video-slider");


		 tabSliderJs.each(function () { 
		 $(this).slick({
			 arrows: true,
			  prevArrow: arrl2,
			  nextArrow: arrr2,
			 dots: true,
			 adaptiveHeight: true,
		})
				 var sl1 = $(this).find(".slick-current"),
				   dataSrc1 = sl1.find("iframe").data('src');
				 sl1.find("iframe").attr("src", dataSrc1)

				 tabSliderJs.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					sl1 = $(slick.$slides[nextSlide]);
				 	dataSrc1 = sl1.find("iframe").data('src');
				 	sl1.find("iframe").attr("src", dataSrc1)

				 });
 	  })
		 $("#fotogalereya_slider .slider").slick({
		 	arrows: true,
		 	prevArrow: arrl2,
		 	nextArrow: arrr2,
		 	dots: true,
			rows: 3,
			   slidesToShow: 4,
			   	responsive: [{
			   			breakpoint: 768,
			   			settings: {
			   			 
			   				slidesToShow: 3
			   			}
			   		},
			   		{
			   			breakpoint: 480,
			   			settings: {
			   			 
			   				slidesToShow: 1
			   			}
			   		}
			   	]
		 })
 
//  $(document).ready(function () {
//  	ucheniki_slider = $("#ucheniki_tab .slider").bxSlider({
//  		nextSelector: "#ucheniki_tab  .slider_arrow.__next",
//  		prevSelector: "#ucheniki_tab  .slider_arrow.__prev",
//  		nextText: "",
//  		prevText: "",
//  		pagerSelector: "#ucheniki_tab .slider_pager",
//  		buildPager: function (e) {
//  			return ""
//  		},
//  		auto: !0,
//  		speed: 1e3,
//  		pause: 15e3
//  	}), roditeli_slider = $("#roditeli_tab .slider").bxSlider({
//  		nextSelector: "#roditeli_tab .slider_arrow.__next",
//  		prevSelector: "#roditeli_tab .slider_arrow.__prev",
//  		nextText: "",
//  		prevText: "",
//  		pagerSelector: "#roditeli_tab .slider_pager",
//  		buildPager: function (e) {
//  			return ""
//  		},
//  		auto: !0,
//  		speed: 1e3,
//  		pause: 15e3
// 	 }),

// 	  fotogalereya_slider = $("#fotogalereya_slider .slider").bxSlider({
//  		nextSelector: "#fotogalereya_slider .slider_arrow.__next",
//  		prevSelector: "#fotogalereya_slider .slider_arrow.__prev",
//  		nextText: "",
//  		prevText: "",
//  		pagerSelector: "#fotogalereya_slider .slider_pager",
//  		buildPager: function (e) {
//  			return ""
//  		},
//  		auto: !0,
//  		speed: 1e3,
//  		pause: 15e3
// 	 });
	 

 
 	$(".otzyvy_nav-tabs_i").click(function () {
		 $(this).hasClass("__ac") || ($(".otzyvy").toggleClass("__roditeli").toggleClass("__ucheniki"), $(".otzyvy_tab").toggleClass("__ac"), $(".otzyvy_nav-tabs_i").toggleClass("__ac") )
		  tabSliderJs.slick('refresh');
 	})
 });
 var myMap, addr = "Северное Бутово, ул. Феодосийская, 11а";
 ymaps.ready(function () {
 	ymaps.geocode(addr, {
 		results: 1
 	}).then(function (e) {
 		var t = e.geoObjects.get(0);
 		myMap = new ymaps.Map("map", {
 			center: t.geometry.getCoordinates(),
 			zoom: 15,
 			controls: []
 		}, {
 			searchControlProvider: "yandex#search"
 		}), myPlacemark = new ymaps.Placemark(t.geometry.getCoordinates(), {
 			hintContent: addr,
 			balloonContent: addr
 		}, {
 			iconLayout: "default#image",
 			iconImageHref: "img/marker.png",
 			iconImageSize: [50, 75],
 			iconImageOffset: [-25, -75]
 		}), myMap.controls.add("zoomControl"), myMap.behaviors.disable("scrollZoom"), myMap.geoObjects.add(myPlacemark)
 	}), $('a[href="#show_map"]').click(function (e) {
 		e.preventDefault(), $("#kontakty_box").toggleClass("__na"), $("#kontakty_return_box").toggleClass("__na"), addr = $(this).data("target"), myMap.destroy(), myMap = null;
 		var t = "";
 		switch (addr) {
 			case "Северное Бутово, ул. Феодосийская, 11а":
 				t = "Северное Бутово, ул. Феодосийская, 11а<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
 				break;
 			case "Южное Бутово, Чечерский пр-д, 56":
 				t = "Южное Бутово, Чечерский пр-д, 56<br><br>Расписание: вторник, пятница<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00"
 		}
 		return ymaps.geocode(addr, {
 			results: 1
 		}).then(function (e) {
 			var n = e.geoObjects.get(0);
 			myMap = new ymaps.Map("map", {
 				center: n.geometry.getCoordinates(),
 				zoom: 15,
 				controls: []
 			}, {
 				searchControlProvider: "yandex#search"
 			}), myPlacemark = new ymaps.Placemark(n.geometry.getCoordinates(), {
 				hintContent: addr,
 				balloonContent: t,
 				balloonContentHeader: "Дзаншин - карате для детей"
 			}, {
 				iconLayout: "default#image",
 				iconImageHref: "img/marker.png",
 				iconImageSize: [50, 75],
 				iconImageOffset: [-25, -75]
 			}), myMap.controls.add("zoomControl"), myMap.behaviors.disable("scrollZoom"), myMap.geoObjects.add(myPlacemark)
 		}), !1
 	}), $('a[href="#return_kontakty"]').click(function (e) {
 		return e.preventDefault(), $("#kontakty_box").toggleClass("__na"), $("#kontakty_return_box").toggleClass("__na"), !1
 	}), $("#map_mobfix").click(function () {
 		$(this).toggleClass("__na")
 	})
 }), $(document).ready(function () {
 	$(".fancy").fancybox({
 		padding: 0
 	})
 });
 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS

    


});
