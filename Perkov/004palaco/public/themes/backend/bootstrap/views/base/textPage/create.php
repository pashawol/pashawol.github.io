<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\base\models\Page $parent
 */
$ui->pageName = 'Добавить страницу';
$ui->createBreadcrumbs($parent, 'Добавить страницу');
$ui->menuOpenNode = $parent->id;
$ui->flash();
$ui->renderPartial('_form', array('form'=>$form));
