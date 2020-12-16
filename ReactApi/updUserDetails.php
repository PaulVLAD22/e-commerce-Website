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
  $firstName = ucfirst($_POST['firstName']);
  $lastName = ucfirst($_POST['lastName']);
  $phoneNumber = ucfirst($_POST['phoneNumber']);
  $addressCountry = ucfirst($_POST['country']);
  $addressCity = ucfirst($_POST['city']);
  $addressStreet = ucfirst($_POST['street']);
  $postalCode = ucfirst($_POST['postalCode']);
  
  //verificari legate de tari,orase,postal code
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  // fa trimming
  if (!validate_name($firstName) || !validate_name($lastName)){
    returnUserDetails(0,'Invalid first name / last name');
  }
  if (!validate_phone_number($phoneNumber)){
    returnUserDetails(0,'Invalid phone number');
  }
  if (updUserDetails($conn,$firstName,$lastName,$phoneNumber,
  $addressCountry,$addressCity,$addressStreet,$postalCode)!==false){
    returnUpdUserDetails(1);
  }
  else{
    returnUpdUserDetails(0,'Bad Values');
  }
  

  



}

?>