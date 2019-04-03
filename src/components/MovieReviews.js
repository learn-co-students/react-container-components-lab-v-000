import React from 'react';

const MovieReviews = props =>  {
  return (
    <div className="review-list">
      <ul>
        {props.reviews.map((movie, index) => (
          <li key={index} className="review">
            <h2>{movie.display_title}</h2>
            <h5>Published on {movie.publication_date} by {movie.byline}</h5>
            <p>{movie.summary_short}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
