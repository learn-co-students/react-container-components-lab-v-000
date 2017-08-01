// Code MovieReviews Here
import React from 'react';


const renderReview = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return(
    <div key={headline} className="review">
    <a href="{link}">{headline}</a>
    <p>{byline}</p>
    <p>{summary_short}</p>
    </div>
  )
}
const MovieReviews = ({ reviews }) => {
  return(
     <div className="review-list">
    {reviews.map(renderReview)}
  </div>
)
}

  export default MovieReviews

MovieReviews.defaultProps = {
  reviews: [],
}
