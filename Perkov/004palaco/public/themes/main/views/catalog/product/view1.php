<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\catalog\models\Product $model
 */
$ui->seo($model->page);
$ui->createBreadcrumbs($model->page);

// pretty photo markup
$html = <<<HTML
<div class="pp_pic_holder">
<div class="ppt">&nbsp;</div>
<div class="pp_top"><a class="pp_close" href="#">Close</a></div>
<div class="pp_content_container">
    <div class="pp_content">
        <div class="pp_loaderIcon"></div>
        <div class="pp_fade">
            <a href="#" class="pp_expand" title="Полный размер">Полный размер</a>
            <div class="pp_hoverContainer">
                <a class="pp_next" href="#">Вперед</a>
                <a class="pp_previous" href="#">Назад</a>
            </div>
            <div id="pp_full_res"></div>
            <div class="pp_details">
                <p class="pp_description"></p>
                <div class="pp_social"><span class="share">Поделиться ссылкой:</span> <div id="ya_share" data-yashareL10n="ru" data-yashareQuickServices="vkontakte,facebook,twitter,odnoklassniki" data-yashareTheme="counter"></div></div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="pp_overlay"></div>
HTML;

$images = $model->images;
if ($images) $image = reset($images);
$options = array(
	'hashtag' => 'photo',
	'animation_speed' => 'normal',
	'theme' => 'dark_square',
	'overlay_gallery' => false,
	'markup' => $html,
	'prevpagecallback' => 'js:function(){$(".gallery .go-prev").click()}',
	'nextpagecallback' => 'js:function(){$(".gallery .go-next").click()}',
	'share_description' => 'Кухни и мебель в Костроме «Палаццо»',
	'share_image' => isset($image) ? app()->getBaseUrl(true) . $image->getFileUrl('s') : '',
);

cs()->registerCoreScript('jquery')
    ->registerCoreScript('jquery.ui')
    ->registerScriptFile($ui->getThemeFileUrl('js/jquery.BlackAndWhite.js'))
    ->registerScriptFile($ui->getThemeFileUrl('js/product.js?v3'))
	->registerScriptFile($ui->getThemeFileUrl('js/jquery.prettyPhoto.js?v2'))
	->registerScript('prettyPhoto', '$(".gallery-img").prettyPhoto(' . CJavaScript::encode($options) . ');')
	->registerCssFile($ui->getThemeFileUrl('css/prettyPhoto.css'));

$images = $model->images;
$similar = $model->findSimilar();
?>
<h1><?php echo CHtml::encode($ui->getSeoHeader($model->page)); ?></h1>
<div id="tabs">
    <div class="section"><?php if (strpos($_SERVER["REQUEST_URI"], 'nashi-raboty')) {?>
        
    <a class="watprice" id="wprice" onclick="yaCounter23325040.reachGoal('CALL'); return true;" href="#">Узнать цену</a><?php }?>
        <ul class="tabs">
            <li class="current"><span>Фотографии</span></li>
            <?php foreach ($model->tabs as $tab): 
                if (empty($tab->description)) continue; ?><li><span><?php echo CHtml::encode($tab->name); ?></span></li>
           <?php endforeach; ?>
        </ul>
        <div class="box visible">
            <?php if ($images): $image = reset($images); ?>
            <div class="gallery">
                <div class="go-btn go-prev"><a href="#"></a></div>
                <div class="go-btn go-next"><a href="#"></a></div>

                <?php $i = 0; foreach ($images as $image): $i++; ?>

				<?php   $m=CHtml::image($model->getFileUrl('b'));
						$tit=CHtml::encode($ui->getSeoHeader($model->page));
				    	$m = preg_replace('#\<img src=(.*) alt=""#','<img src="/uploads/catalog/products/images/'.$image->id.'_b.jpg"' .' alt="'. $tit . '. Фото '.$i.'" title= "'.$tit .'. Фото '.$i.'"',$m);
				  ?>
                <?php echo CHtml::link($m.'<div class="hover-img-catalog"></div>', $image->getFileUrl('o'), array('id'=>'gallery-img-'.$image->id, 'class'=>'gallery-img', 'style'=>$i > 1 ? 'display:none;' : '', 'data-pp-index'=>$image->id)); ?>
                <?php endforeach; ?>
            </div>
            <div class="scroll-pane">
                <div class="scroll-content">
					
                    <?php $num = count($images); $k=1; $i = 0; foreach ($model->images as $image): $i++; ?><a href="<?php echo $image->getFileUrl('b'); ?>" data-id="<?php echo $image->id; ?>"<?php if ($i == $num) echo ' class="last"'; ?>><img src="<?php echo $image->getFileUrl('s'); ?>" alt="<?php echo($tit.'. Фото '.++$k);?>" title="<?php echo($tit.'. Фото '.$k);?>" /></a><?php endforeach; ?>
                </div>
            </div>
            <div class="scroll-bar-wrap">
                <div class="scroll-bar"></div>
            </div>
            <div class="clr"></div>
            <?php endif; ?>
            <div class="textContainer">
                <?php echo $model->short_text; ?>
                <div class="product_params">
                    <?php foreach ($model->params as $param) : ?>
                        <div class="product_param">
                            <?php echo CHtml::image($param->getIconUrl(), ''); ?>
                            <div class="product_param_name"><?php echo CHtml::encode($param->name); ?></div>
                            <div class="product_param_value"><?php echo CHtml::encode($param->value); ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <?php foreach ($model->tabs as $tab): if (empty($tab->description)) continue; ?>
        <div class="box">
            <div class="textContainer">
                <?php echo $tab->description; ?>
            </div>
        </div>
        <?php endforeach; ?>
        <?php if ($similar): ?>
	    <div class="see-also">
	        <p class="look-also">Смотрите также</p>
	        <div id="catalogList" class="catalogInGroup" style="padding-top: 15px;">
	            <ul>
	                <?php foreach ($similar as $s): ?>
	                <li class="product">
	                    <a href="<?php echo $s->page->createUrl(); ?>" class="bwWrapper">
		                    <span class="img"><?php if ($model->hasFile('s')) echo CHtml::image($s->getFileUrl('s')); ?></span>
	                        <span class="text"><?php echo CHtml::encode($s->title); ?></span>
	                    </a>
	                </li>
	                <?php endforeach; ?>
	            </ul>
	        </div>
	    </div>
        <?php endif; ?>
    </div><!-- .div -->
</div>
<div class="separator small">
</div>

<?php //$ui->widget('app\components\LikeWidget'); ?>
