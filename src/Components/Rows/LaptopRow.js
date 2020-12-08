import React from 'react';
import Laptop from '../Laptop';

const LaptopRow = (laptops) =>{  
  return (
    <div className='row justify-content-around'>
      {Object.keys(laptops).map((key,index)=>{
        return (
          <Laptop key={index} {...laptops[key]}  ></Laptop>
        )
      })}
    </div>
  );
}

export default LaptopRow;