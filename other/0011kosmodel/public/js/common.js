jQuery(document).ready(function($) {

		$('.datepicker').each(function(index, el) {
				 $('.datepicker').datepicker({
						 locale: 'ru-ru',
						 uiLibrary: 'bootstrap4',
						 format: "dd.mm.yyyy",
						 change: function(e){
								var time=$(this).val(),
										id=this.id;
								time=time.split('.');
								var php_time=Math.floor(new Date(time[2],time[1]-1,time[0]).getTime() / 1000);
								if($('#'+id+"_utc").length){
									 $('#'+id+"_utc").val(php_time)
								}
						 }
				 });
		});

		// для свг
		svg4everybody({});
		// Custom JS
		$(".top-nav__lk.dropdown").on('click ', function() {
				var th = $(this).find("ul").fadeToggle(50);
		})
		$(document).mouseup(function(e) {
				var container = $(".top-nav__lk.dropdown");
				if (container.has(e.target).length === 0) {
						container.find("ul").fadeOut(50);
				}
		});
		$(".dropdown .top-nav__link, .drop-inner .drop__link, .drop-sub-inner .drop-sub__link, .drop-sub-inner > a",$('.aside')).click(function(e) {
				e.preventDefault();
				// e.preventDefault();
				// e.prevenDefault()
		})
		// var togli =  '.dropdown, .drop-inner, .drop-sub-inner';
		$('.trop, .aside').find(".dropdown > a , .drop-inner > a , .drop-sub-inner > a ").each(function() {
				var th = $(this);
				th.click(function() {
						th.toggleClass('active').next().slideToggle();
						th.parent().toggleClass('active');
				})
		})
		$(".btn-toggle-js").click(function() {
				$(this).toggleClass("active").next().slideToggle();
		})
		// галерея
		$(".gal").each(function() {
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
		// мобильное меню
		var toggMnu = $(".toggle-mnu-1").click(function() {
				$(".toggle-mnu-1").toggleClass("on");
				// $("body").toggleClass("fixed");
				$(".hidden-mnu").toggleClass("active");
				$("body").toggleClass("fixed");
				return false;
		});
		$(document).mouseup(function(e) {
				var container = $(".hidden-mnu.active");
				if (container.has(e.target).length === 0) {
						$(".toggle-mnu-1").removeClass("on");
						// $("body").toggleClass("fixed");
						$(".hidden-mnu").removeClass("active");
						$("body").removeClass("fixed");
				}
		});

		function heightses() {
				var w = $(window).width();
				var wh = $(window).height();
				// условие при котором выпадающее меню открывается  или вниз или вверх!))
				$(".top-nav .drop-sub-inner").hover(function() {
						$(this).find("  .drop-sub-inner-inner").each(function() {
								// $("  .drop-sub-inner-inner").each(function(){
								let th = $(this),
										thp = th.parents(".top-nav  .drop-sub");
								if (($(th).offset().top + th.height()) >= wh || ($(th).offset().top + th.height()) >= (thp.offset().top + thp.height())) {
										th.css({
												top: "auto",
												bottom: "0",
										})
								} else {
										th.css({
												top: "0",
												bottom: "auto",
										})
								}
						})
				})
				// прижать футер к низу
				$(".main-wrapper").css("padding-bottom", $("footer").height() + 60)
				// $(".otz__item .text-wrap ").height('auto').equalHeights();
				//
				// скрывает моб меню
				if (w > 991) {
						$(".toggle-mnu-1").removeClass("on");
						// $("body").removeClass("fixed");
						$(".hidden-mnu").removeClass("active");
						$("body").removeClass("fixed");
				}
				var topH = $("header ").innerHeight();
				if ($(this).scrollTop() > topH) {
						$('.top-nav  ').addClass('fixed');
				} else if ($(this).scrollTop() < topH) {
						$('.top-nav  ').removeClass('fixed');
				}
				$(window).scroll(function() {
						if ($(this).scrollTop() > topH) {
								$('.top-nav  ').addClass('fixed');
						} else if ($(this).scrollTop() < topH) {
								$('.top-nav  ').removeClass('fixed');
						}
				});
				// конец добавил
		}
		$(window).resize(function() {
				heightses();
		});
		heightses();
		// листалка по стр
		$(" .scroll-link").click(function() {
				var elementClick = $(this).attr("href");
				var destination = $(elementClick).offset().top;
				$('html, body').animate({
						scrollTop: destination
				}, 1100);
				return false;
		});
		// или
		// Cache selectors
		// табы  . Теперь данные активного таба остается в storage
		$(function() {
				var tab = ('tabs');
				$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {
						$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
				});
		});
		// слайдер в шапке
		 var swiper = new Swiper('.header-block__slider', {
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				 autoplay: {
				delay: 5000,
			 reverseDirection: true,
			},
				});
		// слайдер каталога
		var swiper2 = new Swiper('.slider-js', {
				// slidesPerView: 5,
				watchOverflow: true,
				slidesPerView: 'auto',
				spaceBetween: 20,
				freeMode: true,
				freeModeMomentum: true,
				navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
				},
		});
		var titles = [];
		$('.s-product__slider-js .swiper-slide').each(function(i) {
				titles.push($(this).data('name'))
		});
		var mySwiper3 = new Swiper('.s-product__slider-js', {
				// Optional parameters
				lazy: true,
				pagination: {
						el: '.swiper-pagination.row',
						clickable: true,
						renderBullet: function(index, className) {
								return '<div class="tab__link  ' + className + '"> <div class="dots-inner"> <img class="res-i" src="' + titles[index] + '" /></div></div>';
						},
				},
		});
		var mySwiper4 = new Swiper('.slider-inst-js', {
				// Optional parameters
				lazy: true,
				loop: true,
				pagination: {
						el: '.swiper-pagination',
						clickable: true,
				},
		});
		// слайдер цвета в карточке
		var swiper4 = new Swiper('.color-slider', {
				// slidesPerView: 5,
				slidesPerView: 'auto',
				watchOverflow: true,
				spaceBetween: 0,
				freeMode: true,
				slidesPerGroup: 3,
				// centeredSlides: true,
				loop: true,
				loopFillGroupWithBlank: true,
				touchRatio: 0.2,
				slideToClickedSlide: true,
				freeModeMomentum: true,
				navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
				},
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


		// маска на инпут
		$("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
				"mask": "+7(999)999-99-99"
		});
		// кастомный селект
		$('.custom-select-js').not('.not_select').each(function() {
				$(this).select2();
		})
		// кастомный инпут файл
		$(".dropzone").dropzone({
				url: "/templates/cosmedelru/upload/file.php",
				addRemoveLinks: true,
				acceptedFiles: 'image/*',
				// uploadMultiple: true,
		});
		// показать / скрыть блок  написания отзыва
		$(".s-rew__btn-toggle").click(function() {
				$(this).toggleClass("active").next().slideToggle();
		})
		// показать блок друго подарка
		$(".s-card-prod__btn-toggle").click(function() {
				$(this).toggleClass("active")
				$(".toggle-block-js").slideToggle().toggleClass("active");
				swiper2.update();
		})
		// accordion
		$(".showhide").click(function() {
				$(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"),
						$(this).next("div").filter(function() {
								return "block" == $(this).css("display")
						}).slideUp().parent().removeClass("active"),
						$(this).next("div").filter(function() {
								return "none" == $(this).css("display")
						}).slideDown().prev("div").addClass("active").parent().addClass("active")
		})

		$(".toggle-btn-js").click(function() {
				$(this).toggleClass("active").next().slideToggle();
		})
});

// форма авторизации
jQuery(document).ready(function($) {
				$('#logout_link,.logout_link').click(function(event) {
				 event.preventDefault();
				 document.getElementById('logoutform').submit();
		});
});
//скрипт на странице доставка
(function(){
		if(typeof category_region!=="undefined"){

				$('#ragion-01').select2({
				}).on('change', function(e) {
						var v=$(this).val();
						category_region.forEach( function(element, index) {
								 if(element.id==v){
										 $('#ragion-02').html("");
										 if(element.subcategories.length>0){
												element.subcategories.forEach(function(sub){
														$('#ragion-02').append('<option value="'+sub.link+'">'+sub.name+'</option>')
												})
										 }else{
											 $('#ragion-02').html("<option value='-1'>Нет доступных городов</option>");
										 }
								 }
						});
						var t=$('#ragion-01 option:selected').text();
						var l=$('#ragion-01 option:selected').data('link');
						$('#result_region').html('<a href="'+l+'">Посмотреть '+t+'</a>')
				}).trigger('change');
				$('#ragion-02').select2({
				}).on('change',function(){
					 var v=$(this).val();
					 if(v!=='-1'){
							 var t=$('#ragion-02 option:selected').text();
							 $('#result_').html('<a href="'+v+'">Посмотреть '+t+'</a>');
					 }
				}).trigger('change');
		}
})()

// продукт плюс минус
jQuery(document).ready(function($) {
			$('.minus_product').click(function(event) {
					var $inp=$(this).parents('.block_qty').find('.qty'),
					v=parseInt($inp.val());
					if(v>1){
						 var r=v-1;
						 $inp.val(r);
						 setCountBasket(r);
					}
			});
			$('.plus_product').click(function(event) {
					var $inp=$(this).parents('.block_qty').find('.qty'),
					v=parseInt($inp.val()),
					r=v+1;
					$inp.val(r);
					setCountBasket(r)
			});
			function setCountBasket(paramVal){
				 var tobasketlink_product=$('.tobasketlink_product a').attr('href');
				 var param='count';

				 var newAdditionalURL ="";
				 var tempArray = tobasketlink_product.split("?");
				 var baseURL = tempArray[0];
				 var additionalURL = tempArray[1];
				 var temp = "";
				 if (additionalURL) {
							 tempArray = additionalURL.split("&");
							 for (var i=0; i<tempArray.length; i++){
									 if(tempArray[i].split('=')[0] != param){
											 newAdditionalURL += temp + tempArray[i];
											 temp = "&";
									 }
							 }
					 }

					 var rows_txt = temp + "" + param + "=" + paramVal;
					 var newUrl= baseURL + "?" + newAdditionalURL + rows_txt;
					 $('.tobasketlink_product a').attr('href',newUrl);
			}
});

//корзина
jQuery(document).ready(function($) {
	 $('.minus_basket').click(function(event) {
			 $('.conteer_recalc').removeClass('hidden');
			 var count_input=$(this).parents('.input-group').find('.count_input'),
					 v=parseInt(count_input.val());
			 if(v>1){
					 count_input.val(parseInt(v)-1);
			 }
	 });
	 $('.plus_baket').click(function(event) {
			 $('.conteer_recalc').removeClass('hidden');
			 var count_input=$(this).parents('.input-group').find('.count_input'),
					 v=count_input.val();
			 count_input.val(parseInt(v)+1);
	 });

});

jQuery(document).ready(function($) {
	 $('.vote_top').click(function(event) {
			 let v=$(this).data('vote');
			 $('[name="vote"]',$('#form_vote_top')).prop( "checked",false );
			 $('[value="'+v+'"]',$('#form_vote_top')).prop( "checked",true );
			 $('#form_vote_top')[0].submit();

	 });
});

jQuery(document).ready(function($) {
	 $('body').on('click', '#product_foto', function(event) {
			 let src=$(this).children('img').attr('src');
			 $.magnificPopup.open({
				 items: {
					 src: src
				 },
				 type: 'image'
			 });
	 });
	 //эксперт отвечал
	 $('#ekspert_otvechal_link').click(function(event) {
			 event.preventDefault();
			 $('#ekspert_otvechal_2').removeClass('hidden');
			 $(this).remove();
	 });
});

// формы на аякс
(function($){
	 $('#feedback_form').submit(function(event) {
			 event.preventDefault();
			 var data=$(this).serialize(),
					 url=$(this).attr('action'),
					 $but=$('[type="submit"]',$(this));
			 $but.attr('disabled', 'disabled');
			 $.ajax({
					 url: url,
					 type: 'POST',
					 // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
					 data: data,
			 })
			 .done(function(s) {
						$('.s-profile__thanks').removeClass('hidden');
						setTimeout(function(){
								$('.s-profile__thanks').addClass('hidden');
						},4000)
			 })
			 .fail(function() {
					 console.log("error");
			 })
			 .always(function() {
					 $but.removeAttr('disabled');
			 });

	 });
})(jQuery)
