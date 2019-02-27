<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Добавить вкладку';
$ui->createBreadcrumbs($product->page, $ui->pageName);
$ui->menuOpenNode = $product->page->id;
$ui->flash();
echo $form->render();