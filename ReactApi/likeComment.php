<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  session_id($_POST['session_id']);
  session_start();
  //verificari legate de tari,orase,postal code
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  // fa trimming
  if ($_POST['username']!=$_SESSION['username']){
    returnGetUserReview(0);
  }
  $comment_id = $_POST['comment_id'];
  
  die(likeComment($conn,$comment_id));
  exit;
}

?>