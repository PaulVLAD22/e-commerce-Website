<?php

$configs = include('configs.php');

$dbservername = $configs['host'];
$dbusername = $configs['username'];
$dbpassword = $configs['password'];
$dbName = $configs['dbname'];

$conn = mysqli_connect($dbservername,$dbusername,$dbpassword,$dbName);

if (!$conn){
  die("Connection failed " . mysqli_connect_error());
}

?>