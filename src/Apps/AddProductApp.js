import React,{useState} from 'react';
import AddProductForm from '../Components/Forms/AddProductForm';

const AddProductApp = () =>{

  return(
    <div className="d-flex align-items-center ">
      <div className="col-5 d-flex flex-column">
        <AddProductForm ></AddProductForm>
        <div className=" d-flex flex-column justify-content-center align-items-center">
        <button className="btn-dark m-2" type="submit">Preview Product</button>
        <button className="btn-dark m-2" type="submit">Add Product</button>
        </div>
      </div>
      <div className="col-7">
      <h2>AICI FA PRODUCT CU CE A INTRODUS EL</h2>
      </div>
    </div>
  )

}
export default AddProductApp;


// FA PHP-UL SI GENEREAZA PRODUCT -UL