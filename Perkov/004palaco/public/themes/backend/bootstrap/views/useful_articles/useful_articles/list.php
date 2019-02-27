<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\base\models\Page $page
 * @var \CActiveDataProvider $dataProvider
 */
$ui->pageName = $page->title;
$ui->createBreadcrumbs($page);
$ui->menu = array(
    array('label'=>'Добавить полезную статью', 'url'=>array('create'), 'icon'=>'plus'),
    array('label'=>'Редактировать страницу', 'url'=>array('page/update')),
);
$ui->flash();
$ui->grid(array(
    'type'=>'striped bordered condensed',
    'dataProvider'=>$dataProvider,
    'rowCssClassExpression'=>function($row, $data) {
        return $data->page->getIsPublished() ? 'active' : 'inactive';
    },
    'columns'=>array(
        array(
            'header'=>'Дата публикации',
            'value'=>'$data->page->publish_time === null ? "Не опубликована" : \Yii::app()->dateFormatter->formatDateTime($data->page->getUnixPublishTime(), "long", null)',
        ),
		'page.title',
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{view} {delete}',
            'viewButtonUrl'=>'$data->page->getRoute()',
        ),
    ),
));