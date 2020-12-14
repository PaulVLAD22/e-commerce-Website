<?php


function invalidUsername($username){
  $result=true;
  if(!preg_match("/^[a-zA-Z0-9]*$/",$username)){
    $result=true;
  }
  else{
    $result=false;
  }
  return $result;
}


function usernameExists($conn,$username,$email){
  $sql = "SELECT * FROM users where username = ? or email = ? ;";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //error
  }
  mysqli_stmt_bind_param($stmt,"ss",$username,$email);
  mysqli_stmt_execute($stmt);
  
  $resultData = mysqli_stmt_get_result($stmt);
  $result=true;
  if ($row = mysqli_fetch_assoc($resultData)){
    return $row;
  }
  else{
    $result = false;
  }
  mysqli_stmt_close($stmt);
  return $result;
}

function createUser($conn,$username,$email,$password){
  $sql = "INSERT INTO users (username,email,password,isAdmin) VALUES (?,?,?,0) ; ";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //
  }
  $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

  mysqli_stmt_bind_param($stmt,"sss",$username,$email,$hashedPwd);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_close($stmt);
}

function loginUser($conn,$username,$password){
  $usernameExists1 = usernameExists($conn,$username,$username);
  if ($usernameExists1!==false){
    $pwdHashed = $usernameExists1['password'];
    $checkPwd = password_verify($password,$pwdHashed);
    if ($checkPwd === false){
      return false;
    }
    else{
      $_SESSION["userId"]= $usernameExists1["user_id"];
      $_SESSION["username"]=$usernameExists1["username"];
      
      return true;
    }
  }
  else{
    return false;
  }
}
function userIsAdmin($conn,$username){
  $sql = "SELECT * FROM users where username = ? or email = ? ;";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //error
  }
  mysqli_stmt_bind_param($stmt,"ss",$username,$email);
  mysqli_stmt_execute($stmt);
  
  $resultData = mysqli_stmt_get_result($stmt);
  
  $row = mysqli_fetch_assoc($resultData);
  mysqli_stmt_close($stmt);
  return $row['isAdmin'];
 
  
}

function userDetails($conn,$firstName,$lastName,$phoneNumber,$address_country,$address_city,$address_street,$postalCode){
  $sql = "INSERT INTO user_details (user_id,first_name,last_name,phone_number,address_country,address_city,address_street,address_postal_code) VALUES (?,?,?,?,?,?,?,?) ;";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //
  }
  mysqli_stmt_bind_param($stmt,"ssssssss",$_SESSION['userId'],$firstName,$lastName,$phoneNumber,$address_country,$address_city,$address_street,$postalCode);
  if (mysqli_stmt_execute($stmt))
    return true;
  else 
    return false;
  
  mysqli_stmt_close($stmt);
}
function getUserDetails($conn){
  $sql = "SELECT * FROM user_details where user_id=? ;";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //error
  }
  mysqli_stmt_bind_param($stmt,'s',$_SESSION['userId']);
  mysqli_stmt_execute($stmt);
  
  $resultData = mysqli_stmt_get_result($stmt);
  if ($row = mysqli_fetch_assoc($resultData)){
    mysqli_stmt_close($stmt);
    return [$row['first_name'],$row['last_name'],$row['phone_number'],$row['address_country'],$row['address_city'],$row['address_street'],$row['address_postal_code']];
  }
  return false;
}

function returnSignupStatus($status, ...$args) {
  $arr = array();
  $arr['status'] = $status;
  if ($status===0){
    $arr['signupProblem']=$args[0];
  }
  echo (json_encode($arr));
  exit;
}
function returnLoginStatus($status, ...$args) {
  $arr = array();
  $arr['status'] = $status;
  if ($status===0){
    $arr['loginProblem']=$args[0];
  }
  else{
    $arr['username'] =$args[0];
    $arr['session_id']=$args[1];
    $arr['isAdmin']= $args[2];
  }
  echo (json_encode($arr));
  exit;
}
function returnUserDetails($status,...$args){
  $arr= array();
  $arr['status'] = $status;

  if ($status===0){
    $arr['userDetailsProblem']=$args[0];
  }
  echo (json_encode($arr));
  exit;
}
function returnGetUserDetails($status,$args){
  $arr= array();
  $arr['status'] = $status;
  
  if ($status!==0){
    $arr['first_name']=$args[0];
    $arr['last_name']=$args[1];
    $arr['phone_number']=$args[2];
    $arr['address_country']=$args[3];
    $arr['address_city']=$args[4];
    $arr['address_street']=$args[5];
    $arr['address_postal_code']=$args[6];
  }
  echo (json_encode($arr));
  exit;
}


?>