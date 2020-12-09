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
        <div style={props} className="container d-flex flex-column justify-content-center col-8 col-xl-4 cl-lg-4 col-md-6 col-sm-8">
          {cartItems.map(((cartItem,index)=>{
            return (
              <CartItem key={index} {...cartItem}></CartItem>
            );
          }))}
          <div className="row justify-content-center">
          <button className="btn btn-dark col-4">Confirm order</button>
          </div>
        </div>
    )}</Spring>
  );
}

export default CheckoutApp;