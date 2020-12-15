<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>User Account Activation by Email Verification using PHP</title>
<!-- CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<?php
$msg='';
  if ($_SERVER['REQUEST_METHOD']==='GET'){
    $token=$_GET['token'];
    $email=$_GET['email'];
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';
    if(activateUser($conn,$email,$token)!==false){
      $msg='Account verified';
    }
    else{
      $msg='Account verification failed';
    }
  }
?>
<div class="container mt-3">
<div class="card">
<div class="card-header text-center">
User Account Activation by Email Verification using PHP
</div>
<div class="card-body">
<p><?php echo $msg; ?></p>
</div>
</div>
</div>
</body>
</html>