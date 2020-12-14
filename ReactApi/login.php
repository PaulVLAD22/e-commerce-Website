<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  $username = $_POST['username'];
  $password = $_POST['password'];
    
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  if (loginUser($conn,$username,$password)===true){
    returnLoginStatus(1,$_SESSION['username'],session_id(),userisAdmin($conn,$username));
    
  }
  else{
    returnLoginStatus(0,"wrong combination");
  }

}

?>