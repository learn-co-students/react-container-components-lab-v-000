import React from 'react'

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(movie =>
        <div key={movie.headline} className="review">
          <h2>{movie.headline}</h2>
          <h3>{movie.display_title}</h3>
          <h4>{movie.byline}</h4>
          <p>{movie.summary_short}</p>
        </div>
      )}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
