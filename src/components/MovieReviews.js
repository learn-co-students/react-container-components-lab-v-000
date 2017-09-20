// Code MovieReviews Here
import React from 'react'

const showReview = ({display_title, headline, short_sumamry, byline }) => {
  return(
    <div key={headline} className="review">
      <h2>{display_title}</h2>
      <h3>{headline}</h3>
      <h4>By: {byline}</h4>
      <p>{short_sumamry}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return(
   <div className="review-list">
    {reviews.map(showReview)}
  </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}



export default MovieReviews;