<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Редактировать слайд';
$ui->breadcrumbs = array(
    'Слайды'=>array('list'),
    $ui->pageName,
);
$ui->menu = array(
    $ui->menuPostButton(array('label'=>'Удалить слайд', 'url'=>array('delete', 'id'=>$form->getModel()->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить этот слайд?')), false),
);
$ui->flash();
echo $form->render();