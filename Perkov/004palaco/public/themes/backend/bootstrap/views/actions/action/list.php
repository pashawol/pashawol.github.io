<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\base\models\Page $page
 * @var \CActiveDataProvider $dataProvider
 */
$ui->pageName = $page->title;
$ui->createBreadcrumbs($page);
$ui->menu = array(
    array('label'=>'Добавить акцию', 'url'=>array('create'), 'icon'=>'plus'),
    array('label'=>'Редактировать страницу акций', 'url'=>array('page/update')),
);
$ui->flash();
$ui->grid(array(
    'id'=>'action-grid',
    'type'=>'striped bordered condensed',
    'dataProvider'=>$dataProvider,
    'enableSorting'=>false,
    'columns'=>array(
        array(
	        'name'=>'title',
	        'value'=>'CHtml::link(CHtml::encode($data->title), $data->page->getRoute())',
	        'type'=>'raw',
        ),
        array(
            'class'=>'zii.widgets.grid.CCheckBoxColumn',
            'headerTemplate'=>'На главной',
            'headerHtmlOptions'=>array(
                'class'=>'action-list-col-active',
            ),
            'htmlOptions'=>array(
                'class'=>'action-list-cell-active',
            ),
            'checked'=>'$data->getIsActive()',
            'value'=>'$data->id',
            'selectableRows'=>1,
        ),
        array(
            'class'=>'bootstrap.widgets.TbButtonColumn',
            'template'=>'{delete}',
        ),
    ),
));

$url = $this->createUrl('active');
$csrfTokenName = app()->getRequest()->csrfTokenName;
$csrfToken = app()->getRequest()->csrfToken;
$js = <<<JS
$(document).on('change', '.action-list-cell-active input', function() {
	$.post('$url', {'$csrfTokenName': '$csrfToken', id: this.value, active: this.checked ? '1' : '0'});
});
JS;
cs()->registerScript('active', $js);