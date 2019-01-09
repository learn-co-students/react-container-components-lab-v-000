// Code MovieReviews Here

import React from 'react'
//
// const MovieCard = ({ title, image, headline, shortSummary }) => (
//   <div className="movie-card">
//     <h3> {title} </h3>
//     <img src={image} />
//     <p> <strong> {headline} </strong> </p>
//     <p> {shortSummary} </p>
//     <br />
//   </div>
// )

const MovieReviews = (props) =>
  <div className="review-list">
  <div>
  {props.movies.map(movie =>
    <div>
      <h3> {movie.display_title} </h3>
       <img src={movie.multimedia.src} />
      <p> <strong> {movie.headline} </strong> </p>
      <p> {movie.summary_short} </p>
      <br />
    </div>
  )}
    </div>
  </div>


export default MovieReviews

//
// {props.movies.map(movie => { MovieCard(movie.display_title, movie.image, movie.headline, movie.summary_short) }
// )}
// {console.log(props.movies)}
