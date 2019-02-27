<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \CActiveDataProvider $dataProvider
 */
$ui->pageName = 'Слайды';
$ui->breadcrumbs = array(
    $ui->pageName,
);
$ui->menu = array(
    array('label'=>'Добавить слайд', 'url'=>array('create'), 'icon'=>'plus'),
);
$ui->flash();
$ui->grid(array(
    'type'=>'striped bordered condensed',
    'dataProvider'=>$dataProvider,
    'enableSorting'=>false,
    'columns'=>array(
		'title',
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{update} {delete}',
        ),
    ),
));