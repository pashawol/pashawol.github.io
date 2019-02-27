<section id="news">
	<div class="news_header">
	    <h2>Полезные статьи</h2>
	    <a class="all" href="/news">Все полезные статьи</a>
	</div>
    <?php foreach ($models as $model): ?>
    <div class="block">
	    <div class="block_content">
	        <span><?php echo app()->dateFormatter->formatDateTime($model->page->getUnixPublishTime(), 'long', null); ?></span>
	        <?php echo CHtml::link(CHtml::encode($model->page->title), $model->page->createUrl()); ?>
	        <p><?php echo CHtml::encode(\sii\utils\StringHelper::cutText($model->short_text, 150)); ?></p>
	    </div>
    </div>
    <?php endforeach; ?>
	<div class="clr"></div>
</section>