import React from 'react';

const MovieReviews = (props) => {
  console.log(props)
    return (
      <div className="review-list">
        <div className="review"></div>
      </div>
    );
  }

MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews;