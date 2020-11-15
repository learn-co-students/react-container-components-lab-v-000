// Code MovieReviews Here
import React from 'react'

export default function MovieReviews({reviews}) {
    return (
        <div className="review-list">
            {Object.keys(reviews).map( key => {
                return(
                 <div className="review" key={key}>
                     <h1>{reviews[key].headline}</h1>
                 </div>
                )
              }
             )}
        </div>
    )
}
MovieReviews.defaultProps = {
    reviews: []
  };