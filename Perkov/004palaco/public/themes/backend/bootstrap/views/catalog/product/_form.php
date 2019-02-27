<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \app\modules\catalog\models\Product $model
 ** @var \app\modules\catalog\models\Product $model
  */
$model = $form->getModel();
//$model1 = $form->getModel();
echo $form->renderBegin();

if ($model->hasFile('s'))
    echo CHtml::image($model->getFileUrl('s'), '', array('style'=>'margin-bottom: 10px;'));

$tabs = array(
    array(
        'label'=>'Товар',
        'active'=>true,
        'content'=>
            $form['page']['title'].
            $form['file'].
            $form['short_text'].
            $form['page']['orderPosition'],
    ),
    array(
        'label'=>'Изображения',
        'content'=>
            $ui->widget('catalog:components\Uploader', array(
                'model'=>$model,
                'files'=> $model->getIsNewRecord() ? Siix::model('catalog:ProductImage')->findAllByToken(app()->getSession()->getSessionID()) : $model->images,
            ), true),
        // $form['alt'] ,
    ),
        array(
        'label'=>'Изображения для цветов',
        'content'=>$ui->widget('catalog:components\Uploader2', array(
                'model'=>$model,
                'files'=> $model->getIsNewRecord() ? Siix::model('catalog:ProductImage1')->findAllByToken(app()->getSession()->getSessionID()) : $model->images1,
            ), true),
    ),
    array(
        'label'=>'Характеристики',
        'content'=>$form['params'],
    ),
);
$i = 0;
foreach ($form['tabs']->getElements() as $tab)
{
    $tabs[] = array(
        'label'=>$tab->model->name,
        'content'=>CHtml::link('Удалить', '#', array('submit'=>array('deleteTab', 'id'=>$tab->model->id), 'class'=>'tab_delete_link', 'confirm'=>'Удалить вкладку?')).$tab,
    );
}
$tabs[] = array(
    'label'=>'SEO',
    'content'=>$form['page']['seo'],
);
$tabs[] = array(
    'label'=>'URL',
    'content'=>$form['page']['url'],
);

$ui->formTabs(array(
    'tabs'=>$tabs,
));

echo
    $form->renderButtons(),
    $form->renderEnd();