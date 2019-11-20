import React from 'react'

const MovieReviews = ( {reviews} ) => {
  return (
    <div className="review-list">
    <ul>
    {reviews.map((review, index) =>
      <div className="review" key={index}>
        <h3>{review.display_title}</h3>
        <p>Critics' Pick: {review.critics_pick}</p>
        <p>By: {review.byline}</p>
        <p>Summary: {review.summary_short}</p>
        </div>
      )}
      </ul>
   </div>
 )
}

export default MovieReviews;
