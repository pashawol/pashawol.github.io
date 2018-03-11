<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 04.08.2017
 * Time: 9:07
 */

    $message = mail("pavel.nazarov@litestep.group", "Сообщение с сайта litestep.group", "Получено сообщение с сайта: 
    \n Контакты: $_POST[contacts] 
    \n Текст сообщениея: $_POST[message]");

    if ($message) {
        header('Refresh: 0; URL=http://litestep.group');
    }
    else {
        echo "<p>Сообщение не отправлено</p>";
    }

