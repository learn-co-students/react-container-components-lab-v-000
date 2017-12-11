import React from 'react';

// Code MovieReviews Here
const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div className="review" key={headline}>
      <a className="review-link" href={link.url}>
        {headline}
      </a>
      <br/>
      <span className="author">{byline}</span>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
