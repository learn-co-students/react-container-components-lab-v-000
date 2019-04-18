// Code MovieReviews Here
import React from 'react'


const MovieReviews = ({reviews}) => (
    <ul className="review-list">
      {reviews.map((review, index) =>
        <li key={index} className="review">
          {review.summary_short}
        </li>)}
    </ul>
)

export default MovieReviews
