<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\base\models\Page $parent
 */
$ui->pageName = 'Добавить новость';
$ui->createBreadcrumbs($parent, $ui->pageName);
$ui->menuOpenNode = $parent->id;
$ui->flash();
$ui->renderPartial('_form', array('form'=>$form));