<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\TextPage $model
 */
$this->layout = '//layouts/main';
echo "<!--0-->";
$ui->seo($model->page);
?>
<!--1 base/root -->
<?php $ui->widget('\app\components\SlidesWidget'); ?>
<?php //$ui->widget('actions:components\ActionWidget'); 
?>
<?php //$ui->widget('emlf:components\EmlFormWidget');
 ?>
<div class='blok-flx'>
    <div class='size768'>
        <div class="size768__blok">
            <h3 class='h3x'>
                <span>ВСТРОЕННЫЕ КУХНИ</span><br>
                ИЗ ЭКОЛОГИЧНОГО МАТЕРИАЛА ПО ЦЕНАМ ПРОИЗВОДИТЕЛЯ
            </h3>
            <ul>
                <li>Функционально спланируем пространство </li>
                <li>Удобно разместим бытовую технику </li>
                <li>Идеально подгоним мебель к стенам и потолку</li>
            </ul>
        </div>
    </div>

    <div class="form-section">
         <div class="form-m">
              <h3>Оставить заявку</h3>
              <p>на дизайн проект</p>
              <form id="sendphp" action="send.php" method="post">
                    <input type="text" id="name" name="name" placeholder="Ваше имя">
                    <div class="errorx"  id="bthrow_error_name"></div>
                    <input type="tel" id="phone" name="phone" placeholder="Ваш телефон">
                    <div class="errorx"  id="bthrow_error_phone"></div>
                    
					<input type="submit" value="Получить дизайн проект">
					<input id="chck1" type='checkbox' name ='chck' value='1' checked='checked'>
                    <a  style="color:#aaa" href='/pokupatelu/politika'> Даю согласие на обработку персональных данных </a>
                    <div   class="throw_error errorx"></div>
              </form>
            </div>

    </div>
</div>
<!--2-->
<div class="clr"></div>
<div class="separator pattern"></div>
<!--3 root-->
<div class="promo">
        <a href="#" id="promo-prev"><img src="themes/main/images/rombl.png" alt=""></a>
        <div class="promo__list">
          <div class="promo__item">
            <img src="uploads/promo/1.png" alt="">
            <a href="#">Собственное производство мебели и фасадов из массива</a>
          </div>  
          <div class="promo__item">
            <img src="uploads/promo/2.png" alt="">
            <a href="#">Вся наша продукция сертифицирована</a>
          </div> 
          <div class="promo__item">
            <img src="uploads/promo/3.png" alt="">
            <a href="#">Экологически чистые материалы для мебели (дерево, МДФ, шпон)</a>
          </div> 
          <div class="promo__item">
            <img src="uploads/promo/4.png" alt="">
            <a href="#">Студия «Палаццо» 10 лет на рынке</a>
          </div> 
        </div>
        <a href="#" id="promo-next"><img src=" themes/main/images/rombr.png" alt=""></a>
      </div>

<!-- каталог -->
<div id="catalogList" class="index">
<h2 class="h2">Каталог</h2> 
    <ul class="main-blocks">
        <li>
            <a href="/kuhni-iz-massiva-rossii" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/products/455_s.jpg" alt="Афина" title="Афина"></span>
				                 <span class="text">Кухни из массива России</span>
            </a>
        </li> 
        <li>
            <a href="/kuhni-iz-massiva-italii" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/products/157_s.jpg" alt="Кухни из массива Италии" title="Кухни из массива Италии"></span>
				                 <span class="text">Кухни из массива Италии</span>
            </a>
        </li>
       <li>
            <a href="/kuhni-kraska" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/products/471_s.jpg" alt="Венеция" title="Венеция"></span>
				                 <span class="text">Кухни крашенные МДФ</span>
            </a>
        </li> 
		<li>
            <a href="/kuhni-iz-shpona" class="bwWrapper">
							<span class="img"><img src="/uploads/catalog/products/481_s.jpg" alt="Модель 1" title="Модель 1"></span>
				                 <span class="text">Кухни шпонированный МДФ</span>
            </a>
        </li> 
	</ul>
</div>
	
<!--4-->
<br><br>
<div class="clr"></div>
<div class="separator pattern"></div>
<!--5-->
<!--Наши работы-->
<h2 class="h2">Наши работы</h2> 
<?php $ui->widget('catalog:components\CatalogIndexWidget', array('featuredOnly'=>true)); ?>

<div class="separator"></div>

      <div class="promo promo-full container-fluid">
        <h3>Почему наша мебель не как у всех?</h3>
        <div class="promo-full__row active">
          <div class="promo__list">
            <div class="promo__item">
              <img src="uploads/promo/5.png" alt="">
              <a href="#">Бесплатный дизайн проект в нескольких вариантах</a>
            </div>  
            <div class="promo__item">
              <img src="uploads/promo/6.png" alt="">
              <a href="#">Редкие и инновационные решения дизайна</a>
            </div> 
            <div class="promo__item">
              <img src="uploads/promo/7.png" alt="">
              <a href="#">Изготовление нестандартных элементов</a>
            </div> 
            <div class="promo__item">
              <img src="uploads/promo/8.png" alt="">
              <a href="#">Оптимальное соотношение цены и качества</a>
            </div> 
          </div>
        </div>
        <div class="promo-full__row">
          <div class="promo__list">
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/9.png" alt="">
              <a href="#">Большое количество декоративных элементов и возможность их использования</a>
            </div>  
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/10.png" alt="">
              <a href="#">Рассрочка платежа и кредит</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/11.png" alt="">
              <a href="#">Профессиональная подготовка и обучение специалистов</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/12.png" alt="">
              <a href="#">Использование высококачественных материалов и фурнитуры</a>
            </div> 
          </div>
        </div>
        <div class="promo-full__row">
          <div class="promo__list">
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/13.png" alt="">
              <a href="#">Расчет заявок через интернет</a>
            </div>  
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/14.png" alt="">
              <a href="#">Квалифицированные замерщики</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/15.png" alt="">
              <a href="#">Профессиональный монтаж и согласованная доставка мебели</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/16.png" alt="">
              <a href="#">Гарантийное обслуживание</a>
            </div>
          </div>
        </div>
        <a href="#" id="promo-full-prev"><img src="uploads/arrow-left.png" alt=""></a>
        <div class="promo-full-mobile">
          <div class="promo__list">
            <div class="promo__item">
              <img src="uploads/promo/1.png" alt="">
              <a href="#">Бесплатный дизайн проект в нескольких вариантах</a>
            </div>  
            <div class="promo__item">
              <img src="uploads/promo/2.png" alt="">
              <a href="#">Редкие и инновационные решения дизайна</a>
            </div> 
            <div class="promo__item">
              <img src="uploads/promo/3.png" alt="">
              <a href="#">Изготовление нестандартных элементов</a>
            </div> 
            <div class="promo__item">
              <img src="uploads/promo/4.png" alt="">
              <a href="#">Оптимальное соотношение цены и качества</a>
            </div> 
            <div class="promo__item">
              <img src="uploads/promo/5.png" alt="">
              <a href="#">Большое количество декоративных элементов и возможность их использования</a>
            </div>  
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/6.png" alt="">
              <a href="#">Рассрочка платежа и кредит</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/7.png" alt="">
              <a href="#">Профессиональная подготовка и обучение специалистов</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/8.png" alt="">
              <a href="#">Использование высококачественных материалов и фурнитуры</a>
            </div>
            <div class="promo__item">
              <img src="uploads/promo/9.png" alt="">
              <a href="#">Расчет заявок через интернет</a>
            </div>  
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/10.png" alt="">
              <a href="#">Квалифицированные замерщики</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/11.png" alt="">
              <a href="#">Профессиональный монтаж и согласованная доставка мебели</a>
            </div> 
            <div class="col-lg-3 col-md-6 col-12 promo__item">
              <img src="uploads/promo/12.png" alt="">
              <a href="#">Гарантийное обслуживание</a>
            </div>
          </div>
        </div>
        <a href="#" id="promo-full-next"><img src="uploads/arrow-right.png" alt=""></a>
        <div class="promo-full__line"></div>
        <span class="promo-full__link" id="all-promo">Показать еще</span>
      </div>
<!-- ///////// -->
      <div class="community container-fluid">
        <div class="row justify-content-lg-around justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-12 community__block">
            <h3>Отзывы</h3>
            <div class="community__wrap">
              <a href="#" id="fb-prev"><img src=" themes/main/images/rombl.png" alt="prev"></a>
              <ul class="community__fbs" data-fbs="2">
                <li data-num="1">
                  <div class="community__fb fb">
                    <div class="fb__row-1">
                      <span>Елена Васильевна</span>
                      <span>14 сентября 2018</span>
                    </div>
                    <div class="fb__row-2">
                      <span>
                        Студия «Палаццо» предлагает клиентам 
                        высококачественную мебель в Костроме на заказ. 
                        Наше предприятие может похвастаться огромным 
                        ассортиментом и оптимизированной ценовой политикой. 
                        За долгое время работы в мебельной отрасли...
                      </span>
                    </div>
                    <div class="fb__row-3">
                      <input type="button" value="Все отзывы >">
                      <span><span class="fb-count"></span> / <span class="fb-all"></span></span>
                    </div>
                  </div>
                </li>
                <li data-num="1">
                  <div class="community__fb fb">
                    <div class="fb__row-1">
                      <span>Василий Иванович</span>
                      <span>15 ноября 2018</span>
                    </div>
                    <div class="fb__row-2">
                      <span>
                          Собственные производственные мощности «Палаццо» 
                          и колоссальный опыт нашей команды делают возможным
                          создание мебели на заказ в Костроме, которая 
                          отвечает нуждам и потребностям каждого конкретного 
                          заказчика
                      </span>
                    </div>
                    <div class="fb__row-3">
                      <input type="button" value="Все отзывы >">
                      <span><span class="fb-count"></span> / <span class="fb-all"></span></span>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="#" id="fb-next"><img src=" themes/main/images/rombr.png" alt="next"></a>
            </div>
          </div>
          <div class="col-lg-6 col-md-8 col-sm-12 community__block">
            <h3>Сертификаты</h3>
            <div class="community__wrap">
              <a href="#" id="cert-prev"><img src="themes/main/images/rombl.png" alt="prev"></a>
                <ul class="community__certs" data-certs="2">
                  <li data-num="1">
                    <div class="community__cert">
                      <img src="uploads/certs/1.png" alt="cert" class="sizeble">
                      <img src="uploads/certs/1.png" alt="cert" class="sizeble">
                    </div>
                  </li>
                  <li data-num="2">
                    <div class="community__cert">
                      <img src="uploads/certs/2.png" alt="cert" class="sizeble">
                      <img src="uploads/certs/2.png" alt="cert" class="sizeble">
                    </div>
                  </li>
                </ul>
              <a href="#" id="cert-next"><img src="themes/main/images/rombr.png" alt="next"></a>
            </div>
          </div> 
        </div>
      </div>

<div id="indexAbout">
    <?php echo $model->text; ?>
</div>

<div  id="indexServices">
    <ul>
         <li class="blockpr1">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Собственное производство мебели и фасадов из массива, шпона и мдф</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr2">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Бесплатный дизайн проект в нескольких вариантах</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr3">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Экологически чистые материалы для фасадов (дерево, МДФ, шпон)</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr4">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Длительный срок нахождения на рынке (более 7 лет)</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr5">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Редкие и инновационные решения дизайна</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr6">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Изготовление нестандартных элементов</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr7">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Оптимальное соотношение цены и качества</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr8">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Большое количество декоративных элементов и возможность их использования</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
        <li class="blockpr9">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Рассрочка платежа и кредит</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
        <li class="blockpr10">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Профессиональная подготовка и обучение специалистов</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr11">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Использование высококачественных материалов и фурнитуры</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr12">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Расчет заявок через интернет</span>
                </span>
                <span class="clr"></span>
            </a>
        </li> 
         <li class="blockpr13">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Квалифицированные замерщики</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr14">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Согласованная доставка</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>

         <li class="blockpr15">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Профессиональный монтаж мебели</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr16">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                </span>
                <span class="text">
                    <span class="title">Гарантийное обслуживание</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>


    </ul>
</div>

<div class="clr"></div>

<?php $ui->widget('partners:components\PartnersWidget'); ?>

<?php $ui->widget('news:components\NewsWidget', array('num'=>3)); ?>