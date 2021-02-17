import React from 'react';
import CartItem from '../Components/cart/CartItem';
import {Spring} from 'react-spring/renderprops';
import {getUserDetails} from '../data/user'
import $ from 'jquery'

const CheckoutApp = ({cartItems})=> {

  const sendOrder = async () =>{
    const userDetails = await getUserDetails();
    if (userDetails.status===1){
    
      var cartItems_quantities=[];
      for (let i=0;i<cartItems.length;i++){
        cartItems_quantities.push(document.getElementById("quantity-"+i).innerText)
      }
      try{
        for (let i=0;i<cartItems.length;i++){
          cartItems_quantities[i]=parseInt(cartItems_quantities[i].slice(10))
        }
      }
      catch(err){
        window.location.reload()
      }
      
      var cartItems_id_qu=[]
      for (let i=0;i<cartItems.length;i++){
        cartItems_id_qu.push([cartItems[i].id,cartItems_quantities[i]])
      }
      console.log(cartItems_id_qu)
      const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/sendOrder.php', {cartItems_id_qu:cartItems_id_qu,session_id:sessionStorage.getItem("session_id"),
                                                                                       username: sessionStorage.getItem("username"),
                                                                                      }))
      console.log(ans)
      const postResponse=JSON.parse(ans)
      document.getElementById('sendOrderBtn').innerHTML=postResponse[1];
      document.getElementById('sendOrderBtn').disabled=true;
      
    }
    else{
      alert("NU E OK");
    }
    
  }
  return (
    <Spring
    from={{marginTop:400}}
    to ={{marginTop:0}}
    >{props =>(
      cartItems.length!==0
        ?
        <div style={props} className="container d-flex flex-column justify-content-center col-8 col-xl-4 cl-lg-4 col-md-6 col-sm-8">
          {cartItems.map(((cartItem,index)=>{
            return (
              <CartItem key={index} index={index} id={cartItem.id} productType={cartItem.productType}
              img={cartItem.img} name={cartItem.name} price={cartItem.price}></CartItem>
            );
          }))}
          <div className="row justify-content-center">
          <button id="sendOrderBtn" className="btn btn-dark col-4" onClick={sendOrder}>Confirm order</button>
          </div>
        </div>
        :
        <div className="container d-flex flex-column justify-content-center align-items-center">
        <h3 className='responseMessage'>Empty Cart</h3>
        </div>
    )}</Spring>

  );
}

export default CheckoutApp;