(function($) {
 

	$('.menu-item-8 a, .menu-item-9 a, .menu-item-10 a').attr('target','blank');

	$('.faq_title').on("click tap", function(){
		if ($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
		} else {
			$('.faq.open').removeClass('open');
			$(this).parent().addClass('open');
		}
	});

	$('.modal_close').on("click tap", function(){
		$(this).parents('.modal').removeClass('show');
		$('body').removeClass('showmodal');
	});

	$('#open_map').on("click tap", function(e){
		e.preventDefault();
		$('#map_modal').addClass('show');
		$('body').addClass('showmodal');
	});
	$('.modal_content_wrap').on("click tap", function(e){
		if($(e.target).attr('class')!='modal_content_wrap') return;
		$(this).parents('.modal').removeClass('show');
		$('body').removeClass('showmodal');
	});

	$('#block1_more').on("click tap", function(){
		var scroll_el='#block2';
		$('html, body').animate({scrollTop:$(scroll_el).offset().top},500);
	});
	$('#up').on("click tap", function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0},500);
	});

	var bl1h=$('#block1').height();

	$(document).on("scroll",function(){
		var scrollPos=$(document).scrollTop();
		var time_bl1h=bl1h-83;
		if(scrollPos>200){
			$('.home #header').addClass('forfixed');
		}else{
			$('.home #header').removeClass('forfixed');
		}
		if(scrollPos>time_bl1h||scrollPos==time_bl1h){
			$('.home #header, #mobile_phone').addClass('fixed');
		}else{
			$('.home #header, #mobile_phone').removeClass('fixed');
		}
	});

	$(window).load(function(){
		var scrollPos=$(document).scrollTop();
		var time_bl1h=bl1h-83;
		if(scrollPos>200){
			$('.home #header').addClass('forfixed');
		}else{
			$('.home #header').removeClass('forfixed');
		}
		if(scrollPos>time_bl1h||scrollPos==time_bl1h){
			$('.home #header').addClass('fixed');
		}else{
			$('.home #header').removeClass('fixed');
		}
	});

	$('.service_l').on("click tap", function(){
		var id = $(this).data('id');
		var data = {
			action: 'inconver_get_service',
			id: id
		};
		jQuery.post( '/wp-admin/admin-ajax.php', data, function(response) {
			$('#service_modal_content').html(response);
			$('#service_modal').addClass('show');
			$('body').addClass('showmodal');
		});
	});

	$("#menu-main-menu a, #menu-blog-menu a").on("click tap", function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 81;
        $('#menu').removeClass('show');
        if ($.browser.safari) {
            $('body').stop().animate({ scrollTop: destination }, 500);
        } else {
            $('html').stop().animate({ scrollTop: destination }, 500);
        }
        return false; 
    });

    $('#header .blue, .price_block .blue, #service_modal .blue, .slide_content .blue, #blue_menu').on("click tap", function(e){
    	e.preventDefault();
    	$('#service_modal').removeClass('show');
    	$('#menu').removeClass('show');
    	$('body').removeClass('showmodal');
        var destination = $('#block6').offset().top - 81;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100);
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        console.log(destination);
    });

    $('#logo').on("click tap", function(e){
    	e.preventDefault();
    	var elementClick = '#block1';
        var destination = $(elementClick).offset().top - 81;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100);
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
    });

    $('#open_menu').on("click tap", function(){
    	$('#menu').addClass('show');
    });
    $('#menu_close').on("click tap", function(){
    	$('#menu').removeClass('show');
    });

    // Возврат на главную
    $(window).load(function () {
        $.extend({
            getUrlVars: function () {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for (var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            },
            getUrlVar: function (name) {
                return $.getUrlVars()[name];
            }
        });
        var byName = $.getUrlVar('scroll'); // в ссылке пункта меню нужно прописать это /?scroll=services

        // Условие для для возвращения на форму. Если нужен здвиг то пишем .offset().top + 900 например.
        if (byName == 'block3') { // url
            var top = jQuery('#block3').offset().top; // id блока куда скролить
            jQuery('body,html').animate({scrollTop: top}, 500);
        }
        // Условие для для возвращения на форму. Если нужен здвиг то пишем .offset().top + 900 например.
        if (byName == 'block4') { // url
            var top = jQuery('#block4').offset().top; // id блока куда скролить
            jQuery('body,html').animate({scrollTop: top}, 500);
        }
        // Условие для для возвращения на форму. Если нужен здвиг то пишем .offset().top + 900 например.
        if (byName == 'block5') { // url
            var top = jQuery('#block5').offset().top; // id блока куда скролить
            jQuery('body,html').animate({scrollTop: top}, 500);
        }
        // Условие для для возвращения на форму. Если нужен здвиг то пишем .offset().top + 900 например.
        if (byName == 'block8') { // url
            var top = jQuery('#block8').offset().top; // id блока куда скролить
            jQuery('body,html').animate({scrollTop: top}, 500);
        }
    });


    $( document ).ready(function() {
        var nav = $('.single .content_box img');
        if (nav.length) {
            var image_h = $('.single .content_box img').height() / 2;
            var offsetFromScreenTop = $(".single .content_box img").offset().top;
            var result_h = offsetFromScreenTop + image_h;
            $('#bg_blog').css({
                'height': result_h,
            });
        }

        var nav_2 = $('.post_blog .row_bg');
        if (nav_2.length) {
            var image_h_2 = $('.post_blog  img').height() / 2;
            var offsetFromScreenTop_2 = $(".post_blog .row_bg").offset().top;
            var result_h = offsetFromScreenTop_2 + image_h_2;
            $('#bg_blog_home').css({
                'height': result_h,
            });
        }
    });

})( jQuery );

function initMap() {
	var coordinates = {lat: -34.397, lng: 150.644};
	var map = new google.maps.Map(document.getElementById('map'), {
    	center: coordinates,
    	zoom: 10
    });
    
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: '/wp-content/themes/blankslate/img/map.png'
    });
}

