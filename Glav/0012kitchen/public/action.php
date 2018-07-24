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
//  $mail->addAddress('wol1414@gmail.com');
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
    
    if (!empty($_POST['time'])) {
        $html .= ' <tr style="background-color: #f8f8f8;"> <td style="padding: 10px; border: #e9e9e9 1px solid;"> Врмя для связи:</td>   <td style="padding: 10px; border: #e9e9e9 1px solid;">' . $_POST['time'] . '</b></td></tr>';
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

/*начало кода для интеграции EnvyCRM*/
$url=parse_url($_SERVER['HTTP_REFERER']);
if (isset ($url['query'])) {
    parse_str($url['query'], $get_array);
}
$name = $_POST['nametext'];
$phone = $_POST['nametel'];
$comment = $_POST['order'];

$link = 'https://envycrm.com/crm/api/v1/lead/set/?api_key=bb2c486b63ce8ce8de830c712e9cea9a55e1b7b5';
$data = array(
    'method' => 'create',
    'inbox_type_id' => 154205,
    'visit_id' => $_COOKIE['WhiteCallback_visit'],
    'values' => array(
        'name' => $name ? $name : 'Заявка с сайта ' . $phone,
        'phone' => $phone,
        'comment' => $comment,
        'utm_source' => $get_array['utm_source'],
        'utm_medium' => $get_array['utm_medium'],
        'utm_campaign' => $get_array['utm_campaign'],
        'utm_content' => $get_array['utm_content'],
        'utm_term' => $get_array['utm_term'],
        'custom' => array(
            array('input_id' => 43328, 'value' => $_POST['typer']),
            array('input_id' => 43331, 'value' => $_POST['meb']),
            array('input_id' => 43334, 'value' => $_POST['type']),
            array('input_id' => 43337, 'value' => $_POST['dlina']),
            array('input_id' => 43340, 'value' => $_POST['left']),
            array('input_id' => 43343, 'value' => $_POST['right']),
            array('input_id' => 43346, 'value' => $_POST['dlina2']),
            array('input_id' => 43349, 'value' => implode("\n",$_POST['tech'])),
            array('input_id' => 43352, 'value' => $_POST['comment'])
        )            
    )
);
$curl = curl_init();
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl,CURLOPT_URL, $link);
curl_setopt($curl,CURLOPT_POST,true);
curl_setopt($curl,CURLOPT_POSTFIELDS, json_encode(array('request' => $data)));
curl_setopt($curl,CURLOPT_HEADER,false);
$out=curl_exec($curl);
$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);
curl_close($curl);
/*конец кода интеграции EnvyCRM*/

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






