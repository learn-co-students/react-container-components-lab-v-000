// Code MovieReviews Here
import React from 'react'
import Review from './Review'

// const loadReviews = (reviews) => {
//     reviews.map(review => < Review display_title={review.display_title} headline={review.headline} summary_short={review.summary_short} />)
// }

const MovieReviews = (props) => <ol className="review-list">{props.reviews.map(review => < Review display_title={review.display_title} headline={review.headline} summary_short={review.summary_short} />)}</ol>

export default MovieReviews