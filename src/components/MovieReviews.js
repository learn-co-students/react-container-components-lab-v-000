// Code MovieReviews Here
import React from 'react';

const Review = ({ title }) => {
  return <div className='review'><h1>{ title }</h1></div>
}

const MovieReviews = ({ reviews }) => {
  return(
    <div className="review-list">
      { reviews.results.map(review => <Review title={review.display_title} />) }
    </div>
  )
}

// function MovieReviews(props) {
//   let reviewList = []
//   // TODO: finish this
//
// }

export default MovieReviews
