import React,{useState} from 'react';
import {Spring} from 'react-spring/renderprops';



const ProductPage = ({id,img,name,brand,descr,price,stock,img2,img3,review,comments,likeNr})=>{
  const imgArray=[img,img2,img3];

  const [imgCurrentIndex,SetImgCurrentIndex]= useState(0);
  const addToCart=()=>{
    // php post adaugam un cart item cu quantity=1  product_id={id} user_id ={id}
  }
  const displayPreviousImg = () =>{
    if(imgCurrentIndex>0){
      SetImgCurrentIndex(imgCurrentIndex-1);
    }
  }
  const displayNextImg = () =>{
    if(imgCurrentIndex<2){
      SetImgCurrentIndex(imgCurrentIndex+1)
    }
  }
  const addComment = () => {
    // post catre php adaugi product_comment pt produsul cu id = {id}
    window.location.reload();
  }
  // FA SPRING PT POZE ( FA COMPONENT DACA NU MERGE SPRING LA TAG BASIC)
  // flex-column la descriere produs si pune sub comentari
  //BUTTON DE BACK TO HOME
  return (
    <Spring
    from = {{opacity:0,marginTop:500}}
    to ={{opacity:1,marginTop:0}}
    >
      {props => (
      <div style={props} className="container-fluid fill-height d-flex flex-column flex-xl-row flex-lg-row flex-md-column flex-sm-column justify-content-center align-items-center">
        <div className="col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 bg-light product-page-imgs d-flex flex-row justify-content-center align-items-center">
          <button className={(imgCurrentIndex===0? "btn-disabled": "btn-dark") } onClick={displayPreviousImg}>&#60;</button>
            <picture className="col-11 container-page-imgs d-flex align-items-center justify-content-center">
              <img src={imgArray[imgCurrentIndex]} className="img-fluid img-thumbnail product-img" alt={name}></img>
            </picture>
          <button className={(imgCurrentIndex===2? "btn-disabled":"btn-dark")} onClick={displayNextImg}>&#62;</button>
        </div>
        <div className="container-product-page d-flex flex-column align-items-center justify-content-center col-10 col-xl-5 col-lg-5 col-md-5 col-sm-10" >
          <div className="rating">
            {review}/5
          </div>
            <section className='product-page-descr text-justify text-center'>
              <h3>Name: {name}</h3>
              <h3>Brand: {brand}</h3>
              <h3>Products: {descr}</h3>
              <h3>Price: {price}$</h3>
              <h3>Stock: {stock}</h3>
            </section>
            <button className="btn-dark" onClick={addToCart}>Add to cart</button>
            <div className="container-comments d-flex flex-column">
              {Object.keys(comments).map((key,index)=>{
                return (
                  <span key={index} className="comment bg-light">
                    <h3>{comments[key].user}</h3><button className="btn-dark">Like</button><h3>({comments[key].likesNr} likes)</h3>
                    <p>{comments[key].comment}</p>
                  </span>
                )
              })}
              {sessionStorage.getItem("username")!==null &&
              <form className='comment-form d-flex flex-column justify-content-center' onSubmit={addComment}>
                <label>Comment:</label>
                <input type='text' className='w-100' name='commentText'></input>
                <button type='submit' className='btn-dark'>Post</button>
              </form>
              }
             
            </div>
        </div>
      </div>
      )}
      </Spring>
  )
}
export default ProductPage;