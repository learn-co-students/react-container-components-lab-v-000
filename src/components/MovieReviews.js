import React, { Component } from 'react';

const aReview = ({ headline, summary_short}) => {
  return (
    <div className="review" key={headline}>
      <h5>{headline}</h5>
      <p>{summary_short}</p>
    </div>
  )
}


const MovieReviews = ({reviews}) => {

  return(
    <div className="review-list">
      {reviews.map(aReview)}
    </div>
  )
}

MovieReviews.defaultProps = { reviews: React.PropTypes.array }
export default MovieReviews
