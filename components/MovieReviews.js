const React = require('react');

const renderReview = ({ headline, byline, summary_short, link }) => {
  return (
    <div className="review" key={headline}>
      <a href={link.url} className="review-link">{headline}</a>
      <br />
      <span className="author">{byline}</span>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(renderReview)}
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;
