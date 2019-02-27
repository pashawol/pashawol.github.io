<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\base\models\Page $page
 * @var \sii\web\form\Form $form
 * @var \app\modules\partners\models\Partner $model
 */
$ui->pageName = 'Редактировать партнёра';
$ui->createBreadcrumbs($page, $ui->pageName);

$ui->menu = array(
    $ui->menuPostButton(array('label'=>'Удалить партнёра', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>'Вы действительно хотите удалить этого партнёра?')), false),
);
$ui->menuOpenNode = $page->id;
$ui->flash();

$ui->renderPartial('_form', array('form'=>$form));