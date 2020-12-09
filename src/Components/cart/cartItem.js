import React,{useState} from 'react';
import { Spring } from 'react-spring/renderprops';

const CartItem = ({id,productType,img,name,price,quantity}) =>{
  const [productQuantity,setProductQuantity]= useState(quantity);
  const decreaseQuantity = () =>{
    if (productQuantity!=1)
    setProductQuantity(productQuantity-1);
  }
  const increaseQuantity = () =>{
    setProductQuantity(productQuantity+1);
  }
  console.log(id);
  return (
    <Spring
    from ={{opacity:0}}
    to = {{opacity:1}}
    >
      {props => (
      <div style={props} className=" container-cart row justify-content-around border border-dark align-items-center">
        <picture className="container container-img ">
          <img src={img} className="img-fluid "></img>
        </picture>
        <ul>
          <li className="">Name: {name}</li>
          <li>Price: {parseInt(price)*parseInt(productQuantity)}$</li>
          <li>
            <button className="btn btn-dark" onClick={decreaseQuantity}>-</button>
            Quantity: {productQuantity}
            <button className="btn btn-dark" onClick={increaseQuantity}>+</button>
          </li>
        </ul>
      </div>
      )}</Spring>
  );
}
export default CartItem;