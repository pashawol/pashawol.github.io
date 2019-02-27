<?php
/**
 * ActionLog widget view.
 * @var \app\backend\components\UI $ui
 * @var \siix\backend\base\components\ActionLog $widget
 * @var \siix\backend\base\models\BackendAction $model
 */
$ui->grid(array(
    'id'=>'action-log',
    'type'=>'striped bordered condensed',
    'dataProvider'=>$model->search($widget->itemPerPage),
    'filter'=>$model,
    'enableSorting'=>false,
    'enablePagination'=>$widget->enablePagination,
    'summaryText'=>'',
    'emptyText'=>'Нет записей.',
    'columns'=>array(
        array(
            'name'=>'type',
            'type'=>'raw',
            'value'=>function($data) {
                $link = $data->route ? \CHtml::link($data->message, $data->route) : $data->message;
                switch ($data->type)
                {
                    case $data::TYPE_CREATE:
                        $icon ='icon-plus';
                        break;
                    case $data::TYPE_UPDATE:
                        $icon ='icon-pencil';
                        break;
                    case $data::TYPE_DELETE:
                        $icon ='icon-remove';
                        break;
                    case $data::TYPE_ARCHIVE:
                        $icon ='icon-trash';
                        break;
                    case $data::TYPE_RESTORE:
                        $icon ='icon-ok';
                        break;
                    default:
                        $icon ='icon-cog';
                }
                return \CHtml::tag('i', array('class'=>$icon, 'title'=>$data->getTypeLabel()), '').$link;
            },
            'filter'=>$model::typeLabels(),
            'htmlOptions'=>array(
                'class'=>'type'
            ),
        ),
        array(
            'type'=>'raw',
            'name'=>'user_id',
            'value'=>'$data->user ? $data->user->username : ""',
            'filter'=>\CHtml::listData(\Siix::model('user:User')->backend()->findAll(), 'id', 'username'),
            'htmlOptions'=>array(
                'class'=>'user'
            ),
        ),
        array(
            'name'=>'ip',
            'filter'=>false,
            'htmlOptions'=>array(
                'class'=>'ip'
            ),
        ),
        array(
            'name'=>'timeHuman',
            'filter'=>false,
            'htmlOptions'=>array(
                'class'=>'time',
            ),
        ),
    ),
));