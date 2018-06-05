// Code MovieReviews Here

import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((review) => {
        return (<p className="review"> {review.headline} </p>)
      }
      )}
    </div>
  )


}


MovieReviews.defaultProps = {
  reviews: []
}

// Below not needed
MovieReviews.propTypes = {
  reviews: PropTypes.array
}


export default MovieReviews
