<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\catalog\models\Category $model
 * @var \app\modules\catalog\models\Category $categories[]
 * @var \app\modules\catalog\models\Product $products[]
 * @var \CPagination $pages
 */

echo "<!-- catalog/category/view -->"; 
if ($ui->page->id == 328) {
	$products = null;
}
$ui->seo($model->page);
$ui->createBreadcrumbs($model->page);

echo '<h1>', CHtml::encode($ui->getSeoHeader($model->page)), '</h1>';

$images = $model->images;
 foreach ($images as $image): $i++; 
	echo "<div class='img_cat_dop'>". CHtml::image($image->getFileUrl('b'))."</div>";
	 
 endforeach;

 if($model->textx){
 echo "<div class='img_cat_dop_text'>  ".$model->textx."</div>";
}



$ui->widget('catalog:components\ItemGrid', array(
    'categories'=>!empty($categories) ? $categories : null,
    'products'=>!empty($products) ? $products : null,
    'pages'=>$pages,
));
$ui->insideBottomSep = !empty($categories) || !empty($products);
if(isset($_GET['page'])==false){
	$ui->insideBottomText = $model->text;
}
?>
<div class="pre-text-x">	</div>
<!-- //catalog/category/view 1-->