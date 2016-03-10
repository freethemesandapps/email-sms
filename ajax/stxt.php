<?php

//Get data from form...
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$name = trim($request->name);
@$email = trim($request->email);
@$carrier = trim($request->carrier);
@$number = trim($request->number);
@$message = trim($request->message);


$to = $number.'@'.$carrier;
$subject = "From: ".$name;
//$message = "Hello, how are you?";

$headers = "From: ".$name." <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "Return-Path: ".$email."\r\n";
//$headers .= "CC: sombodyelse@noplace.com\r\n";
//$headers .= "BCC: hidden@special.com\r\n";

mail($to,$subject.$name,$message,$headers,'-f'.$email);

/*
$headers = 'From: user@yourdomain.com' . " " .
'Reply-To: user@yourdomain.com'. " " .
'X-Mailer: PHP/' . phpversion();

mail('zukabala@gmail.com', 'TEST1', 'TEST2', null, '-fuser@yourdomain.com');

*/
?>
