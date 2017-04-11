const React = require('react');

// Renders the review in the specific format
const renderReview = ({headline, byline, link, summary_short}) => {
  return (
    <div className="review">
      <a className="review-link" href={link.url}>{headline}</a>
      <p className="author">{byline}</p>
      <br />
      <p>{summary_short}</p>
    </div>
  );
}

const MovieReviews = ({ reviews }) => {
  // Returns a div with a list of reviews each
  // rendered in the format from renderReview
  return <div className="review-list">
    {reviews.map(renderReview)}
  </div>

};

// Sets default props for movie reviews
MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;