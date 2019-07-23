import React from 'react'

const MovieReviews = ({ display_title, byline, summary_short, headline}) => {
  return(
    <div className="review-list">
      <div className="review">
        <h1>{display_title}</h1>
          <p>{byline}</p>
          <p>{headline}</p>
          <p>{summary_short}</p>
      </div>
    </div>
  )
}

export default MovieReviews
