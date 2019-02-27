<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\TextPage $page
 * @var \CPagination $pages
 */
$ui->seo($page->page);
$ui->createBreadcrumbs($page->page);
?>
<h1><?php echo CHtml::encode($ui->getSeoHeader($page->page)); ?></h1>

<?php if ($page->text): ?>
<div class="textContainer">
    <?php echo $page->text; ?>
</div>
<?php endif; ?>

<section class="news-list">
    <?php foreach ($models as $model): ?>
    <div class="block">
        <span><?php echo app()->dateFormatter->formatDateTime($model->page->getUnixPublishTime(), 'long', null); ?></span>
        <?php echo CHtml::link(CHtml::encode($model->page->title), $model->page->createUrl()); ?>
        <p><?php echo CHtml::encode($model->short_text); ?></p>
    </div>
    <?php endforeach; ?>
</section>

<div class="clr"></div>

<?php if ($pages->pageCount > 1): ?>
<div class="pager bottom">
    <?php $ui->pager($page->page, array('pages'=>$pages)); ?>
</div>
<?php endif; ?>
