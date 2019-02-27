<!--catalog\components\catalog_index-->
<div id="catalogList" class="<?php echo $this->getController()->id == 'catalog' ? 'catalog': 'index'; ?> catalog-main">
    <ul class="main-blocks">
        <?php foreach ($models as $model):
		$bb=CHtml::encode($model->title); 
		if($bb != 'Наши работы'){ 
		?>
        <li>
            <a href="<?php echo $model->page->createUrl(); ?>" class="bwWrapper">
			<?php $a=CHtml::image($model->getFileUrl('s'));
				  $b=CHtml::encode($model->title);
						 switch ($b){
							case 'Наши работы':{
								$b= 'Мебель на заказ в Костроме';
								break;
							}
							case 'Витражи и зеркала':{
								$b= 'Витражи в Костроме';
								break;
							}
							case 'Мебель из Италии':{
								$b= 'Итальянская мебель';
								break;
							}
							case 'Изделия из массива':{
								$b= 'Изделия из массива';
								break;
							}
							case 'Межкомнатные двери':{
								$b= 'Межкомнатные двери в Костроме';
								break;
							}
							case 'Итальянское производство':{
								$b= 'Элитные кухни из массива';
								break;
							}
						}
					
				  $a = preg_replace('#\<img src=(.*) alt=""#','<img src=$1' .' alt="'. $b .'" title= "'.$b .'"',$a);

				   
				?>
				<span class="img"><?php if ($model->hasFile('s')) echo $a; ?></span>
				 <?php $c=CHtml::encode($model->title);
				 switch ($c){
							case 'Итальянское производство':{
								$c= 'Кухни Италии';
								break;
							}
				 }
				 ?>
                <span class="text"><?php echo $c ?></span>
            </a>
			
        </li>
		<?php } ?>
        <?php endforeach; ?>
    </ul>
</div>
<!-- //catalog\components\catalog_index-->

<!--
<div class="separator pattern"></div>

<h2 class="h2">Наши работы</h2> 

<div class="textContainer">
        <p style="text-align: justify;">Компания «Палаццо» представляет Вам широкий выбор товаров. Здесь вы можете найти любую вещь, которая вас интересует. Ассортимент нашей дизайн-студии приятно удивит даже самого взыскательного клиента.</p>
<p style="text-align: justify;">Для подробной характеристики предмета перейдите по ссылке. Если у вас возникли вопросы, вы можете связаться с нашими менеджерами по телефонам офиса.</p>    </div>

<div id="catalogListx" class="index">
    <ul id="main-blocksx">
                
                <li>
            <a href="/kuhni" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/22_s.jpg" alt="Кухни" title="Кухни"></span>
				                 <span class="text">Кухни</span>
            </a>
        </li>
                <li>
            <a href="/nashi-raboty/shkafy-kupe" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/76_s.jpg" alt="Шкафы-купе" title="Шкафы-купе"></span>
				                 <span class="text">Шкафы-купе</span>
            </a>
        </li>
                <li>
            <a href="/catalog/nashi-raboty/garderobnye" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/465_s.jpg" alt="Гардеробные" title="Гардеробные"></span>
				                 <span class="text">Гардеробные</span>
            </a>
        </li>
                <li>
            <a href="/nashi-raboty/spalni" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/100_s.jpg" alt="Спальни" title="Спальни"></span>
				                 <span class="text">Спальни</span>
            </a>
        </li>
                <li>
            <a href="/nashi-raboty/detskie" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/109_s.jpg" alt="Детские" title="Детские"></span>
				                 <span class="text">Детские</span>
            </a>
        </li>
                <li>
            <a href="/nashi-raboty/vannye-komnaty" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/111_s.jpg" alt="Мебель для ванной комнаты" title="Мебель для ванной комнаты"></span>
				                 <span class="text">Мебель для ванной комнаты</span>
            </a>
        </li>
                <li>
            <a href="/catalog/nashi-raboty/nashi-raboty/mebel-na-zakaz" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/412_s.jpg" alt="Мебель на заказ" title="Мебель на заказ"></span>
				                 <span class="text">Мебель на заказ</span>
            </a>
        </li>
                <li>
            <a href="/nashi-raboty/myagkaya-mebel" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/547_s.jpg" alt="Мягкая мебель" title="Мягкая мебель"></span>
				                 <span class="text">Мягкая мебель</span>
            </a>
        </li>
                <li>
            <a href="/nashi-raboty/torgovoe-oborudovanie" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/categories/112_s.jpg" alt="Торговое оборудование" title="Торговое оборудование"></span>
				                 <span class="text">Торговое оборудование</span>
            </a>
        </li>
            </ul>
</div>
-->

