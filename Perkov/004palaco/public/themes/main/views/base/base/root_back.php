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

<div id="indexServices">
    <ul>
        <li>
            <a href="/konkurentnye-preimuschestva">
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
        <li>
            <a href="http://palazo.ru/actions/besplatnyy-vyzov-zamerschika">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-2.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-2-hover.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Бесплатный вызов замерщика</span>
                    <span class="content">Все замеры в нашей студии осуществляются абсолютно бесплатно.</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
        <li>
            <a href="http://palazo.ru/actions/besplatnyy-dizayn-proekt">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-3.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-3-hover.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Бесплатный дизайн-проект</span>
                    <span class="content">Палаццо идёт Вам на встречу и предлагает наши услуги по проектированию дизайна вашей мебели абсолютно бесплатно</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
        <li>
            <a href="http://palazo.ru/actions/sobstvennoe-proizvodstvo">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-4.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-4-hover.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Собственное производство</span>
                    <span class="content">Для обеспечения тщательного контроля качества мы приобрели собственные производственные линии.</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
        <li>
            <a href="http://palazo.ru/actions/korotkie-sroki-izgotovleniya">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-5.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-5-hover.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Короткие сроки изготовления</span>
                    <span class="content">Благодаря собственному производству вы получаете максимально сжатые сроки производства вашего заказа!</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
        <li>
            <a href="http://palazo.ru/actions/besplatnaya-dostavka-i-ustanovka">
                <span class="img">
                    <span class="default"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-6.png'); ?>" alt=""/></span>
                    <span class="hover"><img src="<?php echo $ui->getThemeFileUrl('images/services-ico-6-hover.png'); ?>" alt=""/></span>
                </span>
                <span class="text">
                    <span class="title">Бесплатная доставка и установка</span>
                </span>
                <span class="clr"></span>
            </a>
        </li>
    </ul>
</div>
<div class="clr"></div>

<?php $ui->widget('partners:components\PartnersWidget'); ?>

<?php $ui->widget('news:components\NewsWidget', array('num'=>3)); ?>