<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\Page $page
 * @var \app\modules\partners\models\Partner[] $models
 * @var \CPagination $pages
 */
$ui->seo($page->page);
$ui->createBreadcrumbs($page->page);
?>
<h1><?php echo CHtml::encode($ui->getSeoHeader($page->page)); ?></h1>
<div class="textContainer partner-list">
    <?php echo $page->getTextPart('text', 0); ?>
    <?php foreach ($models as $model): ?>
    <div class="partner">
	    <a<?php if ($model->url) echo ' href="http://' . $model->url . '" target="_blank"'; ?> class="partner-logo">
            <?php echo CHtml::image($model->getFileUrl(), $model->name); ?>
	    </a>
        <div class="partner-info">
            <h3><?php echo CHtml::encode($model->name); ?></h3>
            <?php
            if($model->url)
                echo CHtml::link(CHtml::encode($model->url), 'http://'.$model->url, array('target'=>'_blank', 'rel'=>'nofollow', 'class'=>'partner-link')); ?>
            <?php echo $model->description; ?>
        </div>
    </div>
    <?php endforeach; ?>
    <div class="clr"></div>
    <?php echo $page->getTextPart('text', 1); ?>
</div>

