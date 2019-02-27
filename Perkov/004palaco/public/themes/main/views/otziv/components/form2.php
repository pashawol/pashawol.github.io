<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\request\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div id="otziv-popup-mask" class="popup-mask"></div>
<div class="request-form-window" id="otziv-form-window" style="display: none;">
	<a href="#" class="close" title="Закрыть" id="close-otziv-form-window"></a>
	<div id="otziv-form-container" class="request-form-container">

		<div class='legend'>Заказать<br/>консультацию дизайнера</div>
		<?php include '/sms/sms.php'; ?>

	</div>
</div>

<?php
$js = <<<JS
$('#otziv').click(function() {
    $('#otziv-form-window').fadeIn();
    $('#otziv-popup-mask').fadeIn();
    return false;
});
$('.popup-mask, #close-otziv-form-window').click(function(e) {
    $('#otziv-form-window').fadeOut();
    $('#otziv-popup-mask').fadeOut();
    return false;
});
JS;
cs()->registerScript('otziv-form', $js);
?>