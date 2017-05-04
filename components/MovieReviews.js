import React from 'react'

export default function MovieReviews(props) {
  return (
    <ul className="review-list">
      {props.reviews.map((review, i) => (
        <li className="review" key={i}>
          {review}
        </li>
      ))}
    </ul>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}
