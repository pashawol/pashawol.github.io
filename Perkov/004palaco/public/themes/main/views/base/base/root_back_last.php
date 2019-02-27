<?php
/**
 * @var \app\components\UI $ui
 * @var \siix\base\models\TextPage $model
 */
$this->layout = '//layouts/main';
$ui->seo($model->page);
?>
<?php $ui->widget('actions:components\ActionWidget'); ?>
<?php $ui->widget('\app\components\SlidesWidget'); ?>

<div class="clr"></div>
<div class="separator pattern"></div>

<?php $ui->widget('catalog:components\CatalogIndexWidget', array('featuredOnly'=>true)); ?>

<div class="separator"></div>

<section id="indexAbout">
    <?php echo $model->text; ?>
</section>
 
<section id="indexServices">
    <ul>
        <li class="blockpr9">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Рассрочка платежа и кредит</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr2">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Бесплатный дизайн проект в нескольких вариантах</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr5">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Редкие и инновационные решения дизайна</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr4">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Длительный срок нахождения на рынке (более 7 лет)</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr10">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Профессиональная подготовка и обучение специалистов</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr6">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Изготовление нестандартных элементов</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr8">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Большое количество декоративных элементов и возможность их использования</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr11">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Использование высококачественных материалов и фурнитуры</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr3">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Экологически чистые материалы для фасадов (дерево, МДФ, шпон)</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr1">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Собственное производство мебели и фасадов из массива</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr14">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Согласованная доставка</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr7">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Оптимальное соотношение цены и качества</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr15">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
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
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Гарантийное обслуживание</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr13">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Квалифицированные замерщики</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
         <li class="blockpr12">
            <a rel="nofollow" href="/konkurentnye-preimuschestva">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/img.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Расчет заявок через интернет</span>
                </span>
                <span class="clr"></span>
            </a>
        </li> 
    </ul>
</section>

<div class="clr"></div>

<?php $ui->widget('partners:components\PartnersWidget'); ?>

<?php $ui->widget('news:components\NewsWidget', array('num'=>3)); ?>