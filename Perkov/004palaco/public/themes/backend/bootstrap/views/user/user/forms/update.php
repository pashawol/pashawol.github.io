<?php

return array(
    'attributes'=>array(
        'class'=>'well',
    ),

    'elements'=>array(
        'email'=>array(
            'type'=>'text',
            'attributes'=>array(
                'class'=>'span4',
            ),
        ),
        'newPassword'=>array(
            'type'=>'password',
            'attributes'=>array(
                'class'=>'span3',
            ),
        ),
        'verifyNewPassword'=>array(
            'type'=>'password',
            'attributes'=>array(
                'class'=>'span3',
            ),
        ),
        'backend'=>array(
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