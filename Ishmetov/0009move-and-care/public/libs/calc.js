(function($) {

	$('#amForm').submit(function(e){
		e.preventDefault();
	});

	$('#CalculatorSubmit, #get-quote, #pricing-form').on("click", function(){
		//$('body,html').animate({scrollTop: 100}, 1500);
		valid = true;
		var date_input = $('.datepicker'),
			fromZip_input = $('#fromZip'),
			toZip_input = $('#toZip'),
			Etaj_from_select = $('#Etaj_from'),
			Etaj_to_select = $('#Etaj_to'),
			Type_room_select = $('#Type_room');
			
		if (!date_input.val()) {
			date_input.closest('.form-group').addClass('has-error');
			valid = false;
		}
		if (!toZip_input.val()) {
			toZip_input.closest('.form-group').addClass('has-error');
			valid = false;
		}
		if (!Etaj_from_select.val()) {
			Etaj_from_select.closest('.form-group').addClass('has-error');
			valid = false;
		}
		if (!Etaj_to_select.val()) {
			Etaj_to_select.closest('.form-group').addClass('has-error');
			valid = false;
		}
		if (!fromZip_input.val()) {
				fromZip_input.closest('.form-group').addClass('has-error');
				valid = false;
			}
		if (!Type_room_select.val()) {
			Type_room_select.closest('.form-group').addClass('has-error');
			valid = false;
		}
		if (valid) {
			$('#calc_modal .stepwizard-step a[href="#step-2"]').trigger('click');
			$('#calc_modal').addClass('show');
			$('body').addClass('showmodal');
		} else {
			date_input.focus(function(){
				date_input.closest('.form-group').removeClass('has-error');
			});
			fromZip_input.focus(function(){
				fromZip_input.closest('.form-group').removeClass('has-error');
			});
			toZip_input.focus(function(){
				toZip_input.closest('.form-group').removeClass('has-error');
			});
			Etaj_from_select.closest('.form-group').find('.select').click(function(){
				Etaj_from_select.closest('.form-group').removeClass('has-error');
			});
			Etaj_to_select.closest('.form-group').find('.select').click(function(){
				Etaj_to_select.closest('.form-group').removeClass('has-error');
			});
            Type_room_select.closest('.form-group').find('.select').click(function(){
                Type_room_select.closest('.form-group').removeClass('has-error');
            });
		}
		return false;
	});


	var dates_not_allowed = {
	    '2017-04-16': 1, // holiday
	};
	var dates_rate_array = new Array(); // populated in GetDatePickerRates()
	var dates_legend_html = '<div class="ui-datepicker-buttonpane ui-widget-content"><span class="legend discount-rate">Discount</span><span class="legend regular-rate">Regular</span><span class="legend subpeak-rate">subpeak</span><span class="legend peak-rate">Peak</span></div>';

	GetDatePickerRates(); // populate dates_rate_array
	if($(window).width() >= 633){
	    $(".datepicker").datepicker({ 
			numberOfMonths: 1,
	        minDate: "+0",
	        maxDate: "+180",
	        showAnim: "slideDown",

	        beforeShow: function(event, ui) {
	            setTimeout(function() {
	                $('#ui-datepicker-div').append(dates_legend_html);
	            }, 150);
	            if (! ui.dpDiv.hasClass('margin-set')) {
	                ui.dpDiv.animate({ 'marginTop' : "+=6px" }).addClass('margin-set');
	            }
	        },
	        onChangeMonthYear: function(event, ui) {
	            setTimeout(function() {
	                $('#ui-datepicker-div').append(dates_legend_html);
	            }, 50);
	        },
	        onSelect: function(dateText, inst) {
	            $(this).removeClass('error');
	            $('label[for=deliveryDate]').removeClass('error');
	        },
	        beforeShowDay: function(date) {
	            // prepend values lower than 10 with 0
	            function addZero(no) {
	                if (no < 10){
	                    return "0" + no;
	                }  else {
	                    return no;
	                }
	            }

	            var date_str = [
	                addZero(date.getFullYear()),
	                addZero(date.getMonth() + 1),
	                addZero(date.getDate())
	            ].join('-');

	            if (dates_not_allowed[date_str]) {
	                return [false, 'not-available', 'This date is NOT available'];
	            } else {
	                var cur_rate = dates_rate_array[date_str];
	                if (cur_rate == 'D') return [true, 'discount-rate', 'Discounted Rates'];
	                if (cur_rate == 'P') return [true, 'peak-rate', 'Peak Rates'];
	                if (cur_rate == 'S') return [true, 'subpeak-rate', 'Subpeak Rates'];
	                return [true, 'regular-rate', 'Regular Rates'];
	            }
	        }
	    });
	}else{
	    $(".datepicker").attr("type","date");
	    $(".datepicker").attr("placeholder","");
	    $(".datepicker").css("color","transparent");
	    $(".datepicker").addClass("with_image");
		$(".datepicker").focus(function(){
		     $(".datepicker").css("color","initial");
	    	$(this).removeClass("with_image");
		});
		$(".datepicker").blur(function(){
		    if($(this).val()==''){
		        $(".datepicker").css("color","transparent");
		        $(this).addClass("with_image");
		    }
		   
		});
	}
	$("#fromZip").mask("99999");
	$("#toZip").mask("99999");
	$("#promary_phone, #primary_phone").mask("999-999-9999");
	$("#additional_phone").mask("999-999-9999");

	function GetDatePickerRates() {
	    // $.getJSON(
	    //     "get_datepicker_rates.php",
	    //     function(data) {
	    //         if (data != null &&  data != '') {
	    //             $.each(data, function(key, val) {
	    //                 dates_rate_array[key] = val;
	    //             });
	    //         }
	    //     }
		// );
	} 


	jQuery(".personal_info").click(function(){
			jQuery(".fio").html(document.getElementsByName("first_name")[0].value + " " + document.getElementsByName("last_name")[0].value);
			jQuery(".email_personal").html('<span>Email:</span> ' +document.getElementsByName("email")[0].value);
			jQuery(".phone_personal").html('<span>Phone:</span> ' + document.getElementsByName("primary_phone")[0].value);
		}
	);

	 $( ".btn-green" ).click(function() {
	  $.ajax({
		  url: "/wp-content/themes/blankslate/calculater.php",
		  data: { Type_room: encodeURIComponent($("#Type_room :selected").text()),
					Etaj_from: $("#Etaj_from :selected").text(),
                    Etaj_to: $("#Etaj_to :selected").text(),
					to_zip: document.getElementsByName("to_zip")[0].value,
					from_zip: document.getElementsByName("from_zip")[0].value,
					Date: document.getElementsByName("Date")[0].value,
					Extra_House_Furnished_Rooms_1: document.getElementsByName("Extra_House_Furnished_Rooms[1]")[0].checked,
					Extra_House_Furnished_Rooms_2: document.getElementsByName("Extra_House_Furnished_Rooms[2]")[0].checked,
					Extra_House_Furnished_Rooms_3: document.getElementsByName("Extra_House_Furnished_Rooms[3]")[0].checked,
					Extra_House_Furnished_Rooms_4: document.getElementsByName("Extra_House_Furnished_Rooms[4]")[0].checked,
					Extra_House_Furnished_Rooms_5: document.getElementsByName("Extra_House_Furnished_Rooms[5]")[0].checked,
					Extra_House_Furnished_Rooms_6: document.getElementsByName("Extra_House_Furnished_Rooms[6]")[0].checked,
					Extra_House_Furnished_Rooms_7: document.getElementsByName("Extra_House_Furnished_Rooms[7]")[0].checked,
					Extra_House_Furnished_Rooms_8: document.getElementsByName("Extra_House_Furnished_Rooms[8]")[0].checked,
				},
		  success: function(data){
			data = JSON.parse(data);
			jQuery(".price_c").html(data.price_from);
			jQuery(".time_c").html(data.time);
			jQuery(".moving_from").html(data.moving_from);
			jQuery(".moving_to").html(data.moving_to);
			jQuery(".Type_room").html(data.Type_room);
			jQuery(".Crew").html(data.Crew);
			jQuery(".treval_time").html(data.treval_time);
			jQuery(".gruz_price").html(data.gruz_price);
			jQuery(".date").html(data.date);
			jQuery(".price_c").html(data.text);
			if (data.zip_is != 1){

				jQuery(".zip-is").css('display','block');
				jQuery(".zip-is2").css('display','none');
				jQuery(".zip_visible").css('display','none');
				jQuery(".zip_visible").css('display','none');
				jQuery(".zip_visible_tr").css('display','none');
				jQuery("#zip_visible").css('display','block');
				jQuery("#nozip, #nozip_call").css('display','block');
				
			} else {
				jQuery(".zip-is").css('display','none');
				jQuery(".zip-is2").css('display','block');
				jQuery(".zip_visible").css('display','block');
				jQuery(".zip_visible").css('display','block');
				jQuery(".zip_visible_tr").css('display','table-row');
				jQuery("#zip_visible").css('display','none');
				jQuery("#nozip, #nozip_call").css('display','none');
			}
			var is_room = false;
			if (document.getElementsByName("Extra_House_Furnished_Rooms[1]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room").css('display','inline-block');
			} else {
				jQuery(".extra_room").css('display','none');
			}
			
			if (document.getElementsByName("Extra_House_Furnished_Rooms[2]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room_2").css('display','inline-block');
			} else {
				jQuery(".extra_room_2").css('display','none');
			}
			
			if (document.getElementsByName("Extra_House_Furnished_Rooms[3]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room_3").css('display','inline-block');
			} else {
				jQuery(".extra_room_3").css('display','none');
			}
			
			if (document.getElementsByName("Extra_House_Furnished_Rooms[4]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room_4").css('display','inline-block');
			} else {
				jQuery(".extra_room_4").css('display','none');
			}
			
			if (document.getElementsByName("Extra_House_Furnished_Rooms[5]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room_5").css('display','inline-block');
			} else {
				jQuery(".extra_room_5").css('display','none');
			}
			
			if (document.getElementsByName("Extra_House_Furnished_Rooms[6]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room_6").css('display','inline-block');
			} else {
				jQuery(".extra_room_6").css('display','none');
			}
			
			if (document.getElementsByName("Extra_House_Furnished_Rooms[7]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room_7").css('display','inline-block');
			} else {
				jQuery(".extra_room_7").css('display','none');
			}
			
			if (document.getElementsByName("Extra_House_Furnished_Rooms[8]")[0].checked === true){
				is_room = true;
				jQuery(".extra_room_8").css('display','inline-block');
			} else {
				jQuery(".extra_room_8").css('display','none');
			}
			
			if (is_room === true){
				jQuery(".extra_room_all").css('display','table-cell');
			} else {
				jQuery(".extra_room_all").css('display','none');
			}
			
		  }
		});    
	
	});

	$('.calc_page_steps a').click(function(e){
		e.preventDefault();
	});

	$('.close_calc').click(function(){
		$('#calc_modal').removeClass('show');
		$('body').removeClass('showmodal');
	});

	var send_email = true;

	function function_calc () {
	    var navListItems = $('div.setup-panel div a'),
		    allWells = $('.setup-content'),
		    allNextBtn = $('.nextBtn'),
		    allPrevBtn = $('.prevBtn'),
		    trade_in = $('[name=new]:checked').data('val') === 'trade-in' ? 1 : 0;

		allWells.hide();

		navListItems.click(function (e) {
			e.preventDefault();
			if ($(this).attr('href') === '#step-1') {
				$('#calc_modal').removeClass('show');
				$('body').removeClass('showmodal');
				var $target = $('#step-2'),
		        $item = $('#calc_modal .stepwizard-step a[href="#step-2"]');

			    if (!$item.hasClass('disabled')) {
			        navListItems.closest('.stepwizard-step').removeClass('active done');
			        navListItems.removeClass('btn-active').addClass('step-default');
			        $item.addClass('btn-active').closest('.stepwizard-step').addClass('active').prevAll().addClass('done');
			        allWells.hide();
			        $target.show();
			    }
			    return false;
			}
			if ($(this).attr('href') === '#step-2') {
				can_next = true;
			}
			if ($(this).attr('href') === '#step-3') {
				can_next = true;
			}
			if ($(this).attr('href') === '#step-4' || $(this).attr('href') === '#step-5') {
	            var first_name_input = $('#first_name'),
	            last_name_input = $('#last_name'),
	            primary_phone_input = $('#primary_phone'),
	            email_input = $('#email'),
				zipFrom_input = $('#zipFrom'),
	            confirm_email_input = $('#confirm_email'),
				fromAddress_input = $('#fromAddress'),
				fromCity_input = $('#fromCity'),
				
	            can_next = true;
	            /*if (!first_name_input.val()) {
	                first_name_input.closest('.form-group').addClass('has-error');
	                can_next = false;
	            }
	            if (!last_name_input.val()) {
	                last_name_input.closest('.form-group').addClass('has-error');
	                can_next = false;
	            }*/
	            if (!primary_phone_input.val()) {
	                primary_phone_input.closest('.form-group').addClass('has-error');
	                can_next = false;
	            }
	            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

				if (!email_input.val() || !pattern.test(email_input.val()) ) {
	                email_input.closest('.form-group').addClass('has-error');
	                can_next = false;
	            }
				/*if (!confirm_email_input.val()) {
	                confirm_email_input.closest('.form-group').addClass('has-error');
	                can_next = false;
	            }
				if (!fromCity_input.val()) {
				fromCity_input.closest('.form-group').addClass('has-error');
				valid = false;
				}
				if (!zipFrom_input.val()) {
					zipFrom_input.closest('.form-group').addClass('has-error');
					valid = false;
				}
				if (!fromAddress_input.val()) {
					fromAddress_input.closest('.form-group').addClass('has-error');
					valid = false;
				}*/
	            if (!can_next) {
					first_name_input.focus(function(){
						first_name_input.closest('.form-group').removeClass('has-error');
					});
					last_name_input.focus(function(){
						last_name_input.closest('.form-group').removeClass('has-error');
					});
					primary_phone_input.focus(function(){
						primary_phone_input.closest('.form-group').removeClass('has-error');
					});
					email_input.focus(function(){
						email_input.closest('.form-group').removeClass('has-error');
					});
					confirm_email_input.focus(function(){
						confirm_email_input.closest('.form-group').removeClass('has-error');
					});
					zipFrom_input.focus(function(){
						zipFrom_input.closest('.form-group').removeClass('has-error');
					});
					fromAddress_input.focus(function(){
						fromAddress_input.closest('.form-group').removeClass('has-error');
					});
					fromCity_input.focus(function(){
						fromCity_input.closest('.form-group').removeClass('has-error');
					});
					send_email = false;
	                return false;
	            } else {
	            	send_email = true;
	            }
	        }

		    var $target = $($(this).attr('href')),
		        $item = $(this);

		    if (!$item.hasClass('disabled')) {
		        navListItems.closest('.stepwizard-step').removeClass('active done');
		        navListItems.removeClass('btn-active').addClass('step-default');
		        $item.addClass('btn-active').closest('.stepwizard-step').addClass('active').prevAll().addClass('done');
		        allWells.hide();
		        $target.show();
		    }
		});

		allNextBtn.click(function () {
		    var curStep = $(this).closest(".setup-content"),
		        curStepBtn = curStep.attr("id"),
		        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
		        curInputs = curStep.find("input[type='text'],input[type='url']"),
		        isValid = true;

		    nextStepWizard.removeAttr('disabled').trigger('click');

		});
		allPrevBtn.click(function () {
		    var curStep = $(this).closest(".setup-content"),
		        curStepBtn = curStep.attr("id"),
		        prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a"),
		        curInputs = curStep.find("input[type='text'],input[type='url']");

		    prevStepWizard.trigger('click');
		});
		//$('div.setup-panel div a.btn-active').trigger('click');
	}   
	function_calc ();

	
	jQuery(".sedn_email").click(function() {
		if (send_email) {

			var params = window
			    .location
			    .search
			    .replace('?','')
			    .split('&')
			    .reduce(
			        function(p,e){
			            var a = e.split('=');
			            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
			            return p;
			        },
			        {}
			    );

			var data =  {
						first_name: document.getElementsByName("first_name")[0].value,
						last_name: document.getElementsByName("last_name")[0].value,
						primary_phone: document.getElementsByName("primary_phone")[0].value,
						additional_phone: document.getElementsByName("additional_phone")[0].value,
						email: document.getElementsByName("email")[0].value,
						confirm_email: document.getElementsByName("confirm_email")[0].value,
						from_address: document.getElementsByName("from_address")[0].value,
						apt_from: document.getElementsByName("apt_from")[0].value,
						boston_from: document.getElementsByName("city_from")[0].value,
						zip_from: document.getElementsByName("zip_from")[0].value,
						time_from: document.getElementsByName("time_from")[0].value,
						to_address: document.getElementsByName("to_address")[0].value,
						apt_to: document.getElementsByName("apt_to")[0].value,
						boston_to: document.getElementsByName("city_to")[0].value,
						zip_to: document.getElementsByName("zip_to")[0].value,
						Etaj_from: $("#Etaj_from :selected").text(),
	                    Etaj_to: $("#Etaj_to :selected").text(),
						zip_to: document.getElementsByName("to_zip")[0].value,
						zip_from: document.getElementsByName("from_zip")[0].value,
						estimated_job_time: jQuery(".time_c").html(),
						estimated_quote: jQuery(".price_c").html(),
					}
			if (params['utm_source']) {
				data['utm_source'] = params['utm_source'];
			}
			if (params['utm_medium']) {
				data['utm_medium'] = params['utm_medium'];
			}
			if (params['utm_campaign']) {
				data['utm_campaign'] = params['utm_campaign'];
			}
			if (params['utm_content']) {
				data['utm_content'] = params['utm_content'];
			}
			if (params['utm_term']) {
				data['utm_term'] = params['utm_term'];
			}
			$.ajax({
			  url: "/wp-content/themes/blankslate/send_email.php",
			  data: data,
			  success: function(data){
			  	console.log(data);
			  }
			}); 
		}
		}
	);

})( jQuery );