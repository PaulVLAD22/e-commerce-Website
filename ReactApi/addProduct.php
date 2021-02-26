<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  session_id($_POST['session_id']);
  session_start();
  
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  
  if ($_POST['username']!=$_SESSION['username']){
    returnGetUserReview(0);
  }

  $productName=$_POST['productName'];
  $productCategory=$_POST['productCategory'];
  $productBrand=$_POST['productBrand'];
  $productDescription=$_POST['productDescription'];
  $productPrice=$_POST['productPrice'];
  $productStock=$_POST['productStock'];
  $productImg1=$_POST['productImg1'];
  $productImg2=$_POST['productImg2'];
  $productImg3=$_POST['productImg3'];
  if ($productName && $productBrand && $productDescription && 
  $productPrice && $productStock && $productImg1 && $productImg2
  && $productImg3){
    echo insertProduct($conn,$productCategory,$productName,$productBrand,
  $productDescription,$productPrice,$productImg1,$productImg2,$productImg3,$productStock);
  }
  else
    echo "Error";
  exit;
}

?>