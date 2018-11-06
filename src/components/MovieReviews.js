import React from 'react'

const MovieReviews = ({reviews}) => {

  let reviewFormat = reviews.map(review =>
    <div className="review" key={review.id}><h3> {review.display_title} </h3>
    <p>{review.summary_short}</p></div>
  )

  return (
    <div className="review-list" >
      <ol>
        {reviewFormat}
      </ol>
    </div>
  )
}

export default MovieReviews
