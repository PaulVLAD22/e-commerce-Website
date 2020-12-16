<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

 if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  session_id($_POST['session_id']);
  session_start();
  
  if ($_POST['username']!=$_SESSION['username']){
    die("Error");
  }

  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';

  $username = $_POST['username'];
  $product_id =$_POST['product_id'];
  $reviewValue=$_POST['reviewValue'];
  
  
  if (leaveReview($conn,$product_id,$reviewValue)!==false){
    die (returnReviewProduct(1));
  }
  else
    die (returnReviewProduct(0));




 }
?>