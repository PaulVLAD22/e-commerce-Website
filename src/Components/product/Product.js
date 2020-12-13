import React from 'react'
import ReactDOM from 'react-dom'
import ProductPage from './ProductPage'
import {Spring} from 'react-spring/renderprops'




const Product = ({id,img,name,brand,descr,price})=>{
  const openProductPage = () =>{
    console.log(id,img,name,brand,descr,price);
    var stock = 2
    var img2 = "https://s13emagst.akamaized.net/products/31486/31485260/images/res_189c46500218b3ae33ebe820ffbbe643.jpg?width=450&height=450&hash=5E470DA47E018DE329FC6BD8BEEC7B4C"
    var img3 = "https://s13emagst.akamaized.net/products/31486/31485260/images/res_82e9b64414d9c52cdd2077b1da5e7f98.jpg?width=450&height=450&hash=568BFC4E61606D2CAD65D34162713D96"
    var review =3.5
    var comments=[{user:'User123',likesNr:'20',comment:"It's ok"}]; // fa-l array de obiecte fiecare ob are user-ul like-urile si comentu
    ReactDOM.render(
      <ProductPage key={id} img={img} name={name} brand={brand} descr={descr}
      price={price} stock={stock} img2={img2} img3={img3} review={review}
      comments={comments}/>,
    document.getElementById('main'));
    //get cu query in product_details si iei restul datelor // post si cu ajutorul datelor de la post iau din php product_details.
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