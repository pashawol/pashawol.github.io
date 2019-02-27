
<div id="skitter" class="box_skitter box_skitter_large">
    <ul>
        <?php foreach ($models as $model): ?>
<!--         <li>
            <img src="<?php echo $model->getFileUrl('b'); ?>" alt="" width="620" height="370" />
            <?php if ($model->description): ?><div class="label_text"><p><?php echo nl2br(CHtml::encode($model->description)); ?></p></div><?php endif; ?>
        </li> -->
        <li>
          <a href="<?php echo $model->description; ?>"> 
            <img src="<?php echo $model->getFileUrl('b'); ?>" alt="" width="620" height="370" />
          </a>  
            <?php if ($model->description): ?><div class="label_text"><p><?php echo nl2br(CHtml::encode($model->description)); ?></p></div><?php endif; ?>
       </li> 
        
        <?php endforeach; ?>
    </ul>
</div>
 
<?php
/**
 * @var $ui \app\components\UI
 */
$js = <<<JS
$('#skitter').skitter({
     numbers_align: 'center',
    dots: true,
    animation: 'hideBars',
    auto_play: true,
    interval: 3500,
    progressbar: false,
    label: false
});
JS;
cs()->registerCssFile($ui->getThemeFileUrl('css/skitter.css'))
    ->registerCoreScript('jquery')
    ->registerScriptFile($ui->getThemeFileUrl('js/jquery.easing.1.3.js'))
    ->registerScriptFile($ui->getThemeFileUrl('js/jquery.skitter.min.js'))
    ->registerScript('slider', $js);
?>