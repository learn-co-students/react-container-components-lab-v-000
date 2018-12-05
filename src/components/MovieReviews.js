// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      <ul>
        {props.movies.map((movie, idx) => <li key={idx} className="review">{movie.display_title} - {movie.summary_short}</li>)}
      </ul>
    </div>
  )
}

export default MovieReviews;
