import React from 'react'
import ReactDOM from 'react-dom'
import ProductPage from './ProductPage'
import {Spring} from 'react-spring/renderprops'
import {getProductDetails} from '../../data/products'
import {getUserReview,getLikedComments} from '../../data/user'



const Product = ({id,img,name,brand,descr,price,preview=0})=>{
  console.log(id,img,name,preview)
  const openProductPage = async () =>{
    if (preview==0){
      const productDetails = await  Promise.resolve(getProductDetails(id))
      var stock = productDetails.stock
      var img2 = productDetails.img2
      var img3 = productDetails.img3
      var reviews = productDetails.reviews
      var user_reviewed = false
      var comments = productDetails.comments;
      var reviewed_comments=[];
      if (sessionStorage.getItem("username")){
        const postResponse = await  Promise.resolve(getUserReview(id))
        user_reviewed=postResponse.status
        const commentsResponse = await Promise.resolve(getLikedComments(comments))
        reviewed_comments=commentsResponse
      }
      
      ReactDOM.render(
        <ProductPage key={id} id={id} img={img} name={name} brand={brand} descr={descr}
        price={price} stock={stock} img2={img2} img3={img3} reviews={reviews}
        comments={comments} reviewed={user_reviewed} reviewed_comments={reviewed_comments}/>,
      document.getElementById('main'));
    }
  }
  return (
    <Spring
    from = {{opacity:0,marginTop:500}}
    to ={{opacity:1,marginTop:40}}
    >
      {props => (
      
      <div  onClick={openProductPage} style={props} className={preview==0 ? "container-product d-flex flex-column align-items-center justify-content-center col-8 col-xl-2 col-lg-5 col-md-5 col-sm-5" :"container-product d-flex flex-column align-items-center justify-content-center col-3"} >
        <picture className="container container-img ">
          <img src={img} className="img-fluid " alt={name}></img>
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