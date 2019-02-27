<?php /** @var $ui \app\components\UI */ ?>
<!DOCTYPE html>
<html lang="ru-RU">
    <head>
     <script  >(window.Image ? (new Image()) : document.createElement('img')).src = 'https://vk.com/rtrg?p=VK-RTRG-222639-8lkU';</script>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title><?php echo $ui->pageTitle ? $ui->pageTitle : app()->paramManager->getParamValue('site_name'); ?></title>
        <meta name='yandex-verification' content='47114eb82cbd530d' />
        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
        <![endif]-->
<?php
    $leha = stristr($_SERVER['REQUEST_URI'], '?page', true);
    if ($leha != false) {
        echo '<link rel="canonical" href="'.$leha.'" />';
    }

if (isset($_GET['num'])) {
    //header("HTTP/1.1 301 Moved Permanently");
    header("Location: ".stristr($_SERVER['REQUEST_URI'], '?', true));
    exit();
}

$printed = 0;

if (strpos($_SERVER['REQUEST_URI'], '/kuhni/fasady-krashenye'))
{
    echo ("<script type='text/javascript'>(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=o4CXB9fNZFxhjcZ6LFAUpyYoJlOmCLRopQTdpouZXSucyTYppeefJbyOL0OJ//PN1QVEeIDzAwCYeDwg/PgdLuPv3/RHkZxJ2M8NAh/F/HxTiVPlRRTv6Bmtut3Kx6DiDUiMwxQc64XOYmrElM2YrkhssJEL3I05WQLcXahUs*0-';</script>");
    $printed = 1;
}
elseif (strpos($_SERVER['REQUEST_URI'], '/kuhni/fasady-massiv'))
{
    echo ("<script type='text/javascript'>(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=cpxo4lnZAHmHB97tHccwAccaj0yCTZ82OEzYK3LxMjq74KDdsvNYiwNQvgojF2AFrbewDh9LkJWacJAlR939tus/jNmUGYIY/6hVlw5g8GozSgaWJ4WC4n/pQvBlTyxeYBIvgwGoNgKEtfFwkstBDFtngUt8OXIiK84hVoGzN1Q-';</script>");
    $printed = 1;
}
elseif (strpos($_SERVER['REQUEST_URI'], '/kuhni/fasady-plenochnye'))
{
    echo ("<script type='text/javascript'>(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=xAcnIloc16YOAMxxcHV6YGQFmJSI8EurybLOUCJ2LZkpGdafr4XThZFW*e5*cX0Z0JiWqEX8dheY01R6737QpwFpMKDJ3RGnSImovp0HBw94oDo8MkXV1fa/b2VWsuz8P8P6vWwmfBbZzsYFV3WZZCwAL99ottHUnr/Zj7josaM-';</script>");
    $printed = 1;
}
elseif (strpos($_SERVER['REQUEST_URI'], '/kuhni') && $printed == 0)
{
    echo ("<script type='text/javascript'>(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=zW8NupJUQdybqibhXj5EiWB/VcZcx0B2tNfi6i5mbaPAOw38P/webRzky84KNCmorOfdTnINyoGgowxiPK/3l8xS98q8S3p7*UK2p6MbZMrOfjrvXtdfxo9Mv3iU1rXVXYw**NwYwTydRh9RaNdn442n9Bym8xQ9Mo0Dtk9q5xY-';</script>");
}

    ///var_dump($_SERVER['REQUEST_URI']);
?>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="<?php echo $ui->getThemeFileUrl('css/style.css?v34'); ?>" />
        <link rel="stylesheet" type="text/css" href="<?php echo $ui->getThemeFileUrl('css/jquery.countdown.css'); ?>" />
		<link rel="stylesheet" type="text/css" href="<?php echo $ui->getThemeFileUrl('css/main.css'); ?>" />
        <script async   src="//yandex.st/share/share.js" charset="utf-8"></script>
		<script   src="/themes/main/js/jquery.inputmask.js" charset="utf-8"></script>
        <script>
        $(document).ready(function(){
           $("#app_modules_consult_models_Form_phone").inputmask("+7(999)999-99-99");
           $("#app_modules_price_models_Form_phone").inputmask("+7(999)999-99-99");
       })
    </head>
    <!--[if IE 7]><body class="ie ie7"><![endif]-->
    <!--[if IE 8]><body class="ie ie8"><![endif]-->
    <!--[if IE 9]><body class="ie ie9"><![endif]-->
    <!--[if (gt IE 9)|!(IE)><!--><body><!--<![endif]-->
        <?php include_once("usertracking.php") ?>
        <?php
        $ui->widget('consult:components\FormWidget');        
        $ui->widget('price:components\FormWidget');
        $ui->widget('request:components\FormWidget'); 
        $ui->widget('otziv:components\FormWidget');   
        $ui->widget('quest:components\FormWidget');                       
        ?>

    <div id="content">

            <div id="main">
                <header class="vcard">
                <div style="display: none;">
                <span class="category">Студия мебели и дизайна</span>
                <span class="fn org">Палаццо</span>
            </div>
                    <div class="logo">
                        <?php
                            if (Yii::app()->request->requestUri !== '/') {
                        ?>
                        <a href="/">
                        <?php } ?>
                        <img src="<?php echo $ui->getThemeFileUrl('images/logo-new.png'); ?>" alt=""/>
                         <?php
                            if (Yii::app()->request->requestUri !== '/') {
                        ?>
                        </a>
                        <?php } ?>
                    </div>

                    <div class="top-line">
                        <div class="search">
                            <div class="searchInput">
                                <input type="search" value="Поиск по сайту" onblur="if (this.value == '') { this.value = 'Поиск по сайту'; }" onfocus="if (this.value == 'Поиск по сайту') { this.value = ''; }" />
                            </div>
                            <div class="searchBtn"></div>
                        </div>
						<div class="contacts-tel">
                            <span class="tel"><b>(4942)</b> 501-621</span>
                        </div>
                    </div>

                    <div class="bottom-line">
                        <div class="socBlock">
                            <ul>
                                <li class="socBlock__item socBlock__vk">
                                    <a class="socBlock__link" href="http://vk.com/palazo" target="_blank"></a>
                                </li>
                                <li class="socBlock__item socBlock__ok">
                                    <a class="socBlock__link" href="http://www.odnoklassniki.ru/group/51785641689238" target="_blank"></a>
                                </li>
                                <li class="socBlock__item socBlock__tw">
                                    <a class="socBlock__link" href="javascript:void(0)"></a>
                                </li>
                            </ul>
                        </div>
						<span class="header-contacts-address">
                            <a href="/contacts"><span class="address adr"><span class="locality">Кострома</span>, <span class="street-address">ул. Северной правды, 35</span></span></a>
                        </span>
                    </div>

                    <div class="operator">
                        <a id="consult" href="#" onclick="yaCounter23325040.reachGoal('CALL'); return true;">Заказать консультацию</a>
                    </div>

                    <nav id="top">
                        <?php
						ob_start();
                        $ui->widget('base:components\PageMenu', array(
                            'pages' => array(1 => array('title' => 'Главная', 'pages' => array()), 2 => array('disable' => true), 3, 18, 191 => array(), 5),
                            'maxDepth' => 1,
                        ));
						$pop=ob_get_clean();
						
						//$pop = preg_replace('#\<a href="(.*)catalog"(.*)</a>#','<span>Каталог</span>',$pop);
						$pop = preg_replace('#\<a href="(.*)nashi-raboty"(.*)</a>#','<a href="$1'.'nashi-raboty"$2</a>',$pop);
                        echo $pop;
						?>
                    </nav>

                </header>
                <div id="body">
                    <?php echo $content; ?>
                </div>
                <footer>
                    <div class="copy">
                        <p>&copy; <?php echo date('Y'); ?>, студия «Палаццо»</p>
                        <p>Все права защищены.</p>
                        <!--<div class="counter">
                            <img src="<?php echo $ui->getThemeFileUrl('images_dummy/counter-img.png'); ?>" alt=""/>
                        </div>-->
                        <p><a href="/sitemap">Карта сайта</a></p>
                    </div>
                    <div class="menu menu1">
                        <?php
                        $ui->widget('base:components\PageMenu', array(
                            'items' => array(
                                array('label' => 'Каталог продукции', 'url' => '/catalog'),
                            ),
                            'rootPage' => 3,
                            'maxDepth' => 1,
                        ));
                        ?>
                    </div>
                    <div class="menu menu2">
                        <?php
                        $ui->widget('base:components\PageMenu', array(
                            'pages' => array(9, 8, 386, 7),
                            'maxDepth' => 0,
                        ));
                        ?>
                    </div>
                    <div class="menu menu3">
                        <?php
                        $ui->widget('base:components\PageMenu', array(
                            'pages' => array(1 => 'Главная', 2, 3, 4, 5),
                            'maxDepth' => 0,
                        ));
                        ?>
                    </div>
                </footer>
            </div>
        </div>

        <!-- / -->
        <?php
        cs()->registerCoreScript('jquery')
                ->registerScriptFile($ui->getThemeFileUrl('js/jquery.BlackAndWhite.min.js'))
                ->registerScriptFile($ui->getThemeFileUrl('js/jquery.countdown.min.js'))
                ->registerScriptFile($ui->getThemeFileUrl('js/site.scripts.min.js?v4'));
        $ui->fancyBox();
        ?>

        <script  >
            (function() {
                var _sw = document.createElement("script");
                _sw.type = "text/javascript";
                _sw.async = true;
                _sw.src = "https://suggest.io/js/v2/palazo.ru/KhoEoZk0";
                var _sh = document.getElementsByTagName("head")[0];
                _sh.appendChild(_sw);
            })();
        </script>

        <script  >
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-55465672-1', 'auto');
          ga('send', 'pageview');

        </script>

<script>
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires*1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for(var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}
/*function getnum(){
var dc=document.cookie;
if(dc.indexOf("num=")>-1){dc=dc.split("num=");dc=dc[1];dc=dc.split(";");dc=decodeURIComponent(dc[0]); return dc;};
var str=document.referrer+'	'+document.location.href;
var num='';
var config=document.getElementById("config").innerHTML;
config=config.trim();
config=config.split("\n");
for(var i in config){
var tmp=config[i];
if(tmp.indexOf(":=")>0){
tmp=tmp.split(":=");
tmp[0]=tmp[0].split(",");
var ok=0;
for(var j in tmp[0]){
if(str.indexOf(tmp[0][j])>-1){ok=ok+1;}
}
if(ok==tmp[0].length){num=tmp[1];break;};
if(tmp[0][0]=="default"){num=tmp[1];};
}
}
var now = new Date();
var time = now.getTime();
var expireTime = time + 86400*30;
now.setTime(expireTime);
document.cookie = 'num='+encodeURIComponent(num)+';expires='+now.toGMTString()+';path=/';
return num;
}
var num=getnum();
//console.log(document.getElementsByClassName("tel")[0].innerHTML);
document.getElementsByClassName("tel")[0].innerHTML=num;
//console.log(document.getElementsByClassName("tel")[0].innerHTML);*/
</script>
<link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css">
<script   src="https://cdn.envybox.io/widget/cbk.js?wcb_code=525b83f89d06e6ebce4d0a5e6680d8f6" charset="UTF-8" async></script>
<script>
$("body").on("click", "#wprice-form input[type='submit']", function() {
    if (typeof WBK !== 'undefined') {
    var name = $("#app_modules_price_models_Form_name").val(),
        phone = $("#app_modules_price_models_Form_phone").val(),
        shipment = "palazo.ru | "+$("#insideLeft h1").text();
        if (phone !== '' && name !== '') {
         WBK.sendCrmLead(2326, {'name' : name, 'phone' : phone, 'comment' : shipment,
         'inbox_type_id' : 14317
         });
        }
   }
});

</script>
    </body>
</html>