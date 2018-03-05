// Code MovieReviews Here

import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = (props) => {
  const renderedEls = props.reviews.map((review, i) => {
    return (<MovieReview review={review} key={i} />)
  }, this);

  return (
    <div className="review-list" >
      {renderedEls}
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: [],
}

export default MovieReviews;
