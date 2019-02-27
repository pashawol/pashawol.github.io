<?php

return array(
    'attributes'=>array(
        'class'=>'well',
        'enctype'=>'multipart/form-data',
    ),
    'elements'=>array(
        'name'=>array(
            'type'=>'text',
            'maxlength'=>100,
            'attributes'=>array(
                'class'=>'span6',
            ),
        ),
        'description'=>array(
            'type'=>Siix::module('base')->textEditor,
            'hint'=>'Клавиша <strong>Enter</strong> создает новый абзац.<br />Чтобы просто перейти на новую строку, используйте сочетание клавиш <strong>Shift+Enter</strong>.',
            'htmlOptions'=>array(
                'style'=>'width: 100%; height: 200px;',
            ),
        ),
        'url'=>array(
            'type'=>'text',
            'hint'=>'Адрес сайта партнёра без http://',
            'maxlength'=>100,
            'attributes'=>array(
                'class'=>'span6',
            ),
        ),
        'file'=>array(
            'type'=>'file',
            'visible'=>true,
        ),
        'orderPosition'=>array(
            'type'=>'\sii\web\widgets\PositionSelector',
            'titleField'=>'name',
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