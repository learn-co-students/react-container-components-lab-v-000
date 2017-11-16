import React from 'react';

const MovieReviews = ({ reviews, listDescription }) => {
    return (
      <div className="review-list">
        <h3>{listDescription}</h3>
        {reviews.map(review => (
          <div className="review">
            <h4>{review.display_title}</h4>
            <p>{review.headline}</p>
            <p>{review.summary_short}</p>
            <p>Opening Date: {review.opening_date}</p>
          </div>
        ))}
      </div>
    )
  }


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
