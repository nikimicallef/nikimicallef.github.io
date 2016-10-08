<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$body = "From: $name <br> E-Mail: $email <br> Subject: $subject <br><br> Message: <br> $message";

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "From: ". $email. "\r\n";
$headers .= "Reply-To: ". $email. "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
$headers .= "X-Priority: 1" . "\r\n";

if ($_POST['submit']) {
    if ($name != '' && $email != '' && $message != '') {
        if (mail('nikmic94@gmail.com', $subject, $body, $headers)) {
            echo 'Your message has been sent. Press the back button to return to nikimicallef.com.';
        } else {
            echo 'Something went wrong. Press the back button to retry.';
        }
    } else {
        echo 'Please fill in all required fields. Press the back button to retry.';
    }
}
?>