import React from 'react';
import {Spring} from 'react-spring/renderprops';
const Tv = ({id,img,descr,name,brand,price})=>{
  return (
    <Spring
    from = {{opacity:0,marginTop:500}}
    to ={{opacity:1,marginTop:40}}
    >
      {props => (
        <div style={props} className="container-product d-flex flex-column align-items-center justify-content-center col-8 col-xl-2 col-lg-3 col-md-4 col-sm-4 " id={id}>
          <picture className="container container-img ">
            <img src={img} className="img-fluid img-thumbnail" alt={name}></img>
            </picture>
            <h2 className='product-descr  text-justify text-center'>
              <h3>{name}</h3>
              <h3>{descr}</h3>
              <h3>{price}$</h3>
            </h2>
        </div>
      )}</Spring>
  )
}
export default Tv;