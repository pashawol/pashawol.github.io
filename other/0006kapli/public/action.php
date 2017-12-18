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

 $mail->addAddress('wol1414@gmail.com');
 // $mail->addAddress('horenkova369@gmail.com');
// $mail->addAddress('stab@inbox.support');



//Субъект
$mail->Subject = 'Заявка с сайта';

$time = date('d.m.Y в H:i');
$html = '

<table style="width: 100%;">';
    if (isset($_POST['order'])) {
        $html .= ' <tr style="background-color: #f8f8f8;">  <td style="padding: 10px; border: #e9e9e9 1px solid;">Вид формы:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['order'] . '</b></td></tr>';
    }

    if (isset($_POST['user_name'])) {
        $html .= ' <tr  > <td style="padding: 10px; border: #e9e9e9 1px solid;">Name:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['user_name'] . '</b></td></tr>';
    }
    if (isset($_POST['tel'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Телефон:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['tel'] . '</b></td></tr>';
    }
    if (isset($_POST['text'])) {
        $html .= ' <tr  > <td style="padding: 10px; border: #e9e9e9 1px solid;"> Вопрос:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['text'] . '</b></td>';
    }

    if (isset($_POST['comment'])) {
        $html .= ' <tr  > <td style="padding: 10px; border: #e9e9e9 1px solid;"> Отзыв:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['comment'] . '</b></td>';
    }

    
    // if (isset($_POST['text'])) {
    //     $html .= ' <li> Текст сообщения: <b>' . $_POST['text'] . '</b></li>';
    // }
    // if (isset($_POST['data'])) {
    //  $html .= ' <li>Дата рождения: <b>' . $_POST['data'] . '</b></li>';
    // }
    // if (isset($_POST['mesto'])) {
    //  $html .= ' <li>Место учебы или работы: <b>' . $_POST['mesto'] . '</b></li>';
    // }
    // if (isset($_POST['video'])) {
    //  $html .= ' <li>Ссылка : <b>' . $_POST['video'] . '</b></li>';
    // }
    // if (isset($_POST['acc'])) {
    //  $html .= ' <li>Ccылка на аккаунт yotube или страницу в ВК : <b>' . $_POST['acc'] . '</b></li>';
    // }
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
if (isset($uploadfile))unlink($uploadfile);
if (isset($uploadfile2))unlink($uploadfile2);

?>


<?php
/*
// Адрес, куда отправляем письмо
//$to = 'test@test.ru ';
$to = 'test@test.ru';

// Получаем данные от пользователя
// Все данные обязательно нужно проверять на правильность!
$userEmail = filter_input(INPUT_POST, 'tel', FILTER_VALIDATE_EMAIL);
//$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
//$option = filter_input(INPUT_POST, 'option', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$message = strip_tags(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_MAGIC_QUOTES), '<p><a><b><div>');

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$data = filter_input(INPUT_POST, 'data', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);

$mesto = filter_input(INPUT_POST, 'mesto', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);

$video = filter_input(INPUT_POST, 'video', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);

$acc = filter_input(INPUT_POST, 'acc', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);


// Проверка, что данные не пустые. 
// Нас не интересуют анонимки
if (empty($name)) {
   die('Введите Ваше имя.');
// Нас не интересуют послания с пустым сообщением
} 

//elseif (empty($message)) {
//    die('Отсутствует сообщение.');
//} elseif (empty($subject)) {
//    $subject = '[тема не указана]';
//}

$the_file = '';
//Если пользователь выбрал файл для отправки
if (!empty($_FILES['file1']['tmp_name'])) {
    // Закачиваем файл
    $path = $_FILES['file1']['name'];
    if (copy($_FILES['file1']['tmp_name'], $path)) {
        $the_file = $path;
    }
}
$the_file2 = '';
//Если пользователь выбрал файл для отправки
if (!empty($_FILES['file2']['tmp_name2'])) {
    // Закачиваем файл
    $path2 = $_FILES['file2']['name2'];
    if (copy($_FILES['file2']['tmp_name2'], $path2)) {
        $the_file2 = $path2;
    }
}

// Если есть прикреплённый файл, то заголовки чуть другие.
// Поэтому, в зависимости от того, отправил ли пользователь файл,
// выбираем, что делать дальше
$headers = null;

if (empty($the_file)) {
    // эта часть кода отвечает за отправку сообщений без вложений
    // собираем заголовки
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    
    $headers[] = "Content-type: text/html; charset=UTF-8";
    $headers[] = "From: $name <$userEmail>";
    $headers[] = "Bcc: JJ Chong <bcc@domain2.com>";
    $headers[] = "Reply-To: Recipient Name <receiver@domain3.com>";
    $headers[] = "Subject: {'Изображение с сайта'}";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    // собираем текст письма
    $allmsg = "
   
       <p><b>Имя:</b> $name</p></br>
       <p><b>Дата рождения:</b> $data</p></br>
       <p><b>МЕСТО УЧЕБЫ ИЛИ РАБОТЫ:</b> $mesto</p></br>
       <p><b>Видео:</b> $video</p></br>
       <p><b>АККАУНТ:</b> $acc</p></br>
       ";
            
    $allmsg = "<html><head><title>Обратная связь</title><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"></head><body>" . $allmsg . "</body></html>";
    // отправляем
    if (!mail($to, $subject, $allmsg, implode("\r\n", $headers))) {
        echo 'Письмо не отправлено - что-то не сработало.';
    } else {
        echo 'Отправлено письмо без вложений.';
    }
} else {
    // эта часть кода отвечает за отправку сообщений без вложений
    // читаем отправляемый файл в строку
    $fp = fopen($the_file, "r");
    if (!$the_file) {
        die("Ошибка отправка письма: Файл $the_file не может быть прочитан.");
    }
    $file = fread($fp, filesize($path));
    fclose($fp);
    // удаляем временный файл
    unlink($path);

    $fp2 = fopen($the_file2, "rr");
        if (!$the_file2) {
            die("Ошибка отправка письма: Файл $the_file2 не может быть прочитан.");
        }
        $file2 = fread($fp2, filesize($path2));
        fclose($fp2);
        // удаляем временный файл
        unlink($path2);



    // собираем текст письма
   $allmsg = "
     
       <p><b>Имя:</b> $name</p></br>
       <p><b>Дата рождения:</b> $data</p></br>
       <p><b>МЕСТО УЧЕБЫ ИЛИ РАБОТЫ:</b> $mesto</p></br>
       <p><b>Видео:</b> $video</p></br>
       <p><b>АККАУНТ:</b> $acc</p></br>
       ";
    $allmsg = "<html><head><title>Обратная связь</title><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"></head><body>" . $allmsg . "</body></html>";
    // генерируем разделитель
    $boundary = "--" . md5(uniqid(time()));
    // собираем заголовки
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "From: $name <$userEmail>";
    $headers[] = "Bcc: JJ Chong <bcc@domain2.com>";
    $headers[] = "Reply-To: Recipient Name <receiver@domain3.com>";
    $headers[] = "Subject: {'Изображение с сайта'}";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    $headers[] = "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
    // собираем текст письма + приложенынй файл
    $multipart = array();
    $multipart[] = "--$boundary";
    $multipart[] = "Content-Type: text/html; charset=UTF-8";
    $multipart[] = "Content-Transfer-Encoding: Quot-Printed\r\n";
    $multipart[] = "$allmsg\r\n";
    $multipart[] = "--$boundary";
    $multipart[] = "Content-Type: application/octet-stream";
    $multipart[] = "Content-Transfer-Encoding: base64";
    $multipart[] = "Content-Disposition: attachment; filename = \"" . $path . "\"\r\n";
    $multipart[] = "Content-Disposition: attachment; filename = \"" . $path2 . "\"\r\n";
    $multipart[] = chunk_split(base64_encode($file));
    $multipart[] = chunk_split(base64_encode($file2));
    $multipart[] = "--$boundary";
    // отправляем
    if (!mail($to, $subject, implode("\r\n", $multipart), implode("\r\n", $headers))) {
        echo 'Письмо не отправлено - что-то не сработало.';
    } else {
        echo 'Отправлено письмо с вложениями.';
    }
}
*/
?>






