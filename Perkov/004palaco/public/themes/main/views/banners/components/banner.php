<?php
/**
 * @var \app\modules\banners\components\BannerWidget $this
 * @var \app\modules\banners\models\Banner $model
 */
    if ($model) {
?>
<section class="bnr-pos-<?php echo $this->position; ?>">
    <?php if ($model) echo $model->getCode(); ?>
</section>
<?php
}
?>
