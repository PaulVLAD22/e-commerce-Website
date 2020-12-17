import React from 'react'


const ReviewsMenu= ({reviews}) =>{
    return (
      <div className="container d-flex flex-column justify-content-around align-items-center">
        {Object.keys(reviews).reverse().map((key)=>{
          var sumTemp=0;
          Object.keys(reviews).map((key)=>{sumTemp+=parseInt(reviews[key])})
          const percentOfSum=(100*reviews[key])/sumTemp
          return (
            <div key={key} className="row review-row">
              <h3>{key +" stars"}</h3>
              <div className="bar-container">
                <div className="bar" style={{width:percentOfSum+"%",height:"18px"}}></div>
              </div>
              <h3>{reviews[key]}</h3>
            </div>
          )
        })
        }
      </div>
    );
}
export default ReviewsMenu