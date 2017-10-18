import React from 'react';

const movieList = ({
  display_title,
  headline,
  byline,
  summary_short,
  link
}) => {
  return (
    <div key={display_title} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map(movieList)}
  </div>
};
MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
