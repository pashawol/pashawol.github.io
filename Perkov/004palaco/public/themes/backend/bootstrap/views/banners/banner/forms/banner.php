<?php

return array(
    'attributes'=>array(
        'class'=>'well',
        'enctype'=>'multipart/form-data',
    ),
    'elements'=>array(
        'position'=>array(
            'type'=>'dropdownlist',
            'items'=>Siix::model('banners:Banner')->positionOptions(),
        ),
        'name'=>array(
            'type'=>'text',
            'maxlength'=>100,
            'attributes'=>array(
                'class'=>'span6',
            ),
        ),
        'file'=>array(
            'type'=>'file',
            'visible'=>true,
            'hint'=>'Изображение или swf файл.',
        ),
        'url'=>array(
            'type'=>'text',
            'maxlength'=>100,
            'attributes'=>array(
                'class'=>'span6',
            ),
        ),
        'current'=>array(
            'type'=>'checkbox',
        ),
    ),
    'buttons'=>array(
        'save'=>array(
            'type'=>'submit',
            'label'=>'Сохранить',
            'attributes'=>array(
                'class'=>'btn btn-large',
            ),
        ),
    ),
);