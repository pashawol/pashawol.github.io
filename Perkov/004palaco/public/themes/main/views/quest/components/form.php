<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\request\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div id="quest-popup-mask" class="popup-mask"></div>
<div class="request-form-window" id="quest-form-window" style="display: none;">
	<a href="#" class="close" title="Закрыть" id="close-quest-form-window"></a>
	<div id="quest-form-container" class="request-form-container">
		<?php 
		$form = $ui->beginWidget('CActiveForm', array(
			'id' => 'quest-form',
			'enableClientValidation' => true,
			'action' => array('/quest/form/submit'),
		)); 
		?>
		
		<div class='legend'>Задать вопрос</div>
		<div class="row">
			<?php echo $form->textField($model, 'name', array('maxlength' => 50, 'placeholder' => 'Ваше имя')); ?>
			<?php echo $form->error($model, 'name'); ?>
		</div>

		<div class="row" style="margin-bottom: 9px;">
			<?php echo $form->textField($model, 'email', array('maxlength' => 100, 'placeholder' => 'E-mail')); ?>
			<?php echo $form->error($model, 'email'); ?>
		</div>

		<div class="row" style="margin-bottom: 13px;">
			<?php echo $form->textField($model, 'phone', array('maxlength' => 50, 'placeholder' => 'Номер телефона')); ?>
			<?php echo $form->error($model, 'phone'); ?>
		</div>

		<div class="row">
			<?php echo $form->textArea($model, 'text', array('rows' => 5, 'cols' => 50, 'placeholder' => 'Вопрос')); ?>
			<?php echo $form->error($model, 'text'); ?>
		</div>

		<div class="row captcha">
			<div style="float: left;"><?php $ui->widget('CCaptcha', array('captchaAction' => '/base/base/captcha', 'clickableImage' => true, 'showRefreshButton' => false, 'imageOptions' => array('title' => 'Нажмите на картинку, чтобы обновить код'))); ?></div>
			<p>Введите символы, изображённые на картинке. Нажмите на картинку, чтобы обновить код.</p>
			<?php echo $form->textField($model, 'verifyCode', array('placeholder' => 'Код с картинки')); ?>
			<?php echo $form->error($model, 'verifyCode'); ?>
		</div>
		<div class="row buttons">
		<?php 
				echo CHtml::ajaxSubmitButton('Отправить',
				array('/quest/form/submit'),
				array('dataType' => 'json', 'success' => 'js:function(data){alert(data.message);if(data.status==1){document.getElementById("quest-form").reset();$("#close-quest-form-window").click();yaCounter26679231.reachGoal("konst_diz");}}'),
				array('class' => 'btn')
			); 
			?> 
			
		</div>
		<?php $ui->endWidget('CActiveForm'); ?>
	</div>
</div>

<?php
$js = <<<JS
$('#quest').click(function() {
    $('#quest-form-window').fadeIn();
    $('#quest-popup-mask').fadeIn();
    return false;
});
$('.otzivvvm').click(function() {
    $('#quest-form-window').fadeIn();
    $('#quest-popup-mask').fadeIn();
    return false;
});
$('.popup-mask, #close-quest-form-window').click(function(e) {
    $('#quest-form-window').fadeOut();
    $('#quest-popup-mask').fadeOut();
    return false;
});
JS;
cs()->registerScript('quest-form', $js);
?>