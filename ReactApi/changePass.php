<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
$resetDone=0;
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  $password = $_POST['password'];
  $passwordRepeat = $_POST['confirmPassword'];
  $email = $_POST['email'];
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  if ($password==$passwordRepeat){
    if(updatePassword($conn,$password,$email)!==false)
      $resetDone=1;
  }
}

?>
<?php if($correctParam!=0): 
  die("Password reset");?>
<?php else: 
  die("Wrong link");?>
<?php endif; ?>