// Code MovieReviews Here
// Your MovieReviews component should be stateless and functional.
//
// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.

import React from 'react'

const MovieReviews = props => {
  return (
    <div className = "review-list">

    {props.reviews && props.reviews.map( review =>
        <div className="review" key={review.headline}>
        <h1>{review.display_title}</h1>
        <p >{review.summary_short}</p>
      </div>
    )}
    </div>
    )
}

export default MovieReviews
