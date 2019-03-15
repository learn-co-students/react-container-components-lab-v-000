// Code MovieReviews Here
import React from 'react'

const Review = ({ title, summary }) => (
  <div className="review">
    <h3>{ title }</h3>
    <h4>{ summary }</h4>
  </div>
)


//
// const ReviewList = ({reviews}) => (
//   <div className="review-list">
//     { reviews.map(review => <Review title={review.display_title} summary={review.summary_short} />) }
//   </div>
// )

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    { reviews.map(review =>
      <div className="review">
      <h3>{ review.display_title }</h3>
      <h4>{ review.summary_short }</h4>
    </div>) }
  </div>
)
  // <div className="review-list" ><ReviewList reviews={reviews} /></div>;


export default MovieReviews
