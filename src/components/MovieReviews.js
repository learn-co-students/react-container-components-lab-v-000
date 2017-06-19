import React from 'react';

const MovieReviews = function(props) {
  return (
    <ul className="review-list">
      {props.reviews.map((review, i) => 
        <li key={i} className="review">{review.display_title}</li>
      )}
    </ul>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;