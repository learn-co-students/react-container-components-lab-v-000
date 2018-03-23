import React from 'react';

const Review = ({
  review_title,
  review_message,
  author
}) => {
    return (
      <div className="review">
        <h3> review_title </h3>
        <p> review_message </p>
        <p> author </p>
      </div>
    )
};

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
