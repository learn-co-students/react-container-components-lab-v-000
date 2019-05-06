// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map((movie) => (
        <div className="review" key={movie.headline}>
          <h1>{movie.headline}</h1>
          <h3>{movie.byline}</h3>
          <p>{movie.summary_short}</p>
        </div>
        )
      )}
    </div>
  )
}


export default MovieReviews
