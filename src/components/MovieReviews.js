// Code MovieReviews Here
import React from 'react'
const MovieReviews = (props) => {

  const renderReviews = () => {
    return props.reviews.map((review, id) => {
      return <li className="review" key={id}>{review.display_title}</li>
    })
  }

  return (
    <div className="review-list">
    <ul>
    {renderReviews()}
    </ul>
    </div>
  )

}

export default MovieReviews
