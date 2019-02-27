<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\base\models\Page $page
 * @var \CActiveDataProvider $dataProvider
 */
$ui->pageName = $page->title;
$ui->createBreadcrumbs($page);
$ui->menu = array(
    array('label'=>'Добавить партнёра', 'url'=>array('create'), 'icon'=>'plus'),
    array('label'=>'Редактировать страницу', 'url'=>array('page/update')),
);
$ui->flash();
$ui->grid(array(
    'type'=>'striped bordered condensed',
    'dataProvider'=>$dataProvider,
    'enableSorting'=>false,
    'columns'=>array(
        'name',
        'url',
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{update} {delete}',
        ),
    ),
));