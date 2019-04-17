// Code MovieReviews Here
import React, {Component} from 'react';



const MovieReviews = ({ reviews }) => (
  <div className="review-list">
   {reviews.map(review => <div className="review">
     <h2>review.headline</h2>
     <p>review.sumamry_short</p>
     </div>
   )}
  </div>
)


export default MovieReviews
