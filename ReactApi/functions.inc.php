<?php
use PHPMAILER\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';


function validate_name($name){
  if(preg_match("/^([a-zA-Z' ]+)$/",$name))
    return true;
  else
    return false;
}
function validate_phone_number($phone)
{
     // Allow +, - and . in phone number
     $filtered_phone_number = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
     // Remove "-" from number
     $phone_to_check = str_replace("-", "", $filtered_phone_number);
     // Check the lenght of number
     // This can be customized if you want phone number from a specific country
     if (strlen($phone_to_check) < 10 || strlen($phone_to_check) > 14) {
        return false;
     } else {
       return true;
     }
}


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
function generateRandomString($length = 100) {
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
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
  $configs = include('configs.php');
  $token=generateRandomString();
  $sql = "INSERT INTO users (username,email,password,isAdmin,isActive,userToken) VALUES (?,?,?,0,0,?) ; ";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //
  }
  $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
  $link = "localhost:8000/ReactApi/verifyAccount.php?email=".$email."&token=".$token;
  mysqli_stmt_bind_param($stmt,"ssss",$username,$email,$hashedPwd,$token);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_close($stmt);

  //Send email
  $mail = new PHPMailer(true);
  try {
    //Server settings
    $mail->SMTPDebug = false;                  // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'tls://smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'vlavionflights@gmail.com';                     // SMTP username
    $mail->Password   = $configs['emailPass'];                             // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                  // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('vlavionflights@gmail.com', 'Mailer');
    $mail->addAddress($email);     // Add a recipient
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Sign Up';
    $mail->Body    = 'Hi  your authentication link is: '.$link;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
  } catch (Exception $e) {
    $_SESSION['signinProblem'] = 'Email not sent';
  }

}
function resetPass($conn,$username){
  $configs = include('configs.php');
  $usernameExists1 = usernameExists($conn,$username,$username);
  if ($usernameExists1!==false){
    $token=$usernameExists1['userToken'];
    $email = $usernameExists1['email'];
    $link="localhost:8000/ReactApi/changePassPage.php?token=".$token."&&email=".$email;
    $mail = new PHPMailer(true);
    try {
      //Server settings
      $mail->SMTPDebug = false;                  // Enable verbose debug output
      $mail->isSMTP();                                            // Send using SMTP
      $mail->Host       = 'tls://smtp.gmail.com';                    // Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
      $mail->Username   = 'vlavionflights@gmail.com';                     // SMTP username
      $mail->Password   = $configs['emailPass'];                             // SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port       = 587;                                  // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

      //Recipients
      $mail->setFrom('vlavionflights@gmail.com', 'Mailer');
      $mail->addAddress($email);     // Add a recipient
      $mail->addReplyTo('info@example.com', 'Information');
      $mail->addCC('cc@example.com');
      $mail->addBCC('bcc@example.com');

      // Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Password Reset';
      $mail->Body    = 'Reset your password : '.$link;
      $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

      $mail->send();
    } catch (Exception $e) {
      $_SESSION['signinProblem'] = 'Email not sent';
    }
    return true;
  }
  else{
    return false;
  }
}
function resetUserToken($conn,$email){
    $sql="UPDATE users set userToken=? where email=?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt,$sql)){
      //error
    }
    $newToken=generateRandomString();
    mysqli_stmt_bind_param($stmt,"ss",$newToken,$email);
    mysqli_stmt_execute($stmt);
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
function updatePassword($conn,$password,$email){
  $sql="UPDATE users set password=? where email=?";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //error
  }
  $hashedPwd=password_hash($password, PASSWORD_DEFAULT);
  mysqli_stmt_bind_param($stmt,"ss",$hashedPwd,$email);
  if (mysqli_stmt_execute($stmt)){
    resetUserToken($conn,$email);
    return true;
  }
  else
    return false;
}
function emailTokenCorrect($conn,$email,$token){
  $usernameExists1 = usernameExists($conn,$email,$email);
  if ($usernameExists1)
    return ($token==$usernameExists1['userToken']);
  else
    return false;
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
function userIsActive($conn,$username){
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
  return $row['isActive'];
}
function activateUser($conn,$email,$token){
  $sql = "UPDATE users set isActive=1 where email=? and userToken=?";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //error
  }
  mysqli_stmt_bind_param($stmt,"ss",$email,$token);
  if (mysqli_stmt_execute($stmt))
    return true;
  else
    return false;
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
function updUserDetails($conn,$firstName,$lastName,$phoneNumber,$address_country,$address_city,$address_street,$postalCode){
  $sql = "UPDATE user_details set first_name=? , last_name=? , phone_number=? , address_country=? , address_city=? , address_street=? , address_postal_code=? where user_id=?;";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //
  }
  mysqli_stmt_bind_param($stmt,"ssssssss",$firstName,$lastName,$phoneNumber,$address_country,$address_city,$address_street,$postalCode,$_SESSION['userId']);
  if (mysqli_stmt_execute($stmt))
    return true;
  else 
    return false;
}
function getProducts($conn){
  $productNames=array();
  $products = array();
  $sql = "SELECT * FROM product_type ;";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //error
  }
  mysqli_stmt_execute($stmt);
  
  $resultData = mysqli_stmt_get_result($stmt);
  
  while ($row = $resultData->fetch_array()){
    array_push($productNames,$row['product_type_name']);
    
    $products_temp=array();
    $sql2 = "SELECT * FROM products where product_type_name=? ;";
    $stmt2= mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt2,$sql2)){
      //
    }
    mysqli_stmt_bind_param($stmt2,"s",$row['product_type_name']);
    mysqli_stmt_execute($stmt2);
    $productsResult=mysqli_stmt_get_result($stmt2);
    while ($productsRow = $productsResult->fetch_array()){
      $object=array();
      $object['id']=$productsRow['product_id'];
      $object['type']=$productsRow['product_type_name'];
      $object['name']=$productsRow['product_name'];
      $object['brand']=$productsRow['product_brand'];
      $object['descr']=$productsRow['product_description'];
      $object['price']=$productsRow['product_price'];
      $object['img']=$productsRow['photo_link'];
      array_push($products_temp,$object);
    }
    $products[$row['product_type_name']]=$products_temp;
  }
  $dataReturned=array();
  $dataReturned['productNames']=json_encode($productNames);
  $dataReturned['products']=json_encode($products);
  return json_encode($dataReturned);
}

function getProductDetails($conn,$product_id){
  $sql = "SELECT * FROM product_details where product_id=? ;";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //error
  }
  mysqli_stmt_bind_param($stmt,"s",$product_id);
  mysqli_stmt_execute($stmt);
  
  $resultData = mysqli_stmt_get_result($stmt);
  
  if ($row = mysqli_fetch_assoc($resultData)){
    $dataReturned=array();
    $dataReturned['stock']=$row['stock'];
    $dataReturned['img2']=$row['photo2_link'];
    $dataReturned['img3']=$row['photo3_link'];
    $dataReturned['review']=$row['review'];
    $reviews=array();
    $reviews[1]=getReviewsNumber($conn,$product_id,1);
    $reviews[2]=getReviewsNumber($conn,$product_id,2);
    $reviews[3]=getReviewsNumber($conn,$product_id,3);
    $reviews[4]=getReviewsNumber($conn,$product_id,4);
    $reviews[5]=getReviewsNumber($conn,$product_id,5);
    $dataReturned['reviews']=$reviews;

    return json_encode($dataReturned);
  }
  return false;
}
function getReviewsNumber($conn,$product_id,$value){
  $sql = "SELECT count(*) FROM user_review where product_id=? and review=?";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    //error
  }
  mysqli_stmt_bind_param($stmt, "ss", $product_id,$value);
  mysqli_stmt_execute($stmt);
  $resultData = mysqli_stmt_get_result($stmt);
  $result = mysqli_fetch_assoc($resultData);
  return $result['count(*)'];
}

function leaveReview($conn,$product_id,$reviewValue){
  $sql = "INSERT INTO  user_review (product_id,user_id,review) values (?,?,?); ";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt,$sql)){
    //
  }
  mysqli_stmt_bind_param($stmt,"sss",$product_id,$_SESSION['userId'],$reviewValue);
  if (mysqli_stmt_execute($stmt))
    return true;
  else 
    return false;
}
function getUserReview($conn,$product_id){
  $sql = "SELECT count(*) FROM user_review where product_id=? and user_id=?";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    //error
  }
  mysqli_stmt_bind_param($stmt, "ss", $product_id,$_SESSION['userId']);
  mysqli_stmt_execute($stmt);
  $resultData = mysqli_stmt_get_result($stmt);
  $result = mysqli_fetch_assoc($resultData);
  return $result['count(*)'];
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
    $arr['isActive']=$args[3];
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
function returnUpdUserDetails($status,...$args){
  $arr = array();
  $arr['status']=$status;
  if($status==0){
    $arr['updProblem']=$args[0];
  }
  echo (json_encode($arr));
  exit;
}
function returnActivateUser($status,...$args){
  $arr = array();
  $arr['status']=$status;
  echo (json_encode($arr));
  exit;
}
function returnResetPassStatus($status,...$args){
  $arr = array();
  $arr['status']=$status;
  echo (json_encode($arr));
  exit;
}
function returnReviewProduct($status){
  $arr =array();
  $arr['status']=$status;
  echo (json_encode($arr));
  exit;
}
function returnGetUserReview($status,...$args){
  $arr = array();
  $arr['status']=$status;
  echo (json_encode($arr));
  exit;
}
?>