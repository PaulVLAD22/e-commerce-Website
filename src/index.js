import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProductsApp from './Apps/ProductsApp'
import AuthentificationApp from './Apps/AuthentificationApp'
import CheckoutApp from './Apps/CheckoutApp'
import MainNavBar from './Components/navbars/MainNavBar'
import AccountDetails from './Components/Forms/AccountDetails'

ReactDOM.render(
  <MainNavBar></MainNavBar>,
document.getElementById('main-navbar'));
//When opening page displaying Products
ReactDOM.render(
  <ProductsApp/>,
document.getElementById('main'));




//logged in 





