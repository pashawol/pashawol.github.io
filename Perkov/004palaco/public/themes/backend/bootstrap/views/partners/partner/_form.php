<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
echo $form->renderBegin();

if (!$form->getModel()->getIsNewRecord())
    echo '<p>', CHtml::image($form->getModel()->getFileUrl(), '', array('style'=>'max-height: 100px;')), '</p>';

$ui->formTabs(array(
    'tabs'=>array(
        array(
            'label'=>'Партнёр',
            'active'=>true,
            'content'=>
                $form['name'].
                $form['file'].
                $form['url'].
                $form['description'].
                $form['orderPosition'],
        ),
    ),
));

echo
    $form->renderButtons(),
    $form->renderEnd();