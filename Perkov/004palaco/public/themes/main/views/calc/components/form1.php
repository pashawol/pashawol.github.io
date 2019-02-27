<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\recalc\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div class="textContainer">
<div id="calc-popup-mask" class="popup-mask"></div>

	<div id="calc-form-container" class="recalc-form-container">
		<?php 
		$form = $ui->beginWidget('CActiveForm', array(
			'id' => 'calc-form',
			'enableClientValidation' => true,
			'action' => array('/calc/form/submit'),
		)); 
		?>
<div class="price">		
		<p class="title">Введите контактную информацию для обратной связи</p>
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

<!-- 		<div class="row captcha">
			<div style="float: left;"><?php $ui->widget('CCaptcha', array('captchaAction' => '/base/base/captcha', 'clickableImage' => true, 'showRefreshButton' => false, 'imageOptions' => array('title' => 'Нажмите на картинку, чтобы обновить код'))); ?></div>
			<p>Введите символы, изображённые на картинке. Нажмите на картинку, чтобы обновить код.</p>
			<?php echo $form->textField($model, 'verifyCode', array('placeholder' => 'Код с картинки')); ?>
			<?php echo $form->error($model, 'verifyCode'); ?>
		</div> -->


		<div class="calc">
			<p class="title">Выберите вид гарнитура и укажите его размеры</p>
			<div class="types">
				<div class="item">
					<div class="name active">Прямой</div>
					<div class="form">
						<img src="/themes/main/images/price-straight.jpg">
						<input id="pwidth" class="pinput" type="text">
						<label for="pwidth">см.</label>
					</div>
				</div>
				<div class="item">
					<div class="name">Г-образный левый</div>
					<div class="form">
						<img src="/themes/main/images/price-left.jpg">
						<input id="pwidth" class="pinput" type="text">
						<label for="pwidth" id="lwidth">см.</label>
						<input id="pheight" class="pinput" type="text">
						<label for="pheight" id="lheight">см.</label>
					</div>
				</div>
				<div class="item">
					<div class="name">Г-образный правый</div>
					<div class="form">
						<img src="/themes/main/images/price-right.jpg">
						<input id="pwidth" class="pinput" type="text">
						<label for="pwidth" id="lwidth">см.</label>
						<input id="pheight" class="pinput" type="text">
						<label for="pheight" id="lheight">см.</label>
					</div>
				</div>
				<div class="item big">
					<div class="name">П-образный</div>
					<div class="form">
						<img src="/themes/main/images/price-p.jpg">
						<input id="pwidth" class="pinput" type="text">
						<label for="pwidth" id="lwidth">см.</label>
						<input id="pheight" class="pinput" type="text">
						<label for="pheight" id="lheight">см.</label>
					</div>
				</div>
			</div>
			<p class="title">Выберите материал фасада</p>
			<div class="container">
			<!-- Top Navigation -->
			<section>
				
			<select class="cs-select cs-skin-border">
					<option value="" disabled="" selected="">Материал фасада</option>
					<option value="masiv">Массив</option>
					<option value="mdfpaint">МДФ крашенный</option>
					<option value="mdffilm">МДФ пленочный</option>
				</select></section>
			</div><!-- /container -->
                  
                        <form class="hidden_inp">
                        <input type="hidden" name="nm" id="nm" value="Прямой">
                        <input type="hidden" name="wd" id="wd" value="">
                        <input type="hidden" name="ht" id="ht" value="">
                        <input type="hidden" name="ml" id="ml" value="mdfpaint"> 
                        </form>

			</div>
</div
        <div class="row">
			<?php echo $form->textArea($model, 'text', array('rows' => 5, 'cols' => 50, 'placeholder' => 'Вопрос')); ?>
			<?php echo $form->error($model, 'text'); ?>
		</div>



		<div class="row buttons">
		<?php 
				echo CHtml::ajaxSubmitButton('Отправить',
				array('/calc/form/submit'),
				array('dataType' => 'json', 'success' => 'js:function(data){alert(data.message);'),
				array('class' => 'btn')
			); 
			?> 
			
		</div>


		<?php $ui->endWidget('CActiveForm'); ?>



<?php
$js = <<<JS
$('#calc').click(function() {
    $('#calc-form-window').fadeIn();
    $('#calc-popup-mask').fadeIn();
    return false
});
$('.otzivvvm').click(function() {
    $('#calc-form-window').fadeIn();
    $('#calc-popup-mask').fadeIn();
    return false;
});
$('.popup-mask, #close-calc-form-window').click(function(e) {
    $('#calc-form-window').fadeOut();
    $('#calc-popup-mask').fadeOut();
    return false;
});
JS;
cs()->registerScript('calc-form', $js);
?>>;
</div>