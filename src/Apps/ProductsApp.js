import React,{useState} from 'react';
import  '../index.css';
import ProductList from '../Components/product/ProductList';

const  ProductsApp = ({products,productCategories})=> {
  console.log(products)
  console.log(productCategories)
  
  const [productCategoryIndex,setProductCategoryIndex] = useState(0);
  const [productCategory,setProductCategory]=useState(productCategories[productCategoryIndex]);
  const [productSearch,setProductSearch]=useState("")

  const displayProduct=(event)=>{
    setProductCategory(event.target.id);
  }
  const decreaseProductCategoryIndex = ()=>{
    if (productCategoryIndex>=3)
        setProductCategoryIndex(productCategoryIndex-3);
  }
  const increaseProductCategoryIndex = ()=>{
    if (productCategoryIndex<productCategories.length-3)
        setProductCategoryIndex(productCategoryIndex+3);
    else if (productCategoryIndex<productCategories.length-3)
        setProductCategoryIndex(productCategoryIndex+(productCategories.length-productCategoryIndex-3));
  }
  const searchCategory = () =>{
    const input = document.getElementById("searchCategoryInput").value
    if (productCategories.includes(firstLetter(input.toLowerCase())) )
      setProductCategory(firstLetter(input.toLowerCase()))
  }
  function firstLetter(s) {

    return s.replace(/^.{1}/g, s[0].toUpperCase());
  }

    return (
      <>
        <nav className="navbar navbar-aux bg-light justify-content-center">
          <ul className="navbar-nav align-items-center justify-content-between flex-row">
            <button className="btn btn-primary" onClick={decreaseProductCategoryIndex}>&#60;</button>
                {productCategories.slice(productCategoryIndex,Math.min(productCategoryIndex+3,productCategories.length)).map((productCategory,index)=>{
                    console.log(productCategory);
                return (
                    <li key={index} className="nav-item">
                        <a className="nav-link" onClick={displayProduct} id={productCategory}>{productCategory}</a>
                    </li>
                  )
                })}
            <button className='btn btn-primary' onClick={increaseProductCategoryIndex}>&#62;</button>
          </ul>
        </nav>
        <nav className="navbar  justify-content-center d-flex flex-column">
          <form className="form align-items-center">
          <div className='form-control row'>
            <label className="label">Category:</label>
              <input type="text" placeholder="Search category" id="searchCategoryInput">
              </input>
          </div>
            <button type="button" className="btn btn-secondary w-50" onClick={searchCategory}>Go</button>
          </form>

        </nav>
        <div id="productComponents">
        { productSearch=="" &&
        <ProductList key={productCategory} products={products} productCategory={productCategory}></ProductList>
        }
        </div>
      </>
    );
}
export default ProductsApp;