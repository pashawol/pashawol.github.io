<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\partners\models\Partner[] $models
 */
?>
<div id="partners">
	<div id="partners_slider">
		<?php if (count($models) > 5): ?>
		<div id="partners_slider_left"></div>
		<div id="partners_slider_right"></div>
		<?php endif; ?>
		<div id="partners_slider_content">
			<div class="scrollWrapper">
				<div class="scrollableArea">
					<?php foreach ($models as $model) echo CHtml::link(CHtml::image($model->getFileUrl(), $model->name), $model->url ? 'http://' . $model->url : '/partners', array('target' => '_blank')); ?>
				</div>
			</div>
		</div>
	</div>
</div>
<?php
$js = <<<JS
setTimeout(function() {
	var slider = $("#partners_slider_content").smoothDivScroll({
		autoScroll: "always",
		autoScrollDirection: "endlessloopright",
		autoScrollStep: 1,
		autoScrollInterval: 30,
		hotSpotsVisibleTime: 0
	}).mouseenter(function(){
	    $(this).smoothDivScroll("stopAutoScroll");
	}).mouseleave(function(){
		$(this).smoothDivScroll("startAutoScroll");
	});
	$('#partners_slider_left').mouseenter(function() {
		slider.smoothDivScroll("stopAutoScroll");
		slider.smoothDivScroll({
			autoScrollInterval: 0,
			autoScrollDirection: "endlessloopright"
		});
		slider.smoothDivScroll("startAutoScroll");
	}).mouseleave(function() {
		slider.smoothDivScroll("stopAutoScroll");
		slider.smoothDivScroll({
			autoScrollInterval: 30
		});
		slider.smoothDivScroll("startAutoScroll");
	});

	$('#partners_slider_right').mouseenter(function() {
		slider.smoothDivScroll("stopAutoScroll");
		slider.smoothDivScroll({
			autoScrollInterval: 0,
			autoScrollDirection: "endlessloopleft"
		});
		slider.smoothDivScroll("startAutoScroll");
	}).mouseleave(function() {
		slider.smoothDivScroll("stopAutoScroll");
		slider.smoothDivScroll({
			autoScrollInterval: 30
		});
		slider.smoothDivScroll("startAutoScroll");
	});
}, 100);
JS;

cs()->registerCoreScript('jquery.ui')
	->registerScriptFile($ui->getThemeFileUrl('js/smoothDivScroll.js'))
	->registerScript('partners_slider', $js);
?>