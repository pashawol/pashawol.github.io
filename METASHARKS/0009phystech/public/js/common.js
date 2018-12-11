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
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню

		var topH = $("header ").innerHeight();

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

	$('.datepicker-date').each(function(){
		var th =$(this);
		th.datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			format: 'dd.mm.yyyy',
			minDate: today,
			select: function (e) {
				th.parents('label').removeClass("empty");
			}
		  // modal: true 
		});
		
		th.click(function(){
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
		function hNewtop(){
			var th = $(".news-block");
			var hNew = th.height() ;
			// th.css('margin-top', hNew);
			$(".header-block__slide").css({'paddingBottom': hNew+ 130});
			$(".header-block__slider .slick-dots").css({'top': -hNew - 100});
		}
		$(window).resize(function () {
			hNewtop();
		});
		hNewtop();
});