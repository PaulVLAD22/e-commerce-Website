import React from 'react';
import Tv from '../Tv';

const TvRow = (tvs) =>{  
  return (
    <div className='row justify-content-around'>
      {Object.keys(tvs).map((key,index)=>{
        return (
          <Tv key={index} {...tvs[key]}  ></Tv>
        )
      })}
    </div>
  );
}

export default TvRow;