<?php

return array(
    'attributes'=>array(
        'class'=>'well',
    ),
    'elements'=>array(
        'text'=>array(
            'type'=>Siix::module('base')->textEditor,
            'hint'=>'Клавиша <strong>Enter</strong> создает новый абзац.<br />Чтобы просто перейти на новую строку, используйте сочетание клавиш <strong>Shift+Enter</strong>.',
            'htmlOptions'=>array(
                'style'=>'width: 100%; height: 350px;',
            ),
        ),
        'page'=>array(
            'type'=>'form',
            'elements'=>array(
                'title'=>array(
                    'type'=>'text',
                    'maxlength'=>255,
                    'attributes'=>array(
                        'class'=>'span6',
                    ),
                ),
                'orderPosition'=>array(
                    'type'=>'\sii\web\widgets\PositionSelector',
                    'titleField'=>'title',
                ),
                'seo'=>array(
                    'type'=>'form',
                    'visible'=>user()->checkAccess('seo'),
                    'skipEmpty'=>true,
                    'elements'=>array(
                        'title'=>array(
                            'type'=>'text',
                            'maxlength'=>255,
                            'attributes'=>array(
                                'class'=>'span6',
                            ),
                        ),
                        'description'=>array(
                            'type'=>'text',
                            'attributes'=>array(
                                'class'=>'span6',
                            ),
                        ),
                        'keywords'=>array(
                            'type'=>'text',
                            'hint'=>'Теги страницы через запятую.',
                            'attributes'=>array(
                                'class'=>'span6',
                            ),
                        ),
                        'header'=>array(
                            'type'=>'text',
                            'maxlength'=>255,
                            'attributes'=>array(
                                'class'=>'span6',
                            ),
                        ),
                    ),
                ),
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