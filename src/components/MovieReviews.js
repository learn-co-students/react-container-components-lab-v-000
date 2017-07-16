import React from 'react';

const MovieReviews = ({reviews}) => {
    return (
      <div className="review-list">
        <ul>
          <li classNme="review"></li>
        </ul>
      </div>
    );
  }

MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews;