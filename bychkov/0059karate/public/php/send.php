<?php
/****************************
 * Orlov Artur              *
 * email: orlovarth@ya.ru   *
 * skype: orlovarth         *
 * vk: https://vk.com/oarth *
 ****************************/
include 'config.php';
include 'lib/class.phpmailer.php';
if (!isset($_POST['phone'])) die("Вы не ввели свой номер телефона!");

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->setFrom($from_addr, $from_name);

// Если у формы указан получатель(ли)
if ( isset($_POST['mailto']) ) {
	foreach ($_POST['mailto'] as $key => $val) {
		$mail->AddAddress(trim($val));
	}
} else {
	foreach ($to as $k) {
		$mail->addAddress($k); // Добавление получателя
	}
}

$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body = $body;

foreach ($fields as $k => $v) {
	if (isset($_POST[$k])) {
		$mail->Body .= "<b>$v</b> " . $_POST[$k] . "<br>";
		$mail->AltBody .= "$v" . $_POST[$k] . "/n";
	}
}
/*
date_default_timezone_set('Europe/Moscow');
$mail->Body .= "<b>Дата:</b> " . date("m.d.y H:i:s") . "<br>";
$mail->AltBody .= "Дата: " . date("m.d.y H:i:s") . "/n";
*/

if(!$mail->send()) {
	echo 'Извините, произошла ошибка при отправке сообщения. Попробуйте еще раз.';
	die();
} else {
	echo 'Спасибо. Ваша заявка в обработке. Скоро наш менеджер свяжемся с Вами.';
}
?>
