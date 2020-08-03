<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if(isset($_POST['footer__form'])) {

} elseif(isset($_POST['button2'])) {
    echo 'Нажата была кнопка с именем button2';
}
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if ($email == null) {
  $title = "Новое обращение Best Tour Plan";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br><br>
  <b>Сообщение:</b><br>$message
";
} else {
  if(($name == null) & ($phone == null) & ($message == null)) {
  $title = "Новая подписка на рассылку: Best Tour Plan";
  $body = "
  <h2>Заявка на подписку с почты:</h2><br><br>
  <b>E-mail:</b> $email
";
  }
  else {
    $title = "Обращение из модального окна: Best Tour Plan";
  $body = "
  <h2>Новое обращение</h2><br>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br>
  <b>E-mail:</b> $email<br><br>
  <b>Сообщение:</b><br>$message<br>
";
  }
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'brylev.01@inbox.ru'; // Логин на почте
    $mail->Password   = 'th0ma$kexibq'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('brylev.01@inbox.ru', 'Роман Брылев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('romix333777@gmail.com');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ($email == null) {
  header('Location: thankyou.html');
} else {
  if (($name == null) & ($phone == null) & ($message == null)) {
  header('Location: subscribe.html');
  }
  else {
    header('Location: request.html');
  }
}