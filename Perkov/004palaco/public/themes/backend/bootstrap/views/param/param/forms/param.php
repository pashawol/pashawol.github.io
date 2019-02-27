<?php

return array(
    'attributes'=>array(
        'class'=>'well',
    ),
    'elements'=>array(
        'id'=>array(
            'type'=>'text',
            'hint'=>'Идентификатор предназначен для внутреннего использования приложением.<br />Его изменение может привести к неработоспособности некоторых компонентов.',
            'maxlength'=>50,
            'attributes'=>array(
                'class'=>'span2',
            ),
        ),
        'name'=>array(
            'type'=>'text',
            'maxlength'=>100,
            'attributes'=>array(
                'class'=>'span6',
            ),
        ),
        'value'=>array(
            'type'=>'text',
            'maxlength'=>255,
            'attributes'=>array(
                'class'=>'span6',
            ),
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