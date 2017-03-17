const React = require('react');

const renderReview = ({
  headline,
  byline,
  mpaa_rating,
  link,
  summary_short
}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
        <span className="rating">{mpaa_rating}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map(renderReview)}
  </div>
};
MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;