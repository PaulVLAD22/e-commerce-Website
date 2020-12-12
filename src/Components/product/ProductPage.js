import React,{useState} from 'react';
import {Spring} from 'react-spring/renderprops';



const ProductPage = ({id,img,name,brand,descr,price,stock,img2,img3,review})=>{
  const imgArray=[img,img2,img3]
  const [imgCurrent,SetImgCurrent]= useState(img)
  const addToCart=()=>{
    // php adaugam 
  }
  const displayPreviousImg = () =>{
    if(imgArray.indexOf(imgCurrent)>0){
      SetImgCurrent(imgArray[imgArray.indexOf(imgCurrent)-1])
      console.log("AA")
    }
  }
  const displayNextImg = () =>{
    if(imgArray.indexOf(imgCurrent)<2){
      SetImgCurrent(imgArray[imgArray.indexOf(imgCurrent)+1])
    }
  }
  // FA SPRING PT POZE ( FA COMPONENT DACA NU MERGE SPRING LA TAG BASIC)

  return (
    <Spring
    from = {{opacity:0,marginTop:500}}
    to ={{opacity:1,marginTop:0}}
    >
      {props => (
      <div style={props} className="container-fluid fill-height d-flex flex-lg-row flex-sm-column justify-content-center align-items-center">
        <div className="container col-10 col-xl-5 col-lg-5 col-md-5 col-sm-10 bg-light product-page-imgs d-flex flex-row justify-content-center align-items-center">
          <button className="btn-dark" onClick={displayPreviousImg}>&#60;</button>
            <picture className="col-11 container-page-imgs d-flex align-items-center justify-content-center">
              <img src={imgCurrent} className="img-fluid img-thumbnail product-img" alt={name}></img>
            </picture>
          <button className="btn-dark" onClick={displayNextImg}>&#62;</button>
        </div>
        <div className="container-product-page bg-light d-flex flex-column align-items-center justify-content-center col-10 col-xl-5 col-lg-5 col-md-5 col-sm-10" >
          <div className="rating">
            {review}
          </div>
            <section className='product-page-descr  text-justify text-center'>
              <h3>Name: {name}</h3>
              <h3>Brand: {brand}</h3>
              <h3>Products: {descr}</h3>
              <h3>Price: {price}$</h3>
              <h3>Stock: {stock}</h3>
            </section>
            <button className="btn-dark" onClick={addToCart}>Add to cart</button>
        </div>
      </div>
      )}
      </Spring>
  )
}
export default ProductPage;