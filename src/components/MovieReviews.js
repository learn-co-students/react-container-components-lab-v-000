import React from 'react'

const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list">
          {reviews.map(review => 
            <div className="review"> 
              <h3>{review.headline}</h3>
              <h5>{review.byline}</h5>
              <p>{review.summary_short}</p>
            </div>
          )}
    </div>
  )
}

export default MovieReviews

