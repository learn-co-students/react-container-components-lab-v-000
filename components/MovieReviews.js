const React = require('react')

function makeReview(soloReview) {
  const { display_title, headline, byline, summary_short } = soloReview;
  return (
    <li className="review">
      <h3>{display_title}</h3>
      <p>{headline}, by {byline}</p>
      <p>{summary_short}</p>
    </li>
  );
}

const MovieReviews = ({ reviews }) => {
  return (
    <ul className="review-list">
      {reviews.map((review) => makeReview(review) )}
    </ul>
  );
}

MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;
