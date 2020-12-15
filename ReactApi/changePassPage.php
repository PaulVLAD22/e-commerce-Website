<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $correctParam=0;
  $token = $_GET['token'];
  $email = $_GET['email'];
  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';
  if (emailTokenCorrect($conn, $email, $token) !== false) {
    $correctParam = 1;
  }
}
?>
<?php if($correctParam!=0): ?>
  <form action="changePass.php" method="post">
  <label>Password:</label>
  <input name="password">
  <label>Confirm Password</label>
  <input name="confirmPassword">
  <input hidden name="email" value=<?php echo $email?> >
  <input type="submit" value="submit">
<?php else: 
  die("Wrong link");?>
<?php endif; ?>
