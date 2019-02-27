<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\backend\base\models\BackendAction $model
 */
$ui->buttons(array(
    'buttons'=>array(
        array('label'=>'Добавить новость', 'url'=>array('/news/news/create'), 'icon'=>'file'),
        array('label'=>'Слайды', 'url'=>array('/slide/list'), 'icon'=>'film'),
        array('label'=>'Баннеры', 'url'=>array('/banners/banner/list'), 'icon'=>'star'),
        array('label'=>'Текст предложения', 'url'=>array('/site/request'), 'icon'=>'thumbs-up'),
    ),
    'htmlOptions'=>array(
        'style'=>'margin-bottom: 20px;',
    ),
));
?>

<p>Выберите страницу в левом меню, чтобы приступить к её редактированию.</p>

<h4 style="margin-top: 50px;">Недавние действия <?php echo CHtml::link('История действий', array('base/base/actionLog'), array('class'=>'pull-right', 'style'=>'margin-left: 5px; font-size: 12px; font-weight: normal;')); ?></h4>

<?php $ui->widget('base:components\ActionLog', array('enablePagination'=>false, 'itemPerPage'=>15)); ?>