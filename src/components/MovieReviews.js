// Code MovieReviews Here
import React, { Component } from 'react';

// grabReviews(reviewsArr){
//   return(reviewsArr.map(function(r){
//     return <div>the review</div>
//   });
// }

const MovieReviews = ({reviews}) => (
  <div className='review-list'>
    {reviews.map(function(r){
        return <div className='review'>{r.display_title}</div>
    })
  }
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
