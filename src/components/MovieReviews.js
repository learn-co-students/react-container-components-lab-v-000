import React from 'react';

const MovieReview = ({
  display_title,
  mpaa_rating,
  critics_pick,
  byline,
  headline,
  summary_short,
  link,
}) => (
  <div className="review">
    <header>
      <h2>{headline}</h2>
      <span>{byline}</span>
    </header>
    <blockquote>{summary_short}</blockquote>
    <span>{display_title}; Rated {mpaa_rating}</span><br />
    <span><a href={link.url}>{link.suggested_link_text}</a></span><br />
  </div>
)

const MovieReviews = ({reviews}) => (
  <div className="review-list">{reviews.map(MovieReview)}</div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
