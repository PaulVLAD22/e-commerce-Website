<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  $username = $_POST['username'];
  
    
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  if (resetPass($conn,$username)!==false){
    returnResetPassStatus(1);
  }
  else{
    returnResetPassStatus(0);
  }
}

?>