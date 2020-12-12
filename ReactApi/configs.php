<?php

return array(
  'host' => "eu-cdbr-west-03.cleardb.net",
  'username' => "b10e9315b9056b",
  'password' => "b7f3d1ff",
  'dbname' => "heroku_b61a86e89e19dca"
);


function dbConnection($configs){
  $dbservername = $configs['host'];
  $dbusername = $configs['username'];
  $dbpassword = $configs['password'];
  $dbName = $configs['dbname'];
}
?>