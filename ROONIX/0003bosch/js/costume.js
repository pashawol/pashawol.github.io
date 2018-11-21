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
        quantity = parseInt($('.counter-value').text());
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

$(document).on('click', '.counter-btn.counter-plus', function () {
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
            quantity: qq
        },
        success: function (result) {
            BX.onCustomEvent('OnBasketChange');
            var sum = parseFloat(inputs['DELIVERY'].dataset.price) + parseFloat(result.SUMM);
            $('#price').html(' Итого: ' + number_format(sum, 2, '.', ' ') + ' ₽');
        }
    });

    return false;
});
$(document).on('click', '.counter-btn.counter-minus', function () {
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
                var sum = parseFloat(inputs['DELIVERY'].dataset.price) + parseFloat(result.SUMM);
                $('#price').html(' Итого: ' + number_format(sum, 2, '.', ' ') + ' ₽');
            }
        });
    }


    return false;
});

$(document).on('click', '.dds_remove', function () {
    var tthis = this;
    var action = 'delete';
    var id = $(this).attr('data-id');
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
    console.log(datefrom);
    if (datefrom) {
        location.href = '?datefrom=' + datefrom + '&dateto=' + dateto;
    }
})
$(document).on('submit', '#ORDER', function () {
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
});
$(document).on('click', '.dds_addadr', function () {
    formData = new FormData()
    var error = '';
    var id = $(this).attr('data-class');
    $('.' + id).find('input').each(function () {
        if ($(this).prop('files')) {
            jQuery.each(jQuery(this)[0].files, function (i, file) {
                formData.append('file', file);
            });
            // formData.append('file',$(this).prop('files'));
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
            console.log(result);
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
            console.log(result);
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
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find('.svg-tooltip').show().siblings().hide();
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

    $(" .itemssvg").hover( function () {
        var elem_id = $(this).data('id-elem');
        // console.log(elem_id);
        if (!$(this).hasClass("active")){

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
                val = val.replace('8', '');
                field.val(val);
            }
            field.mask("+7(000)000-00-00", options);
        }
    };
    $('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").mask("+7(000)000-00-00", customOptions);



    var validator =  $('.validated-form').validate({

            onfocusout: function (element) {

                if ($(element).val().length > 0) {

                    this.element(element);
                    console.log('123')
                }

                console.log('123')

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
    $(".next-btn ").click(function () {
      
        validator.form();

        $('.validated-form').each(function(){

        
            $(this).validate({
    
                onfocusout: function (element) {
    
                    if ($(element).val().length > 0) {
    
                        this.element(element);
                        console.log('123')
                    }
    
                    console.log('123')
    
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
    
    $(" .next-btn2").click(function () {
        console.log(1);
        $('.validated-form').each(function(){

        
        $(this).validate({

            onfocusout: function (element) {

                if ($(element).val().length > 0) {

                    this.element(element);
                    console.log('123')
                }

                console.log('123')

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

        $(".redact-link.js-toggler.js-rekv-open, .btn-secondary.js-rekv-open").click(function(){
            $(".btns-block-foot, .redact-link.js-toggler").hide();
        })

        $(" .btn-secondary.js-rekv-close").click(function(){
            $(".btns-block-foot, .redact-link.js-toggler.js-rekv-open, .redact-link.js-toggler").show();
        })
})