import React from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((review, i) => (
        <div className="review" key={i}>
          <h3><a href={review.link.url}>{review.headline}</a></h3>
          <p><strong>Movie:</strong> {review.display_title}</p>
          <p><strong>Written by:</strong> {review.byline}</p>
          <p>{review.summary_short}</p>
        </div>
      ))}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
