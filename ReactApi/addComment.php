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
  $comment_text = $_POST['comment_text'];
  $product_id = $_POST['product_id'];
  echo addComment($conn,$product_id,$comment_text);
  exit;
}

?>