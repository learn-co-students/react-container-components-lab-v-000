import React from 'react';

const MovieReviews = ({ movies }) => (
    <div className="movie-reviews">
      { movies.map(movie => 
        <div class="movie">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
        </div>
        ) };
    </div>
  )

export default MovieReviews;