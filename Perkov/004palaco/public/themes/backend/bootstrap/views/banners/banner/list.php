<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \CActiveDataProvider $dataProvider
 */
$ui->pageName = 'Баннеры';
$ui->breadcrumbs = array($ui->pageName);
$ui->menu = array(
    array('label'=>'Добавить баннер', 'url'=>array('create'), 'icon'=>'plus'),
);
$ui->flash();
$ui->grid(array(
    'type'=>'striped bordered condensed',
    'dataProvider'=>$dataProvider,
    'enableSorting'=>false,
    'columns'=>array(
		'name',
        'positionLabel',
        array(
            'name'=>'current',
            'value'=>'$data->getIsCurrent() ? "Да" : ""',
        ),
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{view} {delete}',
        ),
    ),
));