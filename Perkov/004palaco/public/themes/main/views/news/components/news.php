	
<section id="news1" class="news">
	    <h3>Новости</h3>
	    <a class="news__all" href="/news">Все новости</a>
    <div class="news__list row">
    <?php foreach ($models as $model): ?>
    	    <div class="col-md-4 col-sm-12 new">
	        <span class="new__date"><?php echo app()->dateFormatter->formatDateTime($model->page->getUnixPublishTime(), 'long', null); ?></span>
                <h4 class="new__title"><?php echo CHtml::link(CHtml::encode($model->page->title), $model->page->createUrl()); ?></h4>
	        <p class="new__text"><?php echo CHtml::encode(\sii\utils\StringHelper::cutText($model->short_text, 150)); ?></p>
	    </div>
        <?php endforeach; ?>
    </div>
	<div class="clr"></div>
</section>
