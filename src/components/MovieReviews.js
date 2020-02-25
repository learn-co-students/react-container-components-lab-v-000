// Code MovieReviews Here
import React from 'react'
// import Review from './Review'

const loadReview = ({display_title, headline, summary_short}) => 
    <li className="review">
        <h3>{display_title}</h3>
        <h4>{headline}</h4>
        <p>{summary_short}</p>
        <br></br>
    </li>

// const MovieReviews = (props) => <ol className="review-list">{props.reviews.map(review => < Review display_title={review.display_title} headline={review.headline} summary_short={review.summary_short} />)}</ol>
const MovieReviews = (props) => <ol className="review-list">{props.reviews.map(loadReview)}</ol>

export default MovieReviews