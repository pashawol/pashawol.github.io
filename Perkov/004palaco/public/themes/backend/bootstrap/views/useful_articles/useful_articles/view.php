<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\news\models\News $model
 */
$ui->pageName = 'Редактировать полезную статью';
$ui->createBreadcrumbs($model->page);

$ui->menu = array(
    $model->page->getIsArchived()
    ? $ui->menuPostButton(array('label'=>'Восстановить полезную статью', 'url'=>array('/base/page/restore', 'id'=>$model->page->id)))
    : $ui->menuPostButton(array('label'=>'Удалить полезную статью', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить эту полезную статью?')), false),
);
$ui->menuOpenNode = $model->page->parent_id;
$ui->flash();

$ui->renderPartial('_form', array('form'=>$form));