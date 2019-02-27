<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="ru" />
    <title>Управление сайтом</title>
    <?php Yii::app()->bootstrap->register(); ?>
    <link rel="stylesheet" type="text/css" href="<?php echo \Yii::app()->theme->baseUrl; ?>/css/main.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo \Yii::app()->theme->baseUrl; ?>/css/styles.css?v2" />
</head>

<body>

<div class="container" id="page">

        <?php $ui->navbar(array(
        'type'=>'inverse',
		'fixed'=>false,
		'brand'=>Yii::app()->name,
		'brandUrl'=>'/',
		'items'=>array(
			array(
				'class'=>'bootstrap.widgets.TbMenu',
				'items'=>array(
					array('label'=>'Стартовая страница', 'url'=>array('/site/index')),
					array('label'=>'Настройки сайта', 'url'=>array('/param/param/list')),
                    array('label'=>'Пользователи', 'url'=>array('/user/user/list')),
				),
			),
			array(
				'class'=>'bootstrap.widgets.TbMenu',
				'htmlOptions'=>array('class'=>'pull-right'),
				'items'=>array(
					array('label'=>'Выход', 'url'=>array('/user/user/logout'), 'linkOptions'=>array('confirm'=>'Вы действительно хотите выйти из системы?')),
				),
			),
		),
	)); ?>

    <?php $ui->breadcrumbs(array(
        'homeLink'=>\CHtml::link('Старт', array('/site/index')),
    )); ?>

    <?php echo $content; ?>

    <div class="clear"></div>
	<div id="push"></div>

</div><!-- page -->

<div class="container">
    <div class="span14" id="footer">
        <p class="site-dev">
            <a href="http://ien-systems.ru" target="_blank"><img src="<?php echo $ui->getThemeFileUrl('images/ien.png'); ?>" width="36" height="36" alt="" /></a>
            &copy; <?php echo date('Y'); ?> <a href="http://ien-systems.ru" target="_blank">«IEN SYSTEMS»</a>
        </p>
    </div><!-- footer -->
</div>

</body>
</html>
