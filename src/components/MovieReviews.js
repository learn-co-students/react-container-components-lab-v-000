import React from 'react';

const Review = ({
  display_title,
  headline,
  mpaa_rating,
  byline,
  link,
  summary_short,
  multimedia
}) => {
  return (

    <div key={headline} className="review">
      <header>
        <h3>{display_title}</h3>
        <img src={multimedia.src} /><br />
        <a className="review-link" href={link.url}>{headline}</a><br/>
        <span className="author">{byline}</span>
        <p>Summary: {summary_short}</p><br />
      </header>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;