// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({movies}) => {
  return(
  <div className="review-list">

  {movies.map(movie =>
    <div key={movie.display_title} className="review">
      <h2>{movie.display_title}</h2>
      <p>MPAA Rating: {movie.mpaa_rating}</p>
      <p>{movie.headline}</p>
      <p>{movie.summary_short}</p>
      <p><a href={movie.link.url}> {movie.link.suggested_link_text}</a></p>
    </div>)}


  </div>
)}


MovieReviews.defaultProps = {
  movies: []
};
export default MovieReviews
