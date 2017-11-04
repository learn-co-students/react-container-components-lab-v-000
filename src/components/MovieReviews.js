import React from 'react';

const MovieReviews = ({reviews}) => {

  MovieReviews.defaultProps = {
    reviews: "This movie hasn't been reviewed yet."
  }

  return (
    <div className="review-list">
    {reviews.map(review => <h1 className="review">review.display_title</h1>)}
    </div>
  )
}

export default MovieReviews;
