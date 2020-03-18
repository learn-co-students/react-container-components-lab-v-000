import React from 'react';

const Movie = ({ movieTitle, movieCritic, reviewHeadline, reviewLink }) => (
  <div className="review">
    <h3>{ reviewHeadline }</h3>
    Review of { movieTitle } by { movieCritic } <br /> <a href={ reviewLink } target="_blank">{ reviewLink }</a>
  </div>
)

export default Movie;
