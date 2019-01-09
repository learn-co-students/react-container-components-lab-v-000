// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props) =>
  <div className="review-list">
    <div>
    {props.reviews.map(movie =>
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

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
