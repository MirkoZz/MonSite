<?php

// connexion à la BDD
$pdo = new PDO(
    'mysql:host=db725439111.db.1and1.com;dbname=db725439111;port=3306',
    'dbo725439111',
    'Fred@11210032',
    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')
);

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']))
{
  $name = trim($_POST['name']);
  $email = trim($_POST['email']);
  $message = trim($_POST['message']);
  $error = false;
  
  if($name == '' || iconv_strlen($name) > 30)
  {
    $error = true;
  }
  
  if(!filter_var($email, FILTER_VALIDATE_EMAIL) || iconv_strlen($email) > 50)
  {
    $error = true;
  }
  
  if($message == '' || iconv_strlen($message) > 500)
  {
    $error = true;
  }
  
  if(!$error)
  {
    $contact = $pdo->prepare("INSERT INTO contact (name, email, message, date) VALUES (:name, :email, :message, NOW())");

    $contact->bindValue(":name", $name, PDO::PARAM_STR);
    $contact->bindValue(":email", $email, PDO::PARAM_STR);
    $contact->bindValue(":message", $message, PDO::PARAM_STR);

    $contact->execute();

    $emailTo = "frederic.roth1982@gmail.com";
    $subject = "Message depuis mon site";

    $body .= "Nom: ";
    $body .= $name;
    $body .= "\n";

    $body .= "Email: ";
    $body .= $email;
    $body .= "\n";

    $body .= "Message: ";
    $body .= $message;
    $body .= "\n";

    mail($emailTo, $subject, $body, "From:".$email);
  }
}


 



