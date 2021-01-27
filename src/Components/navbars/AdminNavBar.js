import React,{useEffect} from 'react';
import ReactDOM from 'react-dom'
import AddProductApp from '../../Apps/AddProductApp'
import RemoveProductApp from '../../Apps/RemoveProductApp'
import $ from 'jquery';

const AdminNavBar = () =>{
  const displayRemoveProduct=()=>{
    ReactDOM.render(
      <RemoveProductApp/>,
    document.getElementById('main'));
  }
  const displayAddProduct= () =>{
    ReactDOM.render(
      <AddProductApp/>,
    document.getElementById('main'));
  }
  return (
    <ul className="navbar-nav align-items-center justify-content-between">
      <li className="nav-item active">
        <h1>Vlad-Shop.com</h1>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="homeNavBar" onClick={displayRemoveProduct}>Remove Product</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="checkoutNavBar" onClick={displayAddProduct}>Add Product</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="adminLabelNavBar">Admin Account</a>
     </li>
    </ul>
  )
}

export default AdminNavBar;