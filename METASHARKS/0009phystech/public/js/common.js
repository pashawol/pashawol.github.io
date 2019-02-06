jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	$(".wrapp-hidden .nav__item--has-children > a").click(function (e) {
		e.preventDefault();
		$(this).next().slideToggle();
	})
	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});
	$('.hidden-mnu ul li a').on('click', function () {
		$(".hidden-mnu .toggle-mnu").click();
	});
	$(document).mouseup(function (e) {
		var container = $(".hidden-mnu.active");
		if (container.has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});
	// закрыть меню при горизонтальном свайпе
	$('.hidden-mnu.active').swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu.active").removeClass("active");
				$("body, html").removeClass("fixed");
			}
			if (direction == 'right') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu.active").removeClass("active");
				$("body, html").removeClass("fixed");
			}
		},
		triggerOnTouchEnd: false,
	});
	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		$(".news-block__item>div:first-child ").height('auto').equalHeights();
		//


		// скрывает моб меню

		var topH = $(".top-nav").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
	}

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	// $(" .top-nav a").click(function () {
	//        var elementClick = $(this).attr("href");
	//        var destination = $(elementClick).offset().top;

	//            $('html, body').animate({ scrollTop: destination }, 1100);

	//        return false;
	//    });


	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	};
	tabscostume('tab');

	// адаптивные табы
	$('.resp-tabs-js').easyResponsiveTabs({
		activate: function () {}
	});


	var icon = '<svg viewBox="0 0 28 54"  fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27 1L1 27L27 53"  /> ';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель

	$('.header-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,

	});

	function tabslider() {

		$(' .s-infrastructure__slider--js').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			speed: 450,
			infinite: true,
			loop: true,
			arrows: false,

		});
		$('.s-infrastructure__slider--js ')
			.on('lazyLoaded', function (event, slick, image, imageSource) {
				image.parent().css('background-image', 'url(' + image.attr('src') + ')');
			});
	}
	tabslider();
	$('.s-content__slider--js ').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,

	});

	$('.s-main-calendar__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		prevArrow: arrr2,
		nextArrow: arrl2,

	});

	$('.s-logos__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		speed: 450,
		infinite: true,
		loop: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [{
				breakpoint: 1440,
				settings: {
					slidesToShow: 6
				}
			},

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},

			{
				breakpoint: 375,
				settings: {
					slidesToShow: 2
				}
			}

		]
	});


	$('.s-news__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		responsive: [

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}

		]
	});


	$(' .s-content__slider--js, .s-news__slider--js')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});

	$(".resp-accordion, .s-infrastructure__tab-btn").click(function () {
		$('.s-infrastructure__slider--js').slick('unslick')
		tabslider();
	})

	// modal window
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

	// / modal window

	// modal галерея
	$(".gal").each(function () {

		$(this).find("a").magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				// titleSrc: function(item) {
				//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				// }
			},
			gallery: {
				enabled: true
			}
		});
	})
	// /modal галерея



	// mask for input
	var customOptions = {
		onKeyPress: function (val, e, field, options) {

			if (val.replace(/\D/g, '').length === 2) {
				val = val.replace('8', '');
				field.val(val);
			}
			field.mask("+7(000)000-00-00", options);
		}
	};
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);

	// / mask for input


	//Replace all SVG images with inline SVG
	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}


			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});


	// кастомный инпут файл

	var file = $(".add-file input[type=file]");
	file.change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		var name = $(".add-file__filename  ");
		name.text(filename);

	});
	// или
	// $(".dropzone").dropzone({
	//  url: "/file/post",
	//  addRemoveLinks: true,
	//      acceptedFiles: 'image/*',
	//      uploadMultiple: true,
	//   });


	$(".pretty-embed__bg").each(function () {
		// загрузка фона видео
		$(this).css("background-image", 'url(http://img.youtube.com/vi/' + $(this).data("src") + '/0.jpg)')
		// включение видео при клике по блоку
		$(this).click(function () {
			$(this).removeClass("on").next()
				.attr("src", 'https://www.youtube.com/embed/' + $(this).data("src") + '?autoplay=1').addClass("on");
		})
	})


	// $(".wow-wrap").each(function () {
	// var wowAnim = $(this).find(".s-dop__col," +
	//                 ".s-pick__col," +
	//                 ".s-condition__col");
	// wowAnim.each(function(i){

	// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

	//    var wow = new WOW({ mobile: false });
	//         wow.init();

	// });
	// });


	var $li = $('.nav__item--has-children').hover(
		function () {
			var self = this;
			hovertimer = setTimeout(function () {
				$(self).addClass('hover-block');
				// $("html, .top-nav.fixed").addClass("fixed-brand");
			}, 500);
		},
		function () {
			clearTimeout(hovertimer);
			$li.removeClass('hover-block');
			// $("html, .top-nav.fixed").removeClass("fixed-brand");
		}
	);


	// для плаваюещего label
	// для плаваюещего label

	// для плаваюещего label


	$('input, textarea').not('[type="radio"]').not('[type="checkbox"]').each(function () {

		if ($(this).val().trim() == '') {
			$(this).closest('label').addClass('empty');
		}
	})
	$('input, textarea').not('[type="radio"]').not('[type="checkbox"]').keyup(function () {
		if ($(this).val().trim() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
	});

	// анимация на главной вверху


	/* ---- particles.js config ---- */

	// particlesJS("particles-js", {
	// 	"particles": {
	// 		"number": {
	// 			"value": 100,
	// 			"density": {
	// 				"enable": true,
	// 				"value_area": 1000
	// 			}
	// 		},
	// 		"color": {
	// 			"value": "#a3cde8"
	// 		},

	// 		"opacity": {
	// 			"value": 1,
	// 			"random": false,
	// 			"anim": {
	// 				"enable": true,
	// 				"speed": .5,
	// 				"opacity_min": 0.1,
	// 				"sync": true
	// 			}
	// 		},
	// 		"size": {
	// 			"value": 3,
	// 			"random": true,
	// 			"anim": {
	// 				"enable": false,
	// 				"speed": 5,
	// 				"size_min": 0.1,
	// 				"sync": false
	// 			}
	// 		},
	// 		"line_linked": {
	// 			"enable": true,
	// 			"distance": 200,
	// 			"color": "#56b7f6",
	// 			"opacity": 0.8,
	// 			"width": 1
	// 		},
	// 		"move": {
	// 			"enable": true,
	// 			"speed": 3,
	// 			"direction": "none",
	// 			"random": false,
	// 			"straight": false,
	// 			"out_mode": "out",
	// 			"bounce": false,
	// 			"attract": {
	// 				"enable": false,
	// 				"rotateX": 600,
	// 				"rotateY": 1200
	// 			}
	// 		}
	// 	},
	// 	"interactivity": {
	// 		"detect_on": "canvas",
	// 		"events": {
	// 			"onhover": {
	// 				"enable": true,
	// 				"mode": "repulse"
	// 			},
	// 			"onclick": {
	// 				"enable": true,
	// 				"mode": "push"
	// 			},
	// 			"resize": true
	// 		},
	// 		"modes": {
	// 			"grab": {
	// 				"distance": 240,
	// 				"line_linked": {
	// 					"opacity": 1
	// 				}
	// 			},
	// 			"bubble": {
	// 				"distance": 400,
	// 				"size": 100,
	// 				"duration": 2,
	// 				"opacity": 8,
	// 				"speed": 3
	// 			},
	// 			"repulse": {
	// 				"distance": 100,
	// 				"duration": 0.4
	// 			},
	// 			"push": {
	// 				"particles_nb": 4
	// 			},
	// 			"remove": {
	// 				"particles_nb": 2
	// 			}
	// 		}
	// 	},
	// 	"retina_detect": true
	// });


	// particlesJS("particles-js", {
	// 	"particles": {
	// 		"number": {
	// 			"value": 100,
	// 			"density": {
	// 				"enable": true,
	// 				"value_area": 1000
	// 			}
	// 		},
	// 		"color": {
	// 			"value": "#a3cde8"
	// 		},

	// 		"opacity": {
	// 			"value": 1,
	// 			"random": false,
	// 			"anim": {
	// 				"enable": true,
	// 				"speed": .5,
	// 				"opacity_min": 1,
	// 				"sync": true
	// 			}
	// 		},
	// 		"size": {
	// 			"value": 3,
	// 			// "random": true,
	// 			"anim": {
	// 				"enable": false,
	// 				"speed": 5,
	// 				"size_min": 3,
	// 				"sync": false
	// 			}
	// 		},
	// 		"line_linked": {
	// 			"enable": true,
	// 			"distance": 130,
	// 			"color": "#56b7f6",
	// 			"opacity": 1,
	// 			"width": 1.6
	// 		},
	// 		"move": {
	// 			"enable": true,
	// 			"speed": 3,
	// 			"direction": "none",
	// 			"random": false,
	// 			"straight": false,
	// 			"out_mode": "out",
	// 			"bounce": false,
	// 			"attract": {
	// 				"enable": false,
	// 				"rotateX": 300,
	// 				"rotateY": 600
	// 			}
	// 		}
	// 	},
	// 	"interactivity": {
	// 		"detect_on": "canvas",
	// 		"events": {
	// 			"onhover": {
	// 				"enable": true,
	// 				"mode": "repulse"
	// 			},
	// 			"onclick": {
	// 				"enable": true,
	// 				"mode": "push"
	// 			},
	// 			"resize": true
	// 		},
	// 		"modes": {
	// 			"grab": {
	// 				"distance": 240,
	// 				"line_linked": {
	// 					"opacity": 1
	// 				}
	// 			},
	// 			"bubble": {
	// 				"distance": 400,
	// 				"size": 100,
	// 				"duration": 2,
	// 				"opacity": 8,
	// 				"speed": 3
	// 			},
	// 			"repulse": {
	// 				"distance": 100,
	// 				"duration": 0.4
	// 			},
	// 			"push": {
	// 				"particles_nb": 4
	// 			},
	// 			"remove": {
	// 				"particles_nb": 2
	// 			}
	// 		}
	// 	},
	// 	"retina_detect": true
	// });

	////////////////////////////////////

	// ании мация  для синего блока
	function canvasanimate(xcanvas) {

		var canvas, ctx, circ, nodes, mouse, SENSITIVITY, SIBLINGS_LIMIT, DENSITY, NODES_QTY, ANCHOR_LENGTH, MOUSE_RADIUS;

		// how close next node must be to activate connection (in px)
		// shorter distance == better connection (line width)
		SENSITIVITY = 100;
		// note that siblings limit is not 'accurate' as the node can actually have more connections than this value that's because the node accepts sibling nodes with no regard to their current connections this is acceptable because potential fix would not result in significant visual difference 
		// more siblings == bigger node
		SIBLINGS_LIMIT = 10;
		// default node margin
		DENSITY = 70;
		// total number of nodes used (incremented after creation)
		NODES_QTY = 0;
		// avoid nodes spreading
		ANCHOR_LENGTH = 20;
		// highlight radius
		MOUSE_RADIUS = 200;

		circ = 2 * Math.PI;
		nodes = [];

		canvas = $(xcanvas)[0];
		// console.log(canvas);
		resizeWindow();
		mouse = {
			x: canvas.width / 2,
			y: canvas.height / 2
		};
		ctx = canvas.getContext('2d');
		if (!ctx) {
			alert("Ooops! Your browser does not support canvas :'(");
		}

		function Node(x, y) {
			this.anchorX = x;
			this.anchorY = y;
			this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
			this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
			this.vx = Math.random() * 2 - 1;
			this.vy = Math.random() * 2 - 1;
			this.energy = Math.random() * 100;
			this.radius = Math.random();
			this.siblings = [];
			this.brightness = 0;
		}

		Node.prototype.drawNode = function () {
			var color = "rgba(255, 255, 255, " + this.brightness + ")";
			ctx.beginPath();
			ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / SIBLINGS_LIMIT, 0, circ);
			ctx.fillStyle = color;
			ctx.fill();
		};



		Node.prototype.moveNode = function () {
			this.energy -= 2;
			if (this.energy < 1) {
				this.energy = Math.random() * 100;
				if (this.x - this.anchorX < -ANCHOR_LENGTH) {
					this.vx = Math.random() * 2;
				} else if (this.x - this.anchorX > ANCHOR_LENGTH) {
					this.vx = Math.random() * -2;
				} else {
					this.vx = Math.random() * 4 - 2;
				}
				if (this.y - this.anchorY < -ANCHOR_LENGTH) {
					this.vy = Math.random() * 2;
				} else if (this.y - this.anchorY > ANCHOR_LENGTH) {
					this.vy = Math.random() * -2;
				} else {
					this.vy = Math.random() * 4 - 2;
				}
			}
			this.x += this.vx * this.energy / 100;
			this.y += this.vy * this.energy / 100;
		};

		function initNodes() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			nodes = [];
			for (var i = DENSITY; i < canvas.width; i += DENSITY) {
				for (var j = DENSITY; j < canvas.height; j += DENSITY) {
					nodes.push(new Node(i, j));
					NODES_QTY++;
				}
			}
		}

		function calcDistance(node1, node2) {
			return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
		}

		function findSiblings() {
			var node1, node2, distance;
			for (var i = 0; i < NODES_QTY; i++) {
				node1 = nodes[i];
				node1.siblings = [];
				for (var j = 0; j < NODES_QTY; j++) {
					node2 = nodes[j];
					if (node1 !== node2) {
						distance = calcDistance(node1, node2);
						if (distance < SENSITIVITY) {
							if (node1.siblings.length < SIBLINGS_LIMIT) {
								node1.siblings.push(node2);
							} else {
								var node_sibling_distance = 0;
								var max_distance = 0;
								var s;
								for (var k = 0; k < SIBLINGS_LIMIT; k++) {
									node_sibling_distance = calcDistance(node1, node1.siblings[k]);
									if (node_sibling_distance > max_distance) {
										max_distance = node_sibling_distance;
										s = k;
									}
								}
								if (distance < max_distance) {
									node1.siblings.splice(s, 1);
									node1.siblings.push(node2);
								}
							}
						}
					}
				}
			}
		}

		function redrawScene() {
			resizeWindow();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			findSiblings();
			var i, node, distance;
			for (i = 0; i < NODES_QTY; i++) {
				node = nodes[i];
				distance = calcDistance({
					x: mouse.x,
					y: mouse.y
				}, node);
				if (distance < MOUSE_RADIUS) {
					node.brightness = 1 - distance / MOUSE_RADIUS;
				} else {
					node.brightness = 0;
				}
			}
			for (i = 0; i < NODES_QTY; i++) {
				node = nodes[i];
				if (node.brightness) {
					node.drawNode();
					// node.drawConnections();
				}
				node.moveNode();
			}
			requestAnimationFrame(redrawScene);
		}

		function initHandlers() {
			document.addEventListener('resize', resizeWindow, false);
			canvas.addEventListener('mousemove', mousemoveHandler, false);
		}

		function resizeWindow() {
			canvas.width = window.innerWidth;
			canvas.height = $(xcanvas).parent().innerHeight();
			// console.log( canvas.parentNode.innerHeight);
		}

		function mousemoveHandler(e) {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		initHandlers();
		initNodes();
		redrawScene();

	};

	// ании мация  для синего блока

	// if ($("div").is(".animate-section")) {
	// 	canvasanimate('.x-canvas');

	// }

	// if ($("div").is(".animate-footer")) {
	// 	canvasanimate('.x-canvas-2');
	// }

	function canvasres() {

		$(".animate-block canvas").height($(".animate-block").innerHeight() + ($(".header-block").innerHeight() - $(".top-nav").innerHeight()))
	}
	$(window).resize(function () {
		canvasres();

	});
	canvasres();
	// =============================================== добавил
	// прилипает карта
	$(".s-contact__map-wrap").stick_in_parent();
	//gijgo.com/datepicker
	var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

	$('.datepicker-date').each(function () {
		var th = $(this);
		th.datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			format: 'dd.mm.yyyy',
			minDate: today,
			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			// modal: true
		});

		th.click(function () {
			th.next().click();
		})
	})

	$(".date-picker-block-js").each(function () {

		var th = $(this);

		th.find('.startDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			minDate: today,
			select: function (e) {
				th.find('.startDate').parents('label').removeClass("empty");
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
				th.find('.endDate').parents('label').removeClass("empty");
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
	
	$(".time-picker").each(function () {

		var th = $(this);
		th.timepicker({
			mode: '24hr',
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			format: 'H.M', 
			select: function (e) {
				th.parents('label').removeClass("empty");
			},
			// modal: true
		});

		th.click(function () {
			th.next().click();
		})
	})


	// скрывает лишний текст 

	// $('.s-patner__text').moreLines({
	// 	linecount: 9,
	// 	// custom text
	// 	buttontxtmore: '<span class="  btn btn-sm btn-outline-primary" href="#">Показать</span>',
	// 	buttontxtless: '<span class="  btn btn-sm btn-outline-primary" href="#">Скрыть</span>',
	// 	animationspeed: 450
	// });

	$('.s-patner__text').readmore({
		speed: 75,
		moreLink: '<span class="  btn btn-sm btn-outline-primary" href="#">Показать</span>',
		lessLink: '<span class="  btn btn-sm btn-outline-primary" href="#">Скрыть</span>',
		speed: 475,
		collapsedHeight: 200,
	});


	$('.news-block__slider--js').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		dots: false,
		responsive: [

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},

			{
				breakpoint: 440,
				settings: {
					slidesToShow: 1
				}
			},


		]
	});

	function hNewtop() {
		var th = $(".news-block");
		var hNew = th.height();
		// th.css('margin-top', hNew);
		$(".header-block__slide").css({
			'paddingBottom': hNew + 130
		});
		$(".header-block__slider .slick-dots").css({
			'top': -hNew - 100
		});
	}
	$(window).resize(function () {
		hNewtop();
	});
	hNewtop();




	
	// const div = document.createElement ( 'div' );
	// div.style.height = '900px';
	// $('.animate-js')[0].appendChild( div );
	
	// Для отрисовки берём path от SVG в котором прописаны только прямые линии
// 	const path = 'M24 299L15 248.5M24 299L59.5 280M24 299L63 361M24 299V377.5M15 248.5L59.5 280M15 248.5L41.5 202M15 248.5L6 191M59.5 280H76.5M59.5 280L41.5 202M59.5 280L63 361M76.5 280L41.5 202M76.5 280L69.5 232.5M76.5 280L93 264.5M76.5 280L112.5 299M76.5 280L63 361M41.5 202L6 191M41.5 202L24 151.5M41.5 202L34 126M41.5 202L57.5 195.959M41.5 202L69.5 232.5M6 191L24 151.5M6 191L1 134.5M24 151.5L1 134.5M24 151.5L34 126M24 151.5L15 118M1 134.5L15 118M34 126L15 118M34 126L57.5 195.959M57.5 195.959L69.5 232.5M93 264.5L85 209.5M93 264.5L119 254.5M93 264.5L112.5 299M85 209.5L119 254.5M85 209.5L131.579 219M85 209.5L136 192M85 209.5L83 173M119 254.5L141.5 242.5M119 254.5L131.579 219M119 254.5L184.5 337M119 254.5L112.5 299M141.5 242.5L136 192M141.5 242.5L153 232.5M141.5 242.5L184.5 337M136 192L131.579 219M136 192L133.5 148M136 192L106.5 180.231M83 173L106.5 180.231M83 173L80 127.5M133.5 148L106.5 180.231M133.5 148L123.5 114M133.5 148L128 95.5M106.5 180.231L80 127.5M106.5 180.231L123.5 114M80 127.5L123.5 114M80 127.5V91M123.5 114L128 95.5M123.5 114L119 73M123.5 114L80 91M128 95.5L119 73M128 95.5L125.5 54M119 73L80 91M119 73L125.5 54M119 73L111.5 37.5M80 91L111.5 37.5M80 91V49.5L111.5 37.5M125.5 54L111.5 37.5M153 232.5L149 202M153 232.5L169.5 234.5M153 232.5L184.5 337M149 202L169.5 234.5M149 202L163 184M149 202L146.5 160M169.5 234.5L205.5 242M169.5 234.5L163 184M169.5 234.5L184.5 337M205.5 242L180.5 213.25M205.5 242L207 184M205.5 242L217 245.5M205.5 242L184.5 337M163 184L146.5 160M163 184L166.5 134.5M163 184L201 111.5M163 184L207 151.5M163 184H207M163 184L180.5 213.25M146.5 160L166.5 134.5M146.5 160L149 108M166.5 134.5L149 108M166.5 134.5L201 111.5M149 108L201 111.5M149 108L144.5 75M201 111.5L207 151.5M201 111.5L144.5 75M201 111.5L198 73M201 111.5L175.332 73M207 151.5V184M207 184L180.5 213.25M144.5 75L146.5 37.5M144.5 75L175.332 73M198 73H175.332M198 73L192.5 33.5M146.5 37.5L149 12M146.5 37.5L169.5 35.5M146.5 37.5L175.332 73M175.332 73L192.5 33.5M175.332 73L169.5 35.5M192.5 33.5L169.5 35.5M192.5 33.5L184.5 8.5M149 12L169.5 35.5M149 12L166.5 1M169.5 35.5L184.5 8.5M169.5 35.5L166.5 1M184.5 8.5L166.5 1M217 245.5L221 221M217 245.5L240.5 258.5M217 245.5L184.5 337M221 221L240.5 258.5M221 221L250 238.75M221 221L228 180.231M240.5 258.5L279 256.5M240.5 258.5L250 238.75M240.5 258.5L279 322M240.5 258.5L184.5 337M279 256.5L250 238.75M279 256.5L285 195.959M279 256.5V322M250 238.75L228 180.231M250 238.75L285 195.959M250 238.75L276 175M228 180.231L232 114M228 180.231L276 175M232 114L276 175M232 114L285 148M232 114L285 83M232 114L272.5 49.5M232 114L236.5 62.5M276 175L285 148M276 175L285 195.959M285 148V83M285 148V195.959M285 83L272.5 49.5M272.5 49.5L236.5 62.5M272.5 49.5L254 37.5L236.5 62.5M279 322L297 377.5M279 322L184.5 337M297 377.5L184.5 337M297 377.5L211 383M297 377.5L205.5 484.5M297 377.5L316.5 454.5M297 377.5L323.5 393.5M184.5 337L112.5 299M184.5 337L63 361M184.5 337L141.5 423.5M184.5 337L211 383M112.5 299L63 361M63 361L30.5 454.5M63 361L24 377.5M63 361L141.5 423.5M30.5 454.5L24 377.5M30.5 454.5L141.5 423.5M30.5 454.5L34 536M141.5 423.5L211 383M141.5 423.5L205.5 484.5M141.5 423.5L34 536M141.5 423.5L131.5 506.364M211 383L205.69 481M205.5 484.5L316.5 454.5M205.5 484.5L276 546M205.5 484.5L250 585.5M205.5 484.5L131.5 506.364M205.5 484.5L205.69 481M205.5 484.5L141.5 528.065M316.5 454.5L276 546M316.5 454.5L323.5 393.5M316.5 454.5L364 451M316.5 454.5L336 484.5M276 546L250 585.5M276 546L336 484.5M34 536L59.5 571.5M34 536L131.5 506.364M59.5 571.5L69.5 628M59.5 571.5L131.5 506.364M59.5 571.5L184.5 601.5M59.5 571.5L141.5 528.065M69.5 628L99 682.5M69.5 628L184.5 601.5M99 682.5L178.5 661M99 682.5L184.5 601.5M178.5 661L256.5 682.5M178.5 661L184.5 601.5M256.5 682.5L250 585.5M256.5 682.5L184.5 601.5M250 585.5L184.5 601.5M131.5 506.364L141.5 528.065M184.5 601.5L205.69 481M184.5 601.5L141.5 528.065M323.5 393.5H369.5M323.5 393.5L351 361M364 451L336 484.5M364 451L369.5 393.5M364 451L415 390M369.5 393.5L351 361M369.5 393.5L415 390M369.5 393.5L421 366M351 361L421 366M351 361L399.5 331M351 361V331M415 390L421 366M421 366L399.5 331M399.5 331L392.5 284L369.5 291M399.5 331H351M399.5 331L369.5 291M351 331L369.5 291';
	
// 	/**
// 		Options:
// 			{
// 				selector,
// 				path,
// 				gravity = .05,
// 				pointsGravity = -30,
// 				cursorGravity = -3000,
// 				offsetX = 0,
// 				offsetY = 0,
// 				scale = 1,
// 				lineColor ='#dbdbdb',
// 				lineWidth = 1,
// 				pointBorderWidth = 0,
// 				pointBordeColor = '#fff',
// 				pointColor = '#0c95ed',
// 				pointRadius = 3,
// 				timeout = 3000
// 			}
// 	 */
	
// 	// window.animateSVGPath ( { path, selector: '.animate-js', offsetX: 100, offsetY: 100 } );
// 	window.animateSVGPath ( { path, selector: '.animate-js', paddingVertical: 100, paddingHorizontal: 100 } );
});


