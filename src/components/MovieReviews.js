import React from 'react'

const MovieReviews = ({ reviews }) => {

  const renderReviews = () => {
    return reviews.map((review, i) => {
      return (
        <div className="review" key={i}>
          <h1>{review.headline}</h1>
          <p>{review.summary_short}</p>
        </div>
      )
      })
  }

  return (
    <div className="review-list">
      {renderReviews()}
    </div>
  )
}

export default MovieReviews
