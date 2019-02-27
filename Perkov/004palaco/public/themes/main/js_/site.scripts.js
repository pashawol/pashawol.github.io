$(document).ready(function() {
    $.fn.countMe = function(id){

        var time = $('#counter1').data('time') * 1000;

        var note = $('#counter'),
            ts = new Date(time);
            //newYear = true;

		/*
        if((new Date()) > ts){
            // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
            // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
            ts = (new Date()).getTime() + ts*60*60*1000;
            newYear = false;
        }
		*/

        $(id).countdown({
            timestamp	: ts,
            callback	: function(days, hours, minutes, seconds){

                var message = "";

                message += "Дней: " + days +", ";
                message += "часов: " + hours + ", ";
                message += "минут: " + minutes + " и ";
                message += "секунд: " + seconds + " <br />";

				/*
                if(newYear){
                    message += "осталось до Нового года!";
                }
                else {
                    message += "осталось до момента через 10 дней!";
                }
				*/

                note.html(message);
            }
        });

    };

    /*var current_date = new Date();// текущая дата
    curDay = current_date.getDate(),
    curMonth = current_date.getMonth(),
    curYear = current_date.getFullYear();*/

    $('#counter1').countMe('#counter1');

    $('#catalogList.index li a').hover(
        function(){
            $(this).addClass('hover');
        },
        function(){
            $(this).removeClass('hover');
        }
    );

	/*
    $('.bwWrapper').BlackAndWhite({
        hoverEffect : true,
        speed:{
            fadeIn: 0,
            fadeOut: 0
        }
    });
	*/

    var bodyh = $('#body').height() - $('#main').height();
    $(window).resize(function () {
        $('#body').css('min-height', (bodyh + $(window).height()) + 'px');
    }).resize();
    
    $("nav#top ul li").hover(function(){
        $(this).addClass('active-item');
        $(this).children("nav#top ul li ul").css({"opacity":1});
        $(this).css({"overflow":"visible"});
        }, function(){
        $(this).children("nav#top ul li ul").css({"opacity":0});
        $(this).removeClass('active-item');
        $(this).css({"overflow":"hidden"});
        }
    );
	/*плавное появление левого баннера*/

$('#left-banner').fadeIn(5000);

/*кухни италии на вторую позицию*/

a=$('.main-blocks a[href="/catalog/nashi-raboty/kuhni/fasady-massiv/kuhni-iz-massiva"]').parent().detach();
$('.main-blocks a[href="/catalog/nashi-raboty"]').parent().after(a);

b=$('.main-blocks a[href="/catalog/dveri-i-dveri"]').parent().detach();
$('.main-blocks a[href="/catalog/dizayn-interera"]').parent().after(b);


/*8.	В форму id="consult-form" добавить событие */
$('#consult-form').on('submit',function(){yaCounter26679231.reachGoal('konst_diz'); return true;});
$('#wprice-form').on('submit',function(){yaCounter26679231.reachGoal('konst_diz'); return true;});
/*$('.pager li:nth-child(3) a').attr('href',window.location.pathname);

function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 

var GETArr = parseGetParams(); 

if (GETArr['page'] == 2)
{
$('.previous a').attr('href',window.location.pathname);	
}
*/
});


jQuery( document ).ready(function() {
        jQuery( ".faq ul" ).click(function() {
          jQuery( this ).next().slideToggle( "fast" );
        });


$( "select.cs-select" )
  .change(function () {
    var str = "";
    $( "select.cs-select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#ml" ).val( str );
  })
  .change();

    $(".types .pinput").focus(function() {
        $(this).parent().parent().parent().find(".name").removeClass("active");
        $(this).parent().parent().parent().find(".name").addClass("bla");
                $(this).parent().parent().parent().find(".pinput").removeClass("warning");
                var curI = $(this).parent().parent().find(".name");
                curI.removeClass("bla");
                curI.addClass("active");
                $('.bla').parent().find('.pinput').val('');
                $("#nm").val(curI.text());
    });
    $(".types .pinput").keyup(function() {

                $("#wd").val($(this).parent().find("#pwidth").val());
                $("#ht").val($(this).parent().find("#pheight").val());

    });





$( ".dopo" ).change(function() {
    $( ".dopol" ).removeAttr('checked');
});
$( ".dopol" ).change(function() {
    $( ".dopo" ).removeAttr('checked');
});

});









