import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProductsApp from './Apps/ProductsApp'
import AuthentificationApp from './Apps/AuthentificationApp'
import CheckoutApp from './Apps/CheckoutApp'
import MainNavBar from './Components/navbars/MainNavBar'
import AccountDetails from './Components/Forms/AccountDetails'
import {getProducts} from './data/products'

window.addEventListener("storage", function () {
  window.location.href="error.html"
  sessionStorage.removeItem("loginType")
  sessionStorage.removeItem("user")
  sessionStorage.removeItem("session_id")
}, false);
if (sessionStorage.getItem("loginType")=="user" || sessionStorage.getItem("loginType")===null){
  ReactDOM.render(
    <MainNavBar></MainNavBar>,
  document.getElementById('main-navbar'));
}
if (sessionStorage.getItem("loginType")=="admin"){
  ReactDOM.render(
    <h2>ADADADADA</h2>,
  document.getElementById('main-navbar'));
}



/// SOLUTIE : 
// FA MEREU IN INDEX.JS UN JQUERY REQUEST  CU CARE DECIZI CE NAVBAR PUI SI APOI CE SE INTAMPLA TE OCUPI IN NAVBAR
// SI LASI SESSION STORAGE PT CA MAINNAVBAR SE FOLOSESTE DE EL. 
// SI PT ADMIN FOLOSESTI DOAR SESSION-UL DIN PHP

// DE FACUT: FISIER PHP CE RETURNEAZA CUM A FOST LOGAT : ADMIN/ USER/ OWNER
// IN INDEX.JS: JQUERY POST CARE I-A ACEA INFO SI IN FUNCTIE DE EA AFISEAZA MAINNAVBAR/ADMINNAVBAR/OWNERNAVBAR
