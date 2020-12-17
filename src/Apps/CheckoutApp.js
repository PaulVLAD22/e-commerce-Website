import React,{useState} from 'react';
import CartItem from '../Components/cart/CartItem';
import {Spring} from 'react-spring/renderprops';
import {getUserDetails} from '../data/user'
import $ from 'jquery'
// BUTTON CU POST REQUEST CARE FACE UN ORDER ID SI ORDER ITEMS PT FIECARE ITEM DIN CART
// Merge doar daca are account details-urile completate
const CheckoutApp = ({cartItems})=> {
  
  const sendOrder = async () =>{
    const userDetails = await getUserDetails();
    if (userDetails.status===1){
      alert("ok");
      var cartItems_ids=[];
      cartItems.map((cartItem)=> cartItems_ids.push(cartItem.id))
      console.log(cartItems_ids)
       const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/sendOrder.php', {cartItems_ids:cartItems_ids,session_id:sessionStorage.getItem("session_id"),
                                                                                      username: sessionStorage.getItem("username"),
                                                                                     }))
       console.log(ans)
      // cod pt a insera order-ul si stergem cartul
    }
    else{
      alert("NU E OK");
    }
    // verifica daca avem destule piese si verifica daca in sessions avem valoare pentru first Name
  }
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
          <button className="btn btn-dark col-4" onClick={sendOrder}>Confirm order</button>
          </div>
        </div>
    )}</Spring>
  );
}

export default CheckoutApp;