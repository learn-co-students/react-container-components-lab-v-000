import React from 'react';

const Movie = ({
  display_title,
  byline,
  link,
  summary_short
}) => {
  return ( 
<div className="movie">

    <div className="review" key={display_title}></div>
    <a className="review-link" href={link.url}>{display_title}</a>
    <br/>
    <p className="author">{byline}</p>
    <p key={summary_short}>{summary_short}</p>

</div>

  );
};

const MovieReviews = ({ reviews }) => 
    <div className="review-list">
      { reviews.map(Movie) }</div>;
  

  MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews;