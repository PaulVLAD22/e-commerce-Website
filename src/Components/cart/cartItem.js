import React from 'react';

const CartItem = ({id,img,name,price,quantity}) =>{
  console.log(id);
  return (
    <div className="row justify-content-around">
      <picture className="container container-img ">
         <img src={img} className="img-fluid img-thumbnail"></img>
      </picture>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{quantity}</h3>
    </div>
  );
}
export default CartItem;