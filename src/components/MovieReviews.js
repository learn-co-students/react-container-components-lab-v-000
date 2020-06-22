// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => <ul className="review-list">{props.reviews.map(review => <li key={review.link.url} className="review">{review.display_title}</li>)}</ul>

export default MovieReviews