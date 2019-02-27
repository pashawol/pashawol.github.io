<?php
cs()->registerScriptFile('//vk.com/js/api/openapi.js?105')
	->registerScriptFile('http://connect.ok.ru/connect.js')
	->registerScript('social', 'VK.init({apiId: 4224643, onlyWidgets: true});');
?>

<!-- Include Facebook Javascript SDK -->
<!--
<div id="fb-root"></div>
<script>
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
-->

<!-- Include OK -->
<!--
<script>
	!function (d, id, did, st) {
		var js = d.createElement("script");
		js.src = "http://connect.ok.ru/connect.js";
		js.onload = js.onreadystatechange = function () {
			if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
				if (!this.executed) {
					this.executed = true;
					/*
					setTimeout(function () {
						OK.CONNECT.insertShareWidget(id, did, st);
					}, 0);
					*/
				}
			}
		};
		d.documentElement.appendChild(js);
	}(document, "ok_shareWidget", document.URL, "{width:145,height:30,st:'rounded',sz:20,ck:1}");
</script>
-->