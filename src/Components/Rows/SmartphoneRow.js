import React from 'react';
import Smartphone from '../Smartphone';

const SmartphoneRow = (smartphones) =>{  
  return (
    <div className='row justify-content-around'>
      {Object.keys(smartphones).map((key,index)=>{
        return (
          <Smartphone key={index} {...smartphones[key]}  ></Smartphone>
        )
      })}
    </div>
  );
}

export default SmartphoneRow;