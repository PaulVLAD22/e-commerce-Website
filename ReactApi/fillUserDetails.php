<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  session_id($_POST['session_id']);
  session_start();
  
  if ($_POST['username']!=$_SESSION['username']){
    die("Error");
  }
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $phoneNumber = $_POST['phoneNumber'];
  $addressCountry = $_POST['country'];
  $addressCity = $_POST['city'];
  $addressStreet = $_POST['street'];
  $postalCode = $_POST['postalCode'];

  //verificari legate de tari,orase,postal code

  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  // fa trimming
  if (userDetails($conn,$firstName,$lastName,$phoneNumber,$addressCountry,
  $addressCity,$addressStreet,$postalCode)===true){
    returnUserDetails(1);
  }
  else{
    returnUserDetails(0,'Details not inserted');
  }

  



}

?>