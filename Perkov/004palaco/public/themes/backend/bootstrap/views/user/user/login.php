<?php
/**
 * @var \app\backend\components\UI $ui
 * @var \siix\user\models\LoginForm $model
 */
$this->layout = 'login';
?>

<div id="login">

    <h2>Вход</h2>

    <?php echo CHtml::beginForm(); ?>

        <div>
            <?php echo CHtml::activeLabel($model, 'username'); ?>
            <?php echo CHtml::activeTextField($model, 'username', array('class'=>'text')); ?>
        </div>

        <div>
            <?php echo CHtml::activeLabel($model, 'password'); ?>
            <?php echo CHtml::activePasswordField($model, 'password', array('class'=>'text')); ?>
        </div>

        <div class="captcha"<?php if (!$model->getCaptchaRequired()) echo ' style="display:none;"'; ?>>
            <?php
            echo CHtml::activeLabel($model, 'verifyCode');
            $ui->widget('\app\components\Captcha');
            echo '<span class="refresh">Нажмите на картинку, чтобы обновить код.</span>';
            echo CHtml::activeTextField($model, 'verifyCode', array('class'=>'text'));
            ?>
        </div>

        <?php if ($model->hasErrors()) echo CHtml::errorSummary($model, ''); ?>

        <div class="buttons">
            <?php echo CHtml::submitButton('Войти')."\n"; ?>
        </div>

    <?php echo CHtml::endForm()."\n"; ?>

</div>
