<?php
/**
 * @var \app\components\UI $ui
 * @var \app\modules\request\models\Form $model
 * @var \app\models\TextBlock $text
 * @var \CActiveForm $form
 */
$cookies = app()->getRequest()->getCookies();
if (isset($cookies['requestClosed']))
{
    $hidden = $cookies['requestClosed']->value == 1;
    $timeout = 0;
}
else
{
    $hidden = true;
    $timeout = $this->timeout*1000;
}
?>
<section class="actionPopup <?php echo $hidden ? 'closed' : 'open'; ?>">
    <div class="container">
        <?php echo $text->text; ?>
        <div class="btnContainer">
            <a id="request" href="#" class="btn">Заказать</a>
        </div>
        <a class="close" href="#"><span>Скрыть акцию</span> →</a>
        <a class="open" href="#"></a>
    </div>
</section>
<div id="request-popup-mask" class="popup-mask"></div>
<div class="request-form-window" id="request-form-window" style="display: none;">
    <a href="#" class="close" title="Закрыть" id="close-request-form-window"></a>
    <div id="request-form-container" class="request-form-container">
        <?php
        $form = $ui->beginWidget('CActiveForm', array(
            'id'=>'request-form',
            'enableClientValidation'=>true,
            'action'=>array('/request/form/submit'),
        )); ?>

        <div class='legend'>Заказать<br />консультацию дизайнера</div>
        
        <div class="row">
            <?php //echo $form->label($model, 'name'); ?>
            <?php echo $form->textField($model, 'name', array('maxlength'=>50, 'placeholder'=>'Ваше имя')); ?>
            <?php echo $form->error($model, 'name'); ?>
        </div>

        <div class="row" style="margin-bottom: 9px;">
            <?php //echo $form->label($model, 'email'); ?>
            <?php echo $form->textField($model, 'email', array('maxlength'=>100, 'placeholder'=>'E-mail')); ?>
            <?php echo $form->error($model, 'email'); ?>
        </div>

        <div class="row" style="margin-bottom: 13px;">
            <?php //echo $form->label($model, 'phone'); ?>
            <?php echo $form->textField($model, 'phone', array('maxlength'=>50, 'placeholder'=>'Номер телефона')); ?>
            <?php echo $form->error($model, 'phone'); ?>
        </div>

        <div class="row">
            <?php //echo $form->label($model, 'text'); ?>
            <?php echo $form->textArea($model, 'text', array('rows'=>5, 'cols'=>50, 'placeholder'=>'Комментарий')); ?>
            <?php echo $form->error($model, 'text'); ?>
        </div>

        <!--
        <div class="row captcha">
            <div style="float: left;"><?php $ui->widget('CCaptcha', array('captchaAction'=>'/base/base/captcha', 'clickableImage'=>true, 'showRefreshButton'=>false, 'imageOptions'=>array('title'=>'Нажмите на картинку, чтобы обновить код'))); ?></div>
            <p>Введите символы, изображённые на картинке. Нажмите на картинку, чтобы обновить код.</p>
            <?php echo $form->textField($model, 'verifyCode', array('placeholder'=>'Код с картинки')); ?>
            <?php echo $form->error($model, 'verifyCode'); ?>
        </div>
        -->

        <div class="row buttons">
            <?php echo CHtml::ajaxSubmitButton('Отправить',
                array('/request/form/submit'),
                array('dataType'=>'json', 'success'=>'js:function(data){alert(data.message);if(data.status==1){yaCounter23325040.reachGoal("ORDER");document.getElementById("request-form").reset();$("#close-request-form-window").click();}}'),
                array('class'=>'btn')
            ); ?>
        </div>
        <?php $ui->endWidget('CActiveForm'); ?>
    </div>
</div>
<?php
if ($timeout > 0)
    cs()->registerScript('request-timeout', 'setTimeout(function() { $("section.actionPopup a.open").click(); }, '.$timeout.');');

$js = <<<JS
$('#request').click(function() {
    $('.actionPopup').fadeOut();
    $('#request-form-window').fadeIn();
    $('#request-popup-mask').fadeIn();
    return false;
});
$('.popup-mask, #close-request-form-window').click(function(e) {
    $('#request-form-window').fadeOut();
    $('.actionPopup').fadeIn();
    $('#request-popup-mask').fadeOut();
    return false;
});

$('.popup-mask, section.actionPopup a.close').live('click', function() {
    setCookie('requestClosed', 1, {path: '/', expires: 8*3600});
    $('section.actionPopup a.close').parent().parent().animate({'right': '-228px'}, 500).find('a.open').fadeIn();
    return false;
});
$('section.actionPopup a.open').live('click', function() {
    setCookie('requestClosed', 0, {path: '/', expires: 8*3600});
    $(this).fadeOut(400).parent().parent().animate({'right': '0'}, 500);
    return false;
});
JS;
cs()->registerScript('request-form', $js);
?>