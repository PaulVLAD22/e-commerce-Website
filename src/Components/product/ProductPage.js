import React,{useState} from 'react';
import {Spring} from 'react-spring/renderprops';
import $ from 'jquery'
import ReviewsMenu from '../ReviewsMenu';


const ProductPage = ({id,img,name,brand,descr,price,stock,img2,img3,reviews,comments,likeNr,reviewed,reviewed_comments})=>{
  console.log(id)
  const imgArray=[img,img2,img3];
  const [commentText,setCommentText]=useState('');
  const [imgCurrentIndex,SetImgCurrentIndex]= useState(0);

  const addToCart=async () =>{
    const ans =await ($.post('http://localhost:8000/ReactApi/addToCart.php',{session_id:sessionStorage.getItem("session_id"),
                                                                          username:sessionStorage.getItem("username"),product_id:id}))
    console.log(ans)
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
  const addComment = async e => {
    e.preventDefault();
    const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/addComment.php',{session_id:sessionStorage.getItem("session_id"),
                                                                          username:sessionStorage.getItem("username"),product_id:id,comment_text:commentText}))
    console.log(ans)
    window.location.reload()
    //const postResponse=JSON.parse(ans)
    //window.location.reload();
    // DACA NU E LOGAT ATUNCI DAI MESAJ/ INLOCUIESTI BUTONUL/ II DESCHIZI LOG IN-UL
  }
  
  // FA SPRING PT POZE ( FA COMPONENT DACA NU MERGE SPRING LA TAG BASIC)
  
  //BUTTON DE BACK TO HOME

  //review stars
  const leaveReview = async (value) =>{
    const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/reviewProduct.php',{session_id:sessionStorage.getItem("session_id"),
                                                                          username:sessionStorage.getItem("username"),product_id:id,reviewValue:value}))
    console.log(ans)
    const postResponse=JSON.parse(ans)
    if (postResponse.status)
      document.getElementById("reviewDiv").innerHTML="<h3>Thank you for your feedback</h3>"
    else
      document.getElementById("reviewDiv").innerHTML="<h3>Error (try again)</h3>"
  }
  const likeComment = async(comment_id) =>{
    const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/likeComment.php',{session_id:sessionStorage.getItem("session_id"),
                                                                          username:sessionStorage.getItem("username"),comment_id}))
    console.log(ans)
    window.location.reload()
  }
  const onChangeCommentText = (e)=>{
    if (e.target.value.length<250)
      setCommentText(e.target.value)
  }

  return (
    <Spring
    from = {{opacity:0,marginTop:500}}
    to ={{opacity:1,marginTop:0}}
    >
      {props => (
      <div style={props} className="container-fluid fill-height d-flex flex-column flex-xl-row flex-lg-row flex-md-column flex-sm-column justify-content-center align-items-center">
        <div className="col-10 col-xl-5 col-lg-5 col-md-10 col-sm-10 bg-light product-page-imgs d-flex flex-row justify-content-center align-items-center ">
          <button className={(imgCurrentIndex===0? "btn-disabled": "btn-dark") } onClick={displayPreviousImg}>&#60;</button>
            <picture className="col-11 container-page-imgs d-flex align-items-center justify-content-center">
              <img src={imgArray[imgCurrentIndex]} className="img-fluid img-thumbnail product-img" alt={name}></img>
            </picture>
          <button className={(imgCurrentIndex===2? "btn-disabled":"btn-dark")} onClick={displayNextImg}>&#62;</button>
        </div>
        <div className="container-product-page d-flex flex-column align-items-center justify-content-center col-10 col-xl-5 col-lg-5 col-md-5 col-sm-10" >
          <ReviewsMenu reviews={reviews}></ReviewsMenu>
          <br></br>
            <section className='product-page-descr text-justify text-center'>
              <h3>Name: {name}</h3>
              <h3>Brand: {brand}</h3>
              <h3>Products: {descr}</h3>
              <h3>Price: {price}$</h3>
              <h3>Stock: {stock}</h3>
            </section>
            {sessionStorage.getItem("username")!=null 
            ? <button className="btn-dark" onClick={addToCart}>Add to cart</button>: ""}
            <div className="container-comments d-flex flex-column">
              {comments.map((comment,index)=>{
                return (
                  <span key={index} className="comment bg-light">
                    <h3 style={{fontSize:"1.2rem"}}>{comment.username}</h3>
                    {sessionStorage.getItem("username")!==null &&(
                    (reviewed_comments.includes(comment.comment_id.toString())) ?  <h3>Liked</h3> : <button className="btn-dark" onClick={()=>likeComment(comment.comment_id)}>Like</button>)
                    }
                    <h3>({comment.comment_likes} likes)</h3>
                    <h3 style={{float:"right"}}>{comment.comment_date}</h3>
                    <p>{comment.comment_text}</p>
                  </span>
                )
              })}
              {(sessionStorage.getItem("username")!==null) &&
              <>
              {reviewed!==1 &&
              <>
              <h3 className="font-weight-bold">Leave a review:</h3>
              <div className="d-flex flex-row" id="reviewDiv">
                <span onClick={()=>leaveReview(1)} id="star-1" className="fa fa-star"></span>
                <span onClick={()=>leaveReview(2)} id="star-2" className="fa fa-star"></span>
                <span onClick={()=>leaveReview(3)} id="star-3" className="fa fa-star"></span>
                <span onClick={()=>leaveReview(4)} id="star-4" className="fa fa-star"></span>
                <span onClick={()=>leaveReview(5)} id="star-5" className="fa fa-star"></span>
              </div>
              </>
              }
              <article>
              <form className='comment-form d-flex flex-column justify-content-center' onSubmit={addComment}>
                <label>Comment:</label>
                <input type='text' className='w-100' name='commentText' value={commentText} onChange={onChangeCommentText}></input>
                <br></br>
                <button type='submit' className='btn-dark w-25'>Post</button>
              </form>
              </article>
              </>
              }
            </div>
        </div>
      </div>
      )}
      </Spring>
  )
}
export default ProductPage;