<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Редактировать баннер';
$ui->breadcrumbs = array(
    'Баннеры'=>array('list'),
    $ui->pageName,
);
$ui->menu = array(
    $ui->menuPostButton(array('label'=>'Удалить баннер', 'url'=>array('delete', 'id'=>$form->getModel()->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить этот баннер?')), false),
);
$ui->flash();
$ui->renderPartial('_form', array('form'=>$form));