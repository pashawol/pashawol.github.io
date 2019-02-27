<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\actions\models\Action $model
 */
$ui->seo($model->page);
$ui->createBreadcrumbs($model->page);
Yii::app()->clientScript->registerMetaTag('noindex, follow', 'robots');
?>
<h1><?php echo CHtml::encode($ui->getSeoHeader($model->page)); ?></h1>
<div class="textContainer">
    <?php echo $model->text; ?>
</div>