import React from 'react'

const MovieReviews = ({ reviews }) => (
   <div className="review-list">
      {Object.keys(reviews).map(key => {
          return (
          <div className="review" key={key}>
            <h1>{reviews[key].headline}</h1>
          </div>
          );
        })
      }
    </div>
  );

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;