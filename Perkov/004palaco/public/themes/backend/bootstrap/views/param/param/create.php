<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Новый параметр';
$ui->breadcrumbs = array(
    'Настройки'=>array('list'),
    'Новый параметр',
);
$ui->flash();

echo $form->render();