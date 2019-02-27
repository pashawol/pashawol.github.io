<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\news\models\News $model
 */

$ui->seo($model->page);
$ui->createBreadcrumbs($model->page);
Yii::app()->clientScript->registerMetaTag('noindex, follow', 'robots');
?>
<h1><?php echo \CHtml::encode($ui->getSeoHeader($model->page)); ?></h1>
<div class="textContainer">
    <span class="date"><?php echo app()->dateFormatter->formatDateTime($model->page->getUnixPublishTime(), 'long', false); ?></span>
    <?php echo $model->text; ?>
</div>