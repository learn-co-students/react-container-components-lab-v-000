const React = require('react');

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {
        reviews.map(({
          byline,
          headline,
          link,
          summary_short
        }) => {
          return (
              <div key={headline} className="review">
                <a href={link.url}>{headline}</a>
                <br/>
                <span className="author"><strong>{byline}</strong></span>
                <blockquote>{summary_short}</blockquote>
              </div>
          );
        })
      }
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;
