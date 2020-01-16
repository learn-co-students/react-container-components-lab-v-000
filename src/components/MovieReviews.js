import React from 'react'

const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list">
      {reviews.map(review => {
        return(
          <div className="review" key={review.display_title}>
            <h2>{review.display_title}</h2>,
            <h3>{review.headh3ne}</h3>,
            <h4>{review.byline}</h4>,
            <p>{review.summary_short}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews
