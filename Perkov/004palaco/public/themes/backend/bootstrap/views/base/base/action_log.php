<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\backend\base\models\BackendAction $model
 */
$ui->pageName = 'История действий';
$ui->breadcrumbs = array('История действий');

$ui->widget('base:components\ActionLog');