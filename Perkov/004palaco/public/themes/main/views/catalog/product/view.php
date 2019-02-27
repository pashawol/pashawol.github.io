<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\catalog\models\Product $model
 */
$ui->seo($model->page);
$ui->createBreadcrumbs($model->page);

// pretty photo markup
$html = <<<HTML
<div class="obt_sl">
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
                <!--<div class="pp_social"><span class="share">Поделиться ссылкой:</span> <div id="ya_share" data-yashareL10n="ru" data-yashareQuickServices="vkontakte,facebook,twitter,odnoklassniki" data-yashareTheme="counter"></div></div>!-->
            </div>
        </div>
    </div>
</div>
</div>
</div>
<div class="pp_overlay"></div>
HTML;

$images = $model->images;
$images1 = $model->images1; //добавил картинки из доп табл
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
   // ->registerCoreScript('jquery.ui')
    ->registerScriptFile($ui->getThemeFileUrl('js/jquery_ui.js'))
    ->registerScriptFile($ui->getThemeFileUrl('js/jquery.BlackAndWhite.js'))
    ->registerScriptFile($ui->getThemeFileUrl('js/product.js?v3'))
    ->registerScriptFile($ui->getThemeFileUrl('js/jquery.fancybox.min.js'))
    ->registerScriptFile($ui->getThemeFileUrl('js/owl.carousel.min.js'))
        
                 //->registerScriptFile($ui->getThemeFileUrl('js/jquery.prettyPhoto.js?v2'))
	//->registerScript('prettyPhoto', '$(".gallery-img").prettyPhoto(' . CJavaScript::encode($options) . ');')
	//->registerCssFile($ui->getThemeFileUrl('css/prettyPhoto.css'))
	->registerCssFile($ui->getThemeFileUrl('css/owl.theme.default.min.css'))
	->registerCssFile($ui->getThemeFileUrl('css/owl.carousel.min.css'))
	;

$images = $model->images;
$similar = $model->findSimilar();
?>
<div itemscope itemtype="http://schema.org/Product">
<h1 itemprop="name"><?php echo CHtml::encode($ui->getSeoHeader($model->page)); ?></h1>
<div id="tabs" >
    <div class="section" ><?php if (strpos($_SERVER["REQUEST_URI"], 'nashi-raboty') || $model->id == 377) {?>
        
    <a class="watprice" id="wprice" onclick="yaCounter23325040.reachGoal('CALL'); return true;" href="#">Узнать цену</a><?php }?>
      

     
    <div class="box visible">
            <?php if ($images): $image = reset($images); ?>
            <div class="gallery">
                <div class="go-btn go-prev"><a href="#"></a></div>
                <div class="go-btn go-next"><a href="#"></a></div>
                
      <!-- foreach -->
      <?php $i = 0; foreach ($images as $image): $i++;?>

         

  				<?php   $m=CHtml::image($model->getFileUrl('b'));
                  $sm=CHtml::image($model->getFileUrl('s'));
                  $tit=CHtml::encode($ui->getSeoHeader($model->page));

                  if($image->alt){$tit = $image->alt;} else{$tit=$tit.'.Фото '.$i; }

                  $m = preg_replace('#\<img src=(.*) alt=""#','<img itemprop="image" src="/uploads/catalog/products/images/'.$image->id.'_b.jpg"' .' alt="'. $tit . '" title= "'.$tit .'"',$m);
                  $sm = preg_replace('#\<img src=(.*) alt=""#','<img src=$1' .' alt="'. $tit .'" title= "'.$tit .'"',$sm);                                     
          ?>
                  <?php echo CHtml::link($m.'<div class="hover-img-catalog"></div>', $image->getFileUrl('o'), array('id'=>'gallery-img-'.$image->id, 'data-fancybox'=>"gallery" , 'class'=>'gallery-img', 'style'=>$i > 1 ? 'display:none;' : '', 'data-pp-index'=>$image->id)); ?>
                  <?php //echo CHtml::link($m.'<div class="hover-img-catalog"></div>', $image->getFileUrl('o'), array('id'=>'gallery-img-'.$image->id, 'data-fancybox'=>"gallery" , 'class'=>'gallery-img', 'style'=>$i > 1 ? 'display:none;' : '', 'data-pp-index'=>$image->id));
  				?>
        <?php endforeach; ?>
            </div>
            <div class="scroll-pane">
                <div class="scroll-content">
					
                    <?php $num = count($images); $k=1; $i = 0;
                    $tit1=$tit;
                foreach ($model->images as $image): $i++; 
                  if($image->alt){$tit = $image->alt;} else{$tit=$tit1.'.Фото '.++$k; }
                ?>
                    <a href="<?php echo $image->getFileUrl('b'); ?>" data-id="<?php echo $image->id; ?>"<?php if ($i == $num) echo ' class="last"'; ?>>
                        <img itemprop="image" src="<?php echo $image->getFileUrl('s'); ?>" alt="<?php echo($tit);?>" title="<?php echo($tit);?>" />
                     </a>
                   <?php endforeach; ?>
                </div>
            </div>
            <div class="scroll-bar-wrap">
                <div class="scroll-bar"></div>
            </div>
            <div class="clr"></div>       
            
                 <?php
                /**/ $data= Yii::app()->db->createCommand()
                                    ->select('*')
                                    ->from(' catalog_products_params')
                                    ->where('product_id='.$model->id .' and icon=11' )
                                   ->queryAll();
                ?>
               <?php 
                    if(!empty($data)){?>
            <div itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="tovar-cena_pm"> 
             
                        <div class="separator small"></div>
                        <div  class="tovar-cena_pm-fl">
                       <meta itemprop="priceCurrency" content="RUB" />
                        <p itemprop="price" >
                  <?php echo $data[0]['value'];?>   
                        <span>руб пог.м.  </span>
                         </p>
                             <span>
                                 <button type="button" id="send-formx" class="btn-main  params-form<?php echo ($model->id); ?>" data-toggle="modal" data-target="#myModal">
                        Хочу такую кухню
                    </button> 
                             </span>
	 </div>
                        
               <script>
                   $(".params-form<?php echo ($model->id); ?>").click(function(){
                        $('.mod-inp-name').val("<?php echo CHtml::encode($model->title); ?>");
                        $('.mod-inp-cena').val("<?php echo $data[0]['value']; ?>");
                        $('.inp-form-img7').html('<?php echo $sm ?>');
                        $('.inp-form-text1').text("<?php echo CHtml::encode($model->title); ?>");
                       $('.inp-form-text2').text("<?php echo $data[0]['value']; ?> р. пог.метр" );
                    })
               </script>
                            
                             
                        <?php } ?>
            </div>   
<!-----------  --> 

            <?php endif; ?>

<?php if($images1){ ?>
 
 <?php } ?>      
                <!-- <ul class="tabs">
                        <li class="current"><span>Фотографии</span></li>
                        <?php foreach ($model->tabs as $tab): if (empty($tab->description)) continue; ?><li>
                            <span><?php echo CHtml::encode($tab->name); ?></span></li>
                       <?php endforeach; ?>
                </ul>  -->
        
<!--  ////************////  -->    
            <div class="props">
              <nav class="property" id="property">
                  
                <?php if($model->short_text){ ?>     <?php } ?> 
                <div class="property__tab active" data-num="1">
                  <span>Описание</span>
                </div >
                  
                <?php foreach ($model->tabs as $tab): if (empty($tab->description)) continue; ?>
                 <?php
                 $fsl=CHtml::encode($tab->name);
                 if($fsl == "Фасадная линейка") { ?>
                <div class="property__tab" data-num="2">    
                    <span><?php echo $fsl; ?></span>
                    <?php $tabDesk = $tab->description; ?>
                    
                 </div>
                 <?php } ?>
                <?php endforeach; ?> 
                  
                <!--<div class="property__tab" data-num="2">
                  <span>Фасадная линейка</span>
                </div>-->
                  
        <?php if($images1){ ?>
                  <div class="property__tab" data-num="3">
                  <span>Трендовые цвета</span>
                </div>
            <?php } ?>    
                  
                <div class="property__tab" data-num="4">
                  <span>Варианты компектации</span>
                </div>
                <div class="property__tab" data-num="5">
                  <span>Оплата и доставка</span>
                </div>
              </nav>
                  <!-- /// prop  /// -->
              <div class="props__content prop" id="prop">
                  <!--описания-->
                <div itemprop="description" class="prop__desc">
                      <?php if($model->short_text){ ?> <?php echo $model->short_text; ?><?php } ?>  
                </div>
                  
                  <!--фасадная линейка-->
                <div class="prop__ruler" data-all="5">
                  <a href="#" id="rule-prev"><img src="/uploads/arrow-left.png" alt="prev"></a>
                     <?php if($fsl == "Фасадная линейка") { echo $tabDesk; } ?>
                    <!--  <div class="prop__row">
                    <div class="prop__rule">
                      <img src="/uploads/ruler/door.png" alt="door" class="sizeble">
                      <p>Фасад с филенкой 1</p>
                    </div>
                    <div class="prop__rule">
                      <img src="/uploads/ruler/door.png" alt="door" class="sizeble">
                      <p>Фасад с филенкой 2</p>
                    </div>
                    <div class="prop__rule">
                      <img src="/uploads/ruler/door.png" alt="door" class="sizeble">
                      <p>Фасад с филенкой если длинное название 3</p>
                    </div>
                    <div class="prop__rule">
                      <img src="/uploads/ruler/door.png" alt="door" class="sizeble">
                      <p>Фасад с филенкой 4</p>
                    </div>
                    <div class="prop__rule">
                      <img src="/uploads/ruler/door.png" alt="door" class="sizeble">
                      <p>Фасад с филенкой 5</p>
                    </div>
                  </div>
                  -->
                  <a href="#" id="rule-next"><img src="/uploads/arrow-right.png" alt="prev"></a>
                </div>
                  
                  <!--трендовые цвета-->
                <div class="prop__color" data-all="6"> 
                    <?php if($images1){ ?>
                      <div class="sl-img-color">
                        <div class="owl-carousel owl-theme">
                            <?php $i = 0; foreach ($images1 as $image1): $i++;  ?>
                              <div class="item" data-hash="n1">
                                   <?php
                                     $m1= CHtml::image($image1->getFileUrl('b'));
                                   //  echo $m1;

                                      if($image1->alt){$tit = $image1->alt;} else{$tit=$tit.'.Фото '.$i; }
                                                  $m1 = preg_replace('#\<img src=(.*) alt=""#','<img itemprop="image" src="/uploads/catalog/products1/images/'.$image1->id.'_b.jpg"' .' alt="'. $tit . '" title= "'.$tit .'"',$m1);
                                        echo $m1;
                                   ?>

                            </div>
                             <?php endforeach; ?>
                        </div>
                      </div>
                  <?php } ?>   
                </div>
                  
                 <!--варианты компл-->
                <div class="prop__option option container">
                     <div class="product_params">
                            <?php foreach ($model->params as $param) :
                                    if($param->icon != 11){
                                ?>

                        <div class="product_param">
                            <?php echo CHtml::image($param->getIconUrl(), ''); ?>
                            <div class="product_param_name"><?php echo CHtml::encode($param->name); ?></div>
                            <!--<div class="product_param_value"><?php echo CHtml::encode($param->value); ?></div>-->
                            <div id="pr<?php echo CHtml::encode($param->id); ?>" class="product_param_value"><?php echo CHtml::encode($param->value); ?>
                            <?php if(strlen($param->haracter)>1) { ?>
                              <div class="bbwin pr<?php echo CHtml::encode($param->id); ?>"><?php echo $param->haracter; ?></div>
                            <?php } ?>
                            </div>

                        </div>
                            <?php
                            }
                    endforeach; ?>
                </div>
                </div>
                 
                 <!--оплата и доставка-->
                <div class="prop__desc54 text-sw">
                   
                       <h4>Оплата производится согласно договору.</h4>
                       <h4>Аванс – при заключении договора 60% от суммы и 40% перед установкой кухни.</h4>

                      <h4> Компания предоставляет два вида рассрочки:</h4>
                      <ol>
                      <li>1.От компании.  Аванс – при заключении договора 60% от суммы, доплата 40% дается в рассрочку до 3-х месяцев. *Скидка на мебель, обсуждается каждый раз индивидуально!</li>
                      <li>2. Через банк. Рассрочка до 10 месяцев, без первоначального взноса. Сумма от 2500 до 300 000 р. Для рассрочки нужен паспорт и второй документ (права, либо снилс). При рассрочке через банк скидка на мебель не предоставляется.</li>
                      <li>3.Кредит:
                      Чтобы оформить покупку в кредит, специалист банка связывается с клиентом и делает индивидуальный расчет.</li>
                      </ol>
                      <h4>Доставка:</h4>  
                      <p>Доставка кухонного гарнитура производится транспортном компании. Сборка кухни занимает от одного до двух, трех дней, в зависимости от сложности и размера кухни. 
                  </p>
                </div>
              </div>
            </div>
<!--  ////:::::::::::::::////  -->
<div class="separator small"></div>


       
		

	  <!-- разделим здесь -->
	  <?php foreach ($model->tabs as $tab): 
      if (empty($tab->description)) continue; ?>
        <div class="box">
            <div class="textContainer">
                <?php echo $tab->description; ?>
            </div>
        </div>
        <?php endforeach; ?>

		<!-- разделим здесь ttt -->
            <div class="kn-45">
                <a href="/kak-probshodit-zakaz" class="kn-45-x" title="Узнать как порисходит заказ кухни">Как порисходит заказ кухни</a>
                <a href="/skolko-stoit-dizayn-proekt" class="kn-45-x" title="Узнать сколько стоит дизайн проект?">Сколько стоит дизайн проект?</a>
            </div>   
            <div class="form-45">
                
            <form action="" method="post" class="form-m">
                <h2 class='h3 h3-45'>Заполните и получите бесплатный дизайн-проект!</h2>
                <div class="flex-46">
                    <div>
                    <input type="text" id="namey" name="name" placeholder="Ваше имя:"><div class="errorx red"  id="bthrow_error_namey"></div>
                    </div>
                    <div>
                    <input type="tel" id="telfy" name="telf" placeholder="Ваш телефон:"> <div class="errorx red"  id="bthrow_error_telfy"></div>
                     </div>
                    <div>
                    <input type="text" id="gorody" name="gorod" placeholder="Ваш город:"><div class="errorx red"  id="bthrow_error_phoney"></div>
                </div>  
                </div>    
                <div class="flex-47">
					<div class="chs7">
						<input type="checkbox" name="check-name" checked="checked" id="condition1y">
						<a  style="color:#aaa" href='/pokupatelu/politika'> Даю согласие на обработку персональных данных </a>
					 </div>   
                    <input type="submit" value="Получить дизайн проект" class="btn2">
                 </div>  
                <div class="errorx red"  id="bthrow_error_checky"></div>
                <div class=""  id="itogoy"></div>
                <div   class="throw_error errorx"></div>
            </form>   
                </div>
      		
		
        <?php if ($similar): ?>
	    <div class="see-also">
	        <p class="look-also">Вам также может понравится</p>
	        <div id="catalogList" class="catalogInGroup smtg" style="padding-top: 15px;">
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
		
<!--		<div class="separator small"></div>-->
    <!-- .div -->
	
</div>
</div>
</div>
<script>
 /***************/
    $(document).ready(function() {
             dotcount = 1;
            
          jQuery('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            nav: false,
            animateOut: 'fadeOut',
            callbacks: true,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'
          });
          
           /*скрипт создает миниатюры из основных слайдов*/
               jQuery('.owl-dot').each(function() {
                jQuery(this).addClass('dotnumber' + dotcount);
                jQuery(this).attr('data-info', dotcount);
                 dotcount = dotcount + 1;
               });

               slidecount = 1;

              jQuery('.owl-item').not('.cloned').each(function() {
                jQuery(this).addClass('slidenumber' + slidecount);
                 slidecount = slidecount + 1;
               });

              jQuery('.owl-dot').each(function() {
                 grab =jQuery(this).data('info');
                 slidegrab =jQuery('.slidenumber' + grab + ' img').attr('src');
                 alt=jQuery('.slidenumber' + grab + ' img').attr('alt');
                 var slide = '<img src="' + slidegrab + '" alt="миниатюра '+alt+'" title="миниатюра '+alt+'">';
                jQuery(this).append(slide)
               });

               amount = jQuery('.owl-dot').length;
               gotowidth = 100 / amount;

              jQuery('.owl-dot').css("width", gotowidth + "%");
               newwidth =jQuery('.owl-dot').width();
             // jQuery('.owl-dot').css("height", newwidth + "px");
              jQuery('.owl-dot').css("margin-bottom", "10px");
});
</script>

<?php //$ui->widget('app\components\LikeWidget'); ?>
