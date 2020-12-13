import React from 'react';
import ReactDOM from 'react-dom'
import AuthentificationApp from '../../Apps/AuthentificationApp'
import AccountDetails from '../Forms/AccountDetails'
import CheckoutApp from '../../Apps/CheckoutApp'
import ProductsApp from '../../Apps/ProductsApp'
import $ from 'jquery';
import {getProducts} from '../../data/products'
import {getCartItems} from '../../data/cartItems'

const MainNavBar = () =>{
  const displayProductsApp = () =>{
    // POST CATRE PRODUCTS 
    const productsArray=getProducts();
    console.log(productsArray)
    ReactDOM.render(
      <ProductsApp products={productsArray[0]} productNames={productsArray[1]}/>,
    document.getElementById('main'));
  }
  const displayAuthentification = () =>{
    ReactDOM.render(
      <AuthentificationApp/>,
    document.getElementById('main'));
  }
  const displayAccountDetails = () =>{
    // POST CA SA VEZI DACA SUNT COMPLETATE
    ReactDOM.render(
      <AccountDetails/>,
    document.getElementById('main'));
  }
  const displayCheckoutApp = () =>{
    //POST CATRE CART ITEMS care au user_id sessionStorage(user_id)
    const cartItemsArray = getCartItems();
    ReactDOM.render(
      <CheckoutApp cartItems={cartItemsArray}/>,
    document.getElementById('main'));
  }
  const logout = () =>{
    sessionStorage.clear();
    const ans = ($.post('http://localhost:8000/logout.php', {}))
    window.location.reload();
  }
  return (
    <ul className="navbar-nav align-items-center justify-content-between">
      <li className="nav-item active">
        <h1>Vlad-Shop.com</h1>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="homeNavBar" onClick={displayProductsApp}>Home</a>
      </li>
      {sessionStorage.getItem("username")!==null
      &&
      <li className="nav-item">
        <a className="nav-link" id="checkoutNavBar" onClick={displayCheckoutApp} >Checkout</a>
      </li>
      }
      <li className="nav-item active">
        <a className="nav-link" id={sessionStorage.getItem("username")===null ? "authentificationNavBar" : "accountDetailsNavBar"} onClick={sessionStorage.getItem("username")===null ? displayAuthentification : displayAccountDetails }>
          {sessionStorage.getItem("username")===null ? "Log In/Sign Up" : "Account Details"}
          </a>
      </li>
      <li className="nav-item ">
        <a className={"nav-link" + (sessionStorage.getItem("username") === null ? " disabled" : "") } >
        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </a>
     </li>
     {sessionStorage.getItem("username")!==null
      &&
      <li className="nav-item">
        <a className="nav-link" id="logoutNavbar" onClick={logout} >Log out</a>
      </li>
     }
    </ul>
  )
}

export default MainNavBar;