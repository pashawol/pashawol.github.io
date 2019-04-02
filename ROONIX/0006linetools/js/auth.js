//PERSONAL AREA MECHANICS
$(document).on('click','.remover_d',function () {
    $('.validated-form').find('input').attr('disabled',false);
    $('.validated-form').find('.nice-select').removeClass('disabled');
})
/*$(document).on('submit','#personal_form_1',function () {
    var c =  $( this ).serialize();
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: c,
        success: function (result) {
            console.log(result);
            if(result.ERROR=='N'){
                $('#error10').empty();
                $('#error10').html(result.MESSAGE);
            }
            if(result.ERROR=='Y'){
                $('#error10').empty();
                $('#error10').html(result.MESSAGE);
            }


        },
    });
    return false;
});*/
$(document).on('submit','#personal_form_2',function () {
    var c =  $( this ).serialize();
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: c,
        success: function (result) {
            console.log(result);
            if(result.ERROR=='N'){
                $('#error2').html(result.MESSAGE);

            }
            if(result.ERROR=='Y'){
                $('#error2').html(result.MESSAGE);

            }



        },
    });
    return false;
});
$(document).on('submit','#personal_form_3',function () {
    var c =  $( this ).serialize();
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        data: c,
        success: function (result) {
            $('#sucsess_personal-info').html(result);
        },
    });
    return false;
});
$(document).on('submit','#personal_form_4',function () {
    var c =  $( this ).serialize();
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        data: c,
        success: function (result) {
            $('#sucsess_personal-info2').html(result);
        },
    });
    return false;
});



//AUTH_MECHANICS
$(document).on('submit','#enter-formalin',function (e) {
    var c =  $( this ).serialize();
    var thisForm = $(this);
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: c,
        success: function (result) {
            if(result.TYPE=='ERROR'){
                thisForm.find('.error-message').html(result.MESSAGE);
                thisForm.find('.error-message').show();

            }
            if(result==true){
                location.href='/personal/';
            }

        },
    });
    return false;
})
$(document).on('submit','#reg-formalin',function () {
    var c =  $( this ).serialize();
    var thisForm = $(this);
    var check = 0;
    $.each(thisForm.find('input'),function (e) {
        if($(this).val()==''){
            $(this).next('.error-message').empty();
            $(this).next('.error-message').html('Это поле обязательное.');
            $(this).next('.error-message').show();
        }else{
            $(this).next('.error-message').empty();
            check=check+1;
        }
    });
    console.log(check);
    if(check==7){
        $.ajax({
            url: "/local/templates/bosch/ajax/Save_User_Password.php",
            type: "POST",
            dataType: 'json',
            data: c,
            success: function (result) {

                thisForm.find('.input-box').find('.error-message').empty();
                if(result.ERROR=='N'){
                    $('#error1').empty();
                    $('#error2').empty();
                    $('#password-confirm-error').empty();
                    $('#captcha-error').empty();
                    $('#password-register-confirm-error').empty();
                    //$('#error1').html(result.MESSAGE);
                    location.reload();
                }
                if(result.ERROR=='Y'){

                    $('#password-register-confirm-error').empty();
                    $('#password-register-confirm-error').html(result.MESSAGE);
                    $('#password-confirm-error').empty();
                    $('#password-confirm-error').html(result.MESSAGE);
                    $('#password-confirm-error').show();
                    $('#password-register-confirm-error').show();
                }
                if(result.ERROR=='CAPTCHA'){
                    $('#captcha-error').empty();
                    $('#captcha-error').html(result.MESSAGE);
                    $('#captcha-error').show();

                }
                if(result.ERROR=='YY'){
                    var message=result.MESSAGE.split('.<br>',3);
                    $('#captcha-error').empty();
                    $('#password-register-confirm-error').empty();
                    $('#password-confirm-error').empty();
                    if(message.length>2 && message[2].length>0 ){
                        $('#password-register-confirm-error').empty();
                        $('#password-register-confirm-error').html(message[1]);
                        $('#password-register-confirm-error').show();

                        $('#error2').empty();
                        $('#error2').show();
                        $('#error2').html(message[0]+'<br>'+message[2]);
                    }
                    if(message.length>2 && message[2].length==0 ){
                        $('#password-register-confirm-error').empty();
                        $('#password-register-confirm-error').html(message[0]);
                        $('#password-register-confirm-error').show();

                        $('#error2').empty();
                        $('#error2').show();
                        $('#error2').html(message[1]);
                    }
                    if(message.length==2){
                        $('#error2').empty();
                        $('#error2').show();
                        $('#error2').html(message[0]);
                    }
                    console.log(message.length);

                }

            },
        });
    }

    return false;
});
$(document).on('submit','#fgtpass',function () {
    var c =  $( this ).serialize();
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: c,
        success: function (result) {
            if(result.TYPE=='OK'){
                $('.sender').html(result.MESSAGE);
                $('.input-popup').remove();
                $('#reddy').remove();

            }
            if(result.TYPE=='ERROR'){
                $('#reddy').html(result.MESSAGE);

            }

        },
    });
    return false;
});
$(document).on('submit','#restore-pass-formalin',function () {
    var c =  $( this ).serialize();
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: c,
        success: function (result) {
            if(result.ERROR=='N'){
                $('#forgot-pw-add').modal("hide");
                $('#forgot-pw-success1').modal("show");
            }
            if(result.ERROR=='Y'){
                $('.error10').html(result.MESSAGE);
                setTimeout(function() {window.location.reload();}, 2000);
            }

        },
    });
    return false;
});
$(document).on('click','#logouts',function () {
    var action='logout';
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: {action:action},
        success: function (result) {
            location.reload();
        },
    });
    return false;
});
$(document).on('click','#logouts_menu',function () {
    var action='logout';
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: {action:action},
        success: function (result) {
            location.reload();
        },
    });
    return false;
});
$(document).on('click','#logouts_1',function () {
    var action='logout';
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: {action:action},
        success: function (result) {
            location.reload();
        },
    });
    return false;
});
$(document).on('click','#deleter_1',function () {
    var action='user_delete';
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: {action:action},
        success: function (result) {
            location.reload();
        },
    });
    return false;
});
$(document).on('click','#deleter',function () {
    var action='user_delete';
    $.ajax({
        url: "/local/templates/bosch/ajax/Save_User_Password.php",
        type: "POST",
        dataType: 'json',
        data: {action:action},
        success: function (result) {
            location.reload();
        },
    });
    return false;
});

//SEARCH_MECHANICS

/*$(document).on('keyup','.js-search',function () {
    var name = $( this ).val();
    var param = $('#search-select_1').val();
    var $this = $(this);
    $('[name="q"]').val(name);
    if(name.length >= 3) {
        $.get( "/local/templates/bosch/ajax/search.php/?name=" +name+'&param='+param, function( data ){
            $('.js-search-results').html(data);
        } );
    }
})*/

$(document).on('keyup','.js-search',function () {
    var name = $( this ).val();
    var param = $('#search-select1').val();
    var $this = $(this);
    $('[name="q"]').val(name);
    if(name.length >= 3) {
        $.get( "/local/templates/bosch/ajax/search.php/?q=" +name+'&by='+param, function( data ){
            $('.js-search-results').html(data);
        } );
    }
})
$(document).on('click','.itemssvg',function () {
    var id = $( this ).attr('data-id-elem');
    var quan = $(this).find('.counter-value').html();
    console.log(quan);
    var $this = $(this);
        $.get( "/local/templates/bosch/ajax/modal.php/?id=" +id+"&quan="+quan, function( data ){
            $('.svg-tooltip').html(data);
        } );

})