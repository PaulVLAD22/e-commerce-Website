import React,{useState,useEffect} from 'react';
import  '../index.css';
import ProductList from '../Components/ProductList';
import {productNames} from '../data/products';
import { Spring } from 'react-spring/renderprops';

function ProductsApp() {
  const [productName,setProductName]=useState("Laptop");
  const [productNameIndex,setProductNameIndex] = useState(0);

  const displayProduct=(event)=>{
    setProductName(event.target.id);
  }
  const decreaseProductNameIndex = ()=>{
    if (productNameIndex>=3)
        setProductNameIndex(productNameIndex-3);
  }
  const increaseProductNameIndex = ()=>{
    if (productNameIndex<=productNames.length-3)
        setProductNameIndex(productNameIndex+3);
    else if (productNameIndex<productNames.length-3)
        setProductNameIndex(productNameIndex+(productNames.length-productNameIndex-3));
  }
    return (
      <>
        <nav className="navbar navbar-aux bg-light justify-content-center">
          <ul className="navbar-nav align-items-center justify-content-between flex-row">
            <button className="btn btn-primary" onClick={decreaseProductNameIndex}>&#60;</button>
                {productNames.slice(productNameIndex,Math.min(productNameIndex+3,productNames.length)).map((productName,index)=>{
                    console.log(productNames);
                return (
                    <li className="nav-item">
                        <a className="nav-link" onClick={displayProduct} id={productName}>{productName}</a>
                    </li>
                  )
                })}
            <button className='btn btn-primary' onClick={increaseProductNameIndex}>&#62;</button>
          </ul>
        </nav>
        <ProductList key={productName} productName={productName}></ProductList>
      </>
    );
}
export default ProductsApp;