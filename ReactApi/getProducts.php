<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  // fa trimming
  die (getProducts($conn));
  
  

  



}

?>