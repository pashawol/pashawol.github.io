<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\request\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div id="consult-popup-mask" class="popup-mask"></div>
<div class="request-form-window" id="consult-form-window" style="display: none;">
	<a href="#" class="close" title="Закрыть" id="close-consult-form-window"></a>
	<div id="consult-form-container" class="request-form-container">

		<div class='legend'>Заказать<br/>консультацию дизайнера</div>
		<?php include '/sms/sms.php'; ?>

	</div>
</div>

<?php
$js = <<<JS
$('#consult').click(function() {
    $('#consult-form-window').fadeIn();
    $('#consult-popup-mask').fadeIn();
    return false;
});
$('.popup-mask, #close-consult-form-window').click(function(e) {
    $('#consult-form-window').fadeOut();
    $('#consult-popup-mask').fadeOut();
    return false;
});
JS;
cs()->registerScript('consult-form', $js);
?>