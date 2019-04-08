// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  return(
    <div className="review-list">
      {props.reviews.map(review => (
        <div className="review" key={review.headline}>
          <h2>{review.headline}</h2>
          <p>{review.summary_short}</p>
          {review.multimedia !== null ? (<img src={review.multimedia.src} alt={review.display_title}/>) : null }
        </div>
    ))}
   </div>
  )
}

export default MovieReviews
