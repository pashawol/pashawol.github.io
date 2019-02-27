<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\user\models\User $model
 * @var \sii\web\form\Form $form
 */
$ui->pageName = 'Редактировать пользователя';
$ui->breadcrumbs = array(
    'Пользователи'=>array('list'),
    $model->username=>array('view', 'id'=>$model->id),
    $ui->pageName,
);
$ui->menu = array(
    array('label'=>'Информация о пользователе', 'url'=>array('view', 'id'=>$model->id)),
);
/*
if (\Yii::app()->getUser()->checkAccess('user.user.delete', array('id'=>$model->id)))
    $ui->menu[] = array('label'=>'Удалить пользователя', 'url'=>array('delete', 'id'=>$model->id), 'htmlOptions'=>array('class'=>'fs_noprompt', 'confirm'=>'Вы действительно хотите удалить этого пользователя?'));
*/
$ui->flash();

echo $form->renderBegin();

$ui->formTabs(array(
    'tabs'=>array(
        array(
            'label'=>'Информация',
            'active'=>true,
            'content'=>
                $form['email'].
                $form['backend'],
        ),
        array(
            'label'=>'Новый пароль',
            'content'=>
                $form['newPassword'].
                $form['verifyNewPassword'],
        ),
    ),
));

echo
    $form->renderButtons(),
    $form->renderEnd();