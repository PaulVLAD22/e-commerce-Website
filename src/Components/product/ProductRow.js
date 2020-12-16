import React from 'react';
import Product from './Product';

const ProductRow = (products) =>{  
  return (
    <div className='row justify-content-around my-row'>
      {Object.keys(products).map((key,index)=>{
        console.log(products)
        return (
          <Product key={index} {...products[key]}  ></Product>
        )
      })}
    </div>
  );
}

export default ProductRow;