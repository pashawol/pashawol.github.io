$(document).ready(function() {	
	$(".header").on("click", ".header__cart .cartinline", function(){
		if($(".cartpopup").css("display") == "none") {
			$(".cartpopup").slideDown(500);
			$(".cartpopup").css("opacity", "1");
		}
		else {
			$(".cartpopup").slideUp(500);
			$(".cartpopup").css("opacity", "0");
		}
		
	});

	$(".header").on("click", ".header__cart .cartpopup .close", function(){
		$(".cartpopup").slideUp(500);
		$(".cartpopup").css("opacity", "0");		
		return false;
	});

	$(".header").on("click", ".nav-toggle", function(){
		if($(".header__nav").css("display") == "none") {
			$(".header__nav").slideDown(500);
			$(".header__nav").css("opacity", "1");
		}
		else {
			$(".header__nav").slideUp(500);
			$(".header__nav").css("opacity", "0");
		}
		return false;			
	});
	
	$(".header").on("click", ".header__callback .callback", function(){		
		$('.box-modal-callback').arcticmodal();
		return false;			
	});	
	//----------------------------/
	$(".actions__select").on("click", function(){
		$(".bx_catalog_item_scu").hide();
		$.arcticmodal('close');
	 });
	 $(".arcticmodal-close").on("click", function(){
		$(".bx_catalog_item_scu").hide();
	 });

	$(".box-modal-selectcolor").on("click", ".colors__item .color", function(){		
		$('.box-modal-selectcolor .colors__item .color').removeClass("is-select");
		$(this).addClass("is-select");
		return false;			
	});

	$(".productdetail").on("click", ".thumbs__item", function(){				
		$(".productdetail .thumbs__item").removeClass("is-active");
		$(this).addClass("is-active");
		$(".productdetail .image img").attr("src", $(this).find("img").attr("src"));		
		return false;
	});

	$(".productdetail").on("click", ".thumbs__item", function(){				
		$(".productdetail .thumbs__item").removeClass("is-active");
		$(this).addClass("is-active");
		$(".productdetail .image img").attr("src", $(this).find("img").attr("src"));		
		return false;
	});

	$(".owl-acessories").owlCarousel({ 
		loop: true,    
    	nav: true,
    	items: 1,
    	navText: ["", ""],
	});

	$(".productdetail .thumbs").owlCarousel({ 
		loop: false,    
    	nav: true,
    	items: 4,
    	margin: 5,    	
		navText: ["", ""],
		responsive:{
	        0:{
	            items:3
	        },
	        420:{
	            items:4
	        },	        
	        768:{
	            items:2
	        },
	        990:{
	            items:3
	        },
	        1200:{
	            items:4
	        }
	    }
	});

	$(".productdetail").on("click", ".nav-tabs a", function(){		
		$(".productdetail .nav-tabs a").removeClass("is-active");
		$(this).addClass("is-active");

		$(".productdetail .tab-content .tab-pane").removeClass("active");
		$(".productdetail .tab-content #" + $(this).attr("href")).addClass("active");
		
		return false;			
	});	

	if($("*").is(".cloud-zoom")) {	
		$('.cloud-zoom').CloudZoom();
	}

	if($("*").is("select")) {
		$("select").selectmenu();
	} 

	if($("*").is(".cart__items")) {
		$(".cart__items").mCustomScrollbar({
			axis:"x",
			advanced:{
				autoExpandHorizontalScroll:true
			}
		});
	}

	$("#agree").change(function(){
	    if(this.checked){
	        $(".cart__order .checkout").attr('disabled', false);
	        $(".cart__order .checkout").removeClass('disabled');
	    }else{
	        $(".cart__order .checkout").attr('disabled', true);
			$(".cart__order .checkout").addClass('disabled');
	    }
	});


	$(".cart").on("click", ".cart__order .checkout", function(){	
		
		if($(".cart__order .checkout").attr('disabled') == "disabled") {
			return false;			
		}
	});	

	if($("*").is(".tooltip")) {
		
		$('.help').tooltipster({		
			functionBefore: function(origin, continueTooltip) {			
		        origin.tooltipster('content', $(this).parent("label").parent("div").find(".tooltip").html());
		        continueTooltip();
		    },
			multiple: true,
			contentAsHTML: true,		
			minWidth: 300,
			maxWidth: 300,
			position: 'bottom'
		});
	}

	if($("*").is(".form-group-calendar")) {	
		$('.form-group-calendar .form-control').datepicker({	    
		    minDate: new Date()
		})
	}
	
	$(".bx_catalog_item_container").mouseover(function(){
		
	$(this).find(".first_img").hide();
	$(this).find(".second_img").show();
	});
	
	$(".bx_catalog_item_container").mouseover(function(){
		
	$(this).find(".first_img").hide();
	$(this).find(".second_img").show();
	});
	
	$(".bx_catalog_item_container").mouseout(function(){
		
	$(this).find(".first_img").show();
	$(this).find(".second_img").hide();
	});
		
	$(document).ready(function() {
    $("#user_phone, #phone , .phone").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( (event.keyCode == 61 && event.shiftKey === true) || event.keyCode == 107 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
             // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
             // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39))   {
                 // Ничего не делаем
                 return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
    });
	});
	
	
	
	
	
});

$(document).ready(function() {
	  $("a.scrollto").click(function() {
		//var element_id = slice(indexOf($(this).attr("href"), "#"));  
		var index = $(this).attr("href").indexOf("#");
		var element_id = $(this).attr("href").slice(index);  
		console.log(element_id);
		var elementClick = $(element_id);
		
		var destination = $(elementClick).offset().top - $(".header-wrapper").height();
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 800);
		return false;
	  });
	});
	
	$(".oreder_confirm").on("click", function(e){
		e.preventDefault();
		
	});


$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top > 150)	{
		$(".header").addClass("header-fixed");
	}
	else {
		$(".header").removeClass("header-fixed");
	}
    return false;
});