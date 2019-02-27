<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\base\models\Page $page
 */
$ui->pageName = $page->title;
$ui->createBreadcrumbs($page);
$ui->menu = array(
    array('label'=>'Добавить категорию', 'url'=>array('create')),
    array('label'=>'Редактировать страницу', 'url'=>array('page/update')),
);
$ui->flash();

$ui->widget('base:components\PageMenu', array(
    'rootPage'=>$page->id,
    'maxDepth'=>5,
    'includeTypes'=>array('catalog_category'),
    'routeUrl'=>true,
    'htmlOptions'=>array(
        'class'=>'category-tree',
    ),
));