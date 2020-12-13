import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProductsApp from './Apps/ProductsApp'
import AuthentificationApp from './Apps/AuthentificationApp'
import CheckoutApp from './Apps/CheckoutApp'
import MainNavBar from './Components/navbars/MainNavBar'
import AccountDetails from './Components/Forms/AccountDetails'
import {getProducts} from './data/products'
ReactDOM.render(
  <MainNavBar></MainNavBar>,
document.getElementById('main-navbar'));
//When opening page displaying Products
const productsArray=getProducts();
console.log(productsArray[0])
ReactDOM.render(
  <ProductsApp key={0} products={productsArray[0]} productNames={productsArray[1]} />,
document.getElementById('main'));





