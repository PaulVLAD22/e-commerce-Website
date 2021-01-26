import React,{useState} from 'react';

const AddProductForm = () =>{
  const handleSubmit=()=>{

  }
  return(
    <>
      <article>
      <form  className="productForm d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className='form-control row'>
          <label htmlFor="productName">Product Name : </label>
          <input
           type="text" id="productName" name="productName"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="productBrand">Product Brand : </label>
          <input 
           type="text" id="productBrand" name="productBrand"/>
        </div>
       
        <div className='form-control row '>
          <label htmlFor="productDescription">Product Description : </label>
          <textarea 
           type="textarea" id="productDescription" name="productDescription"/>
        </div>
       
        <div className='form-control row'>
          <label htmlFor="productPrice">Product Price : </label>
          <input 
           type="productPrice" id="productPrice" name="productPrice"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="productStock">Product Stock : </label>
          <input 
           type="productStock" id="productStock" name="productStock"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="productPhoto1">Product Photo 1: </label>
          <input 
           type="productPhoto1" id="productPhoto1" name="productPhoto1"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="productPhoto2">Product Photo 2: </label>
          <input 
           type="productPhoto2" id="productPhoto2" name="productPhoto2"/>
        </div>
        <div className='form-control row'>
          <label htmlFor="productPhoto3">Product Photo 3: </label>
          <input 
           type="productPhoto3" id="productPhoto3" name="productPhoto3"/>
        </div>

      </form>
    </article>
    </>
  )

}
export default AddProductForm;