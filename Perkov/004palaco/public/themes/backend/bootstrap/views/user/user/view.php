<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\user\models\User $model
 */
$ui->pageName = $model->username;
$ui->breadcrumbs = array(
    'Пользователи'=>array('list'),
    $model->username,
);
$ui->menu = array(
    array('label'=>'Редактировать пользователя', 'url'=>array('update', 'id'=>$model->id)),
);
if ($model->id != \Yii::app()->getUser()->id)
{
    $ui->menu[] = $model->getIsBanned()
        ? $ui->menuPostButton(array('label'=>'Разблокировать пользователя', 'url'=>array('unban', 'id'=>$model->id)))
        : $ui->menuPostButton(array('label'=>'Заблокировать пользователя', 'url'=>array('ban', 'id'=>$model->id), 'htmlOptions'=>array('confirm'=>'Заблокировать пользователя?')));
}
$ui->flash();

echo '<p>', CHtml::image($model->getAvatarUrl()), '</p>';

$ip = $model->getLastVisitIpStr();
if ($ip)
    $ip = $ip.' '.CHtml::link(CHtml::image($ui->getThemeFileUrl('images/info.png')), 'http://ipgeobase.ru/?address='.$ip, array('target'=>'_blank', 'title'=>'Информация о IP адресе'));
else
    $ip = '';

$ui->tbWidget('DetailView', array(
    'data'=>$model,
    'attributes'=>array(
        'id',
        'username',
        'email',
        array(
            'name'=>'last_visit_ip',
            'value'=>$ip,
            'type'=>'raw',
        ),
    ),
));