// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  const allReviews = props.reviews.map((review, index) => {
    return <div key={index} className="review"> {review.display_title}: {review.headline}</div>
  })

    return (
      <div className="review-list">
        {allReviews}
      </div>
    );
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
