import React from 'react';
import $ from 'jquery'
const RemoveProductApp = () =>{

  const removeProduct =async ()=>{
    const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/removeProduct.php', {
      session_id:sessionStorage.getItem("session_id"),                                                                               
      username: sessionStorage.getItem("username"),
      productName:document.getElementById("productName").value,
      productBrand:document.getElementById("productBrand").value                                                                 
    }))
    console.log(ans)
  }

  return (
    <>
      <article className="d-flex flex-column justify-content-center align-items-center">
        <form  className="form d-flex flex-column justify-content-center align-items-center" >
          <div className='form-control row'>
            <label htmlFor="productName">Product Name: </label>
            <input 
            type="text" id="productName" name="productName"/>
          </div>
          <div className='form-control row'>
            <label htmlFor="productBrand">Product Brand: </label>
            <input 
            type="text" id="productBrand" name="productBrand"/>
          </div>
        </form>
        <button className="btn-dark" type="submit" onClick={removeProduct}>Remove Product</button>
      </article>
    </>
  )

}

export default RemoveProductApp;