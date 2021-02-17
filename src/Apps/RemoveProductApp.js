import React from 'react';

const RemoveProductApp = () =>{
  return (
    <>
      <article>
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
          <button className="btn-dark" type="submit">Check for item</button>

          <button className="btn-dark" type="submit">Remove Product</button>
        </form>
      </article>
    </>
  )

}

export default RemoveProductApp;