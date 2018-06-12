import React from 'react';
// import PropTypes from 'prop-types';

const MovieReviews = ( {reviews} ) => 
<div className="review-list">
  {reviews.map((review) =>
    <div key={review.headline} className="review">
      <header>
        <a className="review-link" href={review.link.url}>{review.headline}</a><br/>
        <span className="author">{review.byline}</span>
        <blockquote className="summary">{review.summary_short}</blockquote><br/>
      </header>
    </div>
  )}
</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;