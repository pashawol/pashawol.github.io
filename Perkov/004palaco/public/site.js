//$("#sendphp").submit(function(event) {
$('body').on('submit',"#sendphp", function(e) {
$xx=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test($('#phone').val());
        
		if ($('body #name').val() == "")
          {
              $('body #bthrow_error_name').fadeIn(1000).html('Представьтесь, пожалуйста.');
		           	event.preventDefault();
          }
  		else if (!$xx)
          {
              $('body #bthrow_error_name').empty();
              $('body #bthrow_error_phone').fadeIn(1000).html('Ошибка в номере');
               // $('body').on('#bthrow_error_phone',function(){
               //   '#bthrow_error_phone'.fadeIn(1000).html('Ошибка в номере')
               //   })
               event.preventDefault();
          }          	
  		
      else if ($('body #phone').val() == "")
          {
              $('body #bthrow_error_name').empty();
              $('body #bthrow_error_phone').fadeIn(1000).html('Как с Вами связаться?');
			          event.preventDefault();
          }
  		else if (!$('#chck1').prop('checked'))
          {
              $('body #bthrow_error_name').empty();
              $('body #bthrow_error_phone').fadeIn(1000).html('Необходимо принять соглашение?');
			          event.preventDefault();
          }	
      else
          {
/*              var postForm = {
                'name' : "<td>Имя :</td> "+"<td>"+$('#name').val()+"<td>",
                'phone' :"<td>Телефон : </td>" +"<td>"+$('#phone').val()+"<td>",
            };

            $.ajax({
                type        : 'POST',
                url         : 'send.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                    {
                        if (!data.success)
                            {
                                if (data.errors.name)
                                    {
                                        $('.throw_error').fadeIn(1000).html(data.errors.name);
                                    }
                            }
                        else
                            {
                                $('#sendphp').fadeIn(1000).html('<p>' + data.posted + '</p>');
                            }
                    }
            });
		*/
        }

        //event.preventDefault();

    });

$('body').on('submit',"#sendphp1", function(e) {
$xx=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test($('#phone1').val());
        
    if ($('body #name1').val() == "")
          {
              $('body #bthrow_error_name1').fadeIn(1000).html('Представьтесь, пожалуйста.');
                event.preventDefault();
          }
      else if (!$xx)
          {
              $('body #bthrow_error_name1').empty();
              $('body #bthrow_error_phone1').fadeIn(1000).html('Ошибка в номере');
               // $('body').on('#bthrow_error_phone',function(){
               //   '#bthrow_error_phone'.fadeIn(1000).html('Ошибка в номере')
               //   })
               event.preventDefault();
          }           
      
      else if ($('body #phone1').val() == "")
          {
              $('body #bthrow_error_name1').empty();
              $('body #bthrow_error_phone1').fadeIn(1000).html('Как с Вами связаться?');
                event.preventDefault();
          }
      else if (!$('#chck11').prop('checked'))
          {
              $('body #bthrow_error_name1').empty();
              $('body #bthrow_error_phone1').fadeIn(1000).html('Необходимо принять соглашение?');
                event.preventDefault();
          } 
      else
          {
        }

        //event.preventDefault();

    });



	

	$('#preimblock').parent().css('background',"transparent");
	$('.faq').parent().css('background',"transparent");
	$('.subpages').parent().css('background',"transparent");
	$('.vcard').parent().css('background',"#141414");

	var axc=$('a').is('.gallery-img');
	if(axc){
		$('aside').addClass('_xxx');
		$('#insideLeft').addClass('_xxx1');
	}

	//alert('Yes');
/*********** form-zakaz ******************************/

$('body').on('click', '#send-f', function(e){

    if ($('#name-o').val() == "")
    {
        //$('body').on()
        //$('#name-o').prop('placeholder','Представьтесь, пожалуйста.');
        $('#bthrow_error_name-o').html('Представьтесь, пожалуйста.');
        e.preventDefault();
    }else if ($('#telf-o').val() == "")
    {
        $('#bthrow_error_telf-o').html('Номер телефона, пожалуйста.');
        $('#bthrow_error_name-o').html('');
        e.preventDefault();
    }else if (!$('#condition1-o').prop("checked") && !$('#chskg').prop("checked"))
    {
        
    $('#bthrow_error_telf-o').html('');
    $('#bthrow_error_check-o').html('<span class="soglasie" >*Вы не дали согласие на обработку персональных данных.</span>');
    e.preventDefault();
    }
    else
    {
        $('#bthrow_error_check-o').html('');

        
        var postForm = {
            'name'  : $('#name-o').val(),
            'telf'  : $('#telf-o').val(),
            'email'  : $('#email-o').val(),
            'coment'  : $('#coment').val(),
            'cena': $('.mod-inp-cena').val(),
            'tovar': $('.mod-inp-name').val()                    
        };
        
    console.log(postForm);

      $.ajax({
            type        : 'POST',
            url         : '/send2.php',
            data        : postForm,
            dataType    : 'json',
            success     : function(data)
            {
                if (!data.success)
                {
                    if (data.errors.name)
                    {
                        $('.itogo-o').html('<p style="color:red;padding-top: 20px;">' + data.errors.name+ '</p>');
                    }
                }
                else
                {
                  
var url = 'https://palazo.ru/blagodaru';
$(location).attr('href',url);

                    $('.itogo-o').html('<p style="padding-top: 20px;">' + data.posted + '</p>');
                    $('input').val('');
                }
            }
        });/**/
    }

e.preventDefault();

});        

/*********** form-bespl ******************************/

$('body').on('click', '.btn2', function(e){

    if ($('#namey').val() == "")
    {
        //$('body').on()
        //$('#name-o').prop('placeholder','Представьтесь, пожалуйста.');
        $('#bthrow_error_namey').html('Представьтесь, пожалуйста.');
        $('#namey').css('border-color','red');
        e.preventDefault();
    }else if ($('#telfy').val() == ""  )
    {
        $('#bthrow_error_telfy').html('Номер телефона, пожалуйста.');
        $('#bthrow_error_namey').html('');
        $('#namey').css('border-color','#999');
        $('#telfy').css('border-color','red');
        e.preventDefault();
    }else if (!$('#condition1y').prop("checked") && !$('#chskg').prop("checked"))
    {
               $('#namey').css('border-color','#999');
        $('#telfy').css('border-color','#999');
    $('#bthrow_error_telfy').html('');
    $('#bthrow_error_checky').html('<span class="soglasie" >*Вы не дали согласие на обработку персональных данных.</span>');
    e.preventDefault();
    }
    else
    {
       $('#namey').css('border-color','#999');
        $('#telfy').css('border-color','#999');
        $('#bthrow_error_telfy').html('');
        $('#bthrow_error_checky').html('');

        
        var postForm = {
            'name'  : $('#namey').val(),
            'telf'  : $('#telfy').val(),
            'gorod'  : $('#gorody').val(),
        };
        
    console.log(postForm);

      $.ajax({
            type        : 'POST',
            url         : '/send3.php',
            data        : postForm,
            dataType    : 'json',
            success     : function(data)
            {
                if (!data.success)
                {
                    if (data.errors.name)
                    {
                        $('.itogoу').html('<p style="color:red;padding-top: 20px;">' + data.errors.name+ '</p>');
                    }
                }
                else
                {
                  
                    var url = 'https://palazo.ru/blagodaru';
                    $(location).attr('href',url);

                    $('.itogoy').html('<p style="padding-top: 20px;">' + data.posted + '</p>');
                    $('input').val('');
                }
            }
        });/**/
    }

e.preventDefault();

});        
        
  
var width=$(window).width();
$(window).resize(function () { 
    width = $('body').innerWidth(); 
    if (width > 768) {
            $('nav#top').css({'left':'0','width':'100%'});
       }else{
            $('nav#top').css({'left':'-375px','width':'375px'});
       };
   });
        
$('body').on('click','.head-top__left_m', function(e){
     $('nav#top').css({'left':'0', "transition":"0.8s",'width':'100%'});
    e.preventDefault();
});

$('body').on('click','.m-close', function(e){
     $('nav#top').css({"left":"-375px", "transition":"1s",'width':'375px'});
    e.preventDefault();
});

$("input[type='tel']").inputmask({"mask": "+7(999) 999-99-99"}); 

  var cur_photo = 1

  $('#photo-list > li > img').click(function() {
    let $this = $(this)
    let photoSrc = $this.attr('src')
    $('#photo-list > li > img').removeClass()
    $this.addClass('active')
    cur_photo = $this.attr('data-num')
    $('#photo > img').fadeOut('slow', function() {
      $(this).attr('src', photoSrc)
      $(this).fadeIn('slow')
    })
  })
  
  $('#product-next').click(function click(e) {
    e.preventDefault()
    let $photo = $(`#photo-list > li:nth-child(${++cur_photo}) > img`)
    if(!!$photo.length) {
      $photo.trigger('click')
    } else { 
      cur_photo = 0
      click(e)
    }
  })

  $('#product-prev').click(function click(e) {
    e.preventDefault()
    let $photo = $(`#photo-list > li:nth-child(${--cur_photo}) > img`)
    if(!!$photo.length) {
      $photo.trigger('click')
    } else {
      cur_photo = $(`#photo-list > li`).length + 1
      click(e)
    }
  })

  $('.property__tab').click(function() {
    let $this = $(this)
    $(`#prop > div`).hide()
    $('.property__tab').removeClass('active')
    $this.addClass('active')
    let num = $this.attr('data-num')
    $(`#prop > div:nth-child(${num})`).show()
  })

var cur_width = -100
  $('#promo-next').click(function click(e) {
    e.preventDefault()
    if (cur_width == -300) {
      $('.promo__list').css({ 'transform': `translateX(0)` })
      cur_width = 0
    } else {
      $('.promo__list').css({ 'transform': `translateX(${cur_width - 100}%)` })
      cur_width -= 100
    }
  })

  $('#promo-prev').click(function click(e) {
    e.preventDefault()
    if (cur_width == 0) {
      $('.promo__list').css({ 'transform': `translateX(-300%)` })
      cur_width = -300
    } else {
      $('.promo__list').css({ 'transform': `translateX(${cur_width + 100}%)` })
      cur_width += 100
    }
  })
  
 var flag = false
  $('#all-promo').click(function(e) {
    $('.promo-full__row:nth-child(3)').toggleClass('active')
    $('.promo-full__row:nth-child(4)').toggleClass('active')
    flag = !flag
    flag ? $(this).text('Скрыть') : $(this).text('Показать еще')
  })
  
 var cur_width_full = -100

  $('#promo-full-next').click(function click(e) {
    e.preventDefault()
    if (cur_width_full == -1100) {
      $('.promo__list').css({ 'transform': `translateX(0)` })
      cur_width_full = 0
    } else {
      $('.promo__list').css({ 'transform': `translateX(${cur_width_full - 100}%)` })
      cur_width_full -= 100
    }
  })

  $('#promo-full-prev').click(function click(e) {
    e.preventDefault()
    if (cur_width_full == 0) {
      $('.promo__list').css({ 'transform': `translateX(-1100%)` })
      cur_width_full = -1100
    } else {
      $('.promo__list').css({ 'transform': `translateX(${cur_width_full + 100}%)` })
      cur_width_full += 100
    }
  })
  var all_fb = parseInt($('.community__fbs').attr('data-fbs'))
  var cur__fb = 1
  
  $('.fb-count').text(cur__fb)
  $('.fb-all').text(all_fb)
  $('#fb-prev').click(function(e) {
    e.preventDefault()
    $('.community__fbs li').hide(0)
    cur__fb -= 1
    if (cur__fb == 0) cur__fb = all_fb
    $(`.community__fbs li:nth-child(${cur__fb})`).show(0)
    $('.fb-count').text(cur__fb)
  })
  $('#fb-next').click(function(e) {
    e.preventDefault()
    $('.community__fbs li').hide(0)
    cur__fb += 1
    if (cur__fb > all_fb) cur__fb = 1
    $(`.community__fbs li:nth-child(${cur__fb})`).show(0)
    $('.fb-count').text(cur__fb)
  })

  var all_certs = parseInt($('.community__certs').attr('data-certs'))
  var cur__cert = 1

  $('#cert-prev').click(function(e) {
    e.preventDefault()
    $('.community__certs li').hide(0)
    cur__cert -= 1
    if (cur__cert == 0) cur__cert = all_certs
    $(`.community__certs li:nth-child(${cur__cert})`).show(0)
  })
  $('#cert-next').click(function(e) {
    e.preventDefault()
    $('.community__certs li').hide(0)
    cur__cert += 1
    if (cur__cert > all_certs) cur__cert = 1
    $(`.community__certs li:nth-child(${cur__cert})`).show(0)
  })

   //$('body').on('.product_param_value','click',function(e){
 $('.product_param_value').click(function(e){
  var a
 //  a=e.currentTarget.childNodes[1].classList[1]
  // $('.'+a).fadeToggle(200);
   var a = $(this).attr('id');
   var b =$("."+a).is(":visible")
   $('.bbwin').css('display','none')
   if(!b){
       $("."+a).show(200);
   }
  

 })
 $('.bbwin').click(function(){
  // $('.bbwin').css('display','none')
})
 