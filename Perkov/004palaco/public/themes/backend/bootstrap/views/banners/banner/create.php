<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Добавить баннер';
$ui->breadcrumbs = array(
    'Баннеры'=>array('list'),
    $ui->pageName,
);
$ui->flash();
$ui->renderPartial('_form', array('form'=>$form));