<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\Page $page
 * @var \app\modules\actions\models\Action[] $models
 */
$ui->seo($page->page);
$ui->createBreadcrumbs($page->page);
Yii::app()->clientScript->registerMetaTag('noindex, follow', 'robots');
?>
<h1><?php echo CHtml::encode($ui->getSeoHeader($page->page)); ?></h1>
<div class="textContainer">
    <ul class="subpages">
        <?php foreach ($models as $model): ?>
            <li><?php echo CHtml::link(CHtml::encode($model->title), $model->page->createUrl()); ?></li>
        <?php endforeach; ?>
    </ul>
    <?php echo $page->text; ?>
</div>