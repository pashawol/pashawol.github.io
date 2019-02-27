<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\base\models\Page $page
 */
$ui->pageName = 'Добавить партнёра';
$ui->createBreadcrumbs($page, $ui->pageName);
$ui->menuOpenNode = $page->id;
$ui->flash();
$ui->renderPartial('_form', array('form'=>$form));