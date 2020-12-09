import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsApp from './Apps/ProductsApp';
import AuthentificationApp from './Apps/AuthentificationApp';
import CheckoutApp from './Apps/CheckoutApp';
import MainNavBar from './Components/navbars/MainNavBar';
function displayProductsApp(){
  ReactDOM.render(
    <ProductsApp/>,
  document.getElementById('main'));
}
function displayAuthentificationApp(){
  ReactDOM.render(
    <AuthentificationApp/>,
  document.getElementById('main'));
}
function displayCheckoutApp(){
  ReactDOM.render(
    <CheckoutApp/>,
  document.getElementById('main'));
}

ReactDOM.render(
  <MainNavBar></MainNavBar>,
document.getElementById('main-navbar'));
//When opening page displaying Products
ReactDOM.render(
  <ProductsApp/>,
document.getElementById('main'));

document.getElementById('homeNavBar').addEventListener('click',displayProductsApp);
document.getElementById('authentificationNavBar').addEventListener('click',displayAuthentificationApp);
document.getElementById('checkoutNavBar').addEventListener('click',displayCheckoutApp);





