<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\base\models\TextPage $model
 */
$ui->pageName = 'Редактировать страницу';
$ui->createBreadcrumbs($model->page);
$ui->menu = array(
    array('label'=>'Добавить подстраницу', 'url'=>array('textPage/create', 'parent'=>$model->id), 'icon'=>'plus'),
);
$ui->flash();

echo $form->renderBegin();

$ui->tabs(array(
    'tabs'=>array(
        array(
            'label'=>'Страница',
            'active'=>true,
            'content'=>
                $form['page']['title'].
                $form['text'],
        ),
        array(
            'label'=>'SEO',
            'content'=>$form['page']['seo'],
            'visible'=>$form['page']['seo']->getVisible(),
        ),
    ),
));

echo
    $form->renderButtons(),
    $form->renderEnd();