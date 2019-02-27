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
            'type'=>\Siix::module('base')->textEditor,
            'hint'=>'Клавиша <strong>Enter</strong> создает новый абзац.<br />Чтобы просто перейти на новую строку, используйте сочетание клавиш <strong>Shift+Enter</strong>.',
            'htmlOptions'=>array(
                'style'=>'width: 100%; height: 300px;',
            ),
        ),
        'order'=>array(
            'type'=>'text',
            'maxlength'=>2,
            'attributes'=>array(
                'class'=>'span1',
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