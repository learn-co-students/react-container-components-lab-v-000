// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({title, content}) => {
  return (
    <div className="review-list">
      <div className="review">
        <p></p>
        <div><strong>{title}</strong></div>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default MovieReviews
