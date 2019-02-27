<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Редактирование параметра';
$ui->breadcrumbs = array(
    'Настройки'=>array('list'),
    'Изменить параметр',
);
$ui->flash();

echo $form->render();