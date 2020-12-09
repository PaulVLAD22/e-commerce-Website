import React,{useState} from 'react';
import {cartItems} from '../data/cartItems';
import CartItem from '../Components/cart/CartItem';
import {Spring} from 'react-spring/renderprops';
const CheckoutApp = ()=> {
  return (
    <Spring
    from={{marginTop:400}}
    to ={{marginTop:0}}
    >{props =>(
      <div style={props} className=" container col-12 h-100 justify-content-center">
        <div className="container bg-primary d-flex flex-column col-5 ">
          {cartItems.map(((cartItem,index)=>{
            return (
              <CartItem key={index} {...cartItem}></CartItem>
            );
          }))}
        </div>
      </div>
    )}</Spring>
  );
}

export default CheckoutApp;