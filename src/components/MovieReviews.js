// Code MovieReviews Here
import React from 'react'

const Review = ({ display_title, headline, summary_headline}) => {
  return (
    <div className="review">
      <h2>{ display_title}</h2>
      <h4>{ headline }</h4>
      <p>{ summary_headline }</p>
    </div>
  )
}

 const MovieReviews = ({ reviews }) =>
   <div className="review-list">
     { reviews.map(Review)}
   </div>


MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews;
