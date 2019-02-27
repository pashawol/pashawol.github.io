<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Добавить пользователя';
$ui->breadcrumbs = array(
    'Пользователи'=>array('list'),
    $ui->pageName,
);
$ui->flash();

echo $form->render();