<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Добавить слайд';
$ui->breadcrumbs = array(
    'Слайды'=>array('list'),
    $ui->pageName,
);
$ui->flash();
echo $form->render();