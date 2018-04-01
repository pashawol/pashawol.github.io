<?php
ini_set( 'display_errors', 1 );
require __DIR__ . '/vendor/autoload.php';
 // $to='trifectahealthnyc@gmail.com';    
$mail = new PHPMailer(true);
$mail->IsMail();
$mail->IsHTML(true);
$mail->Priority = '1';
$mail->Encoding = 'base64';
$mail->CharSet = 'utf-8';

///от кого письмо  
$mail->setFrom('info@info.com');

 $mail->addAddress('dmitriiperkov@gmail.com');
 // $mail->addAddress('horenkova369@gmail.com');
// $mail->addAddress('stab@inbox.support');



//Субъект
$mail->Subject = 'Заявка с сайта';

$time = date('d.m.Y в H:i');
$html = '

<table style="width: 100%;">';
    if (!empty($_POST['order'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;">Вид формы:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['order'] . '</b></td></tr>';
    }
    if (!empty($_POST['typer'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;">Вид мебели:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['typer'] . '</b></td></tr>';
    }

    if (!empty($_POST['meb'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;">Название изображения:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['meb'] . '</b></td></tr>';
    }

    
    if (!empty($_POST['type'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Форма кухни:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['type'] . '</b></td></tr>';
    }

    if (!empty($_POST['dlina'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Длина:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['dlina'] . '</b></td></tr>';
    }

    if (!empty($_POST['left'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Длина левой стороны</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['left'] . '</b></td></tr>';
    }

    if (!empty($_POST['right'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Длина правой стороны:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['right'] . '</b></td></tr>';
    }

    if (!empty($_POST['dlina2'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Длина нижней стороны:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['dlina2'] . '</b></td></tr>';
    }

    if (!empty($_POST['tech'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;"> Техника:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . implode(", ",$_POST['tech']) . '</b></td></tr>';
    }


    
     if (!empty($_POST['nametext'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Имя:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['nametext'] . '</b></td>';
    }
    if (!empty($_POST['nametel'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Телефон:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['nametel'] . '</b></td></tr>';
    }
     
    if (!empty($_POST['comment'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Отзыв:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['comment'] . '</b></td>';
    }

   
     $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;">  Время отправки:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $time . '</b></td>
      <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> IP:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_SERVER['REMOTE_ADDR'] . '</b></td> 
</table>
';
$mail->Body = $html;

$uploaddir = __DIR__ . '/upload/';

if ($_FILES['file1']['tmp_name']) {    
    $mail->addAttachment($_FILES['file1']['tmp_name'],$_FILES['file1']['name']);
}

if ($_FILES['file2']['tmp_name']) {    
    $mail->addAttachment($_FILES['file2']['tmp_name'],$_FILES['file2']['name']);
}

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
if (!empty($uploadfile))unlink($uploadfile);
if (!empty($uploadfile2))unlink($uploadfile2);

?>


<?php
 
?>






