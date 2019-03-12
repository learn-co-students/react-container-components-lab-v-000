import React from 'react'

  const Movie = ({ display_title, mpaa_rating, summary_short }) => {
    return (
      <div key={display_title} className="review">
        <h1>{ display_title }</h1>
        <h4>{ mpaa_rating }</h4>
        <p>{ summary_short }</p>
      </div>
    )
  }

  const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      { reviews.map(Movie)}
    </div>
  )

export default MovieReviews
