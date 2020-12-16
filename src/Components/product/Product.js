import React from 'react'
import ReactDOM from 'react-dom'
import ProductPage from './ProductPage'
import {Spring} from 'react-spring/renderprops'
import {getProductDetails} from '../../data/products'
import $ from 'jquery'


const Product = ({id,type,img,name,brand,descr,price})=>{
  const openProductPage = async () =>{
    const productDetails = await getProductDetails(id)
    console.log(productDetails)
    var stock = productDetails.stock
    var img2 = productDetails.img2
    var img3 = productDetails.img3
    var review =productDetails.review
    var comments=[{user:'User123',likesNr:'20',comment:"It's ok"}]; // fa-l array de obiecte fiecare ob are user-ul like-urile si comentu
    ReactDOM.render(
      <ProductPage key={id} img={img} name={name} brand={brand} descr={descr}
      price={price} stock={stock} img2={img2} img3={img3} review={review}
      comments={comments}/>,
    document.getElementById('main'));
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