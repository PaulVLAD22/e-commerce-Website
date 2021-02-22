import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './authentification.css'
import MainNavBar from './Components/navbars/MainNavBar'
import AdminNavBar from './Components/navbars/AdminNavBar'

import $ from 'jquery'

async function getLoginType(){
  const ans =await Promise.resolve($.post('http://localhost:8000/ReactApi/getLoginType.php', {session_id:sessionStorage.getItem("session_id")}))
  console.log(ans)
  var json_returned=JSON.parse(ans)
  window.loginType=json_returned['loginType']
}


getLoginType()

// check sessionStorage values
window.addEventListener("storage", function () {
  window.location.href="error.html"
  sessionStorage.removeItem("loginType")
  sessionStorage.removeItem("user")
  sessionStorage.removeItem("session_id")
}, false);

//  login as user or admin
if (sessionStorage.getItem("loginType")=="user" || sessionStorage.getItem("loginType")===null){
  ReactDOM.render(
    <MainNavBar></MainNavBar>,
  document.getElementById('main-navbar'));
}
if (sessionStorage.getItem("loginType")=="admin"){
  ReactDOM.render(
    <AdminNavBar></AdminNavBar>,
  document.getElementById('main-navbar'));
}
