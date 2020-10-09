import React from 'react';

const MovieReviews = ({ movies }) => (
    <div className="movie-reviews">
      { movies.map(movie => 
        <div className="movie">
            <h2 key={movie.title}>{movie.display_title}</h2>
            <p key={movie.description}>{movie.summary_short}</p>
        </div>
        ) };
    </div>
  )

export default MovieReviews;