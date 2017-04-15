const React = require('react');

// Renders review in specified format
const renderReview = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className='review'>
      <header>
        <a className='review-link' href={link.url}>
          {headline}
        </a>
        <br/>
        <span className='author'>{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

// Returns div of a list of reviews, each review rendered in renderReview format
const MovieReviews = ({ reviews }) => {
  return <div className='review-list'>
    {reviews.map(renderReview)}
  </div>
};

// Sets default props for movie reviews
MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;
