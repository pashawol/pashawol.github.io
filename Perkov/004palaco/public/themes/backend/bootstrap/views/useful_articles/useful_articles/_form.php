<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
echo $form->renderBegin();

$ui->formTabs(array(
    'tabs'=>array(
        array(
            'label'=>'Полезная статья',
            'active'=>true,
            'content'=>
                $form['page']['title'].
                $form['short_text'].
                $form['text'],
        ),
        array(
            'label'=>'Настройки',
            'content'=>
                $form['page']['publish'].
                $form['page']['publish_time'],
        ),
        array(
            'label'=>'SEO',
            'content'=>$form['page']['seo'],
            'visible'=>$form['page']['seo']->getVisible(),
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

$js = <<<JS
$('form .field_publish input').change(function(){
    $('form .field_publish_time').toggle(this.checked);
}).change();
JS;
$ui->getCs()->registerScript('publish_time', $js);