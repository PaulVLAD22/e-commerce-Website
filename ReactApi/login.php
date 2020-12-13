<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

function returnStatus($status, ...$args) {
  $arr = array();
  $arr['status'] = $status;

  $arr['user_id']=$args[0];
  $arr['email']=$args[1];

  

  die (json_encode($arr));
}

// asta ^^^^ nu trebuia modificata, gen, e facuta generic. tu dai returnStatus(true, argument1, argument2, ..., argumentn) si ti le pune automat in asta:
//   x = JSON.parse(await ....cerere...)

//   x.message0, x.message1, tu ce ai facut, nu mai e generica acum :)) automat iti retunreaza si info alea, si nu e ok. sa stii doar. stai sa-ti arat cealalta chestie

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $loginSucces=0;//hardcodat
    $user_id = 1;//hardcodat
    


    $email=$_POST['email'];

    if ($loginSucces!=0){
      $_SESSION['email']=$email;
      $_SESSION['isAdmin']=false;
      returnStatus(true,$email,$_SESSION['isAdmin']);
    }
  }


?>