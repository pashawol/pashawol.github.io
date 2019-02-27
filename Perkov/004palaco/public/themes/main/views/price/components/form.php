<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\request\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div id="wprice-popup-mask" class="popup-mask"></div>
<div class="request-form-window" id="wprice-form-window" style="height: 230px;display: none;">
	<a href="#" class="close" title="Закрыть" id="close-wprice-form-window"></a>
	<div id="wprice-form-container" class="request-form-container">
		<?php 
		$form = $ui->beginWidget('CActiveForm', array(
			'id' => 'wprice-form',
			'enableClientValidation' => true,
			'action' => array('/price/form/submit'),
		)); 
		?>
		
		<div class='legend'>Узнать цену</div>
		<div class="row">
			<?php echo $form->textField($model, 'name', array('maxlength' => 50, 'placeholder' => 'Ваше имя')); ?>
			<?php echo $form->error($model, 'name'); ?>
		</div>

		<!-- <div class="row" style="margin-bottom: 9px;">
			<?php echo $form->textField($model, 'email', array('maxlength' => 100, 'placeholder' => 'E-mail')); ?>
			<?php echo $form->error($model, 'email'); ?>
		</div> -->

		<div class="row" style="margin-bottom: 13px;">
			<?php echo $form->textField($model, 'phone', array('maxlength' => 50, 'placeholder' => 'Номер телефона')); ?>
			<?php echo $form->error($model, 'phone'); ?>
		</div>


			<?php echo $form->hiddenField($model, 'href', array('value'=>$_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"])); ?>

<!-- 
		<div class="row captcha">
			<div style="float: left;"><?php $ui->widget('CCaptcha', array('captchaAction' => '/base/base/captcha', 'clickableImage' => true, 'showRefreshButton' => false, 'imageOptions' => array('title' => 'Нажмите на картинку, чтобы обновить код'))); ?></div>
			<p>Введите символы, изображённые на картинке. Нажмите на картинку, чтобы обновить код.</p>
			<?php echo $form->textField($model, 'verifyCode', array('placeholder' => 'Код с картинки')); ?>
			<?php echo $form->error($model, 'verifyCode'); ?>
		</div> -->

		<p style="margin: 0px 35px 0px 35px; font-family: arial; color: rgb(189, 189, 189);">*Вся предоставленная  информация конфиденциальна и не передается третьим лицам</p>

		<div class="row buttons">
			<?php echo CHtml::ajaxSubmitButton('Запросить цену',
				array('/price/form/submit'),
				array('dataType' => 'json', 'success' => 'js:function(data){alert(data.message);if(data.status==1){document.getElementById("wprice-form").reset();$("#close-wprice-form-window").click();yaCounter26679231.reachGoal("getprice");}}'),
				array('class' => 'btn')
			); ?>
			
		</div>
		<?php $ui->endWidget('CActiveForm'); ?>
	</div>
</div>

<?php
$js = <<<JS
$('#wprice').click(function() {
    $('#wprice-form-window').fadeIn();
    $('#wprice-popup-mask').fadeIn();
    return false;
});
$('.popup-mask, #close-wprice-form-window').click(function(e) {
    $('#wprice-form-window').fadeOut();
    $('#wprice-popup-mask').fadeOut();
    return false;
});
JS;
cs()->registerScript('wprice-form', $js);
?>