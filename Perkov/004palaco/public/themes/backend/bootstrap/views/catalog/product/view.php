<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \app\modules\catalog\models\Product $model
 */
$ui->pageName = 'Редактировать товар';
$ui->createBreadcrumbs($model->page);

$ui->menu = array(
    array('label'=>'Добавить вкладку', 'url'=>array('createTab', 'id'=>$model->id)),
    $model->page->getIsArchived()
    ? $ui->menuPostButton(array('label'=>'Восстановить товар', 'url'=>array('restore', 'id'=>$model->id)))
    : $ui->menuPostButton(array('label'=>'Удалить товар', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить этот товар?')), false),
);
$ui->menuOpenNode = $model->page->parent_id;
$ui->flash();

$ui->renderPartial('_form', array('form'=>$form));