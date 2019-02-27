<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\news\models\News $model
 */
$ui->pageName = 'Редактировать новость';
$ui->createBreadcrumbs($model->page);

$ui->menu = array(
    $model->page->getIsArchived()
    ? $ui->menuPostButton(array('label'=>'Восстановить новость', 'url'=>array('/base/page/restore', 'id'=>$model->page->id)))
    : $ui->menuPostButton(array('label'=>'Удалить новость', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить эту новость?')), false),
);
$ui->menuOpenNode = $model->page->parent_id;
$ui->flash();

$ui->renderPartial('_form', array('form'=>$form));