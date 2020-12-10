import React from 'react';
import {Spring} from 'react-spring/renderprops';



const Product = ({id,img,name,brand,descr,price})=>{
  const openProductPage = () =>{
    console.log(id);
    // windows.open localhost:/?product_id=212
    // si faci get cu informatii
  }
  return (
    <Spring
    from = {{opacity:0,marginTop:500}}
    to ={{opacity:1,marginTop:40}}
    >
      {props => (
      <div  onClick={openProductPage} style={props} className="container-product d-flex flex-column align-items-center justify-content-center col-8 col-xl-2 col-lg-3 col-md-4 col-sm-4" >
        <picture className="container container-img ">
          <img src={img} className="img-fluid img-thumbnail" alt={name}></img>
          </picture>
          <section className='product-descr  text-justify text-center'>
            <h3>{name}</h3>
            <h3>{descr}</h3>
            <h3>{price}$</h3>
          </section>
      </div>
      )}
      </Spring>
  )
}
export default Product;