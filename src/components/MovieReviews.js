// Code MovieReviews Here
import React from 'react'
 const MovieReviews = (props) => {
    return(
    <div className="review-list">
      {props.reviews.map((review, index)=> <div className="review" key={index}>{review.display_title} {review.critics_pick}</div>)}
    </div>
  )}
 export default MovieReviews
