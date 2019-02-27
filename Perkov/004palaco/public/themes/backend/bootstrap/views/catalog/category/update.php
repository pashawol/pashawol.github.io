<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \app\modules\catalog\models\Category $model
 */
$ui->pageName = 'Редактировать категорию';
$ui->createBreadcrumbs($model->page);

$ui->menu = array(
    array('label'=>'Добавить товар', 'url'=>array('product/create', 'parent'=>$model->page->id)),
    array('label'=>'Добавить подкатегорию', 'url'=>array('create', 'parent'=>$model->page->id)),
    $model->page->getIsArchived()
    ? $ui->menuPostButton(array('label'=>'Восстановить категорию', 'url'=>array('/base/page/restore', 'id'=>$model->page->id)))
    : $ui->menuPostButton(array('label'=>'Удалить категорию', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить данную категорию?')), false),
);
$ui->menuOpenNode = $model->page->parent_id;
$ui->flash();

$ui->renderPartial('_form', array('form'=>$form));