<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 * @var \siix\base\models\TextPage $model
 */
$ui->pageName = 'Редактировать страницу новостей';
$ui->createBreadcrumbs($model->page, 'Редактировать страницу');
$ui->menu = array(
    array('label'=>'Список новостей', 'url'=>$model->page->getRoute()),
    array('label'=>'Добавить новость', 'url'=>array('news/create'), 'icon'=>'plus'),
);
$ui->menuOpenNode = $model->id;
$ui->flash();

echo $form->renderBegin();

$ui->tabs(array(
    'tabs'=>array(
        array(
            'label'=>'Страница',
            'active'=>true,
            'content'=>
                $form['page']['title'].
                $form['text'].
                $form['page']['orderPosition'],
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