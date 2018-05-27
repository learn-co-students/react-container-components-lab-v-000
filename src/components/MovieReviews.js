import React from 'react';

const MovieReviews = (props) => (
  <div className="review-list">
    {props.reviews.map((review, i) => <div className="review" key={i}>{review.headline}</div>)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
