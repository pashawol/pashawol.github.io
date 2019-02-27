<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \app\modules\catalog\models\Category $model
 */
 $model = $form->getModel(); //добавил
echo $form->renderBegin();

if ($form->getModel()->hasFile('s'))
    echo \CHtml::image($form->getModel()->getFileUrl('s'), '', array('style'=>'margin-bottom: 15px;'));

$ui->formTabs(array(
    'tabs'=>array(
        array(
            'label'=>'Категория',
            'active'=>true,
            'content'=>
                $form['page']['title'].
                $form['file'].
                $form['text'].
                $form['featured'].
                $form['page']['orderPosition'],
        ),
		        //добавил
        array(
            'label'=>'Верхний_банер',
               'content'=>
               $form['textx'].
               $ui->widget('catalog:components\Uploader1', array(
                'model'=>$model,
                'files'=> $model->getIsNewRecord() ? Siix::model('catalog:CanegoryImage')->findAllByToken(app()->getSession()->getSessionID()) : $model->images,
            ), true),
        ),
        array(
            'label'=>'SEO',
            'content'=>$form['page']['seo'],
        ),
        array(
            'label'=>'URL',
            'content'=>$form['page']['url'],
        ),
    ),
));

echo
    $form->renderButtons(),
    $form->renderEnd();