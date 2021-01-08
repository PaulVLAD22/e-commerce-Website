import React,{useEffect} from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

const AdminNavBar = () =>{
  return (
    <ul className="navbar-nav align-items-center justify-content-between">
      <li className="nav-item active">
        <h1>Vlad-Shop.com</h1>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="homeNavBar" onClick={displayProductsApp}>Edit Product</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="checkoutNavBar" onClick={displayCheckoutApp}>Add Product</a>
      </li>
      <li className="nav-item active">
      <a className="nav-link" id="addCategoryNavBar" onClick={displayCheckoutApp}>Add category</a>
      </li>
      <li className="nav-item">
        <a classname="nav-link" id="adminLabelNavBar">Admin Account</a>
     </li>
    </ul>
  )
}

export default AdminNavBar;