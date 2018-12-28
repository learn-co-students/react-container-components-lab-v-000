// Code MovieReviews Here
import React from 'react'

const MovieReviews = ( {reviews} ) => (
  <div className="review-list">
    {reviews.map((review, index) => {
      return (<div key={index} className="review">
        <h5>{review.headline}</h5>
        <p>{review.summary_short}</p>
        <p>{review.link.url}</p>
      </div>)
    })}
  </div>
)


export default MovieReviews
