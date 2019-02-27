<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\otziv\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div id="otziv-popup-mask" class="popup-mask"></div>
<div class="request-form-window" id="otziv-form-window" style="display: none;">
	<a href="#" class="close" title="Закрыть" id="close-otziv-form-window"></a>
	<div id="otziv-form-container" class="request-form-container">
		<?php 
		$form = $ui->beginWidget('CActiveForm', array(
			'id' => 'otziv-form',
			'enableClientValidation' => true,
			'action' => array('/otziv/form/submit'),
		)); 
		?>
		
		<div class='legend'>Написать отзыв</div>
		<div class="row">
			<?php echo $form->textField($model, 'name', array('maxlength' => 50, 'placeholder' => 'Ваше имя')); ?>
			<?php echo $form->error($model, 'name'); ?>
		</div>

		<div class="row" style="margin-bottom: 9px;">
			<?php echo $form->textField($model, 'email', array('maxlength' => 100, 'placeholder' => 'E-mail')); ?>
			<?php echo $form->error($model, 'email'); ?>
		</div>

		<div class="row">
			<?php echo $form->textArea($model, 'text', array('rows' => 5, 'cols' => 50, 'placeholder' => 'Отзыв')); ?>
			<?php echo $form->error($model, 'text'); ?>
		</div>

                <div class="row">
                    <div class="g-recaptcha" id="recaptcha2"></div> 
                </div>

		<div class="row buttons">
		<?php 
				echo CHtml::ajaxSubmitButton('Отправить',
				array('/otziv/form/submit'),
				array('dataType' => 'json', 'success' => 'js:function(data){alert(data.message);if(data.status==1){document.getElementById("otziv-form").reset();$("#close-otziv-form-window").click();yaCounter26679231.reachGoal("konst_diz");}}'),
				array('class' => 'btn')
			); 
			?> 
			
		</div>
		<?php $ui->endWidget('CActiveForm'); ?>
	</div>
</div>

<?php
$js = <<<JS
$('#otziv').click(function() {
    $('#otziv-form-window').fadeIn();
    $('#otziv-popup-mask').fadeIn();
    return false;
});
$('.otzivvv').click(function() {
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

<style>
   
</style>
<script  >
        $(window).load(function() {
            mysitekey = '6LdqYDcUAAAAAMfRuctOmBATrta8h99u8t3kZUYY';
            grecaptcha.render('recaptcha2', {
            'sitekey' : mysitekey
            });   
        });    
</script>
