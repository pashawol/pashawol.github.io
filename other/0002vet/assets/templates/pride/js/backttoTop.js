// JavaScript Document
window.onload = function(){
$STop = $; $STop(function(){$STop("body").append('<div id="GotoTop" class="GotoTop"><div class="GotoTop_arrow"></div>Наверх</div>'); 
$STop(window).scroll(function(){if($STop(this).scrollTop()!=0){$STop("#GotoTop").fadeIn()}else{$STop("#GotoTop").fadeOut()}});$STop("#GotoTop").click(function(){$STop("body,html").animate({scrollTop:0},800)})});};