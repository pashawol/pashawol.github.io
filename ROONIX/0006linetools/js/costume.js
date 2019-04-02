function number_format(number, decimals = 0, dec_point = '.', thousands_sep = ',') {

	let sign = number < 0 ? '-' : '';

	let s_number = Math.abs(parseInt(number = (+number || 0).toFixed(decimals))) + "";
	let len = s_number.length;
	let tchunk = len > 3 ? len % 3 : 0;

	let ch_first = (tchunk ? s_number.substr(0, tchunk) + thousands_sep : '');
	let ch_rest = s_number.substr(tchunk)
		.replace(/(\d\d\d)(?=\d)/g, '$1' + thousands_sep);
	let ch_last = decimals ?
		dec_point + (Math.abs(number) - s_number)
		.toFixed(decimals)
		.slice(2) :
		'';

	return sign + ch_first + ch_rest + ch_last;
}
$(document).on('click', '.card-minus', function () {
	var val = parseInt($('.counter-value').html(), 10);
	var price = $('.dds_full_price').attr('data-price');
	if (val > 1) {
		$('.counter-value').html(val - 1);
		$('.dds_full_price').html((val - 1) * price + ' ₽');

	}
})
$(document).on('click', '.card-plus', function () {
	var val = parseInt($('.counter-value').html(), 10);
	var price = $('.dds_full_price').attr('data-price');
	$('.counter-value').html(val + 1);
	$('.dds_full_price').html((val + 1) * price + ' ₽');
})

$(document).on('click', '.add2basket', function () {
	var action = 'add2basket';
	var id = $(this).attr('data-id');
	var quantity = 1;
	if ($(this).attr('data-card') == 'Y') {
		quantity = parseInt($('.counter-value[data-id="'+id+'"]').text());
	}
	if ($(this).attr('data-pic') == 'Y') {
		quantity = parseInt($(this).parents('.svg-tooltip').find('.counter-value').text());
	}
	$.ajax({
		url: "/local/templates/bosch/ajax/basket.php",
		type: "POST",
		dataType: 'json',
		data: {
			action: action,
			id: id,
			quantity: quantity
		},
		success: function (result) {
			// alert('Товар добавлен в корзину');
			BX.onCustomEvent('OnBasketChange');

			if ($(".cards-table tbody tr").length < 1) {
				setTimeout(() => {
					$('html, body').animate({
						scrollTop: ($(" .scroll-this-block-js ").offset().top + $(" .scroll-this-block-js ").height() - 40)
					}, 1100);

					$(".table.cards-table tbody tr  ").addClass("animate-tr")
				}, 420);

			}

		}
	});
	return false;
});

$(document).on('click', '.counter-btn.basketCounter.counter-plus', function () {
	var inputs = {};
	var tthis = this;
	var action = 'updatebasket';
	var id = $(this).parents('.counter').find('.counter-value').attr('data-id');
	var qq = parseInt($(this).parents('.counter').find('.counter-value').text());

	qq = qq + 1;
	$('#ORDER').find('.dds_deliv').each(function () {
		if (this.checked) {
			inputs[this.name] = this;
		}
	});
	$.ajax({
		url: "/local/templates/bosch/ajax/basket.php",
		type: "POST",
		dataType: 'json',
		data: {
			action: action,
			id: id,
			quantity: qq,
		},
		success: function (result) {
			BX.onCustomEvent('OnBasketChange');
			if(inputs['DELIVERY']){
                var sum = parseFloat(inputs['DELIVERY'].dataset.price) + parseFloat(result.SUMM);
			}
			else{
                var sum = parseFloat(parseFloat(result.SUMM));
			}
			$('#price').html(' Итого: ' + number_format(sum, 2, '.', ' ') + ' ₽');

            var data = $('#ORDER').find('input').serialize();
            var delivery = $('[name="DELIVERY"]:checked').val();
            var datas = {};
            datas['NAME'] = $('[name="name"]').val();
            datas['PHONE'] = $('[name="PHONE"]').val();
            datas['EMAIL'] = $('[name="EMAIL"]').val();
            datas['PAYMENT'] = $('[name="PAYMENT"]:checked').val();
            datas['DELIVERY'] = delivery;
            datas['ADDRESS'] = $('[name="ADDRES"]').val();
            datas['REQ'] = $('[name="REQ"]').val();

            datas['NAME_TK'] = $('[name="NAME_TK"]').val();
            datas['PHONE_TK'] = $('[name="PHONE_TK"]').val();
            datas['SITE_TK'] = $('[name="SITE_TK"]').val();
            switch (delivery){
                case '2':///delivery
                    switch ($('[name="addr-2"]:checked').val()){
                        case 'MOSCOW':
                            datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                            datas['DELIVERY_NAME'] = $('[name="NAME_TPM"]').val();
                            datas['DELIVERY_PHONE'] = $('[name="PHONE_TPM"]').val();
                            datas['CONTACT_FACE'] = $('[name="FACE_TPM"]').val();
                            datas['STREET'] = $('[name="STREET_TPM"]').val();
                            datas['DELIVERY_HOME'] = $('[name="HOME_TPM"]').val();
                            datas['OFFICE'] = $('[name="OFFICE_TPM"]').val();
                            datas['TERMINAL'] = $('[name="INTERCOM_TPM"]').val();
                            datas['COMMENT'] = $('[name="COMMENT_TPM"]').val();
                            break;
                        case 'OBL':
                            datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                            datas['DELIVERY_NAME'] = $('[name="NAME_TPMO"]').val();
                            datas['DELIVERY_PHONE'] = $('[name="PHONE_TPMO"]').val();
                            datas['CONTACT_FACE'] = $('[name="FACE_TPMO"]').val();
                            datas['ADDRESS'] = $('[name="ADDRESS_TPMO"]').val();
                            datas['KMFROMMKAD'] = $('[name="KM_TPMO"]').val();
                            datas['PODEZD'] = $('[name="POD_TPMO"]').val();
                            datas['DELIVERY_FLOOR'] = $('[name="FLOOR_TPMO"]').val();
                            datas['OFFICE'] = $('[name="OFFICE_TPMO"]').val();
                            datas['TERMINAL'] = $('[name="INTERCOM_TPMO"]').val();
                            datas['COMMENT'] = $('[name="COMMENT_TPMO"]').val();
                            break;
                        case 'RUSSIA':
                            datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                            datas['DELIVERY_CITY'] = $('[name="CITY_TPR"]').val();
                            datas['DELIVERY_NAME'] = $('[name="NAME_TPR"]').val();
                            datas['DELIVERY_PHONE'] = $('[name="PHONE_TPR"]').val();
                            datas['COMMENT'] = $('[name="COMMENT_TPR"]').val();


                            datas['TP_COMPANY'] = $('[name="TP_COMPANY"]:checked').val();
                            datas['TYPE_PAY'] = $('[name="TYPE_PAY"]:checked').val();

                            switch ($('[name="TYPE_PAY"]:checked').val()){
                                case 'FIZ_TK':
                                    datas['FIO'] = $('[name="FIO"]').val();
                                    datas['SERIES'] = $('[name="SERIES"]').val();
                                    datas['PHONE_HOME'] = $('[name="PHONED"]').val();
                                    break;
                                default:
                                    datas['COMPANY_NAME'] = $('[name="COMPANY_NAME"]').val();
                                    datas['COMPANY_FACE'] = $('[name="COMPANY_FACE"]').val();
                                    datas['CONTACT_PHONE'] = $('[name="COMPANY_FACE_PHONE"]').val();
                                    datas['COMPANY_INN'] = $('[name="COMPANY_INN"]').val();
                                    datas['COMPANY_KPP'] = $('[name="COMPANY_KPP"]').val();
                                    datas['COMPANY_UR_ADDRESS'] = $('[name="COMPANY_JUR_ADR"]').val();
                                    datas['COMPNAY_FACT_ADDRESS'] = $('[name="COMPANY_FACT_ADR"]').val();
                                    datas['COMPANY_BANK'] = $('[name="COMPANY_BANK"]').val();
                                    datas['COMPANY_COR'] = $('[name="COMPANY_KOR"]').val();
                                    datas['COMPANY_BIK'] = $('[name="COMPANY_BIK"]').val();
                                    datas['COMPANY_BIL'] = $('[name="COMPANY_CHEK"]').val();
                                    datas['COMPANY_DIR'] = $('[name="COMPANY_CEO"]').val();
                                    datas['COMPANY_PHONE'] = $('[name="COMPANY_PHONE"]').val();
                                    datas['COMPANY_EMAIL'] = $('[name="COMPANY_EMAIL"]').val();
                                    break;
                            }
                            break;
                    }
                    break;
                default://self
                    datas['DELIVERY_DESCRIPTION'] = '(Товар резервируется на 3 дня после подтверждения заказа менеджером)';
                    break;
            }
            switch ($('[name="PAYMENT"]:checked').val()){
                case '3'://nocash
                    datas['REQ_SECOND'] = $('[name="REQ_SECOND"]').val();
                    datas['COMPANY_NAME_ONLINE'] = $('[name="COMPANY_NAME_ONLINE"]').val();
                    datas['CONTACT_ONLINE'] = $('[name="CONTACT_ONLINE"]').val();
                    datas['PHONE_ONLINE'] = $('[name="PHONE_ONLINE"]').val();
                    datas['INN_ONLINE'] = $('[name="INN_ONLINE"]').val();
                    datas['KPP_ONLINE'] = $('[name="KPP_ONLINE"]').val();
                    datas['UR_ADDRESS_ONLINE'] = $('[name="UR_ADDRESS_ONLINE"]').val();
                    datas['FACT_ONLINE'] = $('[name="FACT_ONLINE"]').val();
                    datas['BANK_ONLINE'] = $('[name="BANK_ONLINE"]').val();
                    datas['COR_BANK_ONLINE'] = $('[name="COR_BANK_ONLINE"]').val();
                    datas['BIK_ONLINE'] = $('[name="BIK_ONLINE"]').val();
                    datas['BILL_ONLINE'] = $('[name="BILL_ONLINE"]').val();
                    datas['GEN_DIR_ONLINE'] = $('[name="GEN_DIR_ONLINE"]').val();
                    datas['COMPANY_PHONE_ONLINE'] = $('[name="COMPANY_PHONE_ONLINE"]').val();
                    datas['COMPANY_EMAIL_ONLINE'] = $('[name="COMPANY_EMAIL_ONLINE"]').val();
                    break;
                default://cash

                    break;
            }
            $.ajax({
                url: "/local/templates/bosch/ajax/third_step_result.php",
                type: "POST",
                dataType: 'html',
                data: datas,
                success: function (result) {
                    $('.busket-steps-content_final').html(result)
                    if(parseInt($('.dds_final_sum').attr('data-price'))>1000){
                        $('.dds_errorless').hide();
                    }else{
                        $('.dds_errorless').show();
                        return false
                    }
                }
            });


		}
	});

	return false;
});
$(document).on('click', '.counter-btn.basketCounter.counter-minus', function () {
	var inputs = {};
	var tthis = this;
	var action = 'updatebasket';
	var id = $(this).parents('.counter').find('.counter-value').attr('data-id');
	var qq = parseInt($(this).parents('.counter').find('.counter-value').text());
	qq = qq - 1;
	$('#ORDER').find('.dds_deliv').each(function () {
		if (this.checked) {
			inputs[this.name] = this;
		}
	});
	if (qq > 0) {
		$.ajax({
			url: "/local/templates/bosch/ajax/basket.php",
			type: "POST",
			dataType: 'json',
			data: {
				action: action,
				id: id,
				quantity: qq
			},
			success: function (result) {
				BX.onCustomEvent('OnBasketChange');
                if(inputs['DELIVERY']){
                    var sum = parseFloat(inputs['DELIVERY'].dataset.price) + parseFloat(result.SUMM);
                }
                else{
                    var sum = parseFloat(parseFloat(result.SUMM));
                }

				$('#price').html(' Итого: ' + number_format(sum, 2, '.', ' ') + ' ₽');
                var data = $('#ORDER').find('input').serialize();
                var delivery = $('[name="DELIVERY"]:checked').val();
                var datas = {};
                datas['NAME'] = $('[name="name"]').val();
                datas['PHONE'] = $('[name="PHONE"]').val();
                datas['EMAIL'] = $('[name="EMAIL"]').val();
                datas['PAYMENT'] = $('[name="PAYMENT"]:checked').val();
                datas['DELIVERY'] = delivery;
                datas['ADDRESS'] = $('[name="ADDRES"]').val();
                datas['REQ'] = $('[name="REQ"]').val();

                datas['NAME_TK'] = $('[name="NAME_TK"]').val();
                datas['PHONE_TK'] = $('[name="PHONE_TK"]').val();
                datas['SITE_TK'] = $('[name="SITE_TK"]').val();
                switch (delivery){
                    case '2':///delivery
                        switch ($('[name="addr-2"]:checked').val()){
                            case 'MOSCOW':
                                datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                                datas['DELIVERY_NAME'] = $('[name="NAME_TPM"]').val();
                                datas['DELIVERY_PHONE'] = $('[name="PHONE_TPM"]').val();
                                datas['CONTACT_FACE'] = $('[name="FACE_TPM"]').val();
                                datas['STREET'] = $('[name="STREET_TPM"]').val();
                                datas['DELIVERY_HOME'] = $('[name="HOME_TPM"]').val();
                                datas['OFFICE'] = $('[name="OFFICE_TPM"]').val();
                                datas['TERMINAL'] = $('[name="INTERCOM_TPM"]').val();
                                datas['COMMENT'] = $('[name="COMMENT_TPM"]').val();
                                break;
                            case 'OBL':
                                datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                                datas['DELIVERY_NAME'] = $('[name="NAME_TPMO"]').val();
                                datas['DELIVERY_PHONE'] = $('[name="PHONE_TPMO"]').val();
                                datas['CONTACT_FACE'] = $('[name="FACE_TPMO"]').val();
                                datas['ADDRESS'] = $('[name="ADDRESS_TPMO"]').val();
                                datas['KMFROMMKAD'] = $('[name="KM_TPMO"]').val();
                                datas['PODEZD'] = $('[name="POD_TPMO"]').val();
                                datas['DELIVERY_FLOOR'] = $('[name="FLOOR_TPMO"]').val();
                                datas['OFFICE'] = $('[name="OFFICE_TPMO"]').val();
                                datas['TERMINAL'] = $('[name="INTERCOM_TPMO"]').val();
                                datas['COMMENT'] = $('[name="COMMENT_TPMO"]').val();
                                break;
                            case 'RUSSIA':
                                datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                                datas['DELIVERY_CITY'] = $('[name="CITY_TPR"]').val();
                                datas['DELIVERY_NAME'] = $('[name="NAME_TPR"]').val();
                                datas['DELIVERY_PHONE'] = $('[name="PHONE_TPR"]').val();
                                datas['COMMENT'] = $('[name="COMMENT_TPR"]').val();


                                datas['TP_COMPANY'] = $('[name="TP_COMPANY"]:checked').val();
                                datas['TYPE_PAY'] = $('[name="TYPE_PAY"]:checked').val();

                                switch ($('[name="TYPE_PAY"]:checked').val()){
                                    case 'FIZ_TK':
                                        datas['FIO'] = $('[name="FIO"]').val();
                                        datas['SERIES'] = $('[name="SERIES"]').val();
                                        datas['PHONE_HOME'] = $('[name="PHONED"]').val();
                                        break;
                                    default:
                                        datas['COMPANY_NAME'] = $('[name="COMPANY_NAME"]').val();
                                        datas['COMPANY_FACE'] = $('[name="COMPANY_FACE"]').val();
                                        datas['CONTACT_PHONE'] = $('[name="COMPANY_FACE_PHONE"]').val();
                                        datas['COMPANY_INN'] = $('[name="COMPANY_INN"]').val();
                                        datas['COMPANY_KPP'] = $('[name="COMPANY_KPP"]').val();
                                        datas['COMPANY_UR_ADDRESS'] = $('[name="COMPANY_JUR_ADR"]').val();
                                        datas['COMPNAY_FACT_ADDRESS'] = $('[name="COMPANY_FACT_ADR"]').val();
                                        datas['COMPANY_BANK'] = $('[name="COMPANY_BANK"]').val();
                                        datas['COMPANY_COR'] = $('[name="COMPANY_KOR"]').val();
                                        datas['COMPANY_BIK'] = $('[name="COMPANY_BIK"]').val();
                                        datas['COMPANY_BIL'] = $('[name="COMPANY_CHEK"]').val();
                                        datas['COMPANY_DIR'] = $('[name="COMPANY_CEO"]').val();
                                        datas['COMPANY_PHONE'] = $('[name="COMPANY_PHONE"]').val();
                                        datas['COMPANY_EMAIL'] = $('[name="COMPANY_EMAIL"]').val();
                                        break;
                                }
                                break;
                        }
                        break;
                    default://self
                        datas['DELIVERY_DESCRIPTION'] = '(Товар резервируется на 3 дня после подтверждения заказа менеджером)';
                        break;
                }
                switch ($('[name="PAYMENT"]:checked').val()){
                    case '3'://nocash
                        datas['REQ_SECOND'] = $('[name="REQ_SECOND"]').val();
                        datas['COMPANY_NAME_ONLINE'] = $('[name="COMPANY_NAME_ONLINE"]').val();
                        datas['CONTACT_ONLINE'] = $('[name="CONTACT_ONLINE"]').val();
                        datas['PHONE_ONLINE'] = $('[name="PHONE_ONLINE"]').val();
                        datas['INN_ONLINE'] = $('[name="INN_ONLINE"]').val();
                        datas['KPP_ONLINE'] = $('[name="KPP_ONLINE"]').val();
                        datas['UR_ADDRESS_ONLINE'] = $('[name="UR_ADDRESS_ONLINE"]').val();
                        datas['FACT_ONLINE'] = $('[name="FACT_ONLINE"]').val();
                        datas['BANK_ONLINE'] = $('[name="BANK_ONLINE"]').val();
                        datas['COR_BANK_ONLINE'] = $('[name="COR_BANK_ONLINE"]').val();
                        datas['BIK_ONLINE'] = $('[name="BIK_ONLINE"]').val();
                        datas['BILL_ONLINE'] = $('[name="BILL_ONLINE"]').val();
                        datas['GEN_DIR_ONLINE'] = $('[name="GEN_DIR_ONLINE"]').val();
                        datas['COMPANY_PHONE_ONLINE'] = $('[name="COMPANY_PHONE_ONLINE"]').val();
                        datas['COMPANY_EMAIL_ONLINE'] = $('[name="COMPANY_EMAIL_ONLINE"]').val();
                        break;
                    default://cash

                        break;
                }
                $.ajax({
                    url: "/local/templates/bosch/ajax/third_step_result.php",
                    type: "POST",
                    dataType: 'html',
                    data: datas,
                    success: function (result) {
                        $('.busket-steps-content_final').html(result)

                        if(parseInt($('.dds_final_sum').attr('data-price'))>1000){
                            $('.dds_errorless').hide();
                        }else{
                            $('.dds_errorless').show();
                            return false;
                        }
                    }
                });

			}
		});
	}


	return false;
});

var _validFileExtensions = [".txt", ".rtf", ".doc", ".docx", ".html",".pdf",".odt",".png",".jpeg",".jpg"];
function hasExtension(inputID, exts) {
    var file;
    $.each($('input:file'), function( index, value ) {
       if($(this).val()==inputID){
         file = $(this);
       }
    });

  if(file[0].files[0].size<1000000){
      return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(inputID);
  }else{
      return false;
  }

}

Parsley.addValidator('file', {
    requirementType: 'string',
    validateString: function(value, requirement) {
        var test =  hasExtension(value,_validFileExtensions);
        if(test!=='true' ){
            return test;
        }else{
                return test;
        }

    },
    messages: {
        ru: 'Недопустимый формат файла или размер файла превышает 1 мб',
        en: 'This value should be a multiple of %s',
        fr: 'Cette valeur doit être un multiple de %s'
    }
});
$(document).on('change','[type="file"]',function () {
    var file = $(this);
})


$(document).on('click','.counter-btn.counter-plus',function (e) {
	e.preventDefault();
	if(!$(this).hasClass('basketCounter')){
        var quantity = parseInt($(this).parents('.counter').find('.counter-value').text())+1;
        $(this).parents('.counter').find('.counter-value').text(quantity);
	}
    return false;
})
$(document).on('click','.counter-btn.counter-minus',function (e) {
    e.preventDefault();
    if(!$(this).hasClass('basketCounter')){
	var quantity = parseInt($(this).parents('.counter').find('.counter-value').text())-1;
		if(quantity > 0){
            $(this).parents('.counter').find('.counter-value').text(quantity);
		}

    }
    return false;
})

$(document).on('click', '.dds_remove', function () {
	var tthis = this;
	var action = 'delete';
	var id = $(this).attr('data-id');
	var prodID = $(this).attr('data-prod');
    if(prodID){
        $('[data-id-elem="'+prodID+'"]').removeClass('add-baskit');
    }
	$.ajax({
		url: "/local/templates/bosch/ajax/basket.php",
		type: "POST",
		dataType: 'json',
		data: {
			action: action,
			id: id
		},
		success: function (result) {
			if (result == 0) {
				location.reload();
			}
			BX.onCustomEvent('OnBasketChange');
		}
	});
	return false;
});


$(document).on('submit', '#personal_form_1', function () {
	$.ajax({
		url: "/local/templates/bosch/ajax/save_personal.php",
		type: "POST",
		dataType: 'json',
		data: $(this).serialize(),
		success: function (result) {
			if (result.ERROR == 'N') {
				$('#error10').empty();
				$('#error10').html(result.MESSAGE);
			}
			if (result.ERROR == 'Y') {
				$('#error10').empty();
				$('#error10').html(result.MESSAGE);
			}
		}
	});

	return false;
});
$(document).on('change', '.dds_obrsel', function () {
	var val = $(this).val();
	$('.dds_obr').val(val);
})
$(document).on('change', '.dds_date_from', function () {
	var datefrom = $(this).val();
	var dateto = $('.dds_date_to').val();
	if (dateto) {
		location.href = '?datefrom=' + datefrom + '&dateto=' + dateto;
	}

})
$(document).on('change', '.dds_date_to', function () {
	var dateto = $(this).val();
	var datefrom = $('.dds_date_from').val();
	if (datefrom) {
		location.href = '?datefrom=' + datefrom + '&dateto=' + dateto;
	}
})
/*$(document).on('submit', '#ORDER', function () {

	$('[data-dis]').prop('disabled', 'disabled');
	$.ajax({
		url: "/local/templates/bosch/ajax/order.php",
		type: "POST",
		dataType: 'json',
		data: $(this).serialize(),
		success: function (result) {
			if (result.STATUS == "ERROR") {
				$('.errorcostum').html(result.HTML);
			} else {
				location.href = location.pathname + '?ORDER_ID=' + result;
			}
		}
	});
	return false;
});*/
$(document).on('click', '.dds_addadr', function () {
	formData = new FormData()
	var error = '';
	var id = $(this).attr('data-class');
	$('.' + id).find('input').each(function () {
		if ($(this).prop('files')) {
			jQuery.each(jQuery(this)[0].files, function (i, file) {
				formData.append('file', file);
			});
		} else {
			formData.append(this.name, this.value);
		}
		if ($(this).attr('data-req') == 'Y' && this.value.length <= 0) {
			error += 'Не заполнено поле ' + this.placeholder + '\r\n';
		}
	});

	formData.append('action', $(this).attr('data-action'));
	if (error) {
		alert(error);
		return false;
	}

	$.ajax({
		url: "/local/templates/bosch/ajax/adradd.php",
		type: "POST",
		dataType: 'json',
		data: formData,
		success: function (result) {
			if (result.ERROR == 'Y') {
				alert(result.VALUE);
			} else {
				alert('Информация обновлена');
				$('#' + id).val(result.VALUE);
			}
		},
		cache: false,
		contentType: false,
		processData: false
	});
	return false;
})


$(document).on('click', '.dds_next', function () {
	var inputs = {};
	var pay = {}
	var step = $(this).attr('data-step');
	var name = $('.dds_name').val();
	var email = $('.dds_email').val();
	var phone = $('.dds_phone').val();
	$('#ORDER').find('.dds_deliv').each(function () {
		if (this.checked) {
			inputs[this.name] = this;
		}
	});
	$('.dds_step').find('.dds_pay').each(function () {
		if (this.checked) {
			inputs[this.name] = this;
		}

	});
	var sum = parseFloat(inputs['DELIVERY'].dataset.price) + parseFloat($('.dds_full_price').attr('data-price'));
	$('#step-' + step).hide();
	step = parseInt(step) + 1;
	$('#step-' + step).show();
	$('.busket-steps_item--active').removeClass('busket-steps_item--active');
	$('#tit-' + step).addClass('busket-steps_item--active')
	$('#nameinfo').html(name);
	$('#emailinfo').html(email);
	$('#phoneinfo').html(phone);
	$('#delivinfo').html(inputs['DELIVERY'].dataset.type);
	$('#delivdesc').html(inputs['DELIVERY'].dataset.desc);
	$('#payinfo').html(inputs['PAYMENT'].dataset.type);
	if (sum) {
		$('#price').html('Итого: ' + sum + ' ₽');
	}
})
$(document).on('click', '.dds_back', function () {
	var step = $(this).attr('data-step');
	$('#step-' + step).hide();
	step = parseInt(step) - 1;
	$('#step-' + step).show();
	$('.busket-steps_item--active').removeClass('busket-steps_item--active');
	$('#tit-' + step).addClass('busket-steps_item--active')
	$('#tit-' + step).addClass('busket-steps_item--active')
})
$(document).on('change', '.dds_select_adr', function () {
	var id = $(this).val();
	$.ajax({
		url: "/local/templates/bosch/ajax/adrselect.php",
		type: "POST",
		dataType: 'html',
		data: {
			id: id
		},
		success: function (result) {
			$('.dds_adr_det').html(result);
		}
	});

	return false;
})
$(document).on('change', '.dds_select_req', function () {
	var id = $(this).val();
	$.ajax({
		url: "/local/templates/bosch/ajax/reqselect.php",
		type: "POST",
		dataType: 'html',
		data: {
			id: id
		},
		success: function (result) {

			$('.dds_req').html(result);
		}
	});

	return false;
})
$(document).on('click', '.dds_close', function () {
	var id = $(this).attr('data-id');
	$('.dds_rek-' + id).hide();
	$('.js-rekv-info').show();
});
$(document).on('click', '.dds_req_red', function (e) {
	var id = $(this).attr('data-id');
	e.preventDefault();
	$('.js-rekv-file-block').hide();
	$('.js-rekv-info').hide();
	$('.dds_rek-' + id).show();
});

$(document).on('click', '.dds_save_req', function () {
	var serial = {};
	var action = $(this).attr('data-action');
	var id = $(this).attr('data-id');
	$('.dds_rek-' + id).find('input, select').each(function () {
		if ($(this).attr('type') == 'radio') {
			serial[this.name] = $('[name="' + this.name + '"]:checked').val();
		} else {
			serial[this.name] = this.value;
		}
	});
	serial['action'] = action;
	serial['id'] = id;
	$.ajax({
		url: "/local/templates/bosch/ajax/adradd.php",
		type: "POST",
		dataType: 'json',
		data: serial,
		success: function (result) {

			if (result.ERROR == 'Y') {
				alert(result.VALUE);
			} else {
				alert('Информация обновлена');
				$('#' + id).val(result.VALUE);
				location.reload();
			}
		},
	});
	return false;
})

jQuery(document).ready(function ($) {

	$(".itemssvg  ").click(function () {
		// $(".itemssvg").removeClass();
		var th = $(this),
				position = th.position(),
				thblock = th.find('.svg-tooltip'),
				thblockW = thblock.width() + 20,
				thblockH= thblock.height() + 20,
				thparent = th.parents(".svg-wrapper"),
				thparentW = thparent.width(),
				thparentH= thparent.height();
		// console.log("left: " + position.left + ", top: " + position.top );
		// console.log( 	thparentW , thparentH)
		if( position.left < thblockW) {
			thblock.addClass("svg-tooltip--right");
			thblock.removeClass("svg-tooltip--left"); 

		}
		else if( position.left > (thparentW - thblockW)) {
			thblock.addClass("svg-tooltip--left");
			thblock.removeClass("svg-tooltip--right"); 

		}
		else{
			thblock.removeClass("svg-tooltip--right").removeClass("svg-tooltip--left"); 

		}
		
		if( position.top < thblockH) {
			thblock.addClass("svg-tooltip--bottom");
			thblock.removeClass("svg-tooltip--top"); 

		}
		else if( position.top > (thparentH - thblockH)) {
			thblock.addClass("svg-tooltip--top");
			thblock.removeClass("svg-tooltip--bottom"); 

		}
		else{
			thblock.removeClass("svg-tooltip--top").removeClass("svg-tooltip--bottom"); 

		}
 

		$(this).addClass("active").siblings().removeClass("active");
		thblock.show().siblings().hide();
	})

	$(".js-tooltip-close  ").click(function () {
		$('.itemssvg').removeClass("active").find('.svg-tooltip').hide();
	})

	$(document).mouseup(function (e) {
		var container = $(".itemssvg.active");
		if (container.has(e.target).length === 0) {

			$(".itemssvg.active").removeClass("active");
			$(".svg-tooltip").hide();
		}
	});

	$(".js-cards-item").hover(function () {
		var elem_id = $(this).data('elem_id');
		$('.itemssvg[data-id-elem=' + elem_id + ']').toggleClass('hover');
	})

	$(" .itemssvg").hover(function () {
		var elem_id = $(this).data('id-elem');
		// console.log(elem_id);
		if (!$(this).hasClass("active")) {

			$('.js-cards-item[data-elem_id=' + elem_id + ']').toggleClass('js-cards-item--hover');
		}
		// $(this).find('.svg-tooltip').is(":hidden") || $(this).hasClass('active') ? $('.js-cards-item[data-elem_id=' + elem_id + ']').removeClass('js-cards-item--hover') : ('.js-cards-item[data-elem_id=' + elem_id + ']').addClass('js-cards-item--hover');
	})


	$(".cards-items_item__btn").click(function () {
		var elem_id = $(this).data('id');
		$('.itemssvg[data-id-elem=' + elem_id + ']').toggleClass('add-baskit');
		// .find('.add2basket').toggleClass('add-baskit');
	})

	$('.itemssvg').on('click', '.add2basket', function () {
		var elem_id = $(this).data('id');
		$(this).addClass('add-baskit');
		$('.js-cards-item[data-elem_id=' + elem_id + '] ').addClass('js-cards-item--active');
		$('.itemssvg[data-id-elem=' + elem_id + ']').addClass('add-baskit');
	})


	// mask for input
	var customOptions = {
        onKeyPress: function (val, e, field, options) {

            if (val.replace(/\D/g, '').length === 2) {
                //val = val.replace('8', '');
                //field.val(val);
            }
            field.mask("+7(000)000-00-00", options);
        }
    };
    var customOptionsdds = {
        onKeyPress: function (val, e, field, options) {

            field.mask("00 00 000000", options);
        }
    };
	$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);
    $('.dds_pasport_mask').attr("pattern", "[0-9]{2} [0-9]{2} [0-9]{6}").mask("00 00 000000", customOptionsdds);

    $(document).on('keyup','[name="COMPANY_INN"] , [name="INN"] , [name="INN_ONLINE"]',function () {
        if($(this).attr('name')=='COMPANY_INN') {
            if ($(this).val().length >= 12) {
                $('[name="COMPANY_KPP"]').prop('required', false);
                $('[name="COMPANY_KPP"]').prop('disabled', true);
                $('[name="COMPANY_KPP"]').val('');
            } else {
                $('[name="COMPANY_KPP"]').prop('required', true);
                $('[name="COMPANY_KPP"]').prop('disabled', false);
            }
        }
       if($(this).attr('name')=='INN'){
           if($(this).val().length>=12){
               $('[name="KPP"]').prop('required', false);
               $('[name="KPP"]').prop('disabled', true);
               $('[name="KPP"]').val('');
           }else{
               $('[name="KPP"]').prop('required', true);
               $('[name="KPP"]').prop('disabled', false);
           }
       }
        if($(this).attr('name')=='INN_ONLINE') {
            if ($(this).val().length >= 12) {
                $('[name="KPP_ONLINE"]').prop('required', false);
                $('[name="KPP_ONLINE"]').prop('disabled', true);
                $('[name="KPP_ONLINE"]').val('');
            } else {
                $('[name="KPP_ONLINE"]').prop('required', true);
                $('[name="KPP_ONLINE"]').prop('disabled', false);
            }
        }
    })


	var validator = $('.validated-form').validate({

		onfocusout: function (element) {

			if ($(element).val().length > 0) {

				this.element(element);

			}

		},

		highlight: function (element, errorClass, validClass) {

			$(element)

				.closest(".input-box")

				.addClass("js-input-error")

				.removeClass("js-input-valid");

		},

		unhighlight: function (element, errorClass, validClass) {

			$(element)

				.closest(".input-box")

				.addClass("js-input-valid")

				.removeClass("js-input-error");

		},

		errorElement: "div",

		errorClass: "error-message"

	});

	// validator.form();
	// / mask for input
	$(document).on('click',".next-btn",function () {
        validator.form();

        $('.validated-form').each(function () {


            $(this).validate({

                onfocusout: function (element) {

                    if ($(element).val().length > 0) {

                        this.element(element);

                    }



                },

                highlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-error")

                        .removeClass("js-input-valid");

                },

                unhighlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-valid")

                        .removeClass("js-input-error");

                },

                errorElement: "div",

                errorClass: "error-message"

            });
        })
    })

	$(document).on('click',".next-btn2",function () {
        $('.validated-form').each(function () {


            $(this).validate({

                onfocusout: function (element) {

                    if ($(element).val().length > 0) {

                        this.element(element);

                    }



                },

                highlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-error")

                        .removeClass("js-input-valid");

                },

                unhighlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-valid")

                        .removeClass("js-input-error");

                },

                errorElement: "div",

                errorClass: "error-message"

            });
        })
    })

	$(".redact-link.js-toggler.js-rekv-open, .btn-secondary.js-rekv-open").click(function () {
		$(".btns-block-foot, .redact-link.js-toggler").hide();
	})

	$(" .btn-secondary.js-rekv-close").click(function () {
		$(".btns-block-foot, .redact-link.js-toggler.js-rekv-open, .redact-link.js-toggler").show();
	})

	$('.svg-wrapper-all').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		// fade: true,
		asNavFor: '.svg-footer_links',
		dots: false,
		// customPaging : function(slider, i) {
		//     var thumb = $(slider.$slides[i]).data('thumb');
		//     return '<a><img src="'+thumb+'"></a>';
		// },

	});
	$('.svg-footer_links').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.svg-wrapper-all',
		dots: false,
		infinite: false,
		// centerMode: true,
		focusOnSelect: true
	});
	$('.js-cards-item[data-slide]').mouseenter(function () {
		var th = $(this),
			thAttr = +(th.data('slide'));
			if ((+thAttr) >= 0  && ($(".slick-active").data("slide") != thAttr) ){


				$(".svg-wrapper-all, .svg-footer_links").slick('slickGoTo', thAttr);
			}
		//   data-id-elem="9148"
	})

	$(".js-toggle-svg").click(function(){
		$('.svg-wrapper-all, .svg-footer_links').slick('setPosition');
	})
})

$(document).on('submit','#frgpswd-formalin',function () {
	var $this = $(this);
    $this.find('.ddsError').empty();
    $this.find('.ddsSuccess').empty();
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: $(this).serialize(),
        success: function (result) {
            if (result.TYPE == 'OK') {
                $this.find('.ddsSuccess').html(result.MESSAGE);
                $this.find('.ddsSuccess').show();
            }
           else {
                $this.find('.ddsError').html(result.MESSAGE);
                $this.find('.ddsError').show();
            }
        }
    });

    return false;
});

$(document).on('submit','.searchByType',function () {
    var by = $(this).find('[name="selectBy"]').val();
     $.ajax({
        url: "/local/templates/bosch/ajax/headerSerachByType.php",
        type: "POST",
        data: $(this).serialize(),
		dataType: 'json',
        success: function (result) {
            switch (by){
                case 'BY_CAT':
                    location.href = result;
                    break;
				default :
                    location.href = '/search/?q='+result.Q+'&by='+result.BY
					break;
            }
        },
    });
    return false;
});

$(document).on('click', '[data-show-more]', function(){
    var btn = $(this);
    var page = btn.attr('data-next-page');
    var id = btn.attr('data-show-more');
    var bx_ajax_id = btn.attr('data-ajax-id');
    var block_id = "#comp_"+bx_ajax_id;

    var data = {
        bxajaxid:bx_ajax_id
    };
    data['PAGEN_'+id] = page;

    $.ajax({
        type: "GET",
        url: window.location.href,
        data: data,
        timeout: 3000,
        success: function(data) {
            $("#btn_"+bx_ajax_id).remove();
            $(block_id).append(data);
        }
    });
});

$(document).on('click','.back_adr',function () {
    $(this).closest('form').removeClass('dds_edit');
    $(this).closest('form').removeClass('new_adr');
})


$(document).on('click', '#order_button', function () {


    var data = $('#ORDER').find('input').serialize();
    var delivery = $('[name="DELIVERY"]:checked').val();
    var datas = {};
   // var file = $('[name="REQ_FILE"]').prop('files')[0]
   // var datas = new FormData();
  //  datas.append('file',file);
    var data = $('#ORDER').find('input').serialize();
    var delivery = $('[name="DELIVERY"]:checked').val();
    var datas = {};
    datas['NAME'] = $('[name="name"]').val();
    datas['PHONE'] = $('[name="PHONE"]').val();
    datas['EMAIL'] = $('[name="EMAIL"]').val();
    datas['PAYMENT'] = $('[name="PAYMENT"]:checked').val();
    datas['DELIVERY'] = delivery;
    datas['ADDRESS'] = $('[name="ADDRES"]').val();
    datas['REQ'] = $('[name="REQ"]').val();
    datas['NAME_TK'] = $('[name="NAME_TK"]').val();
    datas['PHONE_TK'] = $('[name="PHONE_TK"]').val();
    datas['SITE_TK'] = $('[name="SITE_TK"]').val();
    switch (delivery){
        case '2':///delivery
            switch ($('[name="addr-2"]:checked').val()){
                case 'MOSCOW':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPM"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPM"]').val();
                    datas['CONTACT_FACE'] = $('[name="FACE_TPM"]').val();
                    datas['STREET'] = $('[name="STREET_TPM"]').val();
                    datas['DELIVERY_HOME'] = $('[name="HOME_TPM"]').val();
                    datas['OFFICE'] = $('[name="OFFICE_TPM"]').val();
                    datas['TERMINAL'] = $('[name="INTERCOM_TPM"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPM"]').val();
                    break;
                case 'OBL':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPMO"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPMO"]').val();
                    datas['CONTACT_FACE'] = $('[name="FACE_TPMO"]').val();
                    datas['ADDRESS'] = $('[name="ADDRESS_TPMO"]').val();
                    datas['KMFROMMKAD'] = $('[name="KM_TPMO"]').val();
                    datas['PODEZD'] = $('[name="POD_TPMO"]').val();
                    datas['DELIVERY_FLOOR'] = $('[name="FLOOR_TPMO"]').val();
                    datas['OFFICE'] = $('[name="OFFICE_TPMO"]').val();
                    datas['TERMINAL'] = $('[name="INTERCOM_TPMO"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPMO"]').val();
                    break;
                case 'RUSSIA':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_CITY'] = $('[name="CITY_TPR"]').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPR"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPR"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPR"]').val();


                    datas['TP_COMPANY'] = $('[name="TP_COMPANY"]:checked').val();
                    datas['TYPE_PAY'] = $('[name="TYPE_PAY"]:checked').val();

                    switch ($('[name="TYPE_PAY"]:checked').val()){
                        case 'FIZ_TK':
                            datas['FIO'] = $('[name="FIO"]').val();
                            datas['SERIES'] = $('[name="SERIES"]').val();
                            datas['PHONE_HOME'] = $('[name="PHONED"]').val();
                            break;
                        default:
                            datas['COMPANY_NAME'] = $('[name="COMPANY_NAME"]').val();
                            datas['COMPANY_FACE'] = $('[name="COMPANY_FACE"]').val();
                            datas['CONTACT_PHONE'] = $('[name="COMPANY_FACE_PHONE"]').val();
                            datas['COMPANY_INN'] = $('[name="COMPANY_INN"]').val();
                            datas['COMPANY_KPP'] = $('[name="COMPANY_KPP"]').val();
                            datas['COMPANY_UR_ADDRESS'] = $('[name="COMPANY_JUR_ADR"]').val();
                            datas['COMPNAY_FACT_ADDRESS'] = $('[name="COMPANY_FACT_ADR"]').val();
                            datas['COMPANY_BANK'] = $('[name="COMPANY_BANK"]').val();
                            datas['COMPANY_COR'] = $('[name="COMPANY_KOR"]').val();
                            datas['COMPANY_BIK'] = $('[name="COMPANY_BIK"]').val();
                            datas['COMPANY_BIL'] = $('[name="COMPANY_CHEK"]').val();
                            datas['COMPANY_DIR'] = $('[name="COMPANY_CEO"]').val();
                            datas['COMPANY_PHONE'] = $('[name="COMPANY_PHONE"]').val();
                            datas['COMPANY_EMAIL'] = $('[name="COMPANY_EMAIL"]').val();
                            break;
                    }
                    break;
            }
            break;
        default://self
            datas['DELIVERY_DESCRIPTION'] = '(Товар резервируется на 3 дня после подтверждения заказа менеджером)';
            break;
    }
    switch ($('[name="PAYMENT"]:checked').val()){
        case '3'://nocash
            datas['REQ_SECOND'] = $('[name="REQ_SECOND"]').val();
            datas['COMPANY_NAME_ONLINE'] = $('[name="COMPANY_NAME_ONLINE"]').val();
            datas['CONTACT_ONLINE'] = $('[name="CONTACT_ONLINE"]').val();
            datas['PHONE_ONLINE'] = $('[name="PHONE_ONLINE"]').val();
            datas['INN_ONLINE'] = $('[name="INN_ONLINE"]').val();
            datas['KPP_ONLINE'] = $('[name="KPP_ONLINE"]').val();
            datas['UR_ADDRESS_ONLINE'] = $('[name="UR_ADDRESS_ONLINE"]').val();
            datas['FACT_ONLINE'] = $('[name="FACT_ONLINE"]').val();
            datas['BANK_ONLINE'] = $('[name="BANK_ONLINE"]').val();
            datas['COR_BANK_ONLINE'] = $('[name="COR_BANK_ONLINE"]').val();
            datas['BIK_ONLINE'] = $('[name="BIK_ONLINE"]').val();
            datas['BILL_ONLINE'] = $('[name="BILL_ONLINE"]').val();
            datas['GEN_DIR_ONLINE'] = $('[name="GEN_DIR_ONLINE"]').val();
            datas['COMPANY_PHONE_ONLINE'] = $('[name="COMPANY_PHONE_ONLINE"]').val();
            datas['COMPANY_EMAIL_ONLINE'] = $('[name="COMPANY_EMAIL_ONLINE"]').val();
            break;
        default://cash

            break;
    }
    $.ajax({
        url: "/local/templates/bosch/ajax/third_step_result.php",
        type: "POST",
        dataType: 'html',
        data: datas,
        success: function (result) {
            $('.busket-steps-content_final').html(result)
            if(parseInt($('.dds_final_sum').attr('data-price'))>1000&&delivery==2 ||delivery!=2){
                $('.dds_errorless').hide();
                datas['NAME'] = $('[name="name"]').val();
                datas['PHONE'] = $('[name="PHONE"]').val();
                datas['EMAIL'] = $('[name="EMAIL"]').val();
                datas['PAYMENT'] = $('[name="PAYMENT"]:checked').val();
                datas['DELIVERY'] = delivery;
                datas['ADDRESS'] = $('[name="ADDRES"]').val();
                datas['REQ'] = $('[name="REQ"]').val();
                datas['NAME_TK'] = $('[name="NAME_TK"]').val();
                datas['PHONE_TK'] = $('[name="PHONE_TK"]').val();
                datas['SITE_TK'] = $('[name="SITE_TK"]').val();
                switch (delivery){
                    case '2':///delivery
                        switch ($('[name="addr-2"]:checked').val()){
                            case 'MOSCOW':
                                datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                                datas['DELIVERY_NAME'] = $('[name="NAME_TPM"]').val();
                                datas['DELIVERY_PHONE'] = $('[name="PHONE_TPM"]').val();
                                datas['CONTACT_FACE'] = $('[name="FACE_TPM"]').val();
                                datas['STREET'] = $('[name="STREET_TPM"]').val();
                                datas['DELIVERY_HOME'] = $('[name="HOME_TPM"]').val();
                                datas['OFFICE'] = $('[name="OFFICE_TPM"]').val();
                                datas['TERMINAL'] = $('[name="INTERCOM_TPM"]').val();
                                datas['COMMENT'] = $('[name="COMMENT_TPM"]').val();
                                break;
                            case 'OBL':
                                datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                                datas['DELIVERY_NAME'] = $('[name="NAME_TPMO"]').val();
                                datas['DELIVERY_PHONE'] = $('[name="PHONE_TPMO"]').val();
                                datas['CONTACT_FACE'] = $('[name="FACE_TPMO"]').val();
                                datas['ADDRESS'] = $('[name="ADDRESS_TPMO"]').val();
                                datas['KMFROMMKAD'] = $('[name="KM_TPMO"]').val();
                                datas['PODEZD'] = $('[name="POD_TPMO"]').val();
                                datas['DELIVERY_FLOOR'] = $('[name="FLOOR_TPMO"]').val();
                                datas['OFFICE'] = $('[name="OFFICE_TPMO"]').val();
                                datas['TERMINAL'] = $('[name="INTERCOM_TPMO"]').val();
                                datas['COMMENT'] = $('[name="COMMENT_TPMO"]').val();
                                break;
                            case 'RUSSIA':
                                datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                                datas['DELIVERY_CITY'] = $('[name="CITY_TPR"]').val();
                                datas['DELIVERY_NAME'] = $('[name="NAME_TPR"]').val();
                                datas['DELIVERY_PHONE'] = $('[name="PHONE_TPR"]').val();
                                datas['COMMENT'] = $('[name="COMMENT_TPR"]').val();


                                datas['TP_COMPANY'] = $('[name="TP_COMPANY"]:checked').val();
                                datas['TYPE_PAY'] = $('[name="TYPE_PAY"]:checked').val();

                                switch ($('[name="TYPE_PAY"]:checked').val()){
                                    case 'FIZ_TK':
                                        datas['FIO'] = $('[name="FIO"]').val();
                                        datas['SERIES'] = $('[name="SERIES"]').val();
                                        datas['PHONE_HOME'] = $('[name="PHONED"]').val();
                                        break;
                                    default:
                                        datas['COMPANY_NAME'] = $('[name="COMPANY_NAME"]').val();
                                        datas['COMPANY_FACE'] = $('[name="COMPANY_FACE"]').val();
                                        datas['CONTACT_PHONE'] = $('[name="COMPANY_FACE_PHONE"]').val();
                                        datas['COMPANY_INN'] = $('[name="COMPANY_INN"]').val();
                                        datas['COMPANY_KPP'] = $('[name="COMPANY_KPP"]').val();
                                        datas['COMPANY_UR_ADDRESS'] = $('[name="COMPANY_JUR_ADR"]').val();
                                        datas['COMPNAY_FACT_ADDRESS'] = $('[name="COMPANY_FACT_ADR"]').val();
                                        datas['COMPANY_BANK'] = $('[name="COMPANY_BANK"]').val();
                                        datas['COMPANY_COR'] = $('[name="COMPANY_KOR"]').val();
                                        datas['COMPANY_BIK'] = $('[name="COMPANY_BIK"]').val();
                                        datas['COMPANY_BIL'] = $('[name="COMPANY_CHEK"]').val();
                                        datas['COMPANY_DIR'] = $('[name="COMPANY_CEO"]').val();
                                        datas['COMPANY_PHONE'] = $('[name="COMPANY_PHONE"]').val();
                                        datas['COMPANY_EMAIL'] = $('[name="COMPANY_EMAIL"]').val();
                                        break;
                                }
                                break;
                        }
                        break;
                    default://self
                        datas['DELIVERY_DESCRIPTION'] = '(Товар резервируется на 3 дня после подтверждения заказа менеджером)';
                        break;
                }
                switch ($('[name="PAYMENT"]:checked').val()){
                    case '3'://nocash
                        datas['REQ_SECOND'] = $('[name="REQ_SECOND"]').val();
                        datas['COMPANY_NAME_ONLINE'] = $('[name="COMPANY_NAME_ONLINE"]').val();
                        datas['CONTACT_ONLINE'] = $('[name="CONTACT_ONLINE"]').val();
                        datas['PHONE_ONLINE'] = $('[name="PHONE_ONLINE"]').val();
                        datas['INN_ONLINE'] = $('[name="INN_ONLINE"]').val();
                        datas['KPP_ONLINE'] = $('[name="KPP_ONLINE"]').val();
                        datas['UR_ADDRESS_ONLINE'] = $('[name="UR_ADDRESS_ONLINE"]').val();
                        datas['FACT_ONLINE'] = $('[name="FACT_ONLINE"]').val();
                        datas['BANK_ONLINE'] = $('[name="BANK_ONLINE"]').val();
                        datas['COR_BANK_ONLINE'] = $('[name="COR_BANK_ONLINE"]').val();
                        datas['BIK_ONLINE'] = $('[name="BIK_ONLINE"]').val();
                        datas['BILL_ONLINE'] = $('[name="BILL_ONLINE"]').val();
                        datas['GEN_DIR_ONLINE'] = $('[name="GEN_DIR_ONLINE"]').val();
                        datas['COMPANY_PHONE_ONLINE'] = $('[name="COMPANY_PHONE_ONLINE"]').val();
                        datas['COMPANY_EMAIL_ONLINE'] = $('[name="COMPANY_EMAIL_ONLINE"]').val();


                        /* datas['COMPANY_NAME'] = $('[name="COMPANY_NAME_ONLINE"]').val();
                         datas['CONTACT_FACE'] = $('[name="CONTACT_ONLINE"]').val();
                         datas['CONTACT_PHONE'] = $('[name="PHONE_ONLINE"]').val();
                         datas['COMPANY_INN'] = $('[name="INN_ONLINE"]').val();
                         datas['COMPANY_KPP'] = $('[name="KPP_ONLINE"]').val();
                         datas['COMPANY_UR_ADDRESS'] = $('[name="UR_ADDRESS_ONLINE"]').val();
                         datas['COMPNAY_FACT_ADDRESS'] = $('[name="FACT_ONLINE"]').val();
                         datas['COMPNAY_BANK'] = $('[name="BANK_ONLINE"]').val();
                         datas['COMPANY_COR'] = $('[name="COR_BANK_ONLINE"]').val();
                         datas['COMPANY_BIK'] = $('[name="BIK_ONLINE"]').val();
                         datas['COMPANY_BIL'] = $('[name="BILL_ONLINE"]').val();
                         datas['COMPANY_DIR'] = $('[name="GEN_DIR_ONLINE"]').val();
                         datas['COMPANY_PHONE'] = $('[name="COMPANY_PHONE_ONLINE"]').val();
                         datas['COMPANY_EMAIL'] = $('[name="COMPANY_EMAIL_ONLINE"]').val();*/
                        break;
                    default://cash

                        break;
                }
                $.ajax({
                    url: "/local/templates/bosch/ajax/order.php",
                    type: "POST",
                    dataType: 'json',
                    data: datas,
                    success: function (result) {
                        if (result.STATUS == "ERROR") {
                            $('.errorcostum').html(result.HTML);
                        } else {
                            $('[data-dis]').prop('disabled', 'disabled');
                            location.href = location.pathname + '?ORDER_ID=' + result;
                        }
                    }
                });
            }else{
                $('.dds_errorless').show();
                return false
            }
        }
    });

    return false;
});
$(document).on('click','.dds_new_profile',function () {
$(this).closest('.dds_tab_form').addClass('dds_edit');
})

/*$(document).on('click','.ddsToThreeStep',function () {
    $('[data-dis]').prop('disabled', 'disabled');
    var data = $('#ORDER').find('input').serialize();
    var delivery = $('[name="DELIVERY"]:checked').val();
    var datas = {};
    datas['NAME'] = $('[name="name"]').val();
    datas['PHONE'] = $('[name="PHONE"]').val();
    datas['EMAIL'] = $('[name="EMAIL"]').val();
    datas['PAYMENT'] = $('[name="PAYMENT"]:checked').val();
    datas['DELIVERY'] = delivery;
    datas['ADDRESS'] = $('[name="ADDRES"]').val();
    datas['REQ'] = $('[name="REQ"]').val();
    datas['REQ_SECOND'] = $('[name="REQ_SECOND"]').val();
    datas['NAME_TK'] = $('[name="NAME_TK"]').val();
    datas['PHONE_TK'] = $('[name="PHONE_TK"]').val();
    datas['SITE_TK'] = $('[name="SITE_TK"]').val();
    switch (delivery){
        case '2':///delivery
            switch ($('[name="addr-2"]:checked').val()){
                case 'MOSCOW':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPM"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPM"]').val();
                    datas['CONTACT_FACE'] = $('[name="FACE_TPM"]').val();
                    datas['STREET'] = $('[name="STREET_TPM"]').val();
                    datas['DELIVERY_HOME'] = $('[name="HOME_TPM"]').val();
                    datas['OFFICE'] = $('[name="OFFICE_TPM"]').val();
                    datas['TERMINAL'] = $('[name="INTERCOM_TPM"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPM"]').val();
                    break;
                case 'OBL':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPMO"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPMO"]').val();
                    datas['CONTACT_FACE'] = $('[name="FACE_TPMO"]').val();
                    datas['ADDRESS'] = $('[name="ADDRESS_TPMO"]').val();
                    datas['KMFROMMKAD'] = $('[name="KM_TPMO"]').val();
                    datas['PODEZD'] = $('[name="POD_TPMO"]').val();
                    datas['DELIVERY_FLOOR'] = $('[name="FLOOR_TPMO"]').val();
                    datas['OFFICE'] = $('[name="OFFICE_TPMO"]').val();
                    datas['TERMINAL'] = $('[name="INTERCOM_TPMO"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPMO"]').val();
                    break;
                case 'RUSSIA':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_CITY'] = $('[name="CITY_TPR"]').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPR"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPR"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPR"]').val();


                    datas['TP_COMPANY'] = $('[name="TP_COMPANY"]:checked').val();
                    datas['TYPE_PAY'] = $('[name="TYPE_PAY"]:checked').val();

                    switch ($('[name="TYPE_PAY"]:checked').val()){
                        case 'FIZ_TK':
                            datas['FIO'] = $('[name="FIO"]').val();
                            datas['SERIES'] = $('[name="SERIES"]').val();
                            datas['PHONE_HOME'] = $('[name="PHONED"]').val();
                            break;
                        default:
                            datas['COMPANY_NAME'] = $('[name="COMPANY_NAME"]').val();
                            datas['COMPANY_FACE'] = $('[name="COMPANY_FACE"]').val();
                            datas['CONTACT_PHONE'] = $('[name="COMPANY_FACE_PHONE"]').val();
                            datas['COMPANY_INN'] = $('[name="COMPANY_INN"]').val();
                            datas['COMPANY_KPP'] = $('[name="COMPANY_KPP"]').val();
                            datas['COMPANY_UR_ADDRESS'] = $('[name="COMPANY_JUR_ADR"]').val();
                            datas['COMPNAY_FACT_ADDRESS'] = $('[name="COMPANY_FACT_ADR"]').val();
                            datas['COMPANY_BANK'] = $('[name="COMPANY_BANK"]').val();
                            datas['COMPANY_COR'] = $('[name="COMPANY_KOR"]').val();
                            datas['COMPANY_BIK'] = $('[name="COMPANY_BIK"]').val();
                            datas['COMPANY_BIL'] = $('[name="COMPANY_CHEK"]').val();
                            datas['COMPANY_DIR'] = $('[name="COMPANY_CEO"]').val();
                            datas['COMPANY_PHONE'] = $('[name="COMPANY_PHONE"]').val();
                            datas['COMPANY_EMAIL'] = $('[name="COMPANY_EMAIL"]').val();
                            break;
                    }
                    break;
            }
            break;
        default://self
            datas['DELIVERY_DESCRIPTION'] = '(Товар резервируется на 3 дня после подтверждения заказа менеджером)';
            break;
    }
    switch ($('[name="PAYMENT"]:checked').val()){
        case '3'://nocash

            datas['COMPANY_NAME_ONLINE'] = $('[name="COMPANY_NAME_ONLINE"]').val();
            datas['CONTACT_ONLINE'] = $('[name="CONTACT_ONLINE"]').val();
            datas['PHONE_ONLINE'] = $('[name="PHONE_ONLINE"]').val();
            datas['INN_ONLINE'] = $('[name="INN_ONLINE"]').val();
            datas['KPP_ONLINE'] = $('[name="KPP_ONLINE"]').val();
            datas['UR_ADDRESS_ONLINE'] = $('[name="UR_ADDRESS_ONLINE"]').val();
            datas['FACT_ONLINE'] = $('[name="FACT_ONLINE"]').val();
            datas['BANK_ONLINE'] = $('[name="BANK_ONLINE"]').val();
            datas['COR_BANK_ONLINE'] = $('[name="COR_BANK_ONLINE"]').val();
            datas['BIK_ONLINE'] = $('[name="BIK_ONLINE"]').val();
            datas['BILL_ONLINE'] = $('[name="BILL_ONLINE"]').val();
            datas['GEN_DIR_ONLINE'] = $('[name="GEN_DIR_ONLINE"]').val();
            datas['COMPANY_PHONE_ONLINE'] = $('[name="COMPANY_PHONE_ONLINE"]').val();
            datas['COMPANY_EMAIL_ONLINE'] = $('[name="COMPANY_EMAIL_ONLINE"]').val();
            break;
        default://cash

            break;
    }
    $.ajax({
        url: "/local/templates/bosch/ajax/third_step_result.php",
        type: "POST",
        dataType: 'html',
        data: datas,
        success: function (result) {
           $('.busket-steps-content_final').html(result)
            if(parseInt($('.dds_final_sum').attr('data-price'))>1000){
                $('.dds_errorless').hide();
            }else{
                $('.dds_errorless').show();
                return false
            }
        }
    });

});*/
$(document).on('change','.dds_req_select',function () {
    $(this).closest('.tab-radio-content').find('.dds_redact').attr('data-id',$(this).val());
    //$('.dds_redact').attr('data-id',$(this).val());
	$('.dds_req').hide();
	$('.dds_req-'+$(this).val()).show();
})
$(document).on('change','.dds_prof_select',function () {
	$('.dds_redact_prof').attr('data-id',$(this).val());
	$('.dds_prof').hide();
	$('.dds_prof-'+$(this).val()).show();
})
$(document).on('click','.dds_redact_prof',function () {

	var id = $(this).attr('data-id');
	var $this = $(this);
    $.ajax({
        url: "/local/templates/bosch/ajax/edit_profile.php",
        type: "POST",
        dataType: 'html',
        data: {id:id},
        success: function (result) {
            $this.parents('form').addClass('dds_edit');
            $('#add-new-addr2').html(result);
            $('input[data-tab-radio]').each(function () {
                var th = $(this),
                    tabRadio = th.data('tab-radio');
                if (th.is(":checked")) {

                    $('#' + tabRadio).fadeIn(100).addClass("active")
                        .siblings('.tab-radio-content').removeClass('active').hide();
                }
            })
            var customOptions = {
                onKeyPress: function (val, e, field, options) {

                    if (val.replace(/\D/g, '').length === 2) {
                        // val = val.replace('8', '');
                        // field.val(val);
                    }
                    field.mask("+7(000)000-00-00", options);
                }
            };

            var customOptionsdds = {
                onKeyPress: function (val, e, field, options) {

                    field.mask("00 00 000000", options);
                }
            };
            $('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);
            $('.dds_pasport_mask').attr("pattern", "[0-9]{2} [0-9]{2} [0-9]{6}").mask("00 00 000000", customOptionsdds);
            var validator = $('.validated-form').validate({

                onfocusout: function (element) {

                    if ($(element).val().length > 0) {

                        this.element(element);

                    }



                },

                highlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-error")

                        .removeClass("js-input-valid");

                },

                unhighlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-valid")

                        .removeClass("js-input-error");

                },

                errorElement: "div",

                errorClass: "error-message"

            });
            $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');
            $('input').each(function () {
                if ($(this).val() !== '') {
                    $(this).closest('label').removeClass('empty');
                } else {
                    $(this).closest('label').addClass('empty');
                }
            })
            $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').on('keyup change click input cut copy paste', function () {

                if ($(this).val() !== '') {
                    $(this).closest('label').removeClass('empty');
                } else {
                    $(this).closest('label').addClass('empty');
                }
                $(this).on('.keyup', function () {
                    if ($(this).val() !== '') {
                        $(this).closest('label').removeClass('empty');
                    } else {
                        $(this).closest('label').addClass('empty');
                    }
                });
            })
            $('.js-form-validate').parsley();
            var file = $(".add-file input.add-file__input[type=file]");
            file.change(function () {
                var filename = $(this).val().replace(/.*\\/, "");
                var name = $(".add-file__filename  ");
                name.text(filename);

            });
        }
    });

})
$(document).on('click','.dds_new_tk_sub',function () {
    var ido = $('#'+$(this).attr('data-form-id'));
    var back = $('#'+$(this).attr('data-back'))
    ido.submit();
	$('.js-form-validate').parsley();
	var test = ido.find('.parsley-errors-list')
    if(!test.hasClass('filled')){
        var data = ido.find('input').serialize();
        var id = $('[name=id]').val();
        var newadr = $(this).attr('data-unauth');
        $.ajax({
            url: "/local/templates/bosch/ajax/addadr_order.php",
            type: "POST",
            dataType: 'json',
            data: data,
            success: function (data) {
                if (data.STATUS == "ERROR") {
                    $('.errorcostum').html(data.HTML);
                } else {
                    $.ajax({
                        url: "/local/templates/bosch/ajax/newadr.php",
                        type: "POST",
                        dataType: 'html',
                        data: {id:id},
                        success: function (result) {

                            $('.dds_tp').html(result);
                            back.find('[value="'+data.ID+'"]').click();
                            var customOptions = {
                                onKeyPress: function (val, e, field, options) {

                                    if (val.replace(/\D/g, '').length === 2) {
                                        // val = val.replace('8', '');
                                        // field.val(val);
                                    }
                                    field.mask("+7(000)000-00-00", options);
                                }
                            };
                            var customOptionsdds = {
                                onKeyPress: function (val, e, field, options) {

                                    field.mask("00 00 000000", options);
                                }
                            };
                            $('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);
                            $('.dds_pasport_mask').attr("pattern", "[0-9]{2} [0-9]{2} [0-9]{6}").mask("00 00 000000", customOptionsdds);
                            var validator = $('.validated-form').validate({

                                onfocusout: function (element) {

                                    if ($(element).val().length > 0) {

                                        this.element(element);

                                    }



                                },

                                highlight: function (element, errorClass, validClass) {

                                    $(element)

                                        .closest(".input-box")

                                        .addClass("js-input-error")

                                        .removeClass("js-input-valid");

                                },

                                unhighlight: function (element, errorClass, validClass) {

                                    $(element)

                                        .closest(".input-box")

                                        .addClass("js-input-valid")

                                        .removeClass("js-input-error");

                                },

                                errorElement: "div",

                                errorClass: "error-message"

                            });

                            $('input[data-tab-radio]').each(function () {
                                var th = $(this),
                                    tabRadio = th.data('tab-radio');
                                if (th.is(":checked")) {

                                    $('#' + tabRadio).fadeIn(100).addClass("active")
                                        .siblings('.tab-radio-content').removeClass('active').hide();
                                }
                            })

                            $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');
                            $('input').each(function () {
                                if ($(this).val() !== '') {
                                    $(this).closest('label').removeClass('empty');
                                } else {
                                    $(this).closest('label').addClass('empty');
                                }
                            })
                            $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').on('keyup change click input cut copy paste', function () {

                                if ($(this).val() !== '') {
                                    $(this).closest('label').removeClass('empty');
                                } else {
                                    $(this).closest('label').addClass('empty');
                                }
                                $(this).on('.keyup', function () {
                                    if ($(this).val() !== '') {
                                        $(this).closest('label').removeClass('empty');
                                    } else {
                                        $(this).closest('label').addClass('empty');
                                    }
                                });
                            })
                            $('.js-form-validate').parsley();

                        }
                    });

                        back.fadeIn(100).addClass("active").siblings('.tab-radio-content').removeClass('active').hide();
                    back.closest('.dds_tab_form').find('.dds_required').prop('required',false);
                    $.each(back.closest('.dds_tab_form').find('.tab-radio-content'), function() {
                        if($(this).hasClass('active')){
                            $(this).find('.dds_required').prop('required',true);
                        }else{
                            $.each(back.siblings('.tab-radio-content'), function() {
                                if(!$(this).hasClass('active')){
                                    $(this).find('.dds_required').prop('required', false);
                                }
                            })
                        }
                    });
                    $.each(back.closest('.dds_tab_form').find('.tab-radio-content'), function() {
                        if(!$(this).hasClass('active')){
                            $(this).find('.dds_required').prop('required', false);
                        }
                    });
                                   }

            }
        });

	}
return false;

})
$(document).on('click','.dds_new_hand_req',function () {
    $(this).closest('.dds_tab_form').addClass('reqedit');
})
$(document).on('click','.dds_redact',function () {
    $(this).closest('.dds_tab_form').addClass('reqedit');
	var data = {};
    data['id'] = $(this).attr('data-id');
    var second = $(this).attr('data-second');
    data['second'] = second;
    $.ajax({
        url: "/local/templates/bosch/ajax/edit_req.php",
        type: "POST",
        dataType: 'html',
        data: data,
        success: function (result) {
            $('#dds_req_edit_form').html(result);
            if(second=='Y') {
                $('#dds_req_edit_form2').html(result);
            }
            var customOptions = {
                onKeyPress: function (val, e, field, options) {

                    if (val.replace(/\D/g, '').length === 2) {
                        // val = val.replace('8', '');
                        // field.val(val);
                    }
                    field.mask("+7(000)000-00-00", options);
                }
            };
            var customOptionsdds = {
                onKeyPress: function (val, e, field, options) {

                    field.mask("00 00 000000", options);
                }
            };
            $('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);
            $('.dds_pasport_mask').attr("pattern", "[0-9]{2} [0-9]{2} [0-9]{6}").mask("00 00 000000", customOptionsdds);
            var validator = $('.validated-form').validate({

                onfocusout: function (element) {

                    if ($(element).val().length > 0) {

                        this.element(element);

                    }



                },

                highlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-error")

                        .removeClass("js-input-valid");

                },

                unhighlight: function (element, errorClass, validClass) {

                    $(element)

                        .closest(".input-box")

                        .addClass("js-input-valid")

                        .removeClass("js-input-error");

                },

                errorElement: "div",

                errorClass: "error-message"

            });
            $('input[data-tab-radio]').each(function () {
                var th = $(this),
                    tabRadio = th.data('tab-radio');
                if (th.is(":checked")) {

                    $('#' + tabRadio).fadeIn(100).addClass("active")
                        .siblings('.tab-radio-content').removeClass('active').hide();
                }
            })

            $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');
            $('input').each(function () {
                if ($(this).val() !== '') {
                    $(this).closest('label').removeClass('empty');
                } else {
                    $(this).closest('label').addClass('empty');
                }
            })
            $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').on('keyup change click input cut copy paste', function () {

                if ($(this).val() !== '') {
                    $(this).closest('label').removeClass('empty');
                } else {
                    $(this).closest('label').addClass('empty');
                }
                $(this).on('.keyup', function () {
                    if ($(this).val() !== '') {
                        $(this).closest('label').removeClass('empty');
                    } else {
                        $(this).closest('label').addClass('empty');
                    }
                });
            })
            $('.js-form-validate').parsley();
            var file = $(".add-file input.add-file__input[type=file]");
            file.change(function () {
                var filename = $(this).val().replace(/.*\\/, "");
                var name = $(".add-file__filename  ");
                name.text(filename);

            });

        }
    });
})
$(document).on('submit','.dds_tab_form',function (e) {
    var $this = $(this);
    if($(this).hasClass('new_adr')){
        return false;
    }
    if($(this).hasClass('reqedit')){

        return false;
    }

    if($(this).hasClass('dds_edit')){
        var data = $(this).serialize();
        var test = {}
        var adr;
        if($(this).find('#add-new-addr2').hasClass('active')){
           adr = $(this).find('#add-new-addr2')
        }
        if($(this).find('#add-new-addr').hasClass('active')){
            adr = $(this).find('#add-new-addr')
        }
        adr.find('input').each(function () {
            if($(this).val()){

                if($(this).attr('type')=='radio' && $(this).prop('checked')){
                    test[$(this).attr('name')] = $(this).val()
                }
               if($(this).attr('type')!='radio'){
                   test[$(this).attr('name')] = $(this).val()
               }
            }
        })
        var back = $('#'+$(this).find('[data-back]').attr('data-back'));

        $.ajax({
            url: "/local/templates/bosch/ajax/new_profile.php",
            type: "POST",
            dataType: 'json',
            data: test,
            success: function (result) {
                $('[name="ADDRES"]').children('option:selected').val(result);
                $this.find('.dds_redact_prof').attr('data-id',result);
                back.fadeIn(100).addClass("active").siblings('.tab-radio-content').removeClass('active').hide();
                back.closest('.dds_tab_form').find('.dds_required').prop('required',false);
                $.each(back.closest('.dds_tab_form').find('.tab-radio-content'), function() {
                    if($(this).hasClass('active')){
                        $(this).find('.dds_required').prop('required',true);
                    }else{
                        $.each(back.siblings('.tab-radio-content'), function() {
                            if(!$(this).hasClass('active')){
                                $(this).find('.dds_required').prop('required', false);
                            }
                        })
                    }
                });
                $.each(back.closest('.dds_tab_form').find('.tab-radio-content'), function() {
                    if(!$(this).hasClass('active')){
                        $(this).find('.dds_required').prop('required', false);
                    }
                });
                $.get( "?AJAX_RED_PROF=Y", function( data ) {
                    $('#all-addr').html(data)
                });
                $this.removeClass('dds_edit');
                $('#delivery-comp-all').find('.tab-radio-content').find('input[type="text"],input[type="tel"],input[type="email"]').val('');
                $('#add-new-addr').parents('form').parsley().reset();
                $('#add-new-addr').find('label').addClass('empty');

            }
        });
        return false;
    }
    var data = $('#ORDER').find('input').serialize();
    var delivery = $('[name="DELIVERY"]:checked').val();
    var datas = {};
    datas['NAME'] = $('[name="name"]').val();
    datas['PHONE'] = $('[name="PHONE"]').val();
    datas['EMAIL'] = $('[name="EMAIL"]').val();
    datas['PAYMENT'] = $('[name="PAYMENT"]:checked').val();
    datas['DELIVERY'] = delivery;
    datas['ADDRESS'] = $('[name="ADDRES"]').val();
    datas['REQ'] = $('[name="REQ"]').val();

    datas['NAME_TK'] = $('[name="NAME_TK"]').val();
    datas['PHONE_TK'] = $('[name="PHONE_TK"]').val();
    datas['SITE_TK'] = $('[name="SITE_TK"]').val();
    switch (delivery){
        case '2':///delivery
            switch ($('[name="addr-2"]:checked').val()){
                case 'MOSCOW':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPM"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPM"]').val();
                    datas['CONTACT_FACE'] = $('[name="FACE_TPM"]').val();
                    datas['STREET'] = $('[name="STREET_TPM"]').val();
                    datas['DELIVERY_HOME'] = $('[name="HOME_TPM"]').val();
                    datas['OFFICE'] = $('[name="OFFICE_TPM"]').val();
                    datas['TERMINAL'] = $('[name="INTERCOM_TPM"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPM"]').val();
                    break;
                case 'OBL':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPMO"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPMO"]').val();
                    datas['CONTACT_FACE'] = $('[name="FACE_TPMO"]').val();
                    datas['ADDRESS'] = $('[name="ADDRESS_TPMO"]').val();
                    datas['KMFROMMKAD'] = $('[name="KM_TPMO"]').val();
                    datas['PODEZD'] = $('[name="POD_TPMO"]').val();
                    datas['DELIVERY_FLOOR'] = $('[name="FLOOR_TPMO"]').val();
                    datas['OFFICE'] = $('[name="OFFICE_TPMO"]').val();
                    datas['TERMINAL'] = $('[name="INTERCOM_TPMO"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPMO"]').val();
                    break;
                case 'RUSSIA':
                    datas['DELIVERY_PLACE'] = $('[name="addr-2"]:checked').val();
                    datas['DELIVERY_CITY'] = $('[name="CITY_TPR"]').val();
                    datas['DELIVERY_NAME'] = $('[name="NAME_TPR"]').val();
                    datas['DELIVERY_PHONE'] = $('[name="PHONE_TPR"]').val();
                    datas['COMMENT'] = $('[name="COMMENT_TPR"]').val();


                    datas['TP_COMPANY'] = $('[name="TP_COMPANY"]:checked').val();
                    datas['TYPE_PAY'] = $('[name="TYPE_PAY"]:checked').val();

                    switch ($('[name="TYPE_PAY"]:checked').val()){
                        case 'FIZ_TK':
                            datas['FIO'] = $('[name="FIO"]').val();
                            datas['SERIES'] = $('[name="SERIES"]').val();
                            datas['PHONE_HOME'] = $('[name="PHONED"]').val();
                            break;
                        default:
                            datas['COMPANY_NAME'] = $('[name="COMPANY_NAME"]').val();
                            datas['COMPANY_FACE'] = $('[name="COMPANY_FACE"]').val();
                            datas['CONTACT_PHONE'] = $('[name="COMPANY_FACE_PHONE"]').val();
                            datas['COMPANY_INN'] = $('[name="COMPANY_INN"]').val();
                            datas['COMPANY_KPP'] = $('[name="COMPANY_KPP"]').val();
                            datas['COMPANY_UR_ADDRESS'] = $('[name="COMPANY_JUR_ADR"]').val();
                            datas['COMPNAY_FACT_ADDRESS'] = $('[name="COMPANY_FACT_ADR"]').val();
                            datas['COMPANY_BANK'] = $('[name="COMPANY_BANK"]').val();
                            datas['COMPANY_COR'] = $('[name="COMPANY_KOR"]').val();
                            datas['COMPANY_BIK'] = $('[name="COMPANY_BIK"]').val();
                            datas['COMPANY_BIL'] = $('[name="COMPANY_CHEK"]').val();
                            datas['COMPANY_DIR'] = $('[name="COMPANY_CEO"]').val();
                            datas['COMPANY_PHONE'] = $('[name="COMPANY_PHONE"]').val();
                            datas['COMPANY_EMAIL'] = $('[name="COMPANY_EMAIL"]').val();
                            break;
                    }
                    break;
            }
            break;
        default://self
            datas['DELIVERY_DESCRIPTION'] = '(Товар резервируется на 3 дня после подтверждения заказа менеджером)';
            break;
    }
    switch ($('[name="PAYMENT"]:checked').val()){
        case '3'://nocash
            datas['REQ_SECOND'] = $('[name="REQ_SECOND"]').val();
            datas['COMPANY_NAME_ONLINE'] = $('[name="COMPANY_NAME_ONLINE"]').val();
            datas['CONTACT_ONLINE'] = $('[name="CONTACT_ONLINE"]').val();
            datas['PHONE_ONLINE'] = $('[name="PHONE_ONLINE"]').val();
            datas['INN_ONLINE'] = $('[name="INN_ONLINE"]').val();
            datas['KPP_ONLINE'] = $('[name="KPP_ONLINE"]').val();
            datas['UR_ADDRESS_ONLINE'] = $('[name="UR_ADDRESS_ONLINE"]').val();
            datas['FACT_ONLINE'] = $('[name="FACT_ONLINE"]').val();
            datas['BANK_ONLINE'] = $('[name="BANK_ONLINE"]').val();
            datas['COR_BANK_ONLINE'] = $('[name="COR_BANK_ONLINE"]').val();
            datas['BIK_ONLINE'] = $('[name="BIK_ONLINE"]').val();
            datas['BILL_ONLINE'] = $('[name="BILL_ONLINE"]').val();
            datas['GEN_DIR_ONLINE'] = $('[name="GEN_DIR_ONLINE"]').val();
            datas['COMPANY_PHONE_ONLINE'] = $('[name="COMPANY_PHONE_ONLINE"]').val();
            datas['COMPANY_EMAIL_ONLINE'] = $('[name="COMPANY_EMAIL_ONLINE"]').val();
            break;
        default://cash

            break;
    }
    $.ajax({
        url: "/local/templates/bosch/ajax/third_step_result.php",
        type: "POST",
        dataType: 'html',
        data: datas,
        success: function (result) {
            $('.busket-steps-content_final').html(result)
            if(parseInt($('.dds_final_sum').attr('data-price'))>1000 || delivery!=2){
                $('.dds_errorless').hide();
                $('.dds_tab').hide();
                $('.busket-steps_item').removeClass('busket-steps_item--active');
                $('.dds_tab-'+$this.data('tab')).show();
                $('.dds_control-'+$this.data('tab')).addClass('busket-steps_item--active');
            }else{
                $('.dds_errorless').show();
                return false
            }
        }
    });


    return false
});

$(document).on('click','.dds_new_req_sub',function () {
    var ido = $('#'+$(this).attr('data-form-id'));
    var second = $(this).attr('data-second');
    var data = new FormData();
    $(ido).find('input').each(function () {
        if ($(this).prop('files')) {
            jQuery.each(jQuery(this)[0].files, function (i, file) {
                data.append('file', file);
            });
        } else {
            data.append(this.name, this.value);
        }
        if ($(this).attr('data-req') == 'Y' && this.value.length <= 0) {
            error += 'Не заполнено поле ' + this.placeholder + '\r\n';
        }
    });
    data.append('second',second);
    var id = $('[name=id]').val();
    var $this = $(this);
    var back = $('#'+$(this).attr('data-back'))
    ido.submit();
    $('.js-form-validate').parsley();
    var test = ido.find('.parsley-errors-list')
    if(!test.hasClass('filled')){
        $.ajax({
            url: "/local/templates/bosch/ajax/addadr_order.php",
            type: "POST",
            dataType: 'json',
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            success: function (result) {
                if (result.STATUS == "ERROR") {
                    return false
                } else {
                    if(second=='Y'){
                        $('#delivery-reqvw').fadeIn(100).addClass("active").siblings('.tab-radio-content').removeClass('active').hide();
                        back.fadeIn(100).addClass("active").siblings('.tab-radio-content').removeClass('active').hide();
                        back.closest('.dds_tab_form').find('.dds_required').prop('required',false);
                        $.each(back.closest('.dds_tab_form').find('.tab-radio-content'), function() {
                            if($(this).hasClass('active')){
                                $(this).find('.dds_required').prop('required',true);
                            }else{
                                $.each(back.siblings('.tab-radio-content'), function() {
                                    if(!$(this).hasClass('active')){
                                        $(this).find('.dds_required').prop('required', false);
                                    }
                                })
                            }
                        });
                        $.each(back.closest('.dds_tab_form').find('.tab-radio-content'), function() {
                            if(!$(this).hasClass('active')){
                                $(this).find('.dds_required').prop('required', false);
                            }
                        });
                        $.get( "?AJAX_RED_REQ=Y", function( data ) {
                            $('#delivery-reqvw').html(data)
                        });
                        $.get( "?AJAX_RED_REQF=Y", function( data ) {
                            $('.dds_newrecaja').html(data)
                        });
                        $this.closest('#dds_req_edit_form2').html('');
                        $('.reqedit').removeClass('reqedit');

                        return false
                    }else{
                        var ajax = 'Y';
                        $('#delivery-reqv').fadeIn(100).addClass("active").siblings('.tab-radio-content').removeClass('active').hide();
                        $.ajax({
                            url: "/local/templates/bosch/ajax/edit_profile.php",
                            type: "POST",
                            dataType: 'html',
                            data: {id:id,ajax:ajax},
                            success: function (result) {
                                $('#dds_req_edit_step1').html(result);
                                $.get( "?AJAX_RED_REQ=Y", function( data ) {
                                    $('#delivery-reqvw').html(data)
                                });
                                $.get( "?AJAX_RED_REQF=Y", function( data ) {
                                    $('.dds_newrecaja').html(data)
                                });
                                var customOptions = {
                                    onKeyPress: function (val, e, field, options) {

                                        if (val.replace(/\D/g, '').length === 2) {
                                            // val = val.replace('8', '');
                                            // field.val(val);
                                        }
                                        field.mask("+7(000)000-00-00", options);
                                    }
                                };
                                var customOptionsdds = {
                                    onKeyPress: function (val, e, field, options) {

                                        field.mask("00 00 000000", options);
                                    }
                                };
                                $('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);
                                $('.dds_pasport_mask').attr("pattern", "[0-9]{2} [0-9]{2} [0-9]{6}").mask("00 00 000000", customOptionsdds);
                                var validator = $('.validated-form').validate({

                                    onfocusout: function (element) {

                                        if ($(element).val().length > 0) {

                                            this.element(element);

                                        }



                                    },

                                    highlight: function (element, errorClass, validClass) {

                                        $(element)

                                            .closest(".input-box")

                                            .addClass("js-input-error")

                                            .removeClass("js-input-valid");

                                    },

                                    unhighlight: function (element, errorClass, validClass) {

                                        $(element)

                                            .closest(".input-box")

                                            .addClass("js-input-valid")

                                            .removeClass("js-input-error");

                                    },

                                    errorElement: "div",

                                    errorClass: "error-message"

                                });
                                $('input[data-tab-radio]').each(function () {
                                    var th = $(this),
                                        tabRadio = th.data('tab-radio');
                                    if (th.is(":checked")) {
                                        $('#' + tabRadio).fadeIn(100).addClass("active")
                                            .siblings('.tab-radio-content').removeClass('active').hide();
                                    }
                                })

                                $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');
                                $('input').each(function () {
                                    if ($(this).val() !== '') {
                                        $(this).closest('label').removeClass('empty');
                                    } else {
                                        $(this).closest('label').addClass('empty');
                                    }
                                })
                                $('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').on('keyup change click input cut copy paste', function () {

                                    if ($(this).val() !== '') {
                                        $(this).closest('label').removeClass('empty');
                                    } else {
                                        $(this).closest('label').addClass('empty');
                                    }
                                    $(this).on('.keyup', function () {
                                        if ($(this).val() !== '') {
                                            $(this).closest('label').removeClass('empty');
                                        } else {
                                            $(this).closest('label').addClass('empty');
                                        }
                                    });
                                })
                                $('.js-form-validate').parsley();

                                var file = $(".add-file input.add-file__input[type=file]");
                                file.change(function () {
                                    var filename = $(this).val().replace(/.*\\/, "");
                                    var name = $(".add-file__filename  ");
                                    name.text(filename);

                                });
                            }
                        });

                        $('form').removeClass('reqedit');

                        return false
                    }


                }

            }
    });


    }
})
$(document).on('change','[data-dds_description]',function () {
$('.dds_delivery_description_step1').html($(this).attr('data-dds_description'));
})
$(document).on('click','.jvshDDSShowBasket',function () {
    $(".jvshDDSShowBasketItem").toggle(250);
    $(this).toggleClass('ddsactiveshow');
if($(this).hasClass('ddsactiveshow')){
    $(this).html('Скрыть часть заказа ');
}else{
    $(this).html('Показать весь заказ ');
}
    return false;
})
$(document).on('click','.dds_new_adr_form',function () {
    $(this).parents('form').addClass('new_adr');
   var top = $('.busket-steps').offset().top;
    $('body,html').animate({scrollTop: top-10}, 0);

})
$(document).on('click','.dds_new_adr_form_sub',function () {
    $(this).parents('form').removeClass('new_adr');
})

$(document).ready(function () {

    $(document).on('click','.dds_back',function () {
        $('.dds_tab').hide();
        $('.busket-steps_item').removeClass('busket-steps_item--active');
        $('.dds_control-'+$(this).data('tab')).addClass('busket-steps_item--active');
        $('.dds_tab-'+$(this).data('tab')).show();
    });
    $(document).on('change','.dds_req',function () {
        var id = $(this).data('tab-radio');
        $('#'+id).closest('.dds_tab_form').find('.dds_required').prop('required',false);
        $.each($('#'+id).closest('.dds_tab_form').find('.tab-radio-content'), function() {
            if($(this).hasClass('active')){
                $(this).find('.dds_required').prop('required',true);
            }else{
                $.each($('#'+id).siblings('.tab-radio-content'), function() {
                    if(!$(this).hasClass('active')){
                        $(this).find('.dds_required').prop('required', false);
                    }
                })
            }
        });
        $.each($('#'+id).closest('.dds_tab_form').find('.tab-radio-content'), function() {
            if(!$(this).hasClass('active')){
                $(this).find('.dds_required').prop('required', false);
            }
        });

        /* $('#'+id).closest('.dds_tab_form').find('.dds_required').prop('required',false);
         $('#'+id).find('.dds_required').prop('required',true);
         if(id!='delivery-reqv-edit'){
             $('#dds_new_req').find('.dds_required').prop('required',false);
         }
         if(id!='delivery-receiver-1'){
             $('#delivery-receiver-1').find('.dds_required').prop('required',false);
         }
         if(id!='delivery-comp-new'){
             $('#delivery-comp-new').find('.dds_required').prop('required',false);
         }*/
    });
    $(document).on('click','.dds_req_block',function () {
        var idblock = $(this).data('tab-block');
        $('#'+idblock).closest('.dds_tab_form').find('.dds_required').prop('required',false);
        $.each($('#'+idblock).closest('.dds_tab_form').find('.tab-radio-content'), function() {
            if($(this).hasClass('active')){
                $(this).find('.dds_required').prop('required',true);
            }else{
                $.each($('#'+idblock).siblings('.tab-radio-content'), function() {
                    if(!$(this).hasClass('active')){
                        $(this).find('.dds_required').prop('required', false);
                    }
                })
            }
        });
        $.each($('#'+idblock).closest('.dds_tab_form').find('.tab-radio-content'), function() {
            if(!$(this).hasClass('active')){
                $(this).find('.dds_required').prop('required', false);
            }
        });

       /* $('#'+idblock).closest('.dds_tab_form').find('.dds_required').prop('required',false);
        $('#'+idblock).find('.dds_required').prop('required',true);
        $('#'+idblock).find('.dds_required_block').prop('required',true);
        if(idblock!='delivery-reqv-edit'){
            $('#dds_new_req').find('.dds_required').prop('required',false);
        }*/

    });
    $(document).on('click','.dds_req_back',function () {
        var idblock = $(this).data('prev');
        $('#'+idblock).find('.dds_required').prop('required',false);
    });

    $(document).on('keyup','.dds_login_input',function () {
        var EMAIL = $(this).val();
        if(EMAIL){
            $.ajax({
                url: "/local/templates/bosch/ajax/checkuseremail.php",
                type: "POST",
                dataType: 'html',
                data: {EMAIL:EMAIL},
                success: function (result) {
                    Parsley.addValidator('login', {
                        requirementType: 'string',
                        validateString: function() {
                            if(result!=='true'){
                                return false;
                            }else{
                                return true;
                            }


                        },
                        messages: {
                            ru: 'Почта уже используется',
                            en: 'This value should be a multiple of %s',
                            fr: 'Cette valeur doit être un multiple de %s'
                        }
                    });
                }
            });
        }


    });

});
$(document).on('click','.dds_back_req',function () {
    $('.reqedit').removeClass('reqedit');
  //  $(this).closest('.dds_new_req').html('');
});
$(document).on('click','.dds_clear',function () {
    $(this).closest('div').find('input').val('');
});

$(document).on('click', '[data-more-section]', function(  ){
	var sections = $(this).attr('data-more-section');
	var page = $(this).attr('data-page');
	$(this).remove();

	$.get( "/ajax/ajax_sections.php",{sections:sections,page:page}, function( data ) {
		$('.pagenSectins').append(data);

	});
});



