import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => {

  var reviewList = reviews.map((review, index) => (
    <div className="review" key={index}>
      <h2>{review.display_title}</h2>
      <p>{review.headline}</p>
      <p>{review.summary_short}</p>
    </div>
  )
  )

  return (
    <div className="review-list">
      {reviewList}
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
