const React = require('react');

const MovieReviews = ({ results }) => {
  return (
    <div className="review-list">
      {
        results.map({
          display_title,
          byline,
          headline,
          summary_short,
          link} => {
            return (
              <div className="review" key={display_title}></div>
            );
          })
      }
    </div>
  );
}

module.exports = MovieReviews;
