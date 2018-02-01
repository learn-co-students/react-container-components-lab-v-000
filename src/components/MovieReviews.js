import React from 'react';
import PropTypes from 'prop-types';


const Review = ({ display_title, byline, headline, summary_short}) => {
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <h4>{byline}</h4>
      <h4>{headline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}


const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => <Review display_title={review.display_title} byline={review.byline} headline={review.headline} summary_short={review.summary_short} />)}
  </div>
);


MovieReviews.defaultProps ={
  reviews: []
}

MovieReviews.propTypes = {
  reviews: PropTypes.shape({
    display_title: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    summary_short: PropTypes.string.isRequired
  })
}


export default MovieReviews;
