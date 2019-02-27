<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\Page $page
 */
$this->layout = '//layouts/main';
$ui->seo($page->page);
$ui->createBreadcrumbs($page->page);
?>
<div class="breadCrumbs">
    <?php
    $ui->breadcrumbs(array(
        'homeLink'=>false,
        'separator'=>' <span class="sep">/</span> ',
    ));
    ?>
</div>
<!--catalog\index-->
<section id="catalog">
    <h1><?php echo CHtml::encode($ui->getSeoHeader($page->page)); ?></h1>
    <div class="container2">
       <div class="textContainer">
        
         <?php echo $page->text; ?>
        </div>
    </div>
    <!--<div class="separator"></div>-->
    
    <?php $ui->widget('catalog:components\CatalogIndexWidget'); ?>
</section>

<div class="separator pattern"></div>


<h2 class="h2">Наши работы</h2> 
<!-- /catalog/category/index-->
<div class="container2">
    <div class="textContainer">
        <p style="text-align: justify;">Компания «Палаццо» представляет Вам широкий выбор товаров. Здесь вы можете найти любую вещь, которая вас интересует. Ассортимент нашей дизайн-студии приятно удивит даже самого взыскательного клиента.</p>
<p style="text-align: justify;">Для подробной характеристики предмета перейдите по ссылке. Если у вас возникли вопросы, вы можете связаться с нашими менеджерами по телефонам офиса.</p>  
    </div>
</div>


<?php $ui->widget('catalog:components\CatalogIndexWidget', array('featuredOnly'=>true)); ?>


<!--<div class="separator "></div>-->
