import React from 'react';

const Laptop = ({id,img,name,brand,cpu,storage,gpu,price})=>{
  return (
    <div className="container-product d-flex flex-column align-items-center justify-content-center col-4 col-xl-2 col-lg-3 col-md-4 col-sm-4 " id={id}>
       <picture className="container container-img ">
         <img src={img} className="img-fluid img-thumbnail" alt={name}></img>
        </picture>
        <h2 className='product-descr  text-justify text-center'>
          <h3>{name}</h3>
          <ul className="laptop-comp">
            <li>CPU: {cpu}</li>
            <li>Storage: {storage}</li>
            <li>GPU: {gpu}</li>
          </ul>
          <h3>{price}</h3>
        </h2>
        <button className='btn btn-light'>Add to cart</button>
    </div>
  )
}
export default Laptop;