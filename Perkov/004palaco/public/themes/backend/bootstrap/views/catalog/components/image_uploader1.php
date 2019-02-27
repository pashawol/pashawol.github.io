<?php
/**
 * PhotoUploader widget view.
 * @var \app\backend\modules\catalog\components\Uploader $this
 * @var \app\backend\components\UI $ui
 */
$containerId = $this->getId();
$urlList = $this->urlList;
$urlDelete = $this->urlDelete;
$urlUpdate = $this->urlUpdateSort;
$initSort = $this->files ? 'var sortInit = true; $("#' . $containerId . '").sortable({update: updateSort});' : 'var sortInit = false;';
$csrfTokenName = app()->getRequest()->csrfTokenName;
$csrfToken = app()->getRequest()->csrfToken;
$js = <<<JS
(function($) {
    var container = $('#$containerId');
    var uploader = container.uploader('plupload');

	var updateSort = function() {
	    var data = $(this).sortable('serialize');
	    if (data)
	    	$.post('$urlUpdate', data + '&$csrfTokenName=$csrfToken');
	};

    $initSort

    container.uploader('fileAddCallback', function(data) {
        this.append('<li id="photo-'+data.id+'" data-id="'+data.id+'"><a href="'+data.imgBig+'" target="_blank"><img src="'+data.imgSmall+'" alt="" /></a><a href="#" title="Удалить" class="remove"><i class="icon-remove"></i></a></li>');
    });

    uploader.bind('FilesAdded', function(up, files) {
        if (files.length > 0)
        {
            uploader.start();
            $('#$containerId-progress').parent().show();
        }
        up.refresh();
    });

    uploader.bind('UploadProgress', function(up, file) {
        var percent = up.total.percent+'%';
        $('#$containerId-progress').html(percent).css('width', percent);
    });

    uploader.bind('FileUploaded', function(up, file, response) {
        var data = $.parseJSON(response.response);
        container.uploader('fileAdd', data);
    });

    uploader.bind('UploadComplete', function(up, files) {
        $('#$containerId-progress').html('Все изображения загружены.').parent().removeClass('active');
        if (!sortInit) {
        	container.sortable({update: updateSort});
        }
    });

    container.on('click', 'a.remove', function() {
        if (confirm('Вы действительно хотите удалить это изображение?'))
        {
            $.get('$urlDelete', {id: $(this).parent().data('id')});
            $(this).parent().remove();
        }
        return false;
    });
    
    $('input.inpalt').on('change',function(){
        //alert()
         // val idx = $(this).data("id");
         // val datx = $(this).val();

           $.post(
              "upd_alt1.php",
              {
                param1: $(this).data("id"),
                param2: $(this).val()
              },
               onAjaxSuccess
                 );

        })

        function onAjaxSuccess(data)
            {
             // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
             //alert(data);
            } 

})(jQuery);


JS;
?>

<button id="<?php echo $containerId; ?>-select-files" href="#" class="btn pull-left">Выбрать файлы...</button>
<div class="progress progress-striped active pull-right" style="width: 80%; margin-top: 5px;"><div id="<?php echo $containerId; ?>-progress" class="bar"></div></div>

<div class="clear"></div>

<?php
echo CHtml::opentag('ul', array('id' => $containerId, 'class' => 'images-sortable'));
foreach ($this->files as $file) {
    // print_r($file);
	echo CHtml::tag('li', array('id' => 'photo-' . $file->id, 'data-id' => $file->id), CHtml::link(CHtml::image($file->getFileUrl('s')), $file->getFileUrl('b'), array('target' => '_blank')).'<a href="#" title="Удалить" class="remove"><i class="icon-remove"></i></a>
        <input class="inpalt"  data-id="'.$file->id.'"  name =alt-'.$file->id.' value="'.$file->alt.'" size="30" />
        ');
}
echo CHtml::closeTag('ul');
?>

<?php
cs()->registerCoreScript('jquery.ui')
	->registerScript($this->getId().'.uploader', $js);
?>