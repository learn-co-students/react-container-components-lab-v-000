import React from 'react'

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
    {reviews.map(
      (review, i) =>
        <div className="review" key={i}>
          {review['display_title']}
          <br></br>
          {review['summary_short']}
        </div>
      )}
    </div>
  )
}
export default MovieReviews
