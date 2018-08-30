window.bioEp = {
	// Private variables
	bgEl: {},
	popupEl: {},
	closeBtnEl: {},
	shown: false,
	overflowDefault: "visible",
	transformDefault: "",

	// Popup options
	width: 400,
	height: 220,
	html: "",
	css: "",
	fonts: [],
	delay: 5,
	showOnDelay: false,
	cookieExp: 0,
	showOncePerSession: false,
	onPopup: null,

	// Object for handling cookies, taken from QuirksMode
	// http://www.quirksmode.org/js/cookies.html
	cookieManager: {
		// Create a cookie
		create: function (name, value, days, sessionOnly) {
			var expires = "";

			if (sessionOnly)
				expires = "; expires=0"
			else if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			}

			document.cookie = name + "=" + value + expires + "; path=/";
		},

		// Get the value of a cookie
		get: function (name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(";");

			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
			}

			return null;
		},

		// Delete a cookie
		erase: function (name) {
			this.create(name, "", -1);
		}
	},

	// Handle the bioep_shown cookie
	// If present and true, return true
	// If not present or false, create and return false
	checkCookie: function () {
		// Handle cookie reset
		if (this.cookieExp <= 0) {
			// Handle showing pop up once per browser session.
			if (this.showOncePerSession && this.cookieManager.get("bioep_shown_session") == "true")
				return true;

			this.cookieManager.erase("bioep_shown");
			return false;
		}

		// If cookie is set to true
		if (this.cookieManager.get("bioep_shown") == "true")
			return true;
		return false;

	},

	// Add font stylesheets and CSS for the popup
	addCSS: function () {
	 
	},

	// Add the popup to the page
	addPopup: function () {
		// Add the background div
		this.bgEl = document.createElement("div");
		this.bgEl.id = "bio_ep_bg";
		document.body.appendChild(this.bgEl);

		// Add the popup
		if (document.getElementById("bio_ep"))
			this.popupEl = document.getElementById("bio_ep");
		else {
			this.popupEl = document.createElement("div");
			this.popupEl.id = "bio_ep";
			this.popupEl.innerHTML = this.html;
			document.body.appendChild(this.popupEl);
		}

		// Add the close button
		if (document.getElementById("bio_ep_close"))
			this.closeBtnEl = document.getElementById("bio_ep_close");
		else {
			this.closeBtnEl = document.createElement("div");
			this.closeBtnEl.id = "bio_ep_close";
			this.closeBtnEl.appendChild(document.createTextNode("X"));
			this.popupEl.insertBefore(this.closeBtnEl, this.popupEl.firstChild);
		}
	},

	// Show the popup
	showPopup: function () {

		if (this.shown) return;
		$.fancybox.close();
		$.magnificPopup.close();
		$.magnificPopup.open({
		 items: {
			 src: '#modal-test', // can be a HTML string, jQuery object, or CSS selector
			 type: 'inline',

			 fixedContentPos: true,
			 fixedBgPos: true,

			 overflowY: 'auto',

			 closeBtnInside: true,
			 preloader: false,

			 midClick: true,
			 removalDelay: 300,
			 mainClass: 'my-mfp-zoom-in'
		 }
	 })
		// this.bgEl.style.display = "block";
		// this.popupEl.style.display = "block";

		// // Handle scaling
		// this.scalePopup();

		// // Save body overflow value and hide scrollbars
		// this.overflowDefault = document.body.style.overflow;
		// document.body.style.overflow = "hidden";

		this.shown = true;
		this.cookieManager.create("bioep_shown", "true", this.cookieExp, false);
		this.cookieManager.create("bioep_shown_session", "true", 0, true);

		if (typeof this.onPopup === "function") {
			this.onPopup();
		}

	},

	// Hide the popup
	hidePopup: function () {

	},

	// Handle scaling the popup
	scalePopup: function () {

	},

	// Event listener initialisation for all browsers
	addEvent: function (obj, event, callback) {
		if (obj.addEventListener)
			obj.addEventListener(event, callback, false);
		else if (obj.attachEvent)
			obj.attachEvent("on" + event, callback);
	},

	// Load event listeners for the popup
	loadEvents: function () {

		this.addEvent(document, "mouseout", function (e) {
			e = e ? e : window.event;
			// If this is an autocomplete element.
			if (e.target.tagName.toLowerCase() == "input")
				return;

			// Get the current viewport width.
			var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			// If the current mouse X position is within 50px of the right edge
			// of the viewport, return.
			if (e.clientX >= (vpWidth - 50))
				return;

			// If the current mouse Y position is not within 50px of the top
			// edge of the viewport, return.
			if (e.clientY >= 50)
				return;

			// Reliable, works on mouse exiting window and
			// user switching active program
			var from = e.relatedTarget || e.toElement;
			if (!from)
				bioEp.showPopup();
		}.bind(this));
		// Handle the popup close button
		this.addEvent(this.closeBtnEl, "click", function () {
			bioEp.hidePopup();
		});
		// Handle window resizing
		this.addEvent(window, "resize", function () {
			bioEp.scalePopup();
		});
	},

	// Set user defined options for the popup
	setOptions: function (opts) {

		this.width = (typeof opts.width === 'undefined') ? this.width : opts.width;
		this.height = (typeof opts.height === 'undefined') ? this.height : opts.height;
		this.html = (typeof opts.html === 'undefined') ? this.html : opts.html;
		this.css = (typeof opts.css === 'undefined') ? this.css : opts.css;
		this.fonts = (typeof opts.fonts === 'undefined') ? this.fonts : opts.fonts;
		this.delay = (typeof opts.delay === 'undefined') ? this.delay : opts.delay;
		this.showOnDelay = (typeof opts.showOnDelay === 'undefined') ? this.showOnDelay : opts.showOnDelay;
		this.cookieExp = (typeof opts.cookieExp === 'undefined') ? this.cookieExp : opts.cookieExp;
		this.showOncePerSession = (typeof opts.showOncePerSession === 'undefined') ? this.showOncePerSession : opts.showOncePerSession;
		this.onPopup = (typeof opts.onPopup === 'undefined') ? this.onPopup : opts.onPopup;

	},

	// Ensure the DOM has loaded
	domReady: function (callback) {
		(document.readyState === "interactive" || document.readyState === "complete") ? callback(): this.addEvent(document, "DOMContentLoaded", callback);
	},

	// Initialize
	init: function (opts) {
		// Handle options
		if (typeof opts !== 'undefined')
			this.setOptions(opts);

		this.addCSS();
		this.domReady(function () {
			// Handle the cookie

			// if(bioEp.checkCookie()) return;

			// Add the popup
			bioEp.addPopup();

			// Load events
			setTimeout(function () {
				bioEp.loadEvents();
				if (bioEp.showOnDelay)
					bioEp.showPopup();
			}, bioEp.delay * 1000);
		});
	}
};

bioEp.init({});


$(document).ready(function () {
	var customOptions = {
		onKeyPress: function(val, e, field, options) {
	
			if (val.replace(/\D/g, '').length===2)
			{
					val = val.replace('8','');    
					field.val(val);
			 }
			 field.mask("+7 (000) 000-00-00", options);
			}
	};               
	$("input[name=phone]").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);
  $(".callback_form, .modal_form").each(function () {
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
				yaCounter35902090.reachGoal($(e).data("name"));
				 $.ajax({
					type: "POST",
					url: "php/send.php",
					data: $(e).serialize(),
					success: function (e) {
					 $.magnificPopup.close();
						$.magnificPopup.open({
						 items: {
							 src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
							 type: 'inline',
			 
							 fixedContentPos: true,
							 fixedBgPos: true,
			 
							 overflowY: 'auto',
			 
							 closeBtnInside: true,
							 preloader: false,
			 
							 midClick: true,
							 removalDelay: 300,
							 mainClass: 'my-mfp-zoom-in'
						 }
					 }),
						$("#thanks iframe").each(function ( ) {
							$(this).attr("src", $(this).data("src"))
						}),
						// setTimeout(function () {
						// $.magnificPopup.close()
						// }, 7e3)
						
					},
					error: function (e) {
						$.magnificPopup.close();
						$.magnificPopup.open({
						 items: {
							 src: '#error', // can be a HTML string, jQuery object, or CSS selector
							 type: 'inline',
			 
							 fixedContentPos: true,
							 fixedBgPos: true,
			 
							 overflowY: 'auto',
			 
							 closeBtnInside: true,
							 preloader: false,
			 
							 midClick: true,
							 removalDelay: 300,
							 mainClass: 'my-mfp-zoom-in'
						 }
					 }),
						setTimeout(function () {
						 $.magnificPopup.close();
							$(".tabs-modal__item").removeClass("active").hide();
								$(".tabs-modal__item:first-child").fadeIn().addClass("active")
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
					dataSrc1 = sl1.find("iframe").data('src'),
					 attrIframe = sl1.find("iframe").attr('src');
					ifTop = $(".video-block").prev().offset().top,
					ifTop2 = $(".otzyvy").prev().offset().top;
								
					
		 
					
				 
					$(window).scroll(function(){
						if($('html, body').scrollTop() >= ifTop && $(".video-block_slider  .slick-current iframe").hasClass("iframe-hidden") == true){ 
							$(".video-block_slider  .slick-current iframe").removeClass("iframe-hidden").attr("src", dataSrc1); 
					}
				 
						if($('html, body').scrollTop() >= ifTop2 && $(".otzyvy  .slick-current iframe").hasClass("iframe-hidden") == true){ 
							$(".otzyvy  .slick-current iframe").removeClass("iframe-hidden").attr("src", $(".otzyvy  .slick-current iframe").data('src')); 
					}
					});


	 // конец добавил
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
							 
								slidesToShow: 2
							}
						}
					]
		})
 

	$(".otzyvy_nav-tabs_i").click(function () {
		$(this).hasClass("__ac") || ($(".otzyvy").toggleClass("__roditeli").toggleClass("__ucheniki"), $(".otzyvy_tab").toggleClass("__ac"), $(".otzyvy_nav-tabs_i").toggleClass("__ac") )
		 tabSliderJs.slick('refresh');
	})
});
var myMap,
	 ob_ = [{
			 'center': [55.56733606914741, 37.581585999999916],
			 'addr': 'Северное Бутово, ул. Грина, 18 Б',
			 'text': "Северное Бутово, ул. Грина, 18 Б<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00"
	 }, {
			 'center': [55.53248206917677, 37.52877399999999],
			 'addr': 'Южное Бутово, Чечерский пр-д, 56',
			 'text': "Южное Бутово, Чечерский пр-д, 56<br><br>Расписание: вторник, пятница<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00"
	 }, 
	 {
			 'center': [55.55088056919436, 37.53302299999997],
			 'addr': 'Южное Бутово, Бартеневская, 17',
			 'text': "Южное Бутово, Бартеневская, 17<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00"
	 }, 
	 
	 {
			 'center': [55.54947006916099,37.5471895],
			 'addr': 'Южное Бутово, Поляны, 53',
			 'text': "Южное Бутово, Поляны, 53<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00"
	 }, 
	 {
			 'center': [55.54947006916099,37.551438499999904],
			 'addr': 'Южное Бутово, бул. Адмирала Ушакова, 4',
			 'text': "Южное Бутово, бул. Адмирала Ушакова, 4<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00"
	 }, 

	];
ymaps.ready(function() {
	 myMap = new ymaps.Map("map", {
			 center: ob_[0].center,
			 zoom: 14,
			 controls: []
	 }, {
			 searchControlProvider: "yandex#search"
	 });
	 myMap.controls.add("zoomControl");
	 myMap.behaviors.disable("scrollZoom");
	 var myCollection = new ymaps.GeoObjectCollection();
	 ob_.forEach(function(element, index) {
			 var myPlacemark = new ymaps.Placemark(element.center, {
					 hintContent: element.addr,
					 balloonContent: element.text,
					 balloonContentHeader: "Дзаншин - карате для детей"
			 }, {
					 iconLayout: "default#image",
					 iconImageHref: "img/marker.png",
					 iconImageSize: [50, 75],
					 iconImageOffset: [-25, -75]
			 });
			 myCollection.add(myPlacemark);
	 })
	 myMap.geoObjects.add(myCollection);
	 myMap.setBounds(myCollection.getBounds(), {
			 preciseZoom: true,
			 zoomMargin: [50, 50, 50, 50] //top, right, bottom, left
	 });
	 $('a[href="#show_map"]').click(function(e) {
					 e.preventDefault(),
							 addr = $(this).data("target"),
							 myMap.destroy(),
							 myMap = null;
					 var t = "";
					 switch (addr) {
							 case "Северное Бутово, ул. Грина, 18 Б":
									 t = "Северное Бутово, ул. Грина, 18 Б<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
									 break;
							 case "Южное Бутово, Чечерский пр-д, 56":
									 t = "Южное Бутово, Чечерский пр-д, 56<br><br>Расписание: вторник, пятница<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
									 break;
									 case "Южное Бутово, Бартеневская, 17":
									 t = "Южное Бутово, Бартеневская, 17<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
									 break;
									 
									 case "Южное Бутово, Поляны, 53":
									 t = "Южное Бутово, Поляны, 53<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
									 break;

									 case "Южное Бутово, бул. Адмирала Ушакова, 4":
									 t = "Южное Бутово, бул. Адмирала Ушакова, 4<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";

					 }
					 return ymaps.geocode(addr, {
							 results: 1
					 }).then(function(e) {
							 var n = e.geoObjects.get(0);
							 myMap = new ymaps.Map("map", {
									 center: n.geometry.getCoordinates(),
									 zoom: 16,
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
			 }), $('a[href="#return_kontakty"]').click(function(e) {
					 return e.preventDefault(),
							 $("#kontakty_box").toggleClass("__na"), $("#kontakty_return_box").toggleClass("__na"), !1
			 }),
			 $("#map_mobfix").click(function() {
					 $(this).toggleClass("__na")
			 })
});

//  var myMap, addr = "Северное Бутово, ул. Феодосийская, 11а";
//  ymaps.ready(function () {
//  	ymaps.geocode(addr, {
//  		results: 1
//  	}).then(function (e) {
//  		var t = e.geoObjects.get(0);
//  		myMap = new ymaps.Map("map", {
//  			center: t.geometry.getCoordinates(),
//  			zoom: 16,
//  			controls: []
//  		}, {
//  			searchControlProvider: "yandex#search"
//  		}), myPlacemark = new ymaps.Placemark(t.geometry.getCoordinates(), {
//  			hintContent: addr,
//  			balloonContent: addr
//  		}, {
//  			iconLayout: "default#image",
//  			iconImageHref: "img/marker.png",
//  			iconImageSize: [50, 75],
//  			iconImageOffset: [-25, -75]
//  		}), myMap.controls.add("zoomControl"), myMap.behaviors.disable("scrollZoom"), myMap.geoObjects.add(myPlacemark)
//  	}), $('a[href="#show_map"]').click(function (e) {
//  		e.preventDefault(),    addr = $(this).data("target"), myMap.destroy(), myMap = null;
//  		var t = "";
//  		switch (addr) {
//  			case "Северное Бутово, ул. Грина, 18 Б":
// 			t = "Северное Бутово, ул. Грина, 18 Б<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
// 			break;
		 
// 			case "Южное Бутово, Чечерский пр-д, 56":
// 			t = "Южное Бутово, Чечерский пр-д, 56<br><br>Расписание: вторник, пятница<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
// 			break;
//  			case "Южное Бутово, Бартеневская, 17":
//  			t = "Южное Бутово, Бартеневская, 17<br><br>Расписание: понедельник, четверг<br>Начинающие: 18:30-19:30<br>Продвинутые: 19:30-21:00";
		 
//  		}
//  		return ymaps.geocode(addr, {
//  			results: 1
//  		}).then(function (e) {
//  			var n = e.geoObjects.get(0);
//  			myMap = new ymaps.Map("map", {
//  				center: n.geometry.getCoordinates(),
//  				zoom: 16,
//  				controls: []
//  			}, {
//  				searchControlProvider: "yandex#search"
//  			}), myPlacemark = new ymaps.Placemark(n.geometry.getCoordinates(), {
//  				hintContent: addr,
//  				balloonContent: t,
//  				balloonContentHeader: "Дзаншин - карате для детей"
//  			}, {
//  				iconLayout: "default#image",
//  				iconImageHref: "img/marker.png",
//  				iconImageSize: [50, 75],
//  				iconImageOffset: [-25, -75]
//  			}), myMap.controls.add("zoomControl"), myMap.behaviors.disable("scrollZoom"), myMap.geoObjects.add(myPlacemark)
//  		}), !1
//  	}), $('a[href="#return_kontakty"]').click(function (e) {
//  		return e.preventDefault(), $("#kontakty_box").toggleClass("__na"), $("#kontakty_return_box").toggleClass("__na"), !1
//  	}), $("#map_mobfix").click(function () {
//  		$(this).toggleClass("__na")
// 	 })
	
//  }),
 $(document).ready(function () {
	$(".fancy").magnificPopup({
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


 $('.fancy[href="#modal-test"]').click(function ( ) {
	 $(".tabs-modal__item.active").removeClass("active").hide()
	 .next().fadeIn().addClass("active")
 })
 $(".fancy").click(function ( ) {
	 
	 $("#thanks iframe").each(function () {
		 $(this).attr("src", $(this).data("src"))
	 })
 })
 $(".tabs-modal__btn").click(function () {
	 $(this).parents(".tabs-modal__item").removeClass("active").hide()
	 .next().fadeIn().addClass("active")
 })

 $(".fotogalereya_i").fancybox({
	 padding: 0,
	//  width: 'auto',
	//  height: 'auto',
	//  autoSize: false,
	//  minWidth: 250,
		 // maxWidth: 770,
		 // width: 770
 })

// листалка по стр
$(" .scroll-link").click(function () {
			 var elementClick = $(this).attr("href");
			 var destination = $(elementClick).offset().top;

					 $('html, body').animate({ scrollTop: destination }, 1100);

			 return false;
	 });

});
