<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\base\models\TextPage $model
 */
$ui->pageName = 'Редактировать страницу';
$ui->createBreadcrumbs($model->page);

$deleteMessage = "Вы действительно хотите удалить данную страницу?";
if ($model->page->getHasChildren())
    $deleteMessage .= "\n\nВНИМАНИЕ: все подстраницы также будут удалены!";

if (!$model->page->getIsArchived())
    $ui->menu = array(
        array('label'=>'Добавить подстраницу', 'url'=>array('create', 'parent'=>$model->id)),
        $ui->menuPostButton(array('label'=>'Удалить страницу', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>$deleteMessage)), false)
    );
else
    $ui->menu = array(
        $ui->menuPostButton(array('label'=>'Восстановить страницу', 'url'=>array('page/restore', 'id'=>$model->id), 'htmlOptions'=>array('class'=>'btn-info'))),
    );

$ui->flash();
$ui->renderPartial('_form', array('form'=>$form));