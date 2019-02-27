<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \sii\web\form\Form $form
 */
echo $form->renderBegin();
$model = $form->getModel();

if ($form->getModel()->hasFile('s'))
    echo \CHtml::image($form->getModel()->getFileUrl('s'), '', array('class'=>'action-img', 'style'=>'margin-bottom: 15px;'));

$ui->formTabs(array(
    'tabs'=>array(
        array(
            'label'=>'Страница',
            'active'=>true,
            'content'=>
                $form['page']['title'].
                $form['file'].
                $form['text'].
                $form['page']['orderPosition'],
        ),
        array(
            'label'=>'На главной',
            'content'=>
                $form['m_title'].
                $form['short_text'].
                $form['active'].
                $form['finish_time'],
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

$csrfTokenName = app()->getRequest()->csrfTokenName;
$csrfToken = app()->getRequest()->csrfToken;
$js = <<<JS
$('.delete-img').click(function() {
	if (confirm('Вы действительно хотите удалить текущее изображение?')) {
		var link = $(this);
		$.post(this.href, {'$csrfTokenName': '$csrfToken'}, function() {
			link.remove();
			$('.action-img').remove();
		});
	}
	return false;
});
JS;
cs()->registerScript('delete-img', $js);
