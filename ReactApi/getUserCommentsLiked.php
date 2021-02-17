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
  if (isset($_POST['comments_ids'])){
    $comments = $_POST['comments_ids'];
    $comments_liked=array();
    foreach ($comments as $comment){
      if (userLikedComment($conn,$comment)==1){
        array_push($comments_liked,$comment);
      }
    }
    echo (json_encode($comments_liked));
    exit;
  }
  echo (json_encode([]));
  exit;
  
}

?>