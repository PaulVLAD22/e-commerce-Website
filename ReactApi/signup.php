<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

function returnStatus($status, ...$args) {
  $arr = array();
  $arr['status']=$status;
  $arr['email']= $_POST['email'];

  die (json_encode($arr));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $signupSucces=0;
  if (isset($_POST["submit"])){

  }
  else{
    $signupSucces=1;
  }

}
?>