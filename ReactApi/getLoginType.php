<?php
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    session_id($_POST['session_id']);
    session_start();
    $a =array();
    if (isset($_SESSION['loginType']))
        $a['loginType']=$_SESSION['loginType'];
    else
        $a['loginType']=-1;
    
    die (json_encode($a));
    
}

?>