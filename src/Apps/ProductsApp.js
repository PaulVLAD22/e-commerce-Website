import React,{useState,useEffect} from 'react';
import  '../index.css';
import ProductList from '../Components/product/ProductList';

const  ProductsApp = ({products,productNames})=> {
  console.log(products)
  console.log(productNames)
  // AICI POT FACE INCA O BARA SUB CEA CE ALEGE PRODUSUL PT A ALEGE CUM SORTEZI PRODUSELE SAU SA LE FILTEREZI
  const [productNameIndex,setProductNameIndex] = useState(0);
  const [productName,setProductName]=useState(productNames[productNameIndex]);

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
                    <li key={index} className="nav-item">
                        <a className="nav-link" onClick={displayProduct} id={productName}>{productName}</a>
                    </li>
                  )
                })}
            <button className='btn btn-primary' onClick={increaseProductNameIndex}>&#62;</button>
          </ul>
        </nav>
        
        <ProductList key={productName} products={products} productName={productName}></ProductList>
      </>
    );
}
export default ProductsApp;