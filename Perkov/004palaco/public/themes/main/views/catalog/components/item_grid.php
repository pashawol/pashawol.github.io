<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\catalog\models\Category $categories[]
 * @var \app\modules\catalog\models\Product $products[]
 * @var \CPagination $pages
 */
$models = array_merge(empty($categories) ? array() : $categories, empty($products) ? array() : $products);
?>
<!-- item_grid -->
<div id="catalogList">
    <ul class="ur1">
     
        <?php foreach ($models as $model): ?>

        
                    <?php
                     $data= Yii::app()->db->createCommand()
                    ->select('*')
                    ->from(' catalog_products_params')
                    ->where('product_id='.$model->id .' and icon>9' )
                   ->queryAll();
                    $pmx="";
                    $cenx="";
                    $stilx="";
                    $mfx="";
                    $pkx="";         
                     
           foreach ($data as $dat){
                   if($dat['icon']==11){  $pmx=$dat['value'];$pmx1= $dat['name'];}// 'Цена п.м.'; 
                   if($dat['icon']==12){  $cenx=$dat['value'];$cenx1= $dat['name'];}// 'Цена комплекта';
                   if($dat['icon']==13){  $stilx=$dat['value'];$stilx1= $dat['name'];}// 'Стиль';
                   if($dat['icon']==14){  $mfx=$dat['value'];$mfx1= $dat['name'];}//'Материал фасада';
                   if($dat['icon']==15) { $pkx=$dat['value'];$pkx1= $dat['name'];}//'Покрытие';
          }
                    ?>
        <li class="<?php echo $model instanceof \app\modules\catalog\models\Category ? 'category' : 'product'; ?>">
            <a href="<?php echo $model->page->createUrl(); ?>" class="bwWrapper">
			<?php $a=CHtml::image($model->getFileUrl('s'));
				  $b=CHtml::encode($model->title);
				  switch ($_SERVER['REQUEST_URI']) {
					case '/catalog/dveri-i-dveri':{
						 switch ($b){
							case 'Dariano':{
								$b= 'Межкомнатные двери «Dariano»';
								break;
							}
							case 'Практика':{
								$b= 'Межкомнатные двери «Практика»';
								break;
							}
							case 'Блок - Мастер':{
								$b= 'Межкомнатные двери «Блок - Мастер»';
								break;
							}
						}
						break;
					}
					case '/catalog/dveri-i-dveri/doriana':{
						switch ($b){
							case 'Серийная коллекция':{
								$b= 'Серийная коллекция «Dariano»';
								break;
							}
							case 'Премиум коллекция':{
								$b= 'Премиум коллекция «Dariano»';
								break;
							}
							case 'Цельностеклянные':{
								$b= 'Цельностеклянная коллекция «Dariano»';
								break;
							}
						}
						break;
					}
					case '/catalog/dizayn-interera':{
						$b='Дизайн интерьера. '.$b;
						break;
					}
					case '/catalog/nashi-raboty/kuhni/fasady-massiv':{
						switch ($b){
							case 'Наше производство':{
								$b= 'Фасады из массива дерева';
								break;
							}
							case 'Итальянское производство':{
								$b= 'Элитные фасады';
								break;
							}
						}
					}	
					case '/catalog/garderobnye-komnaty':{
						switch ($b){
							case 'Aristo':{
								$b= 'Гардеробная система Aristo';
								break;
							}
							case 'Elfa':{
								$b= 'Гардеробная система Elfa';
								break;
							}
						}
					}
					}
				   $a = preg_replace('#\<img src=(.*) alt=""#','<img src=$1' .' alt="'. $b .'" title= "'.$b .'"',$a);
				  ?>
	            <span class="img"><?php if ($model->hasFile('s')) echo $a; ?></span>
                   <div class="item__show">
                        <input type="button" class="item__btn" value="Посмотреть">
                      </div>
                <span class="text"><?php echo CHtml::encode($model->title); ?></span>
            </a>
       <?php if(!$categories){ ?>
        <div class="params-tovar-catalog">
            <ul class="params-tovar-catalog_ul">
          <?php if(!empty($pmx)){ ?>      <li><span>  <?php  echo $pmx1; ?></span><i><?php echo $pmx; ?></i> </li> <?php }?>
           <?php if(!empty($stilx)){ ?>     <li><span><?php echo $stilx1; ?></span> <i><?php echo $stilx;  ?></i></li> <?php }?>
           <?php if(!empty($mfx)){ ?>     <li><span><?php echo $mfx1; ?></span> <i><?php echo $mfx; ?></i></li> <?php }?>
           <?php if(!empty($pkx)){ ?>     <li><span><?php echo $pkx1; ?></span> <i><?php echo $pkx; ?></i></li> <?php }?>

            </ul>
		         <?php if(!empty($pmx)) { ?>
             <button type="button" id="send-formx" class="btn-main btn15 params-form<?php echo ($model->id); ?>" data-toggle="modal" data-target="#myModal">
                        Хочу такую кухню
                    </button> 
               <script>
                   $(".params-form<?php echo ($model->id); ?>").click(function(){
                        $('.mod-inp-name').val("<?php echo CHtml::encode($model->title); ?>");
                        $('.mod-inp-cena').val("<?php echo $cenx; ?>");
                       // $('.inp-form-img7').html('<a href="<?php echo $model->page->createUrl(); ?>"><?php if ($model->hasFile('s')) echo $a; ?></a>');
                        $('.inp-form-img7').html('<?php if ($model->hasFile('s')) echo $a; ?>');
                        $('.inp-form-text1').text("<?php echo CHtml::encode($model->title); ?>");
                       $('.inp-form-text2').text("<?php echo $pmx; ?> р. пог.метр" );
                    })
               </script>
           
           <?php }?>	
        </div> 
	   <?php } ?>	
        </li>
        <?php endforeach; ?>
    </ul>
</div>
<?php
if (!empty($pages) && $pages->pageCount > 1):
    $nums = array(9); //array(9,12,15)
    $selected = isset($_GET['num']) ? (int)$_GET['num'] : 9;
?>
<!--<div class="filter">
    <ul>
        <li class="title">Показывать по</li>
        <?php //foreach ($nums as $num): ?>
        <li<?php //if ($selected == $num) echo ' class="selected"'; ?>><?php //echo CHtml::link($num, $ui->page->createUrl(array('num'=>$num))); ?></li>
        <?php //endforeach; ?>
    </ul>
</div>-->
<div class="pager bottom">
    <?php $ui->pager($ui->page, array('pages'=>$pages)); ?>
</div>
<?php endif; ?>
