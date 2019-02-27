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
		<?php 
		$form = $ui->beginWidget('CActiveForm', array(
			'id' => 'consult-form',
			'enableClientValidation' => true,
			'action' => array('/consult/form/submit'),
		)); 
		?>

		<div class='legend'>Заказать<br/>консультацию дизайнера</div>
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
			<?php echo $form->textArea($model, 'text', array('rows' => 5, 'cols' => 50, 'placeholder' => 'Комментарий')); ?>
			<?php echo $form->error($model, 'text'); ?>
		</div>
                
        
                <div class="row">
                    <?php
                    $this->widget('ext.yiiReCaptcha.ReCaptcha', array(
                        'model'     => $model,
                        'attribute' => 'verifyCode',
                        //'isSecureToken' => true, //для нескольких доменов
                    ));?>
                </div>
                
		<br>
	<p style="margin: 0px 35px 0px 35px; font-family: arial; color: rgb(189, 189, 189);">*Вся предоставленная  информация конфиденциальна и не передается третьим лицам</p>

		<div class="row buttons">
		<?php 
				echo CHtml::ajaxSubmitButton('Отправить',
				array('/consult/form/submit'),
				array('dataType' => 'json', 'success' => 'js:function(data){alert(data.message);if(data.status==1){document.getElementById("consult-form").reset();$("#close-consult-form-window").click();yaCounter26679231.reachGoal("konst_diz");}}'),
				array('class' => 'btn')
			);
			?>
		</div>
		<?php $ui->endWidget('CActiveForm'); ?>
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
<style>
    #consult-form-container {width: 373px; min-height: 510px; height: auto;}
    #consult-form {min-height: 510px;}
    #consult-form div.row {width: auto;}
    #consult-form div.row input[type="text"], #consult-form div.row textarea {width: 300px !important;}
</style>