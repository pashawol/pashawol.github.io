<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\TextPage $model
 */
$ui->seo($model->page);
$ui->createBreadcrumbs($model->page);

if ($model->id == 191) {
echo '<a id="otziv" class="otzivv" href="#">Написать отзыв</a>';	
}
if ($model->id == 524) {
echo '<a id="quest" class="otzivv" href="#">Задать вопрос</a>';	
}

?>
<h1><?php echo CHtml::encode($ui->getSeoHeader($model->page)); ?></h1>

<?php
if ($model->id == 530) {
        $ui->widget('calc:components\FormWidget'); 	
}?>

<div class="textContainer">
    <?php if ($model->page->getHasChildren()): ?>
    <ul class="subpages">
        <?php foreach ($model->page->children as $child): ?>
            <li><?php echo CHtml::link($child->title, $child->createUrl()); ?></li>
        <?php endforeach; ?>
    </ul>
    <?php endif; ?>
    <?php echo $model->text; ?>
</div>
<?php
if ($model->id == 191) {
echo '<a id="otziv" class="otzivvv" href="#">Написать отзыв</a>';	
}
if ($model->id == 524) {
echo '<a id="quest" class="otzivvvm" href="#">Задать вопрос</a>';	
}
?>