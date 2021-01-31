import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import Product from '../Components/product/Product';
import ProductPage from '../Components/product/ProductPage'
const AddProductApp = () =>{
  const [productPreview,setProductPreview] = useState(0);
  const displayPreviewProduct=()=>{
    setProductPreview(0)
    const productName = document.getElementById("productName").value
    const productBrand = document.getElementById("productBrand").value
    const productDescription = document.getElementById("productDescription").value
    const productPrice = document.getElementById("productPrice").value
    const productImg1 = document.getElementById("productImg1").value
      ReactDOM.render(
        <Product type={"Laptop"} id={1} name={productName} brand={productBrand} description={productDescription} price={productPrice}
        img={productImg1} preview={1} ></Product>,
      document.getElementById( "divProductPreview")
     )
  }
  const displayPreviewProductPage=()=>{
    setProductPreview(1)
    const productName = document.getElementById("productName").value
    const productBrand = document.getElementById("productBrand").value
    const productDescription = document.getElementById("productDescription").value
    const productPrice = document.getElementById("productPrice").value
    const productStock = document.getElementById("productStock").value
    const productImg1 = document.getElementById("productImg1").value
    const productImg2 = document.getElementById("productImg2").value
    const productImg3 = document.getElementById("productImg3").value
    ReactDOM.render(
      <ProductPage type={"Laptop"} id={1} name={productName} brand={productBrand} descr={productDescription} price={productPrice}
      img={productImg1} stock={productStock}  img2={productImg2} img3={productImg3} reviews={[]} comments={[]} reviewed={0}  reviewed_comments={[]}></ProductPage>,
    document.getElementById( "divProductPreview")
   )
  }
  return(
    <div className="d-flex align-items-center overflow-hidden h-100 ">
      <div className="col-5 d-flex flex-column">
        <article>
        <form  className="productForm d-flex flex-column justify-content-center align-items-center">
          <div className='form-control row'>
            <label htmlFor="productName">Product Name : </label>
            <input
            type="text" id="productName" name="productName"/>
          </div>
          <div className='form-control row'>
            <label htmlFor="productBrand">Product Brand : </label>
            <input 
            type="text" id="productBrand" name="productBrand"/>
          </div>
        
          <div className='form-control row '>
            <label htmlFor="productDescription">Product Description : </label>
            <textarea 
             id="productDescription" name="productDescription"/>
          </div>
        
          <div className='form-control row'>
            <label htmlFor="productPrice">Product Price : </label>
            <input 
            type="productPrice" id="productPrice" name="productPrice"/>
          </div>
          <div className='form-control row'>
            <label htmlFor="productStock">Product Stock : </label>
            <input 
            type="productStock" id="productStock" name="productStock"/>
          </div>
          <div className='form-control row'>
            <label htmlFor="productImg1">Product Img 1: </label>
            <input 
            type="productImg1" id="productImg1" name="productImg1"/>
          </div>
          <div className='form-control row'>
            <label htmlFor="productImg2">Product Img 2: </label>
            <input 
            type="productImg2" id="productImg2" name="productImg2"/>
          </div>
          <div className='form-control row'>
            <label htmlFor="productImg3">Product Img 3: </label>
            <input 
            type="productImg3" id="productImg3" name="productImg3"/>
          </div>

        </form>
        </article>
        <div className=" d-flex flex-column justify-content-center align-items-center">
        <button className="btn-dark m-2" type="submit" onClick={displayPreviewProduct}>Preview Product</button>
        <button className="btn-dark m-2" type="submit" onClick={displayPreviewProductPage}>Preview Product Page</button>
        <button className="btn-dark m-2" type="submit">Add Product</button>
        </div>
      </div>
      <div id="divProductPreview" className={productPreview==0?"col-6 offset-2 align-items-center":"col-6 bg-light"} style={{transform: productPreview==0? "translateY(-50%)" : ""}}>
      <h2>Preview Product</h2>
      </div>
    </div>
  )

}
export default AddProductApp;


// FA PHP-UL SI GENEREAZA PRODUCT -UL