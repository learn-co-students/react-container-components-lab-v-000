import React from 'react';
import MovieReviews from './MovieReviews'


const Movie = ({ title, byline, headline }) => (
  <div className="review">
    <h3>{title}</h3>
    <p>{byline}</p>
    <p>{headline}</p>

  </div>
)

export default Movie