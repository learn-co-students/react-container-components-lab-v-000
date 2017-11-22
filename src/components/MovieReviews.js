// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return (
      <ul className="review-list">
        {props.reviews && props.reviews.map (review => (<li className="review">{review.display_title} - {review.summary_short}</li>))}
      </ul>
    )
  }

  MovieReviews.defaultProps = {reviews: []}

  export default MovieReviews