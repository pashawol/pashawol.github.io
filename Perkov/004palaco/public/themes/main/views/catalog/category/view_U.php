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
<!-- //catalog/category/view -->
