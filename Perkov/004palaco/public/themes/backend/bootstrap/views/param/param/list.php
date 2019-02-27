<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \CActiveDataProvider $dataProvider
 */
$ui->pageName = 'Глобальные настройки';
$ui->breadcrumbs = array('Настройки');
$ui->menu = array(
    array('label'=>'Добавить параметр', 'url'=>array('create')),
);
$ui->flash();
$ui->grid(array(
    'type'=>'striped bordered condensed',
    'dataProvider'=>$dataProvider,
    'enableSorting'=>false,
    'summaryText'=>'',
    'columns'=>array(
        'name',
        'value',
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{update}',
        ),
    ),
));