<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
session_start();

 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $signupSucces=0;
  $signupProblem='';
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';

  $email = $_POST['email'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  $passwordRepeat = $_POST['passwordRepeat'];

  
  if (invalidUsername($username)!==false){
    $signupProblem='invalid username';
  }

  if (usernameExists($conn,$username,$email) !== false){
    $signupProblem='username or email already used';
  }
  else{
    createUser($conn,$username,$email,$password);
    $signupSucces=1;
  }

  returnSignupStatus($signupSucces,$signupProblem);



 }
?>