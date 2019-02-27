<?php
/**
 * @var $ui \app\components\UI
 */
$ui->pageTitle = 'Карта сайта';
$ui->breadcrumbs = array(
    'Главная'=>'/',
    $ui->pageTitle,
);
?>
<h1><?php echo $ui->pageTitle; ?></h1>
<div class="textContainer">
    <?php $ui->widget('base:components\SiteMap'); ?>
</div>