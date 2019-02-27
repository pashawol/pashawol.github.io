<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \app\modules\services\models\Service $model
 */
$ui->pageName = 'Редактировать страницу';
$ui->createBreadcrumbs($model->page);
$ui->menu = array(
	$model->page->getIsArchived()
		? $ui->menuPostButton(array('label'=>'Восстановить страницу', 'url'=>array('restore', 'id'=>$model->id)))
		: $ui->menuPostButton(array('label'=>'Удалить страницу', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить эту страницу?')), false)
);
$ui->menuOpenNode = $model->page->parent_id;
$ui->flash();

$ui->renderPartial('_form', array('form'=>$form));