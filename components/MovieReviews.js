const React = require('react')

const renderReview = ({headline, summary_short}) => {
  return (
    <div key={headline} className="review">
      <h3>{headline}</h3>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      {reviews.map(renderReview)}
    </div>
  )

MovieReviews.defaultProps = {reviews: []}

module.exports = MovieReviews
