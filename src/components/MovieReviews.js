// Code MovieReviews Here
import React from 'react';

const Review = ({
  headline,
  link,
  byline,
  publication_date,
  summary_short
}) => {
  return (
    <div
      key={headline}
      className="review"
    >
      <h3>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
      </h3>
      <p>{byline} -- {publication_date}</p>
      <p>{summary_short}</p>
    </div>
  );
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
