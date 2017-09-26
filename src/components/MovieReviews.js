import React from 'react';

const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list">
      {reviews.map(review => {
        return(<div className="review">
          <h3>{review.headline}</h3>
          <p className="review-summary">{review.summary_short}</p>
          <small className="byline">By: {review.byline}</small><br />
          <small><a href={review.link}>Visit Article</a></small>
        </div>);
      })}
    </div>
  );
}
MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
