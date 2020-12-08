import React,{useState} from 'react';
import {cartItems} from '../data/cartItems';
import CartItem from '../Components/cart/CartItem';
const CheckoutApp = ()=> {
  return (
    <div className=" container col-12 h-100 justify-content-center">
    <div className="container bg-primary d-flex flex-column col-5 ">
      {cartItems.map(((cartItem,index)=>{
        return (
          <CartItem key={index} {...cartItem}></CartItem>
        );
      }))}
    </div>
    </div>
  );
}

export default CheckoutApp;