// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => {

  const reviewList = reviews.map((each_review, index) => {
    return(
      <div className ="review" key={each_review.link.url}>
        <h2>{each_review.display_title}</h2>
          <p>{each_review.summary_short}</p>
      </div>
    )
  })

  return (
    <div className="review-list">
      {reviewList}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
