<?php $ui->beginContent('//layouts/main'); ?>
<div class="row">
	<div class="span3">
		<?php $ui->pageMenu(); ?>
	</div>
	<div class="span9">
        <?php
        if ($ui->menu)
            $ui->buttons(array(
                'buttons'=>$ui->menu,
                'htmlOptions'=>array(
                    'class'=>'operations pull-right',
                ),
            ));
        ?>
        <h2><?php echo $ui->pageName; ?></h2>
		<?php echo $content; ?>
	</div>
</div>
<?php $ui->endContent(); ?>