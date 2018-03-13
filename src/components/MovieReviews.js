import React from 'react';

 const Reviews = ({review}) => {
   return(
     <div className="review">
        <p>{review}</p>
     </div>
   )
 }

 const MovieReviews = ({reviews}) => {
  return(
     <div className="review-list">
    { reviews.map(Reviews)}
   </div>)
 }

 MovieReviews.defaultProps ={
   reviews: []
 }
export default MovieReviews
