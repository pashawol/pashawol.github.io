<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\feedback\models\Form $model
 * @var \CActiveForm $form
 */
?>
<div style="display: none;">
    <?php
        $ui->beginWidget('zii.widgets.jui.CJuiDialog', array(
            'id'=>'dlg-feedback-form',
            'options'=>array(
                'title'=>'Написать нам',
                'autoOpen'=>false,
                'modal'=>true,
                'resizable'=>false,
                'draggable'=>false,
                'width'=>450,
            ),
            'cssFile'=>false,
        ));
    ?>

    <?php
    $form = $ui->beginWidget('CActiveForm', array(
        'id'=>'feedback-form',
        'enableClientValidation'=>true,
        'action'=>array('/feedback/form/submit'),
    )); ?>

    <div class="row">
        <?php echo $form->label($model, 'name'); ?>
        <?php echo $form->textField($model, 'name', array('maxlength'=>50, 'style'=>'width: 70%;')); ?>
        <?php echo $form->error($model, 'name'); ?>
    </div>

    <div class="row">
        <?php echo $form->label($model, 'email'); ?>
        <?php echo $form->textField($model, 'email', array('maxlength'=>100, 'style'=>'width: 70%;')); ?>
        <?php echo $form->error($model, 'email'); ?>
    </div>

    <div class="row">
        <?php echo $form->label($model, 'phone'); ?>
        <?php echo $form->textField($model, 'phone', array('maxlength'=>50, 'style'=>'width: 70%;')); ?>
        <?php echo $form->error($model, 'phone'); ?>
    </div>

    <div class="row">
        <?php echo $form->label($model, 'text'); ?>
        <?php echo $form->textArea($model, 'text', array('rows'=>5, 'cols'=>50)); ?>
        <?php echo $form->error($model, 'text'); ?>
    </div>

    <div class="row captcha">
        <div style="float: left;"><?php $ui->widget('CCaptcha', array('captchaAction'=>'/base/base/captcha', 'clickableImage'=>true, 'showRefreshButton'=>false, 'imageOptions'=>array('title'=>'Нажмите на картинку, чтобы обновить код'))); ?></div>
        <p>Пожалуйста, введите символы, изображенные на картинке.<br />Нажмите на картинку, чтобы обновить код.</p>
        <div style="clear: both;"></div>
        <?php echo $form->textField($model, 'verifyCode'); ?>
        <?php echo $form->error($model, 'verifyCode'); ?>
    </div>

    <div class="row buttons">
        <?php echo CHtml::ajaxSubmitButton('Отправить',
            array('/feedback/form/submit'),
            array('dataType'=>'json', 'success'=>'js:function(data){alert(data.message);if(data.status==1){document.getElementById("feedback-form").reset();$("#dlg-feedback-form").dialog("close");}}')
        ); ?>
    </div>
    <?php $ui->endWidget('CActiveForm'); ?>
    <?php $ui->endWidget('zii.widgets.jui.CJuiDialog'); ?>
</div>

<?php
$js = <<<JS
$('{$this->selector}').click(function() {
    $('#dlg-feedback-form').dialog('open');
    return false;
});
$('.buttons input').button();
JS;
cs()->registerScript('feedback-form', $js)
    ->registerCssFile($ui->getThemeFileUrl('css/jquery-ui/jquery-ui.min.css'));
?>