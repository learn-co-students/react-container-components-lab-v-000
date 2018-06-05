// Code MovieReviews Here
import React from 'react'


const Review = ({display_title, summary_short}) => {
  return (
    <div className="review">
      <h1>{display_title}</h1>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  // this.defaultProps = {
  //   reviews: []
  // }
    return (
      <div className="review-list">
        {reviews.map(Review)}
      </div>
    )
}

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews
