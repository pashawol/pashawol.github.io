<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\base\models\Page $page
 * @var \app\modules\catalog\models\Category $model
 * @var \CActiveDataProvider $dataProvider
 */
$ui->pageName = $model->page->title;
$ui->createBreadcrumbs($model->page);
$ui->menu = array(
    array('label'=>'Добавить товар', 'url'=>array('product/create', 'parent'=>$model->id)),
    array('label'=>'Добавить подкатегорию', 'url'=>array('create', 'parent'=>$model->id)),
    array('label'=>'Редактировать категорию', 'url'=>array('update', 'id'=>$model->id)),
);
$ui->flash();
$ui->grid(array(
    'type'=>'striped bordered condensed',
    'dataProvider'=>$dataProvider,
    'enableSorting'=>false,
    'columns'=>array(
        'page.title',
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{view}',
            'viewButtonUrl'=>'$data->page->getRoute()',
        ),
    ),
));