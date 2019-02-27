<?php
/**
 * @var \app\components\UI $ui
 * @var string $content
 */
$ui->beginContent('//layouts/main');
$showSeparator = true;
if ($ui->page && $ui->page->id == 10)
{
    $ui->widget('banners:components\BannerWidget', array('position'=>1));
    $showSeparator = false;
}
else
{
    echo '<div class="breadCrumbs">';
    $ui->breadcrumbs(array(
        'homeLink'=>false,
        'separator'=>' <span class="sep">/</span> ',
    ));
    echo '</div>';
}
?>
<section id="catalog">
    <aside class="ppi5">
        <nav id="left">
            <?php $ui->widget('catalog:components\SideMenu'); ?>
        </nav>
        <?php $ui->widget('banners:components\BannerWidget', array('position'=>2)); ?>
    </aside>
    <section id="insideLeft"<?php if (!$showSeparator) echo ' class="actions"'; ?>>
        <?php if ($showSeparator): ?><div class="separator small pattern"></div><?php endif; ?>
        <?php echo $content; ?>
        <?php if ($ui->insideBottomText): ?>
        <div class="bottomText">
            <?php if ($ui->insideBottomSep): ?><div class="separator small"></div><?php endif; ?>
            <div class="textContainer">
                <?php echo $ui->insideBottomText; ?>
            </div>
        </div>
        <?php endif; ?>
    </section>
    <div class="clr"></div>

</section>
<?php $ui->endContent(); ?>