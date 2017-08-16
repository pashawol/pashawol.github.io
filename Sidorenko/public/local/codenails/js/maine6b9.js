// Определяем переменную для экономии памяти.
var doc = $(document);

doc
	.on('click', '[data-target-self]', function (e) {
		// Псевдо-ссылки 2.0
		// для открытия "ссылки" в текущем окне
		var url = $(this).data('targetSelf');
		if (e.metaKey || e.ctrlKey || e.button === 1) {
			window.open(url);
		}
		else {
			location = url;
		}
	})
	.on('click', '[data-target-blank]', function () {
		// Псевдо-ссылки 2.0
		// для открытия "ссылки" в новом окне
		window.open($(this).data('targetBlank'));
	})
	.on('click', '[data-click-target]', function (e) {
		// Эмулируем клик по другому элементу
		e.preventDefault();
		$($(this).data('clickTarget')).trigger('click');
	})
	.on('click', '[data-auth]', function (e) {
		// Авторизация в модальном окне
		e.preventDefault();
		var src = $(this).data('mfpSrc');

		$.magnificPopup.open({
			items: {
				src: src
			},
			type: 'inline',
			mainClass: 'medium',
			focus: '#user_login'
		});
		return false;
	})
	.on('click', '.press-res-trigger', function() {
		if($(this).next('[class^="press-detail-"]').is(':visible')) {
			$(this).next('[class^="press-detail-"]').slideUp();
			$(this).removeClass('open');
		} else {
			$(this).next('[class^="press-detail-"]').slideDown();
			$(this).addClass('open');
		}
	})
	/*.on('click', '.promo-image-video-inner', function() {

	})*/
	// Кнопка "Вернуться в начало"
	.on('click', '.up-button', function() {
		$('html,body').animate({
			scrollTop: $('html,body').offset().top
		}, 1000);
		return false;
	})

	// Кнопка "Сбросить фильтры"
	.on('click', '.reset-filters-button', function() {
		window.location.href = window.location.pathname;
	})

	.on('click', '.sideblock .sideblock-link-feedback', function () {
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'button',
		  eventAction: 'click',
		  eventLabel: 'obratnaya_svyaz'
		});
		//console.log("!!!");
		//yaCounter11591854.reachGoal('obratnyasend');
        //return true;
	})

	.on('click', '.tagget-b2', function () {
	   /*ga('send', {
		  hitType: 'event',
		  eventCategory: 'button',
		  eventAction: 'click',
		  eventLabel: 'pop-up_window'
		});*/
        ga('send', 'event', 'button', 'click','pop-up_window');
		yaCounter11591854.reachGoal('pop-up_window'); 
	})

	.on('click', '.target-email', function () {
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'link',
		  eventAction: 'click',
		  eventLabel: 'e-mail'
		});
		yaCounter11591854.reachGoal('e-mail');
	})
    
    .on('click', '.target-email', function () {
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'link',
		  eventAction: 'click',
		  eventLabel: 'e-mail'
		});
		yaCounter11591854.reachGoal('e-mail');
	})

	// Навигация с отправкой формы в публикациях
	.on('click', '.nav-with-form a', function (e) {
		e.preventDefault();
		var href = $(this).attr('href');
		$('.publications-search-form').attr('action', href).submit();		
	});



if (window.frameCacheVars !== undefined) {
	// Композит
	BX.addCustomEvent("onFrameDataReceived", function (json) {
		mainJsFile();
	});
}
else {
	// Обычный режим
	jQuery(document).ready(function ($) {
		mainJsFile();
	});
}

// Основной js-код
function mainJsFile() {
	// Дефолтные настройки magnificpopup
	$.extend(true, $.magnificPopup.defaults, {
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка...',
		gallery: {
			enabled: false,
			navigateByImgClick: true,
			preload: [1, 2],
			tPrev: 'Предыдущее изображение (Left arrow key)',
			tNext: 'Следующее изображение (Right arrow key)',
			tCounter: '%curr% из %total%'
		},
		image: {
			tError: '<a href="%url%">Изображение #%curr%</a> Не может быть загружено.'
		},
		ajax: {
			tError: 'Контент не загружен.'
		}
	});

	$('.farm-name-where').magnificPopup({
		type: 'inline',
		preloader: false,
	});

	// Ajax модальные окна
	$('.btn-ajax').magnificPopup({
		type: 'ajax',
		focus: 'input'
	});

	//Скрываем блоки с файлами и галереей
	$('.press-resources [class^="press-detail-"]').hide();

	//Галерея
	$('.press-detail-photo').magnificPopup({
		delegate: 'a:not(.press-archive)',
		type: 'image',
		gallery: {
            enabled: true,
            navigateByImgClick: true,
        }
	});

	// Галерея в слайдере
	$('.hover-block [data-mfp-src]').magnificPopup({
		type: 'image',
		gallery: {
            enabled: true,
            navigateByImgClick: true,
        }
	});

	$('.popup-youtube-class').magnificPopup({
		type: 'inline',
	});
    
    $('.farm-class').magnificPopup({
		type: 'image',
	});

	$('.hover-blocks').owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		dots: false,
		navText: ['<', '>'],
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 4
			},
			1000: {
				items: 6
			}
		}
	});

	// Показ заголовков видео после загрузки изображений слайда
	$('.youtube-video-heading').show();

    var tabContainers = $('[data-tabs-pages] > div');
    tabContainers.hide().filter(':first').show();
    $('[data-tabs-link] > div').filter(':first').addClass('selected');

    $('[data-tabs-link] > div').on('click', function () {
        if(!$(this).hasClass('selected')) {
            tabContainers.hide();
            $('[data-tabs-link] > div').removeClass('selected');
            var cl = '#'+$(this).data('target');
            console.log(cl);
            tabContainers.filter(cl).show();
            $(this).addClass('selected');
        }
        return false;
    });

    var tabContainers2 = $('[data-value-pages] > div');
    tabContainers2.hide().filter(':first').show();
    $('[data-value-link] > div').filter(':first').addClass('selected');

    $('[data-value-link] > div').on('click', function () {
        if(!$(this).hasClass('selected')) {
            tabContainers2.hide();
            $('[data-value-link] > div').removeClass('selected');
            var cl = '#'+$(this).data('target');
            tabContainers2.filter(cl).show();
            $(this).addClass('selected');
        }
        return false;
    });

}


/**
 * Функция для склонения слов
 * Пример использования: cnDeclination(5,'комментари|й|я|ев')
 *
 * @author Павел Белоусов <pb@info-expert.ru>
 *
 * @param int    number число, для которого будет расчитано окончание
 * @param string words  слово и варианты окончаний для 1|2|1 (1 комментарий, 2 комментария, 100 комментариев)
 *
 * @return string - слово с правильным окончанием
 */
function cnDeclination(number, words) {
	"use strict";
	var w = words.split('|'),
		n = number * 1;
	return n % 10 == 1 && n % 100 != 11 ? w[0] + w[1] : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? w[0] + w[2] : w[0] + w[3]);
}


/* Скрытие/показ поля поиска */
doc.on('click', '.show-top-serch', function (e) {
	$(".top-search-container").show();
	$(".top-search-field").focus();
});
doc.on('click', '.hide-form', function (e) {
	$(".top-search-container").hide();
});


/* Переключения вкладок раздела FAQ */
doc.on('click', '.qa-parent', function (e) {
	var $this = $(this);
	$('.qa-parent').removeClass('qa-parent-active');
	$this.addClass('qa-parent-active');
	var parentClass = "." + $this.prop('id');
	$('.qa-children').hide();
	$(parentClass).show();
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/* Ajax плавающий блок */

// Флаги
var sideblockFlagCatalog = true;
var sideblockFlagPriceList = true;
var sideblockFlagFeedback = true;
var sideblockCatalogLoaded = false;
var sideblockPriceListLoaded = false;
var sideblockFeedbackLoaded = false;

// Каталог
$(document).on('click', '.sideblock-link-catalog-ajax', function( event ){
	event.preventDefault();

	if(sideblockFlagCatalog && !sideblockCatalogLoaded) {
		$.post("http://www.nita-farm.ru/ajax-catalog-search.php", function(data, status){
			$('.ajax-loading').hide("slide", { direction: "right" }, 300);
			$('.ajax-loading-catalog').show("slide", { direction: "right" }, 300).html(data);
			sideblockFlagCatalog = false;
			sideblockFlagPriceList = true;
			sideblockFlagFeedback = true;
			sideblockCatalogLoaded = true;
			$('.sideblock-link-catalog-ajax').addClass('opened');
			$('.sideblock-link-pricelist-ajax').removeClass('opened');
			$('.sideblock-link-feedback-ajax').removeClass('opened');

		});
	}
	else if (sideblockFlagCatalog && sideblockCatalogLoaded) {
		$('.ajax-loading').hide("slide", { direction: "right" }, 300);
		$('.ajax-loading-catalog').show("slide", { direction: "right" }, 300);
		sideblockFlagCatalog = false;
		sideblockFlagPriceList = true;
		sideblockFlagFeedback = true;
		$('.sideblock-link-catalog-ajax').addClass('opened');
		$('.sideblock-link-pricelist-ajax').removeClass('opened');
		$('.sideblock-link-feedback-ajax').removeClass('opened');

	}
	else {
		$('.ajax-loading').hide("slide", { direction: "right" }, 300);
		sideblockFlagCatalog = true;
		$('.sideblock-link-catalog-ajax').removeClass('opened');
	}
});

// Прайс лист
$(document).on('click', '.sideblock-link-pricelist-ajax', function( event ){
	event.preventDefault();

	if(sideblockFlagPriceList && !sideblockPriceListLoaded) {
		$.post("http://www.nita-farm.ru/ajax-price-list.php", function(data, status){
			$('.ajax-loading').hide("slide", { direction: "right" }, 300);
			$('.ajax-loading-price-list').show("slide", { direction: "right" }, 300).html(data);
			sideblockFlagPriceList = false;
			sideblockFlagCatalog = true;
			sideblockFlagFeedback = true;
			sideblockPriceListLoaded = true;
			$('.sideblock-link-catalog-ajax').removeClass('opened');
			$('.sideblock-link-pricelist-ajax').addClass('opened');
			$('.sideblock-link-feedback-ajax').removeClass('opened');
		});
	}
	else if (sideblockFlagPriceList && sideblockPriceListLoaded) {
		$('.ajax-loading').hide("slide", { direction: "right" }, 300);
		$('.ajax-loading-price-list').show("slide", { direction: "right" }, 300);
		sideblockFlagPriceList = false;
		sideblockFlagCatalog = true;
		sideblockFlagFeedback = true;
		$('.sideblock-link-catalog-ajax').removeClass('opened');
		$('.sideblock-link-pricelist-ajax').addClass('opened');
		$('.sideblock-link-feedback-ajax').removeClass('opened');
	}
	else {
		$('.ajax-loading').hide("slide", { direction: "right" }, 300);
		sideblockFlagPriceList = true;
		$('.sideblock-link-pricelist-ajax').removeClass('opened');
	}
});

// Обратная связь
$(document).on('click', '.sideblock-link-feedback-ajax', function( event ){
	event.preventDefault();
	$('.sideblock-link-feedback-ajax').addClass('opened');

	if(sideblockFlagFeedback && !sideblockFeedbackLoaded) {
		$.post("http://www.nita-farm.ru/ajax-feedback.php", function(data, status){
			$('.ajax-loading').hide("slide", { direction: "right" }, 300);
			$('.ajax-loading-feedback').show("slide", { direction: "right" }, 300).html(data);
			sideblockFlagFeedback = false;
			sideblockFlagPriceList = true;
			sideblockFlagCatalog = true;
			sideblockFeedbackLoaded = true;
			$('.sideblock-link-catalog-ajax').removeClass('opened');
			$('.sideblock-link-pricelist-ajax').removeClass('opened');
			$('.sideblock-link-feedback-ajax').addClass('opened');
			$('input, textarea').placeholder();
		});
	}
	else if (sideblockFlagFeedback && sideblockFeedbackLoaded) {
		$('.ajax-loading').hide("slide", { direction: "right" }, 300);
		$('.ajax-loading-feedback').show("slide", { direction: "right" }, 300);
		sideblockFlagFeedback = false;
		sideblockFlagPriceList = true;
		sideblockFlagCatalog = true;
		$('.sideblock-link-catalog-ajax').removeClass('opened');
		$('.sideblock-link-pricelist-ajax').removeClass('opened');
		$('.sideblock-link-feedback-ajax').addClass('opened');
	}
	else {
		$('.ajax-loading').hide("slide", { direction: "right" }, 300);
		sideblockFlagFeedback = true;
		$('.sideblock-link-feedback-ajax').removeClass('opened');
	}
});

/* Переключения селектов поиска по публикациям */
$(document).on('change', '#agall', function(){
	if ($(this).is(":checked")) {
		$('.ps-ag-checkbox').prop( "checked", true );
	}
	else {
		$('.ps-ag-checkbox').prop( "checked", false );
	}
});

$(document).on('change', '#fgall', function(){
	if ($(this).is(":checked")) {
		$('.ps-fg-checkbox').prop( "checked", true );
	}
	else {
		$('.ps-fg-checkbox').prop( "checked", false );
	}
});

$(document).on('change', '.ps-ag-checkbox', function(){
	if ($(this).is(":checked")) {}
	else {
		$('#agall').prop( "checked", false );
	}
});

$(document).on('change', '.ps-fg-checkbox', function(){
	if ($(this).is(":checked")) {}
	else {
		$('#fgall').prop( "checked", false );
	}
});


/* Поиск с подсказками */

// Событие при изменении текста
$(document).on('keyup', '.hints-search-input', function(){
	var text = $(this);
	$(".hints-search-hints").show();
	showHints(text);
});

// Скрытие/показ подсказок
function showHints(text) {
	var typedText = text.val().toLowerCase();
	var hints = $('.hints-search-hint');

	if (typedText != '') {
		$(hints).each( function() {
			var hintText = $(this).text().trim().toLowerCase();
			if (hintText.indexOf(typedText) == 0) {
				$(this).show().addClass('hint-item');
			} else {
				$(this).hide().removeClass('hint-item');
			}
		});
	} else {
		$(hints).hide();
		$(".hints-search-hints").hide();
	}
}

// Действия при клике на подсказку
$(document).on('click', '.hints-search-hint', function(){
	var textToChange = $(this).text().trim();
	$('.hints-search-input').val(textToChange);
	disableSelects();
	$('.hints-search-hint').hide().removeClass('hint-item');
	$(".hints-search-hints").hide();
});

// Действия при клике кнопку псевдоселекта
$(document).on('click', '.hs-select-button', function(){
	var inputText = $('.hints-search-input').val();
	if (inputText == "") {
		$('.hints-search-hint').addClass('hint-item').toggle();
		$(".hints-search-hints").toggle();
	}
	else {
		$('.hint-item').toggle();
		$(".hints-search-hints").toggle();
	}
});

// Фикс неизвестной ошибки
function ElementMaxHeight() {}

/* Равные высоты */
$('.product-detail-equal-heights').equalHeights();


/*--------------------------------*/
/* Логика формы поиска препаратов */
/*--------------------------------*/

/* События */
doc.ready(function() {
	checkTextInput();
});

doc
	.on('keyup', '.hints-search-input', function (e) {
		checkTextInput();
	})
	.on('change', '.hints-search-input', function (e) {
		checkTextInput();
	})
	.on('click', '.products-search-reset-button', function (e) {
		e.preventDefault();
		resetSearchForm();
	})
	.on('click', '.ui-menu-item', function (e) {
		$(this).addClass('ui-state-focus-gen');
		$(this).siblings().removeClass('ui-state-focus-gen');
		doFilter();
	});

/* Функции */
function checkTextInput() {
	if ( $('.hints-search-input').val() == "")
		enableSelects();
	else
		disableSelects();
}

function disableSelects() {
	$( ".products-list-search-form select" ).selectmenu( "option", "disabled", true );
}

function enableSelects() {
	$( ".products-list-search-form select" ).selectmenu( "option", "disabled", false );
}

function resetSearchForm() {
	$('.hints-search-input').val('');
	$('.hints-search-hint').removeClass('removed').hide();
	$('.hints-search-hints').hide();
	$('.ui-menu-item').removeClass('ui-state-focus-gen');
	resetSelects();
	enableSelects();
}

function resetSelects() {
	$( ".products-list-search-form select").val('0');
	$( ".products-list-search-form select" ).selectmenu( "refresh" );
}

function doFilter() {
	$('.hints-search-hint').removeClass('removed').hide();
	$('.hints-search-hints').hide();
	$.each ($('.ui-menu-item.ui-state-focus-gen'), function(key, selectItem) {
		var classList = $(selectItem).attr("class").split(' ');
		var filterClass;
		$.each (classList, function(index, value) {
			if (! value.indexOf('psf-')) {
				filterClass = value;
			}
		});
		console.log(filterClass);
		$.each ($('.hints-search-hint'), function(index, value) {
			if (! $(value).hasClass(filterClass)) {
				$(value).addClass('removed');
			}
		});
	});
}


scrollToTop = function(){
		var _isScrolling = false;
		// Append Button
		$('body').append($('<a />').addClass('scroll-to-top ROUND_COLOR SCROLLTOTOP_POSITION').attr({'href': '#', 'id': 'scrollToTop'}));
		$('body').on('click', '#scrollToTop', function(e){
			e.preventDefault();
			$('body, html').animate({scrollTop : 0}, 500);
			return false;
		});
		$(window).scroll(function(){
			if(!_isScrolling) {
				_isScrolling = true;
				if($(window).scrollTop() > 150){
					$('#scrollToTop').stop(true, true).addClass('visible');
					_isScrolling = false;
				}
				else{
					$('#scrollToTop').stop(true, true).removeClass('visible');
					_isScrolling = false;
				}
				checkScrollToTop();
			}
		});
}

checkScrollToTop = function(){
	var bottom = 55,
		scrollVal = $(window).scrollTop(),
		windowHeight = $(window).height(),
		footerOffset = $('footer').offset().top +170;

		warpperWidth = $('body > .wrapper > .wrapper_inner').width();
		$('#scrollToTop').css('margin-left', Math.ceil(warpperWidth / 2) + 23);

	if(scrollVal + windowHeight > footerOffset){
		$('#scrollToTop').css('bottom', bottom  + scrollVal + windowHeight - footerOffset - 0);
	}
	else if(parseInt($('#scrollToTop').css('bottom')) > bottom){
		$('#scrollToTop').css('bottom', bottom);
	}
}

$(function(){
	scrollToTop();
	$(window).resize(function(){
		checkScrollToTop();
	});
});
function checkFooterTop(){
    var h = $(document).height();
    var f = $(".footer-wrapper");

    //console.log(h);
    //console.log(f.height());
   // console.log(f.offset().top);


   var fix =  f.offset().top + f.height();
   // console.log(h);
    //console.log(fix)
    if(fix < h){
        var d = h - f.height();

       // $(".footer-wrapper").css("position","absolute");
        //$(".footer-wrapper").css("top",d+"px");
    }

}

