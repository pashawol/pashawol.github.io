<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \app\models\TextBlock $model
 */
$ui->pageName = 'Редактировать предложение';
$ui->breadcrumbs = array(
    $ui->pageName,
);
$ui->flash();

/** @var CActiveForm $form */
$form = $ui->beginWidget('CActiveForm', array(
    'id'=>'request-form',
));
echo $form->label($model, 'text');
echo '<p class="hint">Клавиша <strong>Enter</strong> создает новый абзац.<br />Чтобы просто перейти на новую строку, используйте сочетание клавиш <strong>Shift+Enter</strong>.</p>';
echo '<div class="form-row">';
$ui->widget(\Siix::module('base')->textEditor, array(
    'model'=>$model,
    'attribute'=>'text',
    'htmlOptions'=>array(
        'style'=>'width: 100%; height: 200px;',
    ),
));
echo '</div>';
echo CHtml::submitButton('Сохранить', array('class'=>'btn btn-large'));
$ui->endWidget();