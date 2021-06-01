// // Code MovieReviews Here
import React from 'react'

const renderReview = ({
    headline,
    byline,
    summary_short
}) => {
    return (
        <div className="review">
            <h2>{headline}</h2>
            <h3>{byline}</h3>
            <p>{summary_short}</p>
        </div>
    )
}
const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(renderReview)}</div>

export default MovieReviews