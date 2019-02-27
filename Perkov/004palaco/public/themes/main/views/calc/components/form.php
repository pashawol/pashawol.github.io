<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\recalc\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div id="calc-popup-mask" class="popup-mask"></div>
<div class="calc-form-window" id="calc-form-window" style="display: block;">
	<a href="#" class="close" title="Закрыть" id="close-calc-form-window"></a>
	<div id="calc-form-container" class="price recalc-form-container">
		<?php 
		$form = $ui->beginWidget('CActiveForm', array(
			'id' => 'calc-form',
			'enableClientValidation' => true,
			'action' => array('/calc/form/submit'),
		)); 
		?>
		
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
			<section class="inputes">
					<input id="ml1" type="radio" name="app_modules_calc_models_Form[ml]" value="Массив"></input><label for="ml1">Массив</label>
					<input id="ml2" type="radio" name="app_modules_calc_models_Form[ml]" checked value="МДФ крашенный"></input><label for="ml2">МДФ крашенный</label>
					<input id="ml3" type="radio" name="app_modules_calc_models_Form[ml]" value="МДФ пленочный"></input><label for="ml3">МДФ пленочный</label>
			</section>
			</div>

			<p class="title">Дополнительная комплектация</p>
			<div class="container">
			<section class="inputes">		
					<input id="dop2" class="dopol" type="checkbox" name="app_modules_calc_models_Form[dop][]" value="Барная стойка"></input><label for="dop2">Барная стойка</label>
					<input id="dop3" class="dopol" type="checkbox" name="app_modules_calc_models_Form[dop][]" value="Остров"></input><label for="dop3">Остров</label>
					<input id="dop4" class="dopol" type="checkbox" name="app_modules_calc_models_Form[dop][]" value="Буфет"></input><label for="dop4">Буфет</label>
					<input id="dop1" class="dopo" type="checkbox" name="app_modules_calc_models_Form[dop][]"  value="Без дополнительной комплектации" checked></input><label for="dop1">Без дополнительной комплектации</label>
			</section>
			</div>
                  
                      
                        <input type="hidden" name="app_modules_calc_models_Form[nm]" id="nm" value="Прямой">
                        <input type="hidden" name="app_modules_calc_models_Form[wd]" id="wd" value="">
                        <input type="hidden" name="app_modules_calc_models_Form[ht]" id="ht" value="">
             
                        <?php echo $form->error($model, 'wd'); ?>
                        <?php echo $form->error($model, 'ml'); ?>
                        <?php echo $form->error($model, 'ht'); ?>



			</div>
		<div class="row">
			<?php echo $form->textArea($model, 'text', array('rows' => 5, 'cols' => 70, 'placeholder' => 'Ваши комментарии и пожелания, при необходимости')); ?>
			<?php echo $form->error($model, 'text'); ?>
		</div>

		<div class="row buttons">
		<?php 
				echo CHtml::ajaxSubmitButton('Отправить',
				array('/calc/form/submit'),
				array('dataType' => 'json', 'success' => 'js:function(data){alert(data.message);if(data.status==1){document.getElementById("calc-form").reset();$("#close-calc-form-window").click();}}'),
				array('class' => 'btn')
			); 
			?> 
			
		</div>
		<?php $ui->endWidget('CActiveForm'); ?>
	</div>
</div>
