<?php
/**
 * @var \siix\backend\user\controllers\UserController $this
 * @var \app\backend\components\UI $ui
 * @var \siix\user\models\User $model
 */
$ui->pageName = 'Пользователи';
$ui->breadcrumbs = array('Пользователи');
$ui->menu = array(
    array('label'=>'Добавить пользователя', 'url'=>array('create')),
);
$ui->flash();
$ui->grid(array(
    'type'=>'striped bordered condensed',
    'dataProvider'=>$model->search(),
    'filter'=>$model,
    'columns'=>array(
        array(
            'name'=>'id',
            'htmlOptions'=>array('style'=>'width: 100px;'),
        ),
        'username',
        'email',
        array(
            'name'=>'status',
            'value'=>'$data->getStatusLabel()',
            'filter'=>$model->statusLabels(),
        ),
        array(
            'name'=>'last_visit_ip',
            'value'=>function($data) use ($ui) {
                /** @var \siix\user\models\User $data */
                $ip = $data->getLastVisitIpStr();
                if ($ip)
                    return $ip.' '.CHtml::link(CHtml::image($ui->getThemeFileUrl('images/info.png')), 'http://ipgeobase.ru/?address='.$ip, array('target'=>'_blank', 'title'=>'Информация о IP адресе'));
                else
                    return '';
            },
            'type'=>'raw',
        ),
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{view}',
        ),
    ),
));